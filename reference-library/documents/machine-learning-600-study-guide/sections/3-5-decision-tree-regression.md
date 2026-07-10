---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "53-61"
printed_pages: "51-59"
section: "Decision Tree Regression"
chapter: "Chapter 3: Supervised Learning – Regression Algorithms"
keywords:
  - "decision"
  - "tree"
  - "trees"
  - "model"
  - "regression"
  - "you"
  - "node"
  - "feature"
  - "split"
  - "they"
  - "predicted"
  - "price"
---

# Decision Tree Regression

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 53-61 | printed pages 51-59

Related sections: [Polynomial Regression](3-4-polynomial-regression.md), [Hands-on Exercise: House Price Prediction](3-6-hands-on-exercise-house-price-prediction.md), [Linear Regression](3-3-linear-regression.md), [AVL Tree Rotations](../../programming-622-study-guide/sections/9-8-avl-tree-rotations.md), [Binary Tree Traversal](../../programming-622-study-guide/sections/9-2-binary-tree-traversal.md), [Binary Tree Traversal and Functions as Parameters](../../programming-622-study-guide/sections/9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 53; printed page 51]
3.5 Decision Tree Regression

  Decision Tree Regression is a non-parametric model that splits the data into branches based on
  feature values. Each terminal node (leaf) represents a decision rule, and the prediction is typically
  the average of the outcomes in that node.

  Decision trees structure their model by recursively partitioning the feature space, where each node
  selects the feature and threshold that best minimizes prediction error. One of their key advantages
  is interpretability, as the decision-making process at each split is transparent and can be easily
  visualized. However, decision trees are prone to overfitting, especially if they are too deep or not
  properly pruned. Recent advancements in machine learning have led to the development of
  ensemble methods such as Random Forests and Gradient Boosting, which build upon decision trees
  to enhance performance and reduce variance.

  Decision tree regressors split data based on decision rules that are easy to follow. The splitting
  criterion (often the mean squared error) is computed at each node to decide the best split. While
  decision trees are intuitive and interpretable, they are also sensitive to small changes in the data.
  Ensemble methods are commonly used to mitigate this instability.

  Example: Predicting House Prices Using Decision Trees

      from sklearn.tree import DecisionTreeRegressor

      # Train a Decision Tree Regressor

      tree_model = DecisionTreeRegressor()

      tree_model.fit(X, y)



      # Predicting using the decision tree model

      predicted_price_tree = tree_model.predict(new_house)

      print(f"Predicted price (Decision Tree Regression): ${predicted_price_tree[0]:.2f}K")




                                                                                                    51

[PDF page 54; printed page 52]
3.5.1 Decision Trees

   Decision trees are popular for both classification and regression tasks. They work by learning a
   sequence of if/else questions that guide the decision-making process. These questions are like those
   asked in a game of 20 Questions. For example, if you need to distinguish between bears, hawks,
   penguins, and dolphins, you might begin by asking if the animal has feathers, which would narrow
   down the options to two possibilities. If the answer is "yes," you could further ask if the animal can
   fly, helping you differentiate between hawks and penguins. If the answer is "no" (indicating the
   animal does not have feathers), you’d still need another question to distinguish between dolphins
   and bears, such as whether the animal has fins.

   This decision-making process can be visually represented.




   In this example, each node in the decision tree represents either a question or a terminal (leaf) node,
   which holds the final answer. The edges connect the answers to the next question that needs to be
   asked based on the current answer.

   In machine learning terms, we have developed a model to classify four different animal types (hawks,
   penguins, dolphins, and bears) using three features: "has feathers," "can fly," and "has fins." Rather
   than manually creating these models, we can employ supervised learning to learn them directly from
   data.




                                                                                                       52

[PDF page 55; printed page 53]
Building Decision Trees

Now, let's go through the process of constructing a decision tree for a 2D classification dataset. The
dataset, named two_moons, consists of two half-moon shapes, with each class containing 75 data
points.

Building a decision tree involves figuring out the sequence of if/else questions that will lead to the
correct classification in the most efficient manner. In machine learning, these questions are referred
to as tests (not to be confused with the test set, which is used to assess the model's ability to
generalize). While data typically is not structured with simple binary yes/no features like in the
animal example, it's usually represented with continuous features. The tests for continuous data are
framed as "Is feature i greater than value a?"

Controlling the Complexity of Decision Trees

When constructing a decision tree, if it grows until all leaves are pure (i.e., until every leaf node
perfectly classifies the training data), the resulting model tends to be too complex and is at risk of
overfitting. A pure leaf indicates that the tree has achieved perfect accuracy on the training set,
where each data point in a leaf correctly predicts the majority class. This overfitting is visible on the
left side of the figure, where regions of class 1 are located within areas that should belong to class 0.
On the far right, a narrow band predicted as class 0 around a point from class 0 appears unnatural,
influenced by outlier points far from the main cluster in that class.

To avoid overfitting, two main strategies are commonly employed: halting the tree-building process
early (pre-pruning) or building the tree fully and then pruning away nodes that contribute little value
(post-pruning). Pre-pruning methods involve limiting the tree’s maximum depth, restricting the
number of leaves, or enforcing a minimum number of data points required in a node before it can
be split further.




                                                                                                      53

[PDF page 56; printed page 54]
In scikit-learn decision trees are implemented using the DecisionTreeRegressor and
DecisionTreeClassifier classes. It’s worth noting that scikit-learn supports only pre-pruning and not
post-pruning.

