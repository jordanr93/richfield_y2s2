# How to Use This Reference Library

This folder is not just a PDF dump. It is a study knowledge base built from the original study-guide PDFs, with searchable Markdown sections, cross-document indexes, and source traces back to the original pages.

Use it in layers:

1. Start with a broad index or module table of contents.
2. Open the relevant Markdown section.
3. Check the source trace at the top of that section.
4. Use the original PDF only when you need final confirmation, exact wording, or page-level evidence.

## What Is In Here

The main folder is `reference-library/`.

| Path | Use it for |
| --- | --- |
| `originals/` | The unchanged source PDFs. These are the authority if anything conflicts. |
| `documents/<module>/table-of-contents.md` | The fastest way to browse one module in order. |
| `documents/<module>/summary.md` | A quick structural overview of a module. |
| `documents/<module>/sections/` | The actual extracted study content, split by headings/topics. |
| `indexes/topics.md` | Best starting point when you know the concept name. |
| `indexes/master-index.md` | Cross-module concept lookup. Useful when a concept appears in more than one subject. |
| `indexes/definitions.md` | Quick definition-style statements. Good for flashcards. |
| `indexes/legislation-and-policies.md` | Standards, frameworks, policies, legislation, and guideline references. |
| `indexes/document-map.csv` | Spreadsheet-like map of every section, page span, keywords, and file path. |
| `knowledge-graph.md` | Big-picture module and concept map. Good when you feel lost. |
| `extraction-report.md` | Build report and consistency notes. |

There are five module folders:

- `big-data-iot-600-study-guide`
- `information-systems-622-study-guide`
- `internet-programming-622-study-guide`
- `machine-learning-600-study-guide`
- `programming-622-study-guide`

## The Best Starting Point For Each Task

| If you want to... | Start here |
| --- | --- |
| Study one module from beginning to end | `documents/<module>/table-of-contents.md` |
| Find a specific concept quickly | `indexes/topics.md` |
| Compare a concept across modules | `indexes/master-index.md` |
| Pull definitions for revision cards | `indexes/definitions.md` |
| Find standards, policies, frameworks, or legislation | `indexes/legislation-and-policies.md` |
| Build a quiz or practice test | Review-question sections in `documents/<module>/sections/`, then nearby topic sections |
| Confirm a quoted answer | The section front matter, then the matching PDF page in `originals/` |
| Ask Codex to build or update study pages | Give Codex the module folder, relevant sections, and expected output style |

## How To Read A Section File

Most section files begin with YAML front matter. That metadata is useful.

Look for:

- `document`: which study guide the section came from.
- `source_file`: the original PDF filename.
- `pdf_pages`: PDF page span.
- `printed_pages`: printed page numbers from the guide, when available.
- `section`: the heading/title.
- `chapter`: the parent chapter/topic.
- `keywords`: quick retrieval terms.

Then read the extracted text below it. Many files also include a `Source trace` line that points back to the original PDF.

For normal studying, the Markdown is enough. For assignments, exact quotes, or uncertain wording, verify against the PDF page span.

## Fast Workflows

### 1. Study One Module

Open the module table of contents, for example:

`reference-library/documents/internet-programming-622-study-guide/table-of-contents.md`

Then move chapter by chapter into the linked section files. Use `summary.md` first if you want a high-level view before going deep.

### 2. Find A Concept

Open:

`reference-library/indexes/topics.md`

Search inside that file for the concept, then follow the linked section. If the concept appears in several modules, use `master-index.md` to compare where it appears.

Example search terms:

- `normalization`
- `cookies`
- `classification`
- `Big-O`
- `Hadoop`
- `interface design`

### 3. Build A Quick Definition Sheet

Open:

`reference-library/indexes/definitions.md`

Search for the topic, then copy the linked section paths into your study notes. Do not rely only on the definition index if the topic is important; open the full section too.

### 4. Prepare For Practical Questions

Search the module's `sections/` folder for review files. They are often named like:

- `09-review-questions.md`
- `10-review-questions.md`
- `17-review-questions.md`
- `37-review-questions.md`
- `60-review-questions.md`

Then open nearby topic sections to build answers. Review questions tell you what to practise; topic sections tell you how to answer.

### 5. Trace An Answer Back To Source

When you need evidence:

