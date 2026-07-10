---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "233-237"
printed_pages: "233-237"
section: "Recursive Definitions"
chapter: "TOPIC 4: RECURSION"
keywords:
  - "recursive"
  - "equation"
  - "use"
  - "find"
  - "definition"
  - "recursion"
  - "factorial"
  - "definitions"
  - "learn"
  - "problems"
  - "technique"
  - "called"
---

# Recursive Definitions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 233-237 | printed pages 233-237

Related sections: [Definitions](../../information-systems-622-study-guide/sections/3-4-1-definitions.md), [Graph Definitions and Notations](10-2-graph-definitions-and-notations.md), [Recursion or Iteration?](4-3-recursion-or-iteration.md), [Stacks](5-1-stacks.md), [Big Data](../../big-data-iot-600-study-guide/sections/1-1-big-data.md), [Characteristics Of Big Data](../../big-data-iot-600-study-guide/sections/1-2-characteristics-of-big-data.md)

## Extracted Text

```text
[PDF page 233; printed page 233]
                                •   Learn about recursive definitions

                                •   Explore the base case and the general case of a recursive
                                    definition

                                •   Learn about recursive algorithm

                                •   Learn about recursive functions

                                •   Explore how to use recursive functions to implement recursive
                                    algorithms




In previous chapters, to devise solutions to problems we used the most common technique, called
 iteration. For certain problems, however, using the iterative technique to obtain the solution is quite
 complicated. This chapter introduces another problemsolving technique, called recursion, and provides
 several examples demonstrating how recursion works.


4.1 Recursive Definitions


The process of solving a problem by reducing it to smaller versions of itself is called recursion. Recursion
 is a very powerful way to solve certain problems for which the solution would otherwise be very
 complicated. Let us consider a problem that is familiar to most everyone.


In an algebra course, you probably learned how to find the factorial of a nonnegative integer. For example,
 the factorial of 5, written 5!, is 5 x 4 x 3 x 2 x 1 = 120. Similarly, 4! = 4 x 3 x 2 x 1 = 24. Also, factorial of 0 is
 defined to be 0! = 1. Note that 5! = 5 x 4 x 3 x 2 x 1 = 5 x (4 x 3 x 2 x 1) = 5 x 4!. In general, if n is a
 nonnegative, the factorial of n, written as n! can be defined as follows:


         0! = 1       (Equation 4-1) n! = n x (n - 1)! if n > 0      (Equation 4-2)
                                                         233

[PDF page 234; printed page 234]
In this definition, 0! is defined to be 1, and if n is an integer greater than 0, first we find (n - 1)! and then
multiply it by n. To find (n - 1)!, we apply the definition again. If (n - 1) > 0, then we use Equation 4-2;
otherwise, we use Equation 4-1. Thus, for an integer n greater than 0, n! is obtained by first finding (n -
1)! and then multiplying (n - 1)! by n.


Let us apply this definition to find 3!. Here n = 3. Because n > 0, we use Equation 4-2 to obtain:
        3! = 3 x 2!
Next, we find 2! Here n = 2. Because n > 0, we use Equation 4-2 to obtain:
        2! = 2 x 1!
Now to find 1!, we again use Equation 4-2 because n = 1 > 0. Thus:
        1! = 1 x 0!




                                                      234

[PDF page 235; printed page 235]
Finally, we use Equation 4-1 to find 0!, which is 1. Substituting 0! into 1! gives 1! = 1. This
gives 2! = 2 x 1! = 2 x 1 = 2, which in turn gives 3! = 3 x 2! = 3 x 2 = 6.


The solution in Equation 4-1 is direct—that is, the right side of the equation contains no factorial notation.
The solution in Equation 4-2 is given in terms of a smaller version of itself. The definition of the factorial
given in Equations 4-1 and 4-2 is called a recursive definition. Equation 4-1 is called the base case (that is,
the case for which the solution is obtained directly); Equation 4-2 is called the general case. Recursive
definition: A definition in which something is defined in terms of a smaller version of itself.


From the previous example (factorial), it is clear that:
1. Every recursive definition must have one (or more) base cases.
2. The general case must eventually be reduced to a base case.
3. The base case stops the recursion.


The concept of recursion in computer science works similarly. Here, we talk about recursive algorithms
and recursive functions. An algorithm that finds the solution to a given problem by reducing the problem
to smaller versions of itself is called a recursive algorithm. The recursive algorithm must have one or more
base cases, and the general solution must eventually be reduced to a base case.


A function that calls itself is called a recursive function. That is, the body of the recursive function contains
a statement that causes the same function to execute again before completing the current call. Recursive
algorithms are implemented using recursive functions.

Next, let us write the recursive function that implements the factorial function.
                        int fact(int num)
                        { if (num == 0) return 1; else return num *
                                fact(num - 1);
                        }
Figure 4-1 traces the execution of the following statement:
cout << fact(3) << endl;




                                                        235

[PDF page 236; printed page 236]
                                          FIGURE 4-1 Execution of fact(4)



The output of the previous cout statement is: 6


In Figure 4-1, the down arrow represents the successive calls to the function fact, and the upward arrows
represent the values returned to the caller, that is, the calling function.


        Let us note the following from the previous example, involving the factorial function:
        Logically, you can think of a recursive function as having an unlimited number of copies of itself.
        Every call to a recursive function—that is, every recursive call—has its own code and its own set
    of parameters and local variables.

      After completing a particular recursive call, control goes back to the calling environment, which is
        the previous call. The current (recursive) call must execute completely before control goes back to
        the previous call. The execution in the previous call begins from the point immediately following
        the recursive call.


4.1.1 Direct and Indirect Recursion


A function is called directly recursive if it calls itself. A function that calls another function and eventually
results in the original function call is said to be indirectly recursive. For example, if a function A calls a
                                                      236

[PDF page 237; printed page 237]
function B and function B calls function A, then function A is indirectly recursive. Indirect recursion can be
several layers deep. For example, suppose that function A calls function B, function B calls function C,
function C calls function D, and function D calls function A. Function A is then indirectly recursive.


Indirect recursion requires the same careful analysis as direct recursion. The base cases must be identified
and appropriate solutions to them must be provided. However, tracing through indirect recursion can be
tedious. You must, therefore, exercise extra care when designing indirect recursive functions. For
simplicity, the problems in this book involve only direct recursion.




                                                    237
```
