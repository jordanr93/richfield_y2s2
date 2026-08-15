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
		]},
		'internet-programming': { storage: 'internet-programming622.learning-lab.v2', chapters: [
			C('ch1', 'Topic 1: PHP and HTML Forms', 'form action|the page or script that receives submitted form data|send a form to PHP~GET|a request method that places values in the URL query string|retrieve bookmarkable non-sensitive values~POST|a request method that sends values in the request body|submit larger or sensitive values~htmlspecialchars()|a PHP function that escapes special HTML characters before output|reduce cross-site scripting risk~validation|checking submitted values against expected rules before use|reject missing or invalid data', 'ip-forms'),
			C('ch2', 'Topic 2: Sessions and Cookies', 'session_start()|the function that starts or resumes a PHP session|use session values safely~$_SESSION|the PHP superglobal storing server-side session values|keep data between requests~cookie|a small client-side value stored by the browser|remember browser-related data~$_COOKIE|the PHP superglobal reading browser cookie values|access a stored cookie~logout|the process of clearing session data and leaving a protected area|end an authenticated session', 'ip-sessions'),
			C('ch3', 'Topic 3: File System Management', 'fopen()|the PHP function that opens a file and returns a handle|start file input or output~fclose()|the PHP function that closes an open file handle|release a file after use~fread()|the PHP function that reads bytes from an open file|read file content~append mode|the fopen mode a that writes at the end of a file|add content without removing existing text~file_exists()|the PHP function that checks whether a path exists|avoid reading a missing file', 'ip-files'),
			C('ch4', 'Topic 4: Databases and SQL', 'SELECT|the SQL statement used to read rows from a table|retrieve stored data~INSERT|the SQL statement used to add a new row|create a record~UPDATE|the SQL statement used to change existing rows|modify stored data~WHERE|the SQL clause that limits rows affected by a query|target intended rows~prepared statement|a query pattern keeping SQL instructions separate from data values|reduce SQL injection risk', 'ip-sql'),
			C('ch5', 'Addendum: Running PHP with XAMPP', 'Apache|the web-server component handling local HTTP requests|serve PHP pages locally~MySQL|the database server component used with PHP examples|store relational data~localhost|the local address that points back to the current computer|open a locally served project~.php file|a file type that can contain PHP code for server execution|run server-side PHP~phpMyAdmin|a browser-based tool for administering MySQL databases|manage local databases', 'ip-xampp')
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
		const php = {
			'ip-forms': ['echo __________;', 'htmlspecialchars($_POST["name"])', 'Escape submitted output before placing it in HTML.', '$name = "Amina";\\necho htmlspecialchars($name);', ['The variable receives Amina.', 'htmlspecialchars prepares safe output.', 'The page displays Amina.']],
			'ip-sessions': ['<?php\\n__________\\n$_SESSION["user"] = "Amina";', 'session_start();', 'Start or resume the session before using $_SESSION.', 'session_start();\\n$count = ($_SESSION["count"] ?? 0) + 1;\\necho $count;', ['The session starts.', 'A missing count becomes 0 then increases to 1.', 'The page displays 1.']],
			'ip-files': ['$handle = fopen("notes.txt", "r");\\n$text = __________;\\nfclose($handle);', 'fread($handle, filesize("notes.txt"))', 'fread reads data from an open file handle.', '$handle = fopen("log.txt", "a");\\nfwrite($handle, "Visit\\\\n");\\nfclose($handle);', ['The file opens in append mode.', 'A new line is written at the end.', 'The file handle closes.']],
			'ip-sql': ['UPDATE fruit\\nSET color = "green"\\n__________;', 'WHERE id = 2', 'WHERE keeps the update limited to the intended row.', 'SELECT * FROM fruit\\nWHERE id = 2;', ['SELECT requests rows from fruit.', 'WHERE limits the result to id 2.', 'One matching row is returned.']],
			'ip-xampp': ['<?php\\n__________ "PHP is running";\\n?>', 'echo', 'echo sends text from the PHP script to the browser.', 'echo $_SERVER["SERVER_NAME"];', ['Apache receives the PHP request.', 'PHP reads the server name.', 'The browser receives the generated response.']]
		};
		const item = (moduleKey === 'programming' ? cpp : moduleKey === 'machine-learning' ? python : php)[kind];
		return { fill: { title: 'Exercise ' + (index + 1), prompt: item[0], answer: item[1], explanation: item[2] }, trace: { title: 'Trace ' + (index + 1), code: item[3], steps: item[4] } };
	}
	const diverseCodeProfiles = {
		classes: { topic: 'classes and encapsulation', setup: 'Counter counter({n});', action: 'counter.add({n} + 1);', result: 'cout << counter.value();', guard: 'counter.value() > 0', cleanup: 'counter.reset();' },
		stl: { topic: 'STL vectors and algorithms', setup: 'vector<int> values = {1, {n}, 9};', action: 'values.push_back({n} + 1);', result: 'cout << values.size();', guard: '!values.empty()', cleanup: 'values.pop_back();' },
		linked: { topic: 'linked-list nodes', setup: 'Node* head = new Node({n});', action: 'head->next = new Node({n} + 1);', result: 'cout << head->data;', guard: 'head != nullptr', cleanup: 'delete head;' },
		recursion: { topic: 'recursion and base cases', setup: 'int total = sumTo({n});', action: 'int smaller = sumTo({n} - 1);', result: 'cout << total;', guard: 'total > 0', cleanup: 'total = 0;' },
		stack: { topic: 'stack operations', setup: 'stack<int> items;\nitems.push({n});', action: 'items.push({n} + 1);', result: 'cout << items.top();', guard: '!items.empty()', cleanup: 'items.pop();' },
		queue: { topic: 'queue operations', setup: 'queue<int> jobs;\njobs.push({n});', action: 'jobs.push({n} + 1);', result: 'cout << jobs.front();', guard: '!jobs.empty()', cleanup: 'jobs.pop();' },
		search: { topic: 'searching and hashing', setup: 'vector<int> items = {1, {n}, {n} + 2};\nint target = {n};', action: 'int position = binarySearch(items, target);', result: 'cout << position;', guard: 'target >= 0', cleanup: 'target = -1;' },
		sorting: { topic: 'sorting algorithms', setup: 'vector<int> items = {{n}, 1, {n} + 2};', action: 'sort(items.begin(), items.end());', result: 'cout << items.front();', guard: 'items.size() > 1', cleanup: 'items.clear();' },
		tree: { topic: 'binary trees', setup: 'Node* root = new Node({n});', action: 'root->left = new Node({n} - 1);', result: 'cout << root->data;', guard: 'root != nullptr', cleanup: 'delete root;' },
		graph: { topic: 'graphs and traversal', setup: 'vector<vector<int>> graph({n});', action: 'graph[0].push_back(1);', result: 'cout << graph[0].size();', guard: '!graph.empty()', cleanup: 'graph.clear();' },
		'ml-foundations': { topic: 'machine-learning features and targets', setup: 'features = [[{n}], [{n} + 1]]\ntarget = [{n} * 10, ({n} + 1) * 10]', action: 'model.fit(features, target)', result: 'print(model.predict([[{n}]]))', guard: 'len(features) == len(target)', cleanup: 'features.clear()' },
		'ml-prep': { topic: 'data preprocessing', setup: 'X = [[{n}, 10], [{n} + 1, 12]]\nscaler = StandardScaler()', action: 'X_scaled = scaler.fit_transform(X)', result: 'print(X_scaled.shape)', guard: 'len(X) > 0', cleanup: 'X = []' },
		'ml-regression': { topic: 'regression evaluation', setup: 'X_train = [[{n}], [{n} + 1]]\ny_train = [{n} * 10, ({n} + 1) * 10]', action: 'model.fit(X_train, y_train)', result: 'print(model.predict([[{n}]]))', guard: 'len(X_train) == len(y_train)', cleanup: 'predictions = []' },
		'ml-classification': { topic: 'classification and accuracy', setup: "X_train = [[{n}], [{n} + 1]]\ny_train = ['pass', 'fail']", action: 'classifier.fit(X_train, y_train)', result: 'print(classifier.predict([[{n}]]))', guard: 'len(X_train) == len(y_train)', cleanup: 'predicted = []' },
		'ml-clustering': { topic: 'clustering and labels', setup: 'X = [[{n}, 1], [{n} + 1, 2], [{n} + 8, 9]]\nmodel = KMeans(n_clusters=2, random_state=0)', action: 'labels = model.fit_predict(X)', result: 'print(set(labels))', guard: 'len(X) >= 2', cleanup: 'labels = []' },
		'ip-forms': { topic: 'PHP form handling', setup: "<?php\n$formNumber = {n};\n$name = trim($_POST['name'] ?? '');", action: "$safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');", result: 'echo $safeName;', guard: "$name !== ''", cleanup: "$errors[] = 'Name is required';" },
		'ip-sessions': { topic: 'PHP sessions and cookies', setup: "<?php\nsession_start();\n$attempt = {n};\n$_SESSION['user'] = 'Amina';", action: "$_SESSION['visits'] = ($_SESSION['visits'] ?? 0) + {n};", result: "echo $_SESSION['user'];", guard: "isset($_SESSION['user'])", cleanup: 'session_unset();' },
		'ip-files': { topic: 'PHP file-system management', setup: "$handle = fopen('notes{n}.txt', 'a');", action: "fwrite($handle, 'Visit {n}\\n');", result: "echo file_exists('notes{n}.txt') ? 'Saved' : 'Missing';", guard: '$handle !== false', cleanup: 'fclose($handle);' },
		'ip-sql': { topic: 'SQL and database safety', setup: 'SELECT * FROM fruit WHERE id = {n};', action: "UPDATE fruit SET color = 'green' WHERE id = {n};", result: 'SELECT COUNT(*) FROM fruit WHERE id = {n};', guard: '{n} > 0', cleanup: 'ROLLBACK;' },
		'ip-xampp': { topic: 'running PHP with XAMPP', setup: "<?php\n$port = 808{n};\n$server = $_SERVER['SERVER_NAME'];", action: "echo 'Running on ' . $server;", result: 'echo PHP_VERSION;', guard: "php_sapi_name() !== 'cli'", cleanup: 'exit;' }
	};
	const authoredInternetBanks = {
		'ip-forms': [
			['Read a POST value', "$name = ___;", "trim($_POST['name'] ?? '')", 'Read a submitted field safely before using it.'], ['Read a GET search', "$query = ___;", "trim($_GET['q'] ?? '')", 'GET values are read from the query string.'], ['Check the request method', "if (___) {\n  // process form\n}", "$_SERVER['REQUEST_METHOD'] === 'POST'", 'Process submitted data only on a POST request.'], ['Escape output', 'echo ___;', "htmlspecialchars($name, ENT_QUOTES, 'UTF-8')", 'Escape special characters before placing data in HTML.'], ['Validate an email', "if (___ === false) {\n  $errors[] = 'Invalid email';\n}", "filter_var($email, FILTER_VALIDATE_EMAIL)", 'filter_var validates a supplied email address.'], ['Require a field', "if (___) {\n  $errors[] = 'Name is required';\n}", "$name === ''", 'Reject a blank required value.'], ['Read a checkbox', "$newsletter = ___;", "isset($_POST['newsletter'])", 'Unchecked boxes are normally absent from POST data.'], ['Use a selected option', "$course = ___;", "$_POST['course'] ?? 'Not selected'", 'Provide a fallback for an unselected option.'], ['Handle a radio choice', "$method = ___;", "$_POST['contact_method'] ?? 'email'", 'Supply a default radio choice.'], ['Republish a safe value', '<input value="___">', "htmlspecialchars($name, ENT_QUOTES, 'UTF-8')", 'Escape values when repopulating a form.'], ['Check a number range', "if (___ < 1 || $age > 120) {\n  $errors[] = 'Invalid age';\n}", "$age", 'Validate numerical input against a sensible range.'], ['Create an error list', "$errors = ___;", '[]', 'Start validation errors in an empty array.'], ['Choose a form action', '<form method="post" action="___">', "htmlspecialchars($_SERVER['PHP_SELF'])", 'Use a safe action when posting back to the same script.'], ['Stop after invalid input', "if ($errors) {\n  ___;\n}", 'exit', 'Prevent later code from using invalid input.'], ['Show a success message', "if (!$errors) {\n  echo ___;\n}", "'Form submitted successfully'", 'Only show success after validation passes.']
		],
		'ip-sessions': [
			['Start a session', '___\n$_SESSION[\'user\'] = \'Amina\';', 'session_start();', 'Start or resume a session before accessing session data.'], ['Store a login name', "$_SESSION['user'] = ___;", '$username', 'Session values keep server-side state between requests.'], ['Read a session value', "$user = ___;", "$_SESSION['user'] ?? 'Guest'", 'Use a fallback when no user has been stored.'], ['Count visits', "$_SESSION['visits'] = (___) + 1;", "$_SESSION['visits'] ?? 0", 'Increment a value while providing an initial count.'], ['Check a login', "if (___) {\n  echo 'Welcome';\n}", "isset($_SESSION['user'])", 'Check whether a login value exists.'], ['Set a cookie', "___;", "setcookie('theme', 'dark', time() + 3600)", 'A cookie is set in the browser response headers.'], ['Read a cookie', "$theme = ___;", "$_COOKIE['theme'] ?? 'light'", 'Cookies are read from the $_COOKIE superglobal.'], ['Expire a cookie', "___;", "setcookie('theme', '', time() - 3600)", 'Set an expiry in the past to remove a cookie.'], ['Remove one session value', "___;", "unset($_SESSION['user'])", 'Remove a single session item on logout.'], ['Clear session data', '___;', 'session_unset()', 'Clear the current session variables.'], ['Destroy the session', '___;', 'session_destroy()', 'Destroy the server-side session after clearing it.'], ['Regenerate an ID', '___;', 'session_regenerate_id(true)', 'Regenerate the identifier after login to reduce fixation risk.'], ['Store a flash message', "$_SESSION['message'] = ___;", "'Profile saved'", 'A session can carry a message to the next request.'], ['Read then remove a flash', "$message = $_SESSION['message'] ?? '';\n___;", "unset($_SESSION['message'])", 'Remove one-time feedback after displaying it.'], ['Choose secure cookie flags', "setcookie('token', $token, [\n  'httponly' => ___\n]);", 'true', 'HTTP-only cookies are not readable by browser scripts.']
		],
		'ip-files': [
			['Check that a file exists', "if (___) {\n  $text = file_get_contents('notes.txt');\n}", "file_exists('notes.txt')", 'Check a path before attempting to read it.'], ['Open for reading', "$handle = ___;", "fopen('notes.txt', 'r')", 'r opens an existing file for reading.'], ['Open for appending', "$handle = ___;", "fopen('notes.txt', 'a')", 'a writes new content at the end.'], ['Read all content', "$text = ___;", "file_get_contents('notes.txt')", 'file_get_contents reads an entire file into a string.'], ['Read from a handle', "$text = ___;", "fread($handle, filesize('notes.txt'))", 'fread uses an open handle and a byte count.'], ['Write a line', '___;', "fwrite($handle, 'Revision note\\n')", 'fwrite sends text to an open file handle.'], ['Close a handle', '___;', 'fclose($handle)', 'Always close a handle when file work is complete.'], ['Create or replace content', '___;', "file_put_contents('notes.txt', $text)", 'file_put_contents writes a whole string to a file.'], ['Append with file_put_contents', '___;', "file_put_contents('log.txt', $entry . PHP_EOL, FILE_APPEND)", 'FILE_APPEND preserves existing log entries.'], ['Get file size', "$bytes = ___;", "filesize('notes.txt')", 'filesize reports the number of bytes.'], ['Read file lines', "$lines = ___;", "file('notes.txt', FILE_IGNORE_NEW_LINES)", 'file returns an array of lines.'], ['Delete a file', "if (file_exists('old.txt')) {\n  ___;\n}", "unlink('old.txt')", 'unlink removes a file after its path is checked.'], ['Build a safe path', "$path = ___. '/uploads/' . $filename;", '__DIR__', '__DIR__ anchors a path to the current script directory.'], ['Check an upload error', "if ($_FILES['document']['error'] === ___) {\n  // move file\n}", 'UPLOAD_ERR_OK', 'Only process a successful file upload.'], ['Move an uploaded file', '___;', "move_uploaded_file($_FILES['document']['tmp_name'], $destination)", 'Move uploads from the temporary location to a chosen destination.']
		],
		'ip-sql': [
			['Read all fruit rows', '___ * FROM fruit;', 'SELECT', 'SELECT retrieves rows from a table.'], ['Choose columns', 'SELECT name, colour ___ fruit;', 'FROM', 'FROM identifies the source table.'], ['Filter by ID', 'SELECT * FROM fruit\n___ id = 2;', 'WHERE', 'WHERE limits rows returned or changed.'], ['Add a row', '___ INTO fruit (name, colour) VALUES (\'apple\', \'red\');', 'INSERT', 'INSERT creates a new record.'], ['Change a row', 'UPDATE fruit\n___ colour = \'green\'\nWHERE id = 2;', 'SET', 'SET names values to change in an UPDATE.'], ['Delete one row', '___ FROM fruit WHERE id = 2;', 'DELETE', 'DELETE removes matching rows.'], ['Sort results', 'SELECT * FROM fruit\nORDER BY name ___;', 'ASC', 'ASC orders values from low to high or A to Z.'], ['Count records', 'SELECT ___(*) AS total FROM fruit;', 'COUNT', 'COUNT returns the number of matching rows.'], ['Use a placeholder', 'SELECT * FROM fruit WHERE name = ___;', '?', 'Prepared statements use placeholders for data values.'], ['Prepare a query', "$statement = $connection->___('SELECT * FROM fruit WHERE id = ?');", 'prepare', 'Prepare keeps SQL structure separate from user data.'], ['Bind a value', "$statement->___('i', $id);", 'bind_param', 'bind_param attaches typed values to a prepared statement.'], ['Run a prepared query', '$statement->___();', 'execute', 'execute runs the prepared statement.'], ['Fetch a result', "$result = $statement->___();", 'get_result', 'get_result obtains rows after execution.'], ['Commit a transaction', '___;', 'COMMIT', 'COMMIT makes transaction changes permanent.'], ['Undo a transaction', '___;', 'ROLLBACK', 'ROLLBACK cancels uncommitted changes.']
		],
		'ip-xampp': [
			['Open the local server', 'http://___/project/index.php', 'localhost', 'localhost addresses the current computer.'], ['Use Apache document root', 'Place the project in xampp/___/my-project.', 'htdocs', 'htdocs is Apache’s default local web root.'], ['Create a PHP page', 'Save the server-side script as index.___.', 'php', 'PHP code is processed when the file has a .php extension.'], ['Show output', '<?php\n___ \'PHP is running\';', 'echo', 'echo writes PHP output into the HTTP response.'], ['Inspect the server name', "echo $_SERVER[___];", "'SERVER_NAME'", '$_SERVER holds request and server information.'], ['Inspect the request method', "echo $_SERVER[___];", "'REQUEST_METHOD'", 'Use REQUEST_METHOD to distinguish GET and POST.'], ['Show the PHP version', 'echo ___;', 'PHP_VERSION', 'PHP_VERSION exposes the installed runtime version.'], ['Inspect a configuration', '___();', 'phpinfo', 'phpinfo displays the current PHP configuration.'], ['Connect to MySQL', "$connection = new mysqli('localhost', 'root', ___, 'study');", "''", 'A local XAMPP MySQL root account may have an empty password.'], ['Check a connection', 'if ($connection->___) {\n  exit(\'Connection failed\');\n}', 'connect_error', 'connect_error reports a mysqli connection problem.'], ['Choose the local database tool', 'Open http://localhost/___ to administer MySQL.', 'phpmyadmin', 'phpMyAdmin is the browser-based MySQL administration tool.'], ['Use a project URL', 'http://localhost/my-project/___', 'index.php', 'Apache serves the project from its local URL.'], ['Stop on a failed include', "if (!file_exists('config.php')) {\n  ___;\n}", 'exit', 'Stop before later code depends on a missing configuration file.'], ['Include configuration', '___ \'config.php\';', 'require_once', 'require_once loads a required file one time.'], ['Show the working directory', 'echo ___();', 'getcwd', 'getcwd helps diagnose the server-side working directory.']
		]
	};
	function diversifiedPractice(kind, index) {
		const authored = authoredInternetBanks[kind];
		if (authored) {
			const fill = authored[index];
			const trace = authored[(index + 7) % authored.length];
			return { fill: { title: 'Exercise ' + (index + 1) + ': ' + fill[0], prompt: '// Task: ' + fill[0] + '\n' + fill[1], answer: fill[2], explanation: fill[3] }, trace: { title: 'Trace ' + (index + 1) + ': ' + trace[0], code: '// Trace task: ' + trace[0] + '\n' + trace[1].replace('___', trace[2]), steps: ['Identify the task: ' + trace[0] + '.', 'Read the surrounding PHP, SQL, or XAMPP context.', trace[3], 'Confirm the completed statement is appropriate for this workflow.'] } };
		}
		const profile = diverseCodeProfiles[kind];
		const value = (text, n) => text.replaceAll('{n}', String(n));
		const makeModes = (n) => [
			{ title: 'Initialise the example', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n___', n), answer: value(profile.action, n), explanation: 'Apply the core operation.' },
			{ title: 'Inspect the outcome', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\n___', n), answer: value(profile.result, n), explanation: 'Inspect the state after the operation.' },
			{ title: 'Guard the operation', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\nif (' + profile.guard + ') {\n  ___\n}', n), answer: value(profile.action, n), explanation: 'Only proceed when the precondition is satisfied.' },
			{ title: 'Release or reset state', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\n___', n), answer: value(profile.cleanup, n), explanation: 'Finish with the appropriate cleanup action.' },
			{ title: 'Verify a result', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\nif (' + profile.guard + ') {\n  ___\n}', n), answer: value(profile.result, n), explanation: 'Report the result only when the state is valid.' },
			{ title: 'Run a second operation', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\n___', n), answer: value(profile.action, n), explanation: 'Apply the operation again and observe the changed state.' },
			{ title: 'Check before output', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\nif (' + profile.guard + ') {\n  ' + profile.action + '\n  ___\n}', n), answer: value(profile.result, n), explanation: 'Combine a precondition, an operation, and an observation.' },
			{ title: 'Handle the alternative path', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\nif (!(' + profile.guard + ')) {\n  ___\n}', n), answer: value(profile.cleanup, n), explanation: 'Use the alternative path to keep state controlled.' },
			{ title: 'Observe before changing state', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n___\n' + profile.action, n), answer: value(profile.result, n), explanation: 'Observe the starting state before making a change.' },
			{ title: 'Operate then tidy up', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n___\n' + profile.cleanup, n), answer: value(profile.action, n), explanation: 'Perform the operation before releasing the resource or state.' },
			{ title: 'Produce a status check', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\nif (' + profile.guard + ') {\n  ___\n}', n), answer: value(profile.result, n), explanation: 'Confirm the intended state after an operation.' },
			{ title: 'Make a safe early exit', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\nif (!(' + profile.guard + ')) {\n  ___\n}', n), answer: value(profile.cleanup, n), explanation: 'Leave or reset safely when work cannot continue.' },
			{ title: 'Review the lifecycle', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\n' + profile.result + '\n___', n), answer: value(profile.cleanup, n), explanation: 'Complete setup, operation, observation, and cleanup.' },
			{ title: 'Confirm state before reuse', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n___\n' + profile.result, n), answer: value(profile.action, n), explanation: 'Prepare the current state before using its result.' },
			{ title: 'Complete the end-to-end example', prompt: value('// ' + profile.topic + '\n' + profile.setup + '\n' + profile.action + '\nif (' + profile.guard + ') {\n  ___\n}\n' + profile.cleanup, n), answer: value(profile.result, n), explanation: 'Tie together the chapter operation, validation, and lifecycle.' }
		];
		const fillMode = makeModes(index + 2)[index];
		const traceMode = makeModes(index + 9)[(index + 7) % 15];
		return {
			fill: { title: 'Exercise ' + (index + 1) + ': ' + fillMode.title, prompt: fillMode.prompt, answer: fillMode.answer, explanation: fillMode.explanation },
			trace: { title: 'Trace ' + (index + 1) + ': ' + traceMode.title, code: traceMode.prompt.replace('___', traceMode.answer), steps: ['Set up the ' + profile.topic + ' scenario.', 'Check the current state and preconditions.', traceMode.explanation, 'Review the completed statement and its effect.'] }
		};
	}
	function codeItems(current) { return current.codeKind ? Array.from({ length: 15 }, (_, index) => diversifiedPractice(current.codeKind, index)) : []; }

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
	let practiceState = { chapter: config.chapters[0].id, exercise: 0 };
	let traceState = { chapter: config.chapters[0].id, trace: 0, step: 0 };
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
		if (!chapter(practiceState.chapter).codeKind) practiceState.chapter = valid[0].id;
		$('.lab-code-chapter').innerHTML = valid.map((item) => '<option value="' + item.id + '">' + escapeHtml(item.title) + '</option>').join(''); $('.lab-code-chapter').value = practiceState.chapter;
		const exercises = codeItems(chapter(practiceState.chapter));
		$('.lab-code-exercise').innerHTML = exercises.map((item, index) => '<option value="' + index + '">' + escapeHtml(item.fill.title) + '</option>').join(''); $('.lab-code-exercise').value = practiceState.exercise;
		const current = exercises[practiceState.exercise]; $('.lab-practice-code').textContent = current.fill.prompt; $('.lab-code-answer').value = ''; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback'; feedback.textContent = 'Fill in the missing line, then check your answer.';
	}
	function renderTrace() {
		if (!$('.lab-trace-chapter')) return;
		const valid = config.chapters.filter((item) => item.codeKind);
		if (!chapter(traceState.chapter).codeKind) traceState.chapter = valid[0].id;
		$('.lab-trace-chapter').innerHTML = valid.map((item) => '<option value="' + item.id + '">' + escapeHtml(item.title) + '</option>').join(''); $('.lab-trace-chapter').value = traceState.chapter;
		const traces = codeItems(chapter(traceState.chapter));
		$('.lab-trace-example').innerHTML = traces.map((item, index) => '<option value="' + index + '">' + escapeHtml(item.trace.title) + '</option>').join(''); $('.lab-trace-example').value = traceState.trace;
		const current = traces[traceState.trace].trace; $('.lab-trace-code').textContent = current.code;
		$('.lab-trace-steps').innerHTML = current.steps.map((step, index) => '<div class="lab-trace-step' + (index < traceState.step ? ' is-complete' : '') + (index === traceState.step ? ' is-current' : '') + '"><strong>Step ' + (index + 1) + '</strong>' + (index <= traceState.step ? '<br>' + escapeHtml(step) : '') + '</div>').join('');
	}
	function upgradeMarkup() {
		const actions = { 'new-quiz': 'new-quiz', 'restart-quiz': 'restart-quiz', 'clear-progress': 'clear-progress', 'submit-quiz': 'submit-quiz', flip: 'flip-card', 'next-card': 'next-card', 'previous-card': 'previous-card', 'next-challenge': 'next-check' };
		root.querySelectorAll('[data-lab-action]').forEach((button) => { const action = actions[button.dataset.labAction]; if (action) button.dataset.action = action; });
		const quizPanel = root.querySelector('.learning-lab-quiz'); if (quizPanel && !quizPanel.id) quizPanel.id = 'quiz-builder';
		if (quizPanel && quizPanel.querySelector('p')) quizPanel.querySelector('p').textContent = 'Set a separate question count for every chapter. Each chapter has a bank of 40 questions.';
		const flashcard = $('.lab-flashcard');
		if (flashcard && !$('.lab-flashcard-chapter')) flashcard.insertAdjacentHTML('beforebegin', '<div class="lab-controls"><label>Chapter<select class="lab-flashcard-chapter" aria-label="Flashcard chapter"></select></label></div>');
		const flashPanel = $('#lab-flashcards') || $('.lab-flashcards-panel'); if (flashPanel && flashPanel.querySelector('p')) flashPanel.querySelector('p').textContent = 'Choose a chapter, then work through its 20 flashcards.';
		const oldChallenge = $('#lab-challenge') || $('.lab-challenge-panel');
		if (oldChallenge) {
			const title = oldChallenge.querySelector('h3'); if (title) title.textContent = 'Concept Checker';
			const description = oldChallenge.querySelector('p'); if (description) description.textContent = 'Choose a chapter and test your understanding with 20 applied concept checks.';
			const prompt = oldChallenge.querySelector('.lab-challenge-prompt'); if (prompt) prompt.classList.add('lab-checker-prompt');
			const options = oldChallenge.querySelector('.lab-challenge-options'); if (options) options.classList.add('lab-check-options');
			const feedback = oldChallenge.querySelector('.lab-challenge-feedback'); if (feedback) feedback.classList.add('lab-check-feedback');
			if (!$('.lab-checker-chapter')) oldChallenge.querySelector('p').insertAdjacentHTML('beforebegin', '<div class="lab-controls"><label>Chapter<select class="lab-checker-chapter" aria-label="Concept-checker chapter"></select></label></div>');
		}
		const explain = $('#lab-explain') || $('.lab-explain-panel'); if (explain) explain.remove();
		const prefix = root.dataset.labPrefix ? root.dataset.labPrefix + '-' : '';
		const codePracticeId = prefix + 'code-practice';
		const codeTracerId = prefix + 'code-tracer';
		if (config.chapters.some((item) => item.codeKind) && !$('#' + codePracticeId)) {
			root.querySelector('.learning-lab-grid').insertAdjacentHTML('beforeend', '<article class="learning-lab-panel" id="' + codePracticeId + '"><h3>Fill in the Code</h3><p>Each chapter has 15 code exercises.</p><div class="lab-controls"><label>Chapter<select class="lab-code-chapter"></select></label><label>Exercise<select class="lab-code-exercise"></select></label></div><pre class="lab-practice-code"><code></code></pre><label>Missing line<textarea class="lab-code-answer" spellcheck="false"></textarea></label><div class="lab-actions"><button class="lab-button" type="button" data-action="check-code">Check answer</button><button class="lab-button secondary" type="button" data-action="reveal-code">Reveal answer</button></div><div class="lab-code-feedback lab-feedback" aria-live="polite"></div></article><article class="learning-lab-panel" id="' + codeTracerId + '"><h3>Code Tracer</h3><p>Each chapter has 15 trace examples.</p><div class="lab-controls"><label>Chapter<select class="lab-trace-chapter"></select></label><label>Trace<select class="lab-trace-example"></select></label></div><pre class="lab-practice-code"><code class="lab-trace-code"></code></pre><div class="lab-actions"><button class="lab-button" type="button" data-action="trace-next">Run next step</button><button class="lab-button secondary" type="button" data-action="trace-reset">Reset trace</button></div><div class="lab-trace-steps" aria-live="polite"></div></article>');
		}
	}
	upgradeMarkup();
	renderCounts(); renderQuiz(); renderFlash(); renderChecker(); renderPractice(); renderTrace();
	root.addEventListener('change', (event) => {
		if (event.target.matches('.lab-flashcard-chapter')) { flash = { chapter: event.target.value, index: 0, flipped: false }; renderFlash(); }
		if (event.target.matches('.lab-checker-chapter')) { checker = { chapter: event.target.value, index: 0 }; renderChecker(); }
		if (event.target.matches('.lab-code-chapter')) { practiceState.chapter = event.target.value; practiceState.exercise = 0; renderPractice(); }
		if (event.target.matches('.lab-trace-chapter')) { traceState.chapter = event.target.value; traceState.trace = 0; traceState.step = 0; renderTrace(); }
		if (event.target.matches('.lab-code-exercise')) { practiceState.exercise = Number(event.target.value); renderPractice(); }
		if (event.target.matches('.lab-trace-example')) { traceState.trace = Number(event.target.value); traceState.step = 0; renderTrace(); }
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
		if (target.matches('[data-action="check-code"]')) { const current = codeItems(chapter(practiceState.chapter))[practiceState.exercise].fill; const answer = $('.lab-code-answer').value.trim().replace(/\s+/g, '').replace(/;$/, ''); const expected = current.answer.replace(/\s+/g, '').replace(/;$/, ''); const correct = answer === expected; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback ' + (correct ? 'success' : 'error'); feedback.textContent = correct ? 'Correct. ' + current.explanation : 'Not quite. Check the variable, method, and punctuation.'; }
		if (target.matches('[data-action="reveal-code"]')) { const current = codeItems(chapter(practiceState.chapter))[practiceState.exercise].fill; $('.lab-code-answer').value = current.answer; const feedback = $('.lab-code-feedback'); feedback.className = 'lab-feedback lab-code-feedback'; feedback.textContent = 'Answer: ' + current.answer + ' — ' + current.explanation; }
		if (target.matches('[data-action="trace-next"]')) { const current = codeItems(chapter(traceState.chapter))[traceState.trace].trace; traceState.step = Math.min(traceState.step + 1, current.steps.length - 1); renderTrace(); }
		if (target.matches('[data-action="trace-reset"]')) { traceState.step = 0; renderTrace(); }
	});
})();
