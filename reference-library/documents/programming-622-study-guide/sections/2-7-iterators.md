---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "98-110"
printed_pages: "98-110"
section: "Iterators"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "iterators"
  - "iterator"
  - "forward"
  - "operations"
  - "input"
  - "output"
  - "container"
  - "table"
  - "suppose"
  - "cntitr"
  - "access"
  - "element"
---

# Iterators

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 98-110 | printed pages 98-110

Related sections: [Linked List Iterators](3-4-linked-list-iterators.md), [HUMAN-COMPUTER INTERACTION](../../information-systems-622-study-guide/sections/2-2-human-computer-interaction.md), [Mainframe Architecture](../../information-systems-622-study-guide/sections/4-2-1-mainframe-architecture.md), [Output Security and Control](../../information-systems-622-study-guide/sections/2-8-1-output-security-and-control.md), [Physical Security](../../information-systems-622-study-guide/sections/6-6-1-physical-security.md), [TECHNOLOGY ISSUES](../../information-systems-622-study-guide/sections/2-7-technology-issues.md)

## Extracted Text

```text
[PDF page 98; printed page 98]
2.7 Iterators


Examples 2-5 through 2-7 further clarify that iterators are quite important to efficiently process the
 elements of a container. Let us discuss iterators in some detail.


Iterators work just like pointers. In general, an iterator points to the elements of a container (sequence or
 associative). Thus, with the help of iterators, we can successively access each element of a container.


The two most common operations on iterators are ++ (the increment operator) and * (the dereferencing
 operator). Suppose that cntItr is an iterator into a container. The statement


                       ++cntItr;


advances cntItr so that it points to the next element in the container. The statement


                       *cntItr;


returns the value of the element of the container pointed to by cntItr.




                                                     98

[PDF page 99; printed page 99]
2.1.1 Types of Iterators


There are five types of iterators: input iterators, output iterators, forward iterators, bidirectional iterators,
and random access iterators. In the next few sections, we describe these iterators.


2.1.1.1 Input Iterators


Input iterators, with read access, step forward element-by-element and so return the values elementby-
element. These iterators are provided for reading data from an input stream. Suppose inputIterator is an
input iterator. Table 2-9 describes the operations on inputIterator.




                                                      99

[PDF page 100; printed page 100]
                                    TABLE 2-9: Operations on an input iterator




2.1.1.2 Output Iterators


Output iterators, with write access, step forward element-by-element. These iterators are typically used
for writing data to an output stream. Suppose outputIterator is an output iterator. Table 2-10 describes
the operations on outputIterator.




                                 TABLE 2-10: Operations on an output iterator




                                                      100

[PDF page 101; printed page 101]
2.1.1.3 Forward Iterators


Forward iterators combine all of the functionality of input iterators and almost all of the functionality of
output iterators. Suppose forwardIterator is a forward iterator. Table 2-11 describes the operations on
forwardIterator.
                                  TABLE 2-11: Operations on a forward iterator




2.1.1.4 Bidirectional Iterators


Bidirectional iterators are forward iterators that can also iterate backward over the elements. Suppose
biDirectionalIterator is a bidirectional iterator. The operations defined for forward iterators (Table 2-11)
are also applicable to bidirectional iterators. To step backward, the decrement operations are also defined
for biDirectionalIterator. Table 2-12 shows additional operations on a bidirectional iterator.


                           TABLE 2-12: Additional operations on a bidirectional iterator




                                                       101

[PDF page 102; printed page 102]
2.1.1.5 Random Access Iterators


Random access iterators are bidirectional iterators that can randomly process the elements of a container.
These iterators can be used with containers of type vector, deque, string, and arrays. The operations
defined for bidirectional iterators (for example, Tables 2-11 and 2-12) are also applicable to random access




                                                    102

[PDF page 103; printed page 103]
iterators. Table 2-13 describes the additional operations that are defined for random access iterators.
(Suppose rAccessIterator is a random access iterator.)


                          TABLE 2-13: Additional operations on a random access iterator




Figure 2-1 shows the iterator hierarchy.




                                                      103

[PDF page 104; printed page 104]
FIGURE 2-1 Iterator hierarchy




            104

[PDF page 105; printed page 105]
Now that you know the different types of iterators, next we describe how to declare an iterator to a
container.


typedef iterator Every container (sequence or associative) contains a typedef iterator. Thus, an iterator
into a container is declared using the typedef iterator. For example, the statement vector<int>::iterator
intVecIter;


declares intVecIter to be an iterator into a vector container of type int. Moreover, the iterator intVecIter
can be used on any vector<int>, but not on any other container, such as vector<double>, vector<string>,
and deque.


Because iterator is a typedef defined inside a container (that is, a class) such as vector, we must use the
appropriate container name, container element type, and the scope resolution operator to use the
typedef iterator.


typedef const_iterator Because an iterator works like a pointer, with the help of an iterator into a
container and the dereferencing operator, *, we can modify the elements of the container. However, if a
container is declared as const, then we must prevent the iterator from modifying the elements of the
container, especially accidentally. To handle this situation, every container contains another typedef
const_iterator.
For example, the statement


                       vector<int>::const_iterator intConstVecIt;


declares intConstVecIt to be an iterator into a vector container whose elements are of type int. The
iterator intConstVecIt is used to process the elements of those vector containers that are declared as
constant vector containers of type vector<int>.


An iterator of type const_iterator is a read-only iterator.


typedef reverse_iterator Every container also contains the typedef reverse_iterator. An iterator of this
type is used to iterate through the elements of a container in reverse.



                                                     105

[PDF page 106; printed page 106]
typedef const_reverse_iterator An iterator of this type is a read-only iterator and is used to iterate through
the elements of a container in reverse. It is required if the container is declared as const and we need to
iterate through the elements of the container in reverse.


In addition to the previous four typedefs, several other typedefs are common to all containers. Table 2-
14 describes them.




                                                    106

[PDF page 107; printed page 107]
                              TABLE 2-14: Various typedefs common to all containers




2.1.1.6 Stream Iterators


Another useful set of iterators is stream iterators—istream iterators and ostream iterators. This section
describes both types of iterators.


istream_iterator The istream iterator is used to input data into a program from an input stream. The class
istream_iterator contains the definition of an input stream iterator. The general syntax to use an istream
iterator is as follows: istream_iterator<Type> isIdentifier(istream&);


where Type is either a built-in type or a user-defined class type, for which an input iterator is defined. The
identifier isIdentifier is initialized using the constructor whose argument is either an istream class object
such as cin, or any publicly defined istream subtype, such as ifstream.


ostream_iterator The ostream iterators are used to output data from a program into an output stream.
These iterators were defined earlier in this chapter. We review them here for the sake of completeness.


The class ostream_iterator contains the definition of an output stream iterator. The general syntax to use
an ostream iterator is as follows:



                                                      107

[PDF page 108; printed page 108]
                      ostream_iterator<Type> osIdentifier(ostream&);
or ostream_iterator<Type> osIdentifier(ostream&, char* deLimit);


where Type is either a built-in type or a user-defined class type, for which an output iterator is defined.
The identifier osIdentifier is initialized using the constructor whose argument is either an ostream class
object such as cout, or any publicly defined ostream subtype, such as ofstream. In the second form used
for declaring an ostream iterator, by using the second argument (deLimit) of the initializing constructor,
we can specify a character separating the output.
Key Terms




                                                    108

[PDF page 109; printed page 109]
1. The STL provides class templates that process lists, stacks, and queues.
2. The three main components of the STL are containers, iterators, and algorithms.
3. STL containers are class templates.
4. Iterators are used to step through the elements of a container.
5. Algorithms are used to manipulate the elements in a container.
6. The main categories of containers are sequence containers, associative containers, and container
   adapters.
7. The three predefined sequence containers are vector, deque, and list.
8. A vector container stores and manages its objects in a dynamic array.
9. Because an array is a random access data structure, elements of a vector can be accessed randomly.
10. The name of the class that implements the vector container is vector.
11. Item insertion in a vector container is accomplished by using the operations insert and push_back.
12. Item deletion in a vector container is accomplished by using the operations pop_back, erase, and clear.
13. An iterator to a vector container is declared using the typedef iterator, which is declared as a public
   member of the class vector.
14. Member functions common to all containers are the default constructor, constructors with
   parameters, the copy constructor, the destructor, empty, size, max_size, swap, begin, end, rbegin,
   rend, insert, erase, clear, and the relational operator functions.
15. The member function begin returns an iterator to the first element into the container.
16. The member function end returns an iterator to the last element into the container.
17. In addition to the member functions listed in 14, the other member functions common to all sequence
   containers are insert, push_back, pop_back, erase, clear, and resize. 18. The copy algorithm is used to
   copy the elements in a given range to another place.
19. The function copy, using an ostream iterator, can also be used to output the elements of a container.
20. When we create an iterator of the type ostream, we also specify the type of element that the iterator
   will output.
21. Deque containers are implemented as dynamic arrays in such a way that the elements can be inserted
   at both ends of the array.
22. A deque can expand in either direction.
23. The name of the header file containing the definition of the class deque is deque.
24. In addition to the operations that are common to all containers, the other operations that can be used
   to manipulate the elements of a deque are assign, push_front, pop_front, at, array subscripting

                                                   109

[PDF page 110; printed page 110]
   operator [], front, and back.
25. The five categories of iterators are: input, output, forward, bidirectional, and random access iterator.
26. Input iterators are used to input data from an input stream.
27. Output iterators are used to output data to an output stream.
28. A forward iterator can refer to the same element in the same collection and process the same element
   more than once.
29. Bidirectional iterators are forward iterators that can also iterate backwards over the elements.
30. Bidirectional iterators can be used with containers of type list, set, multiset, map, and multimap.
31. Random access iterators are bidirectional iterators that can randomly process the elements of a
   container.
32. Random access iterators can be used with containers of type vector, deque, string, and arrays.




                                                    110
```
