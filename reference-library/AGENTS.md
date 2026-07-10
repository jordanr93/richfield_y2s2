# AGENTS.md

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
