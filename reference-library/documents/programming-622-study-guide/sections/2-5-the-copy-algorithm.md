---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "83-86"
printed_pages: "83-86"
section: "The copy Algorithm"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "copy"
  - "elements"
  - "intarray"
  - "vector"
  - "container"
  - "output"
  - "first1"
  - "parameter"
  - "specifies"
  - "statement"
  - "line"
  - "array"
---

# The copy Algorithm

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 83-86 | printed pages 83-86

Related sections: [Containers and the Functions begin and end](2-4-containers-and-the-functions-begin-and-end.md), [ostream Iterator and Function copy](2-6-ostream-iterator-and-function-copy.md), [Adding Data to A Table With The INSERT Statement](../../internet-programming-622-study-guide/sections/4-12-adding-data-to-a-table-with-the-insert-statement.md), [Deleting Tables from Databases Using The DROP TABLE Statement](../../internet-programming-622-study-guide/sections/4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](../../internet-programming-622-study-guide/sections/4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Algorithm Analysis: The Big-O Notation](1-3-algorithm-analysis-the-big-o-notation.md)

## Extracted Text

```text
[PDF page 83; printed page 83]
2.5 The copy Algorithm


Example 2-5 used a for loop to output the elements of a vector container. The STL provides a convenient
 way to output the elements of a container with the help of the function copy. The function copy is

                                                    83

[PDF page 84; printed page 84]
provided as a part of the generic algorithms of the STL and can be used with any container type as well as
arrays. Because we frequently need to output the elements of a container, before continuing with our
discussion of containers, let us describe this function.




                                                    84

[PDF page 85; printed page 85]
The function copy does more than output the elements of a container. In general, it allows us to copy the
elements from one place to another. For example, to output the elements of a vector or to copy the
elements of a vector into another vector, we can use the function copy. The prototype of the function
template copy is as follows:
                        template <class inputIterator, class outputIterator> outputItr copy(inputIterator
                                first1, inputIterator last, outputIterator first2);


The parameter first1 specifies the position from which to begin copying the elements; the parameter last
specifies the end position. The parameter first2 specifies where to copy the elements. Therefore, the
parameters first1 and last specify the source, and the parameter first2 specifies the destination. Note that
the elements within the range first1...last-1 are copied.


The definition of the function template copy is contained in the header file algorithm. Thus, to use the
function copy, the program must include the statement


                        #include <algorithm>


The function copy works as follows. Consider the following statement:


                        int intArray[] = {5, 6, 8, 3, 40, 36, 98, 29, 75}; //Line 1 vector<int>
                        vecList(9);   //Line 2


This statement in Line 1 creates the array intArray of nine components—that is,
intArray = {5, 6, 8, 3, 40, 36, 98, 29, 75}


Here intArray[0] = 5, intArray[1] = 6, and so on.


The statement in Line 2 creates an empty container of nine components of type vector and the element
type int.


Recall that the array name, intArray, is actually a pointer and contains the base address of the array.
Therefore, intArray points to the first component of the array, intArray + 1 points to the second

                                                      85

[PDF page 86; printed page 86]
component of the array, and so on.


Now consider the statement


                        copy(intArray, intArray+9, vecList.begin());              //Line 3


This statement copies the elements starting at the location intArray, which is the first component of the
array intArray, until intArray + 9 - 1 (that is, intArray + 8), which is the last element of the array intArray,
into the container vecList. (Note that here first1 is intArray, last is intArray + 9, and first2 is vecList.begin().)


After the statement in Line 3 executes,


                        vecList = {5, 6, 8, 3, 40, 36, 98, 29, 75}                //Line 4




                                                        86
```
