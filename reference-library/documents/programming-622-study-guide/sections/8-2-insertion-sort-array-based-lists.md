---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "502-515"
printed_pages: "502-515"
section: "Insertion Sort: Array-Based Lists"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "list"
  - "figure"
  - "element"
  - "sort"
  - "shown"
  - "proper"
  - "first"
  - "firstoutoforder"
  - "insertion"
  - "elements"
  - "sorted"
  - "unsorted"
---

# Insertion Sort: Array-Based Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 502-515 | printed pages 502-515

Related sections: [Heapsort: Array-Based Lists](8-5-heapsort-array-based-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Item Insertion and Deletion](3-2-item-insertion-and-deletion.md), [Types of Relationships](../../information-systems-622-study-guide/sections/3-5-2-types-of-relationships.md), [WEB-BASED DESIGN](../../information-systems-622-study-guide/sections/3-3-web-based-design.md), [Binary Search](7-4-binary-search.md)

## Extracted Text

```text
[PDF page 502; printed page 502]
8.2 Insertion Sort: Array-Based Lists


 The previous section described and analyzed the selection sort algorithm. It was shown that if n = 1000,
 the number of key comparisons is approximately 500,000, which is quite high. This section describes the
 sorting algorithm called insertion sort, which tries to improve—that is, reduce—the number of key
 comparisons.


 Insertion sort sorts the list by moving each element to its proper place. Consider the list given in Figure 8-
 4.



                                                      FIGURE 8-4 list



 The length of the list is 8. In this list, the elements list[0], list[1], list[2], and list[3] are in order. That is,
 list[0]...list[3] is sorted, as shown in Figure 8-5(a).




                             FIGURE 8-5 list elements while moving list[4] to its proper place



 Next, we consider the element list[4], the first element of the unsorted list. Because list[4] < list[3], we
 need to move the element list[4] to its proper location. It follows that element list[4] should be moved to
 list[2], as shown in Figure 8-5(b). To move list[4] into list[2], first we copy list[4] into temp, a temporary
 memory space—see Figure 8-5(c).


 Next, we copy list[3] into list[4], and then list[2] into list[3], as shown in Figure 8-5(d). After copying list[3]
 into list[4] and list[2] into list[3], the list is as shown in Figure 8-5(e). Next we copy temp into list[2]. Figure
 8-5(f) shows the resulting list.


 Now list[0]...list[4] is sorted and list[5]...list[7] is unsorted. We repeat this process on the resulting list by
                                                           502

[PDF page 503; printed page 503]
moving the first element of the unsorted list into the sorted list in the proper place.


From this discussion, we see that during the sorting phase the array containing the list is divided into two
sublists, upper and lower. Elements in the upper sublist are sorted; elements in the lower sublist are to
be moved to the upper sublist in their proper places one at a time. We use an index—say,
firstOutOfOrder—to point to the first element in the lower sublist; that is, firstOutOfOrder gives the index
of the first element in the unsorted portion of the array. Initially, firstOutOfOrder is initialized to 1.


This discussion translates into the following pseudoalgorithm:




                                                      503

[PDF page 504; printed page 504]
        for (firstOutOfOrder = 1; firstOutOfOrder < length; firstOutOfOrder++) if
                (list[firstOutOfOrder] is less than list[firstOutOfOrder - 1])
                {
                        copy list[firstOutOfOrder] into temp


                        initialize location to firstOutOfOrder do
                        {
                                     a. move list[location - 1] one array slot down
                                     b. decrement location by 1 to consider the next
                                         element sorted of the portion of the array
                        }
                        while (location > 0 && the element in the upper list at location
                        - 1 is greater than temp)
                }
        copy temp into list[location]


The length of this list is 8; that is, length = 8. We initialize firstOutOfOrder to 1 (see Figure 8-6).




                                            FIGURE 8-6 firstOutOfOrder = 1



Now list[firstOutOfOrder] = 7, list[firstOutOfOrder - 1] = 13 and 7 < 13, and the expression in the if
statement evaluates to true, so we execute the body of the if statement.


                        temp = list[firstOutOfOrder] = 7 location
                        = firstOutOfOrder = 1
Next, we execute the do...while loop.
                        list[1] = list[0] = 13            (copy list[0] into list[1])
                        location = 0                      (decrement location)


The do...while loop terminates because location = 0. We copy temp into list[location]—that is, into list[0].

                                                        504

[PDF page 505; printed page 505]
Figure 8-7 shows the resulting list.




                               FIGURE 8-7 list after the first iteration of insertion sort



Now suppose that we have the list given in Figure 8-8(a).




                                                         505

[PDF page 506; printed page 506]
                            FIGURE 8-8 list elements while moving list[4] to its proper place



Here list[0]...list[3], or the elements list[0], list[1], list[2], and list[3], are in order. Now firstOutOfOrder =
4. Because list[4] < list[3], the element list[4], which is 12, needs to be moved to its proper location. As
before:


temp = list[firstOutOfOrder] = 12
location = firstOutOfOrder = 4


First, we copy list[3] into list[4] and decrement location by 1. Then we copy list[2] into list[3] and again
decrement location by 1. Now the value of location is 2. At this point, the list is as shown in Figure 88(b).


Next, because list[1] < temp, the do...while loop terminates. At this point, location is 2, so we copy temp
into list[2]. That is, list[2] = temp = 12. Figure 8-8(c) shows the resulting list.


Suppose that we have the list given in Figure 8-9.




                                 FIGURE 8-9 First out-of-order element is at position 5



Here list[0]...list[4], or the elements list[0], list[1], list[2], list[3], and list[4], are in order. Now
firstOutOfOrder = 5. Because list[5] > list[4], the if statement evaluates to false. So the body of the if
statement does not execute and the next iteration of the for loop, if any, takes place. Note that this is the
case when the firstOutOfOrder element is already at the proper place. So we simply need to advance
firstOutOfOrder to the next array element, if any.

                                                          506

[PDF page 507; printed page 507]
We can repeat this process for the remaining elements of list to sort list.
The following C++ function implements the previous algorithm:
template <class elemType>
void arrayListType<elemType>::insertionSort()
{
       int firstOutOfOrder, location; elemType
       temp;




                                                    507

[PDF page 508; printed page 508]
        for (firstOutOfOrder = 1; firstOutOfOrder < length; firstOutOfOrder++) if
                (list[firstOutOfOrder] < list[firstOutOfOrder - 1])
                {
                         temp = list[firstOutOfOrder];
                         location = firstOutOfOrder;


                         do
                         { list[location] = list[location - 1];
                                 location--;
                         }
                         while (location > 0 && list[location - 1] > temp);


                         list[location] = temp;
                }
} //end insertionSort


8.2     Insertion Sort: Linked List-Based Lists


Insertion sort can also be applied to linked lists. Therefore, this section describes insertion sort for linked
lists. Consider the linked list shown in Figure 8-10.




                                                 FIGURE 8-10 Linked list



In Figure 8-10, first is a pointer to the first node of the linked list.


If the list is stored in an array, we can traverse the list in either direction using an index variable. However,
if the list is stored in a linked list, we can traverse the list in only one direction starting at the first node
because the links are only in one direction, as shown in Figure 8-10. Therefore, in the case of a linked list,
to find the location of the node to be inserted, we do the following. Suppose that firstOutOfOrder is a
pointer to the node that is to be moved to its proper location, and lastInOrder is a pointer to the last node
of the sorted portion of the list. For example, see the linked list in Figure 8-11.
                                                          508

[PDF page 509; printed page 509]
(We assume that the nodes are in the usual info-link form as described in Chapter 3.)




                        FIGURE 8-11 Linked list and pointers lastInOrder and firstOutOfOrder



First, we compare the info of firstOutOfOrder with the info of the first node. If the info of firstOutOfOrder
is smaller than the info of first, then the node firstOutOfOrder is to be moved before the first node of the
list; otherwise, we search the list starting at the second node to find the location where to move
firstOutOfOrder. As usual, we search the list using two pointers, for example current and trailCurrent. The
pointer trailCurrent points to the node just before current. In this case, the node firstOutOfOrder is to be




                                                       509

[PDF page 510; printed page 510]
moved between trailCurrent and current. Of course, we also handle any special cases such as an empty
list, a list with only one node, or a list in which the node firstOutOfOrder is already in the proper place.
This discussion translates into the following algorithm:


       if (firstOutOfOrder->info is less than first->info)
       move firstOutOfOrder before first else
       { set trailCurrent to first
               set current to the second node in the list first->link;


               //search the list
               while (current->info is less than firstOutOfOrder->info)
               {
                       advance trailCurrent;
                       advance current;
               }


               if (current is not equal to firstOutOfOrder)
               { //insert firstOutOfOrder between current and trailCurrent
                       lastInOrder->link = firstOutOfOrder->link; firstOutOfOrder->link
                       = current;
                       trailCurrent->link = firstOutOfOrder;
               }
               else //firstOutOfOrder is already at the first place lastInOrder
                       = lastInOrder->link;
       }


Let us illustrate this algorithm on the list shown in Figure 8-12. We consider several cases.




                         FIGURE 8-12 Linked list and pointers lastInOrder and firstOutOfOrder




                                                        510

[PDF page 511; printed page 511]
Case 1: Because firstOutOfOrder->info is less than first->info, the node firstOutOfOrder is to be moved
before first. So we adjust the necessary links, and Figure 8-13 shows the resulting list.




                      FIGURE 8-13 Linked list after moving the node with info 8 to the beginning



Case 2: Consider the list shown in Figure 8-14.




                                                        511

[PDF page 512; printed page 512]
                         FIGURE 8-14 Linked list and pointers lastInOrder and firstOutOfOrder



Because firstOutOfOrder->info is greater than first->info, we search the list to find the place where
firstOutOfOrder is to be moved. As explained previously, we use the pointers trailCurrent and current to
traverse the list. For this list, these pointers end up at the nodes as shown in Figure 8-15.




                             FIGURE 8-15 Linked list and pointers trailCurrent and current



Because current is the same as firstOutOfOrder, the node firstOutOfOrder is in the right place. So no
adjustment of the links is necessary.


Case 3: Consider the list in Figure 8-16.




                         FIGURE 8-16 Linked list and pointers lastInOrder and firstOutOfOrder



Because firstOutOfOrder->info is greater than first->info, we search the list to find the place where
firstOutOfOrder is to be moved. As in Case 2, we use the pointers trailCurrent and current to traverse the
list. For this list, these pointers end up at the nodes as shown in Figure 8-17.




                             FIGURE 8-17 Linked list and pointers trailCurrent and current



Now, firstOutOfOrder is to be moved between trailCurrent and current. So we adjust the necessary links
and obtain the list as shown in Figure 8-18.




                                                         512

[PDF page 513; printed page 513]
               FIGURE 8-18 Linked list after moving firstOutOfOrder between trailCurrent and current

We now write the C++ function, linkedInsertionSort, to implement the previous algorithm:
template <class elemType>
void unorderedLinkedList<elemType>::linkedInsertionSort()
{




                                                       513

[PDF page 514; printed page 514]
nodeType<elemType> *lastInOrder; nodeType<elemType>
*firstOutOfOrder; nodeType<elemType> *current;
nodeType<elemType> *trailCurrent; lastInOrder = first; if
(first == NULL) cerr << "Cannot sort an empty list." <<
endl; else if (first->link == NULL) cout << "The list is of
length 1. "<< "It is already in order." << endl; else
        while (lastInOrder->link != NULL)
        {
                firstOutOfOrder = lastInOrder->link;
                if (firstOutOfOrder->info < first->info)
                {
                        lastInOrder->link = firstOutOfOrder->link;
                        firstOutOfOrder->link = first; first =
                        firstOutOfOrder;

                }
                else


                { trailCurrent = first;
                        current = first->link;


                        while (current->info < firstOutOfOrder->info)
                        { trailCurrent = current;
                                 current = current->link;
                        }


                        if (current != firstOutOfOrder)
                        {
                                 lastInOrder->link = firstOutOfOrder->link; firstOutOfOrder->link
                                 = current;
                                 trailCurrent->link = firstOutOfOrder;
                        }
                        else lastInOrder = lastInOrder->link;
                }
                                                 514

[PDF page 515; printed page 515]
               } //end while
        } //end linkedInsertionSort


We leave it as exercise for you to write a program to test insertion sort. See Programming Exercises 2 and
3 at the end of this chapter.


8.2.1 Analysis: Insertion Sort


Suppose that the list is of length n. If the list is sorted, the number of comparisons is (n – 1) and the number
of item assignments is 0. This is the best case. (See Exercise 15 at the end of this chapter.) Now suppose
that the list is sorted, but in the reverse order. In this case, it can be checked that the number of
comparisons is (1/2)(n2 – n) and the number of item assignments is (1/2)(n2 +3n) – 2. This is the worst
case. (See Exercise 14 at the end of this chapter.)
Table 8-1 summarizes the average-case behavior of selection and insertion sort.


              TABLE 8-1: Average-case behavior of the selection sort and insertion sort for a list of length n




                                                           515
```
