---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "443-444"
printed_pages: "443-444"
section: "Search Algorithms"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "search"
  - "item"
  - "key"
  - "set"
  - "list"
  - "searching"
  - "you"
  - "can"
  - "particular"
  - "keys"
  - "items"
  - "learn"
---

# Search Algorithms

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 443-444 | printed pages 443-444

Related sections: [Sequential Search](7-2-sequential-search.md), [Binary Search](7-4-binary-search.md), [Sorting Algorithms](8-1-sorting-algorithms.md), [Chapter 5: Unsupervised Learning – Clustering Algorithms](../../machine-learning-600-study-guide/sections/5-chapter-5-unsupervised-learning-clustering-algorithms.md), [Binary Search Trees](9-3-binary-search-trees.md), [Binary Trees](9-1-binary-trees.md)

## Extracted Text

```text
[PDF page 443; printed page 443]
                         •   Learn the various search algorithms
                         •   Explore how to implement the sequential and binary search
                         algorithms
                         •   Discover how the sequential and binary search algorithms perform
                         •   Become aware of the lower bound on comparison-based search
                         algorithms
                         •   Learn about hashing


Chapter 3 described how to organize data using linked lists. The most important operation performed on
 a list is the search algorithm. Using the search algorithm, you can do the following:


         Determine whether a particular item is in the list.
         If the data is specially organized (for example, sorted), find the location in the list where a new
    item can be inserted.

       Find the location of an item to be deleted.


The search algorithm’s performance, therefore, is crucial. If the search is slow, it takes a large amount of
 computer time to accomplish your task; if the search is fast, you can accomplish your task quickly.


7.1 Search Algorithms


This chapter discusses other search algorithms and analyzes them. The analysis of algorithms enables
 programmers to decide which algorithm to use for a specific application. Before describing these
 algorithms, let us make the following observations.


Associated with each item in a data set is a special member that uniquely identifies the item in the data
 set. For example, if you have a data set consisting of student records, then the student ID uniquely

                                                     443

[PDF page 444; printed page 444]
identifies each student in a particular school. This unique member of the item is called the key of the item.
The keys of the items in the data set are used in such operations as searching, sorting, insertion, and
deletion. For instance, when we search the data set for a particular item, we compare the key of the item
for which we are searching with the keys of the items in the data set.


As previously remarked, in addition to describing searching algorithms, this chapter analyses these
algorithms. In the analysis of an algorithm, the key comparisons refer to comparing the key of the search
item with the key of an item in the list. Moreover, the number of key comparisons refers to the number
of times the key of the item (in algorithms such as searching and sorting) is compared with the keys of the
items in the list.


This chapter refers to this class(class arrayListType), for easy reference we give its definition, without
documentation to save space, here:


template <class elemType> class
arrayListType
{ public:




                                                    444
```
