---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "330-344"
printed_pages: "330-344"
section: "Application of Stacks: Postfix Expressions Calculator"
chapter: "TOPIC 5: STACKS"
keywords:
  - "postfix"
  - "expression"
  - "expressions"
  - "notation"
  - "operands"
  - "operators"
  - "evaluate"
  - "infix"
  - "stacks"
  - "which"
  - "operator"
  - "first"
---

# Application of Stacks: Postfix Expressions Calculator

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 330-344 | printed pages 330-344

Related sections: [Practical Application of IoT Technologies and Standards](../../big-data-iot-600-study-guide/sections/3-5-practical-application-of-iot-technologies-and-standards.md), [Types of Relationships](../../information-systems-622-study-guide/sections/3-5-2-types-of-relationships.md), [Linked Implementation of Stacks](5-2-linked-implementation-of-stacks.md), [Application Communication Protocols](../../big-data-iot-600-study-guide/sections/3-2-1-application-communication-protocols.md), [Application-Level Standards](../../big-data-iot-600-study-guide/sections/3-3-2-application-level-standards.md), [Characteristics Of Big Data](../../big-data-iot-600-study-guide/sections/1-2-characteristics-of-big-data.md)

## Extracted Text

```text
[PDF page 330; printed page 330]
5.4 Application of Stacks: Postfix Expressions Calculator



                                                      330

[PDF page 331; printed page 331]
The usual notation for writing arithmetic expressions (the notation we learned in elementary school) is
called infix notation, in which the operator is written between the operands. For example, in the
expression a + b, the operator + is between the operands a and b. In infix notation, the operators have
precedence. That is, we must evaluate expressions from left to right, and multiplication and division have
higher precedence than addition and subtraction. If we want to evaluate the expression in a different
order, we must include parentheses. For example, in the expression a + b * c, we first evaluate * using the
operands b and c, and then we evaluate + using the operand a and the result of b * c.


In the early 1920s, the Polish mathematician Jan Lukasiewicz discovered that if operators were written
before the operands (prefix or Polish notation; for example, + a b), the parentheses can be omitted. In the
late 1950s, the Australian philosopher and early computer scientist Charles L. Hamblin proposed a scheme
in which the operators follow the operands (postfix operators), resulting in the Reverse Polish notation.
This has the advantage that the operators appear in the order required for computation.


For example, the expression:
a+b*c




                                                   331

[PDF page 332; printed page 332]
in a postfix expression is:
abc*+


The following example shows various infix expressions and their equivalent postfix expressions.
EXAMPLE 5-4




Shortly after Lukasiewicz’s discovery, it was realized that postfix notation had important applications in
computer science. In fact, many compilers use stacks to first translate infix expressions into some form of
postfix notation and then translate this postfix expression into machine code. Postfix expressions can be
evaluated using the following algorithm:


Scan the expression from left to right. When an operator is found, back up to get the required number of
operands, perform the operation, and continue.


Consider the following postfix expression:


                        63+2*=


Let us evaluate this expression using a stack and the previous algorithm. Figure 5-15 shows how this
expression gets evaluated.




                                                   332

[PDF page 333; printed page 333]
                            FIGURE 5-15 Evaluating the postfix expression: 6 3 + 2 * =



Read the first symbol, 6, which is a number. Push the number onto the stack; see Figure 5-15(a). Read the
next symbol, 3, which is a number. Push the number onto the stack; see Figure 5-15(b). Read the next
symbol, +, which is an operator. Because an operator requires two operands to be evaluated, pop the




                                                      333

[PDF page 334; printed page 334]
stack twice; see Figure 5-15(c). Perform the operation and put the result back onto the stack; see Figure
5-15(d).


Read the next symbol, 2, which is a number. Push the number onto the stack; see Figure 5-15(e). Read the
next symbol, *, which is an operator. Because an operator requires two operands to be evaluated, pop
the stack twice; see Figure 5-15(f). Perform the operation and put the result back onto the stack; see
Figure 5-15(g).


Scan the next symbol, =, which is the equal sign, indicating the end of the expression. Therefore, print the
result. The result of the expression is in the stack, so pop and print; see Figure 5-15(h).


The value of the expression 6 3 + 2 * = 18.


From this discussion, it is clear that when we read a symbol other than a number, the following cases
arise:


    1. The symbol we read is one of the following: +, -, *, /, or =.
         a. If the symbol is +, -, *, or /, the symbol is an operator and so we must evaluate it. Because an
            operator requires two operands, the stack must have at least two elements; otherwise, the
            expression has an error.
         b. If the symbol is = (an equal sign), the expression ends and we must print the answer. At this
            step, the stack must contain exactly one element; otherwise, the expression has an error.
    2. The symbol we read is something other than +, -, *, /, or ¼. In this case, the expression contains an
         illegal operator.


It is also clear that when an operand (number) is encountered in an expression, it is pushed onto the stack
because the operator comes after the operands.


Consider the following expressions:


                  i. 7 6 + 3 ; 6 - = ii.
                  14 + 2 3 * =
                  iii. 14 2 3 + =
                                                     334

[PDF page 335; printed page 335]
Expression (i) has an illegal operator, expression (ii) does not have enough operands for +, and expression
(iii) has too many operands. In the case of expression (iii), when we encounter the equal sign (=), the stack
will have two elements and this error cannot be discovered until we are ready to print the value of the
expression.


To make the input easier to read, we assume that the postfix expressions are in the following form:
               #6 #3 + #2 * =
The symbol # precedes each number in the expression. If the symbol scanned is #, the next input is a
number (that is, an operand). If the symbol scanned is not #, it is either an operator (might be illegal) or
an equal sign (indicating the end of the expression). Furthermore, we assume that each expression
contains only the +, -, *, and / operators.




                                                    335

[PDF page 336; printed page 336]
This program outputs the entire postfix expression together with the answer. If the expression has an
error, the expression is discarded. In this case, the program outputs the expression together with an
appropriate error message. Because an expression might contain an error, we must clear the stack before
processing the next expression. Also, the stack must be initialized; that is, the stack must be empty.


5.3.10 Main Algorithm


Pursuant to the previous discussion, the main algorithm in pseudocode is as follows:


Read the first character while
not the end of input data
{
        a. initialize the stack
        b. process the expression
        c. output result
        d. get the next expression
}


To simplify the complexity of the function main, we write four functions— evaluateExpression,
evaluateOpr, discardExp, and printResult. The function evaluateExpression, if possible, evaluates the
expression and leaves the result in the stack. If the postfix expression is error free, the function printResult
outputs the result. The function evaluateOpr evaluates an operator, and the function discardExp discards
the current expression if there is any error in the expression.


5.3.11 Function evaluateExpression


The function evaluateExpression evaluates each postfix expression. Each expression ends with the symbol
=. The general algorithm in pseudocode is as follows:


while (ch is not = '=')                         //process each expression = marks the end of an expression
{
        switch (ch)
                                                     336

[PDF page 337; printed page 337]
{
       case '#':
               read a number output the
               number; push the number onto
               the stack; break;


       default:
               assume that ch is an operation
               evaluate the operation;
}                                   //end switch


if no error was found, then
{
       read next ch;
       output ch;




                                          337

[PDF page 338; printed page 338]
         }
         else
         Discard the expression
}                                                   //end while


From this algorithm, it follows that this method has five parameters—a parameter to access the input file,
a parameter to access the output file, a parameter to access the stack, a parameter to pass a character of
the expression, and a parameter to indicate whether there is an error in the expression. The definition of
this function is as follows:


void evaluateExpression(ifstream& inpF, ofstream& outF, stackType<double>&
stack,
char& ch, bool& isExpOk)
{
         double num;
         outF << ch;


         while (ch != '=')
         {
                 switch (ch)
                 {
                         case '#':
                                 inpF >> num; outF
                                 << num << " ";
                                 if (!stack.isFullStack())
                                 stack.push(num); else
                                 {
                                         cout << "Stack overflow. "<< "Program terminates!" << endl;
                                         exit(0);                     //terminate the program
                                 }
                                 break; default:
                                 evaluateOpr(outF, stack, ch, isExpOk);
                 }                                                    //end switch
                                                         338

[PDF page 339; printed page 339]
              if (isExpOk)                                 //if no error
              { inpF >> ch; outF
                     << ch; if
                     (ch != '#')
                              outF << " ";
              }
              else discardExp(inpF, outF, ch);
       }                                                   //end while (!= '=')
}                                                          //end evaluateExpression


Note that the funtion exit terminates the program.




                                                     339

[PDF page 340; printed page 340]
5.3.12 Function evaluateOpr


This function (if possible) evaluates an expression. Two operands are needed to evaluate an operation
and operands are saved in the stack. Therefore, the stack must contain at least two numbers. If the stack
contains fewer than two numbers, the expression has an error. In this case, the entire expression is
discarded and an appropriate message is printed. This function also checks for any illegal operations. In
pseudocode, this function is as follows:


if stack is empty
{
        error in the expression set
        expressionOk to false
}
else
{
        retrieve the top element of stack into op2 pop
        stack
        if stack is empty
        {
                error in the expression
                set expressionOk to false
        }
        else
        {
                retrieve the top element of stack into op1 pop
                stack
                //If the operation is legal, perform the operation and
                //push the result onto the stack; //otherwise, report
                the error. switch (ch)
                {
                        case '+': //add the operands: op1 +
                                op2 stack.push(op1 + op2);
                                                    340

[PDF page 341; printed page 341]
                     break;


           case '-': //subtract the operands: op1 - op2
           stack.push(op1 - op2); break; case '*':
           //multiply the operands: op1 * op2
           stack.push(op1 * op2); break; case '/': //If
           (op2 != 0), op1 / op2 stack.push(op1 /
           op2); break; otherwise operation is illegal
           {
                     output an appropriate message;
                     set expressionOk to false

           }
    } //end switch
}




                                         341

[PDF page 342; printed page 342]
Following this pseudocode, the definition of the function evaluateOpr is as follows:


void evaluateOpr(ofstream& out, stackType<double>& stack, char& ch, bool& isExpOk)
{
       double op1, op2;
       if (stack.isEmptyStack())
       {
               out << " (Not enough operands)";
               isExpOk = false;
       }
       else
       {
               op2 = stack.top(); stack.pop();
               if (stack.isEmptyStack())
               {
                      out << " (Not enough operands)";
                      isExpOk = false;
               }
               else
               {
                      op1 = stack.top(); stack.pop();
                      switch (ch)
                      {
                              case '+':
                                      stack.push(op1 + op2);
                              break; case '-':
                                      stack.push(op1 - op2); break;
                              case '*':
                                      stack.push(op1 * op2);
                              break; case '/':
                                      if (op2 != 0) stack.push(op1 /
                                                 op2);

                                                         342

[PDF page 343; printed page 343]
                        else
                        {
                                 out << " (Division by 0)"; isExpOk
                                 = false;
                        }
                        break;


                default: out << " (Illegal
                        operator)"; isExpOk =
                        false;

            }                                           //end switch
        }                                               //end else
    }                                                   //end else
}                                                       //end evaluateOpr




                                       343

[PDF page 344; printed page 344]
5.3.13 Function discardExp


This function is called whenever an error is discovered in the expression. It reads and writes the input data
only until the input is '=', the end of the expression. The definition of this function is as follows:


void discardExp(ifstream& in, ofstream& out, char& ch)
{
        while (ch != '=')
        { in.get(ch);
                out << ch;
        }
}                       //end discardExp




5.3.14 Function printResult


If the postfix expression contains no errors, the function printResult prints the result; otherwise, it outputs
an appropriate message. The result of the expression is in the stack and the output is sent to a file.
Therefore, this function must have access to the stack and the output file. Suppose that no errors were
encountered by the method evaluateExpression. If the stack has only one element, the expression is error
free and the top element of the stack is printed. If either the stack is empty or it has more than one
element, there is an error in the postfix expression. In this case, this method outputs an appropriate error
message. The definition of this method is as follows:


void printResult(ofstream& outF, stackType<double>& stack, bool isExpOk)
{ double result;
        if (isExpOk)                                                   //if no error, print the result
        {
                if (!stack.isEmptyStack())
                { result = stack.top();
                        stack.pop();


                                                      344
```
