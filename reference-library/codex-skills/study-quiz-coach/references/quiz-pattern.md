# Quiz Pattern Reference

User's sample prompt:

```text
I want you to test me on my programming module. This covers chapters 5,6,7 in the study guide, keep the scope limited to this guide.
I want you to ask me 10 multiple choice questions per chapter that get progressively harder as we get closer to the last question for each chapter.
You should only ask one question at a time.
If the question you're asking has code, then provide code options that I need to select from.
```

Reusable interpretation:

- Scope is strict: use only the named guide/module and chapters.
- Quantity is per chapter: default `10` questions per chapter when the user does not override it.
- Delivery is interactive: one question at a time.
- Difficulty ramps inside each chapter.
- Code-heavy modules should include code snippets and code-based options.
- Mark after each answer, then continue.

Suggested first response:

```text
I'll quiz you from [module/guide], limited to [chapters/topics]. I'll ask [N] multiple-choice questions per chapter, one at a time, with difficulty increasing within each chapter. I'll keep score and explain each answer after you respond.

Question 1/[total] - [Chapter/Topic]
...
```

Question queue strategy:

1. For each chapter, build questions in this order:
   - 1-3: definitions and direct recall.
   - 4-6: function/pattern selection and small examples.
   - 7-8: scenario or applied reasoning.
   - 9-10: code-output, debugging, or "choose the correct code" challenge.
2. Interleave chapters only if the user asks for mixed mode. Otherwise finish one chapter before the next.
3. Keep a score object mentally in the conversation: `correct`, `asked`, and weak topics.

Marking template:

```text
Correct. The answer is B: [answer].
[Short explanation.]
Source: [section], PDF pages [x-y] / printed pages [a-b].
Score: [correct]/[asked].

Next question...
```

For incorrect answers:

```text
Not quite. The correct answer is C: [answer].
[Explain why their choice is wrong and why C is right.]
Source: [section], PDF pages [x-y] / printed pages [a-b].
Score: [correct]/[asked].

Next question...
```
