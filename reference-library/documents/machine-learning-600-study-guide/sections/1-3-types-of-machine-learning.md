---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "9-10"
printed_pages: "6-7"
section: "Types of Machine Learning"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "supervised"
  - "classification"
  - "predicting"
  - "regression"
  - "unsupervised"
  - "output"
  - "training"
  - "continuous"
  - "machine"
  - "will"
  - "two"
  - "input"
---

# Types of Machine Learning

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 9-10 | printed pages 6-7

Related sections: [Chapter 1: Introduction to Machine Learning](1-chapter-1-introduction-to-machine-learning.md), [Chapter 3: Supervised Learning – Regression Algorithms](3-chapter-3-supervised-learning-regression-algorithms.md), [Overview of Machine Learning](1-1-overview-of-machine-learning.md), [Real-World Applications of Machine Learning](1-8-real-world-applications-of-machine-learning.md), [Types of Maintenance](../../information-systems-622-study-guide/sections/6-2-1-types-of-maintenance.md), [Types of Big Data Alalytics](../../big-data-iot-600-study-guide/sections/5-4-types-of-big-data-alalytics.md)

## Extracted Text

```text
[PDF page 9; printed page 6]
1.3 Types of Machine Learning

   There exists a myriad of ML algorithms, but the selection choice will rely on the type of outputs
   required for the system. ML algorithms are stratified into two categories: unsupervised and
   supervised learning algorithms.

1.3.1 Supervised Learning

   In supervised learning, the model is trained using labeled data, meaning that each input is associated
   with an output. The goal is to learn a mapping function from input to output. Supervised learning
   works with a set of labelled features (input-output) named training dataset. Every observation in the
   training dataset must have an input and output object. The supervised ML algorithm will use this
   training set to predict or classify unknown features during the testing phase and observations that
   were not considered or included in the training dataset will be classified as unknown instances.

 Figure 1.2: Supervised learning

   Examples include:

   ✓   Classification: Predicting whether an email is spam or not.

   ✓   Regression: Predicting house prices based on location and size.

   Classification can be either binary (distinguishing between two classes) or multiclass (distinguishing
   between more than two classes). For instance, binary classification involves tasks like identifying


                                                                                                         6

[PDF page 10; printed page 7]
   spam versus non-spam emails, where the question is "Is this email spam?" The iris classification is a
   multiclass problem, as is predicting a website’s language based on its text.

   Regression tasks, on the other hand, involve predicting a continuous value, such as a real number.
   An example of regression is predicting a person’s annual income based on factors like education, age,
   and location. The predicted value is a continuous number that can vary within a range. Another
   example is forecasting the yield of a corn farm based on previous yields and weather conditions. A
   simple way to distinguish between classification and regression is to consider whether the possible
   outcomes are continuous. In regression, the output is continuous (e.g., annual income), while in
   classification, the outputs are discrete (e.g., identifying the language of a website).

1.3.2 Unsupervised Learning

   In unsupervised learning, the model identifies patterns in data without predefined labels. The
   opposite of supervised learning is unsupervised learning. With unsupervised learning, the ML
   algorithm detects hidden patterns in a given dataset. With unsupervised learning there is no wrong
   or right answer; it's just a case of running the ML algorithm and seeing what patterns and outcomes
   occur. Unsupervised learning can be thought of as a learner without a teacher because there is no
   need for the training dataset. The unsupervised learning algorithm will stratify features based on
   similarity and dissimilarity of hidden patterns (see Figure 1.3).

   It is commonly used for:

   ✓   Clustering: Grouping customers based on purchasing behavior.

   ✓   Anomaly Detection: Identifying fraudulent transactions.

1.3.3 Reinforcement Learning

   Reinforcement learning (RL) involves training agents to make decisions by interacting with an
   environment and receiving feedback in the form of rewards or penalties. Examples include:

   •   Game Playing: AI models that play games like chess or Go.

   •   Robotics: Self-learning robots that adapt to new environments.




                                                                                                       7
```
