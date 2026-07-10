---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "357-364"
printed_pages: "357-364"
section: "Review Exercise"
chapter: "TOPIC 5: STACKS"
keywords:
  - "stack"
  - "push"
  - "cout"
  - "following"
  - "stacktype"
  - "int"
  - "endl"
  - "type"
  - "top"
  - "pop"
  - "while"
  - "string"
---

# Review Exercise

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 357-364 | printed pages 357-364

Related sections: [Review Questions](51-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md), [Review Questions](09-review-questions.md), [Review Questions](19-review-questions.md), [Review Questions](30-review-questions.md), [Review Questions](35-review-questions.md)

## Extracted Text

```text
[PDF page 357; printed page 357]
       Review Exercise
1. Consider the following statements:
       stackType<int> stack;
       int x, y;
Show what is output by the following segment of code:
       x = 4; y = 0; stack.push(7);
       stack.push(x);
       stack.push(x + 5); y =
       stack.top(); stack.pop();
       stack.push(x + y);
       stack.push(y - 2);
       stack.push(3); x =
       stack.top(); stack.pop();
       cout << "x = " << x <<
       endl; cout << "y = " << y
       << endl;
       while (!stack.isEmptyStack())
       {
                   cout << stack.top() << endl; stack.pop();
       }


2. Consider the following statements:
       stackType<int> stack;
       int x;


Suppose that the input is:


       14 45 34 23 10 5 -999
Show what is output by the following segment of code:
       stack.push(5);
       cin >> x; while
       (x != -999)
       {
                                                        357

[PDF page 358; printed page 358]
       if (x % 2 == 0)
       {
               if (!stack.isFullStack()) stack.push(x);
       }
       else
               cout << "x = " << x << endl;
       cin >> x;
}
cout << "Stack Elements: ";




                                              358

[PDF page 359; printed page 359]
         while (!stack.isEmptyStack())
         {
                   cout << " " << stack.top(); stack.pop();
         }
         cout << endl;


3. Evaluate the following postfix expressions:
a. 8 2 + 3 * 16 4 / - =
b. 12 25 5 1 / / * 8 7 + - =
c. 70 14 4 5 15 3 / * - - / 6 + =
d. 3 5 6 * + 13 - 18 2 / + =


4. Convert the following infix expressions to postfix notations:
a. (A + B) * (C + D) - E
b. A - (B + C) * D + E / F
c. ((A + B) / (C - D) + E) * F - G
d. A + B * (C + D) - E / F * G + H


5. Write the equivalent infix expression for the following postfix expressions: a.
AB*C+
b. A B + C D - *
c. A B – C – D *


6. What is the output of the following program?
#include <iostream>
#include <string> #include
"myStack.h"
using namespace std;


template <class Type>
void mystery(stackType<Type>& s, stackType<Type>& t); int
main()
{
                                                        359

[PDF page 360; printed page 360]
stackType<string> s1; stackType<string>
s2;


string list[] = {"Winter", "Spring", "Summer", "Fall","Cold", "Warm", "Hot"};
for (int i = 0; i < 7; i++) s1.push(list[i]);
mystery(s1, s2);


while (!s2.isEmptyStack())
{ cout << s2.top() << " ";
        s2.pop();
}
cout << endl;




                                                360

[PDF page 361; printed page 361]
}


template <class Type>
void mystery(stackType<Type>& s, stackType<Type>& t)
{
         while (!s.isEmptyStack())
         {
                  t.push(s.top());
                  s.pop();
         }
}


7. What is the effect of the following statements? If a statement is invalid, explain why it is invalid. The
classes stackADT, stackType, and linkedStackType are as defined in this chapter. a. stackADT<int>
newStack;
b. stackType<double> sales(-10);
c. stackType<string> names;
d. linkedStackType<int> numStack(50);


8. What is the output of the following program?
#include <iostream>
#include <string> #include
"myStack.h" using
namespace std;
void mystery(stackType<int>& s, stackType<int>& t); int
main()
{
         int list[] = {5, 10, 15, 20, 25};


         stackType<int> s1; stackType<int>
         s2;


         for (int i = 0; i < 5; i++)
                                                   361

[PDF page 362; printed page 362]
               s1.push(list[i]);
       mystery(s1, s2);
       while (!s2.isEmptyStack())
       { cout << s2.top() << " ";
               s2.pop();
       }
       cout << endl;
}


void mystery(stackType<int>& s, stackType<int>& t)
{
       while (!s.isEmptyStack())
       {




                                                362

[PDF page 363; printed page 363]
                t.push(2 * s.top());
                s.pop();
         }
}
9. What is the output of the following program segment?
         linkedStackType<int> myStack;
         myStack.push(10);
         myStack.push(20);
         myStack.pop();
         cout << myStack.top() << endl; myStack.push(25);
         myStack.push(2 * myStack.top()); myStack.push(-10);
         myStack.pop();


         linkedStackType<int> tempStack;
         tempStack = myStack;
         while (!tempStack.isEmptyStack())
         {
                cout << tempStack.top() << " "; tempStack.pop();
         }


         cout << endl;


         cout << myStack.top() << endl;


10. Write the definition of the function template printListReverse that uses a stack to print a linked list in
    reverse order. Assume that this function is a member of the class linkedListType, designed in Chapter
    3.


11. Write the definition of the function template second that takes as a parameter a stack object and
    returns the second element of the stack. The original stack remains unchanged.


12. Draw the UML class diagram of the class linkedStackType.



                                                    363

[PDF page 364; printed page 364]
13. Write the definition of the function template clear that takes as a parameter a stack object of the type
   stack (STL class) and removes all the elements from the stack.




                                                   364
```
