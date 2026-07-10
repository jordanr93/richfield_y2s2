---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "400-410"
printed_pages: "400-410"
section: "Priority Queues"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "priority"
  - "queue"
  - "implement"
  - "use"
  - "first"
  - "structure"
  - "order"
  - "they"
  - "patients"
  - "you"
  - "elements"
  - "queues"
---

# Priority Queues

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 400-410 | printed pages 400-410

Related sections: [Priority Queues (Revisited)](8-6-priority-queues-revisited.md), [Queue Operations](6-1-queue-operations.md), [Implementation of Queues as Arrays](6-2-implementation-of-queues-as-arrays.md), [Database Models](../../internet-programming-622-study-guide/sections/4-4-database-models.md), [Introduction](../../internet-programming-622-study-guide/sections/4-0-introduction.md), [TOPIC 6: QUEUES](6-topic-6-queues.md)

## Extracted Text

```text
[PDF page 400; printed page 400]
6.4 Priority Queues


The preceding sections describe how to implement a queue in a program. The use of a queue structure
 ensures that the items are processed in the order they are received. For example, in a banking
 environment, the customers who arrive first are served first. However, there are certain situations when




                                                    400

[PDF page 401; printed page 401]
this First In First Out rule needs to be relaxed somewhat. In a hospital environment, patients are, usually,
seen in the order they arrive. Therefore, you could use a queue to ensure that the patients are seen in the
order they arrive. However, if a patient arrives with severe or life-threatening symptoms, they are treated
first. In other words, these patients take priority over the patients who can wait to be seen, such as those
awaiting their routine annual checkup. For another example, in a shared environment, when print
requests are sent to the printer, interactive programs take priority over batchprocessing programs.


There are many other situations where some priority is assigned to the customers. To implement such a
data structure in a program, we use a special type of queue, called priority queues. In a priority queue,
customers or jobs with higher priority are pushed to the front of the queue.


One way to implement a priority queue is to use an ordinary linked list, which keeps the items in order
from the highest to lowest priority. However, an effective way to implement a priority queue is to use a
treelike structure. In Chapter 8, we discuss a special type of sorting algorithm, called the heapsort, which
uses a treelike structure to sort a list. After describing this algorithm, we discuss how to effectively
implement a priority queue.


6.2.1 STL class priority_queue


The STL provides the class template priority_queue<elemType>, where the data type of the queue
elements is specified by elemType. This class template is contained in the STL header file queue. You can
specify the priority of the elements of a priority queue in various ways. The default priority criteria for the
queue elements uses the lessthan operator, <. For example, a program that implements a priority queue
of numbers could use the operator < to assign the priority to the numbers so that larger numbers are
always at the front of the queue. If you design your own class to implement the queue elements, you can
specify your priority rule by overloading the less-than operator, <, to compare the elements. You could
also define a comparison function to specify the priority.


6.3    Application of Queues: Simulation


A technique in which one system models the behavior of another system is called simulation. For example,
physical simulators include wind tunnels used to experiment with the design of car bodies and flight
simulators are used to train airline pilots. Simulation techniques are used when it is too expensive or
                                                     401

[PDF page 402; printed page 402]
dangerous to experiment with real systems. You can also design computer models to study the behavior
of real systems. (We will describe some real systems modeled by computers shortly.) Simulating the
behavior of an expensive or dangerous experiment using a computer model is usually less expensive than
using the real system, and a good way to gain insight without putting human life in danger. Moreover,
computer simulations are particularly useful for complex systems where it is difficult to construct a
mathematical model. For such systems, computer models can retain descriptive accuracy. In
mathematical simulations, the steps of a program are used to model the behavior of a real system. Let us
consider one such problem.


The manager of a local movie theater is hearing complaints from customers about the time they have to
wait in line to buy tickets. The theater currently has only one cashier. Another theater is preparing to open
in the neighborhood and the manager is afraid of losing customers. The manager wants to hire enough
cashiers so that a customer does not have to wait too long to buy a ticket, but does not want to hire extra
cashiers on a trial basis and potentially waste time and money. One thing that the manager would like to




                                                    402

[PDF page 403; printed page 403]
know is the average time a customer has to wait for service. The manager wants someone to write a
program to simulate the behavior of the theater.


In computer simulation, the objects being studied are usually represented as data. For the theater
problem, some of the objects are the customers and the cashier. The cashier serves the customers and
we want to determine a customer’s average waiting time. Actions are implemented by writing algorithms,
which in a programming language are implemented with the help of functions. Thus, functions are used
to implement the actions of the objects. In C++, we can combine the data and the operations on that data
into a single unit with the help of classes. Thus, objects can be represented as classes. The member
variables of the class describe the properties of the objects, and the function members describe the
actions on that data. This change in simulation results can also occur if we change the values of the data
or modify the definitions of the functions (that is, modify the algorithms implementing the actions). The
main goal of a computer simulation is to either generate results showing the performance of an existing
system or predict the performance of a proposed system.


In the theater problem, when the cashier is serving a customer, the other customers must wait. Because
customers are served on a first-come, first-served basis and queues are an effective way to implement a
First In First Out system, queues are important data structures for use in computer simulations. This
section examines computer simulations in which queues are the basic data structure. These simulations
model the behavior of systems, called queuing systems, in which queues of objects are waiting to be
served by various servers. In other words, a queuing system consists of servers and queues of objects
waiting to be served. We deal with a variety of queuing systems on a daily basis. For example, a grocery
store and a banking system are both queuing systems. Furthermore, when you send a print request to a
networked printer that is shared by many people, your print request goes in a queue. Print requests that
arrived before your print request are usually completed before yours. Thus, the printer acts as the server
when a queue of documents is waiting to be printed.


6.3.1 Designing a Queuing System


In this section, we describe a queuing system that can be used in a variety of applications, such as a bank,
grocery store, movie theater, printer, or mainframe environment in which several people are trying to use
the same processors to execute their programs. To describe a queuing system, we use the term server for
the object that provides the service. For example, in a bank, a teller is a server; in a grocery store or movie

                                                     403

[PDF page 404; printed page 404]
theater, a cashier is a server. We will call the object receiving the service the customer, and the service
time — the time it takes to serve a customer—the transaction time.


Because a queuing system consists of servers and a queue of waiting objects, we will model a system that
consists of a list of servers and a waiting queue holding the customers to be served. The customer at the
front of the queue waits for the next available server. When a server becomes free, the customer at the
front of the queue moves to the free server to be served.


When the first customer arrives, all servers are free and the customer moves to the first server. When the
next customer arrives, if a server is available, the customer immediately moves to the available server;
otherwise, the customer waits in the queue. To model a queuing system, we need to know the number of
servers, the expected arrival time of a customer, the time between the arrivals of customers, and the
number of events affecting the system.




                                                   404

[PDF page 405; printed page 405]
Let us again consider the movie theater system. The performance of the system depends on how many
servers are available, how long it takes to serve a customer, and how often a customer arrives. If it takes
too long to serve a customer and customers arrive frequently, then more servers are needed. This system
can be modeled as a time-driven simulation. In a time-driven simulation, the clock is implemented as a
counter and the passage of, say, 1 minute can be implemented by incrementing the counter by 1. The
simulation is run for a fixed amount of time. If the simulation needs to be run for 100 minutes, the counter
starts at 1 and goes up to 100, which can be implemented by using a loop.


For the simulation described in this section, we want to determine the average wait time for a customer.
To calculate the average wait time for a customer, we need to add the waiting time of each customer, and
then divide the sum by the number of customers who have arrived. When a customer arrives, he or she
goes to the end of the queue and the customer’s waiting time starts. If the queue is empty and a server is
free, the customer is served immediately and so this customer’s waiting time is zero. On the other hand,
if when the customer arrives and either the queue is nonempty or all the servers are busy, the customer
must wait for the next available server and, therefore, this customer’s waiting time starts. We can keep
track of the customer’s waiting time by using a timer for each customer. When a customer arrives, the
timer is set to 0, which is incremented after each clock unit.
Suppose that, on average, it takes five minutes for a server to serve a customer. When a server becomes
free and the waiting customer’s queue is nonempty, the customer at the front of the queue proceeds to
begin the transaction. Thus, we must keep track of the time a customer is with a server. When the
customer arrives at a server, the transaction time is set to five and is decremented after each clock unit.
When the transaction time becomes zero, the server is marked free. Hence, the two objects needed to
implement a time-driven computer simulation of a queuing system are the customer and the server.


Before designing the main algorithm to implement the simulation, we design classes to implement each
of the two objects: customer and server.


6.3.2 Customer


Every customer has a customer number, arrival time, waiting time, transaction time, and departure time.
If we know the arrival time, waiting time, and transaction time, we can determine the departure time by
adding these three times. Let us call the class to implement the customer object customerType. It follows
that the class customerType has four member variables: the customerNumber, arrivalTime, waitingTime,

                                                    405

[PDF page 406; printed page 406]
and transactionTime, each of type int. The basic operations that must be performed on an object of type
customerType are as follows: Set the customer’s number, arrival time, and waiting time; increment the
waiting time by one clock unit; return the waiting time; return the arrival time; return the transaction
time; and return the customer number. The following class, customerType, implements the customer as
an ADT:


//************************************************************
// class customerType
// This class specifies the members to implement a customer.
//************************************************************ class
customerType
{ public: customerType(int cN = 0, int arrvTime = 0, int wTime = 0, int tTime = 0);
               //Constructor to initialize the instance variables
               //according to the parameters




                                                    406

[PDF page 407; printed page 407]
//If no value is specified in the object declaration, //the
default values are assigned.
//Postcondition: customerNumber = cN; arrivalTime = arrvTime;
// waitingTime = wTime; transactionTime = tTime


void setCustomerInfo(int cN = 0, int inTime = 0, int wTime = 0, int tTime = 0); //Function
to initialize the instance variables.
//Instance variables are set according to the parameters.
//Postcondition: customerNumber = cN; arrivalTime = arrvTime;
// waitingTime = wTime; transactionTime = tTime;


int getWaitingTime() const;
//Function to return the waiting time of a customer.
//Postcondition: The value of waitingTime is returned.


void setWaitingTime(int time);
//Function to set the waiting time of a customer.
//Postcondition: waitingTime = time;


void incrementWaitingTime();
//Function to increment the waiting time by one time unit.
//Postcondition: waitingTime++;


int getArrivalTime() const;
//Function to return the arrival time of a customer.
//Postcondition: The value of arrivalTime is returned.


int getTransactionTime() const;
//Function to return the transaction time of a customer.
//Postcondition: The value of transactionTime is returned.


int getCustomerNumber() const;
//Function to return the customer number.
                                   407

[PDF page 408; printed page 408]
              //Postcondition: The value of customerNumber is returned.


       private:
              int customerNumber;
              int arrivalTime; int
              waitingTime;
              int transactionTime;
};
Figure 6-11 shows the UML diagram of the class customerType.




                                                408

[PDF page 409; printed page 409]
                               FIGURE 6-11 UML diagram of the class customerType



The definitions of the member functions of the class customerType follow easily from their descriptions.
Next, we give the definitions of the member functions of the class customerType.


The function setCustomerInfo uses the values of the parameters to initialize customerNumber,
arrivalTime, waitingTime, and transactionTime. Its definition is as follows:


void customerType::setCustomerInfo(int cN, int arrvTime, int wTime, int tTime)
{
       customerNumber = cN;
       arrivalTime = arrvTime;
       waitingTime = wTime;
       transactionTime = tTime;
}


The definition of the constructor is similar to the definition of the function setCustomerInfo. It uses the
values of the parameters to initialize customerNumber, arrivalTime, waitingTime, and transactionTime.
To make debugging easier, we use the function setCustomerInfo to write the definition of the constructor,
which is given next.


customerType::customerType(int cN, int arrvTime, int wTime, int tTime)
{
       setCustomerInfo(cN, arrvTime, wTime, tTime);
}

                                                     409

[PDF page 410; printed page 410]
The function getWaitingTime returns the current waiting time. The definition of the function
getWaitingTime is as follows:


int customerType::getWaitingTime() const
{
       return waitingTime;
}


The function incrementWaitingTime increments the value of waitingTime. Its definition is as follows:




                                                  410
```
