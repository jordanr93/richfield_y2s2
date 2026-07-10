---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "547-559"
printed_pages: "547-559"
section: "Heapsort: Array-Based Lists"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "list"
  - "element"
  - "figure"
  - "which"
  - "position"
  - "heapsort"
  - "lists"
  - "array-based"
  - "quicksort"
  - "heap"
  - "exists"
  - "tree"
---

# Heapsort: Array-Based Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 547-559 | printed pages 547-559

Related sections: [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [WEB-BASED DESIGN](../../information-systems-622-study-guide/sections/3-3-web-based-design.md), [Binary Search](7-4-binary-search.md), [Linked Lists](3-1-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md)

## Extracted Text

```text
[PDF page 547; printed page 547]
8.5 Heapsort: Array-Based Lists


In an earlier section, we described the quicksort algorithm for contiguous lists, that is, array-based lists.
 We remarked that, on average, quicksort is of the order O(nlog2n). However, in the worst case, quicksort
 is of the order O(n2). This section describes another algorithm, the heapsort, for array-based lists. This
 algorithm is of order O(n log2n) even in the worst case, therefore overcoming the worst case of the
 quicksort.




                                                    547

[PDF page 548; printed page 548]
Definition: A heap is a list in which each element contains a key, such that the key in the element at
position k in the list is at least as large as the key in the element at position 2k + 1 (if it exists) and 2k + 2
(if it exists).


Recall that, in C++ the array index starts at 0. Therefore, the element at position k is in fact the k + 1th
element of the list.


Consider the list in Figure 8-41.


                                                  FIGURE 8-41 A heap



It can be checked that the list in Figure 8-41 is in a heap. For example, consider list[3], which is 50. The
elements at position list[7] and list[8] are 20 and 10, respectively. Clearly, list[3] is larger than list[7] and
list[8].


In heapsort, elements at position k, 2k + 1, and 2k + 2, if they exist, are accessed frequently. Therefore, to
facilitate the discussion of heapsort, we typically view data in the form of a complete binary tree as
described next. For example, the data given in Figure 8-41 can be viewed in a complete binary tree, as
shown in Figure 8-42.




                        FIGURE 8-42 Complete binary tree corresponding to the list in Figure 8-41



In Figure 8-42, the first element of the list, which is 85, is the root node of the tree. The second element
of the list, which is 70, is the left child of the root node; the third element of the list, which is 80, is the
right child of the root node. Thus, in general, for the node k, which is the k - 1th element of the list, its left
child is the 2kth (if it exists) element of the list, which is at position 2k - 1 in the list, and the right child is
the 2k + 1st (if it exists) element of the list, which is at position 2k in the list. Note that Figure 842 clearly
shows that the list in Figure 8-41 is in a heap. Also note that in Figure 8-42, the elements 20, 10, 35, 15,
62, 58, and 30 are called leaves as they have no children.


                                                          548

[PDF page 549; printed page 549]
As remarked earlier, to demonstrate the heapsort algorithm, we will draw the complete binary tree
corresponding to a list. Note that even though we will draw a complete binary tree to illustrate heapsort,
the data gets manipulated in an array. We now describe heapsort.


The first step in heapsort is to convert the list into a heap, called buildHeap. After we convert the array
into a heap, the sorting phase begins.




8.4.5 Build Heap


This section describes the build heap algorithm.




                                                   549

[PDF page 550; printed page 550]
The general algorithm is as follows: Suppose length denotes the length of the list. Let index = length / 2 –
1. Then list[index] is the last element in the list which is not a leaf; that is, this element has at least one
child. Thus, elements list[index + 1]...list[length – 1] are leaves.


First, we convert the subtree with the root node list[index] into a heap. Note that this subtree has at most
three nodes. We then convert the subtree with the root node list[index - 1] into a heap, and so on.


To convert a subtree into a heap, we perform the following steps: Suppose that list[a] is the root node of
the subtree, list[b] is the left child, and list[c], if it exists, is the right child of list[a].


Compare list[b] with list[c] to determine the larger child. If list[c] does not exist, then list[b] is the larger
child. Suppose that largerIndex indicates the larger child. (Notice that, largerIndex is either b or c.)


Compare list[a] with list[largerIndex]. If list[a] < list[largerIndex], then swap list[a] with list[largerIndex];
otherwise, the subtree with root node list[a] is already in a heap.


Suppose that list[a] < list[largerIndex] and we swap the elements list[a] with list[largerIndex]. After making
this swap, the subtree with root node list[largerIndex] might not be in a heap. If this is the case, then we
repeat Steps 1 and 2 at the subtree with root node list[largerIndex] and continue this process until either
the heap in the subtrees is restored or we arrive at an empty subtree. This step is implemented using a
loop, which will be described when we write the algorithm.


Consider the list in Figure 8-43. Let us call this list.


                                                   FIGURE 8-43 Array list



Figure 8-44 shows the complete binary tree corresponding to the list in Figure 8-43.




                         FIGURE 8-44 Complete binary tree corresponding to the list in Figure 8-43


                                                           550

[PDF page 551; printed page 551]
To facilitate this discussion, when we say node 56, we mean the node with info 56.


This list has 11 elements, so the length of the list is 11. To convert the array into a heap, we start at the
list element n/2 - 1 = 11/2 – 1 = 5 – 1 = 4, which is the fifth element of the list.


Now list[4] = 56. The children of list[4] are list[4 * 2 + 1] and list[4 * 2 + 2], that is, list[9] and list[10]. In the
previous list, both list[9] and list[10] exist.




To convert the tree with root node list[4], we perform the previous hree steps:




                                                         551

[PDF page 552; printed page 552]
    1. Find the larger of list[9] and list[10], that is, the largest child of list[4]. In this case, list[10] is larger
           than list[9].
    2. Compare the larger child with the parent node. If the larger child is larger than the parent, swap
           the larger child with the parent. Because list[4] < list[10], we swap list[4] with list[10].
    3. Because list[10] does not have a subtree, Step 3 does not execute.


Figure 8-45(a) shows the resulting binary tree.




                           FIGURE 8-45 Binary tree while building heaps at list[4], list[3], and list[2]




Next, we consider the subtree with root node list[3], that is, 70 and repeat the three steps given earlier,
to obtain the complete binary tree as given in Figure 8-45(b). (Notice that Step 3 does not execute here
either.)


Now we consider the subtree with the root node list[2], that is, 72, and apply the three steps given earlier.
Figure 8-45(c) shows the resulting binary tree. (Note that in this case, because the parent is larger than
both children, this subtree is already in a heap.)


Next, we consider the subtree with the root node list[1], that is, 60, see 8-45(c). First, we apply Steps 1
and 2. Because list[1] = 60 < list[3] = 92 (the larger child), we swap list[1] with list[3], to obtain the tree as
given in Figure 8-46(a).




                                     FIGURE 8-46 Binary tree while building heap at list[1]



                                                              552

[PDF page 553; printed page 553]
However, after swapping list[1] with list[3], the subtree with the root node list[3], that is, 60, is no longer
a heap. Thus, we must restore the heap in this subtree. To do this, we apply Step 3 and find the larger
child of 60 and swap it with 60. We then obtain the binary tree as given in Figure 8-46(b).


Once again, the subtree with the root node list[1], that is, 92, is in a heap (see Figure 8-46(b)).


Finally, we consider the tree with the root node list[0], that is, 15. We repeat the previous three steps to
obtain the binary tree as given in Figure 8-47(a).




                                                     553

[PDF page 554; printed page 554]
                                 FIGURE 8-47 Binary tree while building heap at list[0]



We see that the subtree with the root node list[1], that is, 15, is no longer in a heap. So we must apply
Step 3 to restore the heap in this subtree. (This requires us to repeat Steps 1 and 2 at the subtree with
root node list[1].) We swap list[1] with the larger child, which is list[3] (that is, 70). We then get the binary
tree of Figure 8-47(b).


The subtree with the root node list[3] = 15 is not in a heap, and so we must restore the heap in this subtree.
To do so, we apply Steps 1 and 2 at the subtree with root node list[3]. We swap list[3] with the larger child,
which is list[7] (that is, 60). Figure 8-47(c) shows the resulting binary tree.


The resulting binary tree in Figure 8-47(c) is in a heap, and so the list corresponding to this complete binary
tree is in a heap.


Thus, in general, starting at the lowest level from right to left, we look at a subtree and convert the subtree
into a heap as follows: If the root node of the subtree is smaller than the larger child, we swap the root
node with the larger child. After swapping the root node with the larger child, we must restore the heap
in the subtree whose root node was swapped.


Suppose low contains the index of the root node of the subtree and high contains the index of the last
item in the list. The heap is to be restored in the subtree rooted at list[low]. The preceding discussion
translates into the following C++ algorithm:


int largeIndex = 2 * low + 1;                                       //index of the left child


while (largeIndex <= high)
{
        if ( largeIndex < high) if (list[largeIndex] <

                                                         554

[PDF page 555; printed page 555]
            list[largeIndex + 1])

                     largeIndex = largeIndex + 1;           //index of the larger child

    if (list[low] > list[largeIndex])                break; //the subtree is already in a heap
    else
    {

            swap(list[low], list[largeIndex]);              //Line swap**

            low = largeIndex;                               //go to the subtree to further
                                                            //restore the heap
            largeIndex = 2 * low + 1;
    }                                                       //end else

}                                                           //end while




                                                    555

[PDF page 556; printed page 556]
The swap statement at the line marked Line swap** swaps the parent with the larger child. Because a
swap statement makes three item assignments to swap the contents of two variables, each time through
the loop three item assignments are made. The while loop moves the parent node to a place in the tree
so that the resulting subtree with the root node list[low] is in a heap. We can easily reduce the number of
assignments each time through the loop from three to one by first storing the root node in a temporary
location, say temp. Then each time through the loop, the larger child is compared with temp. If the larger
child is larger than temp, we move the larger child to the root node of the subtree under consideration.


Next, we describe the function heapify, which restores the heap in a subtree by making one item
assignment each time through the loop. The index of the root node of the list and the index of the last
element of the list are passed as parameters to this function.


template<class elemType>
void arrayListType<elemType>::heapify(int low, int high)
{
       int largeIndex;


       elemType temp = list[low];                               //copy the root node of the subtree
       largeIndex = 2 * low + 1;                                //index of the left child
       while (largeIndex <= high)
       { if (largeIndex < high) if (list[largeIndex] < list[largeIndex + 1]) largeIndex =
               largeIndex + 1; //index of the largest child


               if (temp > list[largeIndex])       break;        //subtree is already in a heap
               else
               {

                         list[low] = list[largeIndex];          //move the larger child to the root

                         low = largeIndex;                      //go to the subtree to restore the heap
                         largeIndex = 2 * low + 1;
               }
       }                                                        //end while



                                                         556

[PDF page 557; printed page 557]
        list[low] = temp;                                       //insert temp into the tree, that is, list

}                                                               //end heapify
Next, we use the function heapify to implement the buildHeap function to convert the list into a heap.
template <class elemType>
void arrayListType<elemType>::buildHeap()
{ for (int index = length / 2 - 1; index >= 0; index--)
        heapify(index, length - 1);
}
We now describe heapsort.




                                                          557

[PDF page 558; printed page 558]
Suppose the list is in a heap. Consider the complete binary tree representing the list as given in Figure 8-
48(a).




                                               FIGURE 8-48 Heapsort



Because this is a heap, the root node is the largest element of the tree, that is, the largest element of the
list. So it must be moved to the end of the list. We swap the root node of the tree, that is, the first element
of the list, with the last node in the tree (which is the last element of the list). We then obtain the binary
tree as shown in Figure 8-48(b).


Because the largest element is now in its proper place, we consider the remaining elements of the list,
that is, elements list[0]...list[9]. The complete binary tree representing this list is no longer a heap, and so
wemust restore the heap in this portion of the complete binary tree. We use the function heapify to
restore the heap. A call to this function is as follows:
heapify(list, 0, 9);


We thus obtain the binary tree as shown in Figure 8-48(c).


We repeat this process for the complete binary tree corresponding to the list elements list[0]...list[9]. We
swap list[0] with list[9] and then restore the heap in the complete binary tree corresponding to the list
elements list[0]...list[8]. We continue this process.

The following C++ function describes this algorithm:
template <class elemType>
void arrayListType<elemType>::heapSort()
{
         elemType temp; buildHeap();
         for (int lastOutOfOrder = length - 1; lastOutOfOrder >= 0; lastOutOfOrder--)
         {
                temp = list[lastOutOfOrder];
                                                        558

[PDF page 559; printed page 559]
              list[lastOutOfOrder] = list[0]; list[0]
              = temp;
               heapify(0, lastOutOfOrder - 1);
       }//end for
}//end heapSort


We leave as an exercise for you to write a program to test heapsort;
8.4.6 Analysis: Heapsort




                                                        559
```
