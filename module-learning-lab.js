(function () {
	'use strict';

	const configs = {
	programming: {
		storage: 'programming622.learning-lab.v1',
		topics: [
			['Foundations & OOP', [
				['What is encapsulation?', ['Keeping data and the operations that use it together', 'Sorting all data alphabetically', 'Removing every class from a program', 'Calling a function recursively'], 0, 'Encapsulation protects an object’s state behind a clear public interface.'],
				['What does inheritance allow a subclass to do?', ['Reuse and extend behaviour from a superclass', 'Avoid using any data members', 'Turn a queue into a stack automatically', 'Guarantee constant-time searching'], 0, 'A subclass inherits accessible members and can add or override behaviour.'],
				['What does polymorphism mean in an object-oriented design?', ['One interface can represent different underlying implementations', 'Every class must have exactly one object', 'A list can contain only integers', 'A program has no compile-time types'], 0, 'Polymorphism lets a common interface call the appropriate implementation.']
			]],
			['STL & Containers', [
				['Which STL container is designed for key-value lookup?', ['map', 'stack', 'queue', 'vector'], 0, 'map associates keys with mapped values.'],
				['What is the main advantage of a vector over a linked list?', ['Fast direct indexing through contiguous storage', 'Constant-time insertion at every position', 'No memory allocation', 'It cannot be resized'], 0, 'vector supports efficient random access using an index.'],
				['Which operation removes the top item from a stack?', ['pop', 'push', 'front', 'enqueue'], 0, 'A stack removes its most recently added item with pop.']
			]],
			['Lists & Recursion', [
				['What does a linked-list node normally contain?', ['Data and a link to another node', 'Only a fixed array index', 'A SQL table and a database', 'A hash function only'], 0, 'The link connects the node to the next node or another related node.'],
				['What must a recursive function have to stop calling itself?', ['A base case', 'A hash collision', 'A queue front', 'A destructor only'], 0, 'The base case terminates the recursive chain.'],
				['What is a common cost of inserting into the middle of an array-based list?', ['Elements may need to be shifted', 'The list must always be sorted', 'The program must recurse forever', 'The item is always discarded'], 0, 'Array elements after the insertion point may need to move.']
			]],
			['Stacks & Queues', [
				['Which access rule describes a queue?', ['FIFO: first in, first out', 'LIFO: last in, first out', 'Random only', 'Sorted by priority in every case'], 0, 'Queues process the earliest enqueued item first.'],
				['Which access rule describes a stack?', ['LIFO: last in, first out', 'FIFO: first in, first out', 'Always smallest first', 'Always largest first'], 0, 'Stacks remove the item most recently pushed.'],
				['What is a priority queue designed to remove?', ['The item with the highest or lowest priority according to its rule', 'Always the oldest item', 'Only duplicate items', 'The middle item'], 0, 'Priority determines removal order rather than arrival time alone.']
			]],
			['Algorithms & Graphs', [
				['What requirement does binary search have?', ['The data must be ordered', 'The data must be stored in a stack', 'Every value must be unique', 'The list must be circular'], 0, 'Binary search repeatedly halves an ordered search range.'],
				['What is a collision in hashing?', ['Two keys map to the same table position', 'A list reaches its base case', 'Two graphs share a vertex', 'A queue becomes empty'], 0, 'Collision handling may use probing or chaining.'],
				['What does breadth-first search generally use to manage the frontier?', ['A queue', 'A stack only', 'A binary heap only', 'A hash table only'], 0, 'Breadth-first search explores level by level using a queue.']
			]]
		],
		cards: [
			['Foundations & OOP', 'What is a class?', 'A blueprint describing an object’s data and behaviour.'],
			['Foundations & OOP', 'What is a destructor used for?', 'It performs cleanup when an object’s lifetime ends.'],
			['STL & Containers', 'What does an iterator provide?', 'A way to traverse elements in a container.'],
			['Lists & Recursion', 'What is the head of a linked list?', 'The reference or pointer to its first node.'],
			['Stacks & Queues', 'What does enqueue do?', 'Adds an item to the back of a queue.'],
			['Algorithms & Graphs', 'What is a graph vertex?', 'A node representing an entity or location in a graph.']
		],
		challenges: [
			['A help-desk ticket system must process tickets in arrival order. Which structure fits?', ['Stack', 'Queue', 'Binary search tree', 'Hash table'], 1, 'Arrival order is FIFO, so a queue is the natural fit.'],
			['A sorted list must find a value efficiently by repeatedly halving the range. Which algorithm is this?', ['Sequential search', 'Binary search', 'Bubble sort', 'Depth-first search'], 1, 'Binary search halves an ordered range at each step.'],
			['Two keys produce the same hash index. What should the implementation apply?', ['A collision strategy', 'A base case', 'A destructor', 'A queue reset'], 0, 'Linear probing and chaining are common collision strategies.']
		],
		explain: ['Explain the difference between a stack and a queue in your own words.', 'A stack is LIFO: the newest item leaves first. A queue is FIFO: the oldest item leaves first.']
	},
	information: {
		storage: 'information-systems622.learning-lab.v1',
		topics: [
			['Systems & Requirements', [
				['What is the purpose of requirements gathering?', ['To understand what stakeholders need the system to do', 'To choose colours only', 'To delete legacy data', 'To replace testing'], 0, 'Requirements describe desired capabilities, constraints, and quality expectations.'],
				['What does a feasibility study examine?', ['Whether a proposed system is practical and worthwhile', 'Only the font used on a screen', 'Only database passwords', 'Only the final user manual'], 0, 'Feasibility considers technical, economic, operational, legal, and schedule factors.'],
				['What is a functional requirement?', ['A service or behaviour the system must provide', 'A colour preference', 'A backup retention date only', 'A hardware serial number'], 0, 'Functional requirements state what the system must do.']
			]],
			['Data & Databases', [
				['What is the purpose of normalization?', ['Reduce redundancy and update anomalies', 'Make every field optional', 'Remove all relationships', 'Replace a DBMS with a spreadsheet'], 0, 'Normalization structures data to improve integrity and reduce unnecessary duplication.'],
				['What does referential integrity protect?', ['Valid relationships between related tables', 'The colour of a report', 'The speed of a keyboard', 'The number of screens'], 0, 'Foreign-key values should refer to valid related records.'],
				['What is a data dictionary?', ['A catalogue describing data elements, meanings, formats, and rules', 'A list of employee passwords', 'A network cable diagram', 'A user training timetable'], 0, 'It documents the meaning and structure of data used by the system.']
			]],
			['Architecture & Networks', [
				['What is scalability?', ['The ability to handle growth or changing demand', 'The ability to print in colour', 'The removal of all interfaces', 'The speed of one keyboard'], 0, 'Scalable systems can expand as users, transactions, or data increase.'],
				['What is the main distinction between online and batch processing?', ['Online handles transactions in real time; batch handles collected groups', 'Online always uses paper; batch always uses the cloud', 'Online has no database', 'Batch is always interactive'], 0, 'Processing mode should match urgency, volume, and business need.'],
				['What is a corporate portal?', ['A central web-based entry point to information and services', 'A backup tape', 'A programming loop', 'A physical network cable'], 0, 'Portals bring related content, applications, and services together.']
			]],
			['Interface & Development', [
				['What does usability focus on?', ['How effectively and easily users can learn and use a system', 'How many servers a company owns', 'How long backups are retained', 'How many tables exist'], 0, 'Usability includes learnability, efficiency, clarity, feedback, and error recovery.'],
				['What is prototyping useful for?', ['Exploring and validating requirements through an early model', 'Replacing all stakeholder communication', 'Encrypting a database automatically', 'Skipping acceptance testing'], 0, 'A prototype makes ideas concrete and supports feedback before full development.'],
				['What is an object in object-oriented analysis?', ['An entity that combines relevant data and behaviour', 'A database backup only', 'A network packet only', 'A report heading'], 0, 'Objects model things in the problem domain and the operations they support.']
			]],
			['Support, Security & Continuity', [
				['What is authentication?', ['Confirming a user’s identity', 'Deciding what an identified user may do', 'Compressing a file', 'Testing a report layout'], 0, 'Authorization is the separate question of what the authenticated user may access.'],
				['What is preventive maintenance?', ['Maintenance intended to reduce the chance of future failures', 'A one-time system retirement', 'A user-interface colour change', 'A requirements interview'], 0, 'Preventive work includes monitoring, patching, backups, and planned improvements.'],
				['What does a business continuity plan aim to preserve?', ['Essential operations during and after disruption', 'Only the design of a logo', 'Only a single report', 'Only the development schedule'], 0, 'Continuity planning keeps critical services operating through disruption.']
			]]
		],
		cards: [
			['Systems & Requirements', 'What is a non-functional requirement?', 'A quality or constraint such as security, response time, reliability, or usability.'],
			['Data & Databases', 'What is a primary key?', 'An attribute or combination of attributes that uniquely identifies a row.'],
			['Architecture & Networks', 'What is total cost of ownership?', 'The full lifecycle cost of acquiring, operating, supporting, and retiring a system.'],
			['Interface & Development', 'What is an iteration?', 'A repeated development cycle that delivers and refines part of the solution.'],
			['Support, Security & Continuity', 'What is authorization?', 'Controlling what an authenticated user is allowed to access or do.'],
			['Support, Security & Continuity', 'What is disaster recovery?', 'Restoring systems, data, and operations after a disruptive event.']
		],
		challenges: [
			['A hospital system must allow a doctor to view records but block a receptionist from them. Which control is central?', ['Authorization', 'Normalization', 'Prototyping', 'Capacity planning'], 0, 'Authorization controls what an authenticated person may access.'],
			['A project team builds a clickable version of a screen to test workflow with users. What are they using?', ['A prototype', 'A backup policy', 'A batch job', 'A foreign key'], 0, 'Prototypes help validate requirements and usability early.'],
			['A business wants essential services to continue during a major outage. Which planning area applies?', ['Business continuity', 'Data normalization', 'Interface colour', 'Source coding'], 0, 'Business continuity focuses on keeping critical functions operating.']
		],
		explain: ['Explain the difference between authentication and authorization.', 'Authentication asks “Who are you?” Authorization asks “What are you allowed to access or do?”']
	},
	'machine-learning': {
		storage: 'machine-learning600.learning-lab.v1',
		topics: [
			['ML Foundations', [
				['What is supervised learning?', ['Learning from labelled input-output examples', 'Learning without any data', 'Sorting files by name', 'Encrypting a database'], 0, 'The known target labels guide model learning.'],
				['What is a feature?', ['An input variable used by a model', 'The final accuracy score only', 'A cluster number with fixed meaning', 'A database password'], 0, 'Features describe the observations used to make predictions.'],
				['What is the purpose of a model?', ['Represent learned relationships to make predictions or decisions', 'Store raw data without processing', 'Replace every evaluation metric', 'Guarantee perfect accuracy'], 0, 'A model maps inputs to useful outputs based on learned patterns.']
			]],
			['Data Preparation', [
				['Why is data cleaning important?', ['It reduces errors, inconsistencies, and unusable records', 'It guarantees no bias', 'It removes the need for testing', 'It changes classification into clustering'], 0, 'Poor-quality data can produce misleading models.'],
				['What does feature scaling do?', ['Puts numeric features on comparable scales', 'Deletes the target column every time', 'Creates labels from nothing', 'Guarantees linear relationships'], 0, 'Scaling prevents large-unit features from dominating some algorithms.'],
				['What is one-hot encoding used for?', ['Representing categorical values as indicator columns', 'Sorting numerical data', 'Finding a regression slope', 'Measuring cluster density'], 0, 'Categorical levels can be represented with binary indicator features.']
			]],
			['Regression', [
				['What kind of target does regression predict?', ['A continuous numeric value', 'Only a category label', 'A file path', 'A cluster ID with meaning'], 0, 'Examples include price, temperature, and demand.'],
				['What does mean squared error penalize strongly?', ['Large prediction errors', 'Missing feature names', 'Extra class labels', 'Small datasets only'], 0, 'Squaring gives larger errors more influence.'],
				['What is overfitting?', ['Learning training-specific noise so generalization suffers', 'Using too few features in every case', 'Scaling all features', 'Having no training data'], 0, 'An overfit model performs well on training data but poorly on unseen data.']
			]],
			['Classification', [
				['What does classification predict?', ['A categorical class label', 'A continuous temperature only', 'A file size only', 'A graph edge'], 0, 'Classification assigns observations to categories such as spam or not spam.'],
				['What is a confusion matrix used to inspect?', ['Counts of predicted versus actual classes', 'Only the number of features', 'The order of a linked list', 'The size of a cluster tree'], 0, 'It shows true positives, false positives, true negatives, and false negatives.'],
				['What does precision measure?', ['The proportion of predicted positives that are actually positive', 'The proportion of all negatives', 'The number of training rows', 'The average feature scale'], 0, 'Precision focuses on the correctness of positive predictions.']
			]],
			['Clustering & Evaluation', [
				['What is clustering?', ['Grouping similar unlabeled observations', 'Predicting a known target label', 'Encrypting data', 'Sorting a table by date'], 0, 'Clustering discovers structure when predefined labels are unavailable.'],
				['What does k-means try to minimize?', ['Within-cluster variation around centroids', 'The number of feature columns only', 'Classification false positives only', 'The test-set size'], 0, 'k-means assigns points to nearby centroids and updates those centroids.'],
				['What does cluster label 0 inherently mean?', ['Nothing by itself; labels are arbitrary assignments', 'The best cluster', 'The smallest cluster always', 'A positive class'], 0, 'Interpret clusters by inspecting their profiles and data.']
			]]
		],
		cards: [
			['ML Foundations', 'What is the bias-variance trade-off?', 'The balance between underfitting from high bias and overfitting from high variance.'],
			['Data Preparation', 'What is a training set?', 'The data used to fit model parameters.'],
			['Regression', 'What is a residual?', 'The difference between an observed target and the model prediction.'],
			['Classification', 'What is recall?', 'The proportion of actual positives that the model correctly identifies.'],
			['Clustering & Evaluation', 'What is a centroid?', 'The representative mean point around which a k-means cluster is formed.'],
			['Clustering & Evaluation', 'Why use a test set?', 'To estimate performance on unseen data after model selection.']
		],
		challenges: [
			['A model predicts house prices in rands. Which task is this?', ['Regression', 'Classification', 'Clustering', 'One-hot encoding'], 0, 'Price is a continuous numeric target, so this is regression.'],
			['A fraud detector misses many genuinely fraudulent transactions. Which metric should you inspect closely?', ['Recall', 'Training-set size', 'Cluster label', 'Feature name length'], 0, 'Recall measures how many actual positives are found.'],
			['A cluster numbered 2 is assumed to mean “premium customers” without inspecting its members. What is wrong?', ['Cluster labels are arbitrary and need interpretation', 'k-means always predicts classes', 'The test set must be deleted', 'Scaling creates labels'], 0, 'Cluster numbers are assignments, not meaningful names by default.']
		],
		explain: ['Explain the difference between supervised and unsupervised learning.', 'Supervised learning learns from labelled examples. Unsupervised learning finds structure in data without predefined target labels.']
	},
	'big-data': {
		storage: 'big-data-iot600.learning-lab.v1',
		topics: [
			['Big Data Foundations', [
				['Which characteristic describes big data?', ['High volume, velocity, variety, and related complexity', 'Only small files', 'Only handwritten records', 'No need for governance'], 0, 'The guide frames big data through scale, speed, diversity, and the need for appropriate processing.'],
				['What does velocity refer to?', ['The speed at which data is generated, moved, or processed', 'The number of colours in a chart', 'The size of a hard drive only', 'A privacy policy'], 0, 'High-velocity data may require streaming or near-real-time processing.'],
				['Why is scalability important?', ['Data volume and workload can grow beyond one machine', 'It eliminates all security risks', 'It makes every data type identical', 'It removes the need for backups'], 0, 'Scalable architectures add capacity as demand increases.']
			]],
			['Platforms & Processing', [
				['What is Hadoop especially associated with?', ['Distributed storage and batch processing across clusters', 'Only mobile sensors', 'Only relational joins on one laptop', 'Graphic design'], 0, 'Hadoop provides distributed storage and processing components such as HDFS and MapReduce.'],
				['What is Spark known for?', ['Fast distributed processing with in-memory capabilities', 'Replacing every sensor', 'Only storing passwords', 'A fixed spreadsheet format'], 0, 'Spark supports fast batch and streaming analytics.'],
				['What is Kafka commonly used for?', ['Durable, high-throughput event streaming', 'Drawing entity-relationship diagrams', 'Training a single decision tree only', 'Formatting a word processor'], 0, 'Kafka moves streams of events between producers and consumers.']
			]],
			['IoT Architecture', [
				['What is the role of a sensor in an IoT system?', ['Capture measurements from the physical environment', 'Interpret every business KPI', 'Replace cloud storage', 'Guarantee privacy'], 0, 'Sensors produce observations that can be transmitted and analysed.'],
				['What does an IoT gateway often do?', ['Connect local devices to wider networks or platforms', 'Delete every data point', 'Act only as a dashboard colour', 'Replace all analytics'], 0, 'Gateways can aggregate, translate protocols, filter, and forward device data.'],
				['Why is edge processing useful?', ['It can reduce latency and bandwidth by processing near the source', 'It makes devices unnecessary', 'It prevents every possible attack', 'It removes the need for models'], 0, 'Processing near devices supports faster responses and less data transfer.']
			]],
			['Analytics & Visualization', [
				['What question does descriptive analytics answer?', ['What happened?', 'What should we do?', 'Who owns the server?', 'Which key is primary?'], 0, 'Descriptive analytics summarizes historical data.'],
				['What does predictive analytics estimate?', ['What could happen', 'Only what already happened', 'Only the colour of a chart', 'A device serial number'], 0, 'Predictive analytics uses historical data and models to estimate future outcomes.'],
				['What is a KPI?', ['A measurable indicator used to track progress toward an objective', 'A type of sensor battery', 'A database table only', 'A network cable'], 0, 'KPIs connect measurement to goals and decisions.']
			]],
			['Governance & Security', [
				['What is data governance?', ['Rules and responsibilities for data quality, access, privacy, security, and lifecycle', 'A graph algorithm', 'A sensor type', 'A compression format'], 0, 'Governance provides accountability and controls around data use.'],
				['What does privacy-by-design mean?', ['Build privacy controls into the system from the beginning', 'Collect every possible field', 'Add privacy only after a breach', 'Share data by default'], 0, 'Privacy is treated as a design requirement, not an afterthought.'],
				['What is a data pipeline’s throughput?', ['The amount of data it can process in a given period', 'The delay of one request only', 'The number of dashboard colours', 'The sensor’s battery voltage'], 0, 'Throughput measures processing capacity over time.']
			]]
		],
		cards: [
			['Big Data Foundations', 'What is variety?', 'The diversity of data formats and sources, including structured, semi-structured, and unstructured data.'],
			['Platforms & Processing', 'What is distributed processing?', 'Splitting work across multiple machines or nodes so it can run in parallel.'],
			['IoT Architecture', 'What is telemetry?', 'Data automatically collected and transmitted from devices or sensors.'],
			['Analytics & Visualization', 'What is prescriptive analytics?', 'Analysis that recommends what should be done using decision models, optimization, or simulation.'],
			['Governance & Security', 'What is purpose limitation?', 'Using collected data only for communicated or authorized purposes.'],
			['Governance & Security', 'What is latency?', 'The delay between data generation or request and processing or response.']
		],
		challenges: [
			['A factory needs a safety alert with minimal delay and unreliable internet connectivity. Where should some processing occur?', ['At the edge near the devices', 'Only in a distant batch job', 'Only in a printed report', 'Only after annual review'], 0, 'Edge processing reduces response time and dependence on continuous connectivity.'],
			['A company wants to understand why sales dropped last month. Which analytics type fits first?', ['Diagnostic analytics', 'Prescriptive analytics', 'Sensor calibration', 'Data replication'], 0, 'Diagnostic analytics investigates causes behind observed results.'],
			['A dashboard tracks conversion rate against a quarterly target. What is the conversion rate functioning as?', ['A KPI', 'A gateway', 'A hash collision', 'A storage block'], 0, 'A KPI is a measurable indicator linked to an objective.']
		],
		explain: ['Explain the difference between throughput and latency.', 'Throughput is how much data a system processes in a period. Latency is the delay before a result or response.']
	}
	};

	const moduleKey = document.body.dataset.learningLab;
	const config = configs[moduleKey];
	if (!config) return;

	const root = document.querySelector('.module-learning-lab');
	const $ = (selector) => root.querySelector(selector);
	const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
	const normalise = (value) => String(value).replace(/\s+/g, '').replace(/[.;]+$/g, '').toLowerCase();

	const quizTopics = config.topics.map(([title, questions], index) => ({ id: `topic-${index}`, title, questions: questions.map((item, qIndex) => ({ id: `${index}-${qIndex}`, chapterId: `topic-${index}`, question: item[0], options: item[1], answer: item[2], explanation: item[3] })) }));
	const questionMap = new Map(quizTopics.flatMap((topic) => topic.questions.map((question) => [question.id, question])));
	const storageKey = config.storage;
	let state = loadState();
	let flashState = { index: 0, flipped: false };
	let challengeIndex = 0;

	function loadState() {
		try { return JSON.parse(localStorage.getItem(storageKey)) || { current: null, attempts: [] }; }
		catch { return { current: null, attempts: [] }; }
	}

	function saveState() { localStorage.setItem(storageKey, JSON.stringify(state)); }

	function renderCounts() {
		$('.lab-counts').innerHTML = quizTopics.map((topic) => `<label>${escapeHtml(topic.title)}<input type="number" min="0" max="${topic.questions.length}" value="3" data-lab-count="${topic.id}"></label>`).join('');
	}

	function buildQuiz() {
		const refs = quizTopics.flatMap((topic) => {
			const count = Math.min(topic.questions.length, Math.max(0, Number.parseInt(root.querySelector(`[data-lab-count="${topic.id}"]`).value, 10) || 0));
			return topic.questions.slice().sort(() => Math.random() - .5).slice(0, count).map((question) => question.id);
		});
		if (!refs.length) { $('.lab-summary').innerHTML = '<strong>No questions selected.</strong> Set at least one topic count above 0.'; return; }
		state.current = { questionRefs: refs, answers: {}, submitted: false, score: null, createdAt: Date.now() };
		saveState(); renderQuiz();
	}

	function scoreQuiz() {
		const byTopic = quizTopics.map((topic) => {
			const refs = state.current.questionRefs.filter((id) => questionMap.get(id).chapterId === topic.id);
			const correct = refs.filter((id) => state.current.answers[id] === questionMap.get(id).answer).length;
			return { title: topic.title, correct, total: refs.length };
		});
		return { correct: byTopic.reduce((sum, item) => sum + item.correct, 0), total: state.current.questionRefs.length, byTopic };
	}

	function submitQuiz() {
		if (!state.current || state.current.submitted) return;
		state.current.score = scoreQuiz(); state.current.submitted = true;
		state.attempts = [{ score: state.current.score.correct, total: state.current.score.total, at: Date.now() }, ...(state.attempts || [])].slice(0, 8);
		saveState(); renderQuiz();
	}

	function renderQuiz() {
		const current = state.current;
		if (!current) {
			$('.lab-summary').innerHTML = `<strong>No active quiz yet.</strong><div class="lab-meta"><span>${questionMap.size} questions in the bank</span><span>Stored locally</span><span>Choose any topics</span></div>`;
			$('.lab-questions').innerHTML = ''; $('.lab-submit').disabled = true;
		} else {
			const answered = Object.keys(current.answers).length;
			const score = current.score;
			$('.lab-summary').innerHTML = `<strong>${current.submitted ? 'Quiz submitted.' : 'Active quiz in progress.'}</strong><div class="lab-meta"><span>${answered}/${current.questionRefs.length} answered</span>${score ? `<span>Score: ${score.correct}/${score.total}</span>` : '<span>Submit when ready</span>'}</div>`;
			$('.lab-submit').disabled = current.submitted;
			$('.lab-questions').innerHTML = current.questionRefs.map((id, index) => {
				const q = questionMap.get(id); const picked = current.answers[id]; const submitted = current.submitted;
				const options = q.options.map((option, optionIndex) => {
					const cls = submitted ? (optionIndex === q.answer ? 'is-correct' : optionIndex === picked ? 'is-wrong' : '') : (optionIndex === picked ? 'is-selected' : '');
					return `<button type="button" class="lab-option ${cls}" data-lab-question="${q.id}" data-lab-answer="${optionIndex}" ${submitted ? 'disabled' : ''}><span class="lab-letter">${String.fromCharCode(65 + optionIndex)}</span><span>${escapeHtml(option)}</span></button>`;
				}).join('');
				const feedback = submitted ? `<div class="lab-feedback ${picked === q.answer ? 'success' : 'error'}"><strong>${picked === q.answer ? 'Correct.' : 'Review this one.'}</strong> ${escapeHtml(q.explanation)}</div>` : '';
				return `<article class="lab-question"><h4>${index + 1}. ${escapeHtml(q.question)}</h4><div class="lab-options">${options}</div>${feedback}</article>`;
			}).join('');
		}
		$('.lab-history').innerHTML = `<h3>Saved Marks</h3>${state.attempts && state.attempts.length ? `<ol>${state.attempts.map((attempt) => `<li>${attempt.score}/${attempt.total} — ${new Date(attempt.at).toLocaleString()}</li>`).join('')}</ol>` : '<p>No submitted attempts yet.</p>'}`;
	}

	function activeCards() { return config.cards; }
	function renderFlashcard() {
		const cards = activeCards(); const card = cards[(flashState.index + cards.length) % cards.length];
		$('.lab-flashcard').innerHTML = `<div class="card-label">${flashState.flipped ? 'Answer' : 'Question'} · ${escapeHtml(card[0])}</div><div class="card-text">${escapeHtml(flashState.flipped ? card[2] : card[1])}</div>`;
		$('.lab-flashcard-status').textContent = `${((flashState.index + cards.length) % cards.length) + 1} of ${cards.length}. ${flashState.flipped ? 'Flip back or move to the next card.' : 'Try to answer before flipping.'}`;
	}

	function renderChallenge() {
		const challenge = config.challenges[challengeIndex % config.challenges.length];
		$('.lab-challenge-prompt').textContent = challenge[0];
		$('.lab-challenge-options').innerHTML = challenge[1].map((option, index) => `<button type="button" class="lab-option" data-challenge-answer="${index}"><span class="lab-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span></button>`).join('');
		$('.lab-challenge-feedback').className = 'lab-feedback'; $('.lab-challenge-feedback').textContent = 'Choose the best answer.';
	}

	function renderExplain() {
		$('.lab-explain-prompt').textContent = config.explain[0];
		$('.lab-explain-answer').textContent = config.explain[1];
		$('.lab-explain-answer').classList.remove('is-visible');
		$('.lab-explain-input').value = '';
	}

	renderCounts(); renderQuiz(); renderFlashcard(); renderChallenge(); renderExplain();

	root.addEventListener('click', (event) => {
		const quizOption = event.target.closest('[data-lab-question]');
		if (quizOption && state.current && !state.current.submitted) { state.current.answers[quizOption.dataset.labQuestion] = Number(quizOption.dataset.labAnswer); saveState(); renderQuiz(); return; }
		const challengeOption = event.target.closest('[data-challenge-answer]');
		if (challengeOption) {
			const challenge = config.challenges[challengeIndex % config.challenges.length]; const chosen = Number(challengeOption.dataset.challengeAnswer); const correct = chosen === challenge[2];
			root.querySelectorAll('[data-challenge-answer]').forEach((button) => button.disabled = true);
			$('.lab-challenge-feedback').className = `lab-feedback ${correct ? 'success' : 'error'}`;
			$('.lab-challenge-feedback').textContent = `${correct ? 'Correct.' : 'Not quite.'} ${challenge[3]}`;
			return;
		}
		if (event.target.closest('[data-lab-action="flip"]') || event.target.closest('.lab-flashcard')) { flashState.flipped = !flashState.flipped; renderFlashcard(); }
		if (event.target.closest('[data-lab-action="next-card"]')) { flashState.index += 1; flashState.flipped = false; renderFlashcard(); }
		if (event.target.closest('[data-lab-action="previous-card"]')) { flashState.index -= 1; flashState.flipped = false; renderFlashcard(); }
		if (event.target.closest('[data-lab-action="next-challenge"]')) { challengeIndex += 1; renderChallenge(); }
		if (event.target.closest('[data-lab-action="show-explain"]')) { $('.lab-explain-answer').classList.add('is-visible'); }
		if (event.target.closest('[data-lab-action="new-quiz"]')) buildQuiz();
		if (event.target.closest('[data-lab-action="restart-quiz"]') && state.current) { state.current.answers = {}; state.current.submitted = false; state.current.score = null; saveState(); renderQuiz(); }
		if (event.target.closest('[data-lab-action="clear-progress"]')) { if (window.confirm('Clear saved quiz progress and marks for this browser?')) { state = { current: null, attempts: [] }; localStorage.removeItem(storageKey); renderQuiz(); } }
		if (event.target.closest('[data-lab-action="submit-quiz"]')) submitQuiz();
	});

	$('.lab-explain-input').addEventListener('input', () => $('.lab-explain-answer').classList.remove('is-visible'));
})();
