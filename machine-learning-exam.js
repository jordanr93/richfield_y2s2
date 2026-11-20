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

  // [Name, use, formula, variables]
  const formulaGroups = [
    ['Preprocessing and PCA', [
      ['Min-Max scaling', 'Map a feature to the default training range of 0 to 1.',
        'x′ = (x − x_min) / (x_max − x_min)', 'x is the original value, x′ is the scaled value, and x_min and x_max are the training feature’s minimum and maximum.'],
      ['Standardisation', 'Centre and scale a feature before comparing distances or fitting PCA.',
        'z = (x − μ) / σ', 'x is the original value, z is the standardised value, and μ and σ are the training feature’s mean and standard deviation.'],
      ['PCA projection', 'Find the score of a centred observation along a retained principal component.',
        'zⱼ = (x − μ) · vⱼ', 'x is the observation vector, μ is the training mean vector, vⱼ is the unit direction of component j, · denotes the dot product, and zⱼ is its component score.'],
      ['PCA explained variance', 'Find the fraction of total variance captured by one component or by the first k components.',
        'rⱼ = λⱼ / Σₗ λₗ; retained fraction = r₁ + ⋯ + rₖ', 'λⱼ is the variance captured by component j (its eigenvalue), l indexes all components in the denominator, rⱼ is the fraction for component j, and k is the number retained.']
    ]],
    ['Regression', [
      ['Simple linear regression', 'Predict a numerical target from one feature.',
        'ŷ = mx + b', 'ŷ is the prediction, x is the feature value, m is the slope (predicted change in y per unit of x), and b is the intercept (prediction at x = 0).'],
      ['Least squares coefficients', 'Find the slope and intercept of the best-fit line for one feature with nonzero variance.',
        'm = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / Σ(xᵢ − x̄)²; b = ȳ − mx̄', 'xᵢ and yᵢ are the feature and target for training observation i, x̄ and ȳ are their training means, m is the slope, and b is the intercept. Both sums run over the training observations.'],
      ['Residual and sum of squared errors (SSE)', 'Measure prediction errors. Ordinary least squares minimises training SSE.',
        'eᵢ = yᵢ − ŷᵢ; SSE = Σ eᵢ²', 'For observation i, yᵢ is the actual target, ŷᵢ is its prediction, and eᵢ is its residual. Sum over all observations being evaluated.'],
      ['Polynomial regression', 'Predict a curved relationship by fitting a linear model to powers of the input.',
        'ŷ = β₀ + β₁x + β₂x² + ⋯ + β_d xᵈ', 'ŷ is the prediction, x is the input feature, d is the polynomial degree, β₀ is the intercept, and βⱼ is the fitted coefficient for x to the power j.'],
      ['Mean absolute error (MAE)', 'Measure average error magnitude in the original target units.',
        'MAE = Σ |yᵢ − ŷᵢ| / n', 'yᵢ is the actual target and ŷᵢ is the prediction for observation i. n is the number of evaluated observations.'],
      ['Mean squared error (MSE)', 'Measure average squared error, giving larger misses more weight.',
        'MSE = Σ (yᵢ − ŷᵢ)² / n = SSE / n', 'yᵢ is the actual target, ŷᵢ is the prediction for observation i, n is the number of evaluated observations, and SSE is the sum of squared errors.'],
      ['Coefficient of determination (R²)', 'Compare predictions with the mean-target baseline. A negative value means worse than that baseline.',
        'R² = 1 − SSE / SST; SST = Σ (yᵢ − ȳ)²', 'SSE is the sum of squared prediction errors, SST is the total squared deviation from the mean, yᵢ is actual target i, and ȳ is the mean of the targets on the set being scored. The formula assumes SST > 0.']
    ]],
    ['Classification algorithms and distances', [
      ['Logistic regression sigmoid', 'Turn a linear score into an estimated positive-class probability and apply a threshold.',
        'z = w · x + b; p = 1 / (1 + exp(−z)); predict positive when p ≥ t', 'x is the feature vector, w is the fitted weight vector, b is the intercept, z is the linear score, exp is the exponential function, p is the estimated probability, and t is the chosen threshold.'],
      ['Linear SVM hyperplane and margin', 'Find the decision boundary and the width of the margin in the standard SVM scaling.',
        'w · x + b = 0; margin width = 2 / ‖w‖₂', 'x is a point in feature space, w is the weight vector perpendicular to the boundary, b is the intercept, and ‖w‖₂ is the Euclidean length of w. The two margin boundaries have scores +1 and −1.'],
      ['RBF kernel', 'Measure similarity between points for an SVM that can learn curved boundaries.',
        'K(x, q) = exp(−γ ‖x − q‖₂²)', 'x and q are feature vectors, K is their kernel similarity, exp is the exponential function, γ (gamma) controls how quickly similarity falls, and ‖x − q‖₂² is squared Euclidean distance.'],
      ['Euclidean distance', 'Rank neighbours in k-NN or find the nearest centroid in k-Means.',
        'd(x, q) = √[Σⱼ (xⱼ − qⱼ)²]', 'xⱼ and qⱼ are feature j for points x and q. Sum over every feature and take the square root to get distance d.'],
      ['k-NN majority vote', 'Predict the class with the most votes when neighbours are weighted equally.',
        'ŷ = argmax over c of count(yᵢ = c among the k nearest neighbours)', 'ŷ is the predicted class, c is a candidate class, yᵢ is the label of neighbour i, and k is the number of neighbours. Argmax returns the class with the largest count.']
    ]],
    ['Confusion matrix and classification metrics', [
      ['Binary confusion matrix', 'Identify the counts used to calculate classification metrics.',
        '[[TN, FP], [FN, TP]]; N = TP + FP + FN + TN', 'Rows are actual labels and columns are predicted labels, both ordered negative then positive. TP is a correctly predicted positive, FP a false alarm, FN a missed positive, TN a correctly predicted negative, and N the total.'],
      ['Accuracy', 'Find the fraction of all predictions that are correct.',
        '(TP + TN) / N', 'TP and TN are correctly predicted positives and negatives. N is the total number of predictions.'],
      ['Precision', 'Find the fraction of predicted positives that are correct.',
        'TP / (TP + FP)', 'TP counts correct positive predictions and FP counts false alarms.'],
      ['Recall (sensitivity)', 'Find the fraction of actual positives that the classifier detects.',
        'TP / (TP + FN)', 'TP counts detected positives and FN counts missed positives.'],
      ['F1 score', 'Balance precision and recall using their harmonic mean.',
        '2TP / (2TP + FP + FN)', 'TP counts detected positives, FP counts false alarms, and FN counts missed positives.'],
      ['Specificity and false positive rate', 'Measure how often actual negatives are correctly rejected or falsely flagged.',
        'Specificity = TN / (TN + FP); FPR = FP / (TN + FP)', 'TN counts correctly rejected negatives and FP counts false alarms. Their sum is the actual negative count.']
    ]],
    ['Clustering', [
      ['k-Means centroid update', 'Move a centroid to the mean of its assigned points.',
        'μⱼ = (Σ xᵢ in cluster j) / nⱼ', 'μⱼ is the centroid of cluster j, xᵢ is an assigned feature vector, and nⱼ is the number of points assigned to that cluster. The sum is taken feature by feature.'],
      ['k-Means inertia', 'Measure within-cluster squared distance and plot it against k for the elbow method.',
        'Inertia = Σᵢ ‖xᵢ − μ_(cᵢ)‖₂²', 'xᵢ is observation i, cᵢ is its assigned cluster, μ_(cᵢ) is that cluster’s centroid, and ‖·‖₂² is squared Euclidean length. The sum covers all observations.'],
      ['Silhouette coefficient and mean score', 'Compare cohesion within a cluster with separation from the nearest other cluster.',
        'sᵢ = (bᵢ − aᵢ) / max(aᵢ, bᵢ); mean score = Σ sᵢ / n', 'aᵢ is the mean distance from point i to other points in its own cluster. bᵢ is the smallest mean distance to any other cluster. sᵢ is the point’s coefficient (set to 0 for singleton clusters), and n is the number of scored points.'],
      ['Davies–Bouldin index', 'Compare within-cluster spread with the separation of each cluster from its most similar rival. Lower values indicate better separation relative to spread.',
        'DB = (1/k) Σᵢ max over j ≠ i of [(Sᵢ + Sⱼ) / d(μᵢ, μⱼ)]', 'k is the number of clusters. Sᵢ and Sⱼ are the mean distances to the centres of clusters i and j. d is Euclidean distance between their centroids μᵢ and μⱼ.'],
      ['DBSCAN core point condition', 'Check whether a point has enough nearby observations to be a core point.',
        'count(q with d(x, q) ≤ ε) ≥ min_samples', 'x is the candidate point, q ranges over all observations including x, d is the chosen distance, ε (eps) is the neighbourhood radius, and min_samples is the minimum count.'],
      ['Adjusted Rand index (ARI)', 'Compare two groupings, such as predicted clusters and reference labels, while adjusting for chance.',
        'ARI = 2(AD − BC) / [(A + B)(B + D) + (A + C)(C + D)]', 'Count unordered pairs of distinct observations. A counts pairs together in both groupings and D counts pairs apart in both. B counts pairs together only in the reference grouping and C counts pairs together only in the predicted grouping. Identical groupings score 1, including when the denominator is zero.']
    ]]
  ];
  document.getElementById('exam-formula-tables').innerHTML = formulaGroups.map(([title, rows]) => `
    <h4>${esc(title)}</h4>
    <div class="table-wrap"><table aria-label="${esc(title)} formulas">
      <thead><tr><th scope="col">Name</th><th scope="col">Use</th><th scope="col">Formula</th><th scope="col">Variables</th></tr></thead>
      <tbody>${rows.map(([name, use, formula, variables]) => `
        <tr><th scope="row">${esc(name)}</th><td>${esc(use)}</td><td><code>${esc(formula)}</code></td><td>${esc(variables)}</td></tr>`).join('')}
      </tbody>
    </table></div>`).join('');
})();
