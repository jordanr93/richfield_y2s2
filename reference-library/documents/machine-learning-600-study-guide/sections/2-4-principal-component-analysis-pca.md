---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "29-34"
printed_pages: "27-32"
section: "Principal Component Analysis (PCA)"
chapter: "Chapter Two: Data Preprocessing and Feature Engineering"
keywords:
  - "pca"
  - "features"
  - "dataset"
  - "principal"
  - "analysis"
  - "component"
  - "new"
  - "variance"
  - "dimensionality"
  - "while"
  - "reduction"
  - "number"
---

# Principal Component Analysis (PCA)

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 29-34 | printed pages 27-32

Related sections: [Applications of PCA](2-5-applications-of-pca.md), [Binary Search Tree: Analysis](../../programming-622-study-guide/sections/9-4-binary-search-tree-analysis.md), [Big Data Analysis Techniques](../../big-data-iot-600-study-guide/sections/1-4-big-data-analysis-techniques.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Common tools and frameworks used for big data analysis](../../big-data-iot-600-study-guide/sections/1-3-common-tools-and-frameworks-used-for-big-data-analysis.md), [Initial Cost and TCO](../../information-systems-622-study-guide/sections/4-1-3-initial-cost-and-tco.md)

## Extracted Text

```text
[PDF page 29; printed page 27]
2.4 Principal Component Analysis (PCA)

2.4.1 Dimensionality Reduction

In machine learning and data analysis, dimensionality reduction is a crucial preprocessing step used to
reduce the number of input features in a dataset while retaining as much relevant information as
possible. High-dimensional data can pose several challenges, collectively referred to as the curse of
dimensionality. These challenges include:

   ✓   Increased computational cost – As the number of features grows, so does the complexity of the
       model, requiring more processing power and memory.
   ✓   Overfitting risk – A model with too many features may learn noise instead of meaningful patterns,
       leading to poor generalization on new data.
   ✓   Reduced interpretability – When a dataset has a large number of features, understanding the
       relationships between variables becomes increasingly difficult.

Dimensionality reduction techniques address these problems by simplifying the dataset while preserving
its core structure and information. Among these techniques, Principal Component Analysis (PCA) is one
of the most widely used methods.

2.4.2 What is Principal Component Analysis (PCA)?

Principal Component Analysis (PCA) is a statistical technique that transforms a high-dimensional dataset
into a lower-dimensional space while maintaining as much variance (information) as possible. Rather
than simply removing features, PCA creates new features that are linear combinations of the original
ones. These new features, called principal components, capture the directions of maximum variance in
the dataset. The primary objectives of PCA are:

   1. Identifying the directions of maximum variance in the dataset.
   2. Creating new axes called principal components, which are linear combinations of the original
       features.
   3. Selecting the top components that capture most of the variance while discarding less significant
       ones.



                                                                                                     27

[PDF page 30; printed page 28]
In the example below, Principal Component Analysis (PCA) is applied to a dataset containing two highly
correlated features to demonstrate how PCA identifies the direction of maximum variance and
transforms the dataset into a new coordinate system. The dataset consists of Feature X, which is
randomly generated, and Feature Y, which is a linear function of Feature X with added noise, creating a
strong correlation between the two features. The first scatter plot (blue) represents the original dataset,
where the elongated cluster of points suggests redundancy in the data, as both features contain nearly
identical information. To extract the most meaningful insights, the dataset is standardized to ensure all
features contribute equally, followed by the application of PCA, which finds the principal components—
new axes that maximize variance. The second scatter plot (red) illustrates the transformed dataset, where
Principal Component 1 (PC1) captures the majority of the variance, while Principal Component 2 (PC2)
contributes only minimally (0.59%). The explained variance ratio confirms that PC1 captures 99.4% of the
variance, making PC2 largely insignificant. This transformation enables dimensionality reduction while
preserving essential patterns in the data, leading to more efficient machine learning models with reduced
computational complexity and improved interpretability.




     import numpy as np

     import pandas as pd



                                                                                                        28

[PDF page 31; printed page 29]
import matplotlib.pyplot as plt

from sklearn.decomposition import PCA

from sklearn.preprocessing import StandardScaler



# Generate a synthetic dataset with two highly correlated features

np.random.seed(42)

X = np.random.rand(100, 1) * 10 # Generate random values for X

Y = X * 2 + np.random.normal(0, 1, (100, 1)) # Y is a linear function of X with noise



# Create a DataFrame

df = pd.DataFrame(np.hstack((X, Y)), columns=["Feature X", "Feature Y"])



# Standardizing the data (important for PCA)

scaler = StandardScaler()

df_scaled = scaler.fit_transform(df)



# Apply PCA

pca = PCA(n_components=2) # Keep both components for visualization

df_pca = pca.fit_transform(df_scaled)



# Scatter plot of original features

plt.figure(figsize=(12, 5))




                                                                                        29

[PDF page 32; printed page 30]
plt.subplot(1, 2, 1)

plt.scatter(df["Feature X"], df["Feature Y"], color="blue", alpha=0.5)

plt.title("Before PCA: Original Features")

plt.xlabel("Feature X")

plt.ylabel("Feature Y")

plt.grid()



# Scatter plot along principal components

plt.subplot(1, 2, 2)

plt.scatter(df_pca[:, 0], df_pca[:, 1], color="red", alpha=0.5)

plt.title("After PCA: Transformed Features")

plt.xlabel("Principal Component 1")

plt.ylabel("Principal Component 2")

plt.grid()



plt.show()

# Display explained variance ratio

explained_variance = pca.explained_variance_ratio_

explained_variance




                                                                         30

[PDF page 33; printed page 31]
2.4.3 Choosing the Right Number of Principal Components

A key challenge in PCA is determining how many principal components to retain. The explained variance
ratio helps in making this decision by indicating the proportion of total variance captured by each
component.

Explained Variance Ratio

The sum of all eigenvalues represents the total variance in the dataset. Each principal component’s
eigenvalue represents the fraction of total variance it explains. The cumulative explained variance helps
determine how many components are necessary to retain meaningful information.

Selecting the Optimal Number of Components

   1. Scree Plot Method

           ✓ A scree plot displays the explained variance ratio for each principal component.

           ✓ The "elbow point" in the plot indicates the optimal number of components.

   2. Variance Threshold Approach

           ✓ Retain enough components to explain at least 90-95% of the variance.

           ✓ Example: If the first three components explain 92% of the variance, the rest can be
               discarded.

   3. Cross-Validation

           ✓ Test different numbers of components and evaluate model performance to determine the
               best balance between accuracy and complexity.

Fig 2.4 illustrates the effect of PCA on a synthetic two-dimensional dataset. The first plot (top left) shows
the original data points, colored to distinguish between them. The algorithm proceeds by first finding the
direction of maximum variance, labeled “Component 1.” This is the direction (or vector) in the data that
contains most of the information, or in other words, the direction along which the features are most
correlated with each other. Then, the algorithm finds the direction that contains the most information
while being orthogonal (at a right angle) to the first direction. In two dimensions, there is only one

                                                                                                          31

[PDF page 34; printed page 32]
possible orientation that is at a right angle, but in higher-dimensional spaces there would be (infinitely)
many orthogonal directions. Although the two components are drawn as arrows, it doesn’t really matter
where the head and the tail are; we could have drawn the first component from the center up to 140 the
top left instead of down to the bottom right. The directions found using this process are called principal
components, as they are the main directions of variance in the data. In general, there are as many
principal components as original features.




Fig 2.4 The effect of PCA on a synthetic two-dimensional dataset

The second plot (top right) shows the same dataset but with a rotation applied, such that the first
principal component aligns with the x-axis and the second principal component aligns with the y-axis.
Before this rotation, the data had the mean subtracted to center it around zero. After the rotation, the
two axes become uncorrelated, meaning the correlation matrix of the data in this new configuration has
zeros off the diagonal. PCA can be used for dimensionality reduction by retaining only a subset of the
principal components. In this case, we could keep just the first principal component, as shown in the
                                                                                                        32
```
