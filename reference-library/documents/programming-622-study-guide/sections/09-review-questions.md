---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "58-64"
printed_pages: "58-64"
section: "Review Questions"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "int"
  - "following"
  - "what"
  - "returns"
  - "number"
  - "find"
  - "sum"
  - "consider"
  - "operations"
  - "funcexercise7"
  - "size"
  - "software"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 58-64 | printed pages 58-64

Related sections: [Review Questions](35-review-questions.md), [Review Questions](19-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md), [Review Questions](../../machine-learning-600-study-guide/sections/2-7-review-questions.md), [Review Questions](51-review-questions.md)

## Extracted Text

```text
[PDF page 58; printed page 58]
   Review Questions


1. Mark the following statements as true or false.
a. The life cycle of software refers to the phases from the point the software was conceived until it is
  retired.
b. The three fundamental stages of software are development, use, and discard.
c. The expression 4n + 2n2 + 5 is O(n).
d. The instance variables of a class must be of the same type.
e. The function members of a class must be public.
f. A class can have more than one constructor.
g. A class can have more than one destructor.
h. Both constructors and destructors can have parameters.


2. What is black-box testing?


                                                     58

[PDF page 59; printed page 59]
3. What is white-box testing?


4. Consider the following function prototype, which returns the square root of a real number:
                         double sqrt(double x);
What should be the pre- and postconditions for this function?


5. Each of the following expressions represents the number of operations for certain algorithms. What is
    the order of each of these expressions?


a. n2 + 6n + 4

b. 5n3 + 2n + 8

c. (n2 + 1) (3n + 5)
d. 5(6n + 4)
e. n + 2log2n – 6
f. 4n log2n + 3n + 8




6. Consider the following function:


void funcExercise6(int x, int y)
{ int z; z = x + y;
         x = y; y
         = z; z =
         x;
         cout << "x = " << x << ", y = " << y << ", z = " << z << endl;
}


Find the exact number of operations executed by the function funcExercise6.


7. Consider the following function:


int funcExercise7(int list[], int size)
                                                        59

[PDF page 60; printed page 60]
{ int sum = 0;
        for (int index = 0; index < size; index++) sum
                 = sum + list[index];
        return sum;
}


a. Find the number of operations executed by the function funcExercise7 if the value of size is 10.
b. Find the number of operations executed by the function funcExercise7 if the value of size is n.
c. What is the order of the function funcExercise7?


8. Consider the following function prototype:
int funcExercise8(int x);
The function funcExercise8 returns the value as follows: If 0 <= x <= 50, it returns 2x; if –50 <= x < 0, it
returns x2; otherwise it returns –999.What are the reasonable boundary values for the function
funcExercise8?


9. Write a function that uses a loop to find the sum of the squares of all integers between 1 and n. What
    is the order of your function?


10. Characterize the following algorithm in terms of Big-O notation. Also find the exact number of
    additions executed by the loop. (Assume that all variables are properly declared.)


                        for (int i = 1; i <= n; i++)
                                 sum = sum + i * (i + 1);


11. Characterize the following algorithm in terms of Big-O notation. Also find the exact number of
    additions, subtractions, and multiplications executed by the loop. (Assume that all variables are
    properly declared.) for (int i = 5; i <= 2 * n; i++) cout << 2 * n + i - 1 << endl;


12. Characterize the following algorithm in terms of Big-O notation.


                        for (int i = 1; i <= 2 * n; i++) for

                                                         60

[PDF page 61; printed page 61]
                                     (int j = 1; j <= n; j++)
                                             cout << 2 * i + j;
                           cout << endl;


13. Characterize the following algorithm in terms of Big-O notation. for (int i = 1; i <= n; i++) for (int j = 1; j
     <= n; j++) for (int k = 1; k <= n; k++)
                                                      cout << i + j + k;


14. Find the syntax errors in the definitions of the following classes: a. class AA
{ public: void print(); int
         sum();
                  AA(); int
         AA(int, int); private:
         int x; int y;
};


b. class BB
{ int one ; int two;
public: bool equal();
print(); BB(int, int);
}


c. class CC
{ public; void set(int, int); void
         print(); CC(); CC(int,
         int); bool CC(int, int);
         private: int u;




                                                                61

[PDF page 62; printed page 62]
                   int v;
};
15. Consider the following declarations: class
xClass
{ public: void func(); void print()
          const; xClass (); xClass (int,
          double); private:
                   int u;
                   double w;
};


xClass x;


a. How many members does class xClass have?
b. How many private members does class xClass have?
c. How many constructors does class xClass have?
d. Write the definition of the member function func so that u is set to 10 and w is set to 15.3.
e. Write the definition of the member function print that prints the contents of u and w.
f. Write the definition of the default constructor of the class xClass so that the private data members are
     initialized to 0.
g. Write a C++ statement that prints the values of the data members of the object x.
h. Write a C++ statement that declares an object t of the type xClass, and initializes the data members of
     t to 20 and 35.0, respectively.


16. Consider the definition of the following class: class
CC
{ public:

                   CC();                   //Line 1
                   CC(int);                //Line 2
                   CC(int, int);           //Line 3
                   CC(double, int);        //Line 4
.

                                                      62

[PDF page 63; printed page 63]
.
.
          private:
                   int u;
                   double v;
};
a. Give the line number containing the constructor that is executed in each of the following declarations:
     i. CC one; ii. CC two(5, 6); iii. CC three(3.5, 8);
b. Write the definition of the constructor in Line 1 so that the private data members are initialized to 0.
c. Write the definition of the constructor in Line 2 so that the private data member u is initialized
     according to the value of the parameter, and the private data member v is initialized to 0.
d. Write the definition of the constructors in Lines 3 and 4 so that the private data members are initialized
     according to the values of the parameters.


17. Given the definition of the class clockType with constructors (as described in this chapter), what is the
output of the following C++ code?

          clockType clock1; clockType
          clock2(23, 13, 75);
          clock1.printTime(); cout <<
          endl; clock2.printTime();
          cout << endl;
          clock1.setTime(6, 59,
          39); clock1.printTime();
          cout << endl;
          clock1.incrementMinutes();
          clock1.printTime(); cout << endl; clock1.setTime(0, 13, 0); if
          (clock1.equalTime(clock2)) cout << "Clock1 time is the same as
          clock2 time." << endl; else cout << "The two times are
          different." << endl;


18. Write the definition of a class that has the following properties:
a. The name of the class is secretType.
b. The class secretType has four instance variables: name of type string, age and weight of type int, and
                                                    63

[PDF page 64; printed page 64]
  height of type double.
c. The class secretType has the following member functions:


       print—Outputs the data stored in the instance variables with the appropriate titles
       setName—Function to set the name setAge—Function to set the age setWeight—
       Function to set the weight setHeight—Function to set the height getName—
       Value-returning function to return the name getAge—Value-returning function to
       return the age
       getWeight—Value-returning function to return the weight getHeight—Value-returning
       function to return the height
       Default constructor—Sets name to the empty string and age, weight, and height to 0
       Constructor with parameter—Sets the values of the instance variables to the values specified by
       the user


d. Write the definition of the member functions of the class secretType as described in Part c.


19. Assume the definition of the class personType as given in this chapter.
a. Write a C++ statement that declares student to be a personType object, and initialize its first name to
  "Buddy" and last name to "Arora".
b. Write a C++ statement that outputs the data stored in the object student.
c. Write C++ statements that change the first name of student to "Susan" and the last name to "Miller".




                                                   64
```
