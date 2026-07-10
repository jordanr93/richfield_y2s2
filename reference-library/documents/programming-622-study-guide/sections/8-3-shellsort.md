---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "516-531"
printed_pages: "516-531"
section: "Shellsort"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "sort"
  - "elements"
  - "item"
  - "list"
  - "shellsort"
  - "selection"
  - "insertion"
  - "movements"
  - "number"
  - "position"
  - "final"
  - "distance"
---

# Shellsort

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 516-531 | printed pages 516-531

Related sections: [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Report Design Principles](../../information-systems-622-study-guide/sections/2-6-2-report-design-principles.md), [Binary Trees](9-1-binary-trees.md), [Item Insertion and Deletion](3-2-item-insertion-and-deletion.md), [Linked List as an ADT](3-3-linked-list-as-an-adt.md), [Sequential Search](7-2-sequential-search.md)

## Extracted Text

```text
[PDF page 516; printed page 516]
8.3 Shellsort


In the previous sections, we described selection sort and insertion sort. We noticed that selection sort
 makes more comparisons and less item movements than insertion sort. Selection sort makes more
 comparisons because it makes many redundant comparisons. The number of item movements in selection
 sort is less because each item is moved at most one time. In fact, the number of item movements in
 insertion sort is considerably more than selection sort because it moves items one position at a time, so
 to move an item to its final position, it might require many movements.


We can reduce the number of item movements in insertion sort by modifying it. The modified insertion
 sort that we present next was introduced in 1959 by D. E. Shell and is known as the Shellsort algorithm.
 This sort is also known as diminishing-increment sort.


In Shellsort, the elements of the list are viewed as sublists at a particular distance. Each sublist is sorted,
 so that elements that are far apart move closer to their final position. For example, suppose that you have
 a list of 15 elements, as shown in Figure 8-19. First we view the list as 7 sublists, that is, we sort the
 elements at a distance of 7. Note that several elements have moved closer to their final position. For
 example, 2, 19, and 60 are closer to their final position. In the next iteration, we sort the elements at a
 distance of 4, as shown in Figure 8-19(b). Finally, we sort the elements at a distance of 1, that is, the entire
 list is sorted. Figure 8-19(c) shows the elements before and after the final sorting phase.




                                                      516

[PDF page 517; printed page 517]
517

[PDF page 518; printed page 518]
                                          FIGURE 8-19 Lists during Shellsort

In Figure 8-19, we sorted the elements at a distance of 7, 4, and then 1. The sequence 1, 4, 7 is called the
increment sequence. How do we choose an increment sequence? In general, this question cannot be
answered satisfactorily. The literature provides a discussion of various increment sequences, and some
have been found to be useful. Typically, the increment sequences are chosen to decrease roughly
geometrically so that the number of increments is logarithmic in the size of the list. For example, if the
number of increments is about one-half of the previous increment, then we need at most 20 increments
to sort a list of 1 million elements. However, using as few increments as possible is desirable.


D. E. Knuth recommended the increment sequence 1, 4, 13, 40, 121, 364, 1093, 3280, . . . .The ratio
between successive increments is about one-third. In fact, the ith increment = 3 • (i – 1)th increment + 1.
There are many other increment sequences that could lead to more efficient sorts. However, for large
lists, it is difficult to get a better performance by more than 20% than the increment sequence
recommended by Knuth.


There are certain increment sequences that must be avoided. For example, the increment sequence, 1, 2,
4, 8, 16, 32, 64, 128, 256, . . . , is likely to lead to a bad performance because elements at odd positions
are not compared with the elements at even positions until the final pass. We will use the increment
sequence suggested by Knuth in the Shellsort algorithm we implement.

This following function implements the Shellsort algorithm:
template <class elemType>
void arrayListType<elemType>::shellSort()
{
       int inc;
       for (inc = 1; inc < (length - 1) / 9; inc = 3 * inc + 1);
       do
       { for (int begin = 0; begin < inc; begin++)
                  intervalInsertionSort(begin, inc);
                  inc = inc / 3;
       }
       while (inc > 0);
} //end shellSort



                                                        518

[PDF page 519; printed page 519]
In the function shellSort, we use the function intervalInsertionSort, which is a modified version of insertion
sort for array-based lists, discussed earlier in this chapter. In the intervalInsertionSort, the sublist starts at
the variable begin, and the increment between successive elements is given by the variable inc instead of
1. We leave the details of the function intervalInsertionSort as an exercise for you.


The analysis of the Shellsort is difficult to obtain. In fact, to date, good estimates of the number of
comparisons and item movements have been obtained only under special conditions depending on the
increment sequence. Empirical studies suggest that for large lists of size n, the number of moves is in the
range of n1.25 to 1.6n1.25, which is a considerable improvement over insertion sort.




                                                      519

[PDF page 520; printed page 520]
8.3     Lower Bound on Comparison-Based Sort Algorithms


The previous sections discussed selection sort and insertion sort, and noted that the average case behavior
of these algorithms is O(n2). Both of these algorithms are comparison-based algorithms; that is, the lists
are sorted by comparing their respective keys. Before discussing any additional sorting algorithms, let us
discuss the best-case scenario for the comparisonbased sorting algorithms.


We can trace the execution of a comparison-based algorithm using a graph called a comparison tree. Let
L be a list of n distinct elements, where n> 0. For any j and k, where 1 ≤ j, k ≤ n, either L* j+ < L*k+ or L* j+
> L[k]. Because each comparison of the keys has two outcomes, the comparison tree is a binary tree.While
drawing this figure, we draw each comparison as a circle, called a node. The node is labeled as j:k,
representing the comparison of L[j] with L[k]. If L[j] < L[k], follow the left branch; otherwise, follow the
right branch. Figure 8-20 shows the comparison tree for a list of length 3. (In Figure 8-20, the rectangle,
called leaf, represents the final ordering of the nodes.)




                                FIGURE 8-20 Comparison tree for sorting three items



We call the top node in the figure the root node. The straight line that connects the two nodes is called a
branch. A sequence of branches from a node, x, to another node, y, is called a path from x to y.


Associated with each path from the root to a leaf is a unique permutation of the elements of L. This
uniqueness follows because the sort algorithm only moves the data and makes comparisons.
Furthermore, the data movement on any path from the root to a leaf is the same regardless of the initial
inputs. For a list of n elements, n> 0, there are n! different permutations. Any one of these n! permutations
might be the correct ordering of L. Thus, the comparison tree must have at least n! leaves.


                                                       520

[PDF page 521; printed page 521]
Let us consider the worst case for all comparison-based sorting algorithms. We state the following result
without proof.


Theorem: Let L be a list of n distinct elements. Any sorting algorithm that sorts L by comparison of the
keys only, in its worst case, makes at least O(nlog2n) key comparisons.


As analyzed in the previous sections, both selection sort and insertion sort are of the order O(n2). The
remainder of this chapter discusses sorting algorithms that, on average, are of the order O(nlog2n).




                                                   521

[PDF page 522; printed page 522]
8.4     Quicksort: Array-Based Lists


In the previous section, we noted that the lower bound on comparison-based algorithms is O(nlog2n). The
sorting algorithms selection sort and insertion sort, discussed earlier in this chapter, are O(n2). In this and
the next two sections, we discuss sorting algorithms that are usually of the order O(nlog2n). The first
algorithm is quicksort.


Quicksort uses the divide-and-conquer technique to sort a list. The list is partitioned into two sublists, and
the two sublists are then sorted and combined into one list in such a way so that the combined list is
sorted. Thus, the general algorithm is as follows:


        if (the list size is greater than 1)
        {
                a. Partition the list into two sublists, say lowerSublist and upperSublist.
                b. Quicksort lowerSublist.
                c. Quicksort upperSublist.
                d. Combine the sorted lowerSublist and sorted upperSublist.
        }


After partitioning the list into two sublists—lowerSublist and upperSublist—these two sublists are sorted
using quicksort. In other words, we use recursion to implement quicksort.


Quicksort described here is for array-based lists. The algorithm for linked lists can be developed in a similar
manner and is left as an exercise for you.


In quicksort, the list is partitioned in such a way that combining the sorted lowerSublist and upperSublist
is trivial. Therefore, in quicksort, all the sorting work is done in partitioning the list. Because all the sorting
work occurs during the partition, we first describe the partition procedure in detail.


To partition the list into two sublists, first we choose an element of the list called the pivot. The pivot is
used to divide the list into two sublists: the lowerSublist and the upperSublist. The elements in the
lowerSublist are smaller than the pivot, and the elements in the upperSublist are greater than the pivot.
For example, consider the list in Figure 8-21.
                                                       522

[PDF page 523; printed page 523]
                                       FIGURE 8-21 list before the partition



There are several ways to determine the pivot. However, the pivot is chosen so that, it is hoped, the
lowerSublist and upperSublist are of nearly equal size. For illustration purposes, let us choose the middle
element of the list as the pivot. The partition procedure that we describe partitions this list using the pivot
as the middle element, in our case 50, as shown in Figure 8-22.




                                        FIGURE 8-22 list after the partition




                                                       523

[PDF page 524; printed page 524]
From Figure 8-22, it follows that after partitioning list into lowerSublist and upperSublist, the pivot is in
the right place. Thus, after sorting lowerSublist and upperSublist, combining the two sorted sublists is
trivial.


The partition algorithm is as follows: (We assume that pivot is chosen as the middle element of the list.)


    1. Determine the pivot, and swap the pivot with the first element of the list.


           Suppose that the index smallIndex points to the last element smaller than the pivot. The index
           smallIndex is initialized to the first element of the list.


    2. For the remaining elements in the list (starting at the second element) If the current element is
           smaller than the pivot


                   a. Increment smallIndex.
                   b. Swap the current element with the array element pointed to by smallIndex.


    3. Swap the first element, that is, the pivot, with the array element pointed to by smallIndex.
Step 2 can be implemented using a for loop, with the loop starting at the second element of the list. Step
1 determines the pivot and moves the pivot in the first array position. During the execution of Step
2, the elements of the list get arranged as shown in Figure 8-23. (Suppose the name of the array containing
the list elements is list.)




                                      FIGURE 8-23 List during the execution of Step 2



As shown in Figure 8-23, the pivot is in the first array position, elements in lowerSublist are less than the
pivot, and elements in the upperSublist are greater than or equal to the pivot. The variable smallIndex
contains the index of the last element of lowerSublist and the variable index contains the index of the next
element that needs to be moved either in lowerSublist or in upperSublist. As explained in Step 2, if the
next element of the list (that is, list[index]) is less than the pivot, we advance smallIndex to the next array
                                                           524

[PDF page 525; printed page 525]
position and swap list[index] with list[smallIndex]. Next we illustrate Step 2.


Suppose that list is as given in Figure 8-24.




                                          FIGURE 8-24 list before sorting




                                                       525

[PDF page 526; printed page 526]
For the list in Figure 8-24, the pivot is at position 6. After moving the pivot at the first array position, the
list is shown in Figure 8-25. (Notice that in Figure 8-25, 52 is swapped with 32.)




                            FIGURE 8-25 List after moving pivot at the first array position



Suppose that after executing Step 2 a few times, the list is as shown in Figure 8-26.




                                   FIGURE 8-26 List after a few iterations of Step 2



As shown in Figure 8-26, the next element of the list that needs to be moved in a sublist is indicated by
index. Because list[index] < pivot, we need to move the element list[index] in lowerSublist. To do so, we
first advance smallIndex to the next array position and then swap list[smallIndex] with list[index]. The
resulting list is shown in Figure 8-27. (Notice that 11 is swapped with 96.)




                                 FIGURE 8-27 List after moving 11 into lowerSublist



Now consider the list in Figure 8-28.




                                  FIGURE 8-28 List before moving 58 into a sublist



For the list in Figure 8-28, list[index] is 58, which is greater than the pivot. Therefore, list[index] is to be
moved in upperSublist. This is accomplished by leaving 58 at its position and increasing the size of
upperSublist, by one, to the next array position. After moving 58 into upperSublist, the list is as shown in
Figure 8-29.

                                                        526

[PDF page 527; printed page 527]
FIGURE 8-29 List after moving 58 into upperSublist




                      527

[PDF page 528; printed page 528]
After moving the elements that are less than the pivot into lowerSublist and elements that are greater
than the pivot into upperSublist (that is, after completely executing Step 2), the resulting list is as shown
in Figure 8-30.




                     FIGURE 8-30 List elements after arranging into lowerSublist and upperSublist



Next, we execute Step 3 and move 52, the pivot, to the proper position in the list. This is accomplished by
swapping 52 with 45. The resulting list is shown in Figure 8-31.




                                     FIGURE 8-31 List after swapping 52 with 45



As shown in Figure 8-31, the preceding algorithm, Steps 1, 2, and 3, partitions the list into two sublists
such that the elements less than the pivot are in lowerSublist and elements greater than or equal to the
pivot are in upperSublist.


To partition the list into the lower and upper sublists, we only need to keep track of the last element of
the lowerSublist and the next element of the list that needs to be moved either in lowerSublist or in
upperSublist. In fact, upperSublist is between the two indices smallIndex and index.


We now write the function, partition, to implement the preceding partition algorithm. After rearranging
the elements of the list, the function returns the location of the pivot so that we can determine the starting
and ending locations of the sublists. Also, because the function partition will be a member of the class, it
has direct access to the array containing the list. Thus, to partition a list, we need to pass only the starting
and ending indices of the list.


template <class elemType>
int arrayListType<elemType>::partition(int first, int last)
{
        elemType pivot;

                                                        528

[PDF page 529; printed page 529]
int index, smallIndex;
swap(first, (first + last) / 2);
pivot = list[first];
smallIndex = first;


for (index = first + 1; index <= last; index++)
        if (list[index] < pivot)
        {




                                                  529

[PDF page 530; printed page 530]
                         smallIndex++;
                         swap(smallIndex, index);
                }


       swap(first, smallIndex);
       return smallIndex;
}
As you can see from the definition of the function partition, certain elements of the list need to be
swapped. The following function, swap, accomplishes this task:


template <class elemType>
void arrayListType<elemType>::swap(int first, int second)
{
       elemType temp;


       temp = list[first]; list[first]
       = list[second];
       list[second] = temp;
}


Once the list is partitioned into lowerSublist and upperSublist, we again apply the quicksort method to
sort the two sublists. Because both sublists are sorted using the same quicksort algorithm, the easiest way
to implement this algorithm is to use recursion. Therefore, this section gives the recursive version of
quicksort. As explained previously, after rearranging the elements of the list, the function partition returns
the index of the pivot so that the starting and ending indices of the sublists can be determined.


Given the starting and ending indices of a list, the following function, recQuickSort, implements the
recursive version of quicksort:


template <class elemType>
void arrayListType<elemType>::recQuickSort(int first, int last)
{
       int pivotLocation;

                                                    530

[PDF page 531; printed page 531]
        if (first < last)
        { pivotLocation = partition(first, last);
                 recQuickSort(first, pivotLocation - 1);
                 recQuickSort(pivotLocation + 1,
                 last);
        }
}

Finally, we write the quicksort function, quickSort, that calls the function recQuickSort of the original list:
template <class elemType>
void arrayListType<elemType>::quickSort()
{ recQuickSort(0, length -1);
}




                                                      531
```
