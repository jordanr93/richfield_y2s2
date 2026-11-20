// Static rendering checks; run: node tools/test_machine_learning_ca.mjs
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('machine_learning_guide.html', root), 'utf8');
const script = readFileSync(new URL('machine-learning-ca.js', root), 'utf8');
const examScript = readFileSync(new URL('machine-learning-exam.js', root), 'utf8');
const nodes = new Map();
const handlers = new Map();
const node = id => {
  if (!nodes.has(id)) nodes.set(id, {innerHTML:'', hidden:true, addEventListener(){}});
  return nodes.get(id);
};
const context = {
  document: {getElementById:node, querySelectorAll:()=>[], addEventListener:(event,fn)=>handlers.set(event,fn)},
  window: {addEventListener(){},scrollTo(){},print(){}},
  location: {hash:''}, history: {pushState(){}}, requestAnimationFrame(){},
};
vm.runInNewContext(script, context);
vm.runInNewContext(examScript, context);
const generated = [...nodes.values()].map(n=>n.innerHTML).join('\n');
const combined = html + generated;
const ids = [...combined.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length, new Set(ids).size, 'IDs must be unique across static and generated content');
const allIds = new Set(ids);
const links = [...combined.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
// The Learning Lab adds these three targets when its script initializes.
const runtimeIds = new Set(['quiz-builder', 'code-practice', 'code-tracer']);
assert.deepEqual([...new Set(links.filter(id=>!allIds.has(id) && !runtimeIds.has(id)))], [], 'Every page jump must resolve');
const apiCardCount = (generated.match(/class="card ca-api-card"/g)||[]).length;
assert.equal(apiCardCount, 125);
assert.equal((node('ca-topics').innerHTML.match(/class="card ca-topic-card"/g)||[]).length, 24);
assert.equal((node('exam-topics').innerHTML.match(/class="card ca-topic-card"/g)||[]).length, 18);
assert.equal((node('exam-topics').innerHTML.match(/id="exam-topic-[1-7]"/g)||[]).length, 7);
const mapHeadings = [...html.slice(html.indexOf('id="ml-exam-map"'), html.indexOf('id="exam-quick-reference"')).matchAll(/<tr><td>([^<]+)<\/td>/g)].map(match=>match[1]);
const examHeadings = [...node('exam-topics').innerHTML.matchAll(/<section id="exam-topic-\d"[^>]*>\s*<h3>([^<]+)<\/h3>/g)].map(match=>match[1]);
assert.deepEqual(examHeadings, mapHeadings, 'Exam blocks must follow the focus-map headings');
assert.doesNotMatch(node('exam-topics').innerHTML, /Try it:/);
const examSnippets = [...node('exam-topics').innerHTML.matchAll(/<details class="exam-code"><summary>Code example<\/summary><pre><code>([\s\S]*?)<\/code><\/pre><\/details>/g)].map(match=>match[1]);
assert.ok(examSnippets.length >= 8, 'Short code examples should cover practical exam areas');
assert.ok(examSnippets.every(code=>code.trim().split('\n').length <= 10), 'Exam code examples stay within 10 lines');
assert.equal((generated.match(/Full explanation in general content/g)||[]).length, apiCardCount);
assert.ok(!/<input[^>]*type="search"/.test(generated), 'Navigation must not depend on search');
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-R"[^]*?href="#ca-api-reshape"/);
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-I"[^]*?href="#ca-api-coef"\s*>intercept_/);
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-Y"[^]*?href="#ca-api-labels"\s*>ylabel/);
assert.match(node('ca-api-groups').innerHTML, /reshape\(-1, 1\)/);
assert.match(node('ca-api-groups').innerHTML, /reshape\(1, -1\)/);
assert.match(html, /id="general-module-content"/);
assert.match(html, /id="ch5-guide-practice"/);
assert.match(node('ca-name-index').innerHTML, /href="#ca-api-gmm"/);
assert.ok(html.indexOf('id="ca-api"') > html.indexOf('id="chapter-5"'), 'API reference follows general chapters');
assert.ok(html.indexOf('id="general-code-reference"') > html.indexOf('id="chapter-5"'), 'Code walkthroughs follow Chapter 5');
assert.ok(html.indexOf('id="general-code-cluster-k"') > html.indexOf('id="general-code-reference"'), 'Topic 5 has a code walkthrough');
assert.ok(html.indexOf('id="ca-api"') < html.indexOf('id="preparation-station"'), 'API reference precedes learning lab');
assert.match(html, /PCA centres the input but does not automatically scale/);
assert.match(html, /ccp_alpha/);
assert.match(html, /SSE=600 and SST=20,000/);
assert.match(html, /id="ch3-classification-trees"/);
assert.match(html, /id="ch4-metric-worked"/);
assert.doesNotMatch(html, /raw\.githubusercontent\.com\/mwaskom\/seaborn-data\/master\/iris\.csv/);
assert.doesNotMatch(html, /df\.iloc\[:, :\] = imputer\.fit_transform\(df\)/);
console.log(`PASS: 24 CA cards, 18 exam cards in 7 focus areas, ${examSnippets.length} short code examples, ${apiCardCount} API cards, ${links.length} page links.`);
// Emit snippets for optional syntax checks without importing or running their libraries.
if (process.argv.includes('--snippets')) {
  const snippets = [...combined.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)].map(m=>m[1]);
  console.log(JSON.stringify(snippets));
}
