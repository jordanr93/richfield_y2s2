---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "51-52"
printed_pages: "49-50"
section: "Polynomial Regression"
chapter: "Chapter 3: Supervised Learning – Regression Algorithms"
keywords:
  - "polynomial"
  - "regression"
  - "model"
  - "price"
  - "plt"
  - "poly"
  - "house"
  - "degree"
  - "pipeline"
  - "predict"
  - "predicted"
  - "flexibility"
---

# Polynomial Regression

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 51-52 | printed pages 49-50

Related sections: [Decision Tree Regression](3-5-decision-tree-regression.md), [Linear Regression](3-3-linear-regression.md), [Hands-on Exercise: House Price Prediction](3-6-hands-on-exercise-house-price-prediction.md), [Logistic Regression](4-2-logistic-regression.md), [Chapter 3: Supervised Learning – Regression Algorithms](3-chapter-3-supervised-learning-regression-algorithms.md), [Regression](3-2-regression.md)

## Extracted Text

```text
[PDF page 51; printed page 49]
3.4 Polynomial Regression

  When the relationship between XXX and YYY is non-linear, Polynomial Regression can be used to
  model the data. It fits a polynomial equation to the data:




  Polynomial regression offers greater flexibility by capturing complex relationships through the
  inclusion of higher-degree terms. However, this flexibility comes with the risk of overfitting, as
  higher-degree polynomials may fit the training data exceptionally well but fail to generalize to unseen
  data. To achieve an effective model, careful selection of the polynomial degree is essential, balancing
  bias and variance to avoid both overfitting and underfitting.

  Example: House Price Prediction Using Polynomial Regression




                                                                                                      49

[PDF page 52; printed page 50]
from sklearn.preprocessing import PolynomialFeatures

from sklearn.pipeline import make_pipeline



# Create a polynomial regression model of degree 2

poly_model = make_pipeline(PolynomialFeatures(degree=2), LinearRegression())

poly_model.fit(X, y)



# Predict the house price for 2000 sqft using polynomial regression

predicted_price_poly = poly_model.predict(new_house)

print(f"Predicted price (Polynomial Regression): ${predicted_price_poly[0]:.2f}K")



# Visualizing the polynomial regression curve

plt.scatter(X, y, color="blue", label="Data points")

plt.plot(X, poly_model.predict(X), color="green", label="Polynomial curve")

plt.xlabel("Square Footage")

plt.ylabel("Price ($1000s)")

plt.title("Polynomial Regression: House Price Prediction")

plt.legend()

plt.show()




                                                                                     50
```
