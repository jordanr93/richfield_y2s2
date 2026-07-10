---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "67-72"
printed_pages: "65-70"
section: "k-Nearest Neighbors (k-NN)"
chapter: "Chapter Four: Supervised learning: Classification Algorithms"
keywords:
  - "neighbors"
  - "point"
  - "k-nearest"
  - "k-nn"
  - "closest"
  - "prediction"
  - "training"
  - "points"
  - "neighbor"
  - "can"
  - "its"
  - "when"
---

# k-Nearest Neighbors (k-NN)

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 67-72 | printed pages 65-70

Related sections: [Help Desks](../../information-systems-622-study-guide/sections/6-1-2-help-desks.md), [Layer Architecture of Internet of Things](../../big-data-iot-600-study-guide/sections/2-3-layer-architecture-of-internet-of-things.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Example](../../information-systems-622-study-guide/sections/4-6-3-example.md), [Focus on Data Entry Screens](../../information-systems-622-study-guide/sections/2-4-7-focus-on-data-entry-screens.md), [Legacy Systems](../../information-systems-622-study-guide/sections/4-1-6-legacy-systems.md)

## Extracted Text

```text
[PDF page 67; printed page 65]
4.3 k-Nearest Neighbors (k-NN)
The k-Nearest Neighbors (k-NN) algorithm classifies a data point based on the majority class of its k
closest neighbors in the feature space. k-NN performs well when data is well-distributed but struggles
with high-dimensional datasets due to the curse of dimensionality.

Key Properties:

   •   Lazy learning: No training phase; all computation happens during prediction.

   •   Distance metric: Typically uses Euclidean distance to measure closeness between points.

Mathematical Formula (Euclidean Distance):




The k-NN algorithm is one of the simplest machine learning methods. Building the model simply involves
storing the training dataset. When making a prediction for a new data point, the algorithm finds the
closest data points in the training set, known as its “nearest neighbors.” In its most basic form, the k-NN
algorithm considers only one neighbor the closest training point to the data point we are predicting for.
The prediction output is then the same as the output of this nearest neighbor.set.




                                                                                                        65

[PDF page 68; printed page 66]
Here, we introduced three new data points, represented by stars. For each of these points, we identified
the closest point in the training set. The prediction made by the one-nearest-neighbor algorithm is the
label of that closest point, indicated by the color of the cross. Instead of considering just the nearest
neighbor, we can also factor in a chosen number, k, of neighbors. This is where the term "k-nearest
neighbors" originates. When looking at multiple neighbors, we use a voting process to determine the
label. For each test point, we count how many neighbors belong to class 0 and how many belong to class
1, then assign the label of the majority class—the most frequent class among the k-nearest neighbors.
The example below illustrates this using the three closest neighbors:




Once again, the prediction is represented by the color of the cross. You can observe that the prediction
for the new data point at the top left differs from the one made using only a single neighbor. Although
this example is for a binary classification problem, the same approach can be used for datasets with
multiple classes. In such cases, we count how many neighbors belong to each class and predict the most
frequent class. Now, let’s explore how we can implement the k-nearest neighbors algorithm using scikit-
learn. First, we divide our data into training and test sets so we can assess the model's ability to




                                                                                                      66

[PDF page 69; printed page 67]
generalize.




Classifying Iris Flowers

 from sklearn.datasets import load_iris

 from sklearn.neighbors import KNeighborsClassifier

 from sklearn.model_selection import train_test_split

 from sklearn.metrics import accuracy_score



 # Load dataset

 iris = load_iris()

 X, y = iris.data, iris.target



 # Split data

 X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)




 # Train k-NN model (k=5)


                                                                                             67

[PDF page 70; printed page 68]
 knn = KNeighborsClassifier(n_neighbors=5)

 knn.fit(X_train, y_train)



 # Predict and evaluate

 y_pred = knn.predict(X_test)

 accuracy = accuracy_score(y_test, y_pred)

 print(f"k-NN Model Accuracy: {accuracy:.2f}")




Output:

k-NN Model Accuracy: 0.97

k-NN achieves 97% accuracy in classifying iris flower species.

Imagine a hobbyist botanist who wants to identify the species of iris flowers she has found. She has
recorded measurements for each iris, including the length and width of both the petals and the sepals,
all in centimeters. Additionally, she has measurements for some irises that have already been identified
by an expert botanist as belonging to the species setosa, versicolor, or virginica. For these, she is certain
of the species. Let's assume these are the only species the botanist will encounter in the wild. Our
objective is to develop a machine learning model that can learn from the known iris measurements so
that it can predict the species of new irises. We aim to build a machine learning model that can predict
the species of an iris based on new measurements. We can now begin building the machine learning
model. We will use a k-nearest neighbors (KNN) classifier, which is simple to understand. The process of
building this model mainly involves storing the training set. To predict the label for a new data point, the
algorithm identifies the training point that is closest to the new one and assigns its label to the new point.

The "k" in k-nearest neighbors means that, rather than just using the closest neighbor, we can take into
account a set number of closest neighbors (for example, three or five). The prediction is then based on

                                                                                                           68

[PDF page 71; printed page 69]
the majority class of these neighbors. We will discuss this in more detail, but for now, we will consider
just one neighbor. In scikit-learn, machine learning models are implemented in classes known as
Estimator classes. The K-nearest neighbors classification algorithm is provided by the
KNeighborsClassifier class in the neighbors module. To use the model, we need to create an instance of
this class and configure its parameters. The most crucial parameter for KNeighborsClassifier is the
number of neighbors, which we will set to 1.

The knn object encapsulates the algorithm that will be used to build the model from the training data,
as well the algorithm to make predictions on new data points. It will also hold the information that the
algorithm has extracted from the training data. In the case of KNeighborsClassifier, it will just store the
training set.




The fit method returns the KNN object itself and modifies it in place, providing a string representation of
the classifier. This representation displays the parameters used to create the model. Most of these
parameters are set to their default values, but it also includes n_neighbors=1, which is the value we
specified. While scikit-learn models have many parameters, the majority are related to optimization or
specialized use cases, so you don’t need to worry about the other parameters shown in the output.
Printing a scikit-learn model can produce lengthy strings, but don’t be discouraged by this. We will go
over all the key parameters. From here on, we won’t display the output of fit since it doesn’t provide any
new information.




                                                                                                        69

[PDF page 72; printed page 70]
Note that we made the measurements of this single flower into a row in a two-dimensional NumPy array,
as scikit-learn always expects two-dimensional arrays for the data.

Making Predictions

We can now make predictions using this model on new data for which we might not know the correct
labels. Imagine we found an iris in the wild with a sepal length of 5 cm, a sepal width of 2.9 cm, a petal
length of 1 cm, and a petal width of 0.2 cm. What species of iris would this be? We can put this data into
a NumPy array, again by calculating the shape that is, the number of samples (1) multiplied by the
number of features (4):




                                                                                                       70
```
