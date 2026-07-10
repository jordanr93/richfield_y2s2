---
document: "Big Data and IoT 600 Study Guide"
source_file: "2026 Big data  IOT 600 Study Guide.pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "16-19"
printed_pages: "8-11"
section: "Data Cleaning, Normalization, and Transformation in Big data Workflows"
chapter: "Chapter 1: Big Data Analysis and Extraction Techniques"
keywords:
  - "normalization"
  - "big"
  - "cleaning"
  - "transformation"
  - "workflows"
  - "missing"
  - "goal"
  - "fixing"
  - "mistakes"
  - "values"
  - "mean"
  - "formats"
---

# Data Cleaning, Normalization, and Transformation in Big data Workflows

Source trace: [original PDF](../../../originals/2026%20Big%20data%20%20IOT%20600%20Study%20Guide.pdf) | PDF pages 16-19 | printed pages 8-11

Related sections: [The Ethical and Legal Considerations in Big Data Strategy](5-7-the-ethical-and-legal-considerations-in-big-data-strategy.md), [Chapter 1: Big Data Analysis and Extraction Techniques](1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Chapter 4: Big Data Storage and Security](4-chapter-4-big-data-storage-and-security.md), [Chapter 5: Strategy Development and Big Data Analytics](5-chapter-5-strategy-development-and-big-data-analytics.md), [Cloud-based and distributed big data security solutions](4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Common tools and frameworks used for big data analysis](1-3-common-tools-and-frameworks-used-for-big-data-analysis.md)

## Extracted Text

```text
[PDF page 16; printed page 8]
1.5 Data Cleaning, Normalization, and Transformation in Big data Workflows.

Data cleaning, normalisation, and transformation are crucial preprocessing procedures in big
data workflows that guarantee the accuracy, consistency, and usefulness of data for modelling
and analysis later.

Data Cleaning
Finding and fixing mistakes, inconsistencies, and missing values in raw data is the goal of data
cleaning.
Important Tasks:


                                                                                                  8

[PDF page 17; printed page 9]
Managing Missing Values: Depending on the situation and degree of severity, missing data may
be flagged, eliminated, or imputed (for example, by mean, median, or model-based imputation).
Eliminating Duplicates: To avoid bias or overrepresentation, duplicate records are found and
removed.
Fixing typos, grammatical mistakes, and inaccurate data entries is known as error correction.
Standardizing Formats: Making sure that time, date, numbers, and categories are all consistent.
Handling Outliers: Recognizing and resolving irregularities that could skew findings (e.g., capping
or deleting extreme numbers).
Big Data Challenges:
Scalability: Distributed computing is necessary for cleaning large datasets.
Automation: To manage the amount and velocity of big data, automated methods are required.
Rules Specific to Context: Often, domain expertise is required to identify what constitute "clean"
data.

Data Normalization
The goal is to standardize and scale data in order to facilitate efficient processing and comparison.
Different Normalization Types:
A feature Scaling: Min-Max Data is rescaled to a [0, 1] range by scaling.
Data is standardized using Z-Score Normalization, which yields a mean of 0 and a standard
deviation of 1.
Log transformation: Usually used to data with exponential development patterns, it lessens
distribution skewness.
Normalization of Categorical Data:
Numerical representation of categorical variables (e.g., label encoding or one-hot encoding).
Relational Normalization in the Context of Databases:
reducing redundancy and enhancing data integrity by grouping data into relational schemas (e.g.,
ensuring first, second, or third normal forms).
Big Data Challenges:
High Dimensionality: It might be computationally costly to normalize hundreds of attributes
across distributed systems.
Different Formats: Information from various sources might need to be in different normalization
strategies.

Data Transformations
The goal of data transformation is to transform unprocessed data into a format that may be used
for analysis or model construction.
Important Tasks for Transformation:
Data summarization, such as by calculating averages, totals, or counts, is known as aggregation.
Encoding is the process of transforming textual data into vector or numeric representations (TF-
IDF for text, for example).
Data wrangling is the process of rearranging and reshaping data (e.g., melting or pivot tables).
Feature engineering is the process of developing additional features (such as polynomial features
or interaction terms) that more accurately depict the data for modelling.
Type Conversion: Ensuring data types are consistent and compatible with processing systems.

                                                                                                   9

[PDF page 18; printed page 10]
Big Data Challenges:
Complexity: Data in different formats and structures (such as structured, semi-structured, and
unstructured) must be handled by transformation pipelines.
Real-Time Constraints: Workflows using streaming data require quick transformations.
Resource Management: To reduce memory and computation consumption, large-scale
transformations need to be optimized.

Sources:
Zitter, L. (2024) Big Data Analysis and Management.
https://oliviermills.com/articles/data-preprocessing-ai-art-cleaning-transforming-normalizing

Review questions
   1. What is Big Data, and what are its defining characteristics (e.g., the 3Vs or 5Vs)?
   2. Explain the difference between structured, unstructured, and semi-structured data.
   3. Describe how Big Data differs from traditional data management systems in terms of scale
       and processing.
   4. List at least three tools or frameworks commonly used for Big Data processing and
       describe their primary purposes.
   5. Compare Hadoop and Spark in terms of data processing capabilities and use cases.
   6. What is the role of NoSQL databases (e.g., MongoDB, Cassandra) in Big Data
       environments?
   7. Explain how cloud-based platforms like AWS or Azure contribute to Big Data analytics
       workflows.
   8. How can sentiment analysis be used on Big Data to influence business decisions?
   9. Explain the process of building a predictive model using Big Data analytics tools.
   10. Describe a real-world scenario where clustering or classification techniques have been
       applied to solve a business problem.
   11. What is the significance of real-time analytics in modern businesses, and how does Big
       Data enable it?
   12. Why is data cleaning crucial in Big Data workflows? Provide examples of common data
       issues and their impact if left unaddressed.
   13. What are the main differences between normalization and standardization? Why are
       these processes necessary in Big Data analysis?
   14. How does data transformation help integrate data from multiple sources into a cohesive
       format?
   15. Discuss the challenges associated with cleaning, normalizing, and transforming Big Data
       and how tools like Apache Spark or Hadoop address these challenges.




                                                                                                10

[PDF page 19; printed page 11]
   Case study


RetailMax is a mid-sized e-commerce company processing 500,000 daily transactions across
multiple platforms (website, mobile app, marketplace integrations). Their data engineering
team has been tasked with building a customer analytics pipeline to improve personalization
and marketing campaigns.

The Challenge

The marketing team requested a unified customer database to segment customers by purchase
behavior, lifetime value, and product preferences. However, the data engineering team
discovered their raw data sources were chaotic:

Data Sources:

   •   Legacy CRM system (Oracle database)
   •   E-commerce platform (PostgreSQL)
   •   Mobile app analytics (JSON logs)
   •   Social media integration (CSV exports)
   •   Customer service tickets (MongoDB

Discuss how you can apply data cleaning, normalization, and transformation in big data
workflows to solve the above challenges.




                                                                                              11
```
