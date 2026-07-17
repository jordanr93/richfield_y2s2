# Reference Library

This repository contains a searchable Markdown reference library generated from the original PDFs in `reference-library/originals/`.

## Structure

- `AGENTS.md` - guidance for future Codex sessions.
- `README.md` - this maintenance and usage guide.
- `HOW_TO_USE_THIS_LIBRARY.md` - practical guide for studying, searching, tracing sources, and prompting Codex with this knowledge base.
- `QUIZ_TOOL.md` - guide for using the `$study-quiz-coach` skill with this reference library.
- `INSTALL_QUIZ_SKILL.md` - steps for installing the bundled quiz skill into another user's Codex setup.
- `QUIZ_PROMPT_TEMPLATE.md` - copy-paste quiz prompt for users who do not have Codex skills available.
- `codex-skills/study-quiz-coach/` - shareable source copy of the Codex quiz skill.
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

## Quiz Tool

Use `$study-quiz-coach` when you want Codex to quiz you from this Markdown/PDF library. See `QUIZ_TOOL.md` for prompt templates, examples, source paths, and marking expectations.

To share the quiz workflow with someone else, give them this repository and point them to `INSTALL_QUIZ_SKILL.md`. If they cannot install Codex skills, use `QUIZ_PROMPT_TEMPLATE.md` as the fallback.

## Maintenance

Keep source PDFs unchanged. If a PDF is replaced by a newer official version, add it as a new source or rebuild the library with traceable metadata. Every section Markdown file must retain YAML front matter and a source trace back to the original PDF.
