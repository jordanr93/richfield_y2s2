#!/usr/bin/env python3
"""Build a searchable Markdown reference library from the local study-guide PDFs."""

from __future__ import annotations

import csv
import datetime as dt
import html
import os
import re
import shutil
import subprocess
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Iterable
from urllib.parse import quote

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
LIBRARY = ROOT / "reference-library"
PDFTOTEXT = Path(
    "/Users/rix/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/poppler/poppler/bin/pdftotext"
)


DOCS = [
    {
        "source_file": "PROGRAMMING 622 STUDY GUIDE.pdf",
        "slug": "programming-622-study-guide",
        "title": "Programming 622 Study Guide",
        "module": "Programming 622",
        "toc_pages": (4, 6),
    },
    {
        "source_file": "2026 Information Systems 622 Study Guide .pdf",
        "slug": "information-systems-622-study-guide",
        "title": "Information Systems 622 Study Guide",
        "module": "Information Systems 622",
        "toc_pages": (3, 7),
    },
    {
        "source_file": "MACHINE LEARNING 600 STUDY GUIDE.pdf",
        "slug": "machine-learning-600-study-guide",
        "title": "Machine Learning 600 Study Guide",
        "module": "Machine Learning 600",
        "toc_pages": (4, 5),
    },
    {
        "source_file": "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf",
        "slug": "internet-programming-622-study-guide",
        "title": "Internet Programming 622 Study Guide",
        "module": "Internet Programming 622",
        "toc_pages": (4, 6),
    },
    {
        "source_file": "2026 Big data  IOT 600 Study Guide.pdf",
        "slug": "big-data-iot-600-study-guide",
        "title": "Big Data and IoT 600 Study Guide",
        "module": "Big Data and IoT 600",
        "toc_pages": (4, 8),
    },
]


STOPWORDS = {
    "about",
    "able",
    "across",
    "after",
    "algorithm",
    "algorithms",
    "also",
    "and",
    "application",
    "applications",
    "are",
    "assessment",
    "based",
    "between",
    "chapter",
    "class",
    "classes",
    "common",
    "concept",
    "concepts",
    "data",
    "defined",
    "development",
    "different",
    "document",
    "during",
    "each",
    "example",
    "exercise",
    "for",
    "from",
    "function",
    "guide",
    "how",
    "important",
    "information",
    "into",
    "introduction",
    "learning",
    "management",
    "module",
    "more",
    "one",
    "other",
    "overview",
    "page",
    "pages",
    "pdf",
    "printed",
    "program",
    "programming",
    "question",
    "questions",
    "reference",
    "references",
    "review",
    "section",
    "should",
    "student",
    "study",
    "summary",
    "system",
    "systems",
    "that",
    "the",
    "their",
    "these",
    "this",
    "topic",
    "using",
    "with",
    "within",
}

LEGISLATION_TERMS = [
    "Act",
    "Regulation",
    "Regulations",
    "Policy",
    "Policies",
    "Guideline",
    "Guidelines",
    "Standard",
    "Standards",
    "Framework",
    "Frameworks",
    "ISO",
    "IEEE",
    "GDPR",
    "POPIA",
    "HIPAA",
    "W3C",
    "HPCSA",
    "Higher Education Act",
    "Registration Certificate",
    "Cyberethics",
]


@dataclass
class Section:
    document: str
    module: str
    source_file: str
    doc_slug: str
    heading: str
    clean_title: str
    number: str
    level: int
    toc_printed_page: int | None
    pdf_start: int
    pdf_end: int
    printed_start: str
    printed_end: str
    start_line: int = 0
    end_line: int | None = None
    chapter: str = ""
    filename: str = ""
    relpath: str = ""
    keywords: list[str] = field(default_factory=list)
    text: str = ""
    word_count: int = 0


