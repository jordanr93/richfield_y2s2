---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "28-47"
printed_pages: "28-47"
section: "EXAMPLE 1-9"
chapter: "TOPIC 1: SOFTWARE ENGINEERING PRINCIPLES AND C++ CLASSES"
keywords:
  - "time"
  - "members"
  - "set"
  - "hours"
  - "minutes"
  - "seconds"
  - "public"
  - "int"
  - "clocktype"
  - "member"
  - "print"
  - "increment"
---

# EXAMPLE 1-9

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 28-47 | printed pages 28-47

Related sections: [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Example: Using Data Visualization to Communicate Strategy](../../big-data-iot-600-study-guide/sections/109-example-using-data-visualization-to-communicate-strategy.md), [1. I 0 SUMMARY](../../information-systems-622-study-guide/sections/1-1-i-0-summary.md), [4. 9 SYSTEMS DESIGN COMPLETION](../../information-systems-622-study-guide/sections/4-4-9-systems-design-completion.md), [CHAPTER 1: Development Strategies](../../information-systems-622-study-guide/sections/1-chapter-1-development-strategies.md), [Example](../../information-systems-622-study-guide/sections/4-6-3-example.md)

## Extracted Text

```text
[PDF page 28; printed page 28]
1.5 EXAMPLE 1-9


Suppose that we want to define a class, clockType, to implement the time of day in a program.
Furthermore, suppose that the time is represented as a set of three integers: one to represent the hours,
one to represent the minutes, and one to represent the seconds. We also want to perform the following
operations on the time:


1. Set the time.
2. Return the time.
3. Print the time.
4. Increment the time by one second.
5. Increment the time by one minute.
6. Increment the time by one hour.
7. Compare two times for equality.


From this discussion, it is clear that the class clockType has 10 members: three data members and seven
function members.


Some members of the class clockType will be private; others will be public. Deciding which member to
make private and which to make public depends on the nature of the member. The general rule is that
any member that needs to be accessed outside the class is declared public; any member that should not
                                               28

[PDF page 29; printed page 29]
be accessed directly by the user should be declared private. For example, the user should be able to set
the time and print the time. Therefore, the members that set the time and print the time should be
declared public.


Similarly, the members to increment the time and compare the time for equality should be declared
public. On the other hand, to control the direct manipulation of the data members hr, min, and sec, we
will declare these data members private. Furthermore, note that if the user has direct access to the data
members, member functions such as setTime are not needed.


The following statements define the class clockType:


class clockType
{ public: void setTime(int hours, int minutes, int seconds);
               //Function to set the time
               //The time is set according to the parameters
               //Postcondition: hr = hours; min = minutes; sec = seconds
               // The function checks whether the values of hours, //
               minutes, and seconds are valid. If a value is invalid, //
               the default value 0 is assigned.


               void getTime(int& hours, int& minutes, int& seconds) const;
               //Function to return the time
               //Postcondition: hours = hr; minutes = min; seconds = sec


               void printTime() const; //Function
                  to print the time //Postcondition:
                  Time is printed in the form
                  hh:mm:ss.


               void incrementSeconds();
               //Function to increment the time by one second
               //Postcondition: The time is incremented by one second.
               // If the before-increment time is 23:59:59, the time // is

                                                       29

[PDF page 30; printed page 30]
               reset to 00:00:00.


               void incrementMinutes();
               //Function to increment the time by one minute
               //Postcondition: The time is incremented by one minute.
               // If the before-increment time is 23:59:53, the time // is
               reset to 00:00:53.


               void incrementHours();
               //Function to increment the time by one hour
               //Postcondition: The time is incremented by one
               hour. // If the before-increment time is 23:45:53, the
               time // is reset to 00:45:53.


               bool equalTime(const clockType& otherClock) const;
               //Function to compare the two times
               //Postcondition: Returns true if this time is equal to
               // otherClock; otherwise, returns false


       private:
               int hr;                 //stores the hours int
               min;             //store the minutes int sec;
                         //store the seconds
};
We note the following in the definition of the class clockType:




                                                     30

[PDF page 31; printed page 31]
       The      class   clockType     has     seven function        members:        setTime,
        getTime,        printTime, incrementSeconds, incrementMinutes, incrementHours, and
        equalTime. It has three data members: hr, min, and sec.

       The three data members—hr, min, and sec—are private to the class and cannot be accessed outside
        the class.

       The      seven function        members—setTime, getTime,             printTime,
        incrementSeconds, incrementMinutes, incrementHours, and equalTime—can directly access the
        data members (hr, min, and sec). In other words, we do not pass data members as parameters to
        member functions.

       In the function equalTime, the parameter otherClock is a constant reference parameter. That is, in
        a call to the function equalTime, the parameter otherClock receives the address of the actual
        parameter, but otherClock cannot modify the value of the actual parameter. You could have
        declared otherClock as a value parameter, but that would require otherClock to copy the value of
        the actual parameter, which could result in poor performance. (For an explanation, see the section,
        ‘‘Reference Parameters and Class Objects (Variables)’’ located later in this chapter.)

       The word const at the end of the member functions getTime, printTime, and equalTime specifies
        that these functions cannot modify the data members of a variable of type clockType.


Note that we have not yet written the definitions of the function members of the class clockType. You will
 learn how to write them shortly.
The function setTime sets the three data members—hr, min, and sec—to a given value. The given values
 are passed as parameters to the function setTime. The function printTime prints the time, that is, the
 values of hr, min, and sec. The function incrementSeconds increments the time by one second, the
 function incrementMinutes increments the time by one minute, the function incrementHours increments
 the time by one hour, and the function equalTime compares the two times for equality.


1.6 Constructors


C++ does not automatically initialize variables when they are declared. Therefore, when an object is
 instantiated, there is no guarantee that the data members of the object will beinitialized. To guarantee
 that the instance variables of a class are initialized, you use constructors. There are two types of
 constructors: with parameters and without parameters. The constructor without parameters is called the
 default constructor.
                                                    31

[PDF page 32; printed page 32]
Constructors have the following properties:


            The name of a constructor is the same as the name of the class.
            A constructor, even though it is a function, has no type. That is, it is neither a value-returning
    function nor a void function.

      A class can have more than one constructor. However, all constructors of a class have the same
        name.

       If a class has more than one constructor, the constructors must have different formal parameter
        lists. That is, either they have a different number of formal parameters or, if the number of formal
        parameters is the same, the data type of the formal parameters, in the order you list, must differ
        in at least one position.
       Constructors execute automatically when a class object enters its scope. Because they have no
        types, they cannot be called like other functions.

       Which constructor executes depends on the types of values passed to the class object when the
        class object is declared.

Let us extend the definition of the class clockType by including two constructors:
class clockType
{ public:
                  //Place the function prototypes of the functions setTime, //getTime,
                  printTime, incrementSeconds, incrementMinutes,
                  //incrementHours, and equalTime as described earlier, here.


                   clockType(int hours, int minutes, int seconds);
                   //Constructor with parameters
                   //The time is set according to the parameters.
                   //Postconditions: hr = hours; min = minutes; sec = seconds
                  // The constructor checks whether the values of hours,
                  // minutes, and seconds are valid. If a value is invalid, //
                  the default value 0 is assigned.


                   clockType();
                   //Default constructor with parameters //The
                                                     32

[PDF page 33; printed page 33]
                time is set to 00:00:00.
               //Postcondition: hr = 0; min = 0; sec = 0 private:
               int hr; //stores the hours int min;
               //store the minutes int sec; //store
               the seconds
};


1.6.1 Unified Modeling Language Diagrams


A class and its members can be described graphically using a notation known as Unified Modeling
 Language (UML) notation. For example, Figure 1-5 shows the UML class diagram of the class clockType.




                                FIGURE 1-5 UML class diagram of the class clockType



The top box contains the name of the class. The middle box contains the data members and their data
 types. The last box contains the member function name, parameter list, and the return type of the
 function. A + (plus) sign in front of a member indicates that this member is a public member; a – (minus)




                                                       33

[PDF page 34; printed page 34]
 sign indicates that this is a private member. The symbol # before the member name indicates that the
 member is a protected member.


1.6.2 Variable (Object) Declaration


 Once a class is defined, you can declare variables of that type. In C++ terminology, a class variable is called
 a class object or class instance. To help you become familiar with this terminology, from now on we will
 use the term class object, or simply object, for a class variable.


 A class can have both types of constructors—default constructor and constructors with parameters.
 Therefore, when you declare a class object, either the default constructor executes or the constructor
 with parameters executes. The general syntax for declaring a class object that invokes the default
 constructor is:




 For example, the statement


                        clockType myClock;


 declares myClock to be an object of type clockType. In this case, the default constructor executes and the
 instance variables of myClock are initialized to 0.


 The general syntax for declaring a class object that invokes a constructor with a parameter is




 where each of argument1, argument2, and so on is either a variable or an expression. Note the following:
       The number of arguments and their type should match the formal parameters (in the order given)
        of one of the constructors.

       If the type of the arguments does not match the formal parameters of any constructor (in the order
        given), C++ uses type conversion and looks for the best match. For example, an integer value might
        be converted to a floating-point value with a zero decimal part. Any ambiguity will result in a

                                                       34

[PDF page 35; printed page 35]
       compile-time error.


Consider the following statement:
 clockType myClock(5, 12, 40);


This statement declares the object myClock of type clockType. Here, we are passing three values of type
int, which matches the type of the formal parameters of the constructor with a parameter. Therefore, the
constructor with parameters of the class clockType executes and the three instance variables of the object
myClock are set to 5, 12, and 40.


Consider the following statements that declare two objects of type clockType:
                      clockType myClock(8, 12, 30); clockType
                      yourClock(12, 35, 45);


Each object has 10 members: seven member functions and three instance variables. Each object has
separate memory allocated for hr, min, and sec.


In actuality, memory is allocated only for the instance variables of each class object. The C++ compiler
generates only one physical copy of a member function of a class, and each class object executes the same
copy of the member function.


1.7 Accessing Class Members


Once an object of a class is declared, it can access the members of the class. The general syntax for an
object to access a member of a class is:



In C++, the dot, . (period), is an operator called the member access operator.


The class members that a class object can access depend on where the object is declared.

      If the object is declared in the definition of a member function of the class, the object can access
       both the public and private members. (We will elaborate on this when we write the definition of
       the member function equalTime of the class clockType in the section ‘‘Implementation of Member

                                                   35

[PDF page 36; printed page 36]
        Functions,’’ later in this chapter.)

      If the object is declared elsewhere (for example, in a user’s program), the object can access only the
        public members of the class.


Example 1-10 illustrates how to access the members of a class.


EXAMPLE 1-10


Suppose we have the following declaration (say, in a user’s program):


                        clockType myClock;
                        clockType yourClock;


Consider the following statements:


                        myClock.setTime(5, 2, 30); myClock.printTime();
                        if (myClock.equalTime(yourClock))
                        .
                        .
                       .
These statements are legal; that is, they are syntactically correct.


In the first statement, myClock.setTime(5, 2, 30);, the member function setTime is executed. The values
 5, 2, and 30 are passed as parameters to the function setTime, and the function uses these values to set
 the values of the three instance variables hr, min, and sec of myClock to 5, 2, and 30, respectively.




                                                     36

[PDF page 37; printed page 37]
 Similarly, the second statement executes the member function printTime and outputs the contents of the
 three instance variables of myClock.


In the third statement, the member function equalTime executes and compares the three instance
 variables of myClock to the corresponding instance variables of yourClock. Because in this statement
 equalTime is a member of the object myClock, it has direct access to the three instance variables of
 myClock. So it needs one more object, which in this case is yourClock, to compare. This explains why the
 function equalTime has only one parameter.


The objects myClock and yourClock can access only public members of the class. Thus, the following
 statements are illegal because hr and min are declared as private members of the class clockType and,
 therefore, cannot be accessed by the objects myClock and yourClock:


                        myClock.hr = 10;                       //illegal myClock.min
                        = yourClock.min;       //illegal




1.7.1 Implementation of Member Functions


When we defined the class clockType, we included only the function prototype for the member functions.
 For these functions to work properly, we must write the related algorithms. One way to implement these
 functions is to provide the function definition rather than the function prototype in the class itself.
 Unfortunately, the class definition would then be long and difficult to comprehend. Another reason for
 providing function prototypes instead of function definitions relates to information hiding; that is, we
 want to hide the details of the operations on the data.


Next, let us write the definitions of the member functions of the class clockType. That is, we will write the
 definitions of the functions setTime, getTime, printTime, incrementSeconds, equalTime, and so on.
 Because the identifiers setTime, printTime, and so forth are local to the class, we cannot reference them
 (directly) outside the class. To reference these identifiers, we use the scope resolution operator, :: (double
 colon). In the function definition’s heading, the name of the function is the name of the class, followed by

                                                      37

[PDF page 38; printed page 38]
the scope resolution operator, followed by the function name. For example, the definition of the function
setTime is as follows:


void clockType::setTime(int hours, int minutes, int seconds)
{
       if (0 <= hours && hours <
       24) hr = hours; else
               hr = 0;
       if (0 <= minutes && minutes < 60)
       min = minutes; else min = 0;
       if (0 <= seconds && seconds < 60)
       sec = seconds; else
               sec = 0;
}




                                                   38

[PDF page 39; printed page 39]
Note that the definition of the function setTime checks for the valid values of hours, minutes, and seconds.
If these values are out of range, the instance variables hr, min, and sec are initialized to 0.


Suppose that myClock is an object of type clockType (as declared previously). The object myClock has
three instance variables. Consider the following statement:


myClock.setTime(3, 48, 52);


In the statement myClock.setTime(3, 48, 52);, setTime is accessed by the object myClock. Therefore, the
three variables—hr, min, and sec—to which the body of the function setTime refers, are the three instance
variables of myClock. Thus, the values 3, 48, and 52, which are passed as parameters in the preceding
statement, are assigned to the three instance variables of myClock by the function setTime (see the body
of the function setTime). After the previous statement executes, the object myClock is as shown in Figure
1-6.




                  FIGURE 1-6 Object myClock after the statement myClock.setTime(3, 48, 52); executes



Next, let us give the definitions of the other member functions of the class clockType. The
definitions of these functions are simple and easy to follow.


void clockType::getTime(int& hours, int& minutes, int& seconds) const
{
       hours = hr; minutes
        = min;
       seconds = sec;
}


void clockType::printTime() const
{
       if (hr < 10) cout <<
                 "0";

                                                         39

[PDF page 40; printed page 40]
       cout << hr << ":";


       if (min < 10) cout
                << "0";
       cout << min << ":";


       if (sec < 10) cout <<
                "0";
       cout << sec;
}


void clockType::incrementHours()
{
       hr++; if (hr >
       23) hr = 0;
}


void clockType::incrementMinutes()
{
       min++;        if
       (min > 59)
       {
                min = 0;
                incrementHours();    //increment hours
       }
}


void clockType::incrementSeconds()
{
       sec++;
       if (sec > 59)
       { sec = 0;
                incrementMinutes(); //increment minutes
                                                 40

[PDF page 41; printed page 41]
        }
}


From the definitions of the functions incrementMinutes and incrementSeconds, it is clear that a member
function of a class can call other member functions of the class. The function equalTime has the following
definition:


bool clockType::equalTime(const clockType& otherClock) const
{
        return (hr == otherClock.hr &&
        min == otherClock.min
        && sec == otherClock.sec);
}
Let us see how the member function equalTime works.


Suppose that myClock and yourClock are objects of type clockType, as declared previously. Further
suppose that we have myClock and yourClock, as shown in Figure 1-7.




                                     FIGURE 1-7 Objects myClock and yourClock



Consider the following statement:


                      if (myClock.equalTime(yourClock))
                      .




                                                      41

[PDF page 42; printed page 42]
                      .
                      .
In the expression
myClock.equalTime(yourClock)


the object myClock accesses the member function equalTime. Because otherClock is a reference
parameter, the address of the actual parameter yourClock is passed to the formal parameter otherClock,
as shown in Figure 1-8.




                              FIGURE 1-8 Object myClock and parameter otherClock



The instance variables hr, min, and sec of otherClock have the values 14, 25, and 54, respectively. In other
words, when the body of the function equalTime executes, the value of otherClock.hr is 14, the value of
otherClock.min is 25, and the value of otherClock.sec is 54. The function equalTime is a member of
myClock. When the function equalTime executes, the variables hr, min, and sec in the body of the function
equalTime are the instance variables of the variable myClock. Therefore, the member hr of myClock is
compared with otherClock.hr, the member min of myClock is compared with otherClock.min, and the
member sec of myClock is compared with otherClock.sec.


Once again, from the definition of the function equalTime, it is clear why this function has only one
parameter.


Let us again look at the definition of the function equalTime. Notice that within the definition of this
function, the object otherClock accesses the instance variables hr, min, and sec. However, these instance
variables are private. So is there any violation? The answer is no. The function equalTime is a member of
the class clockType and hr, min, and sec are the instance variables. Moreover, otherClock is an object of
type clockType. Therefore, the object otherClock can access its private instance variables within the
definition of the function equalTime.


The same is true for any member function of a class. In general, when you write the definition of a member
function, say dummyFunction, of a class, say dummyClass, and the function uses an object, dummyObject

                                                    42

[PDF page 43; printed page 43]
of the class dummyClass, then within the definition of dummyFunction, the object dummyObject can
access its private instance variables (in fact, any private member of the class).


This definition of the class clockType includes two constructors: one with three parameters and one
without any parameters. Let us now write the definitions of these constructors.


clockType::clockType()         //default constructor
{ hr = 0; min =
        0;
        sec = 0;
}


clockType::clockType(int hours, int minutes, int seconds)
{
        if (0 <= hours && hours <
        24) hr = hours; else
                  hr = 0;
        if (0 <= minutes && minutes < 60)
        min = minutes; else min = 0;
        if (0 <= seconds && seconds < 60)
        sec = seconds; else
                  sec = 0;
}


From the definitions of these constructors, it follows that the default constructor sets the three instance
variables—hr, min, and sec—to 0. Also, the constructor with parameters sets the instance variables to
whatever values are assigned to the formal parameters. Moreover, we can write the definition of the
constructor with parameters by calling the function setTime, as follows:


clockType::clockType(int hours, int minutes, int seconds)
{
        setTime(hours, minutes, seconds);
}

                                                    43

[PDF page 44; printed page 44]
 Once a class is properly defined and implemented, it can be used in a program. A program or software
 that uses and manipulates the objects of a class is called a client of that class.


 When you declare objects of the class clockType, every object has its own copy of the instance variables
 hr, min, and sec. In object-oriented terminology, variables such as hr, min, and sec are called instance
 variables of the class because every object has its own instance of the data.


1.7.2 Reference Parameters and Class Objects (Variables)


 Recall that when a variable is passed by value, the formal parameter copies the value of the actual
 parameter. That is, memory to copy the value of the actual parameter is allocated for the formal
 parameter. As a parameter, a class object can be passed by value.


 Suppose that a class has several instance variables requiring a large amount of memory to store data, and
 you need to pass a variable by value. The corresponding formal parameter then receives a copy of the
 data of the variable. That is, the compiler must allocate memory for the formal parameter, so as to copy
 the value of the instance variables of the actual parameter. This operation might require, in addition to a
 large amount of storage space, a considerable amount of computer time to copy the value of the actual
 parameter into the formal parameter.


 On the other hand, if a variable is passed by reference, the formal parameter receives only the address of
 the actual parameter. Therefore, an efficient way to pass a variable as a parameter is by reference. If a
 variable is passed by reference, then when the formal parameter changes, the actual parameter also
 changes. Sometimes, however, you do not want the function to be able to change the values of the
 instance variables. In C++, you can pass a variable by reference and still prevent the function from
 changing its value by using the keyword const in the formal parameter declaration. As an example,
 consider the following function definition:




                                                      44

[PDF page 45; printed page 45]
 void testTime(const clockType& otherClock)
 {
        clockType dClock;
        .
        .
        .
 }


 The function testTime contains a reference parameter, otherClock. The parameter otherClock is declared
 using the keyword const. Thus, in a call to the function testTime, the formal parameter otherClock receives
 the address of the actual parameter, but otherClock cannot modify the contents of the actual parameter.
 For example, after the following statement executes, the value of myClock will not be altered:
 testTime(myClock);


 Generally, if you want to declare a class object as a value parameter, you declare it as a reference
 parameter using the keyword const, as described previously. Recall that if a formal parameter is a value
 parameter, within the function definition you can change the value of the formal parameter. That is, you
 can use an assignment statement to change the value of the formal parameter (which, of course, would
 have no effect on the actual parameter). However, if a formal parameter is a constant reference
 parameter, you cannot use an assignment statement to change its value within the function, nor can you
 use any other function to change its value. Therefore, within the definition of the function testTime, you
 cannot alter the value of otherClock. For example, the following would be illegal in the definition of the
 function testTime:


                       otherClock.setTime(5, 34, 56);        //illegal otherClock
                       = dClock;              //illegal


1.8 Built-In Operations on Classes


 The two built-in operations that are defined for class objects are member access (.) and assignment (=).
 You have seen how to access an individual member of a class by using the name of the class object, then
 a dot, and then the member name.


                                                     45

[PDF page 46; printed page 46]
 We now show how an assignment statement works with the help of an example.


1.8.1 Assignment Operator and Classes


 Suppose that myClock and yourClock are variables of type clockType as defined previously. The statement
                        myClock = yourClock;                   //Line 1


 copies the value of yourClock into myClock. That is, the value of yourClock.hr is copied into myClock.hr;
 the value of yourClock.min is copied into myClock.min; and the value of yourClock.sec is copied into
 myClock.sec. In other words, the values of the three instance variables of yourClock are copied into the
 corresponding instance variables of myClock. Therefore, an assignment statement performs a
 memberwise copy.
1.9 Class Scope


 A class object can be either automatic (that is, created each time the control reaches its declaration, and
 destroyed when the control exits the surrounding block) or static (that is, created once, when the control
 reaches its declaration, and destroyed when the program terminates). Also, you can declare an array of
 class objects. A class object has the same scope as other variables. A member of a class is local to the class.
 You access a (public) class member outside the class by using the class object name and the member
 access operator (.).




1.10 Functions and Classes


 The following rules describe the relationship between functions and classes:


         Class objects can be passed as parameters to functions and returned as function values.
         As parameters to functions, class objects can be passed either by value or by reference.
         If a class object is passed by value, the contents of the instance variables of the actual parameter
     are copied into the corresponding instance variables of the formal parameter.




                                                      46

[PDF page 47; printed page 47]
1.10.1 Constructors and Default Parameters


 A constructor can also have default parameters. In such a case, the rules for declaring formal parameters
 are the same as those for declaring default formal parameters in a function. Moreover, actual parameters
 to a constructor with default parameters are passed according to the rules for functions with default
 parameters. Using the rules for defining default parameters, in the definition of the class clockType, you
 can replace both constructors using the following statement. (Notice that in the function prototype, the
 name of a formal parameter is optional.)
 clockType clockType(int = 0, int = 0, int = 0); //Line 1


 In the implementation file, the definition of this constructor is the same as the definition of the constructor
 with parameters.


 If you replace the constructors of the class clockType with the constructor in Line 1, (the constructor with
 the default parameters), you can declare clockType objects with 0, 1, 2, or 3 arguments as follows:


                        clockType clock1;                                      //Line 2 clockType
                                                                //Line 3
                        clock2(5);
                        clockType clock3(12, 30);                              //Line 4 clockType
                                                                //Line 5
                        clock4(7, 34, 18);


 The data members of clock1 are initialized to 0. The data member hr of clock2 is initialized to 5, and the
 data members min and sec of clock2 are initialized to 0. The data member hr of clock3 is initialized to 12,
 the data member min of clock3 is initialized to 30, and the data member sec of clock3 is initialized to 0.
 The data member hr of clock4 is initialized to 7, the data member min of clock4 is initialized to 34, and the
 data member sec of clock4 is initialized to 18.
 Using these conventions, we can say that a constructor that has no parameters, or has all default
 parameters, is called the default constructor.


1.10.2 Destructors


 Like constructors, destructors are also functions. Moreover, like constructors, a destructor does not have
 a type. That is, it is neither a value-returning function nor a void function. However, a class can have only
                                                      47
```
