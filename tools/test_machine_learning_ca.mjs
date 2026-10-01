// Static rendering checks; run: node tools/test_machine_learning_ca.mjs
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const root = new URL('../', import.meta.url);
const html = readFileSync(new URL('machine_learning_guide.html', root), 'utf8');
const script = readFileSync(new URL('machine-learning-ca.js', root), 'utf8');
const nodes = new Map();
const handlers = new Map();
const node = id => {
  if (!nodes.has(id)) nodes.set(id, {innerHTML:'', hidden:true, addEventListener(){}});
  return nodes.get(id);
};
vm.runInNewContext(script, {
  document: {getElementById:node, querySelectorAll:()=>[], addEventListener:(event,fn)=>handlers.set(event,fn)},
  window: {addEventListener(){},scrollTo(){},print(){}},
  location: {hash:''}, history: {pushState(){}}, requestAnimationFrame(){},
});
const generated = [...nodes.values()].map(n=>n.innerHTML).join('\n');
const combined = html + generated;
const ids = [...combined.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(ids.length, new Set(ids).size, 'IDs must be unique across static and generated content');
const allIds = new Set(ids);
const links = [...combined.matchAll(/href="#([^"]+)"/g)].map(m=>m[1]);
// The Learning Lab adds these three targets when its script initializes.
const runtimeIds = new Set(['quiz-builder', 'code-practice', 'code-tracer']);
assert.deepEqual([...new Set(links.filter(id=>!allIds.has(id) && !runtimeIds.has(id)))], [], 'Every page jump must resolve');
assert.equal((generated.match(/class="card ca-api-card"/g)||[]).length, 88);
assert.equal((generated.match(/class="card ca-topic-card"/g)||[]).length, 24);
assert.equal((generated.match(/Full explanation in general content/g)||[]).length, 88);
assert.ok(!/<input[^>]*type="search"/.test(generated), 'Navigation must not depend on search');
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-R"[^]*?href="#ca-api-reshape"/);
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-I"[^]*?href="#ca-api-coef"\s*>intercept_/);
assert.match(node('ca-name-index').innerHTML, /id="ca-letter-Y"[^]*?href="#ca-api-labels"\s*>ylabel/);
assert.match(node('ca-api-groups').innerHTML, /reshape\(-1, 1\)/);
assert.match(node('ca-api-groups').innerHTML, /reshape\(1, -1\)/);
assert.match(html, /id="general-module-content"/);
assert.ok(html.indexOf('id="ca-api"') > html.indexOf('id="chapter-5"'), 'API reference follows general chapters');
assert.ok(html.indexOf('id="ca-api"') < html.indexOf('id="preparation-station"'), 'API reference precedes learning lab');
assert.match(html, /<details id="assignment-body" class="assignment-body">/, 'Assignment body starts collapsed');
assert.match(html, /PCA centres the input but does not automatically scale/);
assert.match(html, /ccp_alpha/);
assert.match(html, /SSE=600 and SST=20,000/);
assert.match(html, /href="#ch3-classification-trees">Classification Trees/);
assert.match(html, /href="#ch4-metric-worked">Classification Metrics Worked Example/);
assert.doesNotMatch(html, /raw\.githubusercontent\.com\/mwaskom\/seaborn-data\/master\/iris\.csv/);
assert.doesNotMatch(html, /df\.iloc\[:, :\] = imputer\.fit_transform\(df\)/);
console.log(`PASS: 24 topic cards, 88 API cards, ${links.length} page links, unique anchors and key content checks.`);
// Emit snippets for optional syntax checks without importing or running their libraries.
if (process.argv.includes('--snippets')) {
  const snippets = [...combined.matchAll(/<pre><code>([\s\S]*?)<\/code><\/pre>/g)].map(m=>m[1]);
  console.log(JSON.stringify(snippets));
}
