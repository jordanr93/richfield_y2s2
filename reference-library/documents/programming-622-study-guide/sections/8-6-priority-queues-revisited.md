---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "560-566"
printed_pages: "560-566"
section: "Priority Queues (Revisited)"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "priority"
  - "element"
  - "list"
  - "queue"
  - "heap"
  - "queues"
  - "new"
  - "first"
  - "largest"
  - "implemented"
  - "entry"
  - "can"
---

# Priority Queues (Revisited)

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 560-566 | printed pages 560-566

Related sections: [Priority Queues](6-4-priority-queues.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Queue Operations](6-1-queue-operations.md), [Critical Thinking Skills](../../information-systems-622-study-guide/sections/6-9-4-critical-thinking-skills.md), [DATA DESIGN TERMS](../../information-systems-622-study-guide/sections/3-4-data-design-terms.md), [Focus on Data Entry Screens](../../information-systems-622-study-guide/sections/2-4-7-focus-on-data-entry-screens.md)

## Extracted Text

```text
[PDF page 560; printed page 560]
8.6 Priority Queues (Revisited)


 Chapter 6 introduced priority queues. Recall that in a priority queue, customers or jobs with higher
 priorities are pushed to the front of the queue. Chapter 6 stated that we would discuss the
 implementation of priority queues after describing heapsort. For simplicity, we assume that the priority
 of the queue elements is assigned using the relational operators.


 In a heap, the largest element of the list is always the first element of the list. After removing the largest
 element of the list, the function heapify restores the heap in the list. To ensure that the largest element
 of the priority queue is always the first element of the queue, we can implement priority queues as heaps.
 We can write algorithms similar to the ones used in the function heapify to insert an element in the priority
 queue (addQueue operation), and remove an element from the queue (deleteQueue operation). The next
 two sections describe these algorithms.


 8.4.7 Insert An Element In The Priority Queue


 Assuming the priority queue is implemented as a heap, we perform the following steps:


     1. Insert the new element in the first available position in the list. (This ensures that the array holding
        the list is a complete binary tree.)
                                                      560

[PDF page 561; printed page 561]
   2. After inserting the new element in the heap, the list might no longer be a heap. So to restore the
       heap:


       while (the parent of the new entry is smaller than the new entry) swap
               the parent with the new entry.


Notice that restoring the heap might result in moving the new entry to the root node.


8.4.8 Remove An Element From The Priority Queue


Assuming the priority queue is implemented as a heap, to remove the first element of the priority queue,
we perform the following steps:


   1. Copy the last element of the list into the first array position.




                                                    561

[PDF page 562; printed page 562]
     2. Reduce the length of the list by 1.
     3. Restore the heap in the list.


The other operations for priority queues can be implemented in the same way as implemented for queues.
We leave the implementation of the priority queues as an exercise for you.


Key Terms


1.       Selection sort sorts a list by finding the smallest (or equivalently, the largest) element in the list,
and moving it to the beginning (or the end) of the list.
2.       For a list of length n, where n> 0, selection sort makes (1/2)n(n – 1) key comparisons and 3(n – 1)
item assignments.
3.       For a list of length n, where n> 0, on average, insertion sort makes (1/4)n2 + O(n) = O(n2) key
comparisons and (1/4)n2 + O(n) = O(n2) item assignments.
4.       Empirical studies suggest that for large lists of size n, the number of moves in Shellsort is in the
range of n1.25 to 1.6n1.25.

5.       Let L be a list of n distinct elements. Any sorting algorithm that sorts L by comparison of the keys
only, in its worst case, makes at least O(nlog2n) key comparisons. 6. Both quicksort and mergesort sort a
list by partitioning the list.
7. To partition a list, quicksort first selects an item from the list, called the pivot. The algorithm then
     rearranges the elements so that the elements in one of the sublists are less than the pivot, and the
     elements in the second sublist are greater than or equal to the pivot.
8. In a quicksort, the sorting work is done in partitioning the list.
9. On average, the number of key comparisons in quicksort is O(nlog2n). In the worst case, the number
     of key comparisons in quicksort is O(n2).
10. Mergesort partitions the list by dividing it in the middle.
11. In mergesort, the sorting work is done in merging the list.
12. The number of key comparisons in mergesort is O(nlog2n).
13. A heap is a list in which each element contains a key, such that the key in the element at position k in
     the list is at least as large as the key in the element at position 2k + 1 (if it exists) and 2k + 2 (if it exists).
14. The first step in the heapsort algorithm is to convert the list into a heap, called buildHeap. After we
     convert the array into a heap, the sorting phase begins.
15. Suppose that L is a list of n elements, where n> 0. In the worst case, the number of key comparisons
                                                          562

[PDF page 563; printed page 563]
   in heapsort to sort L is 2nlog2n + O(n). Also, in the worst case, the number of item assignments in
   heapsort to sort L is nlog2n + O(n).


Exercises


1. Sort the following list using selection sort as discussed in this chapter. Show the list after each iteration
  of the outer for loop.


                       26, 45, 17, 65, 33, 55, 12, 18


2. Sort the following list using selection sort as discussed in this chapter. Show the list after each iteration
  of the outer for loop.


                       36, 55, 17, 35, 63, 85, 12, 48, 3, 66




                                                        563

[PDF page 564; printed page 564]
3. Assume the following list of keys: 5, 18, 21, 10, 55, 20
The first three keys are in order. To move 10 to its proper position using insertion sort as described in this
chapter, exactly how many key comparisons are executed?


4. Assume the following list of keys: 7, 28, 31, 40, 5, 20


The first four keys are in order. To move 5 to its proper position using insertion sort as described in this
chapter, exactly how many key comparisons are executed?


5. Assume the following list of keys: 28, 18, 21, 10, 25, 30, 12, 71, 32, 58, 15


This list is to be sorted using insertion sort as described in this chapter for array-based lists. Show the
resulting list after six passes of the sorting phase—that is, after six iterations of the for loop.


6. Recall insertion sort for array-based lists as discussed in this chapter. Assume the following list of keys:
  18, 8, 11, 9, 15, 20, 32, 61, 22, 48, 75, 83, 35, 3


Exactly how many key comparisons are executed to sort this list using insertion sort?


7. Explain why the number of item movements in Shellsort is less than the number of item movements in
  insertion sort.


8. Consider the following list of keys: 80, 57, 65, 30, 45, 77, 27, 4, 90, 54, 45, 2, 63, 38, 81, 28, 62.


Suppose that this list is to be sorted using Shellsort.


Show the list during each increment, as in this chapter. a.
Use the increment sequence 1, 3, 5
b. Use the increment sequence 1, 4, 7.


9. Both mergesort and quicksort sort a list by partitioning the list. Explain how mergesort differs from
    quicksort in partitioning the list.

                                                        564

[PDF page 565; printed page 565]
10. Assume the following list of keys: 16, 38, 54, 80, 22, 65, 55, 48, 64, 95, 5, 100, 58, 25, 36


This list is to be sorted using quicksort as discussed in this chapter. Use pivot as the middle element of the
list.


a. Give the resulting list after one call to the partition procedure.
b. Give the resulting list after two calls to the partition procedure.


11. Assume the following list of keys: 18, 40, 16, 82, 64, 67, 57, 50, 37, 47, 72, 14, 17, 27, 35


This list is to be sorted using quicksort as discussed in this chapter. Use pivot as the median of the first,
last, and middle elements of the list.




                                                      565

[PDF page 566; printed page 566]
a. What is the pivot?
b. Give the resulting list after one call to the partition procedure.




12.     Using the function buildHeap as given in this chapter, convert the following array into a heap.
Show the final form of the array.


                47, 78, 81, 52, 50, 82, 58, 42, 65, 80, 92, 53, 63, 87, 95, 59, 34, 37, 7, 20


13.     Suppose that the following list was created by the function buildHeap during the heap creation
phase of heapsort.


                100, 85, 94, 47, 72, 82, 76, 30, 20, 60, 65, 50, 45, 17, 35, 14, 28, 5


Show the resulting array after two passes of heapsort. (Use the heapify procedure as given in this chapter.)
Exactly how many key comparisons are executed during the first pass?


14.     Suppose that L is a list is of length n and it is sorted using insertion sort. If L is already sorted in the
reverse order, show that the number of comparisons is (1/2)(n2 – n) and the number of item assignments
is (1/2)(n2 +3n) – 2.


15.     Suppose that L is a list is of length n and it is sorted using insertion sort. If L is already sorted, show
that the number of comparisons is (n – 1) and the number of item assignments is 0.


16.     Write the definition of the class arrayListType that implements the sorting algorithms for
arraybased lists as discussed in this chapter.


17.     Write the definition of the class unorderedLinkedList that implements the searching (described in
Chapter 3) and sorting algorithms for linked lists as discussed in this chapter.




                                                       566
```
