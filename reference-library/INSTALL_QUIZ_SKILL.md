# Install The Quiz Skill

The reusable quiz behavior lives in:

`reference-library/codex-skills/study-quiz-coach/`

Install it into your personal Codex skills folder so Codex can trigger it automatically when you ask to be quizzed.

## Install On macOS Or Linux

From the repository root:

```sh
mkdir -p ~/.codex/skills
cp -R reference-library/codex-skills/study-quiz-coach ~/.codex/skills/
```

Then start a new Codex task or refresh your Codex session so the skill list reloads.

## Install On Another Machine

1. Make sure the person has this reference-library folder.
2. Copy `reference-library/codex-skills/study-quiz-coach/`.
3. Paste it into their Codex skills folder:

```text
~/.codex/skills/study-quiz-coach
```

4. Start a new Codex task.
5. Ask:

```text
Use $study-quiz-coach to quiz me on Programming 622 chapters 5, 6, and 7.
```

## Check The Skill Installed

In a new Codex task, ask:

```text
Use $study-quiz-coach to quiz me on Internet Programming 622 Topic 2 from this reference library.
```

Codex should read from the local `reference-library/` material, ask one question at a time, mark answers, keep score, and cite source sections when practical.

## Updating The Skill

If the repo copy changes later, replace the installed copy:

```sh
rm -rf ~/.codex/skills/study-quiz-coach
cp -R reference-library/codex-skills/study-quiz-coach ~/.codex/skills/
```

Then start a new Codex task.

## If Skills Are Not Available

Use `QUIZ_PROMPT_TEMPLATE.md` instead. It contains a copy-paste prompt that works in ordinary ChatGPT or a Codex session where personal skills are unavailable.