1. Open the Markdown section.
2. Read `source_file`, `pdf_pages`, and `printed_pages`.
3. Open the matching PDF in `originals/`.
4. Check the listed page range.
5. Cite both the module and the page span in your notes.

This keeps your answer grounded and prevents the extracted Markdown from becoming a second-hand source.

## Useful Command-Line Searches

If you are in this directory:

`/Users/rix/Documents/Richfield/A Semester In One`

Use these from Terminal.

Find a topic across all Markdown:

```sh
grep -Rni "normalization" reference-library --include="*.md"
```

Find review-question files:

```sh
find reference-library/documents -name "*review*.md" -print
```

Find every section for one module:

```sh
find reference-library/documents/internet-programming-622-study-guide/sections -name "*.md" | sort
```

Search the document map for a concept:

```sh
grep -ni "cookies" reference-library/indexes/document-map.csv
```

If `rg` is installed on your machine, it is faster:

```sh
rg -n "cookies|sessions|state" reference-library
```

If `rg` is not installed, the `grep` and `find` commands above work fine.

## How To Ask Codex To Use This Library

Good prompts are specific about source, task, and format.

### For A Study Explanation

```text
Using the Markdown files in reference-library, explain cookies vs sessions for Internet Programming 622.
Use the study guide as the source of truth, include examples, and mention the PDF page traces.
```

### For A Quiz

```text
Build 25 multiple-choice questions from Internet Programming Topic 2.
Use the review questions and the related topic sections.
Include code snippets where useful, mark the correct answer, and explain each answer.
```

### For Exam Prep

```text
Create an exam-focused revision sheet for Machine Learning 600 PCA.
Use the relevant section files, preserve important definitions, include traps, and add quick self-test questions.
```

### For Cross-Module Comparison

```text
Compare "data security" across Big Data and IoT, Information Systems, and Internet Programming.
Use master-index.md to find sections, then cite the source section and page span.
```

### For Updating A Study Page

```text
Update machine_learning_guide.html using the reference-library Machine Learning sections.
Keep the existing style, add exam-first content, preserve source-faithfulness, and validate links/scripts afterwards.
```

## How To Turn The Library Into Active Study

Use the material in cycles:

1. **Preview:** Open `summary.md` and `table-of-contents.md`.
2. **Target:** Pick the sections that match your upcoming test or weak area.
3. **Compress:** Make a one-page summary in your own words.
4. **Practise:** Use review questions and ask Codex to generate MCQs, short-answer prompts, or coding tasks.
5. **Check:** Trace uncertain answers back to the PDF page span.
6. **Repeat:** Convert wrong answers into a new mini-drill.

## Recommended Study Patterns

### For Programming and Internet Programming

Prioritise:

- code examples,
- input/output behaviour,
- common mistakes,
- syntax you must reproduce,
- review-question tasks.

Ask for runnable examples and then ask what each line does.

### For Information Systems

Prioritise:

- definitions,
- process steps,
- comparisons,
- advantages/disadvantages,
- diagram-style relationships.

Ask Codex to turn sections into tables, scenario questions, and exam-style paragraphs.

### For Machine Learning

Prioritise:

- concept distinctions,
- algorithm purpose,
- when to use each method,
- metrics,
- traps such as overfitting, underfitting, scaling, and imbalanced data.

Ask for "which method should I choose and why?" drills.

### For Big Data and IoT

Prioritise:

- architectures,
- standards,
- components,
- security risks,
- real-world applications,
- data pipeline stages.

Ask for comparison tables and scenario-based design questions.

## Important Rule: Markdown Is For Speed, PDFs Are For Authority

The Markdown files make the collection searchable and usable. The original PDFs remain the source of truth.

Use Markdown for:

- searching,
- navigation,
- quick revision,
- building quizzes,
- drafting summaries,
- finding page traces.

Use PDFs for:

- exact quotations,
- final assignment evidence,
- checking formatting-sensitive tables,
- resolving any mismatch or unclear extraction.

## A Simple Daily Routine

1. Pick one module.
2. Open its `table-of-contents.md`.
3. Choose 2-4 sections.
4. Ask Codex for a plain-language explanation.
5. Ask for 10 questions.
6. Answer without looking.
7. Ask Codex to mark your answers against the source sections.
8. Save the weak points into your study page or notes.

That is the real value of this directory: it turns static PDFs into a searchable, traceable, reusable study system.
