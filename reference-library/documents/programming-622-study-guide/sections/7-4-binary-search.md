---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "450-456"
printed_pages: "450-456"
section: "Binary Search"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "list"
  - "search"
  - "binary"
  - "first"
  - "item"
  - "figure"
  - "middle"
  - "element"
  - "length"
  - "because"
  - "index"
  - "lists"
---

# Binary Search

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 450-456 | printed pages 450-456

Related sections: [Binary Search Trees](9-3-binary-search-trees.md), [Binary Trees](9-1-binary-trees.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Sequential Search](7-2-sequential-search.md), [Search Algorithms](7-1-search-algorithms.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 450; printed page 450]
7.4 Binary Search




                                                450

[PDF page 451; printed page 451]
As you can see, the sequential search is not efficient for large lists because, on average, the sequential
search searches half the list. We therefore describe another search algorithm, called the binary search,
which is very fast. However, a binary search can be performed only on ordered lists. We, therefore,
assume that the list is ordered. In the next chapter, we describe several sorting algorithms.


The binary search algorithm uses the divide-and-conquer technique to search the list. First, the search
item is compared with the middle element of the list. If the search item is found, the search terminates.
If the search item is less than the middle element of the list, we restrict the search to the first half of the
list; otherwise, we search the second half of the list.


Consider the sorted list of length = 12 in Figure 7-1.




                                              FIGURE 7-1 List of length 12



Suppose that we want to determine whether 75 is in the list. Initially, the entire list is the search list (see
Figure 7-2).




                                         FIGURE 7-2 Search list, list[0]...list[11]



First, we compare 75 with the middle element in this list, list[5] (which is 39). Because 75 ≠ list[5] and 75
> list[5], we restrict our search to the list list[6]...list[11], as shown in Figure 7-3.




                                         FIGURE 7-3 Search list, list[6]...list[11]



This process is now repeated on the list list[6]...list[11], which is a list of length = 6.


Because we need to determine the middle element of the list frequently, the binary search algorithm is
typically implemented for array-based lists. To determine the middle element of the list, we add the
starting index, first, and the ending index, last, of the search list and then divide by 2 to calculate its index.
                                                       451

[PDF page 452; printed page 452]
That is, mid = (first + last) / 2.


Initially, first = 0 and last = length – 1 (this is because an array index in C++ starts at 0 and length denotes
the number of elements in the list).


The following C++ function implements the binary search algorithm. If the item is found in the list, its
location is returned; if the search item is not in the list, -1 is returned.
template<class elemType>
int orderedArrayListType<elemType>::binarySearch(const elemType& item) const
{




                                                       452

[PDF page 453; printed page 453]
        int first = 0;    int
        last = length - 1;
        int mid;


        bool found = false;
        while (first <= last && !found)
        {
                 mid = (first + last) / 2;


                if (list[mid] == item)
                found = true; else if
                (list[mid] > item) last =
                mid - 1; else
                         first = mid + 1;
        }


        if (found) return
        mid; else
                 return -1;
}                                            //end binarySearch


In the binary search algorithm, each time through the loop we make two key comparisons. The only
exception is in the successful case; the last time through the loop only one key comparison is made.

Example 7-1 further illustrates how the binary search algorithm works.
EXAMPLE 7-1
Consider the list given in Figure 7-4.




                                         FIGURE 7-4 Sorted list for a binary search



The number of elements in this list is 12, so length = 12. Suppose that we are searching for item 89. Table
7-1 shows the values of first, last, and mid each time through the loop. It also shows the number of times
the item is compared with an element in the list each time through the loop.
                                                           453

[PDF page 454; printed page 454]
              TABLE 7-1: Values of first, last, and mid and the number of comparisons for search item 89




The item is found at location 10, and the total number of comparisons is 5.




                                                        454

[PDF page 455; printed page 455]
Next, let us search the list for item 34. Table 7-2 shows the values of first, last, and mid each time through
the loop. It also shows the number of times the item is compared with an element in the list each time
through the loop.


               TABLE 7-2: Values of first, last, and mid and the number of comparisons for search item 34




The item is found at location 4, and the total number of comparisons is 7.
Let us now search for item 22, as shown in Table 7-3.
               TABLE 7-3: Values of first, last, and mid and the number of comparisons for search item 22




This is an unsuccessful search. The total number of comparisons is 6.


7.1.1.2 Performance Of Binary Search


Suppose that L is a sorted list of size 1024 and we want to determine if an item x is in L. From the binary
search algorithm, it follows that every iteration of the while loop cuts the size of the search list by half.
(For example, see Figures 7-2 and 7-3.) Because 1024 = 210, the while loop will have, at most, 11 iterations
to determine whether x is in L. Because every iteration of the while loop makes two item (key)
comparisons, that is, x is compared twice with the elements of L, the binary search will make, at most, 22
comparisons to determine whether x is in L. On the other hand, recall that a sequential search on average
will make 512 comparisons to determine whether x is in L.


To better understand how fast binary search is compared with sequential search, suppose that L is of size
                                                  455

[PDF page 456; printed page 456]
1048576. Because 1048576 = 220, it follows that the while loop in a binary search will have at most 21
iterations to determine whether an element is in L. Every iteration of the while loop makes two key (that
is, item) comparisons. Therefore, to determine whether an element is in L, a binary search makes at most
42 item comparisons.




                                                  456
```
