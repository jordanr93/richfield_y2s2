---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "87-97"
printed_pages: "87-97"
section: "ostream Iterator and Function copy"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "iterator"
  - "ostream"
  - "copy"
  - "veclist"
  - "screen"
  - "statement"
  - "use"
  - "elements"
  - "begin"
  - "end"
  - "type"
  - "int"
---

# ostream Iterator and Function copy

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 87-97 | printed pages 87-97

Related sections: [Review Questions](19-review-questions.md), [Containers and the Functions begin and end](2-4-containers-and-the-functions-begin-and-end.md), [Create an Attractive Layout and Design](../../information-systems-622-study-guide/sections/2-4-5-create-an-attractive-layout-and-design.md), [Create an Interface That Is Easy to Learn and Use](../../information-systems-622-study-guide/sections/2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md), [The copy Algorithm](2-5-the-copy-algorithm.md), [Interfaces for Users, Database Administrators, and Related Systems](../../information-systems-622-study-guide/sections/3-2-1-interfaces-for-users-database-administrators-and-related-systems.md)

## Extracted Text

```text
[PDF page 87; printed page 87]
2.6 ostream Iterator and Function copy


One way to output the contents of a container is to use a for loop and the function begin to initialize the
 for loop control variable, and to use the function end to set the limit. Alternatively, the function copy can
                                                        87

[PDF page 88; printed page 88]
be used to output the elements of a container. In this case, an iterator of type ostream specifies the
destination (ostream iterators are discussed in detail later in this chapter). When we create an iterator of
type ostream, we also specify the type of element the iterator will output.


The following statement illustrates how to create an ostream iterator of type int:
                      ostream_iterator<int> screen(cout, " ");              //Line A
This statement creates screen to be an ostream iterator with the element type int. The iterator screen has
two arguments: the object cout and a space. Thus, the iterator screen is initialized using the object cout,
and when this iterator outputs the elements they are separated by a space.


The statement
copy(intArray, intArray+9, screen);




                                                   88

[PDF page 89; printed page 89]
outputs the elements of intArray on the screen.


Similarly, the statement
 copy(vecList.begin(), vecList.end(), screen);


outputs the elements of the container vecList on the screen.


We will frequently use the function copy to output the elements of a container by using an ostream
 iterator. Also, until we discuss ostream iterators in detail, we will use statements similar to the statement
 in Line A to create an ostream iterator.


Of course, we can directly specify an ostream iterator in the function copy. For example, the statement
 (shown previously)
 copy(vecList.begin(), vecList.end(), screen);


is equivalent to the statement
 copy(vecList.begin(), vecList.end(), ostream_iterator<int>(cout, " "));


Finally, the statement


                         copy(vecList.begin(), vecList.end(), ostream_iterator<int>(cout, ", "));
outputs the elements of vecList with a comma and space between them.
Example 2-6 illustrates how to use the function copy and an ostream iterator in a program.


EXAMPLE 2-6
 //**********************************************************
 * // This program illustrates how to use the function copy and // an
 ostream iterator in a program.
//***********************************************************
 #include <algorithm>                                                  //Line 1

 #include <vector>                                                     //Line 2

 #include <iterator>                                                   //Line 3

                                                      89

[PDF page 90; printed page 90]
#include <iostream>                                         //Line 4

using namespace std;                                        //Line 5

int main()                                                  //Line 6

{                                                           //Line 7

       int intArray[] = {5, 6, 8, 3, 40, 36, 98, 29, 75};   //Line 8

       vector<int> vecList(9);                              //Line 9

       ostream_iterator<int> screen(cout, " ");             //Line 10

       cout << "Line 11: intArray: ";                       //Line 11




                                                       90

[PDF page 91; printed page 91]
               copy(intArray, intArray + 9, screen);                         //Line 12

               cout << endl;                                                 //Line 13

               copy(intArray, intArray + 9, vecList.begin());                //Line 14

               cout << "Line 15: vecList: ";                                 //Line 15

               copy(vecList.begin(), vecList.end(), screen);                 //Line 16

               cout << endl;                                                 //Line 17

               copy(intArray + 1, intArray + 9, intArray);                   //Line 18
cout << "Line 19: After shifting the elements one "
                      << "position to the left, intArray: " << endl;         //Line 19
               copy(intArray, intArray + 9, screen);                         //Line 20
               cout << endl;                                                 //Line 21

               copy(vecList.rbegin() + 2, vecList.rend(), vecList.rbegin()); //Line 22 cout
               << "Line 23: After shifting the elements down "
                       << "by two positions, vecList:" << endl;              //Line 23
               copy(vecList.begin(), vecList.end(), screen);                 //Line 24
               cout << endl;                                                 //Line 25

               return 0;                                                     //Line 26

       }                                                                     //Line 27



       Sample Run:
       Line 11: intArray: 5 6 8 3 40 36 98 29 75
       Line 15: vecList: 5 6 8 3 40 36 98 29 75
       Line 19: After shifting the elements one position to the left, intArray:
       6 8 3 40 36 98 29 75 75
       Line 23: After shifting the elements down by two positions, vecList: 5
       6 5 6 8 3 40 36 98


      2.6.1 Sequence Container: deque


                                                               91

[PDF page 92; printed page 92]
This section describes the deque sequence containers. The term deque stands for double-ended queue.
Deque containers are implemented as dynamic arrays in such a way that the elements can be inserted at
both ends. Thus, a deque can expand in either direction. Elements can also be inserted in the middle.
Inserting elements at the beginning or at the end is fast; inserting elements in the middle, however, is
time consuming because the elements in the queue need to be shifted.


The name of the class defining the deque containers is deque. The definition of the class deque, and the
functions to implement the various operations on a deque object, are also contained in the header file
deque. Therefore, to use a deque container in a program, the program must include the following
statement:




                                                  92

[PDF page 93; printed page 93]
                       #include <deque>


The class deque contains several constructors. Thus, a deque object can be initialized in various ways when
it is declared, as described in Table 2-7.




                                 TABLE 2-7: Various ways to declare a deque object




In addition to the operations that are common to all containers (see Table 2-6), Table 2-8 describes the
operations that can be used to manipulate the elements of a deque container. The name of the function
implementing the operations is shown in bold. The statement also shows how to use a particular function.
Suppose that deq is a dequecontainer.




                                                       93

[PDF page 94; printed page 94]
                       TABLE 2-8: Various operations that can be performed on a deque object




Example 2-7 illustrates how to use a deque container in a program.


EXAMPLE 2-7
//*********************************************************** //
This program illustrates how to use a deque container in a program.
//***********************************************************
#include <iostream>                                                                            //Line 1
#include <deque>                                                                               //Line 2
#include <algorithm>                                                                           //Line 3
#include <iterator>                                                                            //Line 4
using namespace std;                                                                           //Line 5
int main()                                                                                     //Line 6
{                                                                                              //Line 7
       deque<int> intDeq;                                                                      //Line 8
       ostream_iterator<int> screen(cout, " ");                                                //Line 9
       intDeq.push_back(13);                                                                   //Line 10
       intDeq.push_back(75);                                                                   //Line 11
       intDeq.push_back(28);                                                                   //Line 12
       intDeq.push_back(35);                                                                   //Line 13


                                                       94

[PDF page 95; printed page 95]
cout << "Line 14: intDeq: ";                                                        //Line 14
copy(intDeq.begin(), intDeq.end(), screen);                                         //Line 15
cout << endl;                                                                       //Line 16
intDeq.push_front(0);                                                               //Line 17
intDeq.push_back(100);                                                              //Line 18

cout << "Line 19: After adding two more "<< "elements, one at the front " << endl
       << " and one at the back, intDeq: ";                                         //Line 19

copy(intDeq.begin(), intDeq.end(), screen);                                         //Line 20




                                              95

[PDF page 96; printed page 96]
       cout << endl;                                                               //Line 21

       intDeq.pop_front();                                                         //Line 22

       intDeq. pop_front();                                                        //Line 23

       cout << "Line 24: After removing the first " << "two elements, intDeq: ";   //Line 24
       copy(intDeq.begin(), intDeq.end(), screen);                                 //Line 25
       cout << endl;                                                               //Line 26

       intDeq.pop_back();                                                          //Line 27

       intDeq.pop_back();                                                          //Line 28

       cout << "Line 29: After removing the last " << "two elements, intDeq = ";   //Line 29
       copy(intDeq.begin(), intDeq.end(), screen);                                 //Line 30
       cout << endl;                                                               //Line 31

       deque<int>::iterator deqIt;                                                 //Line 32

       deqIt = intDeq.begin();                                                     //Line 33

       ++deqIt;                       //deqIt points to the second element         //Line 34
       intDeq.insert(deqIt, 444);                                                  //Line 35
       cout << "Line 36: After inserting 444, intDeq: ";                           //Line 36

       copy(intDeq.begin(), intDeq.end(), screen);                                 //Line 37

       cout << endl;                                                               //Line 38

       return 0;                                                                   //Line 39

}                                                                                  //Line 40




Sample Run:
Line 14: intDeq: 13 75 28 35
Line 19: After adding two more elements, one at the front
and one at the back, intDeq: 0 13 75 28 35 100
Line 24: After removing the first two elements, intDeq: 75 28 35 100
Line 29: After removing the last two elements, intDeq = 75 28 Line
                                                     96

[PDF page 97; printed page 97]
36: After inserting 444, intDeq: 75 444 28


The statement in Line 8 declares a deque container intDeq of type int; that is, all the elements of intDeq
are of type int. The statement in Line 9 declares screen to be an ostream iterator initialized to the standard
output device. The statements in Lines 10 through 13 use the push_back operation to insert four
numbers—13, 75, 28, and 35—into intDeq. The statement in Line 15 outputs the elements of intDeq. In
the output, see the line marked Line 14, which contains the output of the statements in Lines 14 through
16 of the program.




                                                    97
```
