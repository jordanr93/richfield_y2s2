(function () {
	'use strict';
	const C = (id, title, raw, codeKind) => ({
		id, title, codeKind,
		terms: raw.split('~').map((row) => {
			const [term, definition, use] = row.split('|');
			return { term, definition, use };
		})
	});
	const configs = {
		programming: { storage: 'programming622.learning-lab.v2', chapters: [
			C('ch1', 'Topic 1: Software Engineering and C++ Classes', 'software life cycle|a structured sequence for building and maintaining software|organise software work~Big-O notation|a description of algorithm growth as input size grows|compare efficiency~class|a blueprint that defines object data and operations|model related state and behaviour~object|an instance created from a class|represent one concrete entity~encapsulation|keeping data and methods together while controlling access|protect object state', 'classes'),
			C('ch2', 'Topic 2: Standard Template Library', 'STL|the C++ library of containers algorithms and iterators|reuse generic components~vector|a resizable sequence container with indexed access|store ordered values~iterator|an object used to traverse container elements|move through a container~algorithm|a reusable STL operation such as copy or sort|operate on ranges~map|an associative container of key-value pairs|look up by key', 'stl'),
			C('ch3', 'Topic 3: Linked Lists', 'node|a list element containing data and link fields|build a dynamic list~head pointer|a pointer or reference to the first list node|access the list start~tail pointer|a pointer or reference to the last list node|append efficiently~doubly linked list|a list where nodes link both next and previous|traverse in both directions~linked-list iterator|an object that moves through list nodes|visit list elements', 'linked'),
			C('ch4', 'Topic 4: Recursion', 'recursive function|a function that calls itself on a smaller problem|solve self-similar work~base case|the stopping condition in recursion|prevent infinite calls~recursive case|the part that reduces the problem and calls again|move toward the base case~call stack|the stack of active function calls and local variables|track recursive calls~iteration|repetition controlled by loops rather than self-calls|repeat work with loops', 'recursion'),
			C('ch5', 'Topic 5: Stacks', 'stack|a linear structure using last-in first-out order|reverse or defer recent work~push|the operation that adds an item to the top|place a new item~pop|the operation that removes the top item|remove the newest item~top|the operation that reads the top without removing it|inspect the newest item~postfix expression|an expression with operators after operands|evaluate expressions with a stack', 'stack'),
			C('ch6', 'Topic 6: Queues', 'queue|a linear structure using first-in first-out order|process work in arrival order~enqueue|the operation that adds an item at the rear|add a waiting item~dequeue|the operation that removes an item from the front|process the oldest item~circular queue|an array queue whose indices wrap around|reuse available array positions~priority queue|a queue that removes according to priority|serve urgent work first', 'queue'),
			C('ch7', 'Topic 7: Searching and Hashing', 'sequential search|a search that checks items one by one|search unsorted data~binary search|a search that repeatedly halves an ordered range|search sorted data efficiently~hash function|a rule that maps a key to a table index|calculate a storage location~collision|two keys mapping to the same table location|trigger collision handling~chaining|a collision strategy storing multiple items at one index|handle colliding keys', 'search'),
			C('ch8', 'Topic 8: Sorting Algorithms', 'selection sort|a sort that repeatedly selects the smallest remaining item|sort simple lists~insertion sort|a sort that inserts each item into a sorted portion|sort nearly ordered data~mergesort|a divide-and-conquer sort that merges sorted halves|sort with merging~heapsort|a sort using a heap to select an extreme value|sort with heap ordering~quicksort|a divide-and-conquer sort that partitions around a pivot|sort arrays efficiently on average', 'sorting'),
			C('ch9', 'Topic 9: Binary Trees and B-Trees', 'binary tree|a tree where each node has at most two children|represent hierarchy~binary search tree|a tree ordered with smaller keys left and larger keys right|support ordered search~inorder traversal|a traversal visiting left node then right|produce sorted BST order~AVL tree|a self-balancing binary search tree|keep height controlled~B-tree|a balanced multiway search tree|index large storage efficiently', 'tree'),
			C('ch10', 'Topic 10: Graphs', 'graph|a set of vertices connected by edges|model networks~vertex|a node in a graph|represent an entity~edge|a connection between vertices|represent a route or relationship~breadth-first search|a traversal visiting neighbours level by level using a queue|find unweighted shortest paths~minimum spanning tree|edges connecting all vertices with minimum total weight|build a least-cost network', 'graph')
		]},
		information: { storage: 'information-systems622.learning-lab.v2', chapters: [
			C('ch1', 'Chapter 1: Development Strategies', 'traditional development|a structured approach in an organisation-controlled environment|build systems through established stages~web-based system|a system delivered through web technologies and connected access|provide broad online access~cloud computing|on-demand computing resources delivered over a network|scale services and infrastructure~outsourcing|obtaining a service from an external provider|use specialist capacity~feasibility study|an assessment of whether a proposal is practical and worthwhile|support a go or no-go decision'),
			C('ch2', 'Chapter 2: User Interface Design', 'human-computer interaction|the study of how people interact with computer systems|design useful interfaces~usability|how effectively efficiently and satisfactorily users reach goals|make a system easy to use~prototype|an early system model used to gather feedback|validate ideas before build~validation rule|a control that checks entered data against conditions|reduce input errors~source document|the original record used to capture transaction data|design reliable forms'),
			C('ch3', 'Chapter 3: Data Design', 'entity|a person place thing event or concept about which data is stored|identify data to model~attribute|a property that describes an entity|store entity details~primary key|an attribute or set that uniquely identifies a row|identify each record~foreign key|an attribute that links a row to another table|maintain relationships~normalization|structuring data to reduce redundancy and anomalies|improve integrity'),
			C('ch4', 'Chapter 4: System Architecture', 'client-server architecture|an arrangement where clients request services from servers|share applications and data~scalability|the ability of a system to grow with demand|support future workload~online processing|processing transactions as they occur|give immediate results~batch processing|collecting transactions for later group processing|handle scheduled volume~legacy system|an older system that remains in operation|support existing functions'),
			C('ch5', 'Chapter 5: Systems Development', 'structured development|an approach that models processes and data in planned stages|analyse and design systems~object-oriented analysis|an approach modelling systems through collaborating objects|combine data and behaviour~agile development|an iterative approach using short adaptive cycles|respond to change~user story|a short feature description from the user perspective|express agile requirements~unit testing|testing an individual program component|find defects early'),
			C('ch6', 'Chapter 6: User Support and Security', 'corrective maintenance|maintenance that fixes faults after discovery|restore correct operation~adaptive maintenance|maintenance changing a system for a new environment|keep a system compatible~authentication|confirming the identity of a user or system|establish who requests access~authorization|controlling what an authenticated user may do|enforce permissions~business continuity|planning that keeps essential operations running after disruption|reduce outage impact')
		]},
		'machine-learning': { storage: 'machine-learning600.learning-lab.v2', chapters: [
			C('ch1', 'Chapter 1: Introduction to Machine Learning', 'machine learning|methods that learn patterns from data for predictions or decisions|solve data-driven tasks~model|a learned representation mapping inputs to outputs or structure|make predictions from features~feature|an input variable used by a model|describe an observation~target|the output a supervised model predicts|define the prediction goal~overfitting|learning training-specific noise so unseen performance declines|recognise poor generalisation', 'ml-foundations'),
			C('ch2', 'Chapter 2: Data Preprocessing and Feature Engineering', 'data cleaning|finding and correcting invalid missing duplicate or inconsistent data|improve data quality~feature scaling|placing numeric features on comparable scales|prevent large-unit dominance~normalization|rescaling values into a chosen range|prepare numeric features~one-hot encoding|representing categories with indicator columns|prepare categorical data~principal component analysis|reducing dimensions while retaining major variation|simplify high-dimensional data', 'ml-prep'),
			C('ch3', 'Chapter 3: Supervised Learning – Regression', 'regression|supervised learning that predicts a continuous numeric target|predict price or demand~linear regression|a model fitting a linear feature-target relationship|predict continuous outcomes~residual|the difference between an observed value and a prediction|inspect error~mean squared error|an average of squared prediction differences|evaluate regression error~underfitting|a model being too simple to capture the pattern|diagnose high bias', 'ml-regression'),
			C('ch4', 'Chapter 4: Supervised Learning – Classification', 'classification|supervised learning that predicts a category|assign class outcomes~logistic regression|a classifier estimating class probabilities|make class predictions~k-nearest neighbours|a classifier using nearby labelled examples|classify by local similarity~support vector machine|a classifier seeking a separating boundary with wide margin|separate classes~confusion matrix|a table comparing predicted and actual classes|inspect classification errors', 'ml-classification'),
			C('ch5', 'Chapter 5: Unsupervised Learning – Clustering', 'unsupervised learning|learning patterns without predefined target labels|discover hidden structure~clustering|grouping similar observations|segment unlabeled data~k-means|a clustering method assigning points to nearby centroids|form compact clusters~DBSCAN|a density-based method that can identify noise points|find groups and outliers~silhouette score|a measure of how well points fit their clusters|evaluate cluster separation', 'ml-clustering')
		]},
		'big-data': { storage: 'big-data-iot600.learning-lab.v2', chapters: [
			C('ch1', 'Chapter 1: Big Data Analysis and Extraction', 'big data|data whose scale speed or diversity needs specialised processing|analyse complex datasets~volume|the amount of data generated and stored|describe data scale~velocity|the speed data is generated transmitted or processed|describe data speed~variety|the diversity of data formats and sources|describe data heterogeneity~data transformation|converting data into a suitable structure for analysis|prepare data for processing'),
			C('ch2', 'Chapter 2: IoT Architectures and Applications', 'Internet of Things|a network of connected physical devices that exchange data|monitor physical environments~sensor|a device that detects or measures a physical condition|capture environmental data~actuator|a device that performs a physical action from a command|change a physical state~IoT gateway|a component linking local devices to wider networks|aggregate device data~edge computing|processing data near where it is produced|reduce latency and bandwidth'),
			C('ch3', 'Chapter 3: IoT Technologies and Standards', 'connectivity technology|a method enabling devices to communicate over a network|link IoT devices~communication protocol|a set of rules for exchanging data|enable compatible communication~interoperability|the ability of different systems to exchange and use information|integrate diverse components~serialization|converting data structures into a transferable format|exchange structured data~IoT standard|an agreed specification promoting compatibility and safety|support multi-vendor systems'),
			C('ch4', 'Chapter 4: Big Data Storage and Security', 'Hadoop|an ecosystem for distributed storage and batch processing|process data across clusters~HDFS|a distributed file system that splits and replicates data|store large files reliably~replication|keeping multiple data copies for availability and recovery|tolerate node failure~NoSQL database|a non-relational database for flexible schema or distributed scale|store varied high-volume data~encryption|transforming data so only authorised parties can read it|protect confidential data'),
			C('ch5', 'Chapter 5: Strategy Development and Big Data Analytics', 'descriptive analytics|analysis that summarises historical data|report what happened~diagnostic analytics|analysis that investigates why an outcome occurred|identify causes~predictive analytics|analysis using data and models to estimate future outcomes|forecast what could happen~prescriptive analytics|analysis recommending actions through models or optimisation|support decisions~key performance indicator|a measurable indicator of progress toward an objective|monitor strategy')
		]}
	};
	const moduleKey = document.body.dataset.learningLab;
	const config = configs[moduleKey];
	const root = document.querySelector('.module-learning-lab');
	if (!config || !root) return;
	const $ = (selector) => root.querySelector(selector);
	const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
	const shuffle = (items, seed) => items.map((item, index) => ({ item, score: Math.sin((index + 1) * 97 + seed * 131) })).sort((a, b) => a.score - b.score).map((entry) => entry.item);
	const choices = (answer, alternatives, seed) => shuffle([answer].concat(alternatives.filter((item) => item !== answer).slice(0, 3)), seed);
	const chapter = (id) => config.chapters.find((item) => item.id === id);
	const allQuestions = new Map();

	function bank(current) {
		const names = current.terms.map((item) => item.term);
		const definitions = current.terms.map((item) => item.definition);
		const uses = current.terms.map((item) => item.use);
		const result = [];
		current.terms.forEach((item, index) => {
			const pair = item.term + ' — ' + item.definition;
			const pairs = current.terms.filter((other) => other.term !== item.term).map((other) => other.term + ' — ' + other.definition);
			[
				['What is ' + item.term + '?', choices(item.definition, definitions, index), item.definition, item.use],
				['Which term means: ' + item.definition + '?', choices(item.term, names, index + 10), item.term, item.definition],
				['What is ' + item.term + ' mainly used for?', choices(item.use, uses, index + 20), item.use, item.definition],
				['A task needs this outcome: ' + item.use + '. Which concept best fits?', choices(item.term, names, index + 30), item.term, item.definition],
				['Choose the accurate statement about ' + item.term + '.', choices(item.definition, definitions, index + 40), item.definition, item.use],
				['Which pairing is correct?', choices(pair, pairs, index + 50), pair, item.use],
				['Which term belongs with this purpose: ' + item.use + '?', choices(item.term, names, index + 60), item.term, item.definition],
				['Which description best identifies ' + item.term + '?', choices(item.definition, definitions, index + 70), item.definition, item.use]
			].forEach((raw, questionIndex) => {
				const options = raw[1];
				result.push({ id: current.id + '-' + index + '-' + questionIndex, chapterId: current.id, prompt: raw[0], options, answer: options.indexOf(raw[2]), explanation: item.term + ': ' + raw[3] + '.' });
			});
		});
		return result;
	}
	config.chapters.forEach((item) => bank(item).forEach((question) => allQuestions.set(question.id, question)));
	function flashcards(current) {
		return current.terms.flatMap((item) => [{ front: item.term, back: item.definition }, { front: item.definition, back: item.term }, { front: 'What is ' + item.term + ' used for?', back: item.use }, { front: 'Complete: ' + item.term + ' helps to…', back: item.use }]);
	}
	function checks(current) {
		const names = current.terms.map((item) => item.term);
		const definitions = current.terms.map((item) => item.definition);
		return current.terms.flatMap((item, index) => [
			{ prompt: 'Which concept would you choose to ' + item.use + '?', options: choices(item.term, names, index), answer: item.term, explanation: item.term + ' is used to ' + item.use + '.' },
			{ prompt: 'Which concept is defined as: ' + item.definition + '?', options: choices(item.term, names, index + 20), answer: item.term, explanation: item.term + ': ' + item.definition + '.' },
			{ prompt: 'Which statement is accurate?', options: choices(item.definition, definitions, index + 40), answer: item.definition, explanation: item.term + ': ' + item.definition + '.' },
			{ prompt: 'A revision answer should mention which term for this purpose: ' + item.use + '?', options: choices(item.term, names, index + 60), answer: item.term, explanation: item.term + ' is the best match.' }
		]);
	}
	function practice(kind, index) {
		const n = index + 2;
		const cpp = {
			classes: ['class Counter {\\npublic:\\n  void add() { value += ' + n + '; }\\n___\\n  int value = 0;\\n};', 'private:', 'private keeps the data member encapsulated.', 'int value = ' + n + ';\\nvalue += 2;\\ncout << value;', ['value starts as ' + n, 'value becomes ' + (n + 2), 'The program prints ' + (n + 2)]],
			stl: ['vector<int> values = {1, ' + n + ', 3};\\n___\\ncout << values.size();', 'values.push_back(4);', 'push_back adds an item to a vector.', 'vector<int> v = {1, ' + n + '};\\nv.push_back(3);\\ncout << v.size();', ['v has 2 items', 'push_back adds one item', 'The program prints 3']],
			linked: ['struct Node {\\n  int data;\\n  ___\\n};', 'Node* next;', 'A node needs a link to the next node.', 'Node first{' + n + ', nullptr};\\nNode second{4, nullptr};\\nfirst.next = &second;', ['first stores ' + n, 'second stores 4', 'first now links to second']],
			recursion: ['int sumTo(int n) {\\n  if (n == 0) return 0;\\n  return n + ___;\\n}', 'sumTo(n - 1)', 'The recursive case reduces n toward the base case.', 'int f(int n) {\\n  if (n == 0) return 0;\\n  return 1 + f(n - 1);\\n}\\nf(' + n + ');', ['Calls reduce n toward 0', 'The base case returns 0', 'The result is ' + n]],
			stack: ['stack<int> values;\\nvalues.push(' + n + ');\\nint newest = ___;', 'values.top()', 'top reads the newest stack item.', 'stack<int> s;\\ns.push(' + n + ');\\ns.push(9);\\ncout << s.top();', ['The stack receives ' + n, '9 becomes the newest item', 'The program prints 9']],
			queue: ['queue<int> jobs;\\njobs.push(' + n + ');\\nint first = ___;', 'jobs.front()', 'front reads the oldest queued item.', 'queue<int> q;\\nq.push(' + n + ');\\nq.push(9);\\ncout << q.front();', ['The queue receives ' + n, '9 waits behind it', 'The program prints ' + n]],
			search: ['int mid = (first + last) / 2;\\nif (items[mid] < target) {\\n  ___\\n}', 'first = mid + 1;', 'Binary search discards the lower half when the middle value is too small.', 'int first = 0, last = 8;\\nint mid = (first + last) / 2;\\ncout << mid;', ['first is 0 and last is 8', 'mid is 4', 'The program prints 4']],
			sorting: ['vector<int> items = {3, ' + n + ', 1};\\n___', 'sort(items.begin(), items.end());', 'sort orders the iterator range.', 'vector<int> v = {3, ' + n + ', 1};\\nsort(v.begin(), v.end());\\ncout << v[0];', ['The values are unsorted', 'sort orders them ascending', 'The program prints 1']],
			tree: ['void inorder(Node* node) {\\n  if (node == nullptr) return;\\n  inorder(node->left);\\n  cout << node->data;\\n  ___\\n}', 'inorder(node->right);', 'Inorder traversal visits left node then right.', 'cout << \"left \";\\ncout << \"root \";\\ncout << \"right\";', ['Visit the left subtree', 'Then visit the root', 'Then visit the right subtree']],
			graph: ['queue<int> frontier;\\nfrontier.push(start);\\nwhile (!frontier.empty()) {\\n  int v = ___;\\n  frontier.pop();\\n}', 'frontier.front()', 'Breadth-first traversal reads from the front of its queue.', 'queue<int> q;\\nq.push(' + n + ');\\nint v = q.front();\\nq.pop();', ['The start vertex enters the queue', 'front reads it into v', 'pop removes the processed vertex']]
		};
		const python = {
			'ml-foundations': ["features = data[['hours']]\\ntarget = data['score']\\nmodel.fit(features, ___)", 'target', 'Supervised learning fits features to a known target.', 'hours = [' + n + ', 4]\\ntarget = [60, 80]\\nprint(len(hours))', ['Two feature values are stored', 'Two target values correspond to them', 'The program prints 2']],
			'ml-prep': ['from sklearn.preprocessing import StandardScaler\\nscaler = StandardScaler()\\nX_scaled = ___', 'scaler.fit_transform(X)', 'fit_transform learns scaling values and applies them to X.', 'values = [' + n + ', 8]\\nminimum = min(values)\\nprint(minimum)', ['The values are ' + n + ' and 8', 'min finds the smaller value', 'The program prints ' + Math.min(n, 8)]],
			'ml-regression': ['model.fit(X_train, y_train)\\npredictions = model.predict(X_test)\\nerror = mean_squared_error(___, predictions)', 'y_test', 'Regression error compares actual y_test values with predictions.', 'actual = ' + (n * 10) + '\\npredicted = actual - 2\\nresidual = actual - predicted\\nprint(residual)', ['actual is ' + (n * 10), 'predicted is two lower', 'The residual is 2']],
			'ml-classification': ['model.fit(X_train, y_train)\\npredicted = model.predict(X_test)\\nscore = accuracy_score(y_test, ___)', 'predicted', 'Accuracy compares actual and predicted class labels.', "actual = ['yes', 'no']\\npredicted = ['yes', 'yes']\\ncorrect = actual[0] == predicted[0]\\nprint(correct)", ['The first labels are both yes', 'The comparison is true', 'The program prints True']],
			'ml-clustering': ['model = KMeans(n_clusters=' + n + ', random_state=0)\\nlabels = ___', 'model.fit_predict(X)', 'fit_predict trains k-means and returns cluster assignments.', 'labels = [0, 1, 0, 1]\\nclusters = len(set(labels))\\nprint(clusters)', ['Two label values appear', 'set removes duplicates', 'The program prints 2']]
		};
		const item = (moduleKey === 'programming' ? cpp : python)[kind];
		return { fill: { title: 'Exercise ' + (index + 1), prompt: item[0], answer: item[1], explanation: item[2] }, trace: { title: 'Trace ' + (index + 1), code: item[3], steps: item[4] } };
	}
	function codeItems(current) { return current.codeKind ? Array.from({ length: 15 }, (_, index) => practice(current.codeKind, index)) : []; }

	const storage = {
		get(key) { try { return window.localStorage ? window.localStorage.getItem(key) : null; } catch { return null; } },
		set(key, value) { try { if (window.localStorage) window.localStorage.setItem(key, value); } catch { /* Local-file pages can block storage. */ } },
		remove(key) { try { if (window.localStorage) window.localStorage.removeItem(key); } catch { /* Local-file pages can block storage. */ } },
	};
	let state;
	try { state = JSON.parse(storage.get(config.storage)) || { current: null, attempts: [] }; } catch { state = { current: null, attempts: [] }; }
	const save = () => storage.set(config.storage, JSON.stringify(state));
	let flash = { chapter: config.chapters[0].id, index: 0, flipped: false };
	let checker = { chapter: config.chapters[0].id, index: 0 };
	let codeState = { chapter: config.chapters[0].id, exercise: 0, trace: 0, step: 0 };
	function options(chapterId, selected) { return config.chapters.map((item) => '<option value="' + item.id + '"' + (item.id === selected ? ' selected' : '') + '>' + escapeHtml(item.title) + '</option>').join(''); }
	function renderCounts() { $('.lab-counts').innerHTML = config.chapters.map((item) => '<label>' + escapeHtml(item.title) + '<input type="number" min="0" max="40" value="4" data-count="' + item.id + '"></label>').join(''); }
	function renderQuiz() {
		const current = state.current;
		if (!current) {
			$('.lab-summary').innerHTML = '<strong>No active quiz yet.</strong><div class="lab-meta"><span>40 questions per chapter</span><span>' + config.chapters.length + ' chapters</span><span>Attempts saved locally</span></div>';
			$('.lab-questions').innerHTML = ''; $('.lab-submit').disabled = true;
		} else {
			$('.lab-summary').innerHTML = '<strong>' + (current.submitted ? 'Quiz submitted.' : 'Active quiz in progress.') + '</strong><div class="lab-meta"><span>' + Object.keys(current.answers).length + '/' + current.questionRefs.length + ' answered</span><span>' + (current.submitted ? 'Score: ' + current.score.correct + '/' + current.score.total : 'Submit when ready') + '</span></div>';
			$('.lab-submit').disabled = current.submitted;
			let previous = '';
			$('.lab-questions').innerHTML = current.questionRefs.map((id, index) => {
				const question = allQuestions.get(id); const currentChapter = chapter(question.chapterId); const picked = current.answers[id];
				const heading = previous === question.chapterId ? '' : (previous = question.chapterId, '<h3 class="lab-chapter-heading">' + escapeHtml(currentChapter.title) + '</h3>');
				const body = question.options.map((option, optionIndex) => {
					const status = current.submitted ? (optionIndex === question.answer ? ' is-correct' : optionIndex === picked ? ' is-wrong' : '') : (optionIndex === picked ? ' is-selected' : '');
					return '<button type="button" class="lab-option' + status + '" data-quiz-question="' + question.id + '" data-quiz-answer="' + optionIndex + '"' + (current.submitted ? ' disabled' : '') + '><span class="lab-letter">' + String.fromCharCode(65 + optionIndex) + '</span><span>' + escapeHtml(option) + '</span></button>';
				}).join('');
				const feedback = current.submitted ? '<div class="lab-feedback ' + (picked === question.answer ? 'success' : 'error') + '"><strong>' + (picked === question.answer ? 'Correct.' : 'Review this one.') + '</strong> ' + escapeHtml(question.explanation) + '</div>' : '';
				return heading + '<article class="lab-question"><h4>' + (index + 1) + '. ' + escapeHtml(question.prompt) + '</h4><div class="lab-options">' + body + '</div>' + feedback + '</article>';
			}).join('');
		}
		$('.lab-history').innerHTML = '<h3>Saved Marks</h3>' + (state.attempts.length ? '<ol>' + state.attempts.map((item) => '<li>' + item.score + '/' + item.total + ' — ' + new Date(item.at).toLocaleString() + '</li>').join('') + '</ol>' : '<p>No submitted attempts yet.</p>');
	}
	function startQuiz() {
		const refs = config.chapters.flatMap((item) => shuffle(bank(item), Date.now()).slice(0, Math.max(0, Math.min(40, Number($('[data-count="' + item.id + '"]').value) || 0))).map((question) => question.id));
		if (!refs.length) { $('.lab-summary').innerHTML = '<strong>No questions selected.</strong> Select at least one question in a chapter.'; return; }
		state.current = { questionRefs: refs, answers: {}, submitted: false, score: null }; save(); renderQuiz();
	}
	function submitQuiz() {
		if (!state.current || state.current.submitted) return;
		const correct = state.current.questionRefs.filter((id) => state.current.answers[id] === allQuestions.get(id).answer).length;
		state.current.score = { correct, total: state.current.questionRefs.length }; state.current.submitted = true; state.attempts = [{ score: correct, total: state.current.questionRefs.length, at: Date.now() }].concat(state.attempts).slice(0, 10); save(); renderQuiz();
	}
	function renderFlash() {
		$('.lab-flashcard-chapter').innerHTML = options('', flash.chapter);
		const cards = flashcards(chapter(flash.chapter)); flash.index = (flash.index + cards.length) % cards.length; const card = cards[flash.index];
		$('.lab-flashcard').innerHTML = '<div class="card-label">' + (flash.flipped ? 'Answer' : 'Question') + ' · ' + escapeHtml(chapter(flash.chapter).title) + '</div><div class="card-text">' + escapeHtml(flash.flipped ? card.back : card.front) + '</div>';
		$('.lab-flashcard-status').textContent = 'Card ' + (flash.index + 1) + ' of ' + cards.length + ' in this chapter.';
	}
	function renderChecker() {
		$('.lab-checker-chapter').innerHTML = options('', checker.chapter);
		const questions = checks(chapter(checker.chapter)); checker.index = (checker.index + questions.length) % questions.length; const question = questions[checker.index];
		$('.lab-checker-prompt').textContent = 'Check ' + (checker.index + 1) + ' of ' + questions.length + ': ' + question.prompt;
		$('.lab-check-options').innerHTML = question.options.map((item, index) => '<button type="button" class="lab-option" data-check-answer="' + index + '"><span class="lab-letter">' + String.fromCharCode(65 + index) + '</span><span>' + escapeHtml(item) + '</span></button>').join('');
		const feedback = $('.lab-check-feedback'); feedback.className = 'lab-feedback lab-check-feedback'; feedback.textContent = 'Choose an answer, then use the feedback to check your reasoning.';
	}
	function renderPractice() {
		if (!$('.lab-code-chapter')) return;
		const valid = config.chapters.filter((item) => item.codeKind);
		if (!chapter(codeState.chapter).codeKind) codeState.chapter = valid[0].id;
		$('.lab-code-chapter').innerHTML = valid.map((item) => '<option value="' + item.id + '">' + escapeHtml(item.title) + '</option>').join(''); $('.lab-code-chapter').value = codeState.chapter;
		$('.lab-code-exercise').innerHTML = Array.from({ length: 15 }, (_, index) => '<option value="' + index + '">Exercise ' + (index + 1) + ' of 15</option>').join(''); $('.lab-code-exercise').value = codeState.exercise;
		const current = codeItems(chapter(codeState.chapter))[codeState.exercise]; $('.lab-practice-code').textContent = current.fill.prompt; $('.lab-code-answer').value = ''; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback'; feedback.textContent = 'Fill in the missing line, then check your answer.';
	}
	function renderTrace() {
		if (!$('.lab-trace-chapter')) return;
		const valid = config.chapters.filter((item) => item.codeKind);
		$('.lab-trace-chapter').innerHTML = valid.map((item) => '<option value="' + item.id + '">' + escapeHtml(item.title) + '</option>').join(''); $('.lab-trace-chapter').value = codeState.chapter;
		$('.lab-trace-example').innerHTML = Array.from({ length: 15 }, (_, index) => '<option value="' + index + '">Trace ' + (index + 1) + ' of 15</option>').join(''); $('.lab-trace-example').value = codeState.trace;
		const current = codeItems(chapter(codeState.chapter))[codeState.trace].trace; $('.lab-trace-code').textContent = current.code;
		$('.lab-trace-steps').innerHTML = current.steps.map((step, index) => '<div class="lab-trace-step' + (index < codeState.step ? ' is-complete' : '') + (index === codeState.step ? ' is-current' : '') + '"><strong>Step ' + (index + 1) + '</strong>' + (index <= codeState.step ? '<br>' + escapeHtml(step) : '') + '</div>').join('');
	}
	function upgradeMarkup() {
		const actions = { 'new-quiz': 'new-quiz', 'restart-quiz': 'restart-quiz', 'clear-progress': 'clear-progress', 'submit-quiz': 'submit-quiz', flip: 'flip-card', 'next-card': 'next-card', 'previous-card': 'previous-card', 'next-challenge': 'next-check' };
		root.querySelectorAll('[data-lab-action]').forEach((button) => { const action = actions[button.dataset.labAction]; if (action) button.dataset.action = action; });
		const quizPanel = root.querySelector('.learning-lab-quiz'); if (quizPanel && !$('#quiz-builder')) quizPanel.id = 'quiz-builder';
		if (quizPanel && quizPanel.querySelector('p')) quizPanel.querySelector('p').textContent = 'Set a separate question count for every chapter. Each chapter has a bank of 40 questions.';
		const flashcard = $('.lab-flashcard');
		if (flashcard && !$('.lab-flashcard-chapter')) flashcard.insertAdjacentHTML('beforebegin', '<div class="lab-controls"><label>Chapter<select class="lab-flashcard-chapter" aria-label="Flashcard chapter"></select></label></div>');
		const flashPanel = $('#lab-flashcards'); if (flashPanel && flashPanel.querySelector('p')) flashPanel.querySelector('p').textContent = 'Choose a chapter, then work through its 20 flashcards.';
		const oldChallenge = $('#lab-challenge');
		if (oldChallenge) {
			const title = oldChallenge.querySelector('h3'); if (title) title.textContent = 'Concept Checker';
			const description = oldChallenge.querySelector('p'); if (description) description.textContent = 'Choose a chapter and test your understanding with 20 applied concept checks.';
			const prompt = oldChallenge.querySelector('.lab-challenge-prompt'); if (prompt) prompt.classList.add('lab-checker-prompt');
			const options = oldChallenge.querySelector('.lab-challenge-options'); if (options) options.classList.add('lab-check-options');
			const feedback = oldChallenge.querySelector('.lab-challenge-feedback'); if (feedback) feedback.classList.add('lab-check-feedback');
			if (!$('.lab-checker-chapter')) oldChallenge.querySelector('p').insertAdjacentHTML('beforebegin', '<div class="lab-controls"><label>Chapter<select class="lab-checker-chapter" aria-label="Concept-checker chapter"></select></label></div>');
		}
		const explain = $('#lab-explain'); if (explain) explain.remove();
		if (config.chapters.some((item) => item.codeKind) && !$('#code-practice')) {
			root.querySelector('.learning-lab-grid').insertAdjacentHTML('beforeend', '<article class="learning-lab-panel" id="code-practice"><h3>Fill in the Code</h3><p>Each chapter has 15 code exercises.</p><div class="lab-controls"><label>Chapter<select class="lab-code-chapter"></select></label><label>Exercise<select class="lab-code-exercise"></select></label></div><pre class="lab-practice-code"><code></code></pre><label>Missing line<textarea class="lab-code-answer" spellcheck="false"></textarea></label><div class="lab-actions"><button class="lab-button" type="button" data-action="check-code">Check answer</button><button class="lab-button secondary" type="button" data-action="reveal-code">Reveal answer</button></div><div class="lab-code-feedback lab-feedback" aria-live="polite"></div></article><article class="learning-lab-panel" id="code-tracer"><h3>Code Tracer</h3><p>Each chapter has 15 trace examples.</p><div class="lab-controls"><label>Chapter<select class="lab-trace-chapter"></select></label><label>Trace<select class="lab-trace-example"></select></label></div><pre class="lab-practice-code"><code class="lab-trace-code"></code></pre><div class="lab-actions"><button class="lab-button" type="button" data-action="trace-next">Run next step</button><button class="lab-button secondary" type="button" data-action="trace-reset">Reset trace</button></div><div class="lab-trace-steps" aria-live="polite"></div></article>');
		}
	}
	upgradeMarkup();
	renderCounts(); renderQuiz(); renderFlash(); renderChecker(); renderPractice(); renderTrace();
	root.addEventListener('change', (event) => {
		if (event.target.matches('.lab-flashcard-chapter')) { flash = { chapter: event.target.value, index: 0, flipped: false }; renderFlash(); }
		if (event.target.matches('.lab-checker-chapter')) { checker = { chapter: event.target.value, index: 0 }; renderChecker(); }
		if (event.target.matches('.lab-code-chapter, .lab-trace-chapter')) { codeState.chapter = event.target.value; codeState.exercise = 0; codeState.trace = 0; codeState.step = 0; renderPractice(); renderTrace(); }
		if (event.target.matches('.lab-code-exercise')) { codeState.exercise = Number(event.target.value); renderPractice(); }
		if (event.target.matches('.lab-trace-example')) { codeState.trace = Number(event.target.value); codeState.step = 0; renderTrace(); }
	});
	root.addEventListener('click', (event) => {
		const target = event.target.closest('button, .lab-flashcard'); if (!target) return;
		if (target.matches('[data-action="new-quiz"]')) startQuiz();
		if (target.matches('[data-action="restart-quiz"]') && state.current) { state.current.answers = {}; state.current.submitted = false; state.current.score = null; save(); renderQuiz(); }
		if (target.matches('[data-action="clear-progress"]') && window.confirm('Clear saved quiz progress and marks for this browser?')) { state = { current: null, attempts: [] }; storage.remove(config.storage); renderQuiz(); }
		if (target.matches('[data-action="submit-quiz"]')) submitQuiz();
		if (target.matches('[data-quiz-question]') && state.current && !state.current.submitted) { state.current.answers[target.dataset.quizQuestion] = Number(target.dataset.quizAnswer); save(); renderQuiz(); }
		if (target.matches('.lab-flashcard, [data-action="flip-card"]')) { flash.flipped = !flash.flipped; renderFlash(); }
		if (target.matches('[data-action="next-card"]')) { flash.index += 1; flash.flipped = false; renderFlash(); }
		if (target.matches('[data-action="previous-card"]')) { flash.index -= 1; flash.flipped = false; renderFlash(); }
		if (target.matches('[data-action="next-check"]')) { checker.index += 1; renderChecker(); }
		if (target.matches('[data-check-answer]')) { const question = checks(chapter(checker.chapter))[checker.index]; const selected = question.options[Number(target.dataset.checkAnswer)]; const correct = selected === question.answer; const feedback = $('.lab-check-feedback'); feedback.className = 'lab-feedback lab-check-feedback ' + (correct ? 'success' : 'error'); feedback.textContent = (correct ? 'Correct. ' : 'Not quite. ') + question.explanation; root.querySelectorAll('[data-check-answer]').forEach((button) => { button.disabled = true; if (button.textContent.includes(question.answer)) button.classList.add('is-correct'); else if (button === target) button.classList.add('is-wrong'); }); }
		if (target.matches('[data-action="check-code"]')) { const current = codeItems(chapter(codeState.chapter))[codeState.exercise].fill; const answer = $('.lab-code-answer').value.trim().replace(/\s+/g, '').replace(/;$/, ''); const expected = current.answer.replace(/\s+/g, '').replace(/;$/, ''); const correct = answer === expected; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback ' + (correct ? 'success' : 'error'); feedback.textContent = correct ? 'Correct. ' + current.explanation : 'Not quite. Check the variable, method, and punctuation.'; }
		if (target.matches('[data-action="reveal-code"]')) { const current = codeItems(chapter(codeState.chapter))[codeState.exercise].fill; $('.lab-code-answer').value = current.answer; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback'; feedback.textContent = 'Answer: ' + current.answer + ' — ' + current.explanation; }
		if (target.matches('[data-action="trace-next"]')) { const current = codeItems(chapter(codeState.chapter))[codeState.trace].trace; codeState.step = Math.min(codeState.step + 1, current.steps.length - 1); renderTrace(); }
		if (target.matches('[data-action="trace-reset"]')) { codeState.step = 0; renderTrace(); }
	});
})();
