---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "220-223"
printed_pages: "220-223"
section: "Linked Lists with Header and Trailer Nodes"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "linked"
  - "header"
  - "trailer"
  - "nodes"
  - "node"
  - "last"
  - "set"
  - "value"
  - "item"
  - "lists"
  - "first"
---

# Linked Lists with Header and Trailer Nodes

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 220-223 | printed pages 220-223

Related sections: [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Linked Lists](3-1-linked-lists.md), [Unordered Linked Lists](3-5-unordered-linked-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md), [Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward](5-6-removing-recursion-nonrecursive-algorithm-to-print-a-linked-list-backward.md)

## Extracted Text

```text
[PDF page 220; printed page 220]
3.9 Linked Lists with Header and Trailer Nodes
                                                          220

[PDF page 221; printed page 221]
When inserting and deleting items from a linked list (especially an ordered list), we saw that there are
special cases, such as inserting (or deleting) at the beginning (the first node) of the list or in an empty list.
These cases needed to be handled separately. As a result, the insertion and deletion algorithms were not
as simple and straightforward as we would like.One way to simplify these algorithms is to never insert an
item before the first or last item and to never delete the first node. Next we discuss how to accomplish
this.


Suppose the nodes of a list are in order; that is, they are arranged with respect to a given key. Suppose it
is possible for us to determine what the smallest and largest keys are in the given data set. In this case,
we can set up a node, called the header, at the beginning of the list containing a value smaller than the
smallest value in the data set. Similarly, we can set up a node, called the trailer, at the end of the list
containing a value larger than the largest value in the data set. These two nodes, header and trailer, serve
merely to simplify the insertion and deletion algorithms and are not part of the actual list. The actual list
is between these two nodes.




                                                      221

[PDF page 222; printed page 222]
For example, suppose the data are ordered according to the last name. Further, assume that the last name
is a string of at most 8 characters. The smallest last name is larger than the string "A" and the largest last
name is smaller than the string "zzzzzzzz". We can set up the header node with the value "A" and the
trailer node with the value "zzzzzzzz". Figure 3-33 shows an empty and a nonempty linked list with header
and trailer nodes.




                                 FIGURE 3-33 Linked list with header and trailer nodes



As before, the usual operations on lists with header and trailer nodes are as follows: Initialize the list (to
an empty state), destroy the list, print the list, find the length of the list, search the list for a given item,
insert an item in the list, delete an item from the list, and copy the list.


We leave it as an exercise for you to design a class to implement a linked list with header and trailer nodes.


3.6     Circular Linked Lists


A linked list in which the last node points to the first node is called a circular linked list. Figure 3-34 shows
various circular linked lists.




                                           FIGURE 3-34 Circular linked lists



In a circular linked list with more than one node, as in Figure 3-34(c), it is convenient to make the pointer
                                                    222

[PDF page 223; printed page 223]
first point to the last node of the list. Then by using first you can access both the first and the last node of
the list. For example, first points to the last node and first->link points to the first node.


As before, the usual operations on a circular list are as follows: Initialize the list (to an empty state),
determine if the list is empty, destroy the list, print the list, find the length of the list, search the list for a
given item, insert an item in the list, delete an item from the list, and copy the list.


We leave it as exercise for you to design a class to implement a sorted circular linked list.




                                                       223
```
