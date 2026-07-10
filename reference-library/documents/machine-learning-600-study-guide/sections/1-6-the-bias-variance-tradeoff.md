---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "14-14"
printed_pages: "12-12"
section: "The Bias-Variance Tradeoff"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "model"
  - "variance"
  - "bias-variance"
  - "tradeoff"
  - "bias"
  - "too"
  - "training"
  - "machine"
  - "error"
  - "models"
  - "features"
  - "tend"
---

# The Bias-Variance Tradeoff

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 14-14 | printed pages 12-12

Related sections: [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md), [The OSI Model](../../information-systems-622-study-guide/sections/4-7-1-the-osi-model.md), [Overfitting and Underfitting](1-4-overfitting-and-underfitting.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md), [Key Components of the IoT Ecosystem](../../big-data-iot-600-study-guide/sections/2-1-1-key-components-of-the-iot-ecosystem.md)

## Extracted Text

```text
[PDF page 14; printed page 12]
1.6 The Bias-Variance Tradeoff

  The bias-variance tradeoff is a fundamental concept that helps explain the balance between model
  complexity and generalization. It describes two types of errors that a machine learning model can
  make.

  Bias

  The error introduced when a model is too simplistic to capture the underlying structure of the data.
  High-bias models (e.g., linear regression with very few features) tend to underfit the data, leading to
  systematically incorrect predictions.

  Variance

  The error due to the model being too sensitive to small fluctuations in the training data. High-
  variance models (e.g., deep neural networks with too many parameters) tend to overfit, capturing
  noise rather than meaningful patterns.

  Impact of Bias and Variance on Model Performance

  If a model has high bias, it performs poorly even on the training data, indicating underfitting. One
  way to address this is by adding more features or using a more complex model. Conversely, if a model
  has high variance, it performs well on training data but poorly on unseen data, indicating overfitting.



                                                                                                      12
```
