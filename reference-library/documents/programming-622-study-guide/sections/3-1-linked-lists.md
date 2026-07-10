---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "118-124"
printed_pages: "118-124"
section: "Linked Lists"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "linked"
  - "lists"
  - "list"
  - "node"
  - "you"
  - "called"
  - "array"
  - "components"
  - "learn"
  - "become"
  - "operations"
  - "nodes"
---

# Linked Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 118-124 | printed pages 118-124

Related sections: [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md), [Unordered Linked Lists](3-5-unordered-linked-lists.md), [Linked List as an ADT](3-3-linked-list-as-an-adt.md)

## Extracted Text

```text
[PDF page 118; printed page 118]
3    TOPIC 3: LINKED LISTS
              LEARNING OUTCOMES:
              After studying this topic you should be able to:

                 •   Learn about linked lists
                 •   Become aware of the basic properties of linked lists
                 •   Explore the insertion and deletion operations on linked lists
                 •   Discover how to build and manipulate a linked list
                 •   Learn how to construct a doubly linked list
                 •   Discover how to use the STL container list
                 •   Learn about linked lists with header and trailer nodes
                 •   Become aware of circular linked lists




 You have already seen how data is organized and processed sequentially using an array, called a sequential
 list. You have performed several operations on sequential lists, such as sorting, inserting, deleting, and
 searching. You also found that if data is not sorted, searching for an item in the list can be very time
 consuming, especially with large lists. Once the data is sorted, you can use a binary search and improve
 the search algorithm. However, in this case, insertion and deletion become time consuming, especially
 with large lists because these operations require data movement. Also, because the array size must be
 fixed during execution, new items can be added only if there is room. Thus, there are limitations when
 you organize data in an array.


 This chapter helps you to overcome some of these problems. This chapter uses pointers to organize and
 process data in lists, called linked lists. Recall that when data is stored in an array, memory for the
 components of the array is contiguous—that is, the blocks are allocated one after the other.However, as
 we will see, the components (called nodes) of a linked list need not be contiguous.


3.1 Linked Lists


 A linked list is a collection of components, called nodes. Every node (except the last node) contains the
 address of the next node. Thus, every node in a linked list has two components: one to store the relevant

                                                   118

[PDF page 119; printed page 119]
information (that is, data) and one to store the address, called the link, of the next node in the list. The
address of the first node in the list is stored in a separate location, called the head or first. Figure 3-1 is a
pictorial representation of a node.



                                           FIGURE 3-1 Structure of a node



Linked list: A list of items, called nodes, in which the order of the nodes is determined by the address,
called the link, stored in each node.


The list in Figure 3-2 is an example of a linked list.




                                                         119

[PDF page 120; printed page 120]
                                                                                    FIGURE
                                              3-2 Linked list

The arrow in each node indicates that the address of the node to which it is pointing is stored in that node.
The down arrow in the last node indicates that this link field is NULL.


For a better understanding of this notation, suppose that the first node is at memory location 1200, and
the second node is at memory location 1575, see Figure 3-3.




                                   FIGURE 3-3 Linked list and values of the links



The value of the head is 1200, the data part of the first node is 45, and the link component of the first
node contains 1575, the address of the second node. If no confusion arises, we will use the arrow notation
whenever we draw the figure of a linked list.


For simplicity and for the ease of understanding and clarity, Figures 3-3 through 3-5 use decimal integers
as the values of memory addresses. However, in computer memory the memory addresses are in binary.


Because each node of a linked list has two components, we need to declare each node as a class or struct.
The data type of each node depends on the specific application—that is, what kind of data is being
processed. However, the link component of each node is a pointer. The data type of this pointer variable
is the node type itself. For the previous linked list, the definition of the node is as follows. (Suppose that
the data type is int.)


                         struct nodeType
                         {
                               int info; nodeType
                               *link;
                         };


The variable declaration is as follows:


                         nodeType *head;
                                                       120

[PDF page 121; printed page 121]
                                           FIGURE 3-4 Linked list with four nodes



3.1.1 Linked Lists: Some Properties


 To better understand the concept of a linked list and a node, some important properties of linked lists are
 described next.


 Consider the linked list in Figure 3-4.




                                                           121

[PDF page 122; printed page 122]
This linked list has four nodes. The address of the first node is stored in the pointer head. Each node has
two components: info, to store the info, and link, to store the address of the next node. For simplicity, we
assume that info is of type int.


Suppose that the first node is at location 2000, the second node is at location 2800, the third node is at
location 1500, and the fourth node is at location 3600. Table 3-1 shows the values of head and some other
nodes in the list shown in Figure 3-4.


                    TABLE 3-1: Values of head and some of the nodes of the linked list in Figure 3-4




Suppose that current is a pointer of the same type as the pointer head. Then the statement
current = head;


copies the value of head into current. Now consider the following statement:
current = current->link;


This statement copies the value of current->link, which is 2800, into current. Therefore, after this
statement executes, current points to the second node in the list. (When working with linked lists, we
typically use these types of statements to advance a pointer to the next node in the list.) See Figure 3-5.




                         FIGURE 3-5 List after the statement current = current->link; executes



Table 3-2 shows the values of current, head, and some other nodes in Figure 3-5.




                                                         122

[PDF page 123; printed page 123]
                 TABLE 3-2: Values of current, head, and some of the nodes of the linked list in Figure 3-5




 From now on, when working with linked lists, we will use only the arrow notation.


3.1.2 Traversing a Linked List


 The basic operations of a linked list are as follows: Search the list to determine whether a particular item
 is in the list, insert an item in the list, and delete an item from the list. These operations require the list to
 be traversed. That is, given a pointer to the first node of the list, we must step through the nodes of the
 list.


 Suppose that the pointer head points to the first node in the list, and the link of the last node is NULL. We
 cannot use the pointer head to traverse the list because if we use the head to traverse the list, we would
 lose the nodes of the list. This problem occurs because the links are in only one direction. The pointer
 head contains the address of the first node, the first node contains the address of the second node, the
 second node contains the address of the third node, and so on. If we move head to the second node, the
 first node is lost (unless we save a pointer to this node). If we keep advancing head to the next node, we
 will lose all the nodes of the list (unless we save a pointer to each node before advancing head, which is
 impractical because it would require additional computer time and memory space to maintain the list).


 Therefore, we always want head to point to the first node. It now follows that we must traverse the list
 using another pointer of the same type. Suppose that current is a pointer of the same type as head. The

                                                           123

[PDF page 124; printed page 124]
following code traverses the list:
                       current = head;


                       while (current != NULL)
                       {
                               //Process current current
                               = current->link; }
For example, suppose that head points to a linked list of numbers. The following code outputs the data
stored in each node:




                                                    124
```