Let us explore the impact of pre-pruning in more detail using the Breast Cancer dataset. First, we
import the dataset and split it into training and test sets. Then, we create a model using the default
configuration, where the tree grows until all leaves are pure. We also fix
the random_state parameter to ensure consistent results for tie-breaking during tree construction.




As expected, the accuracy on the training set is 100% because the leaves are pure, and the tree has
grown deep enough to memorize all the labels in the training data. However, the accuracy on the
test set is slightly lower than the approximately 95% accuracy observed with the linear models we
previously discussed.

If the depth of a decision tree is not restricted, it can become excessively deep and complex. As a
result, unpruned trees are more prone to overfitting and may struggle to generalize effectively to
new data. To mitigate this, we can apply pre-pruning to prevent the tree from perfectly fitting the
training data. One method is to halt the tree's growth once it reaches a certain depth. For example,
by setting max_depth=4, the tree can only ask up to four questions. Limiting the tree’s depth helps
reduce overfitting, which results in a decrease in training set accuracy but an improvement in
accuracy on the test set.




Analyzing decision trees

We can visualize the tree using the export_graphviz function from the tree module. This writes a
file in the .dot file format, which is a text file format for storing graphs. We set an option to color

                                                                                                          54

[PDF page 57; printed page 55]
the nodes to reflect the majority class in each node and pass the class and features names so the
tree can be properly labeled:




The visualization of the decision tree offers a clear view of how the algorithm makes predictions and
serves as an excellent example of a machine learning model that can be easily explained to non-
experts. However, even with a tree of depth four, as shown here, the visualization can still become
somewhat intricate. Deeper trees, especially those with depths of 10 or more, are even more
challenging to interpret. One effective method for understanding the tree is to focus on the path that
most of the data follows. The n_samples displayed in each node represents the number of samples
in that node, while the value indicates the number of samples in each class. By tracing the branches
to the right, we see that a split based on "worst radius <= 16.795" leads to a node with 8 benign and
134 malignant samples. Further splits break down the 8 benign samples, and out of the 142 samples
that initially followed the right path, 132 end up in the far-right leaf. Following the left path at the
root, where "worst radius > 16.795," we find 25 malignant and 259 benign samples. Most of the



                                                                                                     55

[PDF page 58; printed page 56]
benign samples end up in the second leaf from the right, with only a few remaining in the other
leaves.



Feature Importance in Trees

Rather than attempting to interpret the entire tree, which can be overwhelming, we can use valuable
metrics to summarize the tree’s behavior. One of the most widely used metrics is feature
importance, which indicates how significant each feature is in the tree’s decision-making process.
This value ranges from 0 to 1 for each feature, with 0 meaning the feature is not used at all and 1
indicating the feature perfectly predicts the target. The sum of all feature importances will always
equal 1.




In this case, we can see that the feature used in the first split, "worst radius," is by far the most
important feature. This aligns with our previous observation during the tree analysis, where the first
level effectively separates the two classes.




                                                                                                   56

[PDF page 59; printed page 57]
However, if a feature has a low feature_importance, it doesn’t necessarily mean the feature is
insignificant. It simply suggests that the tree didn't prioritize that feature, possibly because another
feature provides similar information.

Unlike coefficients in linear models, feature importances are always positive and do not indicate
which class a feature predicts. The feature importances reveal that "worst radius" is important, but
they do not specify whether a higher radius indicates a benign or malignant sample. In fact, the
relationship between features and classes may not be so straightforward, as shown in the following
example.




Although our focus here has been on decision trees for classification, the same principles apply to
decision trees used for regression, as seen in the DecisionTreeRegressor. The process of using and
analyzing regression trees is very similar to that of classification trees. However, one key difference
with tree-based models for regression is important to note: the DecisionTreeRegressor, like other
tree-based regression models, cannot extrapolate. This means it is unable to make predictions
beyond the range of the training data.

                                                                                                     57

[PDF page 60; printed page 58]
To illustrate this, let’s examine a dataset containing historical computer memory (RAM) prices. The
figure below shows this dataset, with the date on the x-axis and the price per megabyte of RAM for
each year on the y-axis.




Note the logarithmic scale on the y-axis. When plotted on a logarithmic scale, the relationship
appears fairly linear, making it relatively easy to predict, though with some fluctuations.

We will use historical data up to the year 2000 to forecast future RAM prices, treating the date as
the sole feature. Two simple models will be compared: a DecisionTreeRegressor and a
LinearRegression. The prices are rescaled using a logarithmic transformation to make the
relationship more linear. While this transformation doesn't affect the DecisionTreeRegressor, it has
a significant impact on the LinearRegression model. After training both models and making
predictions, we apply the exponential function to reverse the logarithmic transformation. We will
visualize predictions on the entire dataset, but for a proper evaluation, only the test dataset should
be considered.

                                                                                                    58

[PDF page 61; printed page 59]
The contrast between the two models is quite clear. The linear model fits the data with a line, as
expected, and provides a solid forecast for the test data (years after 2000), though it overlooks
some of the finer details in both the training and test data. In contrast, the tree model perfectly
predicts the training data since it was allowed to grow without complexity restrictions and
essentially memorized the dataset. However, when the model encounters data beyond the training
range, it simply predicts the last known value. This limitation arises because the tree model cannot
extrapolate or make predictions outside the scope of the training data. This issue is common to all
tree-based models.

Strengths, weaknesses, and parameters As discussed earlier, the parameters that control model
complexity in decision trees are the pre-pruning parameters that stop the building of the tree
before it is fully developed. Usually, picking one of the pre-pruning strategies—setting either



                                                                                                      59
```
