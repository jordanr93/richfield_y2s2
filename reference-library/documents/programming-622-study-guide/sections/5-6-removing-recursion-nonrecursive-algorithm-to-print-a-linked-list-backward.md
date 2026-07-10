---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "348-351"
printed_pages: "348-351"
section: "Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward"
chapter: "TOPIC 5: STACKS"
keywords:
  - "list"
  - "node"
  - "linked"
  - "current"
  - "first"
  - "line"
  - "stack"
  - "print"
  - "backward"
  - "figure"
  - "info"
  - "last"
---

# Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 348-351 | printed pages 348-351

Related sections: [Linked List Iterators](3-4-linked-list-iterators.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Unordered Linked Lists](3-5-unordered-linked-lists.md), [Linked List as an ADT](3-3-linked-list-as-an-adt.md)

## Extracted Text

```text
[PDF page 348; printed page 348]
5.6 Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward


                                                    348

[PDF page 349; printed page 349]
In this section, you will learn how a stack can be used to design a nonrecursive algorithm to print a linked
list backward. Consider the linked list shown in Figure 5-16.



                                             FIGURE 5-16 Linked list



To print the list backward, first we need to get to the last node of the list, which we can do by traversing
the linked list starting at the first node. However, once we are at the last node, how do we get back to the
previous node, especially given that links go in only one direction? You can again traverse the linked list
with the appropriate loop termination condition, but this approach might waste a considerable amount
of computer time, especially if the list is very large. Moreover, if we do this for every node in the list, the
program might execute very slowly. Next, we show how to use a stack effectively to print the list backward.




                                                      349

[PDF page 350; printed page 350]
After printing the info of a particular node, we need to move to the node immediately behind this node.
For example, after printing 15, we need to move to the node with info 10. Thus, while initially traversing
the list to move to the last node, we must save a pointer to each node. For example, for the list in Figure
5-16, we must save a pointer to each of the nodes with info 5 and 10. After printing 15, we go back to the
node with info 10; after printing 10, we go back to the node with info 5. From this, it follows that we must
save pointers to each node in a stack, so as to implement the Last In First Out principle.


Because the number of nodes in a linked list is usually not known, we will use the linked implementation
of a stack. Suppose that stack is an object of type linkedListType, and current is a pointer of the same type
as the pointer first. Consider the following statements:


current = first;      //Line 1 while (current != NULL)         //Line 2
{       //Line 3 stack.push(current);             //Line 4 current =
        current->link;       //Line 5
}                                                              //Line 6


After the statement in Line 1 executes, current points to the first node. (See Figure 5-17)




                                 FIGURE 5-17 List after the statement current = first; executes



Because current is not NULL, the statements in Lines 4 and 5 execute. (See Figure 5-18.)




                   FIGURE 5-18 List and stack after the statements stack.push(current); and current = current-
                                                         >link; execute



Because current is not NULL, statements in Lines 4 and 5 execute. In fact, statements in Lines 4 and 5
execute until current beomes NULL. When current is NULL, Figure 5-19 results.


                                                             350

[PDF page 351; printed page 351]
351
```
