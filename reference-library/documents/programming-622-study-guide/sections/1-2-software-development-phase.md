---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "10-16"
printed_pages: "10-16"
section: "Software Development Phase"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "you"
  - "problem"
  - "design"
  - "phase"
  - "software"
  - "understand"
  - "requirements"
  - "machine"
  - "next"
  - "analysis"
  - "step"
  - "whether"
---

# Software Development Phase

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 10-16 | printed pages 10-16

Related sections: [IN-HOUSE SOFTWARE DEVELOPMENT OPTIONS](../../information-systems-622-study-guide/sections/1-3-in-house-software-development-options.md), [4. 9 SYSTEMS DESIGN COMPLETION](../../information-systems-622-study-guide/sections/4-4-9-systems-design-completion.md), [APPLICATION DEVELOPMENT](../../information-systems-622-study-guide/sections/5-2-application-development.md), [Application Development Tasks](../../information-systems-622-study-guide/sections/5-2-2-application-development-tasks.md), [CHAPTER 1: Development Strategies](../../information-systems-622-study-guide/sections/1-chapter-1-development-strategies.md), [OBJECT-ORIENTED DEVELOPMENT](../../information-systems-622-study-guide/sections/5-4-object-oriented-development.md)

## Extracted Text

```text
[PDF page 10; printed page 10]
   The software development phase is the first and perhaps most important phase of the software life
    cycle. A program that is well developed will be easy and less expensive to maintain. The next section
    describes this phase.


           1.2 Software Development Phase
Software engineers typically break the software development process into the following four phases:
                    Analysis
                    Design
                    Implementation
                    Testing and debugging


    The next few sections describe these four phases in some detail.


           1.2.1 Analysis
Analyzing the problem is the first and most important step. This step requires you to do the following:
                    Thoroughly understand the problem.
                    Understand the problem requirements. Requirements can include whether the
    program requires interaction with the user, whether it manipulates data, whether it produces output,
    and what the output looks like. Suppose that you need to develop a program to make an automated
    teller machine (ATM) operational. In the analysis phase, you determine the functionality of the
    machine. Here, you determine the necessary operations performed by the machine, such as
    withdraw money, deposit money, transfer money, check account balance, and so on. During this
    phase, you also talk to potential customers who would use the machine. To make it user-friendly, you
    must understand their requirements and add any necessary operations. If the program manipulates
                                                    10

[PDF page 11; printed page 11]
 data, the programmer must know what the data is and how it is represented. That is, you need to look
 at sample data. If the program produces output, you should know how the results should be
 generated and formatted.

If the problem is complex, divide the problem into subproblems, analyse each subproblem, and
 understand each subproblem’s requirements.
        1.2.2 Design


After you carefully analyze the problem, the next step is to design an algorithm to solve the problem.
 If you broke the problem into subproblems, you need to design an algorithm for each subproblem.


Algorithm: A step-by-step problem-solving process in which a solution is arrived at in a finite amount
 of time.


        1.2.3 Structured Design


Dividing a problem into smaller subproblems is called structured design. The structured design
 approach is also known as top-down design, stepwise refinement, and modular programming. In
 structured design, the problem is divided into smaller problems. Each subproblem is then analyzed,
 and a solution is obtained to solve the subproblem. The solutions of all the subproblems are then
 combined to solve the overall problem. This process of implementing a structured design is called
 structured programming.


        1.2.4 Object-Oriented Design


In object-oriented design (OOD), the first step in the problem-solving process is to identify the
 components called objects, which form the basis of the solution, and determine how these objects
 interact with one another. For example, suppose you want to write a program that automates the
 video rental process for a local video store. The two main objects in this problem are the video and the
 customer.




                                                  11

[PDF page 12; printed page 12]
After identifying the objects, the next step is to specify for each object the relevant data and possible
operations to be performed on that data. For example, for a video object, the data might include the
movie name, starring actors, producer, production company, number of copies in stock, and so on.
Some of the operations on a video object might include checking the name of the movie, reducing
the number of copies in stock by one after a copy is rented, and incrementing the number of copies
in stock by one after a customer returns a particular video.


This illustrates that each object consists of data and operations on that data. An object combines data
and operations on the data into a single unit. In OOD, the final program is a collection of interacting
objects. A programming language that implements OOD is called an object-oriented programming
(OOP) language. You will learn about the many advantages of OOD in later chapters.


OOD has the following three basic principles:


                 Encapsulation—The ability to combine data and operations in a single unit
                 Inheritance—The ability to create new (data) types from existing (data) types
                 Polymorphism—The ability to use the same expression to denote different
operations


In C++, encapsulation is accomplished via the use of data types called classes. How classes are
implemented in C++ is described later in this chapter. Chapter 2 discusses inheritance and
polymorphism.
In object-oriented design, you decide what classes you need and their relevant data members and
member functions. You then describe how classes interact with each other.


       1.2.5 Implementation


In the implementation phase, you write and compile programming code to implement the classes
and functions that were discovered in the design phase.


This book uses the OOD technique (in conjunction with structured programming) to solve a particular

                                                  12

[PDF page 13; printed page 13]
problem. It contains many case studies—called Programming Examples—to solve real-world
problems.


The final program consists of several functions, each accomplishing a specific goal. Some functions
are part of the main program; others are used to implement various operations on objects. Clearly,
functions interact with each other, taking advantage of each other’s capabilities. To use a function,
the user needs to know only how to use the function and what the function does. The user should not
be concerned with the details of the function, that is, how the function is written. Let us illustrate this
with the help of the following example.


Suppose that you want to write a function that converts a measurement given in inches into
equivalent centimeters. The conversion formula is 1 inch = 2.54 centimeters. The following function
accomplishes the job:


double inchesToCentimeters(double inches)
{
if (inches < 0)
{
           cerr << "The given measurement must be nonnegative." << endl; return
           -1.0;
}
else
           return 2.54 * inches;
       }




                                                   13

[PDF page 14; printed page 14]
If you look at the body of the function, you can recognize that if the value of inches is less than 0, that
is, negative, the function returns –1.0; otherwise, the function returns the equivalent length in
centimeters. The user of this function does not need to know the specific details of how the algorithm
that finds the equivalent length in centimeters is implemented. However, the user must know that
in order to get the valid answer, the input must be a nonnegative number. If the input to this function
is a negative number, the program returns –1.0. This information can be provided as part of the
documentation of this function using specific statements, called preconditions and postconditions.


Precondition: A statement specifying the condition(s) that must be true before the function is
called. Postcondition: A statement specifying what is true after the function call is completed.
The precondition and postcondition for the function inchesToCentimeters can be specified as
follows:


//Precondition: The value of inches must be nonnegative.
//Postcondition: If the value of inches is < 0, the function // returns -1.0; otherwise, the function
returns the // equivalent length in centimeters. double inchesToCentimeters(double inches)
{
if (inches < 0)
{
           cerr << "The given measurement must be nonnegative." << endl; return
           -1.0;
}
else
           return 2.54 * inches;
       }




In certain situations, you could use C++’s assert statement to validate the input. For example,
the preceding function can be written as follows:



                                                   14

[PDF page 15; printed page 15]
//Precondition: The value of inches must be nonnegative.
//Postcondition: If the value of inches is < 0, the function // terminates; otherwise, the function
returns the // equivalent length in centimeters. double inchesToCentimeters(double inches)
{ assert(inches >= 0);
return 2.54 * inches;
}


However, if the assert statement fails, the entire program will terminate, which might be appropriate
if the remainder of the program depends on the execution of the function. On the other hand, the
user can check the value returned by the function, determine if the returned value is appropriate,
and proceed accordingly. To use the assert function, you need to include the header file cassert in
your program.


As you can see, the same function can be implemented differently by different programmers. Because
the user of a function need not be concerned with the details of the function, the preconditions and
postconditions are specified with the function prototype.


That is, the user is given the following information:


double inchesToCentimeters(double inches);
//Precondition: The value of inches must be nonnegative.
//Postcondition: If the value of inches is < 0, the function // returns -1.0; otherwise, the function
returns the // equivalent length in centimeters.


As another example, to use a function that searches a list for a specific item, the list must exist before
the function is called. After the search is complete, the function returns true or false depending on
whether the search was successful.




                                                   15

[PDF page 16; printed page 16]
 bool search(int list[], int listLength, int searchItem); //Precondition: The list must exist.
 //Postcondition: The function returns true if searchItem is in // list; otherwise, the function return false.


1.2.6 Testing and Debugging


The term testing refers to testing the correctness of the program; that is, making sure that the program
 does what it is supposed to do. The term debugging refers to finding and fixing the errors, if they exist.


Once a function and/or an algorithm is written, the next step is to verify that it works properly. However,
 in a large and complex program, errors almost certainly exist. Therefore, to increase the reliability of the
 program, errors must be discovered and fixed before the program is released to the user.


You can certainly prove this by using some (perhaps mathematical) analysis of the correctness of a
 program. However, for large and complex programs, this technique alone might not be enough
 because errors can be made in the proof. Therefore, we also rely on testing to determine the quality
 of the program. The program is run through a series of specific tests, called test cases, in an attempt
 to find problems.


A test case consists of a set of inputs, user actions, or other initial conditions, and the expected output.
 Because a test case can be repeated several times, it must be properly documented. Typically a program
 manipulates a large set of data. It is, therefore, impractical (although possible) to create test cases for all
 possible inputs. For example, suppose that a program manipulates integers. Clearly, it is not possible to
 create a test case for each integer. You can categorize test cases into separate categories, called
 equivalence categories. An equivalence category is a set of input values that are likely to produce the same
 output. For example, suppose that you have a function that takes an integer as input and returns true if
 the integer is nonnegative, and false otherwise. In this case, you can form two equivalence categories—
 one consisting of negative numbers and the other consisting of nonnegative numbers.


There are two types of testing—black-box testing and white-box testing. In black-box testing, you do not
 know the internal working of the algorithm or function. You know only what the function does. Blackbox
 testing is based on inputs and outputs. The test cases for black-box testing are usually selected by creating
 equivalence categories. If a function works for one input in the equivalence category, it is expected to
 work for other inputs in the same category.

                                                       16
```
