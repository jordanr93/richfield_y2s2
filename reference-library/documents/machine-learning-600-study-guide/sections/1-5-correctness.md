---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "13-13"
printed_pages: "11-11"
section: "Correctness"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "model"
  - "predicts"
  - "positive"
  - "negative"
  - "case"
  - "correctness"
  - "machine"
  - "accuracy"
  - "predictions"
  - "when"
  - "correctly"
  - "over"
---

# Correctness

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 13-13 | printed pages 11-11

Related sections: [Embedded Databases](../../internet-programming-622-study-guide/sections/4-2-embedded-databases.md), [Overview of Machine Learning](1-1-overview-of-machine-learning.md), [Data Quality and Accuracy](../../big-data-iot-600-study-guide/sections/111-data-quality-and-accuracy.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md), [How IOTs works](../../big-data-iot-600-study-guide/sections/2-2-how-iots-works.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md)

## Extracted Text

```text
[PDF page 13; printed page 11]
1.5 Correctness

  Evaluating the correctness of a machine learning model requires more than simply measuring its
  accuracy. Accuracy, defined as the proportion of correct predictions over the total number of
  predictions, is often an inadequate measure, especially when dealing with imbalanced datasets. For
  example, a test that predicts leukemia based on a child's name might achieve over 98% accuracy,
  but such a model would be meaningless because it does not use relevant medical features.

  To better undeectness, machine learning models are evaluated using a confusion matrix, which
  categorizes predictions into four groups:

     ✓   True Positive (TP): The model correctly predicts a positive case (e.g., detecting spam
         correctly).

     ✓   False Positive (FP): The model incorrectly predicts a positive case when it is actually negative
         (Type I error).

     ✓   False Negative (FN): The model incorrectly predicts a negative case when it is actually positive
         (Type II error).

     ✓   True Negative (TN): The model correctly predicts a negative case.
                                                                                                      11
```
