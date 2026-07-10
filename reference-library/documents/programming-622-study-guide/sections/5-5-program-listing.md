---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "345-347"
printed_pages: "345-347"
section: "Program Listing"
chapter: "TOPIC 5: STACKS"
keywords:
  - "stack"
  - "infile"
  - "outfile"
  - "ofstream"
  - "include"
  - "void"
  - "stacktype"
  - "double"
  - "char"
  - "bool"
  - "expressionok"
  - "ifstream"
---

# Program Listing

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 345-347 | printed pages 345-347

Related sections: [Program Documentation](../../information-systems-622-study-guide/sections/5-8-1-program-documentation.md), [DATA STORAGE AND ACCESS](../../information-systems-622-study-guide/sections/3-8-data-storage-and-access.md), [Database Management Systems](../../information-systems-622-study-guide/sections/3-1-3-database-management-systems.md), [Focus on Usability](../../information-systems-622-study-guide/sections/2-3-5-focus-on-usability.md), [System Documentation](../../information-systems-622-study-guide/sections/5-8-2-system-documentation.md), [Reading And Writing Entire Files](../../internet-programming-622-study-guide/sections/3-12-reading-and-writing-entire-files.md)

## Extracted Text

```text
[PDF page 345; printed page 345]
5.5 Program Listing


//************************************************************* //
 This program uses a stack to evaluate postfix expressions.
//*************************************************************
#include <iostream>
#include <iomanip>




                                                     345

[PDF page 346; printed page 346]
#include <fstream>
#include "mystack.h"
using namespace std;
void evaluateExpression(ifstream& inpF, ofstream& outF, stackType<double>& stack
         , char& ch, bool& isExpOk); void
evaluateOpr(ofstream& out, stackType<double>& stack,
char& ch, bool& isExpOk);
void discardExp(ifstream& in, ofstream& out, char& ch);
void printResult(ofstream& outF, stackType<double>& stack, bool isExpOk); int
main()
{
         bool expressionOk;
         char ch;
         stackType<double> stack(100);
         ifstream infile;
         ofstream outfile;
         infile.open("RpnData.txt");
         if (!infile)
         {
                    cout << "Cannot open the input file. "<< "Program terminates!" << endl; return
                    1;
         }


         outfile.open("RpnOutput.txt");


         outfile << fixed << showpoint;
         outfile << setprecision(2);


         infile >> ch; while
         (infile)
         {
                    stack.initializeStack();
                    expressionOk = true; outfile

                                                       346

[PDF page 347; printed page 347]
               << ch;


               evaluateExpression(infile, outfile, stack, ch,expressionOk); printResult(outfile,
               stack, expressionOk);
               infile >> ch; //begin processing the next expression
       } //end while


       infile.close();
       outfile.close();


       return 0;
} //end main




                                                    347
```
