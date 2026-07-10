---
document: "Machine Learning 600 Study Guide"
source_file: "MACHINE LEARNING 600 STUDY GUIDE.pdf"
document_version: "created 2026-01-21; modified 2026-01-21"
pdf_pages: "35-44"
printed_pages: "33-42"
section: "Applications of PCA"
chapter: "Chapter Two: Data Preprocessing and Feature Engineering"
keywords:
  - "pca"
  - "feature"
  - "images"
  - "dataset"
  - "extraction"
  - "applying"
  - "two"
  - "features"
  - "scale"
  - "dimensionality"
  - "cancer"
  - "visualization"
---

# Applications of PCA

Source trace: [original PDF](../../../originals/MACHINE%20LEARNING%20600%20STUDY%20GUIDE.pdf) | PDF pages 35-44 | printed pages 33-42

Related sections: [Principal Component Analysis (PCA)](2-4-principal-component-analysis-pca.md), [Real-World Applications of Machine Learning](1-8-real-world-applications-of-machine-learning.md), [Review Questions](2-7-review-questions.md), [Chapter 2: IoT Architectures and Applications](../../big-data-iot-600-study-guide/sections/2-chapter-2-iot-architectures-and-applications.md), [Characteristics Of Big Data](../../big-data-iot-600-study-guide/sections/1-2-characteristics-of-big-data.md), [Emerging Trends in IoT Applications](../../big-data-iot-600-study-guide/sections/2-6-11-emerging-trends-in-iot-applications.md)

## Extracted Text

```text
[PDF page 35; printed page 33]
2.5 Applications of PCA
Applying PCA to the Cancer Dataset for Visualization

One of the most common applications of PCA is to visualize high-dimensional datasets. As discussed in
Chapter 1, visualizing data with more than two features can be challenging. For the Iris dataset, we could
use a pair plot (Figure 1-3 in Chapter 1) to show combinations of two features for a partial view of the
data. However, for the Breast Cancer dataset, a pair plot becomes unmanageable because it has 30
features, resulting in 420 scatter plots (30 * 14). Analyzing all of these plots in detail would be impossible.
A simpler visualization method is to create histograms for each feature, comparing the two classes:
benign and malignant cancers.

Before applying PCA, we scale the data using the StandardScaler to ensure each feature has unit
variance. Applying the PCA transformation is as straightforward as any other preprocessing step. We start
by creating a PCA object, fitting it to the data to identify the principal components, and then applying the
rotation and dimensionality reduction by calling the transform method. By default, PCA rotates (and
shifts) the data without reducing its dimensionality. To reduce the dimensionality, we must specify how
many components to retain when initializing the PCA object:




                                                                                                            33

[PDF page 36; printed page 34]
Eigenfaces for feature extraction

Another application of PCA that we mentioned earlier is feature extraction. The idea behind feature
extraction is that it is possible to find a representation of your data that is better suited to analysis than

                                                                                                            34

[PDF page 37; printed page 35]
the raw representation you were given. A great example of an application where feature extraction is
helpful is with images. Images are made up of pixels, usually stored as red, green, and blue (RGB)
intensities. Objects in images are usually made up of thousands of pixels, and only together are they
meaningful. We will give a very simple application of feature extraction on images using PCA, by working
with face images from the Labeled Faces in the Wild dataset. This dataset contains face images of
celebrities downloaded from the Internet, and it includes faces of politicians, singers, actors, and athletes
from the early 2000s. We use gray- scale versions of these images, and scale them down for faster
processing.




There are 3,023 images, each 87×65 pixels large, belonging to 62 different people:




                                                                                                          35

[PDF page 38; printed page 36]
This is where PCA comes in. Computing distances in the original pixel space is quite a bad way to measure
similarity between faces. When using a pixel representation to compare two images, we compare the
grayscale value of each individual pixel to the value of the pixel in the corresponding position in the other
image. This representa- tion is quite different from how humans would interpret the image of a face, and


                                                                                                          36

[PDF page 39; printed page 37]
it is hard to capture the facial features using this raw representation. For example, using pixel distances
means that shifting a face by one pixel to the right corresponds to a drastic change, with a completely
different representation. We hope that using distan- ces along principal components can improve our
accuracy. Here, we enable the whitening option of PCA, which rescales the principal components to have
the same scale. This is the same as using StandardScaler after the transformation. Reusing the data again,
whitening corresponds to not only rotating the data, but also rescaling it so that the center panel is a
circle instead of an ellipse:




We fit the PCA object to the training data and extract the first 100 principal compo- nents. Then we
transform the training and test data:




The new data has 100 features, the first 100 principal components. Now, we can use the new
representation to classify our images using a one-nearest-neighbors classifier:




Our accuracy improved quite significantly, from 26.6% to 35.7%, confirming our intuition that the
principal components might provide a better representation of the data.



                                                                                                        37

[PDF page 40; printed page 38]
For image data, we can also easily visualize the principal components that are found. Remember that
components correspond to directions in the input space. The input space here is 50×37-pixel grayscale
images, so directions within this space are also 50×37-pixel grayscale images.

Let’s look at the first couple of principal components:




Although we cannot fully comprehend all the details captured by these components, we can make
educated guesses about what aspects of the face images they represent. For example, the first
component seems to primarily capture the contrast between the face and its background, while the
second component appears to reflect lighting differences between the left and right sides of the face,
and so on. While this representation is somewhat more interpretable than the raw pixel values, it still
differs significantly from how a human would perceive a face. Since PCA is based on pixel values, factors
                                                                                                      38

[PDF page 41; printed page 39]
such as the alignment of facial features (like the eyes, chin, and nose) and the lighting conditions strongly
influence how similar two images are in terms of their pixel representations. However, alignment and
lighting are not typically the primary factors humans use to judge facial similarity. People tend to focus
on attributes like age, gender, facial expression, and hairstyle, which are difficult to derive from pixel
intensity alone. It's important to remember that algorithms often interpret data—especially visual data
like images—in ways that differ from human perception.

Let’s come back to the specific case of PCA, though. We introduced the PCA transformation as rotating
the data and then dropping the components with low variance. Another useful interpretation is to try to
find some numbers (the new feature values after the PCA rotation) so that we can express the test points
as a weighted sum of the principal components.

In this context, x0, x1, and so on represent the coefficients of the principal components for a given data
point, essentially providing the image's representation in the transformed space. Another way to gain
insight into the workings of a PCA model is by examining the reconstructions of the original data using
only a subset of the components. As demonstrated in figure above, after removing the second
component and reaching the third panel, we reversed the rotation and reintroduced the mean to obtain
new points in the original space with the second component excluded, as shown in the final panel. A
similar transformation can be applied to face images by reducing the data to a smaller number of
principal components, then reversing the transformation back into the original space. This return to the
original feature space can be accomplished using the inverse_transform method. In this case, we visualize
the reconstruction of several faces using 10, 50, 100, 500, or 2,000 components.




                                                                                                          39

[PDF page 42; printed page 40]
40

[PDF page 43; printed page 41]
41

[PDF page 44; printed page 42]
You can see that when we use only the first 10 principal components, only the essence of the picture,
like the face orientation and lighting, is captured. By using more and more principal components, more
and more details in the image are preserved. This corresponds to extending the sum to include more and
more terms. Using as many components as there are pixels would mean that we would not discard any
information after the rotation, and we would reconstruct the image perfectly. We can also try to use PCA
to visualize all the faces in the dataset in a scatter plot using the first two principal components, with
classes given by who is shown in the image, similarly to what we did for the cancer dataset:




                                                                                                       42
```
