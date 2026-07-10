---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "308-327"
printed_pages: "308-327"
section: "Linked Implementation of Stacks"
chapter: "TOPIC 5: STACKS"
keywords:
  - "stack"
  - "type"
  - "stacktop"
  - "linked"
  - "array"
  - "representation"
  - "can"
  - "top"
  - "empty"
  - "const"
  - "linear"
  - "number"
---

# Linked Implementation of Stacks

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 308-327 | printed pages 308-327

Related sections: [Linked Implementation of Queues](6-3-linked-implementation-of-queues.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Implementation of Object-Oriented Designs](../../information-systems-622-study-guide/sections/5-4-2-implementation-of-object-oriented-designs.md), [Components of the STL](2-1-components-of-the-stl.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md)

## Extracted Text

```text
[PDF page 308; printed page 308]
5.2 Linked Implementation of Stacks


Because an array size is fixed, in the array (linear) representation of a stack, only a fixed number of
 elements can be pushed onto the stack. If in a program the number of elements to be pushed exceeds the
 size of the array, the program might terminate in an error. We must overcome this problem.


We have seen that by using pointer variables we can dynamically allocate and deallocate memory, and by
 using linked lists we can dynamically organize data (such as an ordered list). Next, we will use these
 concepts to implement a stack dynamically.


Recall that in the linear representation of a stack, the value of stackTop indicates the number of elements
 in the stack, and the value of stackTop - 1 points to the top item in the stack. With the help of stackTop,
 we can do several things: Find the top element, check whether the stack is empty, and so on.


Similar to the linear representation, in a linked representation stackTop is used to locate the top element
 in the stack. However, there is a slight difference. In the former case, stackTop gives the index of the array.
 In the latter case, stackTop gives the address (memory location) of the top element of the stack.
                                                       308

[PDF page 309; printed page 309]
The    following     class    implements       the    functions     of     the   abstract   class   stackADT:
//*************************************************************
// This class specifies the basic operation on a stack as a linked list.
//*************************************************************
//Definition of the node template
<class Type>
struct nodeType
{
        Type info;
        nodeType<Type> *link;
};


template <class Type>
class linkedStackType: public stackADT<Type>




                                                       309

[PDF page 310; printed page 310]
{
    public:
              const linkedStackType<Type>& operator=(const linkedStackType<Type>&); //Overload
              the assignment operator.


              bool isEmptyStack() const;
              //Function to determine whether the stack is empty.
              //Postcondition: Returns true if the stack is empty; //
              otherwise returns false.


              bool isFullStack() const;
              //Function to determine whether the stack is full.
              //Postcondition: Returns false.


              void initializeStack();
              //Function to initialize the stack to an empty state.
              //Postcondition: The stack elements are removed;
              // stackTop = NULL;


              void push(const Type& newItem);
              //Function to add newItem to the stack.
              //Precondition: The stack exists and is not full.
              //Postcondition: The stack is changed and newItem is
              // added to the top of the stack.


              Type top() const;
              //Function to return the top element of the stack. //Precondition:
              The stack exists and is not empty.
              //Postcondition: If the stack is empty, the program
              // terminates; otherwise, the top element of //
              the stack is returned.


              void pop();
                                                    310

[PDF page 311; printed page 311]
//Function to remove anged and the top // element is removed from the stack.
the top element of the
stack.                   linkedStackType(); //Default
//Precondition: The      constructor
stack exists and is not //Postcondition: stackTop = NULL;
empty.
/                        linkedStackType(const linkedStackType<Type>& otherStack);
/                        //Copy constructor
P
o                        ~linkedStackType();
s
                         //Destructor
t
                         //Postcondition: All the elements of the stack are removed.
c
o
n
d
i
t
i
o
n
:
T
h
e
s
t
a
c
k
i
s
c
h
                                                            311

[PDF page 312; printed page 312]
        private:
                nodeType<Type> *stackTop;              //pointer to the stack


                void copyStack(const linkedStackType<Type>& otherStack); //Function
                to make a copy of otherStack.
                //Postcondition: A copy of otherStack is created and //
                assigned to this stack.
};


We leave the UML class diagram of the class linkedStackType as an exercise for you. (See Exercise 12 at
the end of this chapter.)


EXAMPLE 5-2
Suppose that stack is an object of type linkedStackType. Figure 5-10(a) shows an empty stack and Figure
5-10(b) shows a nonempty stack.




                                  FIGURE 5-10 Empty and nonempty linked stacks



In Figure 5-10(b), the top element of the stack is C; that is, the last element pushed onto the stack is C.
Next, we discuss the definitions of the functions to implement the operations of a linked stack.
5.3.1 Default Constructor
The first operation that we consider is the default constructor. The default constructor initializes the stack
to an empty state when a stack object is declared. Thus, this function sets stackTop to NULL. The definition
of this function is as follows:
template <class Type>
linkedStackType<Type>::linkedStackType()
{

                                                     312

[PDF page 313; printed page 313]
    stackTop = NULL;
}




                       313

[PDF page 314; printed page 314]
5.3.2 Empty Stack and Full Stack


The operations isEmptyStack and isFullStack are quite straightforward. The stack is empty if stackTop is
NULL. Also, because the memory for a stack element is allocated and deallocated dynamically, the stack
is never full. (The stack is full only if we run out of memory.) Thus, the function isFullStack always returns
the value false. The definitions of the functions to implement these operations are as follows:


template <class Type>
bool linkedStackType<Type>::isEmptyStack() const
{
        return(stackTop == NULL);
}                                             //end isEmptyStack


template <class Type>
bool linkedStackType<Type>::isFullStack() const
{ return false;
}                                             //end isFullStack


Recall that in the linked implementation of stacks, the function isFullStack does not apply because logically
the stack is never full. However, you must provide its definition because it is included as an abstract
function in the parent class stackADT.


5.3.3 Initialize Stack


The operation initializeStack reinitializes the stack to an empty state. Because the stack might contain
some elements and we are using a linked implementation of a stack, we must deallocate the memory
occupied by the stack elements and set stackTop to NULL. The definition of this function is as follows:


template <class Type>
void linkedStackType<Type>:: initializeStack()
{
        nodeType<Type> *temp;                 //pointer to delete the node
        while (stackTop != NULL)              //while there are elements in the stack
                                                    314

[PDF page 315; printed page 315]
       {
               temp = stackTop;               //set temp to point to the current node
               stackTop = stackTop->link;     //advance stackTop to the next node delete
               temp;                  //deallocate memory occupied by temp
       }
}                                             //end initializeStack


Next, we consider the push, top, and pop operations. From Figure 5-10(b), it is clear that the newElement
will be added (in the case of push) at the beginning of the linked list pointed to by stackTop. In the case of
pop, the node pointed to by stackTop will be removed. In both cases, the value of the pointer stackTop is
updated. The operation top returns the info of the node to which stackTop is pointing.




5.3.4 Push




                                                    315

[PDF page 316; printed page 316]
Consider the stack shown in Figure 5-11.




                                  FIGURE 5-11 Stack before the push operation



Figure 5-12 shows the steps of the push operation. (Assume that the new element to be pushed is 'D'.)




                                           FIGURE 5-12 Push operation



As shown in Figure 5-12, to push 'D' into the stack, first we create a new node and store 'D' into it. Next,
we put the new node on top of the stack. Finally, we make stackTop point to the top element of the stack.
The definition of the function push is as follows:


template <class Type>
void linkedStackType<Type>::push(const Type& newElement)
{
       nodeType<Type> *newNode;                //pointer to create the new node
       newNode = new nodeType<Type>; //create the node
       newNode->info = newElement; //store newElement in the node newNode->link =
       stackTop; //insert newNode before stackTop
                                                     316

[PDF page 317; printed page 317]
       stackTop = newNode;                     //set stackTop to point to the top node
}                                              //end push


We do not need to check whether the stack is full before we push an element onto the stack because in
this implementation, logically, the stack is never full.




                                                     317

[PDF page 318; printed page 318]
5.3.5 Return the Top Element

The operation to return the top element of the stack is quite straightforward. Its definition is as follows:
template <class Type>
Type linkedStackType<Type>::top() const
{

       assert(stackTop != NULL);       //if stack is empty, terminate the program
       return stackTop->info;          //return the top element
}                                      //end top




5.3.6 Pop


Now we consider the pop operation, which removes the top element of the stack. Consider the stack
shown in Figure 5-13.




                                   FIGURE 5-13 Stack before the pop operation



Figure 5-14 shows the pop operation.




                                                     318

[PDF page 319; printed page 319]
FIGURE 5-14 Pop operation




          319

[PDF page 320; printed page 320]
As shown in Figure 5-14, first we make a pointer temp point to the top of the stack.Next we make stackTop
point to the next element of the stack, which will become the top element of the stack. Finally, we delete
temp. The definition of the function pop is as follows:


template <class Type>
void linkedStackType<Type>::pop()
{
       nodeType<Type> *temp;                          //pointer to deallocate memory if
       (stackTop != NULL)
       {
               temp = stackTop;                       //set temp to point to the top node
               stackTop = stackTop->link;     //advance stackTop to the next node delete temp;
               //delete the top node
       }
       else cout << "Cannot remove from an empty stack." << endl;
}                                                     //end pop


5.3.7 Copy Stack


The function copyStack makes an identical copy of a stack. Its definition is similar to the definition of
copyList for linked lists, given in Chapter 3. The definition of the function copyStack is as follows:


template <class Type>
void linkedStackType<Type>::copyStack(const linkedStackType<Type>& otherStack)
{
       nodeType<Type> *newNode, *current, *last;

       if (stackTop != NULL)                                  //if stack is nonempty, make it empty
               initializeStack(); if
       (otherStack.stackTop == NULL)
       stackTop = NULL;
       else
       {


                                                     320

[PDF page 321; printed page 321]
current = otherStack.stackTop;            //set current to point
                                          //to the stack to be copied
                                          //copy the stackTop element of the stack
stackTop = new nodeType<Type>;            //create the node
stackTop->info = current->info;           //copy the info
stackTop->link = NULL;                    //set the link field to NULL
last = stackTop;                          //set last to point to the node
current = current->link;                  //set current to point to the
                                          //next node
                                          //copy the remaining stack
while (current != NULL)
{
       newNode = new
       nodeType<Type>; newNode->info
       = current->info; newNode->link =
       NULL; last->link = newNode;




                                  321

[PDF page 322; printed page 322]
                         last = newNode;
                         current = current->link;
                }                                         //end while
        }                                                 //end else
}                                                         //end copyStack


5.3.8 Constructors and Destructors


We have already discussed the default constructor. To complete the implementation of the stack
operations, next we give the definitions of the functions to implement the copy constructor and the
destructor, and to overload the assignment operator. (These functions are similar to those discussed for
linked lists in Chapter 3.)


//copy constructor template
<class Type>
linkedStackType<Type>::linkedStackType(const linkedStackType<Type>& otherStack)
{
        stackTop = NULL;
        copyStack(otherStack);
}               //end copy constructor


//destructor template
<class Type>
linkedStackType<Type>::~linkedStackType()
{
        initializeStack();
}               //end destructor


5.3.9 Overloading the Assignment Operator (=)


The definition of the function to overload the assignment operator for the class linkedStackType is as
follows:


                                                    322

[PDF page 323; printed page 323]
template <class Type>
const linkedStackType<Type>& linkedStackType<Type>::operator= (const
linkedStackType<Type>& otherStack)
{
       if (this != &otherStack)            //avoid self-copy copyStack(otherStack);
       return *this;
}                                          //end operator=


Table 5-2 summarizes the time complexity of the operations to implement a linked stack.




                                                 323

[PDF page 324; printed page 324]
                 TABLE 5-2: Time complexity of the operations of the class linkedStackType on a stack




                                                   with n elements

The definition of a stack, and the functions to implement the stack operations discussed previously, are
generic. Also, as in the case of an array representation of a stack, in the linked representation of a stack,
we put the definition of the stack and the functions to implement the stack operations together in a
(header) file. A client’s program can include this header file via the include statement.

The program in Example 5-3 illustrates how a linkedStack object is used in a program.
EXAMPLE 5-3
We assume that the definition of the class linkedStackType and the functions to implement the stack
operations are included in the header file "linkedStack.h".
//*************************************************************
// This program tests various operations of a linked stack.
//*************************************************************
#include <iostream> #include
"linkedStack.h" using
namespace std;
void testCopy(linkedStackType<int> OStack); int
                                                        324

[PDF page 325; printed page 325]
main()
{
         linkedStackType<int> stack; linkedStackType<int>
         otherStack;
         linkedStackType<int> newStack;




                                                  325

[PDF page 326; printed page 326]
               //Add elements into stack
       stack.push(34); stack.push(43);
       stack.push(27);


               //Use the assignment operator to copy the elements
               //of stack into newStack newStack
       = stack;


       cout << "After the assignment operator, newStack: "<< endl;


               //Output the elements of newStack while
       (!newStack.isEmptyStack())
       {
               cout << newStack.top() << endl; newStack.pop();
       }


               //Use the assignment operator to copy the elements
               //of stack into otherStack otherStack
       = stack;


       cout << "Testing the copy constructor." << endl;
       testCopy(otherStack);
       cout << "After the copy constructor, otherStack: " << endl;


       while (!otherStack.isEmptyStack())
       {
               cout << otherStack.top() << endl; otherStack.pop();
       }
       return 0;
}


//Function to test the copy constructor

                                                   326

[PDF page 327; printed page 327]
void testCopy(linkedStackType<int> OStack)
{
       cout << "Stack in the function testCopy:" << endl; while
       (!OStack.isEmptyStack())
       {
              cout << OStack.top() << endl; OStack.pop();
       }
}


Sample Run:
After the assignment operator, newStack: 27
43




                                                  327
```
