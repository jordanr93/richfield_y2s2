---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "285-307"
printed_pages: "285-307"
section: "Stacks"
chapter: "TOPIC 5: STACKS"
keywords:
  - "stack"
  - "stacks"
  - "you"
  - "computer"
  - "calls"
  - "recursive"
  - "learn"
  - "implement"
  - "list"
  - "science"
  - "linked"
  - "called"
---

# Stacks

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 285-307 | printed pages 285-307

Related sections: [Linked Lists](3-1-linked-lists.md), [Linked Implementation of Stacks](5-2-linked-implementation-of-stacks.md), [TOPIC 10: GRAPHS](10-topic-10-graphs.md), [Application of Stacks: Postfix Expressions Calculator](5-4-application-of-stacks-postfix-expressions-calculator.md), [Operations on Graphs](10-3-operations-on-graphs.md), [Queue Operations](6-1-queue-operations.md)

## Extracted Text

```text
[PDF page 285; printed page 285]
5     TOPIC 5: STACKS




                                                    285

[PDF page 286; printed page 286]
           LEARNING OUTCOMES:
           After studying this topic you should be able to:

              •   Learn about stacks

              •   Examine various stack operations

              •   Learn how to implement a stack as an array

              •   Learn how to implement a stack as a linked list

              •   Discover stack applications

              •   Learn how to use a stack to remove recursion




This chapter discusses a very useful data structure called a stack. It has numerous applications in computer
science.


5.1 Stacks


Suppose that you have a program with several functions. To be specific, suppose that you have the
functions A, B, C, and D in your program. Now suppose that function A calls function B, function B calls
function C, and function C calls function D. When function D terminates, control goes back to function C;
when function C terminates, control goes back to function B; and when function B terminates, control
goes back to function A. During program execution, how do you think the computer keeps track of the
function calls? What about recursive functions? How does the computer keep track of the recursive calls?
In Chapter 6, we designed a recursive function to print a linked list backward. What if you want to write a
nonrecursive algorithm to print a linked list backward?


This section discusses the data structure called the stack, which the computer uses to implement function
calls. You can also use stacks to convert recursive algorithms into nonrecursive algorithms, especially
recursive algorithms that are not tail recursive. Stacks have numerous other applications in computer
science. After developing the tools necessary to implement a stack, we will examine some applications of
stacks.




                                                    286

[PDF page 287; printed page 287]
A stack is a list of homogenous elements in which the addition and deletion of elements occurs only at
one end, called the top of the stack. For example, in a cafeteria, the second tray in a stack of trays can be
removed only if the first tray has been removed. For another example, to get to your favorite computer
science book, which is underneath your math and history books, you must first remove the math and




history books. After removing these books, the computer science book becomes the top book—that is,
the top element of the stack. Figure 5-1 shows some examples of stacks.
                                       FIGURE 5-1 Various examples of stacks



The elements at the bottom of the stack have been in the stack the longest. The top element of the stack
is the last element added to the stack. Because the elements are added and removed from one end (that
is, the top), it follows that the item that is added last will be removed first. For this reason, a stack is also
called a Last In First Out (LIFO) data structure.


Stack: A data structure in which the elements are added and removed from one end only; a Last In First
Out (LIFO) data structure.


Now that you know what a stack is, let us see what kinds of operations can be performed on a stack.
Because new items can be added to the stack, we can perform the add operation, called push, to add an
element onto the stack. Similarly, because the top item can be retrieved and/or removed from the stack,
we can perform the operation top to retrieve the top element of the stack, and the operation pop to
remove the top element from the stack.


The push, top, and pop operations work as follows: Suppose there are boxes lying on the floor that need
to be stacked on a table. Initially, all of the boxes are on the floor and the stack is empty. (See Figure 52.)




                                              FIGURE 5-2 Empty stack



                                                       287

[PDF page 288; printed page 288]
First we push box A onto the stack. After the push operation, the stack is as shown in Figure 5-3(a).




                                          FIGURE 5-3 Stack operations



We then push box B onto the stack. After this push operation, the stack is as shown in Figure 5-3(b). Next,
we push box C onto the stack. After this push operation, the stack is as shown in Figure 5-3(c).
Next, we look at the top element of the stack. After this operation, the stack is unchanged and shown in
Figure 5-3(d). We then push box D onto the stack. After this push operation, the stack is as shown in Figure
5-3(e). Next, we pop the stack. After the pop operation, the stack is as shown in Figure 5-3(f).


An element can be removed from the stack only if there is something in the stack, and an element can be
added to the stack only if there is room. The two operations that immediately follow from push, top, and
pop are isFullStack (checks whether the stack is full) and isEmptyStack (checks whether the stack is empty).
Because a stack keeps changing as we add and remove elements, the stack must be empty before we first
start using it. Thus, we need another operation, called initializeStack, which initializes the stack to an
empty state. Therefore, to successfully implement a stack, we need at least these six operations, which
are described next. (We might also need other operations on a stack, depending on the specific
implementation.)
        initializeStack—Initializes the stack to an empty state.
        isEmptyStack—Determines whether the stack is empty. If the stack is empty, it returns the value
    true; otherwise, it returns the value false.

      isFullStack—Determines whether the stack is full. If the stack is full, it returns the value true;
       otherwise, it returns the value false.

      push—Adds a new element to the top of the stack. The input to this operation consists of the stack
       and the new element. Prior to this operation, the stack must exist and must not be full.

      top—Returns the top element of the stack. Prior to this operation, the stack must exist and must
       not be empty.

      pop—Removes the top element of the stack. Prior to this operation, the stack must exist and must
       not be empty.
                                                     288

[PDF page 289; printed page 289]
The     following      abstract     class       stackADT     defines     these   operations   as   an   ADT:
//*************************************************************
// This class specifies the basic operations on a stack.
//************************************************************
* template <class Type> class stackADT
{ public: virtual void initializeStack() = 0;
                //Method to initialize the stack to an empty state.
                //Postcondition: Stack is empty.


                virtual bool isEmptyStack() const = 0;
                //Function to determine whether the stack is empty.
                //Postcondition: Returns true if the stack is empty, //
                otherwise returns false.


                virtual bool isFullStack() const = 0;
                //Function to determine whether the stack is full.
                //Postcondition: Returns true if the stack is full, //
                otherwise returns false.


                virtual void push(const Type& newItem) = 0; //Function
                to add newItem to the stack.
                //Precondition: The stack exists and is not full.
                //Postcondition: The stack is changed and newItem is added //
                to the top of the stack.


                virtual Type top() const = 0;
                //Function to return the top element of the stack. //Precondition:
                The stack exists and is not empty.
                //Postcondition: If the stack is empty, the program //
                terminates; otherwise, the top element of the stack //
                is returned.



                                                           289

[PDF page 290; printed page 290]
                virtual void pop() = 0;
                //Function to remove the top element of the stack.
                //Precondition: The stack exists and is not empty.
                //Postcondition: The stack is changed and the top element //
                is removed from the stack.
};
Figure 5-4 shows the UML class diagram of the class stackADT.




                                FIGURE 5-4 UML class diagram of the class stackADT



We now consider the implementation of our abstract stack data structure. Functions such as push and
 pop that are required to implement a stack are not available to C++ programmers. We must write the
 functions to implement the stack operations.


Because all the elements of a stack are of the same type, a stack can be implemented as either an array
 or a linked structure. Both implementations are useful and are discussed in this chapter.




5.1.1 Implementation of Stacks as Arrays


 Because all the elements of a stack are of the same type, you can use an array to implement a stack. The
 first element of the stack can be put in the first array slot, the second element of the stack in the second
 array slot, and so on. The top of the stack is the index of the last element added to the stack.


In this implementation of a stack, stack elements are stored in an array, and an array is a random access
 data structure; that is, you can directly access any element of the array. However, by definition, a stack is
 a data structure in which the elements are accessed (popped or pushed) at only one end—that is, a Last
 In First Out data structure. Thus, a stack element is accessed only through the top, not through the bottom

                                                      290

[PDF page 291; printed page 291]
or middle. This feature of a stack is extremely important and must be recognized in the beginning.


To keep track of the top position of the array, we can simply declare another variable, called stackTop.


The following class, stackType, implements the functions of the abstract class stackADT. By using a pointer,
we can dynamically allocate arrays, so we will leave it for the user to specify the size of the array (that is,
the stack size). We assume that the default stack size is 100. Because the class stackType has a pointer
member variable (the pointer to the array to store the stack elements), we must overload the assignment
operator and include the copy constructor and destructor. Moreover, we give a generic definition of the
stack. Depending on the specific application, we can pass the stack element type when we declare a stack
object.
//*************************************************************
// This class specifies the basic operation on a stack as an array.
//******************************************************
******* template <class Type>
class stackType: public stackADT<Type>
{
          public:
                    const stackType<Type>& operator=(const stackType<Type>&); //Overload
                    the assignment operator.


                    void initializeStack();
                    //Function to initialize the stack to an empty state.
                    //Postcondition: stackTop = 0;


                    bool isEmptyStack() const;
                    //Function to determine whether the stack is empty.
                    //Postcondition: Returns true if the stack is empty, //
                    otherwise returns false.


                    bool isFullStack() const;




                                                         291

[PDF page 292; printed page 292]
//Function to determine whether the stack is full.
//Postcondition: Returns true if the stack is full, // otherwise returns
false.


void push(const Type& newItem);
//Function to add newItem to the stack.
//Precondition: The stack exists and is not full.
//Postcondition: The stack is changed and newItem is
// added to the top of the stack.


Type top() const;
//Function to return the top element of the stack. //Precondition: The stack exists
and is not empty.
//Postcondition: If the stack is empty, the program // terminates;
otherwise, the top element of the stack // is returned.


void pop();
//Function to remove the top element of the stack.
//Precondition: The stack exists and is not empty.
//Postcondition: The stack is changed and the top element is // removed from the
stack.


stackType(int stackSize = 100);
//Constructor
//Create an array of the size stackSize to hold //the stack elements.
The default stack size is 100.
//Postcondition: The variable list contains the base address
// of the array, stackTop = 0, and maxStackSize = stackSize


stackType(const stackType<Type>& otherStack);
//Copy constructor
                ~stackType();

                                                     292

[PDF page 293; printed page 293]
               //Destructor
              //Remove all the elements from the stack.
               //Postcondition: The array (list) holding the stack //
               elements is deleted.


       private:
              int maxStackSize; //variable to store the maximum stack size
               int stackTop; //variable to point to the top of the stack Type
               *list; //pointer to the array that holds the stack elements


               void copyStack(const stackType<Type>& otherStack); //Function
               to make a copy of otherStack.
               //Postcondition: A copy of otherStack is created and assigned //
               to this stack.
};
Figure 5-5 shows the UML class diagram of the class stackType.




                                FIGURE 5-5 UML class diagram of the class stackType



Figure 5-6 shows this data structure, wherein stack is an object of type stackType. Note that stackTop can
range from 0 to maxStackSize. If stackTop is nonzero, then stackTop - 1 is the index of the top element of
the stack. Suppose that maxStackSize = 100.




                                                       293

[PDF page 294; printed page 294]
                                            FIGURE 5-6 Example of a stack

 Note that the pointer list contains the base address of the array (holding the stack elements)—that is, the
 address of the first array component. Next we discuss how to implement the member functions of the
 class stackType.


5.1.2 Initialize Stack


 Let us consider the initializeStack operation. Because the value of stackTop indicates whether the stack is
 empty, we can simply set stackTop to 0 to initialize the stack. (See Figure 5-7.)




                                               FIGURE 5-7 Empty stack

 The definition of the function initializeStack is as follows:
 template <class Type>
 void stackType<Type>::initializeStack()
 {
         stackTop = 0;
 }                                               //end initializeStack


5.1.3 Empty Stack


                                                        294

[PDF page 295; printed page 295]
 We have seen that the value of stackTop indicates whether the stack is empty. If stackTop is 0, the stack
 is empty; otherwise, the stack is not empty. The definition of the function isEmptyStack is as follows:


 template <class Type>
 bool stackType<Type>::isEmptyStack() const
 {
        return(stackTop == 0);
 }                                             //end isEmptyStack


5.1.4 Full Stack


 Next, we consider the operation isFullStack. It follows that the stack is full if stackTop is equal to
 maxStackSize. The definition of the function isFullStack is as follows:


 template <class Type>
 bool stackType<Type>::isFullStack() const
 {
        return(stackTop == maxStackSize);




                                                     295

[PDF page 296; printed page 296]
 }                                             //end isFullStack


5.1.5 Push


Adding, or pushing, an element onto the stack is a two-step process. Recall that the value of stackTop
 indicates the number of elements in the stack, and stackTop - 1 gives the position of the top element of
 the stack. Therefore, the push operation is as follows:


     1. Store the newItem in the array component indicated by stackTop.
     2. Increment stackTop.


Figure 5-8(a) shows the stack before pushing 'y' into the stack. Figure 5-8(b) shows the stack after pushing
 'y' into the stack.




                               FIGURE 5-8 Stack before and after the push operation

The definition of the function push is as follows:
template <class Type>
void stackType<Type>::push(const Type& newItem)
{
         if (!isFullStack())
         {
                 list[stackTop] = newItem;                      //add newItem at the top stackTop++;
                                               //increment stackTop
         }
         else
                                                      296

[PDF page 297; printed page 297]
cout << "Cannot     add to a full stack." << endl;
     }                                                             //end push


     If we try to add a new item to a full stack, the resulting condition is called an overflow. Error checking for
     an overflow can be handled in different ways. One way is as shown previously. Or, we can check for an
     overflow before calling the function push, as shown next (assuming stack is an object of type stackType).


                            if (!stack.isFullStack()) stack.push(newItem);




                                                         297

[PDF page 298; printed page 298]
5.1.6 Return the Top Element


The operation top returns the top element of the stack. Its definition is as follows:


 template <class Type>
 Type stackType<Type>::top() const
 {
        assert(stackTop != 0);                   //if stack is empty, terminate the
                                                 //program
        return list[stackTop - 1];               //return the element of the stack
                                                 //indicated by stackTop - 1
 }                                               //end top



5.1.7 Pop


To remove, or pop, an element from the stack, we simply decrement stackTop by 1. Figure 5-9(a) shows
 the stack before popping 'D' from the stack. Figure 5-9(b) shows the stack after popping 'D' from the stack.




                                 FIGURE 5-9 Stack before and after the pop operation

The definition of the function pop is as follows:
template <class Type>
void stackType<Type>::pop()
{
        if (!isEmptyStack())
                stackTop--; //decrement stackTop else cout << "Cannot
                                                 298

[PDF page 299; printed page 299]
       remove from an empty stack." << endl;
}                                           //end pop


If we try to remove an item from an empty stack, the resulting condition is called an underflow. Error
checking for an underflow can be handled in different ways. One way is as shown previously. Or, we can
check for an underflow before calling the function pop, as shown next (assuming stack is an object of type
stackType).




                                                  299

[PDF page 300; printed page 300]
                          if (!stack.isEmptyStack()) stack.pop();
5.1.8 Copy Stack


The function copyStack makes a copy of a stack. The stack to be copied is passed as a parameter to the
 function copyStack. We will, in fact, use this function to implement the copy constructor and overload the
 assignment operator. The definition of this function is as follows:


template <class Type>
void stackType<Type>::copyStack(const stackType<Type>& otherStack)
{
        delete [] list;
        maxStackSize = otherStack.maxStackSize; stackTop
        = otherStack.stackTop;


        list = new Type[maxStackSize];
                                                 //copy otherStack into this stack
        for (int j = 0; j < stackTop; j++)
                list[j] = otherStack.list[j];


 }                                               //end copyStack


5.1.9 Constructor and Destructor


The functions to implement the constructor and the destructor are straightforward. The constructor with
 parameters sets the stack size to the size specified by the user, sets stackTop to 0, and creates an
 appropriate array in which to store the stack elements. If the user does not specify the size of the array in
 which to store the stack elements, the constructor uses the default value, which is 100, to create an array
 of size 100. The destructor simply deallocates the memory occupied by the array (that is, the stack) and
 sets stackTop to 0. The definitions of the constructor and destructor are as follows:


template <class Type>
stackType<Type>::stackType(int stackSize)
{
                                                       300

[PDF page 301; printed page 301]
if (stackSize <= 0)
{
        cout << "Size of the array to hold the stack must "<< "be positive." << endl;
        cout << "Creating an array of size 100." << endl; maxStackSize = 100;
}

else

        maxStackSize = stackSize;                     //set the stack size to
                                                      //the value specified by
                                                      //the parameter stackSize
stackTop = 0;                                         //set stackTop to 0
list = new Type[maxStackSize];                        //create the array to
                                                      //hold the stack elements




                                            301

[PDF page 302; printed page 302]
 }                                                            //end constructor


 template <class Type>
 stackType<Type>::~stackType() //destructor
 {
        delete [] list;                                       //deallocate the memory occupied
                                                              //by the array
 }                                                            //end destructor



5.1.10 Copy Constructor


 The copy constructor is called when a stack object is passed as a (value) parameter to a function. It copies
 the values of the member variables of the actual parameter into the corresponding member variables of
 the formal parameter. Its definition is as follows:


 template <class Type>
 stackType<Type>::stackType(const stackType<Type>& otherStack)
 {
        list = NULL;
        copyStack(otherStack);
 }                                                            //end copy constructor


5.1.11 Overloading the Assignment Operator (=)


 Recall that for classes with pointer member variables, the assignment operator must be explicitly
 overloaded. The definition of the function to overload the assignment operator for the class stackType is
 as follows:


 template <class Type>
 const stackType<Type>& stackType<Type>::operator=(const stackType<Type>& otherStack)
 {
        if (this != &otherStack)                              //avoid self-copy

                                                       302

[PDF page 303; printed page 303]
                 copyStack(otherStack);
          return *this;
 }                                                           //end operator=


5.1.12 Stack Header File


 Now that you know how to implement the stack operations, you can put the definitions of the class and
 the functions to implement the stack operations together to create the stack header file. For the sake of
 completeness, we next describe the header file. Suppose that the name of the header file containing the
 definition of the class stackType is myStack.h. We will refer to this header file in any program that uses a
 stack.


 //Header file: myStack.h
 #ifndef H_StackType
 #define H_StackType




                                                    303

[PDF page 304; printed page 304]
#include <iostream>
#include <cassert>


#include "stackADT.h" using
 namespace std;
//Place the definition of the class template stackType, as given //previously
 in this chapter, here.
//Place the definitions of the member functions as discussed here. #endif


The analysis of the stack operations is similar to the operations of the class arrayListType. We, therefore,
 provide only a summary in Table 5-1.


                  TABLE 5-1: Time complexity of the operations of the class stackType on a stack with n




                                                        elements



EXAMPLE 5-1
Before we give a programming example, let us first write a simple program that uses the class stackType
 and tests some of the stack operations. Among others, we will test the assignment operator and the copy
                                                  304

[PDF page 305; printed page 305]
constructor.       The        program         and         its   output   are   as   follows:
//*************************************************************
// This program tests various operations of a stack.
//*************************************************************
#include <iostream>
#include "myStack.h"
using namespace std;




                                                    305

[PDF page 306; printed page 306]
void testCopyConstructor(stackType<int> otherStack); int
main()
{

         stackType<int> stack(50);
         stackType<int> copyStack(50);
         stackType<int>
         dummyStack(100);
         stack.initializeStack();
         stack.push(23); stack.push(45);
         stack.push(38);
         copyStack = stack;                             //copy stack into copyStack


         cout << "The elements of copyStack: ";

         while (!copyStack.isEmptyStack())              //print copyStack
         {
                 cout << copyStack.top() << " ";
                 copyStack.pop();
         }
         cout << endl;


         copyStack = stack;
         testCopyConstructor(stack);                    //test the copy constructor


         if (!stack.isEmptyStack()) cout << "The original stack is
                 not empty." << endl
                         << "The top element of the original stack: "
                         << copyStack.top() << endl;


         dummyStack = stack;                            //copy stack into dummyStack
         cout << "The elements of dummyStack: ";
         while (!dummyStack.isEmptyStack())             //print dummyStack
         {
                 cout << dummyStack.top() << " ";
                                                       306

[PDF page 307; printed page 307]
              dummyStack.pop();
       }


       cout << endl;


       return 0;
}


void testCopyConstructor(stackType<int> otherStack)
{




                                                307
```
