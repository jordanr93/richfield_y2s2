---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "19-20"
printed_pages: "17-18"
section: "Introduction to Python ML Libraries"
chapter: "Chapter 1: Introduction to Machine Learning"
keywords:
  - "python"
  - "pandas"
  - "libraries"
  - "machine"
  - "scikit-learn"
  - "numpy"
  - "install"
  - "dataset"
  - "model"
  - "its"
  - "matplotlib"
  - "load"
---

# Introduction to Python ML Libraries

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 19-20 | printed pages 17-18

Related sections: [Chapter 1: Introduction to Machine Learning](1-chapter-1-introduction-to-machine-learning.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md), [Example: Using Data Visualization to Communicate Strategy](../../big-data-iot-600-study-guide/sections/109-example-using-data-visualization-to-communicate-strategy.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md), [Stay Flexible and Adapt to Changes](../../big-data-iot-600-study-guide/sections/130-stay-flexible-and-adapt-to-changes.md), [Use Technology to Support Data-Driven Decisions](../../big-data-iot-600-study-guide/sections/89-use-technology-to-support-data-driven-decisions.md)

## Extracted Text

```text
[PDF page 19; printed page 17]
1.9 Introduction to Python ML Libraries

  NumPy

  NumPy is one of the fundamental packages for scientific computing in Python. It contains
  functionality for multidimensional arrays, high-level mathematical functions such as linear algebra
  operations and the Fourier transform, and pseudorandom number generators.

  Pandas

  Pandas introduce additional data structures for managing datasets in Python. Its primary data
  structure is the DataFrame, which is conceptually like the NotQuiteABase Table class, but with far
  more functionality and enhanced performance. If you need to clean, slice, group, and manipulate
  datasets in Python, pandas is an indispensable tool.

  Scikit-learn

  Scikit-learn is arguably the most popular Python library for machine learning. It includes all the
  models we've implemented and many others that we haven't. In real-world applications, you
  wouldn't build a decision tree or optimization algorithm from scratch; instead, you'd rely on scikit-
  learn to handle the heavy lifting. Its documentation is filled with examples showcasing its capabilities
  and providing a deeper understanding of machine learning.

  Familiarize yourself with essential Python libraries for ML.

  The goal of this exercise is to familiarize yourself with fundamental Python libraries used in machine
  learning, such as NumPy, Pandas, Scikit-learn, and Matplotlib. First, install these libraries using pip
  install NumPy pandas scikit-learn matplotlib. Next, load and explore a sample dataset using Pandas
  by reading the famous Iris dataset from a URL and displaying basic statistical summaries with
  df.describe(). Then, train a simple machine learning model using Scikit-learn’s Logistic Regression.
                                                                                                       17

[PDF page 20; printed page 18]
The dataset is split into training and testing sets with train_test_split(), and the model is trained using
the fit() function. Finally, the accuracy of the model is evaluated on the test set using the score()
method. This exercise provides a hands-on introduction to essential steps in machine learning: data
loading, exploration, model training, and evaluation.




     Step 1: Install Required Libraries

     pip install numpy pandas scikit-learn matplotlib



     Step 2: Load and Explore Data

     import pandas as pd

     # Load sample dataset

     df           =           pd.read_csv("https://raw.githubusercontent.com/mwaskom/seaborn-
     data/master/iris.csv")

     # Display basic statistics

     print(df.describe())



     Step 3: Train a Simple Model

     from sklearn.model_selection import train_test_split

     from sklearn.linear_model import LogisticRegression

     # Prepare data

     X = df.drop(columns=['species'])

     y = df['species']

     X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)



                                                                                                        18
```
