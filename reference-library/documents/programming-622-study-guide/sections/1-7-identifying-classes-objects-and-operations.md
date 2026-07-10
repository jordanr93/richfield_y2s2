---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "54-57"
printed_pages: "54-57"
section: "Identifying Classes, Objects, and Operations"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "cylinder"
  - "can"
  - "operations"
  - "nouns"
  - "verbs"
  - "list"
  - "volume"
  - "surface"
  - "area"
  - "dimensions"
  - "object"
  - "objects"
---

# Identifying Classes, Objects, and Operations

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 54-57 | printed pages 54-57

Related sections: [Data Abstraction, Classes, and Abstract Data Types](1-6-data-abstraction-classes-and-abstract-data-types.md), [Data Quality and Accuracy](../../big-data-iot-600-study-guide/sections/111-data-quality-and-accuracy.md), [Integrating Predictive and Prescriptive Analytics into Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-2-integrating-predictive-and-prescriptive-analytics-into-strategy-development.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md), [Create an Attractive Layout and Design](../../information-systems-622-study-guide/sections/2-4-5-create-an-attractive-layout-and-design.md), [Create an Interface That Is Easy to Learn and Use](../../information-systems-622-study-guide/sections/2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md)

## Extracted Text

```text
[PDF page 54; printed page 54]
1.12 Identifying Classes, Objects, and Operations
                                                       54

[PDF page 55; printed page 55]
The hardest part of OOD is to identify the classes and objects. This section describes a common and simple
technique to identify classes and objects.


We begin with a description of the problem and then identify all of the nouns and verbs. From the list of
nouns we choose our classes, and from the list of verbs we choose our operations.


For example, suppose that we want to write a program that calculates and prints the volume and surface
area of a cylinder. We can state this problem as follows:


Write a program to input the dimensions of a cylinder and calculate and print its surface area and volume.


In this statement, the nouns are bold and the verbs are italic. From the list of nouns— program,
dimensions, cylinder, surface area, and volume—we can easily visualize cylinder to be a class—say,
cylinderType—from which we can create many cylinder objects of various dimensions. The nouns—
dimensions, surface area, and volume— are characteristics of a cylinder and, thus, can hardly be
considered classes.

After we identify a class, the next step is to determine three pieces of information:
        Operations that an object of that class type can perform
        Operations that can be performed on an object of that class type Information
        that an object of that class type must maintain


From the list of verbs identified in the problem description, we choose a list of possible operations that
an object of that class can perform, or has performed, on itself. For example, from the list of verbs for the
cylinder problem description—write, input, calculate, and print—the possible operations for a cylinder
object are input, calculate, and print.


For the cylinderType class, the dimensions represent the data. The center of the base, radius of the base,
and height of the cylinder are the characteristics of the dimensions. You can input data to the object either
by a constructor or by a function.


The verb calculate applies to determining the volume and the surface area. From this, you can deduce the
operations: cylinderVolume and cylinderSurfaceArea. Similarly, the verb print applies to the display of the

                                                    55

[PDF page 56; printed page 56]
volume and the surface area on an output device.


Identifying classes via the nouns and verbs from the descriptions to the problem is not the only technique
possible. There are several other OOD techniques in the literature. However, this technique is sufficient
for the programming exercises in this book.


Key Terms


1. Software are programs run by the computer.
2. A program goes through many phases from the time it is first conceived until the time it is retired,
   called the life cycle of the program.
3. The three fundamental stages through which a program goes are development, use, and maintenance.
4. The new program is created in the software development stage.
5. In the software maintenance process, the program is modified to fix the (identified) problems and/or
   to enhance it.
6. A program is retired if no new version of the program will be released.
7. The software development phases are analysis, design, implementation, and testing and debugging.
8. During the design phase, algorithms are designed to solve the problem.
9. An algorithm is a step-by-step problem-solving process in which a solution is arrived at in a finite
   amount of time.
10. Two well-known design techniques are structured-design and object oriented design.
11. In structured design, a problem is divided into smaller subproblems. Each subproblem is solved, and
   the solutions of all the subproblems are then combined to solve the problem.
12. In object-oriented design (OOD), a program is a collection of interacting objects.
13. An object consists of data and operations on those data.
14. The three basic principles of OOD are encapsulation, inheritance, and polymorphism.
15. In the implementation phase, you write and compile programming code to implement the classes and
   functions that were discovered in the design phase.
16. A precondition is a statement specifying the condition(s) that must be true before the function is
   called.
17. A postcondition is a statement specifying what is true after the function call is completed.
18. During the testing phase, the program is tested for its correctness; that is, for making sure that the
   program does what it is supposed to do.

                                                    56

[PDF page 57; printed page 57]
19. Debugging refers to finding and fixing the errors, if they exist.
20. To find problems in a program, it is run through a series of test cases.
21. A test case consists of a set of inputs, user actions, or other initial conditions, and the expected output.
22. There are two types of testing—black-box testing and white-box testing.
23. While analyzing a particular algorithm, we usually count the number of operations performed by the
   algorithm.
24. Let f be a function of n. The term asymptotic refers to the study of the function f as n becomes larger
   and larger without bound.
25. A class is a collection of a fixed number of components.
26. Components of a class are called the members of the class.
27. Members of a class are accessed by name.
28. In C++, class is a reserved word.
29. Members of a class are classified into one of three categories: private, protected, and public.
30. The private members of a class are not accessible outside the class.
31. The public members of a class are accessible outside the class.
32. By default, all members of a class are private.
33. The public members are declared using the member access specifier public.
34. The private members are declared using the member access specifier private.
35. A member of a class can be a function or a variable (that is, data).
36. If any member of a class is a function, you usually use the function prototype to declare it.
37. If any member of a class is a variable, it is declared like any other variable.
38. In the definition of the class, you cannot initialize a variable when you declare it.
39. In the Unified Modeling language (UML) diagram of a class, the top box contains the name of the class.
   The middle box contains the data members and their data types. The last box contains the member
   function name, parameter list, and the return type of the function. A + (plus) sign in front of a member
   indicates that this member is a public member; a – (minus) sign indicates that this is a private member.
   The symbol # before the member name indicates that the member is a protected member.
40. In C++, a class is a definition. No memory is allocated; memory is allocated for the class variables when
   you declare them.
41. In C++, class variables are called class objects or simply objects.
42. A class member is accessed using the class variable name, followed by the dot operator (.), followed
   by the member name.
43. The only built-in operations on classes are the assignment and member selection.

                                                      57
```
