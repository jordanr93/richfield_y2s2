---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "15-15"
printed_pages: "13-13"
section: "Feature Engineering"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "feature"
  - "machine"
  - "can"
  - "such"
  - "features"
  - "engineering"
  - "process"
  - "raw"
  - "extraction"
  - "selection"
  - "format"
  - "numerical"
---

# Feature Engineering

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 15-15 | printed pages 13-13

Related sections: [Chapter Two: Data Preprocessing and Feature Engineering](2-chapter-two-data-preprocessing-and-feature-engineering.md), [Systems Engineering](../../information-systems-622-study-guide/sections/118-systems-engineering.md), [Software Engineering](../../information-systems-622-study-guide/sections/117-software-engineering.md), [TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES](../../programming-622-study-guide/sections/1-topic-1-software-engineering-principles-and-cpp-classes.md), [Challenges in Data Privacy](../../big-data-iot-600-study-guide/sections/2-5-3-challenges-in-data-privacy.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md)

## Extracted Text

```text
[PDF page 15; printed page 13]
1.7 Feature Engineering
  Feature engineering is a fundamental step in the machine learning process, as raw data is often not
  in a suitable format for direct analysis.

  Feature extraction

  Feature extraction involves transforming raw data into numerical representations that machine
  learning models can process effectively. This transformation is particularly important when working
  with unstructured data such as text or images. For instance, in text data, words and phrases can be
  converted into numerical vectors using techniques such as word embeddings, which capture
  semantic relationships between words. Similarly, in image data, meaningful features such as pixel
  intensities, edges, or texture patterns can be extracted to facilitate classification tasks. Feature
  extraction ensures that raw data is transformed into a structured format that enhances the learning
  process of machine learning algorithms.

  Feature selection

  Feature selection focuses on identifying the most relevant features from a given dataset to improve
  model performance and generalizability. The presence of too many irrelevant or redundant features
  can lead to overfitting, where the model learns noise rather than meaningful patterns. To mitigate
  this issue, various feature selection techniques are employed. Filter methods rely on statistical tests,
  such as correlation coefficients or mutual information, to assess the relevance of each feature
  independently of the learning algorithm. In contrast, wrapper methods evaluate subsets of features

                                                                                                       13
```
