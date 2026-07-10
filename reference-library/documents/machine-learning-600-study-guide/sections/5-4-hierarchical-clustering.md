---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "84-88"
printed_pages: "82-86"
section: "Hierarchical Clustering"
chapter: "Chapter 5: Unsupervised Learning – Clustering Algorithms"
keywords:
  - "clustering"
  - "k-means"
  - "segmentation"
  - "customer"
  - "unsupervised"
  - "clusters"
  - "where"
  - "points"
  - "kkk"
  - "import"
  - "hierarchical"
  - "machine"
---

# Hierarchical Clustering

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 84-88 | printed pages 82-86

Related sections: [k-Means Clustering](5-3-k-means-clustering.md), [Clustering](5-2-clustering.md), [Chapter 5: Unsupervised Learning – Clustering Algorithms](5-chapter-5-unsupervised-learning-clustering-algorithms.md), [Clustering Evaluation Metrics](5-6-clustering-evaluation-metrics.md), [Density-Based Clustering (DBSCAN)](5-5-density-based-clustering-dbscan.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md)

## Extracted Text

```text
[PDF page 84; printed page 82]
        •   Learn about k-Means, Hierarchical Clustering, and DBSCAN.
        •   Explore     real-world    applications    of    clustering    (e.g.,   customer
            segmentation, anomaly detection).
            Implement clustering algorithms using Python and visualize results.
            Evaluate clustering performance using internal metrics.




5.1 Introduction
Unsupervised learning is a category of machine learning where models analyze and learn patterns from
unlabeled data. Unlike supervised learning, where models require labeled outputs (e.g., spam vs. non-
spam emails), unsupervised learning identifies hidden structures in data without explicit supervision.
Unsupervised learning is crucial in fields like finance, marketing, and healthcare, where vast amounts of
unstructured data must be analyzed without human annotation.

5.2 Clustering
Clustering is an unsupervised learning technique that groups similar data points into clusters based on
their feature similarities. It is widely used for:

⬛ Customer segmentation – Grouping customers based on purchasing behavior.

⬛ Anomaly detection – Identifying fraudulent transactions.




                                                                                                      82

[PDF page 85; printed page 83]
⬛ Image segmentation – Dividing images into meaningful regions.

⬛ Document categorization – Organizing text documents into topics.

Mathematically, clustering can be defined as a partitioning problem: Given a dataset X with n
observations, the goal is to assign each observation to one of k clusters such that intra-cluster similarity
is maximized while inter-cluster similarity is minimized.

5.3 k-Means Clustering
k-Means is a centroid-based clustering algorithm that divides data into kkk clusters, minimizing the
distance between data points and their assigned cluster center. k-Means is one of the most commonly
used clustering techniques for customer segmentation in retail and e-commerce.

How k-Means Works:

1 Choose the number of clusters kkk.
2 Randomly initialize kkk centroids.
3 Assign each data point to the nearest centroid.
4 Update centroids based on the mean of assigned points.
5 Repeat steps 3 and 4 until convergence.

Mathematical Representation




Customer Segmentation Using k-Means

Cluster customers based on purchasing behavior.

                                                                                                         83

[PDF page 86; printed page 84]
import numpy as np

import pandas as pd

import matplotlib.pyplot as plt

from sklearn.cluster import KMeans

from sklearn.preprocessing import StandardScaler




# Generate synthetic customer data (Age, Annual Income, Spending Score)

np.random.seed(42)

data = np.random.rand(200, 3) * [50, 100000, 100] # Simulated Age, Income, Score

df = pd.DataFrame(data, columns=['Age', 'Annual_Income', 'Spending_Score'])



# Standardize the data

scaler = StandardScaler()

df_scaled = scaler.fit_transform(df)




# Apply k-Means clustering

kmeans = KMeans(n_clusters=3, random_state=42)

df['Cluster'] = kmeans.fit_predict(df_scaled)




# Visualize clusters

plt.scatter(df['Annual_Income'], df['Spending_Score'], c=df['Cluster'], cmap='viridis')



                                                                                          84

[PDF page 87; printed page 85]
    plt.xlabel('Annual Income ($)')

    plt.ylabel('Spending Score')

    plt.title('Customer Segmentation using k-Means')

    plt.show()




Output:




]

5.4 Hierarchical Clustering
Unlike k-Means, Hierarchical Clustering creates a tree-like structure (dendrogram) representing nested
clusters. Hierarchical clustering is effective for datasets with unknown numbers of clusters, unlike k-
Means which requires pre-defining k.

Types of Hierarchical Clustering




                                                                                                    85

[PDF page 88; printed page 86]
◆ Agglomerative (Bottom-Up) – Each data point starts as its own cluster, and clusters merge iteratively.

◆ Divisive (Top-Down) – The entire dataset starts as a single cluster and splits iteratively.

Hierarchical Clustering on Customer Data

 from scipy.cluster.hierarchy import dendrogram, linkage

 import seaborn as sns

 # Compute linkage matrix

 linkage_matrix = linkage(df_scaled, method='ward')

 # Plot dendrogram

 plt.figure(figsize=(10, 5))

 dendrogram(linkage_matrix, labels=df.index, leaf_rotation=90)

 plt.title('Hierarchical Clustering Dendrogram')

 plt.xlabel('Customer Index')

 plt.ylabel('Distance')

 plt.show()



Expected Output




                                                                                                     86
```
