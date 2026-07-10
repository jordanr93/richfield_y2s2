---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "328-329"
printed_pages: "328-329"
section: "Stack as Derived from the class unorderedLinkedList"
chapter: "TOPIC 5: STACKS"
keywords:
  - "type"
  - "unorderedlinkedlist"
  - "linkedstacktype"
  - "derived"
  - "const"
  - "stack"
  - "functions"
  - "linkedlisttype"
  - "void"
  - "implement"
  - "operations"
  - "initializestack"
---

# Stack as Derived from the class unorderedLinkedList

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 328-329 | printed pages 328-329

Related sections: [STL class stack](5-7-stl-class-stack.md), [Deleting Tables from Databases Using The DROP TABLE Statement](../../internet-programming-622-study-guide/sections/4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](../../internet-programming-622-study-guide/sections/4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [THE EVOLUTION OF SYSTEM ARCHITECTURE](../../information-systems-622-study-guide/sections/4-2-the-evolution-of-system-architecture.md), [Understand the Business](../../information-systems-622-study-guide/sections/2-3-1-understand-the-business.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 328; printed page 328]
5.3 Stack as Derived from the class unorderedLinkedList


 If we compare the push function of the stack with the insertFirst function discussed for general lists in
 Chapter 3, we see that the algorithms to implement these operations are similar. A comparison of other
 functions, such as initializeStack and nitializeList, isEmptyList and isEmptyStack, and so on, suggests that
 the class linkedStackType can be derived from the class linkedListType. Moreover, the functions pop and
 isFullStack can be implemented as in the previous section. Note that the class linkedListType is an abstract
 class and does not implement all the operations. However, the class unorderedLinkedList is derived from
 the the class linkedListType and provides the definitions of the abstract functions of the class
 linkedListType. Therefore, we can derive the class linkedStackType from the class unorderedLinkedList.


 Next, we define the class linkedStackType that is derived from the class unorderedLinkedList. The
 definitions of the functions to implement the stack operations are also given.


#include <iostream>
 #include
 "unorderedLinkedList.h" using
 namespace std; template <class
 Type>
 class linkedStackType: public unorderedLinkedList<Type>
 { public:
                void initializeStack(); bool
                                                    328

[PDF page 329; printed page 329]
               isEmptyStack() const; bool
               isFullStack() const;
               void push(const Type& newItem);
               Type top() const;
               void pop();
};


template <class Type>
void linkedStackType<Type>::initializeStack()
{ unorderedLinkedList<Type>::initializeList();
}


template <class Type>
bool linkedStackType<Type>::isEmptyStack() const
{




                                                   329
```
