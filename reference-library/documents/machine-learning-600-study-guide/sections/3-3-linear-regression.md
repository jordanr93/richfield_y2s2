---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "47-50"
printed_pages: "45-48"
section: "Linear Regression"
chapter: "Chapter 3: Supervised Learning – Regression Algorithms"
keywords:
  - "regression"
  - "supervised"
  - "model"
  - "prices"
  - "house"
  - "features"
  - "predicting"
  - "price"
  - "labeled"
  - "training"
  - "such"
  - "stock"
---

# Linear Regression

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 47-50 | printed pages 45-48

Related sections: [Polynomial Regression](3-4-polynomial-regression.md), [Chapter 3: Supervised Learning – Regression Algorithms](3-chapter-3-supervised-learning-regression-algorithms.md), [Decision Tree Regression](3-5-decision-tree-regression.md), [Regression](3-2-regression.md), [Hands-on Exercise: House Price Prediction](3-6-hands-on-exercise-house-price-prediction.md), [Logistic Regression](4-2-logistic-regression.md)

## Extracted Text

```text
[PDF page 47; printed page 45]
    •    Deeply explore common regression algorithms: Linear Regression, Polynomial Regression, and
         Decision Tree Regression.
    •    Break down key mathematical concepts underlying these models.
    •    Implement a practical house price prediction model using code, visualizations, and interpret
         the results.




3.1 What is Supervised Learning?

    Supervised learning is a fundamental branch of machine learning where an algorithm learns from
    labeled data. Each data point consists of input features (X) and a corresponding output (Y). The goal
    of the algorithm is to learn a mapping function f: X → Y that accurately predicts outputs for unseen
    data. The training process involves adjusting model parameters to minimize the error between
    predicted and actual values.

    Key Characteristics of Supervised Learning:

          ✓ Labeled Data: Each training example consists of known input-output pairs.

          ✓ Learning Function: The model approximates the relationship between inputs and outputs
             using a mathematical function.

          ✓ Error Minimization: Training involves optimizing model parameters to minimize the
             difference between predictions and actual outcomes.



                                                                                                        45

[PDF page 48; printed page 46]
  This framework is the foundation for many applications, such as predicting house prices based on
  features like square footage, location, and age of the property. Supervised learning is the foundation
  for various real-world applications such as predicting house prices, stock trends, and sales revenue
  forecasting. Recent studies (Zhang & Lee, 2021) highlight that the performance of supervised
  learning models significantly depends on the quality of labeled data and the appropriate selection of
  hypothesis functions.

3.2 Regression

  Regression is a supervised learning technique specifically used for predicting continuous numerical
  outcomes. In regression, the model learns a mapping from a set of features to a continuous output.

  Real-World Examples:

  ✓   House Prices: Predicting the selling price of a home based on features such as square footage,
      number of bedrooms, and location.

  ✓   Stock Prices: Forecasting future stock prices using historical price trends and financial indicators.

  ✓   Sales Revenue: Estimating future sales based on advertising expenditure and market trends.

   Common Regression Algorithms include Linear, Polynomial and Decision Tree Regression.

3.3 Linear Regression

  Linear Regression assumes a linear relationship between the independent variable XXX and the
  dependent variable YYY. It is represented by the equation:




  Where:

  •   m is the slope, indicating how much Y changes for a unit change in X.

  •   b is the intercept, representing the predicted value of Y when X=0.

  Linear regression operates under several key assumptions, including linearity, independence,
  homoscedasticity (constant variance of errors), and normally distributed errors (Nguyen & Chen,

                                                                                                         46

[PDF page 49; printed page 47]
2019). The model parameters, typically represented as 𝑚 (slope) and b (intercept), are estimated
using the least squares method, which minimizes the sum of the squared differences between actual
and predicted values. One of the primary advantages of linear regression is its interpretability; each
coefficient directly represents the change in the output variable for a one-unit change in the
corresponding input variable, making it a valuable tool for understanding relationships within data.

Example: Predicting House Prices Using Linear Regression

     import numpy as np

     import matplotlib.pyplot as plt

     from sklearn.linear_model import LinearRegression



     # Training data: Square Footage vs. House Price ($1000s)

     X = np.array([1200, 1500, 1800, 2100, 2500]).reshape(-1, 1)

     y = np.array([220, 270, 320, 370, 420])



     # Create and train the model

     model = LinearRegression()

     model.fit(X, y)



     # Predicting the price of a 2000 sqft house

     new_house = np.array([[2000]])

     predicted_price = model.predict(new_house)

     print(f"Predicted price for a 2000 sqft house: ${predicted_price[0]:.2f}K")




                                                                                                   47

[PDF page 50; printed page 48]
# Visualizing the regression line

plt.scatter(X, y, color="blue", label="Data points")

plt.plot(X, model.predict(X), color="red", label="Regression line")

plt.xlabel("Square Footage")

plt.ylabel("Price ($1000s)")

plt.title("Linear Regression: House Price Prediction")

plt.legend()

plt.show()




                                                                      48
```
