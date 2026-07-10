---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "238-263"
printed_pages: "238-263"
section: "Problem Solving Using Recursion"
chapter: "TOPIC 4: RECURSION"
keywords:
  - "list"
  - "largest"
  - "element"
  - "find"
  - "array"
  - "elements"
  - "recursive"
  - "length"
  - "sublist"
  - "given"
  - "figure"
  - "maximum"
---

# Problem Solving Using Recursion

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 238-263 | printed pages 238-263

Related sections: [Binary Search](7-4-binary-search.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Recursion or Iteration?](4-3-recursion-or-iteration.md), [Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward](5-6-removing-recursion-nonrecursive-algorithm-to-print-a-linked-list-backward.md), [Example: Using Data Visualization to Communicate Strategy](../../big-data-iot-600-study-guide/sections/109-example-using-data-visualization-to-communicate-strategy.md)

## Extracted Text

```text
[PDF page 238; printed page 238]
4.2 Problem Solving Using Recursion


The next few sections illustrate how recursive algorithms are developed and implemented in C++ using
 recursive functions.


 4.1.3 Largest Element in an Array
                                                      238

[PDF page 239; printed page 239]
In this example, we use a recursive algorithm to find the largest element in an array. Consider the list given
in Figure 4-2.




                                           FIGURE 4-2 list with six elements



The largest element in the list in Figure 4-2 is 10.


Suppose list is the name of the array containing the list elements. Also, suppose that list[a]...list[b] stands
for the array elements list[a], list[a + 1], ..., list[b]. For example, list[0]...list[5] represents the array
elements list[0], list[1], list[2], list[3], list[4], and list[5]. Similarly, list[1]...list[5] represents the array




                                                         239

[PDF page 240; printed page 240]
elements list[1], list[2], list[3], list[4], and list[5]. To write a recursive algorithm to find the largest element
in list, let us think in terms of recursion.


If list is of length 1, then list has only one element, which is the largest element. Suppose the length of list
is greater than 1. To find the largest element in list[a]...list[b], we first find the largest element in list[a +
1]...list[b] and then compare this largest element with list[a]. That is, the largest element in list[a]...list[b]
is given by:


                        maximum(list[a], largest(list[a + 1]...list[b]))


Let us apply this formula to find the largest element in the list shown in Figure 4-2. This list has six
elements, given by list[0]...list[5]. Now the largest element in list is given by:
maximum(list[0], largest(list[1]...list[5]))


That is, the largest element in list is the maximum of list[0] and the largest element in list[1]...list[5]. To
find the largest element in list[1]...list[5], we use the same formula again because the length of this list is
greater than 1. The largest element in list[1]...list[5] is then:
maximum(list[1], largest(list[2]...list[5]))


and so on. We see that every time we use the previous formula to find the largest element in a sublist,
the length of the sublist in the next call is reduced by one. Eventually, the sublist is of length 1, in which
case the sublist contains only one element, which is the largest element in the sublist. From this point
onward, we backtrack through the recursive calls. This discussion translates into the following recursive
algorithm, which is presented in pseudocode:


Base Case:      The size of the list is 1
                The only element in the list is the largest element


General Case: The size of the list is greater than 1
                To find the largest element in list[a]...list[b]
                1. Find the largest element in list[a + 1]...list[b] and call it max
                2. Compare the elements list[a] and max if (list[a] >= max)
                the largest element in list[a]...list[b] is list[a]

                                                         240

[PDF page 241; printed page 241]
                otherwise the largest element in list[a]...list[b] is
                        max

This algorithm translates into the following C++ function to find the largest element in an array:
int largest(const int list[], int lowerIndex, int upperIndex)
{
        int max;
        if (lowerIndex == upperIndex) //size of the sublist is
        one return list[lowerIndex]; else
        {
               max = largest(list, lowerIndex + 1, upperIndex);
                if (list[lowerIndex] >= max) return
                list[lowerIndex]; else
                        return max;




                                                      241

[PDF page 242; printed page 242]
        }
}
Consider the list given in Figure 4-3.




                                          FIGURE 4-3 list with four elements



Let us trace the execution of the following statement:


cout << largest(list, 0, 3) << endl;


Here upperIndex = 3 and the list has four elements. Figure 4-4 traces the execution of largest(list, 0, 3).




                                                                                                 FIGURE
                                       4-4 Execution of largest(list, 0, 3)

The value returned by the expression largest(list, 0, 3) is 12, which is the largest element in list.
The followingC++program uses the function largest to determine the largest element in a list:

                                                          242

[PDF page 243; printed page 243]
//*************************************************************
//This program uses a recursive function to find the largest element in a list.
//*************************************************************




                                                    243

[PDF page 244; printed page 244]
#include <iostream> using
namespace std;
int largest(const int list[], int lowerIndex, int upperIndex); int
main()
{ int intArray[10] = {23, 43, 35, 38, 67, 12, 76, 10, 34, 8};
         cout << "The largest element in intArray: "<< largest(intArray, 0, 9); cout
         << endl;
         return 0;
}


int largest(const int list[], int lowerIndex, int upperIndex)
{
         int max;
         if (lowerIndex == upperIndex) //size of the sublist is
         one return list[lowerIndex]; else
         {
                max = largest(list, lowerIndex + 1, upperIndex);
                if (list[lowerIndex] >= max) return
                list[lowerIndex]; else return max;
         }
}


Sample Run:
The largest element in intArray: 76


4.1.4 Print a Linked List in Reverse Order


The nodes of an ordered linked list (as constructed in Chapter 3) are in ascending order. Certain
applications, however,might require the data to be printed in descending order, which means that we
must print the list backward. We now discuss the function reversePrint. Given a pointer to a list, this
function prints the elements of the list in reverse order.


Consider the linked list shown in Figure 4-5.
                                                       244

[PDF page 245; printed page 245]
                                             FIGURE 4-5 Linked list



For the list in Figure 4-5, the output should be in the following form:
                       15 10 5


Because the links are in only one direction, we cannot traverse the list backward starting from the last
node. Let us see how we can effectively use recursion to print the list in reverse order.


Let us think in terms of recursion. We cannot print the info of the first node until we have printed the
remainder of the list (that is, the tail of the first node). Similarly, we cannot print the info of the second
node until we have printed the tail of the second node, and so on. Every time we consider the tail of a




                                                     245

[PDF page 246; printed page 246]
node, we reduce the size of the list by 1. Eventually, the size of the list is reduced to zero, in which case
the recursion stops.


Base Case:      List is empty: no action
General Case: List is nonempty
                1. Print the tail
                2. Print the element
Let us write this algorithm. (Suppose that current is a pointer to a linked list.)
if (current != NULL)
{ reversePrint(current->link); //print the tail cout <<
        current->info << endl; //print the node
}


Here, we do not see the base case; it is hidden. The list is printed only if the pointer, current, to the list is
not NULL. Also, inside the if statement the recursive call is on the tail of the list. Because eventually the
tail of a list will be empty, the if statement in the next call fails and the recursion stops. Also, note that
statements (for example, printing the info of the node) appear after the recursive call; thus, when the
transfer comes back to the calling function, we must execute the remaining statements. Recall that the
function exits only after the last statement executes. (By the ‘‘last statement,’’ we do not mean the
physical last statement, but rather the logical last statement.)

Let us write a function template to implement the previous algorithm and then apply it to a list.
template       <class      Type>       void
linkedListType<Type>::reversePrint
(nodeType<Type> *current) const
{
        if (current != NULL)
        { reversePrint(current->link); //print the tail cout <<
                current->info << " "; //print the node
        }
}


Consider the statement
reversePrint(first);

                                                      246

[PDF page 247; printed page 247]
where first is a pointer of type nodeType<Type>.


Let us trace the execution of this statement; which is a function call, for the list shown in Figure 4-5.
Because the formal parameter is a value parameter, the value of the actual parameter is passed to the
formal parameter. See Figure 4-6.




                                                   247

[PDF page 248; printed page 248]
                              FIGURE 4-6 Execution of the statement reversePrint(first);



4.1.4.1 The Function printListReverse


Now that we have written the function reversePrint, we can write the definition of the function
printListReverse, which can be used to print an ordered linked list contained in an object of the type
linkedListType. Its definition is as follows:


template <class Type>
void linkedListType<Type>::printListReverse() const
{ reversePrint(first);
        cout << endl;
}


We can include the function printListReverse as a public member in the definition of the class and the
function reversePrint as a private member. We include the function reversePrint as a private member
because it is used only to implement the function printListReverse.


                                                        248

[PDF page 249; printed page 249]
4.1.5 Fibonacci Number


Consider the following sequence of numbers:


                      1; 1; 2; 3; 5; 8; 13; 21; 34; . . .


Given the first two numbers of the sequence (say a1 and a2), the nth number an, n >= 3, of this sequence
is given by:




                                                        249

[PDF page 250; printed page 250]
                        an = an - 1 + an - 2


Thus:
a3 = a2 + a1 = 1 + 1 = 2, a4 = a3 + a2 = 2 + 1 = 3, and so on.


Such a sequence is called a Fibonacci sequence. In the previous sequence, a2 = 1 and a1 = 1. However,
given any first two numbers, using this process, you can determine the nth number, an, n >= 3, of such a
sequence. The number determined this way is called the nth Fibonacci number. Suppose a2 = 6 and a1 =
3.


Then:
a3 = a2 + a1 = 6 + 3 = 9; a4 = a3 + a2 = 9 + 6 = 15:


In this example, we write a recursive function, rFibNum, to determine the desired Fibonacci number. The
function rFibNum takes as parameters three numbers representing the first two numbers of the Fibonacci
sequence and a number n, the desired nth Fibonacci number. The function rFibNum returns the nth
Fibonacci number in the sequence.


Recall that the third Fibonacci number is the sum of the first two Fibonacci numbers. The fourth Fibonacci
number in a sequence is the sum of the second and third Fibonacci numbers. Therefore, to calculate the
fourth Fibonacci number, we add the second Fibonacci number and the third Fibonacci number (which is
itself the sum of the first two Fibonacci numbers). The following recursive algorithm calculates the nth
Fibonacci number, where a denotes the first Fibonacci number, b the second Fibonacci number, and n the
nth Fibonacci number:




                                                                      (Equation                      4-3)


The following recursive function implements this algorithm:
int rFibNum(int a, int b, int n)
{ if (n == 1) return a; else if (n == 2) return b; else return

                                                        250

[PDF page 251; printed page 251]
       rFibNum(a, b, n - 1) + rFibNum(a, b, n - 2);
}
Let us trace the execution of the following statement:
       cout << rFibNum(2, 3, 4) << endl;
In this statement, the first number is 2, the second number is 3, and we want to determine the 4th
Fibonacci number of the sequence. Figure 4-7 traces the execution of the expression rFibNum(2,3,4). The
value returned is 8, which is the 4th Fibonacci number of the sequence whose first number is 2 and whose
second number is 3.




                                                      251

[PDF page 252; printed page 252]
                                    FIGURE 4-7 Execution of rFibNum(2, 3, 4)



Figure 4-7 reveals that the execution of the recursive version of the program to calculate a Fibonacci
number is not as efficient as the execution of the nonrecursive version, even though the algorithm and
the method implementing the algorithm might be simpler. In the recursive version, some values are
calculated more than once. For example, to calculate rFibNum(2, 3, 4), the value rFibNum(2, 3, 2) is
calculated twice. So a recursive method might be easier to write, but might not execute as efficiently. The
section ‘‘Recursion or Iteration?’’, presented later in this chapter, discusses these two alternatives.


The following C++ program uses the function rFibNum:
//*************************************************************
// Given the first two numbers of a Fibonacci sequence, this //
program uses a recursive function to determine a specific //
number(s) of a Fibonacci sequence.
//*************************************************************
#include <iostream> using
namespace std; int
rFibNum(int a, int b, int n);

                                                     252

[PDF page 253; printed page 253]
int main()
{
       int firstFibNum;
       int secondFibNum; int
       nth;
       cout << "Enter the first Fibonacci number:
       "; cin >> firstFibNum; cout << endl;




                                                    253

[PDF page 254; printed page 254]
        cout << "Enter the second Fibonacci number: "; cin
        >> secondFibNum;
        cout << endl;
        cout << "Enter the position of the desired Fibonacci number:
        "; cin >> nth; cout << endl;
        cout << "The Fibonacci number at position " << nth << " is: " << rFibNum(firstFibNum,
        secondFibNum, nth) << endl;
        return 0;
}


int rFibNum(int a, int b, int n)
{ if (n == 1) return a; else if (n == 2) return b; else return
        rFibNum(a, b, n - 1) + rFibNum(a, b, n - 2);
}
Sample Run: In this sample run, the user input is shaded.
Enter the first Fibonacci number: 2
Enter the second Fibonacci number: 5
Enter the position of the desired Fibonacci number: 6
The Fibonacci number at position 6 is: 31


4.1.6 Tower of Hanoi


In the nineteenth century, a game called the Tower of Hanoi became popular in Europe. This game
represents work that is under way in the temple of Brahma. At the creation of the universe, priests in the
temple of Brahma were supposedly given three diamond needles, with one needle containing 64 golden
disks. Each golden disk is slightly smaller than the disk below it. The priests’ task is to move all 64 disks
from the first needle to the third needle. The rules for moving the disks are as follows:


    1. Only one disk can be moved at a time.
    2. The removed disk must be placed on one of the needles.
    3. A larger disk cannot be placed on top of a smaller disk.


The priests were told that once they had moved all the disks from the first needle to the third needle, the
                                                        254

[PDF page 255; printed page 255]
universe would come to an end.


Our objective is to write a program that prints the sequence of moves needed to transfer the disks from
the first needle to the third needle. Figure 4-8 shows the Tower of Hanoi problem with three disks.




                              FIGURE 4-8 Tower of Hanoi problem with three disks




                                                    255

[PDF page 256; printed page 256]
As before, we think in terms of recursion. Let us first consider the case when the first needle contains only
one disk. In this case, the disk can be moved directly from needle 1 to needle 3. So let us consider the case
when the first needle contains only two disks. In this case, first we move the first disk from needle 1 to
needle 2, and then we move the second disk from needle 1 to needle 3. Finally, we move the first disk
from needle 2 to needle 3. Next, we consider the case when the first needle contains three disks, and then
generalize this to the case of 64 disks (in fact, to an arbitrary number of disks).


Suppose that needle 1 contains three disks. To move disk number 3 to needle 3, the top two disks must
first be moved to needle 2. Disk number 3 can then be moved from needle 1 to needle 3. To move the top
two disks from needle 2 to needle 3, we use the same strategy as before. This time we use needle 1 as the
intermediate needle. Figure 4-9 shows a solution to the Tower of Hanoi problem with three disks.




                          FIGURE 4-9 Solution to Tower of Hanoi problem with three disks



Let us now generalize this problem to the case of 64 disks. To begin, the first needle contains all 64 disks.
Disk number 64 cannot be moved from needle 1 to needle 3 unless the top 63 disks are on the second
needle. So first we move the top 63 disks from needle 1 to needle 2, and then we move disk number 64

                                                      256

[PDF page 257; printed page 257]
from needle 1 to needle 3. Now the top 63 disks are all on needle 2. To move disk number 63 from needle
2 to needle 3, we first move the top 62 disks from needle 2 to needle 1, and then we move disk number
63 from needle 2 to needle 3. To move the remaining 62 disks, we use a similar procedure. This discussion
translates into the following recursive algorithm given in pseudocode.


Suppose that needle 1 contains n disks, where n ≥ 1.
   1. Move the top n - 1 disks from needle 1 to needle 2, using needle 3 as the intermediate needle.




                                                  257

[PDF page 258; printed page 258]
                              2. Move disk number n from needle 1 to needle 3.
    3. Move the top n - 1 disks from needle 2 to needle 3, using needle 1 as the intermediate needle.
This recursive algorithm translates into the following C++ function:
void moveDisks(int count, int needle1, int needle3, int needle2)
{
        if (count > 0)
        {
                moveDisks(count - 1, needle1, needle2, needle3);
                cout << "Move disk " << count << " from " << needle1<< " to " << needle3 << "." << endl;
                moveDisks(count - 1, needle2, needle3, needle1);
        }
}


4.1.6.1 Tower Of Hanoi: Analysis


Let us determine how long it would take to move all 64 disks from needle 1 to needle 3. If needle 1 contains
3 disks, then the number of moves required to move all 3 disks from needle 1 to needle 3 is 2 3 1 = 7.
Similarly, if needle 1 contains 64 disks, then the number of moves required to move all 64 disks from
needle 1 to needle 3 is 264 - 1. Because 210 = 1024 ≈ 1000 = 103, we have


264 = 24 x 260 ≈ 24 x 1018 = 1.6 x 1019



The number of seconds in one year is approximately 3.2 x 107. Suppose the priests move one disk per
second and they do not rest. Now:


1.6 x 1019 = 5 x 3.2 x 1018 = 5 x (3.2 x 107) x 1011 = (3.2 x 107) x (5 x 1011)


The time required to move all 64 disks from needle 1 to needle 3 is roughly 5 x 10 11 years. It is estimated
that our universe is about 15 billion years old (1.5 x 1010). Also, 5 x 1011 = 50 x 1010 ≈ 33 x (1.5 x 1010). This
calculation shows that our universe would last about 33 times as long as it already has.


Assume that a computer can generate 1 billion (109) moves per second. Then the number of moves that
the computer can generate in one year is:
                                                        258

[PDF page 259; printed page 259]
(3.2 x 107) x 109 = 3.2 x 1016


So the computer time required to generate 264 moves is: 264
≈ 1.6 x 1019 = 1.6 x 1016 x 103 = (3.2 x 1016) x 500



Thus, it would take about 500 years for the computer to generate 264 moves at the rate of 1 billion moves
per second.


4.1.7 Converting a Number from Decimal to Binary




                                                       259

[PDF page 260; printed page 260]
In this example, we design a program that uses recursion to convert a nonnegative integer in decimal
format—that is, base 10—into the equivalent binary number—that is, base 2. First we define some terms.


Let x be an integer. We call the remainder of x after division by 2 the rightmost bit of x. Thus, the rightmost
bit of 33 is 1 because 33 % 2 is 1, and the rightmost bit of 28 is 0 because 28 % 2 is 0. (Recall that in C++,
% is the mod operator; it produces the remainder of the integer division.)


We first illustrate the algorithm to convert an integer in base 10 to the equivalent number in binary format
with the help of an example.


Suppose we want to find the binary representation of 35. First, we divide 35 by 2. The quotient is 17 and
the remainder—that is, the rightmost bit of 35—is 1. Next, we divide 17 by 2. The quotient is 8 and the
remainder—that is, the rightmost bit of 17—is 1. Next, we divide 8 by 2. The quotient is 4 and the
remainder—that is, the rightmost bit of 8—is 0. We continue this process until the quotient becomes 0.


The rightmost bit of 35 cannot be printed until we have printed the rightmost bit of 17. The rightmost bit
of 17 cannot be printed until we have printed the rightmost bit of 8, and so on. Thus, the binary
representation of 35 is the binary representation of 17 (that is, the quotient of 35 after division by 2),
followed by the rightmost bit of 35.


Thus, to convert an integer num in base 10 into the equivalent binary number, we first convert the
quotient num / 2 into an equivalent binary number, and then append the rightmost bit of num to the
binary representation of num / 2.


This discussion translates into the following recursive algorithm, where binary(num) denotes the binary
representation of num:


1. binary(num) = num if num = 0.
2. binary(num) = binary(num / 2) followed by num % 2 if num > 0.
The following recursive function implements this algorithm:
void decToBin(int num, int base)
{
       if (num > 0)

                                                     260

[PDF page 261; printed page 261]
       {
              decToBin(num / base, base);
              cout << num % base;
       }
}
Figure 4-10 traces the execution of the following statement:
decToBin(13, 2);
where num is 13 and base is 2.




                                                  261

[PDF page 262; printed page 262]
                                    FIGURE 4-10 Execution of decToBin(13, 2)



Because the if statement in call 5 fails, this call does not print anything. The first output is produced by
call 4, which prints 1; the second output is produced by call 3, which prints 1; the third output is produced
by call 2, which prints 0; and the fourth output is produced by call 1, which prints 1. Thus, the output of
the statement:


decToBin(13, 2);
is:


1101


The following C++ program tests the function decToBin:
//****************************************************** //
Program: Decimal to binary
// This program uses recursion to find the binary //

                                                     262

[PDF page 263; printed page 263]
representation of a nonnegative integer.
//******************************************************
#include <iostream> using
namespace std; void
decToBin(int num, int base); int
main()
{




                                           263
```
