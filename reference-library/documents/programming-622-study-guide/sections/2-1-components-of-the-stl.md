---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "65-65"
printed_pages: "65-65"
section: "Components of the STL"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "stl"
  - "use"
  - "array"
  - "manipulate"
  - "can"
  - "components"
  - "containers"
  - "iterators"
  - "used"
  - "process"
  - "linked"
  - "some"
---

# Components of the STL

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 65-65 | printed pages 65-65

Related sections: [Key Components of the IoT Ecosystem](../../big-data-iot-600-study-guide/sections/2-1-1-key-components-of-the-iot-ecosystem.md), [Key Components of a Big Data Strategy](../../big-data-iot-600-study-guide/sections/5-2-key-components-of-a-big-data-strategy.md), [The Importance of Data Security in Big Data](../../big-data-iot-600-study-guide/sections/4-7-1-the-importance-of-data-security-in-big-data.md), [Use of Data for Unintended Purposes](../../big-data-iot-600-study-guide/sections/124-use-of-data-for-unintended-purposes.md), [The Challenges of Integrating Big Data with Business Strategy](../../big-data-iot-600-study-guide/sections/5-6-the-challenges-of-integrating-big-data-with-business-strategy.md), [Impact of the Personal Computer](../../information-systems-622-study-guide/sections/4-2-2-impact-of-the-personal-computer.md)

## Extracted Text

```text
[PDF page 65; printed page 65]
                       •   Become familiar with the three basic components of the STL—
                           containers, iterators, and algorithms
                       •   Explore how vector and deque containers are used to
                           manipulate data in a program Discover
                       •   the use of iterators




C++ is equipped with a Standard Template Library (STL). Among other things, the STL provides class
templates to process lists (contiguous or linked), stacks, and queues. This chapter discusses some of the
STL’s important features, and shows how to use certain tools provided by the STL in a program.


In the ensuing chapters, you will learn how to develop your own code to implement and manipulate data,
as well as how to use professionally written code.


       2.1 Components of the STL


The main objective of a program is to manipulate data and generate results. Achieving this goal requires
the ability to store data into computer memory, access a particular piece of data, and write algorithms to
manipulate the data.


For example, if all the data items are of the same type and we have some idea of the number of data
items, we could use an array to store the data. We can then use an index to access a particular component
of the array. Using a loop and the array index, we can step through the elements of the array. Algorithms,
such as those for initializing the array, sorting, and searching, are used to manipulate the data stored in
an array. On the other hand, if we do not want to worry about the size of the data, we can use a linked
list, to process it. If the data needs to be processed in a Last In First Out (LIFO) manner, we can use a stack.

                                                     65
```
