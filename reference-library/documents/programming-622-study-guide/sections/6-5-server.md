---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "411-434"
printed_pages: "411-434"
section: "Server"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "server"
  - "time"
  - "free"
  - "set"
  - "transaction"
  - "status"
  - "postcondition"
  - "busy"
  - "customer"
  - "transactiontime"
  - "servertype"
  - "void"
---

# Server

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 411-434 | printed pages 411-434

Related sections: [CLIENT/SERVER ARCHITECTURE](../../information-systems-622-study-guide/sections/4-3-client-server-architecture.md), [CLIENT/SERVER ARCHITECTURE](../../information-systems-622-study-guide/sections/4-3-client-server-architecture-2.md), [Client/Server Tiers:](../../information-systems-622-study-guide/sections/4-3-2-client-server-tiers.md), [Client-Server Databases](../../internet-programming-622-study-guide/sections/4-3-client-server-databases.md), [Set Clear, Measurable Objectives](../../big-data-iot-600-study-guide/sections/85-set-clear-measurable-objectives.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md)

## Extracted Text

```text
[PDF page 411; printed page 411]
6.5 Server


At any given time unit, the server is either busy serving a customer or is free.We use a string variable to
set the status of the server. Every server has a timer and because the program might need to know which
customer is served by which server, the server also stores the information of the customer being served.
Thus, three member variables are associated with a server: the status, the transactionTime, and the
currentCustomer. Some of the basic operations that must be performed on a server are as follows: Check
whether the server is free; set the server as free; set the server as busy; set the transaction time (that is,
how long it takes to serve the customer); return the remaining transaction time (to determine whether
the server should be set to free); if the server is busy after each time unit, decrement the transaction time
by one time unit; and so on. The following class, serverType, implements the server as an ADT:
//************************************************************
// class serverType
 // This class specifies the members to implement a server.
 //******************************************************
 ****** class serverType
{
        public:
                  serverType(); //Default
                  constructor
                  //Sets the values of the instance variables to their default //values.
                  //Postcondition: currentCustomer is initialized by its
                  // default constructor; status = "free"; and the //
                  transaction time is initialized to 0.


                                                          411

[PDF page 412; printed page 412]
bool isFree() const;
//Function to determine if the server is free.
//Postcondition: Returns true if the server is free, //
otherwise returns false.


void setBusy();
//Function to set the status of the server to busy.
//Postcondition: status = "busy";


void setFree();
//Function to set the status of the server to "free."
//Postcondition: status = "free";
void setTransactionTime(int t);




                                      412

[PDF page 413; printed page 413]
//Function to set the transaction time according to the //parameter
t.
//Postcondition: transactionTime = t;


void setTransactionTime();
//Function to set the transaction time according to //the
transaction time of the current customer.
//Postcondition:
// transactionTime = currentCustomer.transactionTime;


int getRemainingTransactionTime() const; //Function
to return the remaining transaction time.
//Postcondition: The value of transactionTime is returned.


void decreaseTransactionTime();
//Function to decrease the transactionTime by 1 unit.
//Postcondition: transactionTime--;


void setCurrentCustomer(customerType cCustomer);
//Function to set the info of the current customer
//according to the parameter cCustomer.
//Postcondition: currentCustomer = cCustomer;


int getCurrentCustomerNumber() const;
//Function to return the customer number of the current //customer.
//Postcondition: The value of customerNumber of the //
current customer is returned.


int getCurrentCustomerArrivalTime() const;
//Function to return the arrival time of the current
//customer.
//Postcondition: The value of arrivalTime of the current //
customer is returned.
                                      413

[PDF page 414; printed page 414]
       int getCurrentCustomerWaitingTime() const;
       //Function to return the current waiting time of the
       //current customer.
       //Postcondition: The value of transactionTime is returned.


       int getCurrentCustomerTransactionTime() const;
       //Function to return the transaction time of the
       //current customer.
       //Postcondition: The value of transactionTime of the //
       current customer is returned.


private:
       customerType currentCustomer; string
       status;




                                           414

[PDF page 415; printed page 415]
                int transactionTime;
};
Figure 6-12 shows the UML diagram of the class serverType.




                                  FIGURE 6-12 UML diagram of the class serverType



The definitions of some of the member functions of the class serverType are as follows:
serverType::serverType()
{ status = "free";
        transactionTime = 0;
}


bool serverType::isFree() const
{ return (status == "free");
}


void serverType::setBusy()
{ status = "busy";
}


void serverType::setFree()
{ status = "free";
}


                                                       415

[PDF page 416; printed page 416]
void serverType::setTransactionTime(int t)
{ transactionTime = t;
}


void serverType::setTransactionTime()
{ int time;
        time = currentCustomer.getTransactionTime(); transactionTime
        = time;
}




                                                416

[PDF page 417; printed page 417]
void serverType::decreaseTransactionTime()
{
       transactionTime--;
}


We leave the definitions of the functions getRemainingTransactionTime, setCurrentCustomer,
getCurrentCustomerNumber, getCurrentCustomerArrivalTime, getCurrentCustomerWaitingTime, and
getCurrentCustomerTransactionTime as an exercise for you.


Because we are designing a simulation program that can be used in a variety of applications, we need to
design two more classes: a class to create and process a list of servers and a class to create and process a
queue of waiting customers. The next two sections describe each of these classes.




6.3.3 Server List


A server list is a set of servers. At any given time, a server is either free or busy. For the customer at the
front of the queue, we need to find a server in the list that is free. If all the servers are busy, the customer
must wait until one of the servers becomes free. Thus, the class that implements a list of servers has two
member variables: one to store the number of servers and one to maintain a list of servers. Using dynamic
arrays, depending on the number of servers specified by the user, a list of servers is created during
program execution. Some of the operations that must be performed on a server list are as follows: Return
the server number of a free server; when a customer gets ready to do business and a server is available,
set the server to busy; when the simulation ends, some of the servers might still be busy, so return the
number of busy servers; after each time unit, reduce the transactionTime of each busy server by one time
unit; and if the transactionTime of a server becomes zero, set the server to free. The following class,
serverListType,        implements         the        list      of       servers        as        an       ADT:
//************************************************************
// class serverListType
// This class specifies the members to implement a list of servers.
//************************************************************ class
serverListType
                                                     417

[PDF page 418; printed page 418]
{ public: serverListType(int num = 1);
               //Constructor to initialize a list of servers
               //Postcondition: numOfServers = num
               // A list of servers, specified by num, is created and //
               each server is initialized to "free".


               ~serverListType();
               //Destructor
               //Postcondition: The list of servers is destroyed.


               int getFreeServerID() const;
               //Function to search the list of servers.
               //Postcondition: If a free server is found, returns its ID; //
               otherwise, returns -1.




                                                       418

[PDF page 419; printed page 419]
              int getNumberOfBusyServers() const;
              //Function to return the number of busy servers.
              //Postcondition: The number of busy servers is returned.


              void setServerBusy(int serverID, customerType cCustomer, int tTime); //Function
              to set a server busy.
              //Postcondition: The server specified by serverID is set to
              // "busy", to serve the customer specified by cCustomer,
              // and the transaction time is set according to the //
              parameter tTime.


              void setServerBusy(int serverID, customerType cCustomer); //Function
              to set a server busy.
              //Postcondition: The server specified by serverID is set to
              // "busy", to serve the customer specified by cCustomer.


              void updateServers(ostream& outFile); //Function
              to update the status of a server.
              //Postcondition: The transaction time of each busy server
              // is decremented by one unit. If the transaction time of
              // a busy server is reduced to zero, the server is set to
              // "free". Moreover, if the actual parameter corresponding
              // to outFile is cout, a message indicating which customer
              // has been served is printed on the screen, together with the
              // customer's departing time. Otherwise, the output is sent //
              to a file specified by the user.


       private:
              int numOfServers;
              serverType *servers;
};
Figure 6-13 shows the UML diagram of the class serverListType.


                                                   419

[PDF page 420; printed page 420]
                              FIGURE 6-13 UML diagram of the class serverListType



Following are the definitions of the member functions of the class serverListType. The definitions of the
constructor and destructor are straightforward.


serverListType::serverListType(int num)




                                                     420

[PDF page 421; printed page 421]
{
        numOfServers = num;
        servers = new serverType[num];
}


serverListType::~serverListType()
{ delete [] servers;
}


The function getFreeServerID searches the list of servers. If a free server is found, it returns the server’s
ID; otherwise, the value -1 is returned, which indicates that all the servers are busy. The definition of this
function is as follows:


int serverListType::getFreeServerID() const
{ int serverID = -1;
        for (int i = 0; i < numOfServers; i++)
                if (servers[i].isFree())
                { serverID = i;
                          break;
                } return
        serverID;
}


The function getNumberOfBusyServers searches the list of servers and determines the number of busy
servers. The number of busy servers is returned. The definition of this function is as follows:


int serverListType::getNumberOfBusyServers() const
{ int busyServers = 0;
        for (int i = 0; i < numOfServers; i++) if
                (!servers[i].isFree())
                busyServers++;
        return busyServers;
}
                                                    421

[PDF page 422; printed page 422]
The function setServerBusy sets a server to busy. This function is overloaded. The serverID of the server
that is set to busy is passed as a parameter to this function. One function sets the server’s transaction
time according to the parameter tTime; the other function sets it by using the transaction time stored in
the object cCustomer. The transaction time is later needed to determine the average waiting time. The
definitions of these functions are as follows:


void serverListType::setServerBusy(int serverID, customerType cCustomer, int tTime)
{
       servers[serverID].setBusy();
       servers[serverID].setTransactionTime(tTime);
       servers[serverID].setCurrentCustomer(cCustomer);
}


void serverListType::setServerBusy(int serverID, customerType cCustomer)




                                                  422

[PDF page 423; printed page 423]
{
        int time = cCustomer.getTransactionTime();
        servers[serverID].setBusy();
        servers[serverID].setTransactionTime(time);
        servers[serverID].setCurrentCustomer(cCustomer);
}


The definition of the function updateServers is quite straightforward. Starting at the first server, it
searches the list of servers for busy servers. When a busy server is found, its transactionTime is
decremented by 1. If the transactionTime reduces to zero, the server is set to free. If the transactionTime
of a busy server reduces to zero, the transaction of the customer being served by the server is complete.
If the actual parameter corresponding to outFile is cout, a message indicating which customer has been
served is printed on the screen, together with the customer’s departing time. Otherwise, the output is
sent to a file specified by the user. The definition of this function is as follows:


void serverListType::updateServers(ostream& outF)
{ for (int i = 0; i < numOfServers; i++)
                if (!servers[i].isFree())
                {
                        servers[i].decreaseTransactionTime();
                        if (servers[i].getRemainingTransactionTime() == 0)
                        {
                                 outF << "From server number " << (i + 1)
                                            << " customer number "
                                            << servers[i].getCurrentCustomerNumber()
                                            << "\n departed at clock unit "
                                            << servers[i].getCurrentCustomerArrivalTime()
                                            + servers[i].getCurrentCustomerWaitingTime()
                                            + servers[i].getCurrentCustomerTransactionTime()
                                            << endl; servers[i].setFree();
                        }
                }
}
                                                          423

[PDF page 424; printed page 424]
6.3.4 Waiting Customers Queue


When a customer arrives, he or she goes to the end of the queue. When a server becomes available, the
customer at the front of the queue leaves to conduct the transaction. After each time unit, the waiting
time of each customer in the queue is incremented by 1. The ADT queueType designed in this chapter has
all the operations needed to implement a queue, except the operation of incrementing the waiting time
of each customer in the queue by one time unit. We will derive a class, waitingCustomerQueueType, from
the class queueType and add the additional operations to implement the customer queue. The definition
of the class waitingCustomerQueueType is as follows:
//************************************************************
// class waitingCustomerQueueType
// This class extends the class queueType to implement a list //
of waiting customers.




                                                   424

[PDF page 425; printed page 425]
//************************************************************ class
waitingCustomerQueueType: public queueType<customerType>
{ public:
                 waitingCustomerQueueType(int size = 100);
                 //Constructor
                 //Postcondition: The queue is initialized according to the
                 // parameter size. The value of size is passed to the //
                 constructor of queueType.


                 void updateWaitingQueue();
                 //Function to increment the waiting time of each //customer
                 in the queue by one time unit.
};
The definitions of the member functions are given next. The definition of the constructor is as follows:
waitingCustomerQueueType::waitingCustomerQueueType(int size):queueType<customerType>(size)
{
}


The function updateWaitingQueue increments the waiting time of each customer in the queue by one
time unit. The class waitingCustomerQueueType is derived from the class queueType. Because the
member variables of queueType are private, the function updateWaitingQueue cannot directly access the
elements of the queue. The only way to access the elements of the queue is to use the deleteQueue
operation.After incrementing the waiting time, the element can be put back into the queue by using the
addQueue operation.


The addQueue operation inserts the element at the end of the queue. If we perform the deleteQueue
operation followed by the addQueue operation for each element of the queue, eventually the front
element again becomes the front element. Given that each deleteQueue operation is followed by an
addQueue operation, how do we determine that all the elements of the queue have been processed? We
cannot use the isEmptyQueue or isFullQueue operations on the queue because the queue will never be
empty or full.


One solution to this problem is to create a temporary queue. Every element of the original queue is

                                                      425

[PDF page 426; printed page 426]
removed, processed, and inserted into the temporary queue. When the original queue becomes empty,
all of the elements in the queue are processed. We can then copy the elements from the temporary queue
back into the original queue. However, this solution requires us to use extra memory space, which could
be significant. Also, if the queue is large, extra computer time is needed to copy the elements from the
temporary queue back into the original queue. Let us look into another solution.


In the second solution, before starting to update the elements of the queue, we can insert a dummy
customer with a waiting time of, say -1. During the update process, when we arrive at the customer with
the waiting time of -1, we can stop the update process without processing the customer with the waiting
time of -1. If we do not process the customer with the waiting time -1, this customer is removed from the
queue and after processing all the elements of the queue, the queue will contain no extra elements. This
solution does not require us to create a temporary queue, so we do not need extra computer time to copy




                                                  426

[PDF page 427; printed page 427]
the elements back into the original queue. We will use this solution to update the queue. Therefore, the
definition of the function updateWaitingQueue is as follows:


void waitingCustomerQueueType::updateWaitingQueue()
{
       customerType cust;


       cust.setWaitingTime(-1); int
       wTime = 0;

       addQueue(cust);
       while (wTime != -1)
       {
               cust = front();
               deleteQueue();


               wTime = cust.getWaitingTime();
               if (wTime == -1) break;
               cust.incrementWaitingTime(); addQueue(cust);
       }
}


6.3.5 Main Program


To run the simulation, we first need to get the following information:


        The number of time units the simulation should run. Assume that each time unit is one minute.
        The number of servers.
        The amount of time it takes to serve a customer—that is, the transaction time. The
        approximate time between customer arrivals.


These pieces of information are called simulation parameters. By changing the values of these parameters,
we can observe the changes in the performance of the system. We can write a function,
setSimulationParameters, to prompt the user to specify these values. The definition of this function is as
                                                   427

[PDF page 428; printed page 428]
follows:


void setSimulationParameters(int& sTime, int& numOfServers, int& transTime, int& tBetweenCArrival)
{
       cout << "Enter the simulation time:
       "; cin >> sTime; cout << endl;


       cout << "Enter the number of servers:
       "; cin >> numOfServers; cout << endl;


       cout << "Enter the transaction time: "; cin
       >> transTime;




                                                     428

[PDF page 429; printed page 429]
        cout << endl;


        cout << "Enter the time between customers arrival:
        "; cin >> tBetweenCArrival; cout << endl;
}


When a server becomes free and the customer queue is nonempty, we can move the customer at the
front of the queue to the free server to be served. Moreover, when a customer starts the transaction, the
waiting time ends. The waiting time of the customer is added to the total waiting time. The general
algorithm to start the transaction (supposing that serverID denotes the ID of the free server) is as follows:


               1. Remove the customer from the front of the queue.


                   customer = customerQueue.front();
                   customerQueue.deleteQueue();


               2. Update the total waiting time by adding the current customer’s waiting time to the
                   previous total waiting time.


                   totalWait = totalWait + customer.getWaitingTime();


               3. Set the free server to begin the transaction.
                   serverList.setServerBusy(serverID, customer, transTime);
To run the simulation, we need to know the number of customers arriving at a given time unit and how
long it takes to serve the customer. We use the Poisson distribution from statistics, which says that the
probability of y events occurring at a given time is given by the formula:




                                                                        where λ is the expected value that y
events occur at that time. Suppose that, on average, a customer arrives every four minutes. During this
four-minute period, the customer can arrive at any one of the four minutes. Assuming an equal likelihood
of each of the four minutes, the expected value that a customer arrives in each of the four minutes is,
therefore, 1 / 4 = 0.25.
                                                    429

[PDF page 430; printed page 430]
Next, we need to determine whether the customer actually arrives at a given minute. Now P(0) = e- λ is
the probability that no event occurs at a given time. One of the basic assumptions of the Poisson
distribution is that the probability of more than one outcome occurring in a short time interval is
negligible. For simplicity, we assume that only one customer arrives at a given time unit. Thus, we use e-λ
as the cutoff point to determine whether a customer arrives at a given time unit. Suppose that, on average,
a customer arrives every four minutes. Then λ = 0.25.We can use an algorithm to generate a number
between 0 and 1. If the value of the number generated is > e-0.25, we can assume that the customer arrived
at a particular time unit. For example, suppose that rNum is a random number such that 0 ≤ rNum
≤ 1. If rNum> e-0.25, the customer arrived at the given time unit.




                                                    430

[PDF page 431; printed page 431]
We now describe the function runSimulation to implement the simulation. Suppose that we run the
simulation for 100 time units and customers arrive at time units 93, 96, and 100. The average transaction
time is 5 minutes—that is, 5 time units. For simplicity, assume that we have only one server and the server
becomes free at time unit 97, and that all customers arriving before time unit 93 have been served. When
the server becomes free at time unit 97, the customer arriving at time unit 93 starts the transaction.
Because the transaction of the customer arriving at time unit 93 starts at time unit 97 and it takes 5
minutes to complete a transaction, when the simulation loop ends, the customer arriving at time unit 93
is still at the server. Moreover, customers arriving at time units 96 and 100 are in the queue. For simplicity,
we assume that when the simulation loop ends, the customers at the servers are considered served. The
general algorithm for this function is as follows:
   1. Declare and initialize the variables such as the simulation parameters, customer number, clock,
       total and average waiting times, number of customers arrived, number of customers served,
       number of customers left in the waiting queue, number of customers left with the servers,
       waitingCustomersQueue, and a list of servers.
   2. The main loop is as follows:


       for (clock = 1; clock <= simulationTime; clock++)
       {
               2.1. Update the server list to decrement the transaction time of each busy server by one
                    time unit.
               2.2. If the customer’s queue is nonempty, increment the waiting time of each customer by
                    one time unit.
               2.3. If a customer arrives, increment the number of customers by 1 and add the new
                    customer to the queue.
               2.4. If a server is free and the customer’s queue is nonempty, remove a customer from the
                    front of the queue and send the customer to the free server.
       }


   3. Print the appropriate results. Your results must include the number of customers left in the queue,
       the number of customers still with servers, the number of customers arrived, and the number of
       customers who actually completed a transaction.


Once you have designed the function runSimulation, the definition of the function main is simple and

                                                     431

[PDF page 432; printed page 432]
straightforward because the function main calls only the function runSimulation.


When we tested our version of the simulation program, we generated the following results. We assumed
that the average transaction time is 5 minutes and that on average a customer arrives every 4 minutes,
and we used a random number generator to generate a number between 0 and 1 to decide whether a
customer arrived at a given time unit.


Sample Run:
Customer number 1 arrived at time unit 4
Customer number 2 arrived at time unit 8
From server number 1 customer number 1 departed
       at clock unit 9
Customer number 3 arrived at time unit 9
Customer number 4 arrived at time unit 12




                                                 432

[PDF page 433; printed page 433]
From server number 1 customer number 2 departed
       at clock unit 14
From server number 1 customer number 3 departed
       at clock unit 19
Customer number 5 arrived at time unit 21
From server number 1 customer number 4 departed
       at clock unit 24
From server number 1 customer number 5 departed
       at clock unit 29
Customer number 6 arrived at time unit 37
Customer number 7 arrived at time unit 38
Customer number 8 arrived at time unit 41
From server number 1 customer number 6 departed
       at clock unit 42
Customer number 9 arrived at time unit 43
Customer number 10 arrived at time unit 44
From server number 1 customer number 7 departed
       at clock unit 47
Customer number 11 arrived at time unit 49
Customer number 12 arrived at time unit 51
From server number 1 customer number 8 departed
       at clock unit 52
Customer number 13 arrived at time unit 52
Customer number 14 arrived at time unit 53
Customer number 15 arrived at time unit 54
From server number 1 customer number 9 departed
       at clock unit 57
Customer number 16 arrived at time unit 59
From server number 1 customer number 10 departed
       at clock unit 62
Customer number 17 arrived at time unit 66
From server number 1 customer number 11 departed
       at clock unit 67
Customer number 18 arrived at time unit 71
                                             433

[PDF page 434; printed page 434]
From server number 1 customer number 12 departed
       at clock unit 72
From server number 1 customer number 13 departed
       at clock unit 77
Customer number 19 arrived at time unit 78
From server number 1 customer number 14 departed
       at clock unit 82
From server number 1 customer number 15 departed
       at clock unit 87
Customer number 20 arrived at time unit 90
From server number 1 customer number 16 departed
       at clock unit 92
Customer number 21 arrived at time unit 92




                                             434
```
