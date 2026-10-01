(() => {
  'use strict';

  const csvPath = 'information_systems_topics_1-3_quiz.csv';
  const moduleSelect = document.querySelector('#quiz-module');
  const topicList = document.querySelector('#quiz-topic-list');
  const topicTemplate = document.querySelector('#quiz-topic-template');
  const countInput = document.querySelector('#quiz-count');
  const status = document.querySelector('#quiz-status');
  const startButton = document.querySelector('#quiz-start');
  const session = document.querySelector('#quiz-session');
  const result = document.querySelector('#quiz-result');
  const progressCount = document.querySelector('#quiz-progress-count');
  const progressScore = document.querySelector('#quiz-progress-score');
  const questionTopic = document.querySelector('#quiz-question-topic');
  const questionText = document.querySelector('#quiz-question');
  const answers = document.querySelector('#quiz-answers');
  const feedback = document.querySelector('#quiz-feedback');
  const nextButton = document.querySelector('#quiz-next');

  let bankByModule = new Map();
  let quiz = [];
  let currentIndex = 0;
  let answered = false;
  let score = 0;

  function parseCSV(text) {
    text = text.replace(/^\uFEFF/, '');
    const rows = [];
    let row = [];
    let value = '';
    let quoted = false;
    for (let i = 0; i < text.length; i += 1) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') {
          value += '"';
          i += 1;
        } else if (ch === '"') {
          quoted = false;
        } else {
          value += ch;
        }
      } else if (ch === '"') {
        quoted = true;
      } else if (ch === ',') {
        row.push(value);
        value = '';
      } else if (ch === '\n' || ch === '\r') {
        if (ch === '\r' && text[i + 1] === '\n') i += 1;
        row.push(value);
        rows.push(row);
        row = [];
        value = '';
      } else {
        value += ch;
      }
    }
    if (value !== '' || row.length) {
      row.push(value);
      rows.push(row);
    }
    if (!rows.length) return [];
    const headers = rows.shift().map((header) => header.trim().toLowerCase());
    return rows.filter((cells) => cells.some((cell) => cell.trim() !== '')).map((cells) => {
      const item = {};
      headers.forEach((header, index) => { item[header] = cells[index] || ''; });
      return item;
    });
  }

  function selectedTopics() {
    return [...topicList.querySelectorAll('.quiz-topic-option[aria-pressed="true"]')].map((button) => button.dataset.topic);
  }

  function setStatus(message) {
    status.textContent = message;
  }

  function updateStartState() {
    const module = bankByModule.get(moduleSelect.value);
    const selected = selectedTopics();
    const count = Number.parseInt(countInput.value, 10);
    startButton.disabled = !module || !selected.length || !Number.isInteger(count) || count < 1;
  }

  function renderTopics() {
    topicList.replaceChildren();
    const module = bankByModule.get(moduleSelect.value);
    if (!module) {
      const message = document.createElement('p');
      message.className = 'quiz-help';
      message.textContent = 'No topics are available for this module yet.';
      topicList.append(message);
      updateStartState();
      return;
    }
    for (const [topic, questions] of module) {
      const button = topicTemplate.content.firstElementChild.cloneNode(true);
      button.dataset.topic = topic;
      button.addEventListener('click', () => {
        button.setAttribute('aria-pressed', button.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
        updateStartState();
      });
      button.querySelector('[data-topic-name]').textContent = topic;
      button.querySelector('small').textContent = `${questions.length} questions available`;
      topicList.append(button);
    }
    updateStartState();
  }

  function shuffled(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function scrollBehavior() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  }

  function bringQuestionIntoView() {
    questionText.focus({ preventScroll: true });
    session.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
  }

  function startQuiz() {
    const module = bankByModule.get(moduleSelect.value);
    const topics = selectedTopics();
    const requested = Number.parseInt(countInput.value, 10);
    if (!module || !topics.length || !Number.isInteger(requested) || requested < 1) return;

    const sampled = [];
    const limits = [];
    for (const topic of topics) {
      const available = module.get(topic) || [];
      const limit = Math.min(requested, available.length);
      limits.push(`${topic}: ${limit}`);
      sampled.push(...shuffled(available).slice(0, limit));
    }
    quiz = shuffled(sampled);
    currentIndex = 0;
    score = 0;
    answered = false;
    result.hidden = true;
    session.hidden = false;
    startButton.textContent = 'Start another quiz';
    if (limits.some((entry) => Number(entry.split(': ').slice(-1)[0]) < requested)) {
      setStatus(`Some topics have fewer than ${requested} questions. Available questions are used: ${limits.join(' · ')}.`);
    } else {
      setStatus(`${quiz.length} questions ready. Topics will be mixed at random.`);
    }
    showQuestion();
    bringQuestionIntoView();
  }

  function showQuestion() {
    const question = quiz[currentIndex];
    answered = false;
    progressCount.textContent = `Question ${currentIndex + 1} of ${quiz.length}`;
    progressScore.textContent = `Answered ${currentIndex} · Correct ${score}`;
    questionTopic.textContent = question.topic;
    questionText.textContent = question.question;
    answers.replaceChildren();
    feedback.textContent = '';
    feedback.className = 'quiz-feedback';
    nextButton.disabled = true;
    nextButton.textContent = currentIndex === quiz.length - 1 ? 'See results' : 'Next question';

    for (const letter of ['a', 'b', 'c', 'd']) {
      const button = document.createElement('button');
      button.className = 'quiz-answer';
      button.type = 'button';
      button.dataset.answer = letter.toUpperCase();
      button.textContent = `${letter.toUpperCase()}. ${question[`answer_${letter}`]}`;
      button.addEventListener('click', () => chooseAnswer(button, question));
      answers.append(button);
    }
  }

  function chooseAnswer(button, question) {
    if (answered) return;
    answered = true;
    const chosen = button.dataset.answer;
    const correct = String(question.correct_answer).trim().toUpperCase();
    const correctButton = [...answers.querySelectorAll('.quiz-answer')].find((option) => option.dataset.answer === correct);
    for (const option of answers.querySelectorAll('.quiz-answer')) option.disabled = true;
    if (chosen === correct) {
      score += 1;
      button.classList.add('is-correct');
      feedback.textContent = 'Correct.';
      feedback.classList.add('is-right');
    } else {
      button.classList.add('is-wrong');
      if (correctButton) correctButton.classList.add('is-correct');
      const correctText = question[`answer_${correct.toLowerCase()}`] || '';
      const explanation = String(question.explanation || '').trim();
      feedback.textContent = `Not quite. The correct answer is ${correct}: ${correctText}${explanation ? ` Explanation: ${explanation}` : ''}`;
      feedback.classList.add('is-wrong');
    }
    progressScore.textContent = `Answered ${currentIndex + 1} · Correct ${score}`;
    nextButton.disabled = false;
    if (window.matchMedia('(max-width: 680px)').matches) {
      feedback.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    }
  }

  function showResults() {
    session.hidden = true;
    result.replaceChildren();
    const heading = document.createElement('h3');
    heading.textContent = 'Quiz complete';
    heading.tabIndex = -1;
    const summary = document.createElement('p');
    summary.textContent = `You answered ${quiz.length} questions and got ${score} correct.`;
    const detail = document.createElement('p');
    detail.className = 'quiz-help';
    detail.textContent = 'Change the module or topic selection and start another quiz whenever you’re ready.';
    result.append(heading, summary, detail);
    result.hidden = false;
    heading.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: scrollBehavior(), block: 'start' });
    setStatus('Quiz finished. Your selections are still available above.');
  }

  function showQuestionBankError(message) {
    moduleSelect.disabled = true;
    startButton.disabled = true;
    topicList.textContent = 'Topics could not be loaded.';
    setStatus(`${message} Open this page through the site server so the CSV can be fetched.`);
  }

  async function loadQuestionBank() {
    try {
      const response = await fetch(csvPath, { cache: 'no-store' });
      if (!response.ok) {
        showQuestionBankError(`Question bank request failed (${response.status}).`);
        return;
      }
      const entries = parseCSV(await response.text());
      const required = ['module', 'topic', 'question', 'answer_a', 'answer_b', 'answer_c', 'answer_d', 'correct_answer', 'explanation'];
      if (!entries.length || required.some((key) => !(key in entries[0]))) {
        showQuestionBankError('The CSV is missing one or more required columns.');
        return;
      }
      for (const entry of entries) {
        if (!entry.module || !entry.topic || !entry.question || !['A', 'B', 'C', 'D'].includes(entry.correct_answer.trim().toUpperCase())) continue;
        if (!required.slice(3, 7).every((key) => entry[key])) continue;
        if (!bankByModule.has(entry.module)) bankByModule.set(entry.module, new Map());
        const topics = bankByModule.get(entry.module);
        if (!topics.has(entry.topic)) topics.set(entry.topic, []);
        topics.get(entry.topic).push(entry);
      }
      if (!bankByModule.size) {
        showQuestionBankError('No valid questions were found in the CSV.');
        return;
      }
      moduleSelect.replaceChildren();
      for (const module of bankByModule.keys()) {
        const option = document.createElement('option');
        option.value = module;
        option.textContent = module;
        moduleSelect.append(option);
      }
      moduleSelect.disabled = false;
      moduleSelect.addEventListener('change', renderTopics);
      countInput.addEventListener('input', updateStartState);
      startButton.addEventListener('click', startQuiz);
      nextButton.addEventListener('click', () => {
        if (!answered) return;
        if (currentIndex + 1 < quiz.length) {
          currentIndex += 1;
          showQuestion();
          bringQuestionIntoView();
        } else {
          showResults();
        }
      });
      renderTopics();
      const total = [...bankByModule.values()].reduce((sum, topics) => sum + [...topics.values()].reduce((sub, questions) => sub + questions.length, 0), 0);
      setStatus(`Loaded ${total} questions from the CSV.`);
    } catch (error) {
      showQuestionBankError(error instanceof Error ? error.message : String(error));
    }
  }

  loadQuestionBank();
})();
