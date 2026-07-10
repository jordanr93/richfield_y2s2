---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "139-141"
printed_pages: "139-141"
section: "Linked List as an ADT"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "linked"
  - "lists"
  - "item"
  - "elements"
  - "adt"
  - "basic"
  - "end"
  - "operations"
  - "insert"
  - "sorted"
  - "order"
---

# Linked List as an ADT

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 139-141 | printed pages 139-141

Related sections: [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Insertion into an Ordered List](7-5-insertion-into-an-ordered-list.md), [Linked List Iterators](3-4-linked-list-iterators.md), [Linked Lists](3-1-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md)

## Extracted Text

```text
[PDF page 139; printed page 139]
3.3 Linked List as an ADT


 The previous sections taught you the basic properties of linked lists and how to construct and manipulate
 linked lists. Because a linked list is a very important data structure, rather than discuss specific lists such
 as a list of integers or a list of strings, this section discusses linked lists as an abstract data type (ADT).
 Using templates, this section gives a generic definition of linked lists, which is then used in the next section
 and later in this book. The programming example at the end of this chapter also uses this generic definition
 of linked lists.


 The basic operations on linked lists are as follows:
1. Initialize the list.
2. Determine whether the list is empty.
3. Print the list.
4. Find the length of the list.
5. Destroy the list.
                                                        139

[PDF page 140; printed page 140]
6. Retrieve the info contained in the first node.
7. Retrieve the info contained in the last node.
8. Search the list for a given item.
9. Insert an item in the list.
10. Delete an item from the list.
11. Make a copy of the linked list.


In general, there are two types of linked lists—sorted lists, whose elements are arranged according to
some criteria, and unsorted lists, whose elements are in no particular order. The algorithms to implement
the operations search, insert, and remove slightly differ for sorted and unsorted lists. Therefore, we will
define the class linkedListType to implement the basic operations on a linked list as an abstract class.Using
the principal of inheritance, we derive two classes— unorderedLinkedList and orderedLinkedList—from
the class linkedListType.


Objects of the class unorderedLinkedList would arrange list elements in no particular order, that is, these
lists may not be sorted. On the other hand, objects of the class orderedLinkedList would arrange elements




                                                    140

[PDF page 141; printed page 141]
 according to some comparison criteria, usually less than or equal to. That is, these lists will be in ascending
 order. Moreover, after inserting an element into or removing an element from an ordered list, the
 resulting list will be ordered.


 If a linked list is unordered, we can insert a new item at either the end or the beginning. Furthermore, you
 can build such a list in either a forward manner or a backward manner. The function buildListForward
 inserts the new item at the end, whereas the function buildListBackward inserts the new item at the
 beginning. To accommodate both operations, we will write two functions: insertFirst to insert the new
 item at the beginning of the list and insertLast to insert the new item at the end of the list. Also, to make
 the algorithms more efficient, we will use two pointers in the list: first, which points to the first node in
 the list, and last, which points to the last node in the list.


3.3.1 Structure of Linked List Nodes


 Recall that each node of a linked list must store the data as well as the address for the next node in the
 list (except the last node of the list). Therefore, the node has two instance variables. To simplify operations
 such as insert and delete, we define the class to implement the node of a linked list as a struct. The
 definition of the struct nodeType is as follows:


                         //Definition of the node template
                         <class Type>
                         struct nodeType
                         {
                                   Type info;
                                   nodeType<Type> *link;
                         };


3.3.2 Member Variables of the class linkedListType


 To maintain a linked list, we use two pointers—first and last. The pointer first points to the first node in
 the list, and last points to the last node in the list. We also keep a count of the number of nodes in the list.
 Therefore, the class linkedListType has three instance variables, as follows:
 protected:
                                                        141
```
