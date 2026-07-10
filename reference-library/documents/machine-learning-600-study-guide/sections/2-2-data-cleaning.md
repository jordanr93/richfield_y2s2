---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "22-27"
printed_pages: "20-25"
section: "Data Cleaning"
chapter: "Chapter Two: Data Preprocessing and Feature Engineering"
keywords:
  - "structured"
  - "unstructured"
  - "machine"
  - "techniques"
  - "such"
  - "fig"
  - "handling"
  - "feature"
  - "understand"
  - "datasets"
  - "types"
  - "analysis"
---

# Data Cleaning

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 22-27 | printed pages 20-25

Related sections: [Chapter Two: Data Preprocessing and Feature Engineering](2-chapter-two-data-preprocessing-and-feature-engineering.md), [Big Data Analysis Techniques](../../big-data-iot-600-study-guide/sections/1-4-big-data-analysis-techniques.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Data Cleaning, Normalization, and Transformation in Big data Workflows](../../big-data-iot-600-study-guide/sections/1-5-data-cleaning-normalization-and-transformation-in-big-data-workflows.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Fundamentals of Big Data Storage](../../big-data-iot-600-study-guide/sections/4-1-fundamentals-of-big-data-storage.md)

## Extracted Text

```text
[PDF page 22; printed page 20]
        •   Learn essential data cleaning techniques, including handling missing
            values, outliers, and duplicates.
        •   Explore feature scaling and normalization and understand why they are
            important.
        •   Understand the concepts of feature selection and dimensionality
            reduction.
        •   Implement data preprocessing techniques using Pandas and Scikit-Learn.



2.1 Understanding Datasets

    Before applying machine learning (ML) algorithms, it is crucial to understand the nature of the data
    being used. The success of an ML model depends on the quality, structure, and type of data available.
    Datasets can generally be classified into two broad categories: structured and unstructured data.
    Handling these different types of data requires specific techniques and tools to ensure accurate
    analysis and meaningful predictions.

    Structured Data

    Structured data refers to information that is highly organized and stored in a well-defined format,
    such as tables in relational databases, spreadsheets, or structured text files (CSV, JSON, XML). In
    structured datasets, each row represents an observation (data instance), and each column
    corresponds to a specific attribute (feature). The structured nature of this data makes it easy to
    process using database management systems (DBMS), SQL queries, and data manipulation tools such
    as Pandas in Python. Fig 2.1 below is an example of a structured database.

                                                                                                      20

[PDF page 23; printed page 21]
            Fig 2.1 Example of a structured dataset used for customer purchase analysis.

Unstructured Data

Unstructured data refers to information that does not follow a predefined format or schema. It
includes a variety of data types such as text, images, audio, and video, which cannot be easily stored
in tabular form. Handling unstructured data requires advanced machine learning techniques such as
Natural Language Processing (NLP) for textual data and Convolutional Neural Networks (CNNs) for
image analysis. Fig 2.2 below shows the different data types(unstructured data).




                            Fig 2.2 Representation of unstructured data


                                                                                                   21

[PDF page 24; printed page 22]
   Understanding the structure of data is essential before applying machine learning models. Structured
   data is well-organized and easily processed using traditional algorithms, while unstructured data
   requires advanced techniques such as deep learning and NLP for meaningful analysis. By selecting
   the appropriate preprocessing methods, machine learning practitioners can extract valuable insights
   from both structured and unstructured datasets, leading to more accurate and efficient models




2.2 Data Cleaning

   In real-world applications, datasets are rarely perfect; they often contain missing values,
   inconsistencies, errors, or duplicate records. Data cleaning is a critical preprocessing step in machine
   learning that ensures the dataset is accurate, reliable, and suitable for model training. Poor-quality
   data can lead to inaccurate predictions and unreliable models, making effective data cleaning
   essential for improving model performance and generalizability.

   Data cleaning involves several key tasks, including handling missing values, identifying and removing
   outliers, and eliminating duplicate records. These steps help maintain data integrity and ensure that
   machine learning algorithms can extract meaningful patterns from the dataset.

2.2.1 Handling Missing Values

   Missing values occur when certain observations lack data for specific attributes. These gaps in the
   dataset can arise due to human error, sensor failures, incomplete data collection, or data corruption.
   If not addressed properly, missing values can introduce bias, reduce model accuracy, and lead to
   incorrect conclusions.

   There are three types of missing data in datasets:

      1. Missing Completely at Random (MCAR): The missing values occur independently of any
          factor, making them unpredictable.

      2. Missing at Random (MAR): The missing values depend on observed data but not on the
          missing data itself.




                                                                                                        22

[PDF page 25; printed page 23]
   3. Missing Not at Random (MNAR): The missing values are dependent on the missing data itself,
       making imputation more complex.

Strategies for Handling Missing Values

Handling missing values is an essential step in data preprocessing, as unaddressed missing data can
lead to misleading results and poor model performance. The choice of method depends on the extent
of missing data, the nature of the dataset, and the machine learning task. While simple approaches
like mean imputation work well for numerical data, more sophisticated techniques, such as
predictive imputation, are necessary when dealing with complex missing data patterns.

Effective data cleaning ensures that machine learning models can learn from high-quality, well-
structured data, leading to more reliable and accurate predictions.




   1. Removing Missing Values

       If only a small percentage of data points contain missing values, removing these rows can
       prevent contamination of the dataset. This approach is suitable when missing values occur
       randomly and their removal does not introduce bias. However, removing data can lead to
       loss of valuable information if the dataset is already small. The code below demonstrates
       how to remove the rows with missing values.

       df_cleaned = df.dropna() # Removes rows with missing values

   2. Filling (Imputing) Missing Values
                                                                                                   23

[PDF page 26; printed page 24]
       Instead of discarding data, missing values can be filled using statistical methods. Imputation
       prevents data loss while ensuring consistency across the dataset.

           ✓ Mean imputation (suitable for numerical data that follows a normal distribution).

           ✓ Median imputation (best for skewed data).

           ✓ Mode imputation (used for categorical data).

      The code below demonstrates how to fill in missing data using mean and mode.

    # Fill missing values with the mean

    df['Age'].fillna(df['Age'].mean(), inplace=True)



    # Fill categorical missing values with mode

 df['Gender'].fillna(df['Gender'].mode()[0], inplace=True)

Example: Filling Missing Values Using Mean full code

    import pandas as pd

    from sklearn.impute import SimpleImputer

    # Sample data

    data = {'Age': [25, 30, None, 45, 50], 'Salary': [50000, None, 60000, 80000, 90000]}

    df = pd.DataFrame(data)

    # Impute missing values with mean

    imputer = SimpleImputer(strategy="mean")

    df.iloc[:, :] = imputer.fit_transform(df)

    print(df)




                                                                                                   24

[PDF page 27; printed page 25]
      3. Predicting Missing Values Using Machine Learning

          In cases where missing values are extensive, machine learning models can predict them using
          existing features. k-Nearest Neighbors (k-NN) or regression models can estimate missing
          values by analyzing patterns in the available data. The code below uses k-NN Imputer to fill
          in the missing values.

          from sklearn.impute import KNNImputer

          imputer = KNNImputer(n_neighbors=5)

          df_filled = imputer.fit_transform(df)

2.2.2 Handling Outliers

   Outliers are data points that are significantly different from the rest of the dataset. They can occur
   due to measurement errors or genuine extreme values. Outlier detection is crucial for improving
   model accuracy and robustness. Common techniques for handling outliers:

      ✓   Remove outliers: If an outlier is a result of a data entry error, it should be removed.

      ✓   Transform data: Use logarithmic transformations or robust scaling.

      ✓   Cap extreme values: Replace extreme values with a predefined threshold (e.g., 5th and 95th
          percentiles).

   Example: Removing Outliers Using the Percentile Method

       import numpy as np

       # Generate sample data with an outlier

       data = np.array([10, 12, 13, 15, 1000]) # 1000 is an outlier

       # Remove outlier using percentile method

       filtered_data = data[data < np.percentile(data, 95)]

           print(filtered_data)




                                                                                                      25
```
