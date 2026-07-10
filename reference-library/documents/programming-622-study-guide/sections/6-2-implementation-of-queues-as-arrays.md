---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "369-384"
printed_pages: "369-384"
section: "Implementation of Queues as Arrays"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "queue"
  - "element"
  - "operation"
  - "addqueue"
  - "queuefront"
  - "queuerear"
  - "array"
  - "deletequeue"
  - "figure"
  - "first"
  - "need"
  - "elements"
---

# Implementation of Queues as Arrays

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 369-384 | printed pages 369-384

Related sections: [Linked Implementation of Queues](6-3-linked-implementation-of-queues.md), [Implementation of Object-Oriented Designs](../../information-systems-622-study-guide/sections/5-4-2-implementation-of-object-oriented-designs.md), [Types of Relationships](../../information-systems-622-study-guide/sections/3-5-2-types-of-relationships.md), [Linked Implementation of Stacks](5-2-linked-implementation-of-stacks.md), [Priority Queues](6-4-priority-queues.md), [Priority Queues (Revisited)](8-6-priority-queues-revisited.md)

## Extracted Text

```text
[PDF page 369; printed page 369]
6.2 Implementation of Queues as Arrays


Before giving the definition of the class to implement a queue as an ADT, we need to decide how many
 member variables are needed to implement the queue. Of course, we need an array to store the queue
 elements, the variables queueFront and queueRear to keep track of the first and last elements of the
 queue, and the variable maxQueueSize to specify the maximum size of the queue. Thus, we need at least
 four member variables.


Before writing the algorithms to implement the queue operations, we need to decide how to use
 queueFront and queueRear to access the queue elements. How do queueFront and queueRear indicate
 that the queue is empty or full? Suppose that queueFront gives the index of the first element of the queue,
 and queueRear gives the index of the last element of the queue. To add an element to the queue, first we
                                                     369

[PDF page 370; printed page 370]
advance queueRear to the next array position and then add the element to the position that queueRear
is pointing to. To delete an element from the queue, first we retrieve the element that queueFront is
pointing to and then advance queueFront to the next element of the queue. Thus, queueFront changes
after each deleteQueue operation and queueRear changes after each addQueue operation.


Let us see what happens when queueFront changes after a deleteQueue operation and queueRear
changes after an addQueue operation. Assume that the array to hold the queue elements is of size 100.


Initially, the queue is empty. After the operation:


               addQueue(Queue,'A');
the array is as shown in Figure 6-1.




                                                      370

[PDF page 371; printed page 371]
                               FIGURE 6-1 Queue after the first addQueue operation



After two more addQueue operations:


               addQueue(Queue,'B'); addQueue(Queue,'C');
the array is as shown in Figure 6-2.




                              FIGURE 6-2 Queue after two more addQueue operations



Now consider the deleteQueue operation:
deleteQueue();


After this operation, the array containing the queue is as shown in Figure 6-3.




                                FIGURE 6-3 Queue after the deleteQueue operation



Will this queue design work? Suppose A stands for adding (that is, addQueue) an element to the queue,
and D stands for deleting (that is, deleteQueue) an element from the queue. Consider the following
sequence of operations:


AAADADADADADADADA...


This sequence of operations would eventually set the index queueRear to point to the last array position,
giving the impression that the queue is full. However, the queue has only two or three elements and the
front of the array is empty. (See Figure 6-4.)




                                                      371

[PDF page 372; printed page 372]
                      FIGURE 6-4 Queue after the sequence of operations AAADADADADADA...



One solution to this problem is that when the queue overflows to the rear (that is, queueRear points to
the last array position), we can check the value of the index queueFront. If the value of queueFront
indicates that there is room in the front of the array, then when queueRear gets to the last array position,
we can slide all of the queue elements toward the first array position. This solution is good if the queue
size is very small; otherwise, the program might execute more slowly.




                                                    372

[PDF page 373; printed page 373]
Another solution to this problem is to assume that the array is circular—that is, the first array position
immediately follows the last array position. (See Figure 6-5.)




                                            FIGURE 6-5 Circular queue



We will consider the array containing the queue to be circular, although we will draw the figures
of the array holding the queue elements as before.


Suppose that we have the queue as shown in Figure 6-6(a).




                               FIGURE 6-6 Queue before and after the add operation



After the operation addQueue(Queue,'Z');, the queue is as shown in Figure 6-6(b).


Because the array containing the queue is circular, we can use the following statement to advance
queueRear (queueFront) to the next array position:
queueRear = (queueRear + 1) % maxQueueSize;


If queueRear < maxQueueSize - 1, then queueRear + 1 <= maxQueueSize - 1, so (queueRear + 1) %
maxQueueSize = queueRear + 1. If queueRear == maxQueueSize - 1 (that is, queueRear points to the last
array position), queueRear + 1 == maxQueueSize, so (queueRear + 1) % maxQueueSize = 0. In this case,
queueRear will be set to 0, which is the first array position.


This queue design seems to work well. Before we write the algorithms to implement the queue operations,

                                                      373

[PDF page 374; printed page 374]
consider the following two cases.


Case 1: Suppose that after certain operations, the array containing the queue is as shown in Figure 6-7(a).




                             FIGURE 6-7 Queue before and after the delete operation




                                                     374

[PDF page 375; printed page 375]
After the operation deleteQueue();, the resulting array is as shown in Figure 6-7(b).
Case 2:        Let us now consider the queue shown in Figure 6-8(a).




                               FIGURE 6-8 Queue before and after the add operation



After the operation addQueue(Queue,'Z');, the resulting array is as shown in Figure 6-8(b).


The arrays in Figures 6-7(b) and 6-8(b) have identical values for queueFront and queueRear. However, the
resulting array in Figure 6-7(b) represents an empty queue, whereas the resulting array in Figure 68(b)
represents a full queue. This latest queue design has brought up another problem of distinguishing
between an empty and a full queue.


This problem has several solutions. One solution is to keep a count. In addition to the member variables
queueFront and queueRear, we need another variable, count, to implement the queue. The value of count
is incremented whenever a new element is added to the queue, and it is decremented whenever an
element is removed from the queue. In this case, the function initializeQueue initializes count to 0. This
solution is very useful if the user of the queue frequently needs to know the number of elements in the
queue.


Another solution is to let queueFront indicate the index of the array position preceding the first element
of the queue, rather than the index of the (actual) first element itself. In this case, assuming queueRear
still indicates the index of the last element in the queue, the queue is empty if queueFront == queueRear.
In this solution, the slot indicated by the index queueFront (that is, the slot preceding the first true
element) is reserved. The queue will be full if the next available space is the special reserved slot indicated
by queueFront. Finally, because the array position indicated by queueFront is to be kept empty, if the
array size is, say, 100, then 99 elements can be stored in the queue. (See Figure 6-9.)




                                                      375

[PDF page 376; printed page 376]
                         FIGURE 6-9 Array to store the queue elements with a reserved slot



Let us implement the queue using the first solution. That is, we use the variable count to indicate whether
the queue is empty or full.


The following class implements the functions of the abstract class queueADT. Because arrays can be
allocated dynamically, we will leave it for the user to specify the size of the array to implement the queue.
The default size of the array is 100.




                                                       376

[PDF page 377; printed page 377]
//*************************************************************
// This class specifies the basic operation on a queue as an array.
//************************************************************* template
<class Type>
class queueType: public queueADT<Type>
{ public:
               const queueType<Type>& operator=(const queueType<Type>&); //Overload
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
               //Postcondition: The queue is empty.


               Type front() const;
               //Function to return the first element of the queue. //Precondition:
               The queue exists and is not empty.
               //Postcondition: If the queue is empty, the program
               // terminates; otherwise, the first element of the //
               queue is returned.


               Type back() const;
               //Function to return the last element of the queue. //Precondition:
               The queue exists and is not empty.
                                                    377

[PDF page 378; printed page 378]
//Postcondition: If the queue is empty, the program //
terminates; otherwise, the last element of the queue //
is returned.


void addQueue(const Type& queueElement);
//Function to add queueElement to the queue.
//Precondition: The queue exists and is not full.
//Postcondition: The queue is changed and queueElement is //
added to the queue.


void deleteQueue();
//Function to remove the first element of the queue.
//Precondition: The queue exists and is not empty.
//Postcondition: The queue is changed and the first element //
is removed from the queue.




                                    378

[PDF page 379; printed page 379]
                 queueType(int queueSize = 100);
                 //Constructor


                 queueType(const queueType<Type>& otherQueue);
                 //Copy constructor


                 ~queueType();
                 //Destructor


       private:

                 int maxQueueSize;           //variable to store the maximum queue size
                 int count;                  //variable to store the number of     elements in the queue
                 int queueFront;             //variable to point to the first element of the queue
                 int queueRear;              //variable to point to the last element of the queue
                 Type *list;                 //pointer to the array that holds the queue elements
};


We leave the UML diagram of the class queueType as an exercise for you. (See Exercise 15 at the end of
this chapter.)


Next, we consider the implementation of the queue operations.


6.2.1 Empty Queue and Full Queue


As discussed earlier, the queue is empty if count == 0, and the queue is full if count == maxQueueSize. So
the functions to implement these operations are as follows:


template <class Type>
bool queueType<Type>::isEmptyQueue() const
{
       return (count == 0);
} //end isEmptyQueue
                                                   379

[PDF page 380; printed page 380]
template <class Type>
bool queueType<Type>::isFullQueue() const
{
       return (count == maxQueueSize);
} //end isFullQueue




6.2.2 Initialize Queue


This operation initializes a queue to an empty state. The first element is added at the first array position.
Therefore, we initialize queueFront to 0, queueRear to maxQueueSize - 1, and count to 0. See Figure 610.




                                                    380

[PDF page 381; printed page 381]
                                           FIGURE 6-10 Empty queue

The definition of the function initializeQueue is as follows:
template <class Type>
void queueType<Type>::initializeQueue()
{
       queueFront = 0;
       queueRear = maxQueueSize - 1;
       count = 0;
} //end initializeQueue


6.2.3 Front


This operation returns the first element of the queue. If the queue is nonempty, the element of the queue
indicated by the index queueFront is returned; otherwise, the program terminates.


template <class Type>
Type queueType<Type>::front() const
{
       assert(!isEmptyQueue()); return
        list[queueFront];
} //end front


6.2.4 Back


This operation returns the last element of the queue. If the queue is nonempty, the element of the queue
indicated by the index queueRear is returned; otherwise, the program terminates.


template <class Type>
Type queueType<Type>::back() const
{
                                                     381

[PDF page 382; printed page 382]
       assert(!isEmptyQueue()); return
       list[queueRear];
} //end back




6.2.5 Add Queue


Next, we implement the addQueue operation. Because queueRear points to the last element of the queue,
to add a new element to the queue, we first advance queueRear to the next array position, and then add




                                                 382

[PDF page 383; printed page 383]
the new element to the array position indicated by queueRear. We also increment count by 1. So the
function addQueue is as follows:


template <class Type>
void queueType<Type>::addQueue(const Type& newElement)
{
        if (!isFullQueue())
        {
                 queueRear = (queueRear + 1) % maxQueueSize; //use the
                 //mod operator to advance queueRear
                 //because the array is circular count++;
                 list[queueRear] = newElement;
        }
        else cout << "Cannot add to a full queue." << endl;
} //end addQueue


6.2.6 Delete Queue


To implement the deleteQueue operation, we access the index queueFront. Because queueFront points
to the array position containing the first element of the queue, to remove the first queue element, we
decrement count by 1 and advance queueFront to the next queue element. So the function deleteQueue
is as follows:


template <class Type>
void queueType<Type>::deleteQueue()
{
        if (!isEmptyQueue())
        { count--;
                 queueFront = (queueFront + 1) % maxQueueSize; //use the
                 //mod operator to advance queueFront
                 //because the array is circular
        }
        else cout << "Cannot remove from an empty queue" << endl; }
                                                383

[PDF page 384; printed page 384]
//end deleteQueue


6.2.7 Constructors and Destructors


To complete the implementation of the queue operations, we next consider the implementation of the
constructor and the destructor. The constructor gets the maxQueueSize from the user, sets the variable
maxQueueSize to the value specified by the user, and creates an array of size maxQueueSize. If the user
does not specify the queue size, the constructor uses the default value, which is 100, to create an array of
size 100. The constructor also initializes queueFront and queueRear to indicate that the queue is empty.
The definition of the function to implement the constructor is as follows:


template <class Type>
queueType<Type>::queueType(int queueSize)
{
       if (queueSize <= 0)




                                                   384
```
