---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "89-89"
printed_pages: "87-87"
section: "Density-Based Clustering (DBSCAN)"
chapter: "Chapter 5: Unsupervised Learning – Clustering Algorithms"
keywords:
  - "dbscan"
  - "clustering"
  - "clusters"
  - "density-based"
  - "noise"
  - "points"
  - "cluster"
  - "machine"
  - "spatial"
  - "identifies"
  - "dense"
  - "separates"
---

# Density-Based Clustering (DBSCAN)

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 89-89 | printed pages 87-87

Related sections: [k-Means Clustering](5-3-k-means-clustering.md), [Clustering Evaluation Metrics](5-6-clustering-evaluation-metrics.md), [Hierarchical Clustering](5-4-hierarchical-clustering.md), [Chapter 5: Unsupervised Learning – Clustering Algorithms](5-chapter-5-unsupervised-learning-clustering-algorithms.md), [Clustering](5-2-clustering.md), [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md)

## Extracted Text

```text
[PDF page 89; printed page 87]
5.5 Density-Based Clustering (DBSCAN)
DBSCAN (Density-Based Spatial Clustering of Applications with Noise) identifies dense clusters and
separates noise points. DBSCAN is widely used for anomaly detection and geospatial analysis.

Advantages of DBSCAN:

   No need to specify kkk (number of clusters).

   Works well with arbitrary-shaped clusters.

   Can detect outliers (noise points).

DBSCAN Clustering

 from sklearn.cluster import DBSCAN


 # Apply DBSCAN
 dbscan = DBSCAN(eps=0.5, min_samples=5)
 df['DBSCAN_Cluster'] = dbscan.fit_predict(df_scaled)


 # Visualize clusters




                                                                                                87
```
