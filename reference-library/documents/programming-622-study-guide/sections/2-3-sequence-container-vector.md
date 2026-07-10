---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "66-73"
printed_pages: "66-73"
section: "Sequence Container: vector"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "vector"
  - "container"
  - "containers"
  - "type"
  - "can"
  - "statement"
  - "int"
  - "intlist"
  - "array"
  - "declares"
  - "sequence"
  - "because"
---

# Sequence Container: vector

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 66-73 | printed pages 66-73

Related sections: [STL Sequence Container: list](3-8-stl-sequence-container-list.md), [Container Types](2-1-container-types.md), [Sequence Containers](2-2-sequence-containers.md), [Use Validation Rules](../../information-systems-622-study-guide/sections/2-4-8-use-validation-rules.md), [Containers and the Functions begin and end](2-4-containers-and-the-functions-begin-and-end.md), [The copy Algorithm](2-5-the-copy-algorithm.md)

## Extracted Text

```text
[PDF page 66; printed page 66]
Before discussing container types in general, let us first briefly describe the sequence container vector.
                                                   66

[PDF page 67; printed page 67]
 We do so because vector containers are logically the same as arrays and, therefore, they can be processed
 like arrays. Also, with the help of vector containers, we can describe several properties that are common
 to all containers. In fact, all containers use the same names for the common operations. Of course, there
 are operations that are specific to a container. These operations are discussed when describing a specific
 container. This chapter discusses vector and deque containers. Chapter 3 discusses list containers.
2.3 Sequence Container: vector


A vector container stores and manages its objects in a dynamic array. Because an array is a random access
 data structure, the elements of a vector can be accessed randomly. Item insertion in the middle or
 beginning of an array is time consuming, especially if the array is large. However, inserting an item at the
 end is fast.


The name of the class that implements the vector container is vector. (Recall that containers are class
 templates.) The name of the header file containing the class vector is vector. Thus, to use a vector
 container in a program, the program must include the following statement:


                #include <vector>


Furthermore, to define an object of type vector, we must specify the type of the object because the class
 vector is a class template. For example, the statement


                vector<int> intList;
declares intList to be a vector and the component type to be int. Similarly, the statement
                vector<string> stringList;
declares stringList to be a vector container and the component type to be string.
2.3.1 Declaring Vector Objects


The class vector contains several constructors, including the default constructor. Therefore, a vector
 container can be declared and initialized in several ways. Table 2-1 describes how a vector container of a
 specific type can be declared and initialized.




                                                    67

[PDF page 68; printed page 68]
                           TABLE 2-1: Various ways to declare and initialize a vector container




EXAMPLE 2-1


a. The following statement declares intList to be an empty vector container and the element type is int.
  vector<int> intList;
b. The following statement declares intList to be a vector container of size 10 and the element type is int.
  The elements of intList are initialized to 0. vector<int> intList(10);
c. The following statement declares intList to be a vector container of size 5 and the element type is int.
  The container intList is initialized using the elements of the array. int intArray[5] = {2,4,6,8,10};
                         vector<int> intList(intArray, intArray + 5);


The container intList is initialized using the elements of the array intArray. That is, intList = {2,4,6,8,10}.


Now that we know how to declare a vector sequence container, let us now discuss how to manipulate
data stored in a vector container. To do so, we must know the following basic operations:
        • Item insertion
        • Item deletion
        • Stepping through the elements of a vector container

                                                          68

[PDF page 69; printed page 69]
The elements in a vector container can be accessed directly by using the operations given in Table 2-2.



                             TABLE 2-2: Operations to access the elements of a vector container




From Table 2-2, it follows that that the elements in a vector can be processed just as they can in an array.
 (Recall that in C++, arrays start at location 0. Similarly, the first element in a vector container is at location
 0.)


EXAMPLE 2-2
Consider the following statement, which declares intList to be a vector container of size 5 and the element
 type is int.
 vector<int> intList(5);


You can use a loop, such as the following, to store elements into intList:
                 for (int j = 0; j < 5; j++)
                           intList[j] = j;


Similarly, you can use a for loop to output the elements of intList.


The class vector provides various operations to process the elements of a vector container. Suppose that
 vecList is a container of type vector. Item insertion and deletion in vecList can be accomplished using the
 operations given in Table 2-3. These operations are implemented as member functions of the class vector
 and are shown in bold. Table 2-3 also shows how these operations are used.




                                                           69

[PDF page 70; printed page 70]
                              TABLE 2-3: Various operations on a vector container




The function push_back is quite useful. This function is used to add an element at the end of a container.
The container intList of size 5 was declared in Example 2-2. You might think that you can only add five
elements to the container intList. However, this is not the case. If you need to add more than five
elements, you can use the function push_back. You cannot use the array subscripting operator, as in
Example 2-2, to add elements past the position 4 unless you increase the size of the container.


If you do not know the number of elements you need to store in a vector container, then when you declare
the vector container you do not need to specify its size (see Example 2-3). In this case, you can use the
function push_back, as shown in Examples 2-3 and 2-5, to add elements into a vector container.

                                                     70

[PDF page 71; printed page 71]
EXAMPLE 2-3
The following statement declares intList to be a vector container of size 0.
 vector<int> intList;




                                                    71

[PDF page 72; printed page 72]
 To add elements into intList, we can use the function push_back as follows:
                        intList.push_back(34); intList.push_back(55);
 After these statements execute, the size of intList is 2 and intList = {34, 55}. Of course, you could have
 used the resize function to increase the size of intList and then use the array subscripting operator.
 However, at times, the push_back function is more convenient because it does not need to know the size
 of the container; it simply adds elements at the end.


2.3.2 Declaring an Iterator to a Vector Container


 Even though we can process a vector container just like an array using the array subscripting operator,
 there are situations where we would like to process the elements of a vector container using an iterator.
 (Recall that an iterator is just like a pointer.) For example, suppose that we want to insert an element at a
 specific position in a vector container. Because the element is to be inserted at a specific position, this
 would require shifting the elements of the container (unless the element is added at the end). Of course,
 we must also think about the size of the container. To make element(s) insertion convenient, the class
 vector provides the function insert to insert the elements at a specific position in a vector container.
 However, to use the function insert, the position where to insert the element(s) must be specified by an
 iterator. Similarly, the function erase, to remove an element, also requires the use of an iterator. This
 section describes how to declare and use an iterator on a vector container.


 The class vector contains a typedef iterator, which is declared as a public member. An iterator to a vector
 container is declared using the typedef iterator.
 For example, the statement


                        vector<int>::iterator intVecIter;


 declares intVecIter to be an iterator into a vector container of type int.


 Because iterator is a typedef defined inside the class vector, we must use the container name (vector),
 container element type, and scope resolution operator to use the typedef iterator.


 Suppose that the iterator intVecIter points to an element of a vector container whose elements are of
 type int. The expression

                                                      72

[PDF page 73; printed page 73]
                      ++intVecIter


advances the iterator intVecIter to the next element into the container. The expression


                      *intVecIter


returns the element at the current iterator position.


Note that these operations are the same as the operations on pointers. Recall that when used as a unary
operator, * is called the dereferencing operator.
We now discuss how to use an iterator into a vector container to manipulate the data stored into it.
Suppose that we have the following statements:




                                                    73
```