def run_pdftotext(pdf: Path) -> list[str]:
    proc = subprocess.run(
        [str(PDFTOTEXT), "-layout", str(pdf), "-"],
        cwd=ROOT,
        check=True,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    pages = proc.stdout.split("\f")
    if pages and not pages[-1].strip():
        pages.pop()
    return pages


def yaml_scalar(value: object) -> str:
    if value is None:
        return '""'
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return f'"{text}"'


def slugify(text: str, max_len: int = 80) -> str:
    text = text.replace("C++", "cpp").replace("c++", "cpp")
    text = text.replace("k-NN", "knn").replace("k-nn", "knn")
    text = text.replace("&", " and ")
    text = re.sub(r"[^A-Za-z0-9]+", "-", text.lower()).strip("-")
    text = re.sub(r"-{2,}", "-", text)
    return (text[:max_len].rstrip("-") or "section")


def normalize(text: str) -> str:
    text = text.replace("–", "-").replace("—", "-").replace("’", "'")
    text = re.sub(r"[^a-z0-9+#]+", " ", text.lower())
    return re.sub(r"\s+", " ", text).strip()


def clean_heading(raw: str) -> str:
    heading = raw.strip()
    heading = re.sub(r"\s+", " ", heading)
    heading = re.sub(r"^\d+\s+(?=TOPIC\s+\d+[: ]|Chapter\b)", "", heading, flags=re.I)
    heading = re.sub(r"^\d+(?:\.\d+)*\s+", "", heading)
    heading = re.sub(r"^Topic\s+(\d+)\s+", r"Topic \1: ", heading, flags=re.I)
    heading = re.sub(r":(?=\S)", ": ", heading)
    heading = re.sub(r"\s+[:.]\s*$", "", heading)
    return heading.strip()


def extract_number(raw: str) -> str:
    word_numbers = {
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9",
        "ten": "10",
    }
    raw = raw.strip()
    m = re.match(r"^(?:\d+\s+)?(?:TOPIC|Topic)\s+(\d+)\b", raw)
    if m:
        return m.group(1)
    m = re.match(r"^(?:\d+\s+)?(?:CHAPTER|Chapter)\s+(\d+|One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten)\b", raw)
    if m:
        value = m.group(1)
        return word_numbers.get(value.lower(), value)
    m = re.match(r"^(\d+(?:\.\d+)*)\b", raw)
    if m:
        return m.group(1)
    return ""


def section_level(raw: str, number: str) -> int:
    if re.match(r"^(?:\d+\s+)?(?:TOPIC|Topic|CHAPTER|Chapter)\b", raw.strip()):
        return 1
    if number:
        return number.count(".") + 1
    return 2


def parse_toc_entries(toc_text: str) -> list[dict]:
    entries: list[dict] = []
    seen: set[tuple[str, int | None]] = set()
    for line in toc_text.splitlines():
        raw = line.strip()
        if not raw:
            continue
        if raw.lower() in {"contents", "table of contents"}:
            continue
        if re.fullmatch(r"[ivxlcdmIVXLCDM]+|\d+", raw):
            continue
        m = re.match(r"^(?P<left>.+?)\s*(?:\.|\s){4,}\s*(?P<page>\d+)\s*$", raw)
        if not m:
            # Capture appendix-like headings that sometimes appear without dotted leaders.
            if re.match(r"^(References|Exercise|Exercises|Review Questions|Addendum)\b", raw, re.I):
                entries.append(
                    {
                        "heading": raw,
                        "clean_title": clean_heading(raw),
                        "number": extract_number(raw),
                        "level": 2,
                        "printed_page": None,
                    }
                )
            continue
        left = re.sub(r"\s+", " ", m.group("left")).strip(" .")
        page = int(m.group("page"))
        if len(left) < 3:
            continue
        key = (normalize(left), page)
        if key in seen:
            continue
        seen.add(key)
        number = extract_number(left)
        entries.append(
            {
                "heading": left,
                "clean_title": clean_heading(left),
                "number": number,
                "level": section_level(left, number),
                "printed_page": page,
            }
        )
    return entries


def page_printed_label(page_text: str, fallback: int) -> str:
    isolated: list[str] = []
    for line in page_text.splitlines():
        s = line.strip()
        if re.fullmatch(r"\d{1,4}|[ivxlcdmIVXLCDM]{1,12}", s):
            isolated.append(s)
    if isolated:
        return isolated[-1]
    return str(fallback)


def printed_to_pdf_map(pages: list[str]) -> dict[int, int]:
    mapping: dict[int, int] = {}
    for idx, text in enumerate(pages, start=1):
        label = page_printed_label(text, idx)
        if label.isdigit():
            mapping.setdefault(int(label), idx)
    return mapping


def locate_heading(pages: list[str], entry: dict, mapped_page: int) -> tuple[int, int]:
    title_norm = normalize(entry["clean_title"])
    heading_norm = normalize(entry["heading"])
    num = entry["number"]
    search_pages = range(max(1, mapped_page - 3), min(len(pages), mapped_page + 3) + 1)
    for page_no in search_pages:
        lines = pages[page_no - 1].splitlines()
        for line_no, line in enumerate(lines):
            line_norm = normalize(line)
            if not line_norm:
                continue
            if title_norm and title_norm in line_norm:
                return page_no, line_no
            if heading_norm and heading_norm in line_norm:
                return page_no, line_no
            if num and line_norm.startswith(normalize(num)) and title_norm[:28] in line_norm:
                return page_no, line_no
    return mapped_page, 0


def keywords_for(title: str, body: str, module: str) -> list[str]:
    body = re.sub(r"\[PDF page \d+; printed page [^\]]+\]", " ", body)
    candidates = re.findall(r"[A-Za-z][A-Za-z0-9+#'-]{2,}", f"{title} {module} {body[:2500]}")
    counts = Counter(
        w.lower().strip("'")
        for w in candidates
        if len(w) > 2 and w.lower() not in STOPWORDS and not w.isdigit()
    )
    chosen = [word for word, _ in counts.most_common(12)]
    return sorted(set(chosen), key=chosen.index)


def phrase_keywords(title: str) -> list[str]:
    cleaned = clean_heading(title)
    phrases = [cleaned]
    bare = re.sub(r"^(Topic|Chapter)\s+\w+\s*:\s*", "", cleaned, flags=re.I)
    if bare != cleaned:
        phrases.append(bare)
    for part in re.split(r"[:;/,()\\[\\]-]+", bare):
        part = part.strip()
        if len(part.split()) >= 2 and len(part) >= 7:
            phrases.append(part)
    return list(dict.fromkeys(phrases))


def make_sections(doc: dict, pages: list[str], reader: PdfReader) -> list[Section]:
    toc_start, toc_end = doc["toc_pages"]
    toc_text = "\n".join(pages[toc_start - 1 : toc_end])
    entries = parse_toc_entries(toc_text)
    pmap = printed_to_pdf_map(pages)

    sections: list[Section] = []
    chapter = ""
    used_names: Counter[str] = Counter()
    for entry in entries:
        printed = entry["printed_page"]
        mapped = pmap.get(printed, printed or toc_end + 1)
        mapped = min(max(1, mapped), len(pages))
        pdf_start, start_line = locate_heading(pages, entry, mapped)
        if entry["level"] == 1:
            chapter = entry["clean_title"]
        sort_prefix = entry["number"].replace(".", "-") if entry["number"] else f"{len(sections)+1:02d}"
        base = slugify(entry["clean_title"])
        filename = f"{sort_prefix}-{base}.md" if sort_prefix else f"{base}.md"
        used_names[filename] += 1
        if used_names[filename] > 1:
            filename = filename.replace(".md", f"-{used_names[filename]}.md")
        sections.append(
            Section(
                document=doc["title"],
                module=doc["module"],
                source_file=doc["source_file"],
                doc_slug=doc["slug"],
                heading=entry["heading"],
                clean_title=entry["clean_title"],
                number=entry["number"],
                level=entry["level"],
                toc_printed_page=printed,
                pdf_start=pdf_start,
                pdf_end=pdf_start,
                printed_start=page_printed_label(pages[pdf_start - 1], pdf_start),
                printed_end=page_printed_label(pages[pdf_start - 1], pdf_start),
                start_line=start_line,
                chapter=chapter or entry["clean_title"],
                filename=filename,
            )
        )

    for i, section in enumerate(sections):
        nxt = sections[i + 1] if i + 1 < len(sections) else None
        if nxt:
            section.pdf_end = max(section.pdf_start, nxt.pdf_start - (0 if nxt.pdf_start == section.pdf_start else 1))
            if nxt.pdf_start == section.pdf_start:
                section.end_line = nxt.start_line
            else:
                section.end_line = None
        else:
            section.pdf_end = len(pages)
            section.end_line = None
        section.printed_start = page_printed_label(pages[section.pdf_start - 1], section.pdf_start)
        section.printed_end = page_printed_label(pages[section.pdf_end - 1], section.pdf_end)
        section.text = section_text(pages, section)
        section.word_count = len(re.findall(r"\b\w+\b", section.text))
        section.keywords = keywords_for(section.clean_title, section.text, section.module)
        section.relpath = f"documents/{doc['slug']}/sections/{section.filename}"
    return sections


def section_text(pages: list[str], section: Section) -> str:
    chunks: list[str] = []
    for page_no in range(section.pdf_start, section.pdf_end + 1):
        lines = pages[page_no - 1].splitlines()
        start = section.start_line if page_no == section.pdf_start else 0
        end = section.end_line if page_no == section.pdf_end and section.end_line is not None else len(lines)
        body = "\n".join(lines[start:end]).strip("\n")
        if body.strip():
            printed = page_printed_label(pages[page_no - 1], page_no)
            chunks.append(f"[PDF page {page_no}; printed page {printed}]\n{body}")
    return "\n\n".join(chunks).strip()


def metadata_dates(reader: PdfReader) -> tuple[str, str]:
    meta = reader.metadata or {}
    created = parse_pdf_date(str(meta.get("/CreationDate", "")))
    modified = parse_pdf_date(str(meta.get("/ModDate", "")))
    version = []
    if created:
        version.append(f"created {created}")
    if modified:
        version.append(f"modified {modified}")
    return "; ".join(version) or "not stated", created or modified or "not stated"


def parse_pdf_date(value: str) -> str:
    m = re.match(r"D:(\d{4})(\d{2})(\d{2})", value)
    if not m:
        return ""
    return f"{m.group(1)}-{m.group(2)}-{m.group(3)}"


def md_link(section: Section, context: str = "root") -> str:
    if context == "indexes":
        path = f"../{section.relpath}"
    elif context == "doc":
        path = f"sections/{section.filename}"
    else:
        path = section.relpath
    return f"[{section.clean_title}]({path})"


def section_link_from(current: Section, target: Section) -> str:
    if current.doc_slug == target.doc_slug:
        path = target.filename
    else:
        path = f"../../{target.doc_slug}/sections/{target.filename}"
    return f"[{target.clean_title}]({path})"


def front_matter(section: Section, version: str) -> str:
    kws = "\n".join(f"  - {yaml_scalar(k)}" for k in section.keywords)
    return (
        "---\n"
        f"document: {yaml_scalar(section.document)}\n"
        f"source_file: {yaml_scalar(section.source_file)}\n"
        f"document_version: {yaml_scalar(version)}\n"
        f"pdf_pages: {yaml_scalar(f'{section.pdf_start}-{section.pdf_end}')}\n"
        f"printed_pages: {yaml_scalar(f'{section.printed_start}-{section.printed_end}')}\n"
        f"section: {yaml_scalar(section.clean_title)}\n"
        f"chapter: {yaml_scalar(section.chapter)}\n"
        "keywords:\n"
        f"{kws if kws else '  []'}\n"
        "---\n\n"
    )


def write_section(section: Section, version: str, related: list[Section]) -> None:
    out = LIBRARY / section.relpath
    out.parent.mkdir(parents=True, exist_ok=True)
    related_links = ", ".join(section_link_from(section, r) for r in related[:6]) or "None indexed."
    content = [
        front_matter(section, version),
        f"# {section.clean_title}\n\n",
        f"Source trace: [original PDF](../../../originals/{quote(section.source_file)}) "
        f"| PDF pages {section.pdf_start}-{section.pdf_end} "
        f"| printed pages {section.printed_start}-{section.printed_end}\n\n",
        f"Related sections: {related_links}\n\n",
        "## Extracted Text\n\n",
        "```text\n",
        section.text.strip(),
        "\n```\n",
    ]
    out.write_text("".join(content), encoding="utf-8")


def related_sections(section: Section, all_sections: list[Section]) -> list[Section]:
    kws = set(section.keywords)
    scored: list[tuple[int, Section]] = []
    for other in all_sections:
        if other is section:
            continue
        overlap = len(kws.intersection(other.keywords))
        title_overlap = len(set(normalize(section.clean_title).split()).intersection(normalize(other.clean_title).split()))
        score = overlap + title_overlap * 2
        if section.doc_slug != other.doc_slug and score:
            score += 1
        if score >= 2:
            scored.append((score, other))
    scored.sort(key=lambda item: (-item[0], item[1].document, item[1].clean_title))
    return [s for _, s in scored[:8]]


def extract_definitions(sections: list[Section]) -> list[dict]:
    patterns = [
        re.compile(
            r"\b(?P<term>[A-Z][A-Za-z0-9 /+#().-]{2,70}?)\s+(?:is|are|refers to|means|is defined as|can be defined as)\s+(?P<def>[^.]{20,360}\.)"
        ),
        re.compile(r"^\s*(?P<term>[A-Z][A-Za-z0-9 /+#().-]{2,70})\s*:\s*(?P<def>[^.]{20,360}\.)", re.M),
    ]
    definitions: list[dict] = []
    seen: set[tuple[str, str, str]] = set()
    for section in sections:
        text = re.sub(r"\s+", " ", section.text)
        for pattern in patterns:
            for match in pattern.finditer(text):
                term = re.sub(r"\s+", " ", match.group("term")).strip(" -:;,.")
                definition = re.sub(r"\s+", " ", match.group("def")).strip()
                if len(term.split()) > 8 or len(term) < 3:
                    continue
                if term.lower() in STOPWORDS:
                    continue
                key = (term.lower(), definition[:100].lower(), section.relpath)
                if key in seen:
                    continue
                seen.add(key)
                definitions.append(
                    {
                        "term": term,
                        "definition": definition,
                        "document": section.document,
                        "section": section,
                    }
                )
    definitions.sort(key=lambda d: (d["term"].lower(), d["document"]))
    return definitions


def extract_legislation(sections: list[Section]) -> list[dict]:
    rows: list[dict] = []
    seen: set[tuple[str, str]] = set()
    line_pattern = re.compile("|".join(re.escape(t) for t in LEGISLATION_TERMS), re.I)
    for section in sections:
        for raw in section.text.splitlines():
            line = re.sub(r"\s+", " ", raw).strip()
            if len(line) < 8 or not line_pattern.search(line):
                continue
            # Keep useful phrase-sized references instead of whole paragraphs.
            candidates = re.findall(
                r"([A-Z][A-Za-z0-9&,.()' /-]{0,90}\b(?:Act|Regulations?|Policies|Policy|Guidelines?|Standards?|Frameworks?|ISO|IEEE|GDPR|POPIA|HIPAA|W3C|HPCSA|Cyberethics)\b[A-Za-z0-9&,.()' /-]{0,70})",
                line,
            )
            if not candidates:
                candidates = [line[:160]]
            for candidate in candidates:
                name = candidate.strip(" -:;,.")
                if len(name) < 4:
                    continue
                key = (name.lower(), section.relpath)
                if key in seen:
                    continue
                seen.add(key)
                abbr = ""
                m = re.search(r"\b([A-Z]{2,8})\b", name)
                if m:
                    abbr = m.group(1)
                rows.append(
                    {
                        "name": name,
                        "abbreviation": abbr,
                        "document": section.document,
                        "purpose": line[:240],
                        "section": section,
                    }
                )
    rows.sort(key=lambda r: (r["name"].lower(), r["document"]))
    return rows


def concept_index(sections: list[Section]) -> dict[str, list[Section]]:
    index: dict[str, list[Section]] = defaultdict(list)
    for section in sections:
        for phrase in phrase_keywords(section.clean_title):
            if len(phrase) > 3:
                index[phrase].append(section)
        for token in re.findall(r"[A-Za-z][A-Za-z0-9+#'-]{3,}", section.clean_title):
            cleaned = token.strip("'")
            if cleaned.lower() not in STOPWORDS:
                index[cleaned.title()].append(section)
    return {k: v for k, v in sorted(index.items(), key=lambda item: item[0].lower())}


def write_doc_files(doc: dict, reader: PdfReader, sections: list[Section], version: str, date_hint: str, all_docs: list[dict]) -> None:
    doc_dir = LIBRARY / "documents" / doc["slug"]
    doc_dir.mkdir(parents=True, exist_ok=True)
    meta = reader.metadata or {}
    metadata = [
        f'document: {yaml_scalar(doc["title"])}',
        f'module: {yaml_scalar(doc["module"])}',
        f'source_file: {yaml_scalar(doc["source_file"])}',
        f'document_version: {yaml_scalar(version)}',
        f'date: {yaml_scalar(date_hint)}',
        f'author: {yaml_scalar(meta.get("/Author", "not stated"))}',
        f'creator: {yaml_scalar(meta.get("/Creator", "not stated"))}',
        f'producer: {yaml_scalar(meta.get("/Producer", "not stated"))}',
        f'pdf_pages: {len(reader.pages)}',
        f'section_count: {len(sections)}',
        "original_pdf_authoritative: true",
    ]
    (doc_dir / "metadata.yaml").write_text("\n".join(metadata) + "\n", encoding="utf-8")

    chapters = [s for s in sections if s.level == 1]
    terminology = Counter(k for s in sections for k in s.keywords)
    related = [d["title"] for d in all_docs if d["slug"] != doc["slug"]]
    summary = [
        f"# Summary: {doc['title']}\n\n",
        "## Purpose\n\n",
        f"This reference entry preserves and indexes the extracted contents of `{doc['source_file']}` for fast retrieval while keeping the original PDF authoritative.\n\n",
        "## Scope\n\n",
        f"The document is organised into {len(chapters)} primary chapters/topics and {len(sections)} extracted Markdown sections.\n\n",
        "## Intended Audience\n\n",
        "Students and future Codex sessions working with the module material in this repository.\n\n",
        "## Major Themes\n\n",
    ]
    summary.extend(f"- {c.clean_title}\n" for c in chapters[:30])
    summary.extend(
        [
            "\n## Important Terminology\n\n",
            ", ".join(word for word, _ in terminology.most_common(30)) or "No terminology extracted.",
            "\n\n## Legislation Referenced\n\n",
            "See [legislation-and-policies.md](../../indexes/legislation-and-policies.md) for extracted references across the full library.\n\n",
            "## Related Documents\n\n",
        ]
    )
    summary.extend(f"- {title}\n" for title in related)
    summary.extend(
        [
            "\n## Strengths\n\n",
            "- The extraction preserves PDF and printed page traces for every section.\n",
            "- Section filenames are descriptive and based on source headings.\n",
            "- The document is included in cross-document indexes.\n\n",
            "## Limitations\n\n",
            "- Text extraction is layout-based and may not perfectly reconstruct complex diagrams or image-only content.\n",
            "- Definitions and legislation references are collected by repeatable text patterns and should be verified against the original PDF for formal citation.\n\n",
            "## Version/Date\n\n",
            f"- {version}\n",
        ]
    )
    (doc_dir / "summary.md").write_text("".join(summary), encoding="utf-8")

    toc = [f"# Table of Contents: {doc['title']}\n\n"]
    for section in sections:
        indent = "  " * max(0, section.level - 1)
        toc.append(
            f"{indent}- [{section.clean_title}](sections/{section.filename}) "
            f"(PDF {section.pdf_start}-{section.pdf_end}; printed {section.printed_start}-{section.printed_end})\n"
        )
    (doc_dir / "table-of-contents.md").write_text("".join(toc), encoding="utf-8")


def write_indexes(sections: list[Section], definitions: list[dict], legislation: list[dict]) -> int:
    indexes = LIBRARY / "indexes"
    indexes.mkdir(parents=True, exist_ok=True)
    concepts = concept_index(sections)

    master = ["# Master Index\n\n", "Cross-document concept index generated from source headings and extracted keywords.\n\n"]
    for concept, hits in concepts.items():
        docs = defaultdict(list)
        for section in hits:
            docs[section.document].append(section)
        if len(hits) < 2 and len(docs) == 1:
            continue
        master.append(f"## {concept}\n\n")
        for document, doc_hits in sorted(docs.items()):
            master.append(f"- {document}\n")
            for section in doc_hits[:8]:
                master.append(f"  - {md_link(section, 'indexes')}\n")
        master.append("\n")
    (indexes / "master-index.md").write_text("".join(master), encoding="utf-8")

    topics = ["# Topics Index\n\n", "Alphabetical list of significant concepts with links to relevant sections.\n\n"]
    for concept, hits in concepts.items():
        topics.append(f"## {concept}\n\n")
        for section in hits[:20]:
            topics.append(f"- {section.document}: {md_link(section, 'indexes')}\n")
        topics.append("\n")
    (indexes / "topics.md").write_text("".join(topics), encoding="utf-8")

    defs = ["# Definitions\n\n", "Definitions are extracted verbatim where pattern matching identified definition-style sentences. Verify formal quotations against the source PDF.\n\n"]
    current = None
    for row in definitions:
        if row["term"].lower() != current:
            current = row["term"].lower()
            defs.append(f"## {row['term']}\n\n")
        defs.append(f"- {row['definition']}  \n  Source: {row['document']}, {md_link(row['section'], 'indexes')}\n")
    (indexes / "definitions.md").write_text("".join(defs), encoding="utf-8")

    leg = [
        "# Legislation and Policies\n\n",
        "References to legislation, policies, regulations, standards, frameworks, and guidelines found in the extracted documents.\n\n",
        "| Name | Abbreviation | Document | Purpose / Context | Relevant Section |\n",
        "| --- | --- | --- | --- | --- |\n",
    ]
    for row in legislation:
        leg.append(
            "| "
            + " | ".join(
                [
                    esc(row["name"]),
                    esc(row["abbreviation"] or ""),
                    esc(row["document"]),
                    esc(row["purpose"]),
                    md_link(row["section"], "indexes"),
                ]
            )
            + " |\n"
        )
    (indexes / "legislation-and-policies.md").write_text("".join(leg), encoding="utf-8")

    with (indexes / "document-map.csv").open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["Document", "Section", "Chapter", "Keywords", "PDF Start Page", "PDF End Page", "Markdown File"])
        for section in sections:
            writer.writerow(
                [
                    section.document,
                    section.clean_title,
                    section.chapter,
                    "; ".join(section.keywords),
                    section.pdf_start,
                    section.pdf_end,
                    section.relpath,
                ]
            )

    graph_links = write_knowledge_graph(sections, concepts)
    return graph_links


