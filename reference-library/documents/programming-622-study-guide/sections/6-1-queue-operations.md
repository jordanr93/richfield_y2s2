---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "365-368"
printed_pages: "365-368"
section: "Queue Operations"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "queue"
  - "queues"
  - "first"
  - "elements"
  - "end"
  - "called"
  - "customer"
  - "front"
  - "implement"
  - "structure"
  - "computer"
  - "new"
---

# Queue Operations

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 365-368 | printed pages 365-368

Related sections: [Priority Queues](6-4-priority-queues.md), [Priority Queues (Revisited)](8-6-priority-queues-revisited.md), [OBJECT-ORIENTED DEVELOPMENT](../../information-systems-622-study-guide/sections/5-4-object-oriented-development.md), [Operations Documentation](../../information-systems-622-study-guide/sections/5-8-3-operations-documentation.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Operations on Graphs](10-3-operations-on-graphs.md)

## Extracted Text

```text
[PDF page 365; printed page 365]
                  •   Examine various queue operations
                  •   Learn how to implement a queue as an array
                  •   Learn how to implement a queue as a linked list
                  •   Discover queue applications
                  •   Become aware of the STL class queue




This chapter discusses another important data structure, called a queue. The notion of a queue in
computer science is the same as the notion of the queues to which you are accustomed in everyday life.
There are queues of customers in a bank or in a grocery store and queues of cars waiting to pass through
a tollbooth. Similarly, because a computer can send a print request faster than a printer can print, a queue
of documents is often waiting to be printed at a printer. The general rule to process elements in a queue
is that the customer at the front of the queue is served next and that when a new customer arrives, he or
she stands at the end of the queue. That is, a queue is a First In First Out data structure.


Queues have numerous applications in computer science. Whenever a system is modelled on the First In
First Out principle, queues are used. At the end of this section, we will discuss one of the most widely used
applications of queues, computer simulation. First, however, we need to develop the tools necessary to
implement a queue. The next few sections discuss how to design classes to implement queues as an ADT.


A queue is a set of elements of the same type in which the elements are added at one end, called the back
or rear, and deleted from the other end, called the front. For example, consider a line of customers in a
bank, wherein the customers are waiting to withdraw/deposit money or to conduct some other business.
Each new customer gets in the line at the rear. Whenever a teller is ready for a new customer, the
customer at the front of the line is served.


The rear of the queue is accessed whenever a new element is added to the queue, and the front of the
queue is accessed whenever an element is deleted from the queue. As in a stack, the middle elements of
the queue are inaccessible, even if the queue elements are stored in an array.
                                                  365

[PDF page 366; printed page 366]
Queue: A data structure in which the elements are added at one end, called the rear, and deleted from
the other end, called the front; a First In First Out (FIFO) data structure.


6.1 Queue Operations


From the definition of queues, we see that the two key operations are add and delete. We call the add
operation addQueue and the delete operation deleteQueue. Because elements can be neither deleted
from an empty queue nor added to a full queue, we need two more operations to successfully implement
the addQueue and deleteQueue operations: isEmptyQueue (checks whether the queue is empty) and
isFullQueue (checks whether a queue is full).
We also need an operation, initializeQueue, to initialize the queue to an empty state. Moreover, to
retrieve the first and last elements of the queue, we include the operations front and back as described
in the following list. Some of the queue operations are as follows:




                                                     366

[PDF page 367; printed page 367]
            initializeQueue—Initializes the queue to an empty state.
            isEmptyQueue—Determines whether the queue is empty. If the queue is empty, it returns the
      value true; otherwise, it returns the value false.

        isFullQueue—Determines whether the queue is full. If the queue is full, it returns the value true;
         otherwise, it returns the value false.

        front—Returns the front, that is, the first element of the queue. Prior to this operation, the queue
         must exist and must not be empty.

        back—Returns the last element of the queue. Prior to this operation, the queue must exist and
         must not be empty.

        addQueue—Adds a new element to the rear of the queue. Prior to this operation, the queue must
         exist and must not be full.

        deleteQueue—Removes the front element from the queue. Prior to this operation, the queue must
         exist and must not be empty.


As in the case of a stack, a queue can be stored in an array or in a linked structure. We will consider both
implementations. Because elements are added at one end and removed from the other end, we need two
pointers to keep track of the front and rear of the queue, called queueFront and queueRear.


The      following      abstract   class    queueADT        defines    these   operations   as   an    ADT:
//*************************************************************
// This class specifies the basic operations on a queue.
//************************************************************* template
<class Type>
class queueADT
{ public:
                  virtual bool isEmptyQueue() const = 0;
                  //Function to determine whether the queue is empty.
                  //Postcondition: Returns true if the queue is empty,
                  // otherwise returns false.


                  virtual bool isFullQueue() const = 0;
                  //Function to determine whether the queue is full.
                                                          367

[PDF page 368; printed page 368]
//Postcondition: Returns true if the queue is full, //
otherwise returns false.


virtual void initializeQueue() = 0;
//Function to Initialize the queue to an empty state.
//Postcondition: The queue is empty.


virtual Type front() const = 0;
//Function to return the first element of the queue.
//Precondition: The queue exists and is not empty.
//Postcondition: If the queue is empty, the program //
terminates; otherwise, the first element of the queue //
is returned.




                                      368
```
