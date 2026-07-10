---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "111-117"
printed_pages: "111-117"
section: "Review Questions"
chapter: "TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)"
keywords:
  - "veclist"
  - "int"
  - "output"
  - "vector"
  - "screen"
  - "what"
  - "iterator"
  - "following"
  - "elements"
  - "begin"
  - "statement"
  - "object"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 111-117 | printed pages 111-117

Related sections: [Review Questions](09-review-questions.md), [Review Questions](35-review-questions.md), [ostream Iterator and Function copy](2-6-ostream-iterator-and-function-copy.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md), [Review Questions](../../machine-learning-600-study-guide/sections/2-7-review-questions.md)

## Extracted Text

```text
[PDF page 111; printed page 111]
         Review Questions


1. What are the three main components of the STL?


2. What is the difference between an STL container and an STL iterator?


3. Write a statement that declares a vector object that can store 50 decimal numbers.


4. Write a statement that declares and stores the elements of the following array into a vector object:
char vowels[5] = {'a', 'e', 'i', 'o', 'u'};


5. Write a statement to declare screen to be an ostream_iterator initialized to the standard output device
  that outputs the elements of an int vector object.


6. Consider the following statements:
vector<int> intVector;


Suppose that intVector = {5, 7, 9, 11, 13}. Moreover, suppose that screen is an ostream_iterator initialized
to the standard output device to output the elements of an int vector object. What is the effect of the
following statement?


                          copy(vecList.begin(), vecList.end(), screen);


7. What is the output of the following program segment?


                          vector<int> vecList(5);


                          for (int j = 0; j < 5; j++) vecList[j]
                                   = 2 * j;
                          for (int j = 0; j < 5; j++) cout <<
                                   vecList[j] << " ";

                                                            111

[PDF page 112; printed page 112]
                      cout << endl;


8. What is the output of the following program segment? (Assume that screen is an ostream_iterator
  initialized to the standard output device to output elements of type int.)


                      int list[5] = {2,4,6,8,10};
                      vector<int> vecList(5);

                      copy(list, list + 5, vecList.begin());
                      copy(vecList.begin(), vecList.end(), screen); cout
                      << endl;




                                                      112

[PDF page 113; printed page 113]
9. What is the output of the following program segment? (Assume that screen is an ostream_iterator
  initialized to the standard output device to output elements of type int.)


                      vector<int> vecList;
                      vector<int>::iterator vecIt;


                      vecList.push_back(3);
                      vecList.push_back(5);
                      vecList.push_back(7);
                      vecIt = vecList.begin();
                      ++vecIt; vecList.erase(vecIt);
                      vecList.push_back(9);


                      copy(vecList.begin(), vecList.end(), screen); cout
                      << endl;


10. What is the output of the following program segment? (Assume that screen is an ostream_iterator
   initialized to the standard output device to output elements of type int.)


                      int list[5] = {2,4,6,8,10};
                      vector<int> vecList(7);


                      copy(list, list + 5, vecList.begin());
                      vecList.push_back(12);
                      copy(vecList.begin(), vecList.end(), screen); cout
                      << endl;


11. What is the output of the following program segment? (Assume that screen is an ostream_iterator
   initialized to the standard output device to output elements of type double.)

                      vector<double> sales(3);
                      sales[0] = 50.00; sales[1]
                      = 75.00;
                      sales[2] = 100.00;

                                                      113

[PDF page 114; printed page 114]
sales.resize(5);
sales[3] = 200.00;
sales[4] = 95.00;


copy(sales.begin(), sales.end(), screen); cout
<< endl;




                             114

[PDF page 115; printed page 115]
12. What is the output of the following program segment? (Assume that screen is an ostream_iterator
   initialized to the standard output device that outputs elements of type int.)


                        vector<int> intVector; vector<int>::iterator
                        vecIt; intVector.push_back(15);
                        intVector.push_back(2);
                        intVector.push_back(10);
                        intVector.push_back(7); vecIt =
                        intVector.begin(); vecIt++;
                        intVector.erase(vecIt);
                        intVector.pop_back();


                        copy(intVector.begin(),intVector.end(), screen);


13. Suppose that vecList is a vector container and
vecList = {12, 16, 8, 23, 40, 6, 18, 9, 75}


Show vecList after the following statement executes:
copy(vecList.begin() + 2, vecList.end(), vecList.begin());


14. Suppose that vecList is a vector container and
vecList = {12, 16, 8, 23, 40, 6, 18, 9, 75}


Show vecList after the following statement executes:
copy(vecList.rbegin() + 3, vecList.rend(), vecList.rbegin());


15. What is the output of the following program segment?


                        deque<int> intDeq;
                        ostream_iterator<int> screen(cout, " "); deque<int>::iterator
                        deqIt;


                        intDeq.push_back(5);

                                                      115

[PDF page 116; printed page 116]
intDeq.push_front(23);
intDeq.push_front(45);
intDeq.push_back(35);
intDeq.push_front(0);
intDeq.push_back(50);
intDeq.push_front(34);


deqIt = intDeq.begin();
intDeq.insert(deqIt,76);
intDeq.pop_back();
deqIt = intDeq.begin();
++deqIt;
++deqIt;


intDeq.erase(deqIt);




                           116

[PDF page 117; printed page 117]
intDeq.push_front(2 * intDeq.back()); intDeq.push_back(3
* intDeq.front());


copy(intDeq.begin(), intDeq.end(), screen); cout
<< endl;




                            117
```