def esc(text: object) -> str:
    return str(text).replace("|", "\\|").replace("\n", " ").strip()


def write_knowledge_graph(sections: list[Section], concepts: dict[str, list[Section]]) -> int:
    graph = [
        "# Knowledge Graph\n\n",
        "Conceptual navigation map generated from document hierarchy and recurring cross-document concepts.\n\n",
        "```text\n",
        "Reference Library\n",
    ]
    links = 0
    docs = defaultdict(list)
    for section in sections:
        docs[section.document].append(section)
    for document, doc_sections in sorted(docs.items()):
        graph.append(f"├── {document}\n")
        chapters = defaultdict(list)
        for section in doc_sections:
            chapters[section.chapter].append(section)
        for chapter, children in chapters.items():
            graph.append(f"│   ├── {chapter}\n")
            for child in children[:20]:
                if child.clean_title != chapter:
                    graph.append(f"│   │   ├── {child.clean_title}\n")
                    links += 1
    graph.append("```\n\n")

    graph.append("## Cross-Document Concept Links\n\n")
    for concept, hits in concepts.items():
        documents = sorted({h.document for h in hits})
        if len(documents) < 2:
            continue
        graph.append(f"### {concept}\n\n")
        graph.append("Related documents: " + ", ".join(documents) + "\n\n")
        for hit in hits[:10]:
            graph.append(f"- {hit.document}: {md_link(hit)}\n")
            links += 1
        graph.append("\n")
    (LIBRARY / "knowledge-graph.md").write_text("".join(graph), encoding="utf-8")
    return links


