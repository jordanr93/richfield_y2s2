---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "352-356"
printed_pages: "352-356"
section: "STL class stack"
chapter: "TOPIC 5: STACKS"
keywords:
  - "stack"
  - "line"
  - "intstack"
  - "stl"
  - "push"
  - "top"
  - "operations"
  - "container"
  - "pop"
  - "structure"
  - "provides"
  - "name"
---

# STL class stack

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 352-356 | printed pages 352-356

Related sections: [Stack as Derived from the class unorderedLinkedList](5-3-stack-as-derived-from-the-class-unorderedlinkedlist.md), [STL Sequence Container: list](3-8-stl-sequence-container-list.md), [Review Exercise](44-review-exercise.md), [Components of the STL](2-1-components-of-the-stl.md), [TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)](2-topic-2-standard-template-library-stl.md), [Ensure Data Security](../../big-data-iot-600-study-guide/sections/134-ensure-data-security.md)

## Extracted Text

```text
[PDF page 352; printed page 352]
5.7 STL class stack
                                                          352

[PDF page 353; printed page 353]
The previous sections discussed the data structure stack in detail. Because a stack is an important data
structure, the Standard Template Library (STL) provides a class to implement a stack in a program. The
name of the class defining a stack is stack; the name of the header file containing the definition of the
class stack is stack. The implementation of the class stack provided by the STL is similar to the one
described in this chapter. Table 5-3 defines the various operations supported by the stack container class.
                                    TABLE 5-3: Operations on a stack object




                                                     353

[PDF page 354; printed page 354]
In addition to the operations size, empty, push, top, and pop, the stack container class provides relational
operators to compare two stacks. For example, the relational operator == can be used to determine
whether two stacks are identical.


The program in Example 5-5 illustrates how to use the stack container class.
EXAMPLE 5-5
//*************************************************************
// This program illustrates how to use the STL class stack in //
a program.
//*************************************************************
#include <iostream>                                                          //Line 1 #include
<stack>                                                                      //Line 2 using
namespace std;                                                               //Line 3


int main()                                                                           //Line 4
{                                                                                    //Line 5 stack<int>
       intStack;                                                     //Line 6 intStack.push(16);
                                                              //Line 7 intStack.push(8);
                                                      //Line 8 intStack.push(20);
                                              //Line 9
       intStack.push(3);                                                             //Line 10


       cout << "Line 11: The top element of intStack: "
                                                  354

[PDF page 355; printed page 355]
       << intStack.top() << endl;                  //Line 11


intStack.pop();                                    //Line 12


cout << "Line 13: After the pop operation, the "
       << " top element of intStack: "
       << intStack.top() << endl;                  //Line 13


cout << "Line 14: intStack elements: ";            //Line 14




                                           355

[PDF page 356; printed page 356]
        while (!intStack.empty())                                                       //Line 15

        {      //Line 16 cout << intStack.top() << " ";     //Line 17 intStack.pop();      //Line
                18
        }                                                                               //Line 19


        cout << endl;                                                         //Line 20 return 0;
                                                                       //Line 21
}                                                                                       //Line 22


Sample Run:
Line 11: The top element of intStack: 3
Line 13: After the pop operation, the top element of intStack: 20 Line
14: intStack elements: 20 8 16


The preceding output is self-explanatory. The details are left as an exercise for you.


Key Terms


1. A stack is a data structure in which the items are added and deleted from one end only.
2. A stack is a Last In First Out (LIFO) data structure.
3. The basic operations on a stack are as follows: Push an item onto the stack, pop an item from the
    stack, retrieve the top element of the stack, initialize the stack, check whether the stack is empty, and
    check whether the stack is full.
4. A stack can be implemented as an array or a linked list.
5. The middle elements of a stack should not be accessed directly.
6. Stacks are restricted versions of arrays and linked lists.
7. Postfix notation does not require the use of parentheses to enforce operator precedence.
8. In postfix notation, the operators are written after the operands.
9. Postfix expressions are evaluated according to the following rules:
    a. Scan the expression from left to right.
    b. If an operator is found, back up to get the required number of operands, evaluate the operator,
        and continue.
10. The STL class stack can be used to implement a stack in a program.
                                                      356
```
