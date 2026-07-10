---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "73-83"
printed_pages: "71-81"
section: "Support Vector Machines (SVM)"
chapter: "Chapter Four: Supervised learning: Classification Algorithms"
keywords:
  - "svm"
  - "model"
  - "train"
  - "test"
  - "accuracy"
  - "digits"
  - "both"
  - "decision"
  - "sklearn"
  - "import"
  - "classified"
  - "line"
---

# Support Vector Machines (SVM)

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 73-83 | printed pages 71-81

Related sections: [Logistic Regression](4-2-logistic-regression.md), [Use Technology to Support Data-Driven Decisions](../../big-data-iot-600-study-guide/sections/89-use-technology-to-support-data-driven-decisions.md), [CHAPTER 6: Managing Systems Support and Security](../../information-systems-622-study-guide/sections/6-chapter-6-managing-systems-support-and-security.md), [USER SUPPORT](../../information-systems-622-study-guide/sections/6-1-user-support.md), [Sequence Container: vector](../../programming-622-study-guide/sections/2-3-sequence-container-vector.md), [Data Quality and Accuracy](../../big-data-iot-600-study-guide/sections/111-data-quality-and-accuracy.md)

## Extracted Text

```text
[PDF page 73; printed page 71]
4.4 Support Vector Machines (SVM)
SVM finds the optimal hyperplane that maximizes the margin between different classes. It uses support
vectors, the data points closest to the decision boundary, to define the margin. SVMs are particularly
powerful in high-dimensional spaces and are widely used in text classification and image recognition.

For linearly separable data, the hyperplane is given by:

wX+b=0



                                                                                                           71

[PDF page 74; printed page 72]
For non-linearly separable data, SVM uses the kernel trick (e.g., RBF kernel) to transform data into a
higher-dimensional space.

Python Implementation: Classifying Digits

 from sklearn import datasets

 from sklearn.svm import SVC

 from sklearn.model_selection import train_test_split

 from sklearn.metrics import accuracy_score



 # Load digits dataset

 digits = datasets.load_digits()

 X, y = digits.data, digits.target



 # Split data

 X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



 # Train SVM model

 svm_model = SVC(kernel='rbf')

 svm_model.fit(X_train, y_train)



 # Predict and evaluate

 y_pred = svm_model.predict(X_test)




                                                                                                         72

[PDF page 75; printed page 73]
 accuracy = accuracy_score(y_test, y_pred)

 print(f"SVM Model Accuracy: {accuracy:.2f}")

Output:

SVM Model Accuracy: 0.98

SVM achieves 98% accuracy on digit classification.

We can apply both Logistic Regression and LinearSVC models to the forge dataset and visualize the
decision boundary.




In this figure, the first feature of the forge dataset is plotted on the x-axis, and the second feature is
plotted on the y-axis, as in the previous example. The decision boundaries for both LinearSVC and
LogisticRegression are shown as straight lines, dividing the area classified as class 1 (above the line) from
the area classified as class 0 (below the line). This means any new data point above the black line will be
classified as class 1 by the respective classifier, while any point below the black line will be classified as
class 0.

Both models produce similar decision boundaries, though they misclassify two points. By default, both
models use L2 regularization, similar to how Ridge regression applies regularization.

For both LogisticRegression and LinearSVC, the trade-off between model complexity and regularization
strength is controlled by the parameter C. Higher values of C result in less regularization, meaning the

                                                                                                           73

[PDF page 76; printed page 74]
models try to fit the training data as accurately as possible. In contrast, lower values of C encourage the
models to find coefficient vectors (w) that are closer to zero, thus imposing more regularization.

An interesting characteristic of the C parameter is how it influences the model's focus. Lower values of C
lead the algorithms to focus on adjusting to the majority of data points, while higher values of C make
the models prioritize correctly classifying each individual data point.




On the left side, a very small value of C results in a model with strong regularization. Most of the class 0
points are at the top, and most of the class 1 points are at the bottom. The highly regularized model
chooses a nearly horizontal decision boundary, misclassifying two points. In the middle plot, with a
slightly higher C value, the model places more focus on the two misclassified samples, causing the
decision boundary to tilt. On the far right, with a very high C value, the model tilts the decision boundary
significantly, correctly classifying all class 0 points. However, one class 1 point remains misclassified, as
it's not possible to separate all points in this dataset using a straight line. This model, which attempts to
correctly classify every point, may not capture the overall structure of the data well, indicating it is likely
overfitting.

Similar to regression models, linear models for classification can seem restrictive in low-dimensional
spaces, as they only allow for decision boundaries that are straight lines or planes. However, in higher-
dimensional spaces, linear classification models become much more powerful, and the risk of overfitting
increases as more features are added.

Now, let's dive deeper into analyzing LinearLogistic using the Breast Cancer dataset.



                                                                                                            74

[PDF page 77; printed page 75]
The default value of C=1 provides quite good performance, with 95% accuracy on both the training and
the test set. But as training and test set performance are very close, it is likely that we are underfitting.
Let’s try to increase C to fit a more flexible model:




Using C=100 results in higher training set accuracy, and also a slightly increased test set accuracy,
confirming our intuition that a more complex model should perform better. We can also investigate what
happens if we use an even more regularized model than the default of C=1, by setting C=0.01:




As anticipated, when moving further left on the scale in the figure, starting from an underfit model, both
the   training   and   test   set   accuracies   decrease    compared      to   the   default   parameters.
Finally, let's examine the coefficients learned by the models using the three different settings of the
regularization parameter C:




                                                                                                          75

[PDF page 78; printed page 76]
Since LogisticRegression uses L2 regularization by default, the resulting plot is similar to the one produced
by Ridge regression. As the regularization strength increases, the coefficients are gradually reduced,
though they never reach zero. Upon closer examination of the plot, an intriguing pattern appears with
the third coefficient, related to "mean perimeter." When C=100 and C=1, the coefficient is negative, but
at C=0.001, it becomes positive, with a magnitude even larger than at C=1. Interpreting a model like this
might lead one to assume that a feature's coefficient directly corresponds to the class it’s associated with.
For example, one might think that a high "texture error" feature is linked to a "malignant" sample.
However, the sign change in the "mean perimeter" coefficient indicates that, depending on the model
used, a high "mean perimeter" could suggest either "benign" or "malignant." This example underscores
the importance of being careful when interpreting the coefficients of linear models.

If we desire a more interpretable model, using L1 regularization might help, as it limits the model to using
only a few features. Here is the coefficient plot and classification accuracies for L1 regularization




                                                                                                          76

[PDF page 79; printed page 77]
Many linear classification models are designed for binary classification and don't naturally extend to
multiclass problems, with logistic regression being a notable exception. To adapt a binary classifier for
multiclass classification, the one-vs.-rest strategy is commonly used. In this approach, a separate binary
model is trained for each class to distinguish that class from all others, leading to as many binary models
as there are classes. To make a prediction, all binary classifiers are applied to a test point, and the
classifier with the highest score for its class "wins," assigning that class label to the test point.

With one classifier per class, there is a separate coefficient vector (w) and intercept (b) for each class.
The class with the highest classification score, determined by the formula:

w[0] * x[0] + w[1] * x[1] + ... + w[p] * x[p] + b

is chosen as the predicted label. While the mathematical details of multiclass logistic regression differ
slightly from the one-vs.-rest approach, both methods result in a separate coefficient vector and intercept
for each class, with the same prediction method applied. Let’s now apply the one-vs.-rest approach to a




                                                                                                        77

[PDF page 80; printed page 78]
simple three-class classification dataset, where each class consists of data sampled from a Gaussian
distribution.




Now, we train a LinearSVC classifier on the dataset:




We see that the shape of the coef_ is (3, 2), meaning that each row of coef_ contains the coefficient
vector for one of the three classes and each column holds the coefficient value for a specific feature
(there are two in this dataset). The intercept_ is now a one-dimensional array, storing the intercepts for
each class. Let’s visualize the lines given by the three binary classifiers:




                                                                                                       78

[PDF page 81; printed page 79]
You can see that all the points belonging to class 0 in the training data are above the line corresponding
to class 0, which means they are on the “class 0” side of this binary classifier. The points in class 0 are
above the line corresponding to class 2, which means they are classified as “rest” by the binary classifier
for class 2. The points belonging to class 0 are to the left of the line corresponding to class 1, which means
the binary classifier for class 1 also classifies them as “rest.” Therefore, any point in this area will be
classified as class 0 by the final classifier (the result of the classification confidence formula for classifier
0 is greater than zero, while it is smaller than zero for the other two classes). But what about the triangle
in the middle of the plot? All three binary classifiers classify points there as “rest.” Which class would a
point be assigned to? The answer is the one with the highest value for the classification formula: the
class of the closest line.




                                                                                                              79

[PDF page 82; printed page 80]
4.4.1 Strengths, Weaknesses, and Parameters

The main parameter in linear models is the regularization parameter, which is called alpha in regression
models and C in LinearSVC and LogisticRegression. Higher values of alpha or smaller values of C result in
simpler models. Tuning these parameters is especially important for regression models, and it’s common
to search for them on a logarithmic scale. Additionally, you must decide between using L1 or L2
regularization. If you believe that only a few features are truly significant, L1 regularization is preferable.
Otherwise, L2 regularization is usually the default. L1 regularization is also helpful for interpretability, as
it selects only a few important features, making it easier to explain how those features affect the
predictions.

Linear models are fast to train and predict, and they scale well to large datasets. They also handle sparse
data well. For datasets with hundreds of thousands or millions of samples, the solver='sag' option in
LogisticRegression     and     Ridge     can     be     more      efficient.   Other      scalable    options
include SGDClassifier and SGDRegressor, which offer even more efficient versions of the linear models
discussed.

One advantage of linear models is that they are easy to understand, as they rely on simple formulas for
both regression and classification. However, the interpretation of the coefficients can sometimes be


                                                                                                            80

[PDF page 83; printed page 81]
unclear, especially when features are highly correlated, which can make the coefficients difficult to
interpret.

Linear models tend to perform well when the number of features significantly exceeds the number of
samples. They are often used with very large datasets because training more complex models may not
be practical. However, for lower-dimensional datasets, other models might provide better generalization
performance.




4.4.2 Evaluation Metrics for Classification

Key Metrics:

   ✓   Accuracy: Overall correctness of predictions.

   ✓   Precision: TPTP+FP\frac{TP}{TP + FP}TP+FPTP – Focuses on false positives.

   ✓   Recall: TPTP+FN\frac{TP}{TP + FN}TP+FNTP – Focuses on false negatives.

   ✓   F1-score: Harmonic mean of precision and recall.

   ✓   ROC Curve: Evaluates the tradeoff between sensitivity and specificity.




4.4 Review Questions for Chapter 4

1 What is the difference between classification and regression?
2 Explain why Logistic Regression is suitable for binary classification.
3 How does k-NN determine the class of a new data point?
4 What is the advantage of SVM over Logistic Regression?




                                                                                                    81
```