def write_root_files(report: dict) -> None:
    agents = """# AGENTS.md

Purpose: this repository is a permanent reference library built from the original study-guide PDFs.

Source hierarchy:
- Original PDFs in `reference-library/originals/` are authoritative and must remain unchanged.
- Extracted Markdown in `reference-library/documents/` is for search, navigation, and quick reference.
- Cross-document indexes in `reference-library/indexes/` are discovery aids, not replacements for source verification.

Where to search first:
- Use `reference-library/indexes/topics.md` for concepts.
- Use `reference-library/indexes/definitions.md` for definition-style statements.
- Use `reference-library/indexes/legislation-and-policies.md` for legislation, policy, guideline, regulation, framework, and standards references.
- Use `reference-library/indexes/document-map.csv` when page spans or file locations are needed.

Verification:
- Always verify high-stakes or quoted information against the original PDF page span listed in the section front matter.
- Cite the document title, source PDF filename, Markdown section, PDF pages, and printed pages when available.
- If Markdown extraction conflicts with the PDF, the PDF wins.

Future Codex sessions:
- Preserve descriptive filenames and YAML front matter.
- Keep page traces intact when editing or regenerating extracted material.
- Do not duplicate document contents inside this file.
"""
    (LIBRARY / "AGENTS.md").write_text(agents, encoding="utf-8")

    readme = """# Reference Library

This repository contains a searchable Markdown reference library generated from the original PDFs in `reference-library/originals/`.

## Structure

- `AGENTS.md` - guidance for future Codex sessions.
- `README.md` - this maintenance and usage guide.
- `originals/` - unchanged source PDFs.
- `documents/<document-name>/metadata.yaml` - document-level metadata.
- `documents/<document-name>/summary.md` - structural summary and limitations.
- `documents/<document-name>/table-of-contents.md` - extracted hierarchy with links.
- `documents/<document-name>/sections/` - Markdown sections with YAML front matter and page traces.
- `indexes/master-index.md` - cross-document concept index.
- `indexes/topics.md` - alphabetical topic index.
- `indexes/definitions.md` - extracted definition-style statements.
- `indexes/legislation-and-policies.md` - legislation, policy, standards, guideline, regulation, and framework references.
- `indexes/document-map.csv` - machine-readable section map.
- `knowledge-graph.md` - conceptual relationship map.
- `extraction-report.md` - build counts and consistency notes.

## Naming Conventions

Section filenames are based on the original headings and prefixed with the source numbering where available. Avoid generic names such as `chunk01.md`.

## Search Recommendations

Start with `indexes/topics.md` for concept lookup, then open the linked section and verify the PDF/printed page span in the front matter. Use `document-map.csv` for spreadsheet-style filtering by document, chapter, keyword, or page span.

## Maintenance

Keep source PDFs unchanged. If a PDF is replaced by a newer official version, add it as a new source or rebuild the library with traceable metadata. Every section Markdown file must retain YAML front matter and a source trace back to the original PDF.
"""
    (LIBRARY / "README.md").write_text(readme, encoding="utf-8")

    report_text = [
        "# Extraction Report\n\n",
        f"Generated: {report['generated_at']}\n\n",
        f"- Documents processed: {report['documents_processed']}\n",
        f"- Markdown section files created: {report['markdown_files_created']}\n",
        f"- Cross-links created: {report['cross_links_created']}\n",
        f"- Definitions collected: {report['definitions_collected']}\n",
        f"- Legislation/policy references collected: {report['legislation_references_collected']}\n",
        f"- Metadata/front matter check: {report['metadata_check']}\n",
        f"- Source trace check: {report['source_trace_check']}\n",
        "\n## Extraction Issues\n\n",
    ]
    if report["issues"]:
        report_text.extend(f"- {issue}\n" for issue in report["issues"])
    else:
        report_text.append("- No blocking extraction issues encountered. Complex diagrams and image-only details should still be verified against the original PDFs.\n")
    (LIBRARY / "extraction-report.md").write_text("".join(report_text), encoding="utf-8")


