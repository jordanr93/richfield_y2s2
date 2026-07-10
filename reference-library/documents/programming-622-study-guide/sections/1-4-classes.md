---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "26-27"
printed_pages: "26-27"
section: "Classes"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "you"
  - "member"
  - "can"
  - "variable"
  - "c++"
  - "called"
  - "members"
  - "components"
  - "syntax"
  - "declare"
  - "any"
  - "semicolon"
---

# Classes

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 26-27 | printed pages 26-27

Related sections: [Prescriptive Analytics](../../big-data-iot-600-study-guide/sections/98-prescriptive-analytics.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Client/Server Tiers:](../../information-systems-622-study-guide/sections/4-3-2-client-server-tiers.md), [EMERGING TRENDS](../../information-systems-622-study-guide/sections/2-9-emerging-trends.md), [EXERCISES](../../information-systems-622-study-guide/sections/195-exercises.md), [Online Processing](../../information-systems-622-study-guide/sections/4-6-1-online-processing.md)

## Extracted Text

```text
[PDF page 26; printed page 26]
1.4 Classes


In this section, we review C++ classes. If you are familiar with how classes are implemented in C++, you
 can skip this section.


Recall that in OOD, the first step is to identify the components called objects; an object combines data
 and the operations on that data in a single unit, called encapsulation. In C++, the mechanism that allows
 you to combine data and the operations on that data in a single unit is called a class. A class is a collection
 of a fixed number of components. The components of a class are called the members of the class.

                                                           26

[PDF page 27; printed page 27]
The general syntax for defining a class is:




where class members list consists of variable declarations and/or functions. That is, a member of a class
can be either a variable (to store data) or a function.



      If a member of a class is a variable, you declare it just like any other variable. Furthermore, in the
        definition of the class, you cannot initialize a variable when you declare it.

      If a member of a class is a function, you typically use the function prototype to define that member.

      If a member of a class is a function, it can (directly) access any member of the class—data members
        and function members. That is, when you write the definition of the member function, you can
        directly access any data member of the class without passing it as a parameter. The only obvious
        condition is that you must declare an identifier before you can use it.


In C++, class is a reserved word, and it defines only a data type; no memory is allocated. It announces the
declaration of a class. Moreover, note the semicolon (;) after the right brace. The semicolon is part of the
syntax. A missing semicolon, therefore, will result in a syntax error.




                                                     27
```
