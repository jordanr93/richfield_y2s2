---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "28-28"
printed_pages: "26-26"
section: "Feature Scaling and Normalization"
chapter: "Chapter Two: Data Preprocessing and Feature Engineering"
keywords:
  - "feature"
  - "scaling"
  - "scaled"
  - "standardized"
  - "normalization"
  - "min-max"
  - "minmaxscaler"
  - "standardscaler"
  - "scaler"
  - "fit"
  - "transform"
  - "print"
---

# Feature Scaling and Normalization

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 28-28 | printed pages 26-26

Related sections: [Data Cleaning, Normalization, and Transformation in Big data Workflows](../../big-data-iot-600-study-guide/sections/1-5-data-cleaning-normalization-and-transformation-in-big-data-workflows.md), [Chapter Two: Data Preprocessing and Feature Engineering](2-chapter-two-data-preprocessing-and-feature-engineering.md), [Normalization Stages](../../information-systems-622-study-guide/sections/3-6-normalization-stages.md), [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Chapter 2: IoT Architectures and Applications](../../big-data-iot-600-study-guide/sections/2-chapter-2-iot-architectures-and-applications.md)

## Extracted Text

```text
[PDF page 28; printed page 26]
2.3 Feature Scaling and Normalization

   Feature scaling ensures that all variables contribute equally to model training. If one feature has
   values in the range of thousands and another in decimal points, models like Support Vector Machines
   (SVM) and k-Nearest Neighbors (k-NN) may become biased. Feature scaling improves the
   performance of distance-based algorithms.

   Min-Max Scaling and Standardization

       from sklearn.preprocessing import MinMaxScaler, StandardScaler

       # Sample dataset

       data = [[100, 200], [300, 400], [500, 600]]

       scaler = MinMaxScaler()

       scaled_data = scaler.fit_transform(data)

       print("Min-Max Scaled Data:\n", scaled_data)

       standardizer = StandardScaler()

       standardized_data = standardizer.fit_transform(data)

       print("Standardized Data:\n", standardized_data)




                                                                                                   26
```
