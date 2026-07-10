---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "74-82"
printed_pages: "74-82"
section: "Containers and the Functions begin and end"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "container"
  - "intveciter"
  - "line"
  - "vector"
  - "begin"
  - "veclist"
  - "functions"
  - "statement"
  - "end"
  - "element"
  - "intlist"
  - "following"
---

# Containers and the Functions begin and end

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 74-82 | printed pages 74-82

Related sections: [Testing For The End Of A File](../../internet-programming-622-study-guide/sections/3-10-testing-for-the-end-of-a-file.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](../../internet-programming-622-study-guide/sections/4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [The copy Algorithm](2-5-the-copy-algorithm.md), [ostream Iterator and Function copy](2-6-ostream-iterator-and-function-copy.md), [The Ethical and Legal Considerations in Big Data Strategy](../../big-data-iot-600-study-guide/sections/5-7-the-ethical-and-legal-considerations-in-big-data-strategy.md)

## Extracted Text

```text
[PDF page 74; printed page 74]
2.4 Containers and the Functions begin and end


Every container contains the member functions begin and end. The function begin returns the position of
 the first element into the container; the function end returns the position of the last element into the
 container. These functions have no parameters.
After the following statement executes:
 intVecIter = intList.begin();


the iterator intVecIter points to the first element into the container intList.


The following for loop uses an iterator to output the elements of intList onto the standard output device:
 for (intVecIter = intList.begin(); intVecIter != intList.end(); intVecList)
                                         cout << *intVecIter << " ";


EXAMPLE 2-4
 Consider the following statements: int intArray[7] = {1, 3, 5, 7, 9, 11, 13};
                                 //Line 1 vector<int> vecList(intArray,
                         intArray + 7}; //Line 2 vector<int>::iterator
                         intVecIter;             //Line 3


The statement in Line 2 declares and initializes the vector container vecList. Now consider the following
 statements:
                         intVecIter = vecList.begin();                    //Line 4
                         ++intVecIter;                            //Line 5 vecList.insert(intVecIter, 22};
                                         //Line 6



                                                         74

[PDF page 75; printed page 75]
The statement in Line 4 initializes the iterator intVecIter to the first element of vecList. The statement in
Line 5 advances intVecIter to the second element of vecList. The statement in Line 6 inserts 22 at the
position specified by intVecIter. After the statement in Line 6 executes, vecList = {1, 22, 3, 5, 7, 9, 11, 13}.
Notice that the size of the container also increases.


The class vector also contains member functions that can be used to find the number of elements currently
in the container, the maximum number of elements that can be inserted in a container, and so on. Table
2-4 describes some of these operations. (Suppose that vecCont is a vector container.)




                                                     75

[PDF page 76; printed page 76]
        TABLE 2-4: Functions to determine the size of a vector container




Example 2-5 illustrates how to use a vector container in a program and how to process the elements into
a vector container.


EXAMPLE 2-5
//*********************************************************** //This
program illustrates how to use a vector container in a program.
//***********************************************************
#include <iostream>                                                 //Line 1 #include
<vector>                                                            //Line 2 using
namespace std;                                                      //Line 3 int main()
                                                                    //Line 4
{                                                                          //Line 5 vector<int>
       intList;                                                     //Line 6


       intList.push_back(13);                                              //Line 7 intList.push_back(75);
                                                   //Line 8 intList.push_back(28);
                        //Line 9
       intList.push_back(35);                                              //Line 10


                                                          76

[PDF page 77; printed page 77]
cout << "Line 11: List Elements: ";                   //Line 11 for
(int i = 0; i < 4; i++)                       //Line 12 cout <<
intList[i] << " ";                     //Line 13
cout << endl;                                         //Line 14


for (int i = 0; i < 4; i++)                           //Line 15
intList[i] *= 2;                              //Line 16 cout <<
"Line 17: List Elements: ";                   //Line 17


for (int i = 0; i < 4; i++)                           //Line 18 cout
<< intList[i] << " ";                  //Line 19 cout << endl;
                                       //Line 20


vector<int>::iterator listIt;                         //Line 21




                                      77

[PDF page 78; printed page 78]
                   cout << "Line 22: List Elements: ";                                 //Line 22
                   for (listIt = intList.begin(); listIt != intList.end(); ++listIt)   //Line 23
                            cout << *listIt << " ";                                    //Line 24
                   cout << endl;                                                       //Line 25




                   listIt = intList.begin();                                           //Line 26

++listIt;                                                              //Line 27 ++listIt;
                   //Line 28

                   intList.insert(listIt, 88);                                         //Line 29




                   cout << "Line 30: List Elements: ";                                 //Line 30
                   for (listIt = intList.begin(); listIt != intList.end(); ++listIt)   //Line 31
                            cout << *listIt << " ";                                    //Line 32
                   cout << endl;                                                       //Line 33




                   return 0;                                                           //Line 34

            }                                                                          //Line 35



        Sample Run:
        Line 11: List Elements: 13 75 28 35
        Line 17: List Elements: 26 150 56 70
        Line 22: List Elements: 26 150 56 70
        Line 30: List Elements: 26 150 88 56 70


        The statement in Line 6 declares a vector container (or vector for short), intList, of type int. The statements
            in Lines 7 through 10 use the operation push_back to insert four numbers—13, 75, 28, and 35—into intList.
            The statements in Lines 12 and 13 use the for loop and the array subscripting operator [] to output the
            elements of intList. In the output, see the line marked Line 11, which contains the output of Lines 11

                                                                      78

[PDF page 79; printed page 79]
through 14 of the program. The statements in Lines 15 and 16 use a for loop to double the value of each
element of intList; the statements in Lines 18 and 19 output the elements of intList. In the output, see the
line marked Line 17, which contains the output of Lines 17 through 20 of the program.


The statement in Line 21 declares listIt to be a vector iterator that processes any vector container whose
elements are of type int. Using the iterator listIt, the statements in Lines 23 and 24 output the elements
of intList. After the statement in Line 26 executes, listIt points to the first element of intList. The
statements in Lines 27 and 28 advance listIt twice; after these statements execute, listIt points to the third
element of intList. The statement in Line 29 inserts 88 into intList at the position specified by the iterator
listIt. Because listIt points to the component at position 2 (the third element of intList), 88 is inserted at




                                                     79

[PDF page 80; printed page 80]
 position 2 in intList; that is, 88 becomes the third element of intList. The statements in Lines 31 and 32
 output the modified intList.


2.4.1 Member Functions Common to All Containers


The previous section discussed vector containers. We now look at operations that are common to all
 containers. For example, every container class has a default constructor, several constructors with
 parameters, a destructor, a function to insert an element into a container, and so on.


Recall that a class encapsulates data, and operations on that data, into a single unit. Because every
 container is a class, several operations are directly defined for a container and are provided as part of the
 class definition. Also, recall that the operations to manipulate the data are implemented with the help of
 functions and are called member functions of the class. Table 2-5 describes the member functions that
 are common to all containers; that is, these functions are included as members of the class template
 implementing the container. Suppose that ct, ct1, and ct2 are containers of the same type. Table 2-5
 shows the name of the function in bold, and shows how a function is called.




                                                     80

[PDF page 81; printed page 81]
TABLE 2-5: Member functions common to all containers




                       81

[PDF page 82; printed page 82]
                       TABLE 2-5: Member functions common to all containers (continued)




2.4.2 Member Functions Common to Sequence Containers


The previous section described the member functions that are common to all containers. In addition to
these member functions, Table 2-6 describes the member functions that are common to all sequence
containers—that is, containers of type vector, deque, and list. (Suppose that seqCont is a sequence
container.)




                                                    82
```
