---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "48-53"
printed_pages: "48-53"
section: "Data Abstraction, Classes, and Abstract Data Types"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "clocktype"
  - "abstraction"
  - "engine"
  - "implementation"
  - "time"
  - "car"
  - "details"
  - "type"
  - "logical"
  - "operations"
  - "adt"
  - "abstract"
---

# Data Abstraction, Classes, and Abstract Data Types

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 48-53 | printed pages 48-53

Related sections: [Data Storage and Management](../../big-data-iot-600-study-guide/sections/3-4-3-data-storage-and-management.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Chapter 4: Big Data Storage and Security](../../big-data-iot-600-study-guide/sections/4-chapter-4-big-data-storage-and-security.md), [Chapter 5: Strategy Development and Big Data Analytics](../../big-data-iot-600-study-guide/sections/5-chapter-5-strategy-development-and-big-data-analytics.md), [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Common tools and frameworks used for big data analysis](../../big-data-iot-600-study-guide/sections/1-3-common-tools-and-frameworks-used-for-big-data-analysis.md)

## Extracted Text

```text
[PDF page 48; printed page 48]
1.11 Data Abstraction, Classes, and Abstract Data Types


 For the car that we drive, most of us want to know how to start the car and drive it. Most people are not
 concerned with the complexity of how the engine works. By separating the design details of a car’s engine
 from its use, the manufacturer helps the driver focus on how to drive the car. Our daily life has other
 similar examples. For the most part, we are concerned only with how to use certain items, rather than
 with how they work.


 Separating the design details (that is, how the car’s engine works) from its use is called abstraction. In
 other words, abstraction focuses on what the engine does and not on how it works. Thus, abstraction is
 the process of separating the logical properties from the implementation details. Driving the car is a logical
 property; the construction of the engine constitutes the implementation details. We have an abstract view
 of what the engine does, but are not interested in the engine’s actual implementation.


 Abstraction can also be applied to data. Earlier sections of this chapter defined a data type clockType. The
 data type clockType has three instance variables and the following basic operations:


 1. Set the time.
 2. Return the time.
 3. Print the time.
                                                     48

[PDF page 49; printed page 49]
4. Increment the time by one second.
5. Increment the time by one minute.
6. Increment the time by one hour.
7. Compare two times to see whether they are equal.


The actual implementation of the operations, that is, the definitions of the member functions of the class,
clockType was postponed.
Data abstraction is defined as a process of separating the logical properties of the data from its
implementation. The definition of clockType and its basic operations are the logical properties; storing
clockType objects in the computer, and the algorithms to perform these operations, are the
implementation details of clockType.


Abstract data type (ADT): A data type that separates the logical properties from the implementation
details.


Like any other data type, an ADT has three things associated with it: the name of the ADT, called the type
name; the set of values belonging to the ADT, called the domain; and the set of operations on the data.
Following these conventions, we can define the clockType ADT as follows:

           dataTypeName clockType
           domain
                 Each clockType value is a time of day in the form of hours, minutes,
                    and seconds.


           operations
                 Set the time.
                 Return the time.
                 Print the time.
                 Increment the time by one second. Increment
                    the time by one minute.
                 Increment the time by one hour.
                 Compare the two times to see whether they are equal.


To implement an ADT, you must represent the data and write algorithms to perform the operations.
                                                     49

[PDF page 50; printed page 50]
The previous section used classes to group data and functions together. Furthermore, our definition of a
class consisted only of the specifications of the operations; functions to implement the operations were
written separately. Thus, we see that classes are a convenient way to implement an ADT. In fact, in C++,
classes were specifically designed to handle ADTs.


EXAMPLE 1-11


A list is defined as a set of values of the same type. Because all values in a list are of the same type, a
convenient way to represent and process a list is to use an array. You can define a list as an ADT as follows:


        typeName
               listType
        domain
               Every element of listType is a set of, say at most 1000 numbers.
        operations
               Check to see whether the list is empty.
               Check to see whether the list is full.
               Search the list for a given item.
               Delete an item from the list.
               Insert an item in the list.
               Sort the list.
               Print the list.


The following class implements the ADT list. To be specific, suppose that the list is a set of elements of the
type int.


class intListType
{ public:
               bool isEmpty();
               //Function to determine whether the list is empty.
               //Precondition: The list must exist.
               //Postcondition: Returns true if the list is empty, //

                                                        50

[PDF page 51; printed page 51]
false otherwise.


bool isFull();
//Function to determine whether the list is full.
//Precondition: The list must exist.
//Postcondition: Returns true if the list is full, //
false otherwise.


int search(int searchItem);
//Function to determine whether searchItem is in the list.
//Postcondition: If searchItem is in the list, returns its
// index, that is, its position in the list; // otherwise,
it returns -1.


void insert(int newItem);
//Function to insert newItem in the list.
//Precondition: The list must exist and must not be full.
//Postcondition: newItem is inserted in the list and //
length is incremented by one.


void remove(int removeItem);
//Function to delete removeItem from the list.
//Precondition: The list must exist and must not be empty
//Postcondition: If found, removeItem is deleted from the //
list and the length is decremented by one;
// otherwise, an appropriate message is printed.


void printList();
//Function to output the elements of the list.
//Precondition: The list must exist.
//Postcondition: The elements of the list are //
printed on the standard output device.


                                        51

[PDF page 52; printed page 52]
                 intListType(); //Default
                 constructor
                 //Postcondition: length = 0


         private:
                 int list[1000]; int
                 length;
 };



EXAMPLE 1-12



 The class personType that is designed in Example 1-12 is quite useful; we will use this class in subsequent
 chapters.
 The most common attributes of a person are the person’s first name and last name. The typical operations
 on a person’s name are to set the name and print the name. The following statements define a class with
 these properties.


 //************************************************************
 // class personType
 // This class specifies the members to implement a name.
 //************************************************************
 #include <string> using
 namespace std;
 class personType
 { public: void print() const;
                 //Function to output the first name and last name //in
                 the form firstName lastName.


                 void setName(string first, string last);
                 //Function to set firstName and lastName according to the //parameters.
                 //Postcondition: firstName = first; lastName = last


                 string getFirstName() const;
                                                       52

[PDF page 53; printed page 53]
              //Function to return the first name.
              //Postcondition: The value of firstName is returned.


              string getLastName() const;
              //Function to return the last name.
              //Postcondition: The value of lastName is returned.


              personType();
              //Default constructor
              //Sets firstName and lastName to null strings.
              //Postcondition: firstName = ""; lastName = "";
              personType(string first, string last); //Constructor
              with parameters.
              //Sets firstName and lastName according to the parameters. //Postcondition:
              firstName = first; lastName = last;


       private:
              string firstName; //variable to store the first name string
              lastName; //variable to store the last name
};


Figure 1-9 shows the UML class diagram of the class personType.




                              FIGURE 1-9 UML class diagram of the class personType

We now give the definitions of the member functions of the class personType.
void personType::print() const
{
       cout << firstName << " " << lastName;

                                                     53
```
