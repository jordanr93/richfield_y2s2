---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "435-442"
printed_pages: "435-442"
section: "Review Questions"
chapter: "TOPIC 6: QUEUES"
keywords:
  - "queue"
  - "cout"
  - "stack"
  - "addqueue"
  - "endl"
  - "int"
  - "while"
  - "following"
  - "front"
  - "case"
  - "break"
  - "deletequeue"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 435-442 | printed pages 435-442

Related sections: [Review Exercise](44-review-exercise.md), [Review Questions](35-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md), [Review Questions](09-review-questions.md), [Review Questions](19-review-questions.md), [Review Questions](30-review-questions.md)

## Extracted Text

```text
[PDF page 435; printed page 435]
        Review Questions


1. Consider the following statements:


                queueType<int> queue;
                int x, y;

Show what is output by the following segment of code:
                                                      435

[PDF page 436; printed page 436]
x = 4; y
= 5;
queue.addQueue(x);
queue.addQueue(y); x =
queue.front();
queue.deleteQueue();
queue.addQueue(x + 5);
queue.addQueue(16);
queue.addQueue(x);
queue.addQueue(y - 3);


cout << "Queue Elements: ";
while (!queue.isEmptyQueue())
{




                                436

[PDF page 437; printed page 437]
                        cout << queue.front() << " ";
                        queue.deleteQueue();
               }
               cout << endl;


2. Consider the following statements:


               stackType<int> stack;
               queueType<int> queue;
               int x;


Suppose the input is:
               15 28 14 22 64 35 19 32 7 11 13 30 -999
Show what is written by the following segment of
               code: stack.push(0);
               queue.addQueue(0);
               cin >> x; while (x
               != -999)
               {
                        switch (x % 4)
                        { case 0: stack.push(x);
                               break; case 1:
                                         if (!stack.isEmptyStack())
                                         {
                                                   cout << "Stack Element = " << stack.top() << endl; stack.pop();
                                         }
                                         else cout << "Sorry, the stack is empty." << endl;
                                         break; case
                               2:
                                         queue.addQueue(x);
                                         break; case
                               3:
                                         if (!queue.isEmptyQueue())
                                                         437

[PDF page 438; printed page 438]
                         {
                                   cout << "Queue Element = " << queue.front() << endl;
                                   queue.deleteQueue();
                         }
                         else cout << "Sorry, the queue is empty." << endl;
break; } //end switch cin >> x; } //end while cout << "Stack Elements: ";
while (!stack.isEmptyStack())
{ cout << stack.top() << " ";
        stack.pop();
}
cout   << endl;        cout   <<
"Queue Elements: ";
while (!queue.isEmptyQueue())
{
        cout << queue.front() << " ";




                                        438

[PDF page 439; printed page 439]
                       queue.deleteQueue();
               }
               cout << endl;
3. What does the following function do?


               void mystery(queueType<int>& q)
               {
                      stackType<int> s; while
                       (!q.isEmptyQueue())
                       {
                               s.push(q.front());
                               q.deleteQueue();
                       }
                       while (!s.isEmptyStack())
                       {
                               q.addQueue(2 * s.top());
                               s.pop();
                       }
               }


4. What is the effect of the following statements? If a statement is invalid, explain why it is invalid. The
classes queueADT, queueType, and linkedQueueType are as defined in this chapter. a. queueADT<int>
newQueue;
b. queueType <double> sales(-10);
c. queueType <string> names;
d. linkedQueueType <int> numQueue(50);


5. What is the output of the following program segment?


               linkedQueueType<int> queue;
               queue.addQueue(10);
               queue.addQueue(20); cout <<
               queue.front() << endl;
                                                    439

[PDF page 440; printed page 440]
queue.deleteQueue();
queue.addQueue(2 * queue.back());
queue.addQueue(queue.front());
queue.addQueue(5);
queue.addQueue(queue.back() - 2);


linkedQueueType<int> tempQueue;
tempQueue = queue;
while (!tempQueue.isEmptyQueue())
{
      cout << tempQueue.front() << " ";
      tempQueue.deleteQueue();
}




                                 440

[PDF page 441; printed page 441]
               cout << endl;


               cout << queue.front() << " " << queue.back() << endl;
6. Suppose that queue is a queueType object and the size of the array implementing queue is 100. Also,
suppose that the value of queueFront is 50 and the value of queueRear is 99.
a. What are the values of queueFront and queueRear after adding an element to queue?
b. What are the values of queueFront and queueRear after removing an element from queue?


7. Suppose that queue is a queueType object and the size of the array implementing queue is 100. Also,
suppose that the value of queueFront is 99 and the value of queueRear is 25.
a. What are the values of queueFront and queueRear after adding an element to queue?
b. What are the values of queueFront and queueRear after removing an element from queue?


8. Suppose that queue is a queueType object and the size of the array implementing queue is 100. Also,
suppose that the value of queueFront is 25 and the value of queueRear is 75.
a. What are the values of queueFront and queueRear after adding an element to queue?
b. What are the values of queueFront and queueRear after removing an element from queue?


9. Suppose that queue is a queueType object and the size of the array implementing queue is 100. Also,
suppose that the value of queueFront is 99 and the value of queueRear is 99.
a. What are the values of queueFront and queueRear after adding an element to queue?
b. What are the values of queueFront and queueRear after removing an element from queue?


10.    Suppose that queue is implemented as an array with the special reserved slot, as described in this
chapter. Also, suppose that the size of the array implementing queue is 100. If the value of queueFront is
50, what is the position of the first queue element?


11.    Suppose that queue is implemented as an array with the special reserved slot, as described in this
chapter. Suppose that the size of the array implementing queue is 100. Also, suppose that the value of
queueFront is 74 and the value of queueRear is 99.
a. What are the values of queueFront and queueRear after adding an element to queue?
b. What are the values of queueFront and queueRear after removing an element from queue? Also, what
  is the position of the removed queue element?

                                                   441

[PDF page 442; printed page 442]
12. Write a function template, reverseQueue, that takes as a parameter a queue object and uses a stack
   object to reverse the elements of the queue.


13. Add the operation queueCount to the class queueType (the array implementation of queues), which
   returns the number of elements in the queue.


Write the definition of the function template to implement this operation.


14. Draw the UML diagram of the class queueADT.


15. Draw the UML diagram of the class queueType.


16. Draw the UML diagram of the class linkedQueueType.




                                                  442
```
