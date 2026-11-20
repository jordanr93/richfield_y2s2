/* Exam quick-reference cards follow the seven headings in the focus map. */
(() => {
  'use strict';
  const root = document.getElementById('exam-topics');
  if (!root) return;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const link = (id, label, extra = '') => `<a href="#${id}" ${extra}>${esc(label)}</a>`;
  const snippets = {
    libraries: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
X = np.array([[1], [2], [3]])
y = pd.Series([2, 4, 6])
model = LinearRegression().fit(X, y)
plt.scatter(X[:, 0], y)
plt.plot(X[:, 0], model.predict(X))
plt.show()`,
    matrix: `from sklearn.metrics import confusion_matrix
y_true = [1, 1, 0, 0]
y_pred = [1, 0, 1, 0]
tn, fp, fn, tp = confusion_matrix(y_true, y_pred, labels=[0, 1]).ravel()
print(tn, fp, fn, tp)  # 1 1 1 1`,
    metrics: `from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
y_true = [1, 1, 1, 0, 0, 0]
y_pred = [1, 1, 0, 1, 0, 0]
print(accuracy_score(y_true, y_pred))
print(precision_score(y_true, y_pred))
print(recall_score(y_true, y_pred))
print(f1_score(y_true, y_pred))`,
    scaling: `from sklearn.preprocessing import MinMaxScaler, StandardScaler
X_train = [[0], [10], [20]]
X_test = [[15]]
minmax = MinMaxScaler().fit(X_train)
standard = StandardScaler().fit(X_train)
print(minmax.transform(X_test))
print(standard.transform(X_test))`,
    pca: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA
pipe = make_pipeline(StandardScaler(), PCA(n_components=0.95))
Z_train = pipe.fit_transform(X_train)
print(pipe.named_steps["pca"].explained_variance_ratio_.sum())
Z_test = pipe.transform(X_test)`,
    linear: `from sklearn.linear_model import LinearRegression
X_train, y_train = [[1], [2], [3]], [2, 3, 5]
X_test, y_test = [[4], [5]], [6, 8]
line = LinearRegression()
line.fit(X_train, y_train)
slope = line.coef_[0]        # 1.5
intercept = line.intercept_  # about 0.33
print(f"y = {slope:.2f}x + {intercept:.2f}")
print(line.predict(X_test))  # about [6.33, 7.83]
print(line.score(X_test, y_test))  # test R², about 0.93`,
    polynomial: `from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)
model = make_pipeline(PolynomialFeatures(degree=2), LinearRegression())
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
print(r2_score(y_test, y_pred))`,
    r2: `from sklearn.metrics import r2_score
y_true = [1, 2, 3]
y_pred = [3, 3, 3]
print(r2_score(y_true, y_pred))  # -1.5`,
    logistic: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
model = make_pipeline(StandardScaler(), LogisticRegression(C=0.5))
model.fit(X_train, y_train)
print(model.predict_proba(X_test[:1]))`,
    svm: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
model = make_pipeline(StandardScaler(), SVC(kernel="rbf", C=1))
model.fit(X_train, y_train)
print(model.predict(X_test))`,
    knn: `from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=5))
model.fit(X_train, y_train)
print(model.predict(X_test))`,
    kmeans: `from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
X_scaled = StandardScaler().fit_transform(X)
model = KMeans(n_clusters=3, random_state=42, n_init=10).fit(X_scaled)
print(model.labels_)
print(model.cluster_centers_, model.inertia_)`,
    chooseK: `from sklearn.cluster import KMeans
from sklearn.metrics import silhouette_score
for k in range(2, 6):
    model = KMeans(n_clusters=k, random_state=42, n_init=10).fit(X_scaled)
    print(k, model.inertia_, silhouette_score(X_scaled, model.labels_))`,
    alternatives: `from sklearn.cluster import AgglomerativeClustering, DBSCAN
hierarchy = AgglomerativeClustering(n_clusters=3).fit_predict(X_scaled)
density = DBSCAN(eps=0.4, min_samples=5).fit_predict(X_scaled)
print(hierarchy[:5])
print(density[:5])  # -1 means noise`
  };
  // [heading, [title, explanation paragraphs, remember, full-notes target, optional snippet]]
  const focuses = [
    ['Python ML libraries', [
      ['What each library does', [
        'NumPy supplies efficient numerical arrays, shapes, reshaping and vectorised arithmetic. Pandas supplies Series and DataFrames for reading, selecting, inspecting and cleaning tabular data. Use Pandas to identify features X and the target y before modelling.',
        'Scikit-learn supplies data splits, preprocessing transformers, estimators and evaluation metrics. Matplotlib makes scatter plots, fitted curves and diagnostic charts. In a typical workflow, Pandas loads the data, NumPy represents its numerical values, scikit-learn trains and evaluates, and Matplotlib makes the result visible.'
      ], 'Know the purpose of the library named in a code line: read_csv loads a table, fit learns a model, and plot draws a figure.', 'ch1-9-python-libraries', 'libraries']
    ]],
    ['Model fit and evaluation', [
      ['Judging overfitting and underfitting', [
        'Compare the same score on training and held-out test data. A model with high training performance and much lower test performance may have learned noise or training-specific details: overfitting, often linked to high variance.',
        'A model that performs poorly on both sets may be too simple for the pattern: underfitting, often linked to high bias. For example, train R²=0.95 and test R²=0.40 suggests overfitting; both near 0.20 suggest underfitting. Check the baseline, data quality and leakage before deciding.'
      ], 'A small train–test gap is not automatically good if both scores are weak.', 'ch1-4-over-under-fitting'],
      ['Confusion matrix: TP, FP, FN and TN', [
        'Choose the positive class first. TP is an actual positive predicted positive; FP is an actual negative predicted positive; FN is an actual positive predicted negative; TN is an actual negative predicted negative.',
        'Scikit-learn places actual classes in rows and predicted classes in columns. For labels [0,1], the matrix is [[TN,FP],[FN,TP]]. If positive means “customer leaves”, a leaver predicted to stay is FN and a stayer predicted to leave is FP.'
      ], 'Changing the positive class changes which error is called FP or FN.', 'ch4-metric-worked', 'matrix'],
      ['Accuracy, precision, recall and F1', [
        'Accuracy=(TP+TN)/N measures overall correctness. Precision=TP/(TP+FP) asks how many predicted positives were right. Recall=TP/(TP+FN) asks how many real positives were found. F1=2TP/(2TP+FP+FN) balances precision and recall.',
        'With TP=18, FP=2, FN=6 and TN=24, accuracy=84%, precision=90%, recall=75% and F1≈81.8%. The low recall reveals six missed positives even though accuracy is reasonably high. Choose metrics using the costs of false alarms and missed cases.'
      ], 'Accuracy alone can hide poor minority-class detection; F1 does not include true negatives.', 'ch4-metric-worked', 'metrics']
    ]],
    ['Preprocessing and PCA', [
      ['Min-Max scaling and standardisation', [
        'Min-Max scaling uses (x−training minimum)/(training maximum−training minimum), usually mapping training values to 0–1. Standardisation uses (x−training mean)/training standard deviation, giving the training feature mean 0 and standard deviation 1.',
        'If visits range from 0 to 40, a value of 20 becomes 0.5 under Min-Max scaling. If the mean is 10 and standard deviation 5, the same value becomes 2 after standardisation. Fit the scaler on training rows and reuse it on test rows.'
      ], 'A new test value may be outside 0–1 after Min-Max scaling; neither method removes outliers.', 'ch2-3-scaling', 'scaling'],
      ['Why k-NN, SVM and k-Means need comparable scales', [
        'k-NN ranks neighbours using distances, k-Means assigns points to nearby centroids, and SVM uses feature geometry to place a decision boundary and margin. If one column is measured in thousands and another in single units, the large-scale column can dominate the calculation.',
        'Scaling gives each feature a comparable numerical range. It does not prove that the features are equally informative. A decision tree generally splits on thresholds and is much less sensitive to feature scale.'
      ], 'Scale before distance-based fitting, and keep the same learned transformation for new rows.', 'ch2-3-scaling'],
      ['Curse of dimensionality and PCA', [
        'With many features, observations become sparse and distance comparisons can lose meaning. PCA rotates centred feature space onto orthogonal directions ordered by how much variance they capture; keeping fewer directions reduces the number of inputs.',
        'If PC1 explains 70% of variance and PC2 explains 20%, keeping both retains 90% of measured variance. Use explained_variance_ratio_ or a cumulative plot to choose components. Standardise first when feature units differ, and fit PCA on training data only.'
      ], 'Retaining 90% of variance is not a promise of 90% classification accuracy or predictive information.', 'ch2-pca-applications-detail', 'pca']
    ]],
    ['Regression', [
      ['Linear regression: slope, intercept and least squares', [
        'For one feature, the fitted equation is ŷ=mx+b. The slope m is the predicted change in y for one extra unit of x. The intercept b is the prediction at x=0. After fit(), read coef_[0] and intercept_ as attributes without parentheses. Use predict() for new numerical predictions and score(X_test, y_test) for test R².',
        'Least squares finds coefficients that minimise Σ(y−ŷ)². For ŷ=2x+3 at x=4, predict 11. If the actual value is 13, the residual is 2 and contributes 4 to squared error. An intercept outside the observed x range may have little practical meaning.'
      ], 'A slope describes association in the fitted data; it does not establish causation.', 'ch3-regression-math', 'linear'],
      ['Polynomial regression: complete the code', [
        'train_test_split supplies X_train, X_test, y_train and y_test. make_pipeline connects PolynomialFeatures with LinearRegression so the same expansion happens at training and prediction time. fit learns coefficients, predict returns numbers, and r2_score compares them with the true test targets.',
        'Degree 2 adds squared terms and, with multiple inputs, interactions. This can fit a curved relationship, but higher degrees create more features and can overfit. Compare train and test R² across sensible degrees, using validation rather than tuning on the final test set.'
      ], 'PolynomialFeatures transforms input columns; it is not a model that predicts by itself.', 'ch3-exam-polynomial', 'polynomial'],
      ['R², negative values and bias–variance', [
        'R²=1−SSE/SST, where SSE sums squared prediction errors and SST sums squared deviations from the evaluation-set mean. R²=1 is perfect, 0 matches that mean baseline, and a negative value is worse than the baseline.',
        'For actual [1,2,3], the mean is 2 and SST=2. Predicting [3,3,3] yields SSE=5 and R²=−1.5. High train R² but much lower test R² suggests high variance; low values on both suggest high bias. Check model suitability, data quality and leakage as well.'
      ], 'Interpret R² on the same evaluation observations when comparing models.', 'ch3-exam-r2', 'r2']
    ]],
    ['Classification algorithms', [
      ['Logistic regression: sigmoid and C', [
        'Binary logistic regression computes a linear score z and maps it through sigmoid 1/(1+e^(−z)) to a positive-class probability. At z=0, the probability is 0.5. A threshold turns probabilities into class labels; changing the threshold changes the precision–recall trade-off.',
        'C is inverse regularisation strength in scikit-learn LogisticRegression. A smaller C applies stronger regularisation and usually shrinks coefficients more; a larger C allows a closer training fit. Choose C using validation performance, not the final test set.'
      ], 'Despite its name, LogisticRegression predicts classes or class probabilities, not a continuous regression target.', 'ch4-2-logistic-regression', 'logistic'],
      ['SVM: hyperplane, margin, support vectors and RBF', [
        'A hyperplane is a flat decision boundary with one fewer dimension than the feature space. With two features it is a straight line, and with three features it is a flat plane. For example, if the boundary is x₁ + x₂ = 5, the point (2, 2) is on one side and (3, 3) is on the other. A linear SVM uses the side a point falls on to predict its class.',
        'The margin is the band around the boundary. A linear SVM seeks a wide margin while penalising points that fall inside it or on the wrong side. Support vectors are training points that determine the boundary, typically sitting on or inside the margin or on the wrong side of the boundary.',
        'An RBF kernel can create a curved boundary, so it may model nonlinear patterns that plain linear logistic regression misses. This is a potential advantage, not a guarantee. Scale inputs and tune C and gamma; logistic regression is often easier to interpret and supplies direct class probabilities.'
      ], 'A good training boundary is not enough: compare held-out results after tuning.', 'ch4-knn-svm-detail', 'svm'],
      ['k-NN: lazy learning, distance and majority vote', [
        'k-NN is lazy learning because fitting mainly stores the labelled training rows. For a new row it calculates a distance to training rows, takes the k nearest, and predicts the majority class. Euclidean distance between (1,2) and (4,6) is √(3²+4²)=5.',
        'With k=3 and neighbour labels [1,1,0], predict class 1. Small k follows local detail and is sensitive to noise; large k smooths the boundary and may underfit. Scaling matters because a large-unit feature otherwise dominates neighbour rankings.'
      ], 'A new sample still needs a 2D feature row with the same columns and scaling as training.', 'ch4-knn-svm-detail', 'knn']
    ]],
    ['Clustering algorithms', [
      ['k-Means: unsupervised steps and scaling', [
        'k-Means learns from feature rows without known class labels. Choose k and initialise centroids; assign every point to its nearest centroid; update each centroid to the mean of assigned points; repeat until assignments or centres stabilise.',
        'For one-dimensional points [1,2,8,9] and k=2, the groups [1,2] and [8,9] have centres 1.5 and 8.5, giving inertia 4×0.5²=1. Scale mixed-unit features first because distance and centroid placement otherwise favour larger units.'
      ], 'Cluster labels are arbitrary IDs; group 0 has no built-in meaning.', 'ch5-3-kmeans', 'kmeans'],
      ['Choose k: elbow and silhouette', [
        'Inertia is the sum of squared distances from points to their assigned centres. Plot it across candidate k values and look for an elbow where adding a group gives a much smaller improvement. Inertia alone tends to improve with larger k.',
        'Silhouette compares each point’s average within-cluster distance a with the nearest other-cluster distance b: (b−a)/max(a,b). If a=0.2 and b=0.6, the score is about 0.67. Higher values usually mean clearer separation, but they do not prove that the groups are useful.'
      ], 'Silhouette needs at least two groups and fewer groups than data points; compare the same feature representation.', 'ch5-6-clustering-metrics', 'chooseK'],
      ['Hierarchical clustering and DBSCAN', [
        'Agglomerative hierarchical clustering starts with individual points and merges nearby groups into a tree, which a dendrogram can display. It is useful when nested structure or a visual choice of cut matters.',
        'DBSCAN groups dense regions using eps (neighbourhood radius) and min_samples (density requirement). It can find irregular shapes and mark sparse points as noise, labelled −1, without choosing k. Both methods still depend on feature scaling and parameter choices.'
      ], 'A poor DBSCAN eps can yield nearly all noise or one large group.', 'ch5-hierarchical-dbscan-deeper', 'alternatives']
    ]],
    ['Calculations and interpretation', [
      ['Classification versus clustering results', [
        'Classification uses labelled examples to predict a known category. A confusion matrix evaluates predictions against true labels, with precision and recall describing particular error types. Clustering finds similar rows without predefined group labels.',
        'For clustering, inspect inertia, silhouette and group profiles. Cluster IDs may be permuted without changing the grouping, so comparing ID 0 directly with true class 0 as if it were a prediction is invalid. If genuine reference labels exist, use a clustering-aware comparison such as adjusted Rand index.'
      ], 'Choose the metric from the task: R² for numeric prediction, confusion-matrix metrics for labelled classes, and internal scores plus interpretation for unlabelled groups.', 'ml-index-compare-tasks'],
      ['Calculate, then explain what the number means', [
        'For TP=18, FP=2, FN=6 and TN=24, accuracy=42/50=84%, precision=18/20=90%, recall=18/24=75% and F1=36/44≈81.8%. Six real positives were missed, so recall may matter more than overall accuracy when misses are costly.',
        'For regression, SSE=5 and SST=2 gives R²=−1.5: worse than the evaluation-set mean. For clustering, a=0.2 and b=0.6 gives silhouette≈0.67: that point is closer to its own group. Each answer needs the metric, arithmetic and a plain-language interpretation.'
      ], 'Check denominators, define the positive class, and never claim a useful cluster from one score alone.', 'ml-exam-calculations']
    ]]
  ];
  root.innerHTML = focuses.map(([title, cards], groupIndex) => {
    const group = groupIndex + 1;
    return `<section id="exam-topic-${group}" class="ca-block" data-nav-section>
      <h3>${esc(title)}</h3>
      <nav class="ca-jumps" aria-label="${esc(title)} topics">
        ${cards.map((card, index) => link(`exam-t${group}-${index}`, card[0])).join('')}
      </nav>
      <div class="ca-grid">
        ${cards.map(([name, paragraphs, remember, target, snippet], index) => `
          <article class="card ca-topic-card" id="exam-t${group}-${index}">
            <h4>${esc(name)}</h4>
            ${paragraphs.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}
            <p><strong>Remember:</strong> ${esc(remember)}</p>
            ${snippet ? `<details class="exam-code"><summary>Code example</summary><pre><code>${esc(snippets[snippet])}</code></pre></details>` : ''}
            <div class="ca-entry-links">
              ${link(target, 'Full explanation', 'data-ca-read')}
              ${link(`exam-topic-${group}`, 'Focus area index')}
            </div>
          </article>`).join('')}
      </div>
    </section>`;
  }).join('');
})();
