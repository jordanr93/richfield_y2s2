---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "281-284"
printed_pages: "281-284"
section: "Review Questions"
chapter: "TOPIC 4: RECURSION"
keywords:
  - "line"
  - "what"
  - "case"
  - "recursive"
  - "mystery"
  - "base"
  - "number"
  - "following"
  - "general"
  - "recursion"
  - "value"
  - "int"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 281-284 | printed pages 281-284

Related sections: [Review Questions](09-review-questions.md), [Review Questions](19-review-questions.md), [Review Questions](51-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/17-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md)

## Extracted Text

```text
[PDF page 281; printed page 281]
        Review Questions


1. Mark the following statements as true or false.
a. Every recursive definition must have one or more base cases.
b. Every recursive function must have one or more base cases.
c. The general case stops the recursion.
d. In the general case, the solution to the problem is obtained directly.
e. A recursive function always returns a value.


2. What is a base case?


3. What is a recursive case?


4. What is direct recursion?


5. What is indirect recursion?


6. What is tail recursion?


7. Consider the following recursive function:
                                                          281

[PDF page 282; printed page 282]
int mystery(int number)                                                      //Line 1
{                                                                            //Line 2 if
        (number == 0)                                                        //Line 3
        return number;                                            //Line 4 else
                                                                  //Line 5
        return(number + mystery(number - 1));                     //Line 6
}                                                                            //Line 7


a. Identify the base case.
b. Identify the general case.
c. What valid values can be passed as parameters to the function mystery?
d. If mystery(0) is a valid call, what is its value? If not, explain why.
e. If mystery(5) is a valid call, what is its value? If not, explain why.
f. If mystery(-3) is a valid call, what is its value? If not, explain why.




                                                        282

[PDF page 283; printed page 283]
8. Consider the following recursive function:
void funcRec(int u, char v)                                             //Line 1
{                                                                       //Line 2 if
        (u == 0)                                                        //Line 3
        cout << v;                                              //Line 4 else if (u
        == 1)                                            //Line 5
                   cout << static_cast<char>(static_cast<int>(v) + 1); //Line 6 else
                                                                        //Line 7
        funcRec(u - 1, v);                                       //Line 8
}                                                                       //Line 9


Answer the following questions: a.
Identify the base case.
b. Identify the general case.
c. What is the output of the following statement?
        funcRec(5, 'A');


9. Consider the following recursive function: void
exercise(int x)
{
        if (x > 0 && x < 10)
        {
                   cout << x << " ";
                   exercise(x + 1);
        }
}


What is the output of the following statements? a.
exercise(0);
b. exercise(5);
c. exercise(10);
d. exercise(-5);


                                                       283

[PDF page 284; printed page 284]
10. Consider the following function:
int test(int x, int y)
{ if (x == y) return x;
         else if (x > y) return (x
                  + y);
         else return test(x + 1, y - 1);
}


What is the output of the following statements? a.
cout << test(5, 10) << endl;
b. cout << test(3, 9) << endl;


11. Consider the following function:
int func(int x)
{ if (x == 0) return 2;
         else if (x == 1) return
                  3;
         else return (func(x - 1) + func(x - 2));
}
What is the output of the following statements? a.
cout << func(0) << endl;
b. cout << func(1) << endl;
c. cout << func(2) << endl;
d. cout << func(5) << endl;


12.     Suppose that intArray is an array of integers, and length specifies the number of elements in
intArray. Also, suppose that low and high are two integers such that 0 <= low < length, 0 <= high < length,
and low < high. That is, low and high are two indices in intArray. Write a recursive definition that reverses
the elements in intArray between low and high.


13.     Write a recursive algorithm to multiply two positive integers m and n using repeated addition.
Specify the base case and the recursive case.


                                                     284
```
