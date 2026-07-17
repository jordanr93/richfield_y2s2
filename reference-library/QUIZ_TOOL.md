# Quiz Tool Guide

This library is set up to work with the Codex skill `$study-quiz-coach`.

Use it when you want Codex to quiz you from the Markdown study-guide library rather than from general memory.

## Sharing Or Installing The Skill

The shareable skill source is bundled at:

`reference-library/codex-skills/study-quiz-coach/`

To install it on another Codex setup, follow:

`reference-library/INSTALL_QUIZ_SKILL.md`

If the other person cannot install Codex skills, use:

`reference-library/QUIZ_PROMPT_TEMPLATE.md`

That prompt gives the same quiz behavior in a copy-paste form.

## Default Quiz Style

The quiz skill follows this pattern by default:

- Keep the scope limited to the guide, module, chapters, or topics you name.
- Ask multiple-choice questions unless you request another format.
- Ask one question at a time.
- Use 10 questions per chapter/topic unless you request a different number.
- Make questions progressively harder within each chapter/topic.
- Include code snippets where useful.
- For code-heavy questions, use code-based answer options when that is the better test.
- Mark each answer after you respond.
- Keep a running score.
- Explain the correct answer and point back to source sections/page traces when practical.

## Best Prompt Template

Use this shape:

```text
Use $study-quiz-coach to test me on [module name].
Scope: [chapters/topics/sections].
Ask [number] multiple-choice questions per chapter.
Ask one question at a time.
Make the questions progressively harder within each chapter.
If a question needs code, include code snippets or code-based answer options.
Use only the Markdown/PDF material in reference-library as the source.
```

## Examples

Programming 622 chapters 5-7:

```text
Use $study-quiz-coach to test me on Programming 622.
Scope: chapters 5, 6, and 7 from the study guide.
Ask 10 multiple-choice questions per chapter.
Ask one question at a time.
Make the questions progressively harder within each chapter.
If a question has code, give code options where appropriate.
Use only reference-library as the source.
```

Internet Programming sessions and cookies:

```text
Use $study-quiz-coach to quiz me on Internet Programming 622 Topic 2: Session Controls and Cookies.
Ask 12 multiple-choice questions, one at a time.
Include code snippets for session and cookie questions.
Mark each answer and keep score.
```

Machine Learning hard mode:

```text
Use $study-quiz-coach to quiz me on Machine Learning 600 PCA and classification.
Ask 15 questions in exam mode.
Make the last 5 scenario-based and harder.
Do not give hints before I answer.
```

Information Systems short-answer mode:

```text
Use $study-quiz-coach to test me on Information Systems 622 Chapter 3.
Use short-answer questions instead of MCQs.
Ask one at a time, mark strictly, and cite the source section after each answer.
```

## Where The Skill Should Look First

For this repository, the useful source paths are:

- `reference-library/documents/<module>/table-of-contents.md`
- `reference-library/documents/<module>/sections/`
- `reference-library/indexes/document-map.csv`
- `reference-library/indexes/topics.md`
- `reference-library/originals/`

Review-question files are especially useful for quiz intent. Find them with:

```sh
find reference-library/documents -name "*review*.md" -print
```

## Good Quiz Scopes

Good scopes are specific:

- `Programming 622 chapters 5, 6, and 7`
- `Internet Programming 622 Topic 2`
- `Machine Learning 600 PCA`
- `Information Systems 622 Chapter 3 data design`
- `Big Data and IoT 600 IoT security challenges`

Avoid vague scopes like:

- `quiz me on everything`
- `ask me some questions`
- `test all modules`

Those can work, but the quiz will be less focused and harder to mark meaningfully.

## How Marking Works

After you answer, Codex should give:

1. Correct/incorrect.
2. Correct answer.
3. Short explanation.
4. Source section and page trace when available.
5. Running score.
6. Next question.

At the end, ask for:

```text
Summarize my weak areas and give me the source sections I should revise next.
```

## When To Use The Website Quiz Instead

Use the embedded website quiz when you want a browser-based quiz with local saved marks.

Use `$study-quiz-coach` when you want a flexible conversational quiz over any module, any chapter, or any section in the Markdown library.

The website quiz is a fixed interactive tool. The Codex skill is a reusable study coach.
