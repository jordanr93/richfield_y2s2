---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "11-12"
printed_pages: "8-10"
section: "Overfitting and Underfitting"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "model"
  - "underfitting"
  - "overfitting"
  - "simple"
  - "machine"
  - "two"
  - "pattern"
  - "training"
  - "too"
  - "line"
  - "fits"
  - "well"
---

# Overfitting and Underfitting

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 11-12 | printed pages 8-10

Related sections: [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md), [Mario and Danica: A Data Design Example](../../information-systems-622-study-guide/sections/3-1-2-mario-and-danica-a-data-design-example.md), [Reading And Writing Entire Files](../../internet-programming-622-study-guide/sections/3-12-reading-and-writing-entire-files.md), [Reading and Writing To Files](../../internet-programming-622-study-guide/sections/3-8-reading-and-writing-to-files.md), [Chapter Two: Data Preprocessing and Feature Engineering](2-chapter-two-data-preprocessing-and-feature-engineering.md), [The Bias-Variance Tradeoff](1-6-the-bias-variance-tradeoff.md)

## Extracted Text

```text
[PDF page 11; printed page 8]
1.4 Overfitting and Underfitting

  A major challenge in machine learning is ensuring that a model generalizes well to unseen data. Two
  common issues are:

  ✓   Overfitting: The model learns noise instead of the underlying pattern, performing well on training
      data but poorly on new data.

  ✓   Underfitting: The model is too simple to capture patterns in the data, leading to poor
      performance even on the training set.

  Example: Overfitting vs. Underfitting

  Consider a dataset of student exam scores based on study hours. A model that is too simple (e.g., a
  straight line) underfits the data, while a highly complex polynomial model that fits every data point
  overfits.




                                                                                                      8

[PDF page 12; printed page 10]
Fig 1.1 Overfitting vs. Underfitting



Fig 1.1 visually illustrate the concepts of underfitting and overfitting, two common pitfalls in machine
learning model training. The code generates sample data that follows a sine wave pattern with some
added random noise, mimicking a realistic dataset. It then attempts to fit two different types of
models to this data. First, it fits a simple linear regression model, which assumes a straight-line
relationship.

This model demonstrates underfitting, as the straight line is too simple to capture the true, non-
linear pattern of the data. In the resulting graph, this is represented by a green line that poorly
follows the blue data points. The model's simplicity prevents it from learning the fundamental
relationships within the data. Next, the code fits a highly complex polynomial regression model with
a degree of 10. This model attempts to fit a curve that passes through, or extremely close to, every

                                                                                                     10
```
