---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "445-448"
printed_pages: "445-448"
section: "Sequential Search"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "search"
  - "sequential"
  - "list"
  - "found"
  - "item"
  - "loc"
  - "loop"
  - "statements"
  - "comparisons"
  - "key"
  - "number"
  - "lists"
---

# Sequential Search

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 445-448 | printed pages 445-448

Related sections: [Binary Search](7-4-binary-search.md), [Search Algorithms](7-1-search-algorithms.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Binary Search Trees](9-3-binary-search-trees.md), [First Normal Form](../../information-systems-622-study-guide/sections/3-6-2-first-normal-form.md), [Binary Trees](9-1-binary-trees.md)

## Extracted Text

```text
[PDF page 445; printed page 445]
7.2 Sequential Search


The sequential search (also called linear search) on linked lists was covered in Chapter 3. The sequential
 search works the same for both array-based and linked lists. The search always starts at the first element
 in the list and continues until either the item is found in the list or the entire list is searched.


Because we are interested in the performance of the sequential search (that is, the analysis of this type of
 search), for easy reference and for the sake of completeness, we give the sequential search algorithm for
 array-based lists. If the search item is found, its index (that is, its location in the array) is returned. If the
 search is unsuccessful, -1 is returned. Note that the following sequential search does not require the list
 elements to be in any particular order.


template <class elemType>
int arrayListType<elemType>::seqSearch(const elemType& item) const
                                                       445

[PDF page 446; printed page 446]
{
    int loc;
    bool found = false;


    for (loc = 0; loc < length; loc++)
               if (list[loc] == item)
               {
                       found = true;
                       break;
               } if
    (found) return
    loc; else
               return -1;
}                               //end seqSearch




                                                  446

[PDF page 447; printed page 447]
7.1.1.1 Sequential Search Analysis


This section analyzes the performance of the sequential search algorithm in both the worst case and the
average case.


The statements before and after the loop are executed only once and, hence, require very little computer
time. The statements in the for loop are the ones that are repeated several times. For each iteration of
the loop, the search item is compared with an element in the list, and a few other statements are
executed, including some other comparisons. Clearly, the loop terminates as soon as the search itemis
found in the list. Therefore, the execution of the other statements in the loop is directly related to the
outcome of the key comparison. Also, different programmers might implement the same algorithm
differently, although the number of key comparisons would typically be the same. The speed of a
computer can also easily affect the time an algorithm takes to perform, but not the number of key
comparisons.


Therefore, when analyzing a search algorithm, we count the number of key comparisons because this
number gives us the most useful information. Furthermore, the criteria for counting the number of key
comparisons can be applied equally well to other search algorithms.


Suppose that L is list of length n. We want to determine the number of key comparisons made by the
sequential search when the L is searched for a given item.


If the search item is not in the list, we then compare the search item with every element in the list, making
n comparisons. This is an unsuccessful case.


Suppose that the search item is in the list. Then the number of key comparisons depends on where in the
list the search item is located. If the search item is the first element of L, we make only one key
comparison. This is the best case. On the other hand, if the search item is the last element in the list, the
algorithm makes n comparisons. This is the worst case. The best and worst cases are not likely to occur
every time we apply the sequential search on L, so it would be more helpful if we could determine the
average behavior of the algorithm. That is, we need to determine the average number of key comparisons
the sequential search algorithm makes in the successful case.


                                                    447

[PDF page 448; printed page 448]
To determine the average number of comparisons in the successful case of the sequential search
algorithm:


    1. Consider all possible cases.
    2. Find the number of comparisons for each case.
    3. Add the number of comparisons and divide by the number of cases.


If the search item, called the target, is the first element in the list, one comparison is required. If the target
is the second element in the list, two comparisons are required. Similarly, if the target is the kth element
in the list, k comparisons are required. We assume that the target can be any element in the list; that is,
all list elements are equally likely to be the target. Suppose that there are n elements in the list. The
following expression gives the average number of comparisons:




                                                      448
```