def verify_library(sections: list[Section]) -> tuple[str, str, list[str]]:
    issues: list[str] = []
    for section in sections:
        path = LIBRARY / section.relpath
        if not path.exists():
            issues.append(f"Missing section file: {section.relpath}")
            continue
        text = path.read_text(encoding="utf-8")
        if not text.startswith("---\n"):
            issues.append(f"Missing YAML front matter: {section.relpath}")
        for field in ["document:", "source_file:", "document_version:", "pdf_pages:", "printed_pages:", "section:", "chapter:", "keywords:"]:
            if field not in text.split("---", 2)[1]:
                issues.append(f"Missing front matter field {field} in {section.relpath}")
        if "Source trace:" not in text or "PDF pages" not in text:
            issues.append(f"Missing source trace: {section.relpath}")
    meta_ok = "passed" if not [i for i in issues if "front matter" in i or "field" in i] else "failed"
    trace_ok = "passed" if not [i for i in issues if "source trace" in i] else "failed"
    return meta_ok, trace_ok, issues


def main() -> None:
    if not PDFTOTEXT.exists():
        raise SystemExit(f"pdftotext not found at {PDFTOTEXT}")
    if LIBRARY.exists():
        shutil.rmtree(LIBRARY)
    (LIBRARY / "originals").mkdir(parents=True)
    all_sections: list[Section] = []
    readers: dict[str, PdfReader] = {}
    versions: dict[str, str] = {}
    dates: dict[str, str] = {}

    for doc in DOCS:
        source = ROOT / doc["source_file"]
        if not source.exists():
            raise FileNotFoundError(source)
        shutil.copy2(source, LIBRARY / "originals" / source.name)
        reader = PdfReader(str(source))
        readers[doc["slug"]] = reader
        version, date_hint = metadata_dates(reader)
        versions[doc["slug"]] = version
        dates[doc["slug"]] = date_hint
        pages = run_pdftotext(source)
        sections = make_sections(doc, pages, reader)
        all_sections.extend(sections)
        doc["_sections"] = sections

    cross_links = 0
    for doc in DOCS:
        sections = doc["_sections"]
        for section in sections:
            related = related_sections(section, all_sections)
            cross_links += len(related)
            write_section(section, versions[doc["slug"]], related)
        write_doc_files(doc, readers[doc["slug"]], sections, versions[doc["slug"]], dates[doc["slug"]], DOCS)

    definitions = extract_definitions(all_sections)
    legislation = extract_legislation(all_sections)
    graph_links = write_indexes(all_sections, definitions, legislation)
    metadata_check, source_trace_check, issues = verify_library(all_sections)
    report = {
        "generated_at": dt.datetime.now().isoformat(timespec="seconds"),
        "documents_processed": len(DOCS),
        "markdown_files_created": len(all_sections),
        "cross_links_created": cross_links + graph_links,
        "definitions_collected": len(definitions),
        "legislation_references_collected": len(legislation),
        "metadata_check": metadata_check,
        "source_trace_check": source_trace_check,
        "issues": issues,
    }
    write_root_files(report)
    print("Reference library built")
    for key, value in report.items():
        if key != "issues":
            print(f"{key}: {value}")
    if issues:
        print("issues:")
        for issue in issues:
            print(f"- {issue}")


if __name__ == "__main__":
    main()
