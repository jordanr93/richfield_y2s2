---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "532-546"
printed_pages: "532-546"
section: "Mergesort: Linked List-Based Lists"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "mergesort"
  - "list"
  - "sublists"
  - "sublist"
  - "two"
  - "sorted"
  - "lists"
  - "quicksort"
  - "first"
  - "linked"
  - "follows"
  - "second"
---

# Mergesort: Linked List-Based Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 532-546 | printed pages 532-546

Related sections: [Linked List as an ADT](3-3-linked-list-as-an-adt.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Heapsort: Array-Based Lists](8-5-heapsort-array-based-lists.md), [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Linked Lists](3-1-linked-lists.md)

## Extracted Text

```text
[PDF page 532; printed page 532]
8.4 Mergesort: Linked List-Based Lists
 In the previous section, we described quicksort and stated that the average-case behaviour of quicksort is
 O(nlog2n). However, the worst-case behavior of quicksort is O(n2). This section describes a sorting
 algorithm whose behavior is always O(nlog2n).


 Like quicksort, mergesort uses the divide-and-conquer technique to sort a list. Mergesort also partitions
 the list into two sublists, sorts the sublists, and then combines the sorted sublists into one sorted list. This
 section describes mergesort for linked list-based lists.


 We leave it for you to develop mergesort for array-based lists, which can be done by using the techniques
 described for linked lists.


 Mergesort and quicksort differ in how they partition the list. As discussed earlier, quicksort first selects an
 element in the list, called pivot, and then partitions the list so that the elements in one sublist are less
 than pivot and the elements in the other sublist are greater than or equal to pivot. By contrast, mergesort
 divides the list into two sublists of nearly equal size. For example, consider the list whose elements are as
 follows:
 list: 35 28 18 45 62 48 30 38


 Mergesort partitions this list into two sublists as follows:
                                                         532

[PDF page 533; printed page 533]
                      first sublist: 35 28 18 45
                      second sublist: 62 48 30 38


The two sublists are sorted using the same algorithm (that is, mergesort) used on the original list. Suppose
that we have sorted the two sublists. That is, suppose that the lists are now as follows:


                      first sublist: 18 28 35 45 second
                       sublist: 30 38 48 62
Next, mergesort combines, that is, merges, the two sorted sublists into one sorted list.
Figure 8-32 further illustrates the mergesort process.




                                                    533

[PDF page 534; printed page 534]
                                          FIGURE 8-32 Mergesort algorithm



From Figure 8-32, it is clear that in mergesort, most of the sorting work is done in merging the sorted
sublists.


The general algorithm for mergesort is as follows:


                if the list is of a size greater than 1
                {
                        1. Divide the list into two sublists.
                        2. Mergesort the first sublist.
                        3. Mergesort the second sublist.
                        4. Merge the first sublist and the second sublist.
                }


As remarked previously, after dividing the list into two sublists—the first sublist and the second sublist—
these two sublists are sorted using mergesort. In other words, we use recursion to implement mergesort.


We next describe the necessary algorithm to:

            Divide the list into two sublists of nearly equal size.
        Mergesort both sublists.

                                                          534

[PDF page 535; printed page 535]
        Merge the sorted sublists.


8.4.2 Divide


Because data is stored in a linked list, we do not know the length of the list. Furthermore, a linked list is
not a random access data structure. Therefore, to divide the list into two sublists, we need to find the
middle node of the list.


Consider the list in Figure 8-33.




                                                    535

[PDF page 536; printed page 536]
                                          FIGURE 8-33 Unsorted linked list



To find the middle of the list, we traverse the list with two pointers—say, middle and current. The pointer
middle is initialized to the first node of the list. Because this list has more than two nodes, we initialize
current to the third node. (Recall that we sort the list only if it has more than one element because a list
of size 1 is already sorted. Also, if the list has only two nodes, we set current to NULL.) Consider the list
shown in Figure 8-34.




                              FIGURE 8-34 middle and current before traversing the list



Every time we advance middle by one node, we advance current by one node. After advancing current by
one node, if current is not NULL, we again advance current by one node. That is, for the most part, every
time middle advances by one node, current advances by two nodes. Eventually, current becomes NULL
and middle points to the last node of the first sublist. For example, for the list in Figure 8-34, when current
becomes NULL, middle points to the node with info 25 (see Figure 8-35).




                                     FIGURE 8-35 middle after traversing the list



It is now easy to divide the list into two sublists. First, using the link of middle, we assign a pointer to the
node following middle. Then we set the link of middle to NULL. Figure 8-36 shows the resulting sublists.




                                   FIGURE 8-36 List after dividing it into two lists

This discussion translates into the following C++ function, divideList:
template <class Type>
                                                        536

[PDF page 537; printed page 537]
void unorderedLinkedList<Type>::divideList(nodeType<Type>* first1,nodeType<Type>* &first2)
{

       nodeType<Type>* middle;
       nodeType<Type>* current;
       if (first1 == NULL)         first2        //list is empty
               = NULL;




                                               537

[PDF page 538; printed page 538]
       else if (first1->link == NULL) first2                //list has only one node
                  = NULL;
       else
       { middle = first1; current =
                  first1->link;

                  if (current != NULL)                      //list has more than two nodes
                          current = current->link; while
                  (current != NULL)
                  {
                          middle = middle->link; current
                          = current->link; if (current !=
                          NULL) current = current->link;

                  }                                         //end while

                  first2 = middle->link;                    //first2 points to the first
                                                            //node of the second sublist
                  middle->link = NULL;                      //set the link of the last node
                                                            //of the first sublist to NULL
       }                                                    //end else

}                                                           //end divideList


Now that we know how to divide a list into two sublists of nearly equal size, next we focus on merging the
sorted sublists. Recall that, in mergesort, most of the sorting work is done in merging the sorted sublists.


8.4.3 Merge


Once the sublists are sorted, the next step in mergesort is to merge the sorted sublists. Sorted sublists are
merged into a sorted list by comparing the elements of the sublists, and then adjusting the references of
the nodes with the smaller info. Let us illustrate this procedure on the sublists shown in Figure 8-37.
Suppose that first1 points to the first node of the first sublist, and first2 points to the first node of the
second sublist.




                                                        538

[PDF page 539; printed page 539]
                                     FIGURE 8-37 Sublists before merging

We first compare the info of the first node of each of the two sublists to determine the first node of the
merged list. We set newHead to point to the first node of the merged list. We also use the pointer
lastMerged to keep track of the last node of the merged list. The pointer of the first node of the sublist
with the smaller node then advances to the next node of that sublist. Figure 8-38 shows the sublist of
Figure 8-37 after setting newHead and lastMerged and advancing first1.




                                                    539

[PDF page 540; printed page 540]
                   FIGURE 8-38 Sublists after setting newHead and lastMerged and advancing first1



In Figure 8-38, first1 points to the first node of the first sublist that is yet to be merged with the second
sublist. So we again compare the nodes pointed to by first1 and first2, and adjust the link of the smaller
node and the last node of the merged list so as to move the smaller node to the end of the merged list.
For the sublists shown in Figure 8-38, after adjusting the necessary links, we have Figure 8-39.




               FIGURE 8-39 Merged list after putting the node with info 20 at the end of the merged list



We continue this process for the remaining elements of both sublists. Every time we move a node to the
merged list, we advance either first1 or first2 to the next node. Eventually, either first1 or first2 becomes
NULL. If first1 becomes NULL, the first sublist is exhausted first, so we attach the remaining nodes of the
second sublist at the end of the partially merged list. If first2 becomes NULL, the second sublist is
exhausted first, so we attach the remaining nodes of the first sublist at the end of the partially merged
list.


Following this discussion, we can now write the C++ function, mergeList, to merge the two sorted sublists.
The references (that is, addresses) of the first nodes of the sublists are passed as parameters to the
function mergeList.


template <class Type>
nodeType<Type>* unorderedLinkedList<Type>::mergeList
        (nodeType<Type>* first1,nodeType<Type>* first2)
{

                                                         540

[PDF page 541; printed page 541]
nodeType<Type> *lastSmall;    //pointer to the last node of the merged list
nodeType<Type> *newHead;      //pointer to the merged list
if (first1 == NULL)           //the first sublist is empty
        return first2;

else if (first2 == NULL)      //the second sublist is empty
        return first1;
else
{




                             541

[PDF page 542; printed page 542]
    if (first1->info < first2->info)            //compare the first nodes
    {
            newHead = first1; first1
            = first1->link;
            lastSmall = newHead;
    }
    else
    {
            newHead = first2; first2
            = first2->link; lastSmall
            = newHead;
    }


    while (first1 != NULL && first2 != NULL)
    {
            if (first1->info < first2->info)
            { lastSmall->link = first1; lastSmall
                     = lastSmall->link; first1 =
                     first1->link;
            }
            else
            { lastSmall->link = first2; lastSmall
                     = lastSmall->link; first2 =
                     first2->link;
            }
    }                                           //end while


    if (first1 == NULL)                         //first sublist is exhausted first lastSmall->link
            = first2;
    else                                        //second sublist is exhausted first
            lastSmall->link = first1;
    return newHead;
}
                                               542

[PDF page 543; printed page 543]
}                                                     //end mergeList


Finally, we write the recursive mergesort function, recMergeSort, which uses the divideList and mergeList
functions to sort a list. The reference of the first node of the list to be sorted is passed as a parameter to
the function recMergeSort.


template <class Type>
void unorderedLinkedList<Type>::recMergeSort(nodeType<Type>* &head)
{
       nodeType<Type> *otherHead;


        if (head != NULL)                             //if the list is not empty if (head-
               >link != NULL)                 //if the list has more than one node
               {




                                                    543

[PDF page 544; printed page 544]
                        divideList(head, otherHead);
                        recMergeSort(head);
                        recMergeSort(otherHead);
                        head = mergeList(head, otherHead);
               }
}                                                      //end recMergeSort


We can now give the definition of the function mergeSort, which should be included as a public member
of the class unorderedLinkedList. (Note that the functions divideList, merge, and recMergeSort can be
included as private members of the class unorderedLinkedList because these functions are used only to
implement the function mergeSort.) The function mergeSort calls the function recMergeSort and passes
first to this function. It also sets last to point to the last node of the list. The definition of the function
mergeSort is as follows:


template<class Type>
void unorderedLinkedList<Type>::mergeSort()
{
       recMergeSort(first);


       if (first == NULL)
       last = NULL; else
       {
               last = first;
               while (last->link != NULL) last
                        = last->link;
       }
}                                                      //end mergeSort


We leave it as an exercise for you to write a program to test mergesort.


8.4.4 Analysis: Mergesort



Suppose that L is a list of n elements, where n> 0. Suppose that n is a power of 2, that is, n = 2m for some
                                                    544

[PDF page 545; printed page 545]
nonnegative integer m, so that we can divide the list into two sublists, each of size n / 2 = 2m / 2 = 2m-1.
Moreover, each sublist can also be divided into two sublists of the same size. Each call to the function
recMergeSort makes two recursive calls to the function recMergeSort and each call divides the sublist into
two sublists of the same size. Suppose that m = 3, that is, n = 23 = 8. So the length of the original list is 8.
The first call to the function recMergeSort divides the original list into two sublists, each of size 4. The first
call then makes two recursive calls to the function recMergeSort. Each of these recursive calls divides each
sublist, of size 4, into two sublists, each of size 2. We now have 4 sublists, each of size 2. The next set of
recursive calls divides each sublist, of size 2, into sublists of size 1. So we now have 8 sublists, each of size
1. It follows that the exponent 3 in 23 indicates the level of the recursion, as shown in Figure 8-40.




                                                      545

[PDF page 546; printed page 546]
                      FIGURE 8-40 Levels of recursion levels to recMergeSort for a list of length 8



Let us consider the general case when n = 2m. Note that the number of recursion levels is m. Also, note
that to merge a sorted list of size s with a sorted list of size t, the maximum number of comparisons is s
+ t - 1.


Consider the function mergeList, which merges two sorted lists into a sorted list. Note that this is where
the actual work, comparisons and assignments, is done. The initial call to the function recMergeSort, at
level 0, produces two sublists, each of size n / 2. To merge these two lists, after they are sorted, the
maximum number of comparisons is n / 2 + n / 2 – 1 = n – 1 = O(n). At level 1, we merge two sets of sorted
lists, where each sublist is of size n / 4. To merge two sorted sublists, each of size n / 4, we need at most
n / 4 + n / 4 – 1 = n / 2 – 1 comparisons. Thus, at level 1 of the recursion, the number of comparisons is
2(n / 2 – 1) = n – 2 = O(n). In general, at level k of the recursion, there are a total of 2k calls to the function
mergeList. Each of these calls merge two sublists, each of size n / 2k+1, which requires a maximum of n /
2k - 1 comparisons. Thus, at level k of the recursion, the maximum number of comparisons is 2k (n / 2k - 1)
= n – 2k = O(n). It now follows that the maximum number of comparisons at each level of the recursion is
O(n). Because the number of levels of the recursion is m, the maximum number of comparisons made by
mergesort is O(nm). Now n = 2m implies that m = log2n. Hence, the maximum number of comparisons
made by mergesort is O(n log2n).


If W(n) denotes the number of key comparisons in the worst case to sort L, then W(n) = O(n log2n).


Let A(n) denote the number of key comparisons in the average case. In the average case, during the merge
process one of the sublists will exhaust before the other list. From this, it follows that on average merging
of two sorted sublists of combined size n, the number of comparisons will be less than n - 1. On average,
                                                  546
```
