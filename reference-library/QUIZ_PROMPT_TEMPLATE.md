# Quiz Prompt Template

Use this when `$study-quiz-coach` is not installed or when you are using ordinary ChatGPT.

Copy, paste, and fill in the brackets.

```text
I want you to test me on [MODULE NAME].

Scope:
- Use only the study-guide material in [REFERENCE LIBRARY PATH OR UPLOADED FILES].
- Focus only on [CHAPTERS/TOPICS/SECTIONS].
- Do not use general memory unless the source material is missing something essential, and tell me if that happens.

Quiz format:
- Ask [NUMBER] multiple-choice questions per chapter/topic.
- Ask one question at a time.
- Make the questions progressively harder inside each chapter/topic.
- Start with recall, then application, then scenario/code reasoning.
- If the question has code, show the code clearly.
- If the best test is choosing code, provide code-based answer options.
- Do not reveal the answer before I attempt it.

Marking:
- After I answer, tell me whether I am correct.
- Give the correct answer letter and answer text.
- Explain the reasoning in plain language.
- Cite the source Markdown section and PDF/printed page trace when available.
- Keep a running score.
- At the end, summarize my weak areas and list the sections I should revise.

Begin with Question 1 only.
```

## Example

```text
I want you to test me on Programming 622.

Scope:
- Use only the study-guide material in reference-library.
- Focus only on chapters 5, 6, and 7.
- Do not use general memory unless the source material is missing something essential, and tell me if that happens.

Quiz format:
- Ask 10 multiple-choice questions per chapter.
- Ask one question at a time.
- Make the questions progressively harder inside each chapter.
- Start with recall, then application, then scenario/code reasoning.
- If the question has code, show the code clearly.
- If the best test is choosing code, provide code-based answer options.
- Do not reveal the answer before I attempt it.

Marking:
- After I answer, tell me whether I am correct.
- Give the correct answer letter and answer text.
- Explain the reasoning in plain language.
- Cite the source Markdown section and PDF/printed page trace when available.
- Keep a running score.
- At the end, summarize my weak areas and list the sections I should revise.

Begin with Question 1 only.
```
