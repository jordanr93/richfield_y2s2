---
name: study-quiz-coach
description: Run source-grounded study quizzes from local study-guide Markdown, PDFs, notes, or reference-library folders. Use when the user asks Codex to quiz them, test them, ask one question at a time, generate MCQs, use review questions, progressively increase difficulty, mark answers, or create study drills from coursework material.
---

# Study Quiz Coach

Use this skill to quiz the user interactively from local study material, especially a `reference-library/` built from PDFs.

## Core Behavior

- Keep the quiz scoped to the guide, module, chapter, topic, files, or folders the user names.
- Prefer source-grounded questions from Markdown sections and review-question files. Use PDF page traces when available.
- Ask one question at a time unless the user explicitly asks for a full quiz sheet.
- Default to multiple choice when the user says "quiz me" without specifying format.
- Increase difficulty within each chapter/topic: recall first, then application, then code/scenario reasoning.
- Do not reveal the answer before the user attempts the question.
- After the user answers, mark it, explain why, cite the source section/page trace when practical, then ask whether to continue or proceed automatically if the user requested a run.

## Default Quiz Pattern

When the user gives no other format, use this pattern:

1. Identify scope: module/guide, chapters/topics, and source files.
2. Build a queue of questions grouped by chapter/topic.
3. Ask `10` MCQs per chapter/topic unless the user gives another number.
4. Within each chapter/topic, make question 1 easiest and the final question hardest.
5. Include code snippets when the source material is code-heavy.
6. For code questions, use code-based answer options when that better tests understanding.
7. Track score in the conversation.
8. At the end, summarize total marks, weak areas, and recommended follow-up sections.

Read `references/quiz-pattern.md` when the user asks for the exact prompt style or when adapting this into a repository-local quiz tool.

## Source Workflow

For a `reference-library/`:

- Start with `documents/<module>/table-of-contents.md` to identify the requested chapters.
- Use `documents/<module>/sections/*review*.md` for review-question intent.
- Use nearby topic section files for correct answers, explanations, examples, and code.
- Use `indexes/document-map.csv` when a chapter/topic must be mapped to files or page spans.
- Treat `originals/` PDFs as authoritative when exact wording or high-stakes verification matters.

For ordinary folders:

- Find Markdown files whose names or headings match the requested scope.
- Preserve the user's requested boundaries; do not pull unrelated chapters into the quiz.
- If scope is ambiguous, ask one concise clarification before starting.

## Question Design

Good questions should test:

- definitions and vocabulary,
- "what happens next" logic,
- code output and code correction,
- choosing the right function/statement/pattern,
- common traps and misconceptions,
- scenario-based application.

For each MCQ:

- Provide 4 options by default.
- Make one option clearly correct.
- Make distractors plausible but not trickily ambiguous.
- For code-output questions, show the code before the options.
- For "choose the code" questions, make the options code snippets.

## Marking

After each answer:

- State correct/incorrect directly.
- Give the correct answer letter and text.
- Explain the reasoning in plain language.
- Mention the relevant section and PDF/printed pages when the source has page traces.
- Keep a running score.

If the user's answer is partly right in a short-answer variation, give partial credit and explain what was missing.

## Session Control

Respect these user choices:

- "one at a time": ask only one question, wait for the answer.
- "continue automatically": ask the next question after marking.
- "hard mode": reduce hints and use more application/code questions.
- "teach mode": give more explanation after marking.
- "exam mode": no hints, no answer until attempted, final summary at the end.

If the user stops mid-quiz, summarize current score and next pending chapter/topic.
