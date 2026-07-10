---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "385-399"
printed_pages: "385-399"
section: "Linked Implementation of Queues"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "queue"
  - "type"
  - "implementation"
  - "linked"
  - "array"
  - "const"
  - "empty"
  - "queuefront"
  - "queuerear"
  - "postcondition"
  - "returns"
  - "because"
---

# Linked Implementation of Queues

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 385-399 | printed pages 385-399

Related sections: [Linked Implementation of Stacks](5-2-linked-implementation-of-stacks.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Implementation of Object-Oriented Designs](../../information-systems-622-study-guide/sections/5-4-2-implementation-of-object-oriented-designs.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Linked List Iterators](3-4-linked-list-iterators.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md)

## Extracted Text

```text
[PDF page 385; printed page 385]
6.3 Linked Implementation of Queues


Because the size of the array to store the queue elements is fixed, only a finite number of queue elements
 can be stored in the array. Also, the array implementation of the queue requires the array to be treated
 in a special way together with the values of the indices queueFront and queueRear. The linked

                                                        385

[PDF page 386; printed page 386]
implementation of a queue simplifies many of the special cases of the array implementation and, because
the memory to store a queue element is allocated dynamically, the queue is never full. This section
discusses the linked implementation of a queue.


Because elements are added at one end, queueRear, and removed from the other end, queueFront, we
need to know the front of the queue and the rear of the queue. Thus, we need two pointers, queueFront
and queueRear, to maintain the queue. The following class implements the functions of the abstract class
queueADT:


//*************************************************************
// This class specifies the basic operations on a queue as a //
linked list.
//*************************************************************
//Definition of the node template
<class Type>




                                                    386

[PDF page 387; printed page 387]
struct nodeType
{
       Type info;
       nodeType<Type> *link;
};


template <class Type>
class linkedQueueType: public queueADT<Type>
{
       public:
                 const linkedQueueType<Type>& operator=(const linkedQueueType<Type>&); //Overload
                 the assignment operator.


                 bool isEmptyQueue() const;
                 //Function to determine whether the queue is empty.
                 //Postcondition: Returns true if the queue is empty,
                 // otherwise returns false.


                 bool isFullQueue() const;
                 //Function to determine whether the queue is full.
                 //Postcondition: Returns true if the queue is full, //
                 otherwise returns false.


                 void initializeQueue();
                 //Function to initialize the queue to an empty state.
                 //Postcondition: queueFront = NULL; queueRear = NULL


                 Type front() const;
                 //Function to return the first element of the queue. //Precondition:
                 The queue exists and is not empty.
                 //Postcondition: If the queue is empty, the program
                 // terminates; otherwise, the first element of the //
                 queue is returned.
                                                      387

[PDF page 388; printed page 388]
                     ent of the queue. //Precondition: The queue exists and is not
Type back() const;   empty.
/                    //Postcondition: If the queue is empty, the program
/                    // terminates; otherwise, the last element of the //
F                    queue is returned.
u
n                    void addQueue(const Type& queueElement);
c                    //Function to add queueElement to the queue.
t                    //Precondition: The queue exists and is not full.
i                    //Postcondition: The queue is changed and queueElement is //
o                    added to the queue.
n
t                    void deleteQueue();
o
r
e
t
u
r
n
t
h
e
l
a
s
t
e
l
e
m
                                                         388

[PDF page 389; printed page 389]
               //Function to remove the first element of the queue.
               //Precondition: The queue exists and is not empty.
               //Postcondition: The queue is changed and the first element //
               is removed from the queue.


               linkedQueueType(); //Default
               constructor


               linkedQueueType(const linkedQueueType<Type>& otherQueue); //Copy
               constructor


               ~linkedQueueType();
               //Destructor


       private:
               nodeType<Type> *queueFront;          //pointer to the front of the queue nodeType<Type>
               *queueRear; //pointer to the rear of the queue
};


The UML diagram of the class linkedQueueType is left as an exercise for you. (See Exercise 16 at the end
of this chapter.)


Next, we write the definitions of the functions of the class linkedQueueType.


6.1.1 Empty and Full Queue


The queue is empty if queueFront is NULL. Memory to store the queue elements is allocated dynamically.
Therefore, the queue is never full and so the function to implement the isFullQueue operation returns the
value false. (The queue is full only if the program runs out of memory.)


template <class Type>
bool linkedQueueType<Type>::isEmptyQueue() const
{
                                                   389

[PDF page 390; printed page 390]
          return(queueFront == NULL);
} //end


template <class Type>
bool linkedQueueType<Type>::isFullQueue() const
{ return false;
} //end isFullQueue


Note that in reality, in the linked implementation of queues, the function isFullQueue does not apply
because logically the queue is never full. However, you must provide its definition because it is included
as an abstract function in the parent class queueADT.




                                                  390

[PDF page 391; printed page 391]
6.1.2 Initialize Queue


The operation initializeQueue initializes the queue to an empty state. The queue is empty if there are no
elements in the queue. Note that the constructor initializes the queue when the queue object is declared.
So this operation must remove all the elements, if any, from the queue. Therefore, this operation
traverses the list containing the queue starting at the first node, and it deallocates the memory occupied
by the queue elements. The definition of this function is as follows:


template <class Type>
void linkedQueueType<Type>::initializeQueue()
{
       nodeType<Type> *temp;
       while (queueFront!= NULL)                     //while there are elements left in the queue
       {
               temp = queueFront;            //set temp to point to the current node queueFront =
               queueFront->link;      //advance first to the next node
               delete temp;                          //deallocate memory occupied by temp
       }
       queueRear = NULL;                             //set rear to NULL
} //end initializeQueue


6.1.3 addQueue, front, back, and deleteQueue Operations


The addQueue operation adds a new element at the end of the queue. To implement this operation, we
access the pointer queueRear.


If the queue is nonempty, the operation front returns the first element of the queue and so the element
of the queue indicated by the pointer queueFront is returned. If the queue is empty, the function front
terminates the program.


If the queue is nonempty, the operation back returns the last element of the queue and so the element

                                                   391

[PDF page 392; printed page 392]
of the queue indicated by the pointer queueRear is returned. If the queue is empty, the function back
terminates the program. Similarly, if the queue is nonempty, the operation deleteQueue removes the first
element of the queue, and so we access the pointer queueFront.

The definitions of the functions to implement these operations are as follows:
template <class Type>
void linkedQueueType<Type>::addQueue(const Type& newElement)
{

              nodeType<Type> *newNode;

              newNode = new nodeType<Type>;                  //create the node
              newNode->info = newElement;                    //store the info
              newNode->link = NULL;                          //initialize the link field to
                                                             NULL




                                                  392

[PDF page 393; printed page 393]
      if (queueFront == NULL)                     //if initially the queue is
                                                  empty
       {
              queueFront = newNode;
              queueRear = newNode;
       }
       else                                       //add newNode at the end
       {
               queueRear->link = newNode;
               queueRear = queueRear->link;
       }
}                                                 //end addQueue


template <class Type>
Type linkedQueueType<Type>::front() const
{
       assert(queueFront      !=   NULL);
       return queueFront->info;
}                                                 //end front


template <class Type>
Type linkedQueueType<Type>::back() const
{
       assert(queueRear!= NULL);
       return queueRear->info;
}                                                 //end back


template <class Type>
void linkedQueueType<Type>::deleteQueue()
{
       nodeType<Type> *temp;
       if (!isEmptyQueue())


                                            393

[PDF page 394; printed page 394]
               {




                       temp = queueFront;                   //make temp point to the first
                                                            node
                       queueFront = queueFront->link;       //advance queueFront
                       delete temp;                         //delete the first node
                       if (queueFront == NULL)              //if after deletion the queue is
                                                            empty
                               queueRear = NULL;            //set queueRear to NULL
       }
       else cout << "Cannot remove from an empty queue" << endl;
}                                                          //end deleteQueue
The definition of the default constructor is as follows:
template<class Type>




                                                     394

[PDF page 395; printed page 395]
linkedQueueType<Type>::linkedQueueType()
{
          queueFront = NULL;                                 //set front to null
          queueRear = NULL;                                  //set rear to null
}                                                            //end default constructor
When the queue object goes out of scope, the destructor destroys the queue; that is, it deallocates the
memory occupied by the elements of the queue. The definition of the function to implement the
destructor is similar to the definition of the function initializeQueue. Also, the functions to implement the
copy constructor and overload the assignment operators are similar to the corresponding functions for
stacks.


EXAMPLE 6-1
The following program tests various operations on a queue. It uses the class linkedQueueType to
implement a queue.
//**************************************************************
* // This program illustrates how to use the class linkedQueueType // in a
program.
//**************************************************************
* #include <iostream> #include "linkedQueue.h" using namespace std;
int main()
{
          linkedQueueType<int> queue;
          int x, y;
          queue.initializeQueue();
          x = 4; y
          = 5;
          queue.addQueue(x);
          queue.addQueue(y); x =
          queue.front();
          queue.deleteQueue();
          queue.addQueue(x + 5);
          queue.addQueue(16);
          queue.addQueue(x);

                                                    395

[PDF page 396; printed page 396]
       queue.addQueue(y - 3);
       cout << "Queue Elements:
       ";
       while (!queue.isEmptyQueue())
       {
              cout << queue.front() << " ";
              queue.deleteQueue();
       }
       cout << endl;
       return 0;
}


Sample Run:
Queue Elements: 5 9 16 4 2




                                              396

[PDF page 397; printed page 397]
6.1.4 Queue Derived from the class unorderedLinkedList


From the definitions of the functions to implement the queue operations, it is clear that the linked
implementation of a queue is similar to the implementation of a linked list created in a forward manner
(see Chapter 3). The addQueue operation is similar to the operation insertFirst. Likewise, the operations
initializeQueue and initializeList, isEmptyQueue, and isEmptyList are similar. The deleteQueue operation
can be implemented as before. The pointer queueFront is the same as the pointer first, and the pointer
queueRear is the same as the pointer last. This correspondence suggests that we can derive the class to
implement the queue from the class linkedListType (see Chapter 3). Note that the class linkedListType is
an abstract and does not implement all the operations. However, the class unorderedLinkedList is derived
from the the class linkedListType and provides the definitions of the abstract functions of the the class
linkedListType. Therefore, we can derive the class linkedQueueType from the class unorderedLinkedList.



6.2    STL class queue (Queue Container Adapter)


The preceding sections discussed the data structure queue in detail. Because a queue is an important data
structure, the Standard Template Library (STL) provides a class to implement queues in a program. The
name of the class defining the queue is queue, and the name of the header file containing the definition
of the class queue is queue. The class queue provided by the STL is implemented similar to the classes
discussed in this chapter. Table 6-1 defines various operations supported by the queue container class.
                                   TABLE 6-1: Operations on a queue object




                                                    397

[PDF page 398; printed page 398]
In addition to the operations size, empty, push, front, back, and pop, the queue container class provides
relational operators to compare two queues. For example, the relational operator == can be used to
determine whether two queues are identical.


The program in Example 6-2 illustrates how to use the queue container class.
EXAMPLE 6-2
//***************************************************************
// This program illustrates how to use the STL class queue in a program.
//***************************************************************




                                                  398

[PDF page 399; printed page 399]
       #include <iostream>                                                                   //Line 1
       #include <queue>                                                                      //Line 2
       using namespace std;                                                                  //Line 3
       int main()                                                                            //Line 4
       {                                                                                     //Line 5

               queue<int> intQueue;                                                          //Line 6

               intQueue.push(26);                                                            //Line 7

               intQueue.push(18);                                                            //Line 8

               intQueue.push(50);                                                            //Line 9

              intQueue.push(33);                                                             //Line 10

              cout << "Line 11: The front element of intQueue: "<< intQueue.front() << endl; //Line 11
              cout << "Line 12: The last element of intQueue: "<< intQueue.back() << endl;   //Line 12
              intQueue.pop();                                                                //Line 13
cout << "Line 14: After the pop operation, the "<< "front element of intQueue: "

                      << intQueue.front() << endl;                                           //Line 14

               cout << "Line 15: intQueue elements: ";                                       //Line 15

               while (!intQueue.empty())                                                     //Line 16

               {                                                                             //Line 17

                      cout << intQueue.front() << " ";                                       //Line 18

                      intQueue.pop();                                                        //Line 19

               }                                                                             //Line 20

               cout << endl;                                                                 //Line 21

               return 0;                                                                     //Line 22

       }                                                                                     //Line 23



       Sample Run:

                                                          399
```
