---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "64-66"
printed_pages: "62-64"
section: "Logistic Regression"
chapter: "Chapter Four: Supervised learning: Classification Algorithms"
keywords:
  - "classification"
  - "logistic"
  - "regression"
  - "import"
  - "train"
  - "test"
  - "random"
  - "models"
  - "where"
  - "detection"
  - "model"
  - "sklearn"
---

# Logistic Regression

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 64-66 | printed pages 62-64

Related sections: [Support Vector Machines (SVM)](4-4-support-vector-machines-svm.md), [Decision Tree Regression](3-5-decision-tree-regression.md), [Linear Regression](3-3-linear-regression.md), [Polynomial Regression](3-4-polynomial-regression.md), [Data Conversion](../../information-systems-622-study-guide/sections/5-9-3-data-conversion.md), [Prototyping](../../information-systems-622-study-guide/sections/2-9-3-prototyping.md)

## Extracted Text

```text
[PDF page 64; printed page 62]
        •   Explore common classification algorithms: Logistic Regression, k-Nearest Neighbors
            (k-NN), Support Vector Machines (SVM), Decision Trees, Random Forest, and Naïve
            Bayes.
        •   Break down the mathematics behind classification models with real-world
            applications.
        •   Implement classification models in Python and analyze their performance.
        •   Evaluate classification models using accuracy, precision, recall, F1-score, and ROC
            curves.


4.1 Classification
Classification is a type of supervised learning where the goal is to predict a categorical outcome based
on input features. Unlike regression, which predicts continuous values, classification models categorize
inputs into discrete labels. According to Zhang & Wang (2021), classification algorithms are widely used
in automated decision-making, fraud detection, and medical diagnostics, proving their significance in
real-world applications.




Mathematically, classification aims to learn a function

𝑓:𝑋→𝑌

f:X→Y, where 𝑋 is the feature set and 𝑌 is a categorical label. The decision boundary of a classification
model separates different categories in the feature space.


                                                                                                      62

[PDF page 65; printed page 63]
Common Classification Algorithms


4.2 Logistic Regression
Logistic Regression is a linear classification algorithm that predicts the probability of a data point
belonging to a particular class. It is commonly used for binary classification problems (e.g., fraud
detection, disease diagnosis). According to Brown et al. (2020), Logistic Regression remains a strong
baseline method for classification tasks, especially in medical and financial applications where
interpretability is crucial.

The logistic (sigmoid) function is given by:




Spam Detection Example

 import pandas as pd

 import numpy as np

 from sklearn.model_selection import train_test_split

 from sklearn.linear_model import LogisticRegression

 from sklearn.metrics import accuracy_score



 # Generate sample data

 np.random.seed(42)



                                                                                                   63

[PDF page 66; printed page 64]
 X = np.random.rand(100, 2) # Two features

 y = (X[:, 0] + X[:, 1] > 1).astype(int) # Labels: 1 if sum > 1, else 0



 # Split data

 X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)




 # Train logistic regression model

 model = LogisticRegression()

 model.fit(X_train, y_train)




 # Predictions and accuracy

 y_pred = model.predict(X_test)

 accuracy = accuracy_score(y_test, y_pred)

 print(f"Model Accuracy: {accuracy:.2f}")




Output:

Model Accuracy: 0.85

The model achieves 85% accuracy in classifying the data into two classes.




                                                                                             64
```
