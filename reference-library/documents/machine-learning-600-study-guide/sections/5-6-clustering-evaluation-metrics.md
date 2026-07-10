---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "90-169"
printed_pages: "88-207"
section: "Clustering Evaluation Metrics"
chapter: "Chapter 5: Unsupervised Learning – Clustering Algorithms"
keywords:
  - "cluster"
  - "clustering"
  - "points"
  - "clusters"
  - "centers"
  - "k-means"
  - "dataset"
  - "point"
  - "metrics"
  - "assign"
  - "center"
  - "then"
---

# Clustering Evaluation Metrics

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 90-169 | printed pages 88-207

Related sections: [k-Means Clustering](5-3-k-means-clustering.md), [Density-Based Clustering (DBSCAN)](5-5-density-based-clustering-dbscan.md), [Hierarchical Clustering](5-4-hierarchical-clustering.md), [Set Clear Goals and Metrics](../../big-data-iot-600-study-guide/sections/126-set-clear-goals-and-metrics.md), [Tracking Key Metrics](../../big-data-iot-600-study-guide/sections/103-tracking-key-metrics.md), [Chapter 5: Unsupervised Learning – Clustering Algorithms](5-chapter-5-unsupervised-learning-clustering-algorithms.md)

## Extracted Text

```text
[PDF page 90; printed page 88]
5.6 Clustering Evaluation Metrics
Since clustering is unsupervised, traditional accuracy metrics do not apply. Instead, we use:

   ✓   Silhouette Score – Measures how well clusters are separated.

   ✓   Davies-Bouldin Index – Lower values indicate better clustering.


                                                                                                 88

[PDF page 91; printed page 89]
   ✓    Elbow Method (for k-Means) – Determines the optimal number of clusters.




Task:
1 Load a real-world dataset (e.g., Mall Customer Segmentation dataset on Kaggle).
2 Apply k-Means, Hierarchical Clustering, and DBSCAN.
3 Compare the clusters using visualizations and silhouette scores.



As we described earlier, clustering is the task of partitioning the dataset into groups, called clusters. The
goal is to split up the data in such a way that points within a single cluster are very similar and points in
different clusters are different. Similarly to classification algorithms, clustering algorithms assign (or
predict) a number to each data point, indicating which cluster a particular point belongs to.

k-Means Clustering k-means clustering is one of the simplest and most commonly used clustering
algorithms. It tries to find cluster centers that are representative of certain regions of the data. The
algorithm alternates between two steps: assigning each data point to the closest cluster center, and then
setting each cluster center as the mean of the data points that are assigned to it. The algorithm is finished
when the assignment of instances to clusters no longer changes. The following example illustrates the
algorithm on a synthetic dataset:




                                                                                                          89

[PDF page 92; printed page 90]
Cluster centers are shown as triangles, while data points are shown as circles. Colors indicate cluster
membership. We specified that we are looking for three clusters, so the algorithm was initialized by
declaring three data points randomly as cluster centers (see “Initialization”). Then the iterative algorithm
starts. First, each data point is assigned to the cluster center it is closest to (see “Assign Points (1)”). Next,
the cluster centers are updated to be the mean of the assigned points (see “Recompute Centers (1)”).
Then the process is repeated two more times. After the third iteration, the assignment of points to cluster
centers remained unchanged, so the algorithm stops. Given new data points, k-means will assign each to
the closest cluster center. The next example shows the boundaries of the cluster centers:




                                                                                                               90

[PDF page 93; printed page 91]
Applying k-means with scikit-learn is quite straightforward. Here, we apply it to the synthetic data that
we used for the preceding plots. We instantiate the KMeans class, and set the number of clusters we are
looking for. Then we call the fit method with the data:




During the algorithm, each training data point in X is assigned a cluster label. You can find these labels in
the kmeans.labels_ attribute:




You can see that clustering is somewhat similar to classification, in that each item gets a label. However,
there is no ground truth, and consequently the labels themselves have no a priori meaning. Let’s go back
to the example of clustering face images that we discussed before. It might be that the cluster 3 found
by the algorithm contains only faces of your friend Bela. You can only know that after you look at the
pictures, though, and the number 3 is arbitrary. The only information the algorithm gives you is that all
faces labeled as 3 are similar. For the clustering we just computed on the two-dimensional toy dataset,
that means that we should not assign any significance to the fact that one group was labeled 0 and
another one was labeled 1. Running the algorithm again might result in a differ- ent numbering of clusters
because of the random nature of the initialization. Here is a plot of this data again. The cluster centers
are stored in the cluster_centers_ attribute, and we plot them as triangles:




                                                                                                          91

[PDF page 94; printed page 92]
We can also use more or fewer cluster centers




5.6.1 Failure cases of k-means
Even if you know the “right” number of clusters for a given dataset, k-means might not always be able to
recover them. Each cluster is defined solely by its center, which means that each cluster is a convex shape.
As a result of this, k-means can only cap- ture relatively simple shapes. k-means also assumes that all
clusters have the same “diameter” in some sense; it always draws the boundary between clusters to be
exactly in the middle between the cluster centers. That can sometimes lead to surprising results:
                                                                                                         92

[PDF page 95; printed page 93]
One might have expected the dense region in the lower left to be the first cluster, the dense region in the
upper right to be the second, and the less dense region in the cen- ter to be the third. Instead, both
cluster 0 and cluster 1 have some points that are far away from all the other points in these clusters that
“reach” toward the center. k-means also assumes that all directions are equally important for each
cluster. The following plot shows a two-dimensional dataset where there are three clearly separated
parts in the data. However, these groups are stretched toward the diagonal. As k-means only considers
the distance to the nearest cluster center, it can’t handle this kind of data:




                                                                                                        93

[PDF page 96; printed page 94]
k-means also performs poorly if the clusters have more complex shapes:




                                                                         94

[PDF page 97; printed page 95]
Vector quantization, or seeing k-means as decomposition Even though k-means is a clustering algorithm,
there are interesting parallels between k-means and the decomposition methods like PCA and NMF that
we discussed ear- lier. You might remember that PCA tries to find directions of maximum variance in the
data, while NMF tries to find additive components, which often correspond to “extremes” or “parts” of
the data. Both methods tried to express the data points as a sum over some components. k-means, on
the other hand, tries to rep- resent each data point using a cluster center. You can think of that as each
point being represented using only a single component, which is given by the cluster center. This view of
k-means as a decomposition method, where each point is represented using a single component, is called
vector quantization.

Let’s do a side-by-side comparison of PCA, NMF, and k-means, showing the components extracted, as
well as reconstructions of faces from the test set using 100 components. For k-means, the reconstruction
is the closest cluster center found on the training set:




                                                                                                       95

[PDF page 98; printed page 96]
An interesting aspect of vector quantization using k-means is that we can use many more clusters than
input dimensions to encode our data. Let’s go back to the two_moons data. Using PCA or NMF, there is
nothing much we can do to this data, as it lives in only two dimensions. Reducing it to one dimension
with PCA or NMF would completely destroy the structure of the data. But we can find a more expressive
representation with k-means, by using more cluster centers:




                                                                                                  96

[PDF page 99; printed page 97]
We used 10 cluster centers, which means each point is now assigned a number between 0 and 9. We can
see this as the data being represented using 10 components (that is, we have 10 new features), with all
features being 0, apart from the one that represents the cluster center the point is assigned to. Using
this 10-dimensional repre- sentation, it would now be possible to separate the two half-moon shapes
using a lin- ear model, which would not have been possible using the original two features. It is also
possible to get an even more expressive representation of the data by using the distances to each of the
cluster centers as features. This can be accomplished using the transform method of kmeans:




K-means is a widely used clustering algorithm, favored for its simplicity, ease of implementation, and fast
execution. It scales well to large datasets, and scikit-learn offers an even more scalable version called
MiniBatchKMeans, which is capable of handling very large datasets. However, one limitation of k-means


                                                                                                        97

[PDF page 100; printed page 98]
is that it depends on a random initialization, meaning the results can vary depending on the random
seed. To address this, scikit-learn runs the algorithm 10 times with different random initializations and
selects the best outcome. Other drawbacks include the algorithm's restrictive assumptions about cluster
shapes and the need to specify the number of clusters beforehand, which may not always be known in
real-world scenarios.

Agglomerative clustering encompasses a group of algorithms that follow similar principles: the algorithm
begins by treating each data point as its own cluster, then iteratively merges the two most similar clusters
until a predefined stopping condition is met. In scikit-learn, this stopping condition is set by the desired
number of clusters, and clusters are merged until that number is reached. The similarity between clusters
is measured using different linkage criteria, each defining how to evaluate the proximity between two
clusters.

Scikit-learn offers three linkage methods:

    •   Ward: The default option, Ward merges clusters in such a way that the increase in the overall
        variance within all clusters is minimized. This typically results in clusters of similar size.

    •   Average: This method merges clusters with the smallest average distance between all points in
        the two clusters.

    •   Complete: Also known as maximum linkage, this criterion merges clusters based on the smallest
        maximum distance between any two points in the clusters.

Ward is suitable for most datasets, and will be used in the examples here. However, if the clusters have
significantly different sizes, such as when one cluster is much larger than the others, average or complete
linkage may produce better results.

The following plot demonstrates the process of agglomerative clustering applied to a two-dimensional
dataset, where the goal is to identify three clusters.




                                                                                                         98

[PDF page 101; printed page 99]
Initially, each point is its own cluster. Then, in each step, the two clusters that are closest are merged. In
the first four steps, two single-point clusters are picked and these are joined into two-point clusters. In
step 5, one of the two-point clusters is extended to a third point, and so on. In step 9, there are only
three clusters remain- ing. As we specified that we are looking for three clusters, the algorithm then
stops. Let’s have a look at how agglomerative clustering performs on the simple threecluster data we
used here. Because of the way the algorithm works, agglomerative clustering cannot make predictions
for new data points. Therefore, Agglomerative Clustering has no predict method. To build the model and
get the cluster member- ships on the training set, use the fit_predict method instead.




                                                                                                           99

[PDF page 102; printed page 100]
As expected, the algorithm recovers the clustering perfectly. While the scikit-learn implementation of
agglomerative clustering requires you to specify the number of clusters you want the algorithm to find,
agglomerative clustering methods provide some help with choosing the right number, which we will
discuss next.

Hierarchical clustering and dendrograms

Agglomerative clustering produces what is known as a hierarchical clustering. The clustering proceeds
iteratively, and every point makes a journey from being a single point cluster to belonging to some final
cluster. Each intermediate step provides a clustering of the data (with a different number of clusters). It
is sometimes helpful to look at all possible clusterings jointly. The next example shows an overlay of all
the possible clusterings shown before, providing some insight into how each cluster breaks up into
smaller clusters:




While this visualization provides a very detailed view of the hierarchical clustering, it relies on the two-
dimensional nature of the data and therefore cannot be used on datasets that have more than two
features. There is, however, another tool to visualize hierarchical clustering, called a dendrogram, that
can handle multidimensional datasets.

Unfortunately, scikit-learn currently does not have the functionality to draw dendrograms. However, you
can generate them easily using SciPy. The SciPy clustering algorithms have a slightly different interface to
the scikit-learn clustering algorithms. SciPy provides a function that takes a data array X and computes a
linkage array, which encodes hierarchical cluster similarities. We can then feed this linkage array into the
scipy dendrogram function to plot the dendrogram:

                                                                                                        100

[PDF page 103; printed page 101]
The dendrogram illustrates the data points as numbered from 0 to 11 at the bottom. A tree structure is
then created with these points, each representing individual clusters, and new parent nodes are added
as pairs of clusters are merged. Starting from the bottom and moving upward, the first merger involves
points 1 and 4. Next, points 6 and 9 form a cluster, and this merging continues. At the top level, there are
two main branches: one includes points 11, 0, 5, 10, 7, 6, and 9, while the other consists of points 1, 4,
3, 2, and 8. These two branches represent the two largest clusters on the left side of the plot.

DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is another powerful clustering
algorithm. Its key advantages are that it does not require specifying the number of clusters beforehand,
it can identify clusters with complex shapes, and it can detect outliers or points that don't belong to any
cluster. Although DBSCAN is slower than both agglomerative clustering and k-means, it can still handle
relatively large datasets.

DBSCAN operates by identifying dense regions in the feature space, where many data points are located
close to each other. These dense regions are considered potential clusters, separated by areas that are
relatively sparse. Points within a dense region are termed core samples (or core points). Two key

                                                                                                        101

[PDF page 104; printed page 102]
parameters control DBSCAN: min_samples and eps. If there are at least min_samples points within a
distance of eps from a given point, it is labeled as a core sample.

The algorithm starts by selecting an arbitrary point and finds all points within a distance of eps. If fewer
than min_samples points are found within this radius, the point is marked as noise, meaning it does not
belong to any cluster. If more than min_samples points are within eps, the point is labeled as a core
sample and assigned to a new cluster. The algorithm then visits all neighboring points within eps. If those
neighbors haven't been assigned a cluster, they are given the same cluster label. If any of the neighbors
are core samples, their neighbors are recursively visited, and the cluster grows until there are no more
core samples within eps. The process repeats with an unvisited point, and the algorithm continues until
all points have been processed.

In the end, there are three kinds of points: core points, points that are within distance eps of core points
(called boundary points), and noise. When the DBSCAN algorithm is run on a particular dataset multiple
times, the clustering of the core points is always the same, and the same points will always be labeled as
noise. However, a boundary point might be neighbor to core samples of more than one cluster. Therefore,
the cluster membership of boundary points depends on the order in which points are vis- ited. Usually
there are only few boundary points, and this slight dependence on the order of points is not important.
Let’s apply DBSCAN on the synthetic dataset we used to demonstrate agglomerative clustering. Like
agglomerative clustering, DBSCAN does not allow predictions on new test data, so we will use the
fit_predict method to perform clustering and return the cluster labels in one step:




As you can see, all data points were assigned the label -1, which stands for noise. This is a consequence
of the default parameter settings for eps and min_samples, which are not tuned for small toy datasets.
The cluster assignments for different values of min_samples and eps are shown below, and visualized:




                                                                                                        102

[PDF page 105; printed page 103]
In this plot, points belonging to clusters are represented by solid markers, while noise points are shown
in white. Core samples are indicated by larger markers, and boundary points are represented by smaller
ones. As eps increases (moving from left to right in the figure), the clusters expand to include more
points, but this may also lead to the merging of distinct clusters into one. Conversely,
increasing min_samples (moving from top to bottom) results in fewer points being classified as core
samples, and more points being labeled as noise.

The eps parameter is typically more influential, as it sets the proximity threshold for points to be
considered as part of the same cluster. If eps is too small, no points may qualify as core samples, and all
points could be labeled as noise. On the other hand, if eps is too large, all points may end up in a single
cluster.


                                                                                                       103

[PDF page 106; printed page 104]
The min_samples parameter mainly impacts whether points in less dense areas are treated as outliers or
included in their own clusters. Lowering min_samples causes smaller groups to be labeled as noise. For
instance, when min_samples is set to 3, three clusters are formed: one with four points, one with five
points, and one with three points. However, when min_samples is increased to 5, the smaller clusters
(with three and four points) are considered noise, leaving only the cluster with five points.

Although DBSCAN does not require specifying the number of clusters directly, adjusting eps affects the
number of clusters identified. Finding the optimal eps value can be easier when the data is scaled using
methods like StandardScaler or MinMaxScaler, as these techniques ensure that all features are on a
similar scale. The outcome of running DBSCAN on the two_moons dataset is shown here, where the
algorithm successfully identifies the two half-circles and separates them using the given settings.




Comparing and Evaluating Clustering Algorithms

One of the challenges in applying clustering algorithms is that it is very hard to assess how well an
algorithm worked, and to compare outcomes between different algo- rithms. After talking about the
algorithms behind k-means, agglomerative clustering, and DBSCAN, we will now compare them on some
real-world datasets.

Evaluating clustering with ground truth

                                                                                                      104

[PDF page 107; printed page 105]
There are metrics that can be used to assess the outcome of a clustering algorithm relative to a ground
truth clustering, the most important ones being the adjusted rand index (ARI) and normalized mutual
information (NMI), which both provide a quanti- tative measure between 0 and 1. Here, we compare the
k-means, agglomerative clustering, and DBSCAN algorithms using ARI. We also include what it looks like
when we randomly assign points to two clusters for comparison:




The adjusted rand index provides intuitive results, with a random cluster assignment having a score of 0
and DBSCAN (which recovers the desired clustering perfectly) having a score of 1.

A common mistake when evaluating clustering in this way is to use accuracy_score instead of
adjusted_rand_score, normalized_mutual_info_score, or some other clustering metric. The problem in
using accuracy is that it requires the assigned clus- ter labels to exactly match the ground truth. However,
the cluster labels themselves are meaningless—the only thing that matters is which points are in the
same cluster:




                                                                                                        105

[PDF page 108; printed page 106]
Evaluating clustering without ground truth Although we have just shown one way to evaluate clustering
algorithms, in practice, there is a big problem with using measures like ARI. When applying clustering
algo- rithms, there is usually no ground truth to which to compare the results. If we knew the right
clustering of the data, we could use this information to build a supervised model like a classifier.
Therefore, using metrics like ARI and NMI usually only helps in developing algorithms, not in assessing
success in an application. There are scoring metrics for clustering that don’t require ground truth, like
the sil- houette coefficient. However, these often don’t work well in practice. The silhouette score
computes the compactness of a cluster, where higher is better, with a perfect score of 1. While compact
clusters are good, compactness doesn’t allow for complex shapes. Here is an example comparing the
outcome of k-means, agglomerative clustering, and DBSCAN on the two-moons dataset using the
silhouette score:




                                                                                                     106

[PDF page 109; printed page 107]
As observed, k-means achieves the highest silhouette score, even though we may prefer the results
produced by DBSCAN. A more effective approach for evaluating clusters is to use robustness-based
clustering metrics. These metrics involve running an algorithm after adding noise to the data or using
different parameter settings and comparing the results. The idea is that if many algorithm configurations
and variations in the data produce the same outcome, the result is likely reliable. Unfortunately, this
approach is not available in scikit-learn as of this writing.

Even with a very robust clustering or a high silhouette score, we still cannot determine if the clustering
has any semantic meaning or if it reflects an aspect of the data we care about. Returning to the face
image example, we might want to identify groups of similar faces, such as distinguishing between men
and women, young and old, or people with beards versus those without. Suppose we cluster the data
into two groups, and all algorithms agree on which points should be grouped together. However, we still
cannot be certain that the clusters correspond to the concepts we are interested in. The clusters could
have been formed based on factors like side views versus front views, photos taken at night versus during
the day, or pictures captured with different types of phones (iPhones versus Androids). The only way to
determine whether the clustering aligns with our interests is through manual analysis of the clusters.

Comparing algorithms on the faces dataset Let’s apply the k-means, DBSCAN, and agglomerative
clustering algorithms to the Labeled Faces in the Wild dataset, and see if any of them find interesting
structure. We will use the eigenface representation of the data, as produced by PCA(whiten=True), with
100 components:




We saw earlier that this is a more semantic representation of the face images than the raw pixels. It will
also make computation faster. A good exercise would be for you to run the following experiments on the
original data, without PCA, and see if you find similar clusters.

Analyzing the faces dataset with DBSCAN. We will start by applying DBSCAN, which we just discussed:




                                                                                                      107

[PDF page 110; printed page 108]
We see that all the returned labels are –1, so all of the data was labeled as “noise” by DBSCAN. There are
two things we can change to help this: we can make eps higher, to expand the neighborhood of each
point, and set min_samples lower, to consider smaller groups of points as clusters. Let’s try changing
min_samples first:




Even when considering groups of three points, everything is labeled as noise. So, we need to increase
eps:




Using a much larger eps of 15, we get only a single cluster and noise points. We can use this result to find
out what the “noise” looks like compared to the rest of the data. To understand better what’s happening,
let’s look at how many points are noise, and how many points are inside the cluster:




Comparing these images to the random sample of face images, we can guess why they were labeled as
noise: the fifth image in the first row shows a per- son drinking from a glass, there are images of people
wearing hats, and in the last image there’s a hand in front of the person’s face. The other images contain


                                                                                                        108

[PDF page 111; printed page 109]
odd angles or crops that are too close or too wide. This kind of analysis—trying to find “the odd one
out”—is called outlier detection. If this was a real application, we might try to do a better job of cropping
images, to get more homogeneous data. There is little we can do about people in photos sometimes
wearing hats, drinking, or holding something in front of their faces, but it’s good to know that these are
issues in the data that any algorithm we might apply needs to handle. If we want to find more interesting
clusters than just one large one, we need to set eps smaller, somewhere between 15 and 0.5 (the default).
Let’s have a look at what different values of eps result in:




For low settings of eps, all points are labeled as noise. For eps=7, we get many noise points and many
smaller clusters. For eps=9 we still get many noise points, but we get one big cluster and some smaller
clusters. Starting from eps=11, we get only one large cluster and noise. What is interesting to note is that
there is never more than one large cluster. At most, there is one large cluster containing most of the
points, and some smaller clusters. This indicates that there are not two or three different kinds of face
images in the data that are very distinct, but rather that all images are more or less equally similar to (or
dissimilar from) the rest. The results for eps=7 look most interesting, with many small clusters. We can
investigate this clustering in more detail by visualizing all of the points in each of the 13 small clusters:




                                                                                                          109

[PDF page 112; printed page 110]
Some of the clusters correspond to people with very distinct faces (within this dataset), such as Sharon
or Koizumi. Within each cluster, the orientation of the face is also quite fixed, as well as the facial
expression. Some of the clusters contain faces of multiple people, but they share a similar orientation
and expression. This concludes our analysis of the DBSCAN algorithm applied to the faces dataset. As you
can see, we are doing a manual analysis here, different from the much more automatic search approach
we could use for supervised learning based on R 2 score or accuracy. Let’s move on to applying k-means
and agglomerative clustering. Analyzing the faces dataset with k-means. We saw that it was not possible
to create more than one big cluster using DBSCAN. Agglomerative clustering and k-means are much more
likely to create clusters of even size, but we do need to set a target number of clusters. We could set the
number of clusters to the known number of people in the dataset, though it is very unlikely that an

                                                                                                       110

[PDF page 113; printed page 111]
unsupervised clustering algorithm will recover them. Instead, we can start with a low number of clusters,
like 10, which might allow us to analyze each of the clusters:




As you can see, k-means clustering partitioned the data into relatively similarly sized clusters from 64 to
386. This is quite different from the result of DBSCAN. We can further analyze the outcome of k-means
by visualizing the cluster centers. As we clustered in the representation produced by PCA, we need to
rotate the cluster centers back into the original space to visualize them, using pca.inverse_transform:




The cluster centers found by k-means are very smooth versions of faces. This is not very surprising, given
that each center is an average of 64 to 386 face images. Working with a reduced PCA representation adds
to the smoothness of the images (compared to the faces reconstructed using 100 PCA dimensions). The
clustering seems to pick up on different orientations of the face, different expressions (the third cluster
center seems to show a smiling face), and the presence of shirt collars (see the second-to-last cluster
center). For a more detailed view, we show for each cluster center the five most typical images in the
cluster (the images assigned to the cluster that are closest to the cluster center) and the five most atypical
images in the cluster (the images assigned to the cluster that are furthest from the cluster center):




                                                                                                         111

[PDF page 114; printed page 112]
112

[PDF page 115; printed page 113]
Analyzing the faces dataset with agglomerative clustering. Now, let’s look at the results of agglomerative
clustering:




Agglomerative clustering also produces relatively equally sized clusters, with cluster sizes between 26
and 623. These are more uneven than those produced by k-means, but much more even than the ones
produced by DBSCAN. We can compute the ARI to measure whether the two partitions of the data given
by agglomerative clustering and k-means are similar:



                                                                                                      113

[PDF page 116; printed page 114]
An ARI of only 0.13 means that the two clusterings labels_agg and labels_km have little in common. This
is not very surprising, given the fact that points further away from the cluster centers seem to have little
in common for k-means. Next, we might want to plot the dendrogram. We’ll limit the depth of the tree
in the plot, as branching down to the individual 2,063 data points would result in an unreadably dense
plot:




Creating 10 clusters, we cut across the tree at the very top, where there are 10 vertical lines. In the
dendrogram for the toy data, you could see by the length of the branches that two or three clusters might
capture the data appropriately. For the faces data, there doesn’t seem to be a very natural cutoff point.
There are some branches that represent more distinct groups, but there doesn’t appear to be a particular
number of clusters that is a good fit. This is not surprising, given the results of DBSCAN, which tried to
cluster all points together. Let’s visualize the 10 clusters, as we did for k-means earlier. Note that there is
no notion of cluster center in agglomerative clustering (though we could compute the mean), and we
simply show the first couple of points in each cluster. We show the number of points in each cluster to
the left of the first image:




                                                                                                          114

[PDF page 117; printed page 115]
While some of the clusters seem to have a semantic theme, many of them are too large to be actually
homogeneous. To get more homogeneous clusters, we can run the algorithm again, this time with 40
clusters, and pick out some of the clusters that are particularly interesting:




                                                                                               115

[PDF page 118; printed page 116]
Summary of Clustering Methods

This section highlighted the fact that clustering is a largely qualitative process, often most useful during
the exploratory phase of data analysis. We explored three clustering algorithms: k-means, DBSCAN, and
agglomerative clustering. Each method offers a way to control the level of granularity in clustering. While
k-means and agglomerative clustering allow you to specify the number of clusters, DBSCAN lets you
define proximity using the eps parameter, which indirectly affects the cluster size. All three algorithms
are capable of handling large, real-world datasets, are relatively easy to understand, and support
clustering into multiple groups.

Each algorithm has its own unique strengths. K-means provides a way to characterize clusters by their
centers and can be seen as a decomposition method, representing each data point by its cluster's center.
DBSCAN has the advantage of detecting "noise points" that do not belong to any cluster and can

                                                                                                        116

[PDF page 119; printed page 117]
automatically determine the number of clusters. Unlike the other two methods, DBSCAN can identify
clusters with complex shapes, as demonstrated in the two_moons example. However, DBSCAN can
sometimes create clusters of vastly different sizes, which may be either a benefit or a drawback.
Agglomerative clustering, on the other hand, offers a hierarchical view of possible data partitions, which
can be easily examined using dendrograms.




The second category of machine learning algorithms we will explore is unsupervised learning. In
unsupervised learning, there is no predefined output or supervisor guiding the algorithm. Instead, the
algorithm is given input data and is tasked with independently identifying patterns or extracting insights
from it.




Different Types of Preprocessing

The first plot above shows a synthetic two-class classification dataset with two features. The first feature,
represented along the x-axis, ranges from 10 to 15, while the second feature, shown along the y-axis,
ranges from approximately 1 to 9. The subsequent four plots demonstrate four different methods for
transforming the data to create more standardized ranges. The StandardScaler in scikit-learn
standardizes each feature by adjusting its mean to 0 and its variance to 1, ensuring that all features are
on the same scale. However, this method does not control the specific minimum and maximum values
of the features. The RobustScaler functions similarly to the StandardScaler but uses the median and
quartiles instead of the mean and variance. This makes the RobustScaler less sensitive to outliers (data
points that are significantly different from the rest), which could otherwise affect scaling methods based
on the mean and variance. The MinMaxScaler shifts and scales the data so that all feature values fall

                                                                                                         117

[PDF page 120; printed page 118]
between 0 and 1. In the case of this two-dimensional dataset, the transformation ensures all data points
are within a rectangle bounded by 0 and 1 on both axes. Lastly, the Normalizer scales the data differently:
it adjusts each data point so that the length of its feature vector (its Euclidean norm) equals 1. This
normalization essentially projects the data points onto a unit circle (or sphere in higher dimensions), with
each point scaled by the inverse of its length. This technique is typically used when only the direction (or
angle) of the data matters, rather than its magnitude.

Applying Data Transformations

After reviewing the different types of transformations, let's apply them using scikit-learn. We'll use the
cancer dataset from Chapter 2 for this demonstration. Preprocessing steps like scaling are generally
performed before applying a supervised machine learning algorithm. For instance, if we want to use a
kernel SVM (SVC) on the cancer dataset, we might first apply the MinMaxScaler to preprocess the data.
To do this, we would start by loading the dataset and splitting it into training and test sets. This separation
is important because it allows us to assess the performance of the supervised model on unseen data
after completing the preprocessing steps.




                                                                                                          118

[PDF page 121; printed page 119]
The transformed data has the same shape as the original data—the features are simply shifted and
scaled. You can see that all of the features are now between 0 and 1, as desired. To apply the SVM to the
scaled data, we also need to transform the test set. This is again done by calling the transform method,
this time on X_test:




The transformed data has the same shape as the original data—the features are simply shifted and
scaled. You can see that all of the features are now between 0 and 1, as desired. To apply the SVM to the
scaled data, we also need to transform the test set. This is again done by calling the transform method,
this time on X_test:




Maybe somewhat surprisingly, you can see that for the test set, after scaling, the mini- mum and
maximum are not 0 and 1. Some of the features are even outside the 0–1 range! The explanation is that
the MinMaxScaler (and all the other scalers) always applies exactly the same transformation to the
training and the test set. This means the transform method always subtracts the training set minimum


                                                                                                     119

[PDF page 122; printed page 120]
and divides by the training set range, which might be different from the minimum and range for the test
set. Scaling Training and Test Data the Same Way It is important to apply exactly the same transformation
to the training set and the test set for the supervised model to work on the test set. The following
example illustrates what would happen if we were to use the minimum and range of the test set instead:




The first panel is an unscaled two-dimensional dataset, with the training set shown as circles and the test
set shown as triangles. The second panel is the same data but scaled using the MinMaxScaler. Here, we


                                                                                                       120

[PDF page 123; printed page 121]
called fit on the training set, and then called transform on the training and test sets. You can see that the
dataset in the second panel looks identical to the first; only the ticks on the axes have changed. Now all
the features are between 0 and 1. You can also see that the minimum and maximum feature values for
the test data (the triangles) are not 0 and 1. The third panel shows what would happen if we scaled the
training set and test set separately. In this case, the minimum and maximum feature values for both the
training and the test set are 0 and 1. But now the dataset looks different. The test points moved
incongruously to the training set, as they were scaled differently. We changed the arrangement of the
data in an arbitrary way. Clearly this is not what we want to do. As another way to think about this,
imagine your test set is a single point. There is no way to scale a single point correctly, to fulfill the
minimum and maximum requirements of the MinMaxScaler. But the size of your test set should not
change your processing.

The Effect of Preprocessing on Supervised Learning Now let’s go back to the cancer dataset and see the
effect of using the MinMaxScaler on learning the SVC (this is a different way of doing the same scaling
we did in Chapter 2). First, let’s fit the SVC on the original data again for comparison:




As we saw before, the effect of scaling the data is quite significant. Even though scaling the data doesn’t
involve any complicated math, it is good practice to use the scaling mechanisms provided by scikit-learn
instead of reimplementing them yourself, as it’s easy to make mistakes even in these simple
computations. You can also easily replace one preprocessing algorithm with another by changing the

                                                                                                         121

[PDF page 124; printed page 122]
class you use, as all of the preprocessing classes have the same interface, consisting of the fit and
transform methods:




Non-Negative Matrix Factorization (NMF)

Non-negative matrix factorization is another unsupervised learning algorithm that aims to extract useful
features. It works similarly to PCA and can also be used for dimensionality reduction. As in PCA, we are
trying to write each data point as a weighted sum of some components. But whereas in PCA we wanted
components that were orthogonal and that explained as much variance of the data as possible, in NMF,
we want the components and the coefficients to be non-negative; that is, we want both the components
and the coefficients to be greater than or equal to zero. Consequently, this method can only be applied
to data where each feature is non-negative, as a non-negative sum of non-negative components cannot
become negative.

The process of decomposing data into a non-negative weighted sum is particularly helpful for data that
is created as the addition (or overlay) of several independent sources, such as an audio track of multiple
people speaking, or music with many instruments. In these situations, NMF can identify the original
components that make up the combined data. Overall, NMF leads to more interpretable components
than PCA, as negative components and coefficients can lead to hard-to-interpret cancellation effects. The
eigenfaces, for example, contain both positive and negative parts, and as we mentioned in the
description of PCA, the sign is arbitrary. Before we apply NMF to the face dataset, let’s briefly revisit the
synthetic data.

Applying NMF to synthetic data In contrast to when using PCA, we need to ensure that our data is positive
for NMF to be able to operate on the data. This means where the data lies relative to the origin (0, 0)
matters for NMF. Therefore, you can think of the non-negative components that are extracted as

                                                                                                         122

[PDF page 125; printed page 123]
directions from (0, 0) toward the data. The following example shows the results of NMF on the two-
dimensional toy data:




For NMF with two components, as shown on the left, it is clear that all points in the data can be written
as a positive combination of the two components. If there are enough components to perfectly
reconstruct the data (as many components as there are features), the algorithm will choose directions
that point toward the extremes of the data.

If we only use a single component, NMF creates a component that points toward the mean, as pointing
there best explains the data. You can see that in contrast with PCA, reducing the number of components
not only removes some directions, but creates an entirely different set of components! Components in
NMF are also not ordered in any specific way, so there is no “first non-negative component”: all
components play an equal part.

NMF uses a random initialization, which might lead to different results depending on the random seed.
In relatively simple cases such as the synthetic data with two com- ponents, where all the data can be
explained perfectly, the randomness has little effect (though it might change the order or scale of the
components). In more complex sit- uations, there might be more drastic changes. Applying NMF to face
images Now, let’s apply NMF to the Labeled Faces in the Wild dataset we used earlier. The main
parameter of NMF is how many components we want to extract. Usually this is lower than the number
of input features (otherwise, the data could be explained by making each pixel a separate component).



                                                                                                     123

[PDF page 126; printed page 124]
First, let’s inspect how the number of components impacts how well the data can be reconstructed using
NMF:




                                                                                                  124

[PDF page 127; printed page 125]
The quality of the back-transformed data is similar to when using PCA, but slightly worse. This is expected,
as PCA finds the optimum directions in terms of reconstruction. NMF is usually not used for its ability to
reconstruct or encode data, but rather for finding interesting patterns within the data. As a first look into
the data, let’s try extracting only a few components (say, 15).




                                                                                                         125

[PDF page 128; printed page 126]
These components are all positive, and so resemble prototypes of faces much more so than the
components shown for PCA. For example, one can clearly see that component 3 shows a face rotated
somewhat to the right, while component 7 shows a face somewhat rotated to the left. Let’s look at the
images for which these components are particularly strong:




                                                                                                 126

[PDF page 129; printed page 127]
As expected, faces that have a high coefficient for component 3 are faces looking to the right, while faces
with a high coefficient for component 7 are looking to the left. As mentioned earlier, extracting patterns
like these works best for data with additive structure, including audio, gene expression, and text data.
Let’s walk through one example on synthetic data to see what this might look like. Let’s say we are
interested in a signal that is a combination of three different sources:




                                                                                                       127

[PDF page 130; printed page 128]
Manifold Learning with t-SNE While PCA is often a good first approach for transforming your data so that
you might be able to visualize it using a scatter plot, the nature of the method (applying a rotation and
then dropping directions) limits its usefulness, as we saw with the scatter plot of the Labeled Faces in the
Wild dataset. There is a class of algorithms for visuali- zation called manifold learning algorithms that
allow for much more complex map- pings, and often provide better visualizations. A particularly useful
one is the t-SNE algorithm.

Dimensionality Reduction, Feature Extraction, and Manifold Learning

Not to be confused with the much larger MNIST dataset. Manifold learning algorithms are mainly aimed
at visualization, and so are rarely used to generate more than two new features. Some of them, including
t-SNE, com- pute a new representation of the training data, but don’t allow transformations of new data.
This means these algorithms cannot be applied to a test set: rather, they can only transform the data
they were trained for. Manifold learning can be useful for explora- tory data analysis, but is rarely used if
the final goal is supervised learning. The idea behind t-SNE is to find a two-dimensional representation
of the data that preserves the distances between points as best as possible. t-SNE starts with a random
two-dimensional representation for each data point, and then tries to make points that are close in the
original feature space closer, and points that are far apart in the original feature space farther apart. t-
SNE puts more emphasis on points that are close by, rather than preserving distances between far-apart
points. In other words, it tries to preserve the information indicating which points are neighbors to each
other. We will apply the t-SNE manifold learning algorithm on a dataset of handwritten dig- its that is
included in scikit-learn. 2 Each data point in this dataset is an 8×8 gray- scale image of a handwritten digit
between 0 and 1. Figure below shows an example image for each class:




                                                                                                         128

[PDF page 131; printed page 129]
129

[PDF page 132; printed page 130]
Let’s apply t-SNE to the same dataset, and compare the results. As t-SNE does not support transforming
new data, the TSNE class has no transform method. Instead, we can call the fit_transform method, which
will build the model and immediately return the transformed data:




                                                                                                  130

[PDF page 133; printed page 131]
The result of t-SNE is quite remarkable. All the classes are quite clearly separated. The ones and nines
are somewhat split up, but most of the classes form a single dense group. Keep in mind that this method
has no knowledge of the class labels: it is com- pletely unsupervised. Still, it can find a representation of
the data in two dimensions that clearly separates the classes, based solely on how close points are in the
original space. The t-SNE algorithm has some tuning parameters, though it often works well with the
default settings. You can try playing with perplexity and early_exaggeration, but the effects are usually
minor.

Clustering

As we described earlier, clustering is the task of partitioning the dataset into groups, called clusters. The
goal is to split up the data in such a way that points within a single cluster are very similar and points in
different clusters are different. Similarly to clas- sification algorithms, clustering algorithms assign (or
predict) a number to each data point, indicating which cluster a particular point belongs to.




                                                                                                         131

[PDF page 134; printed page 132]
k-Means Clustering k-means clustering is one of the simplest and most commonly used clustering algo-
rithms. It tries to find cluster centers that are representative of certain regions of the data. The algorithm
alternates between two steps: assigning each data point to the closest cluster center, and then setting
each cluster center as the mean of the data points that are assigned to it. The algorithm is finished when
the assignment of instances to clusters no longer changes. The following example illustrates the
algorithm on a synthetic dataset:




Cluster centers are shown as triangles, while data points are shown as circles. Colors indicate cluster
membership. We specified that we are looking for three clusters, so the algorithm was initialized by
declaring three data points randomly as cluster centers (see “Initialization”). Then the iterative algorithm
starts. First, each data point is assigned to the cluster center it is closest to (see “Assign Points (1)”). Next,
the cluster centers are updated to be the mean of the assigned points (see “Recompute Centers (1)”).
Then the process is repeated two more times. After the third iteration, the assignment of points to cluster
centers remained unchanged, so the algorithm stops. Given new data points, k-means will assign each to
the closest cluster center. The next example shows the boundaries of the cluster centers:




                                                                                                             132

[PDF page 135; printed page 133]
Applying k-means with scikit-learn is quite straightforward. Here, we apply it to the synthetic data that
we used for the preceding plots. We instantiate the KMeans class, and set the number of clusters we are
looking for. Then we call the fit method with the data:




During the algorithm, each training data point in X is assigned a cluster label. You can find these labels in
the kmeans.labels_ attribute:




You can see that clustering is somewhat similar to classification, in that each item gets a label. However,
there is no ground truth, and consequently the labels themselves have no a priori meaning. Let’s go back
to the example of clustering face images that we discussed before. It might be that the cluster 3 found
by the algorithm contains only faces of your friend Bela. You can only know that after you look at the
pictures, though, and the number 3 is arbitrary. The only information the algorithm gives you is that all
faces labeled as 3 are similar. For the clustering we just computed on the two-dimensional toy dataset,
that means that we should not assign any significance to the fact that one group was labeled 0 and


                                                                                                         133

[PDF page 136; printed page 134]
another one was labeled 1. Running the algorithm again might result in a differ- ent numbering of clusters
because of the random nature of the initialization. Here is a plot of this data again. The cluster centers
are stored in the cluster_centers_ attribute, and we plot them as triangles:




We can also use more or fewer cluster centers




Failure cases of k-means

Even if you know the “right” number of clusters for a given dataset, k-means might not always be able to
recover them. Each cluster is defined solely by its center, which means that each cluster is a convex shape.

                                                                                                        134

[PDF page 137; printed page 135]
As a result of this, k-means can only cap- ture relatively simple shapes. k-means also assumes that all
clusters have the same “diameter” in some sense; it always draws the boundary between clusters to be
exactly in the middle between the cluster centers. That can sometimes lead to surprising results:




One might have expected the dense region in the lower left to be the first cluster, the dense region in the
upper right to be the second, and the less dense region in the cen- ter to be the third. Instead, both
cluster 0 and cluster 1 have some points that are far away from all the other points in these clusters that
“reach” toward the center. k-means also assumes that all directions are equally important for each
cluster. The following plot shows a two-dimensional dataset where there are three clearly separated
parts in the data. However, these groups are stretched toward the diagonal. As k-means only considers
the distance to the nearest cluster center, it can’t handle this kind of data:




                                                                                                       135

[PDF page 138; printed page 136]
k-means also performs poorly if the clusters have more complex shapes:




                                                                         136

[PDF page 139; printed page 137]
Vector quantization, or seeing k-means as decomposition Even though k-means is a clustering algorithm,
there are interesting parallels between k-means and the decomposition methods like PCA and NMF that
we discussed ear- lier. You might remember that PCA tries to find directions of maximum variance in the
data, while NMF tries to find additive components, which often correspond to “extremes” or “parts” of
the data. Both methods tried to express the data points as a sum over some components. k-means, on
the other hand, tries to rep- resent each data point using a cluster center. You can think of that as each
point being represented using only a single component, which is given by the cluster center. This view of
k-means as a decomposition method, where each point is represented using a single component, is called
vector quantization.

Let’s do a side-by-side comparison of PCA, NMF, and k-means, showing the components extracted, as
well as reconstructions of faces from the test set using 100 components. For k-means, the reconstruction
is the closest cluster center found on the training set:




                                                                                                      137

[PDF page 140; printed page 138]
An interesting aspect of vector quantization using k-means is that we can use many more clusters than
input dimensions to encode our data. Let’s go back to the two_moons data. Using PCA or NMF, there is
nothing much we can do to this data, as it lives in only two dimensions. Reducing it to one dimension
with PCA or NMF would completely destroy the structure of the data. But we can find a more expressive
representation with k-means, by using more cluster centers:




                                                                                                 138

[PDF page 141; printed page 139]
We used 10 cluster centers, which means each point is now assigned a number between 0 and 9. We can
see this as the data being represented using 10 components (that is, we have 10 new features), with all
features being 0, apart from the one that represents the cluster center the point is assigned to. Using
this 10-dimensional repre- sentation, it would now be possible to separate the two half-moon shapes
using a lin- ear model, which would not have been possible using the original two features. It is also
possible to get an even more expressive representation of the data by using the distances to each of the
cluster centers as features. This can be accomplished using the transform method of kmeans:




K-means is a widely used clustering algorithm, favored for its simplicity, ease of implementation, and fast
execution. It scales well to large datasets, and scikit-learn offers an even more scalable version called
MiniBatchKMeans, which is capable of handling very large datasets. However, one limitation of k-means


                                                                                                       139

[PDF page 142; printed page 140]
is that it depends on a random initialization, meaning the results can vary depending on the random
seed. To address this, scikit-learn runs the algorithm 10 times with different random initializations and
selects the best outcome. Other drawbacks include the algorithm's restrictive assumptions about cluster
shapes and the need to specify the number of clusters beforehand, which may not always be known in
real-world scenarios.

Agglomerative clustering encompasses a group of algorithms that follow similar principles: the algorithm
begins by treating each data point as its own cluster, then iteratively merges the two most similar clusters
until a predefined stopping condition is met. In scikit-learn, this stopping condition is set by the desired
number of clusters, and clusters are merged until that number is reached. The similarity between clusters
is measured using different linkage criteria, each defining how to evaluate the proximity between two
clusters.

Scikit-learn offers three linkage methods:

    •   Ward: The default option, Ward merges clusters in such a way that the increase in the overall
        variance within all clusters is minimized. This typically results in clusters of similar size.

    •   Average: This method merges clusters with the smallest average distance between all points in
        the two clusters.

    •   Complete: Also known as maximum linkage, this criterion merges clusters based on the smallest
        maximum distance between any two points in the clusters.

Ward is suitable for most datasets, and will be used in the examples here. However, if the clusters have
significantly different sizes, such as when one cluster is much larger than the others, average or complete
linkage may produce better results.

The following plot demonstrates the process of agglomerative clustering applied to a two-dimensional
dataset, where the goal is to identify three clusters.




                                                                                                         140

[PDF page 143; printed page 141]
Initially, each point is its own cluster. Then, in each step, the two clusters that are closest are merged. In
the first four steps, two single-point clusters are picked and these are joined into two-point clusters. In
step 5, one of the two-point clusters is extended to a third point, and so on. In step 9, there are only
three clusters remain- ing. As we specified that we are looking for three clusters, the algorithm then
stops. Let’s have a look at how agglomerative clustering performs on the simple threecluster data we
used here. Because of the way the algorithm works, agglomerative clustering cannot make predictions
for new data points. Therefore, Agglomerative Clustering has no predict method. To build the model and
get the cluster member- ships on the training set, use the fit_predict method instead.




                                                                                                         141

[PDF page 144; printed page 142]
As expected, the algorithm recovers the clustering perfectly. While the scikit-learn implementation of
agglomerative clustering requires you to specify the number of clusters you want the algorithm to find,
agglomerative clustering methods provide some help with choosing the right number, which we will
discuss next.

Hierarchical clustering and dendrograms

Agglomerative clustering produces what is known as a hierarchical clustering. The clustering proceeds
iteratively, and every point makes a journey from being a single point cluster to belonging to some final
cluster. Each intermediate step provides a clustering of the data (with a different number of clusters). It
is sometimes helpful to look at all possible clusterings jointly. The next example shows an overlay of all
the possible clusterings shown before, providing some insight into how each cluster breaks up into
smaller clusters:




While this visualization provides a very detailed view of the hierarchical clustering, it relies on the two-
dimensional nature of the data and therefore cannot be used on datasets that have more than two
features. There is, however, another tool to visualize hierarchical clustering, called a dendrogram, that
can handle multidimensional datasets.

Unfortunately, scikit-learn currently does not have the functionality to draw dendrograms. However, you
can generate them easily using SciPy. The SciPy clustering algorithms have a slightly different interface to
the scikit-learn clustering algorithms. SciPy provides a function that takes a data array X and computes a
linkage array, which encodes hierarchical cluster similarities. We can then feed this linkage array into the
scipy dendrogram function to plot the dendrogram:

                                                                                                        142

[PDF page 145; printed page 143]
The dendrogram illustrates the data points as numbered from 0 to 11 at the bottom. A tree structure is
then created with these points, each representing individual clusters, and new parent nodes are added
as pairs of clusters are merged. Starting from the bottom and moving upward, the first merger involves
points 1 and 4. Next, points 6 and 9 form a cluster, and this merging continues. At the top level, there are
two main branches: one includes points 11, 0, 5, 10, 7, 6, and 9, while the other consists of points 1, 4,
3, 2, and 8. These two branches represent the two largest clusters on the left side of the plot.

DBSCAN (Density-Based Spatial Clustering of Applications with Noise) is another powerful clustering
algorithm. Its key advantages are that it does not require specifying the number of clusters beforehand,
it can identify clusters with complex shapes, and it can detect outliers or points that don't belong to any
cluster. Although DBSCAN is slower than both agglomerative clustering and k-means, it can still handle
relatively large datasets.

DBSCAN operates by identifying dense regions in the feature space, where many data points are located
close to each other. These dense regions are considered potential clusters, separated by areas that are
relatively sparse. Points within a dense region are termed core samples (or core points). Two key

                                                                                                        143

[PDF page 146; printed page 144]
parameters control DBSCAN: min_samples and eps. If there are at least min_samples points within a
distance of eps from a given point, it is labeled as a core sample.

The algorithm starts by selecting an arbitrary point and finds all points within a distance of eps. If fewer
than min_samples points are found within this radius, the point is marked as noise, meaning it does not
belong to any cluster. If more than min_samples points are within eps, the point is labeled as a core
sample and assigned to a new cluster. The algorithm then visits all neighboring points within eps. If those
neighbors haven't been assigned a cluster, they are given the same cluster label. If any of the neighbors
are core samples, their neighbors are recursively visited, and the cluster grows until there are no more
core samples within eps. The process repeats with an unvisited point, and the algorithm continues until
all points have been processed.

In the end, there are three kinds of points: core points, points that are within distance eps of core points
(called boundary points), and noise. When the DBSCAN algorithm is run on a particular dataset multiple
times, the clustering of the core points is always the same, and the same points will always be labeled as
noise. However, a boundary point might be neighbor to core samples of more than one cluster. Therefore,
the cluster membership of boundary points depends on the order in which points are vis- ited. Usually
there are only few boundary points, and this slight dependence on the order of points is not important.
Let’s apply DBSCAN on the synthetic dataset we used to demonstrate agglomerative clustering. Like
agglomerative clustering, DBSCAN does not allow predictions on new test data, so we will use the
fit_predict method to perform clustering and return the cluster labels in one step:




As you can see, all data points were assigned the label -1, which stands for noise. This is a consequence
of the default parameter settings for eps and min_samples, which are not tuned for small toy datasets.
The cluster assignments for different values of min_samples and eps are shown below, and visualized:




                                                                                                        144

[PDF page 147; printed page 145]
In this plot, points belonging to clusters are represented by solid markers, while noise points are shown
in white. Core samples are indicated by larger markers, and boundary points are represented by smaller
ones. As eps increases (moving from left to right in the figure), the clusters expand to include more
points, but this may also lead to the merging of distinct clusters into one. Conversely,
increasing min_samples (moving from top to bottom) results in fewer points being classified as core
samples, and more points being labeled as noise.

The eps parameter is typically more influential, as it sets the proximity threshold for points to be
considered as part of the same cluster. If eps is too small, no points may qualify as core samples, and all
points could be labeled as noise. On the other hand, if eps is too large, all points may end up in a single
cluster.


                                                                                                       145

[PDF page 148; printed page 146]
The min_samples parameter mainly impacts whether points in less dense areas are treated as outliers or
included in their own clusters. Lowering min_samples causes smaller groups to be labeled as noise. For
instance, when min_samples is set to 3, three clusters are formed: one with four points, one with five
points, and one with three points. However, when min_samples is increased to 5, the smaller clusters
(with three and four points) are considered noise, leaving only the cluster with five points.

Although DBSCAN does not require specifying the number of clusters directly, adjusting eps affects the
number of clusters identified. Finding the optimal eps value can be easier when the data is scaled using
methods like StandardScaler or MinMaxScaler, as these techniques ensure that all features are on a
similar scale. The outcome of running DBSCAN on the two_moons dataset is shown here, where the
algorithm successfully identifies the two half-circles and separates them using the given settings.




Comparing and Evaluating Clustering Algorithms

One of the challenges in applying clustering algorithms is that it is very hard to assess how well an
algorithm worked, and to compare outcomes between different algo- rithms. After talking about the
algorithms behind k-means, agglomerative clustering, and DBSCAN, we will now compare them on some
real-world datasets.

Evaluating clustering with ground truth

                                                                                                      146

[PDF page 149; printed page 147]
There are metrics that can be used to assess the outcome of a clustering algorithm relative to a ground
truth clustering, the most important ones being the adjusted rand index (ARI) and normalized mutual
information (NMI), which both provide a quanti- tative measure between 0 and 1. Here, we compare the
k-means, agglomerative clustering, and DBSCAN algorithms using ARI. We also include what it looks like
when we randomly assign points to two clusters for comparison:




The adjusted rand index provides intuitive results, with a random cluster assignment having a score of 0
and DBSCAN (which recovers the desired clustering perfectly) having a score of 1.

A common mistake when evaluating clustering in this way is to use accuracy_score instead of
adjusted_rand_score, normalized_mutual_info_score, or some other clustering metric. The problem in
using accuracy is that it requires the assigned clus- ter labels to exactly match the ground truth. However,
the cluster labels themselves are meaningless—the only thing that matters is which points are in the
same cluster:




                                                                                                        147

[PDF page 150; printed page 148]
Evaluating clustering without ground truth Although we have just shown one way to evaluate clustering
algorithms, in practice, there is a big problem with using measures like ARI. When applying clustering
algo- rithms, there is usually no ground truth to which to compare the results. If we knew the right
clustering of the data, we could use this information to build a supervised model like a classifier.
Therefore, using metrics like ARI and NMI usually only helps in developing algorithms, not in assessing
success in an application. There are scoring metrics for clustering that don’t require ground truth, like
the sil- houette coefficient. However, these often don’t work well in practice. The silhouette score
computes the compactness of a cluster, where higher is better, with a perfect score of 1. While compact
clusters are good, compactness doesn’t allow for complex shapes. Here is an example comparing the
outcome of k-means, agglomerative clustering, and DBSCAN on the two-moons dataset using the
silhouette score:




                                                                                                     148

[PDF page 151; printed page 149]
As observed, k-means achieves the highest silhouette score, even though we may prefer the results
produced by DBSCAN. A more effective approach for evaluating clusters is to use robustness-based
clustering metrics. These metrics involve running an algorithm after adding noise to the data or using
different parameter settings and comparing the results. The idea is that if many algorithm configurations
and variations in the data produce the same outcome, the result is likely reliable. Unfortunately, this
approach is not available in scikit-learn as of this writing.

Even with a very robust clustering or a high silhouette score, we still cannot determine if the clustering
has any semantic meaning or if it reflects an aspect of the data we care about. Returning to the face
image example, we might want to identify groups of similar faces, such as distinguishing between men
and women, young and old, or people with beards versus those without. Suppose we cluster the data
into two groups, and all algorithms agree on which points should be grouped together. However, we still
cannot be certain that the clusters correspond to the concepts we are interested in. The clusters could
have been formed based on factors like side views versus front views, photos taken at night versus during
the day, or pictures captured with different types of phones (iPhones versus Androids). The only way to
determine whether the clustering aligns with our interests is through manual analysis of the clusters.

Comparing algorithms on the faces dataset Let’s apply the k-means, DBSCAN, and agglomerative
clustering algorithms to the Labeled Faces in the Wild dataset, and see if any of them find interesting
structure. We will use the eigenface representation of the data, as produced by PCA(whiten=True), with
100 components:




We saw earlier that this is a more semantic representation of the face images than the raw pixels. It will
also make computation faster. A good exercise would be for you to run the following experiments on the
original data, without PCA, and see if you find similar clusters.

Analyzing the faces dataset with DBSCAN. We will start by applying DBSCAN, which we just discussed:




                                                                                                      149

[PDF page 152; printed page 150]
We see that all the returned labels are –1, so all of the data was labeled as “noise” by DBSCAN. There are
two things we can change to help this: we can make eps higher, to expand the neighborhood of each
point, and set min_samples lower, to consider smaller groups of points as clusters. Let’s try changing
min_samples first:




Even when considering groups of three points, everything is labeled as noise. So, we need to increase
eps:




Using a much larger eps of 15, we get only a single cluster and noise points. We can use this result to find
out what the “noise” looks like compared to the rest of the data. To understand better what’s happening,
let’s look at how many points are noise, and how many points are inside the cluster:




Comparing these images to the random sample of face images, we can guess why they were labeled as
noise: the fifth image in the first row shows a per- son drinking from a glass, there are images of people
wearing hats, and in the last image there’s a hand in front of the person’s face. The other images contain


                                                                                                        150

[PDF page 153; printed page 151]
odd angles or crops that are too close or too wide. This kind of analysis—trying to find “the odd one
out”—is called outlier detection. If this was a real application, we might try to do a better job of cropping
images, to get more homogeneous data. There is little we can do about people in photos sometimes
wearing hats, drinking, or holding something in front of their faces, but it’s good to know that these are
issues in the data that any algorithm we might apply needs to handle. If we want to find more interesting
clusters than just one large one, we need to set eps smaller, somewhere between 15 and 0.5 (the default).
Let’s have a look at what different values of eps result in:




For low settings of eps, all points are labeled as noise. For eps=7, we get many noise points and many
smaller clusters. For eps=9 we still get many noise points, but we get one big cluster and some smaller
clusters. Starting from eps=11, we get only one large cluster and noise. What is interesting to note is that
there is never more than one large cluster. At most, there is one large cluster containing most of the
points, and some smaller clusters. This indicates that there are not two or three different kinds of face
images in the data that are very distinct, but rather that all images are more or less equally similar to (or
dissimilar from) the rest. The results for eps=7 look most interesting, with many small clusters. We can
investigate this clustering in more detail by visualizing all of the points in each of the 13 small clusters:




                                                                                                          151

[PDF page 154; printed page 152]
Some of the clusters correspond to people with very distinct faces (within this dataset), such as Sharon
or Koizumi. Within each cluster, the orientation of the face is also quite fixed, as well as the facial
expression. Some of the clusters contain faces of multiple people, but they share a similar orientation
and expression. This concludes our analysis of the DBSCAN algorithm applied to the faces dataset. As you
can see, we are doing a manual analysis here, different from the much more automatic search approach
we could use for supervised learning based on R 2 score or accuracy. Let’s move on to applying k-means
and agglomerative clustering. Analyzing the faces dataset with k-means. We saw that it was not possible
to create more than one big cluster using DBSCAN. Agglomerative clustering and k-means are much more
likely to create clusters of even size, but we do need to set a target number of clusters. We could set the
number of clusters to the known number of people in the dataset, though it is very unlikely that an

                                                                                                       152

[PDF page 155; printed page 153]
unsupervised clustering algorithm will recover them. Instead, we can start with a low number of clusters,
like 10, which might allow us to analyze each of the clusters:




As you can see, k-means clustering partitioned the data into relatively similarly sized clusters from 64 to
386. This is quite different from the result of DBSCAN. We can further analyze the outcome of k-means
by visualizing the cluster centers. As we clustered in the representation produced by PCA, we need to
rotate the cluster centers back into the original space to visualize them, using pca.inverse_transform:




The cluster centers found by k-means are very smooth versions of faces. This is not very surprising, given
that each center is an average of 64 to 386 face images. Working with a reduced PCA representation adds
to the smoothness of the images (compared to the faces reconstructed using 100 PCA dimensions). The
clustering seems to pick up on different orientations of the face, different expressions (the third cluster
center seems to show a smiling face), and the presence of shirt collars (see the second-to-last cluster
center). For a more detailed view, we show for each cluster center the five most typical images in the
cluster (the images assigned to the cluster that are closest to the cluster center) and the five most atypical
images in the cluster (the images assigned to the cluster that are furthest from the cluster center):




                                                                                                         153

[PDF page 156; printed page 154]
154

[PDF page 157; printed page 155]
Analyzing the faces dataset with agglomerative clustering. Now, let’s look at the results of agglomerative
clustering:




Agglomerative clustering also produces relatively equally sized clusters, with cluster sizes between 26
and 623. These are more uneven than those produced by k-means, but much more even than the ones
produced by DBSCAN. We can compute the ARI to measure whether the two partitions of the data given
by agglomerative clustering and k-means are similar:



                                                                                                      155

[PDF page 158; printed page 156]
An ARI of only 0.13 means that the two clusterings labels_agg and labels_km have little in common. This
is not very surprising, given the fact that points further away from the cluster centers seem to have little
in common for k-means. Next, we might want to plot the dendrogram. We’ll limit the depth of the tree
in the plot, as branching down to the individual 2,063 data points would result in an unreadably dense
plot:




Creating 10 clusters, we cut across the tree at the very top, where there are 10 vertical lines. In the
dendrogram for the toy data, you could see by the length of the branches that two or three clusters might
capture the data appropriately. For the faces data, there doesn’t seem to be a very natural cutoff point.
There are some branches that represent more distinct groups, but there doesn’t appear to be a particular
number of clusters that is a good fit. This is not surprising, given the results of DBSCAN, which tried to
cluster all points together. Let’s visualize the 10 clusters, as we did for k-means earlier. Note that there is
no notion of cluster center in agglomerative clustering (though we could compute the mean), and we
simply show the first couple of points in each cluster. We show the number of points in each cluster to
the left of the first image:




                                                                                                          156

[PDF page 159; printed page 157]
While some of the clusters seem to have a semantic theme, many of them are too large to be actually
homogeneous. To get more homogeneous clusters, we can run the algorithm again, this time with 40
clusters, and pick out some of the clusters that are particularly interesting:




                                                                                               157

[PDF page 160; printed page 158]
Summary of Clustering Methods

This section highlighted the fact that clustering is a largely qualitative process, often most useful during
the exploratory phase of data analysis. We explored three clustering algorithms: k-means, DBSCAN, and
agglomerative clustering. Each method offers a way to control the level of granularity in clustering. While
k-means and agglomerative clustering allow you to specify the number of clusters, DBSCAN lets you
define proximity using the eps parameter, which indirectly affects the cluster size. All three algorithms
are capable of handling large, real-world datasets, are relatively easy to understand, and support
clustering into multiple groups.

Each algorithm has its own unique strengths. K-means provides a way to characterize clusters by their
centers and can be seen as a decomposition method, representing each data point by its cluster's center.
DBSCAN has the advantage of detecting "noise points" that do not belong to any cluster and can

                                                                                                        158

[PDF page 161; printed page 159]
automatically determine the number of clusters. Unlike the other two methods, DBSCAN can identify
clusters with complex shapes, as demonstrated in the two_moons example. However, DBSCAN can
sometimes create clusters of vastly different sizes, which may be either a benefit or a drawback.
Agglomerative clustering, on the other hand, offers a hierarchical view of possible data partitions, which
can be easily examined using dendrograms.

Summary and Outlook

This chapter introduced various unsupervised learning algorithms useful for exploratory data analysis
and preprocessing. Having the right data representation is often key to the success of both supervised
and unsupervised learning, with preprocessing and decomposition methods playing a critical role in data
preparation.

Decomposition, manifold learning, and clustering are essential tools for understanding data, especially
when supervision information is absent. Even in supervised settings, exploratory methods are valuable
for gaining insights into the data's properties. While it can be difficult to quantify the usefulness of
unsupervised algorithms, their application can reveal valuable insights from your data. With these tools,
you are now equipped with the fundamental algorithms that machine learning practitioners use
regularly.

We encourage you to experiment with clustering and decomposition methods on both two-dimensional
toy datasets and real-world datasets available in scikit-learn, such as the digits, iris, and cancer datasets.

Here are some exercises for Chapter 3: Unsupervised Learning & Preprocessing.

Exercises:

1. Exploring Clustering Algorithms (K-Means)

   •   Task: Apply the K-Means clustering algorithm on a dataset like the Iris or Digits dataset from
       scikit-learn.

   •   Steps:

             1. Load the dataset and visualize the data (e.g., using PCA for dimensionality reduction to 2D
                or 3D).

                                                                                                          159

[PDF page 162; printed page 160]
           2. Use K-Means clustering to group the data into clusters.

           3. Evaluate the performance by comparing the true labels with the predicted clusters (if
                available), or use metrics such as silhouette score or Davies-Bouldin index.

           4. Vary the number of clusters (k) and observe how the clustering performance changes.

2. Hierarchical Clustering

   •   Task: Implement hierarchical clustering using the Iris dataset.

   •   Steps:

           1. Apply Agglomerative Clustering to group the data.

           2. Visualize the hierarchical structure using a dendrogram.

           3. Determine the optimal number of clusters by cutting the dendrogram at a certain
                threshold.

           4. Compare the results to K-Means clustering, and discuss the advantages and disadvantages
                of both methods.

3. DBSCAN for Clustering

   •   Task:      Apply      the      DBSCAN       algorithm     to      a     dataset      with   noise
       (e.g., make_blobs or two_moons dataset).

   •   Steps:

           1. Generate a dataset with clusters and noise.

           2. Apply DBSCAN and experiment with different values of eps (the maximum distance
                between points to be considered as neighbors) and min_samples (the minimum number
                of points to form a cluster).

           3. Visualize the results and identify the number of clusters and noise points.




                                                                                                    160

[PDF page 163; printed page 161]
           4. Compare DBSCAN's results with K-Means, noting how DBSCAN handles noise and
                irregular-shaped clusters.

4. Dimensionality Reduction with PCA

   •   Task: Use Principal Component Analysis (PCA) to reduce the dimensionality of a dataset
       (e.g., Wine or Digits dataset).

   •   Steps:

           1. Apply PCA to reduce the dataset to two or three components.

           2. Visualize the data in the reduced space (2D or 3D plot).

           3. Discuss how much variance is captured by the first few principal components
                (use explained_variance_ratio_).

           4. Compare the performance of K-Means clustering on the reduced dataset versus the
                original high-dimensional dataset.

5. Data Preprocessing: Scaling and Normalization

   •   Task: Preprocess a dataset by scaling and normalizing features before applying an unsupervised
       learning algorithm.

   •   Steps:

           1. Load a dataset (e.g., Breast Cancer, Diabetes dataset, or California Housing).

           2. Apply scaling (e.g., StandardScaler or MinMaxScaler).

           3. Apply normalization (e.g., using Normalizer or RobustScaler).

           4. Perform clustering (e.g., K-Means) on the original dataset and the preprocessed dataset.

           5. Evaluate and compare the clustering results. Discuss the impact of scaling and
                normalization on clustering performance.

6. Using t-SNE for Visualization


                                                                                                   161

[PDF page 164; printed page 162]
   •   Task: Apply t-SNE (t-distributed Stochastic Neighbor Embedding) to visualize high-dimensional
       data in two or three dimensions.

   •   Steps:

          1. Load a high-dimensional dataset (e.g., Digits or Iris dataset).

          2. Apply t-SNE to reduce the dimensionality to two dimensions.

          3. Visualize the result and color the points according to their true labels.

          4. Discuss how t-SNE preserves the local structure of the data and helps visualize complex
                high-dimensional relationships.

7. Clustering with Feature Engineering

   •   Task: Apply feature engineering techniques to improve clustering results.

   •   Steps:

          1. Load the Iris dataset or any other dataset.

          2. Create new features (e.g., interaction terms, polynomial features, or domain-specific
                features).

          3. Apply a clustering algorithm (e.g., K-Means) to the newly engineered features.

          4. Compare the results with clustering on the original features and discuss how feature
                engineering impacted the clustering.

8. Anomaly Detection Using Isolation Forest

   •   Task: Use the Isolation Forest algorithm for anomaly detection.

   •   Steps:

          1. Generate a synthetic dataset with outliers (use make_blobs with added noise or another
                anomaly-detection dataset).

          2. Apply Isolation Forest to detect outliers.

                                                                                                  162

[PDF page 165; printed page 163]
          3. Visualize the results and evaluate the performance by checking how well the algorithm
                identifies the anomalies.

          4. Discuss the advantages and disadvantages of Isolation Forest compared to other anomaly
                detection techniques like One-Class SVM or DBSCAN.

9. K-Means Clustering with Elbow Method

   •   Task: Use the Elbow method to determine the optimal number of clusters for K-Means.

   •   Steps:

          1. Choose a dataset (e.g., Iris or Wine).

          2. Apply K-Means clustering for a range of k values (e.g., from 1 to 10).

          3. Plot the sum of squared distances (inertia) versus k and identify the "elbow" point.

          4. Discuss the results and explain how the elbow method helps in determining the number
                of clusters.

10. Gaussian Mixture Model (GMM) for Clustering

   •   Task: Apply a Gaussian Mixture Model (GMM) to a dataset and compare it with K-Means.

   •   Steps:

          1. Use a dataset with known clusters (e.g., Iris or Digits).

          2. Apply GMM to perform soft clustering.

          3. Compare the results of GMM with K-Means clustering (e.g., comparing cluster
                assignments, silhouette score).

          4. Discuss how GMM differs from K-Means in terms of flexibility and the assumptions it
                makes about the data.

Conceptual Questions:

   1. Clustering Algorithms

                                                                                                    163

[PDF page 166; printed page 164]
      •   What is the difference between K-Means clustering and DBSCAN? When would you use
          one over the other?

      •   Explain how hierarchical clustering works. What are the advantages and disadvantages of
          using this method over K-Means or DBSCAN?

      •   How does DBSCAN handle noise and outliers differently from K-Means?

2. Dimensionality Reduction

      •   Why is dimensionality reduction important in unsupervised learning? How does PCA help
          in improving the performance of machine learning models?

      •   What are the limitations of PCA, and how does it compare with t-SNE for visualizing high-
          dimensional data?

3. Feature Engineering

      •   What is feature scaling, and why is it important when applying clustering algorithms?

      •   Discuss the role of feature selection and dimensionality reduction techniques in
          unsupervised learning.

4. Anomaly Detection

      •   What is anomaly detection, and how can algorithms like Isolation Forest or One-Class SVM
          be used for this purpose?

      •   How does anomaly detection relate to unsupervised learning, and what types of
          applications would benefit from these methods?

5. Evaluation Metrics for Unsupervised Learning

      •   How do you evaluate clustering algorithms like K-Means or DBSCAN when you don't have
          ground truth labels?

      •   Explain the concepts of silhouette score, Davies-Bouldin index, and inertia, and how they
          are used to evaluate clustering results.


                                                                                                  164

[PDF page 167; printed page 165]
These exercises and questions will help you practice and deepen your understanding of unsupervised
learning techniques, data preprocessing, and clustering algorithms




                                                                                                165

[PDF page 168; printed page 206]
References

   Grus, J. (2019) Data Science from Scratch: First Principles with Python. 2nd edn. O’Reilly Media. ISBN:
   9781492041139.




   Mueller, A.C. and Guido, S. (2017) Introduction to Machine Learning with Python. United Kingdom:
   O’Reilly Media. ISBN: 9781449369415.



   Minaee, S., Mikolov, T., Nikzad, N., Chenaghlu, M., Socher, R., Amatriain, X. and Gao, J. (2024) 'Large
   Language       Models:       A      Survey',      arXiv     preprint,      arXiv:2402.06196.         Available      at:
   https://arxiv.org/abs/2402.06196 (Accessed: 2 March 2025).




   Guo, Z., Jin, R., Liu, C., Huang, Y., Shi, D., Supryadi, Yu, L., Liu, Y., Li, J., Xiong, B. and Xiong, D. (2023)
   'Evaluating Large Language Models: A Comprehensive Survey', arXiv preprint, arXiv:2310.19736.
   Available at: https://arxiv.org/abs/2310.19736 (Accessed: 2 March 2025).



   Zhao, W.X., Zhou, K., Li, J., Tang, T., Wang, X., Hou, Y., Min, Y., Zhang, B., Zhang, J., Dong, Z., Du, Y., Yang,
   C., Chen, Y., Chen, Z., Jiang, J., Ren, R., Li, Y., Tang, X., Liu, Z., Liu, P., Nie, J.Y. and Wen, J.R. (2023) 'A Survey
   of     Large      Language        Models',       arXiv      preprint,      arXiv:2303.18223.         Available      at:
   https://arxiv.org/abs/2303.18223 (Accessed: 2 March 2025).




   Moradi, M., Yan, K., Colwell, D., Samwald, M. and Asgari, R. (2024) 'Exploring the Landscape of Large
   Language Models: Foundations, Techniques, and Challenges', arXiv preprint, arXiv:2404.11973. Available
   at: https://arxiv.org/abs/2404.11973 (Accessed: 2 March 2025).




                                                                                                                      206

[PDF page 169; printed page 207]
The IT qualification at Richfield College stands as a beacon of academic innovation and professional
readiness. It equips students with the skills and credentials necessary for thriving in the IT industry. By
combining foundational knowledge, practical expertise, and global recognition, the program not only
prepares students for immediate employment but also sets them on a trajectory for long-term career
success.




                                                                                                       207
```
