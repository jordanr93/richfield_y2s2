---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "215-219"
printed_pages: "215-219"
section: "STL Sequence Container: list"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "container"
  - "operations"
  - "table"
  - "sequence"
  - "containers"
  - "include"
  - "describes"
  - "stl"
  - "first"
  - "various"
  - "use"
---

# STL Sequence Container: list

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 215-219 | printed pages 215-219

Related sections: [Sequence Container: vector](2-3-sequence-container-vector.md), [Components of the STL](2-1-components-of-the-stl.md), [Container Types](2-1-container-types.md), [Insertion into an Ordered List](7-5-insertion-into-an-ordered-list.md), [STL class stack](5-7-stl-class-stack.md), [Sequence Containers](2-2-sequence-containers.md)

## Extracted Text

```text
[PDF page 215; printed page 215]
3.8 STL Sequence Container: list


Chapter 2 listed three types of sequence containers—vector, deque, and list. The sequence containers
 vector and deque are described in Chapter 2. This section describes the STL sequence container list. List
 containers are implemented as doubly linked lists. Thus, every element in a list points to its immediate
 predecessor and to its immediate successor (except the first and last elements). Recall that a linked list is
 not a random access data structure such as an array. Therefore, to access, for example, the fifth element
 in the list, we must first traverse the first four elements.


The name of the class containing the definition of the class list is list. The definition of the class list, and
 the definitions of the functions to implement the various operations on a list, are contained in the header
 file list. Therefore, to use list in a program, the program must include the following statement:


                        #include <list>


Like other container classes, the class list contains several constructors. Thus, a list object can be initialized
 in several ways when it is declared, as described in Table 3-9.




                                                      215

[PDF page 216; printed page 216]
TABLE 3-9: Various ways to declare a list object




                     216

[PDF page 217; printed page 217]
Table 3-5 describes the operations that are common to all containers, and Table 3-6 describes the
operations that are common to all sequence containers. In addition to these common operations, Table
3-10 describes the operations that are specific to a list container. The name of the function implementing
the operation is shown in bold. (Suppose that listCont is a container of type list.)


                                 TABLE 3-10: Operations specific to a list container




                                                        217

[PDF page 218; printed page 218]
                            TABLE 3-10: Operations specific to a list container (continued)




Example 3-1 shows how to use various operations on a list container.


EXAMPLE 3-1
//****************************************************************
// This program illustrates how to use a list container in a //
program.
//****************************************************************
#include <iostream>                                                                           //Line 1


                                                         218

[PDF page 219; printed page 219]
#include <list>              //Line 2
#include <iterator>          //Line 3
#include <algorithm>         //Line 4
using namespace std;         //Line 5
int main()                   //Line 6




                       219
```
