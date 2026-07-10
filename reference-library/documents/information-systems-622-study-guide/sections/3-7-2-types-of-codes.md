---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "110-112"
printed_pages: "110-112"
section: "Types of Codes"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "codes"
  - "numbers"
  - "course"
  - "use"
  - "sequence"
  - "types"
  - "assigned"
  - "items"
  - "indicates"
  - "block"
  - "such"
  - "alphabetic"
---

# Types of Codes

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 110-112 | printed pages 110-112

Related sections: [Types of Big Data Alalytics](../../big-data-iot-600-study-guide/sections/5-4-types-of-big-data-alalytics.md), [CODES](3-7-codes.md), [Overview of Codes](3-7-1-overview-of-codes.md), [Types of Maintenance](6-2-1-types-of-maintenance.md), [Types of Reports](2-6-3-types-of-reports.md), [Types of Machine Learning](../../machine-learning-600-study-guide/sections/1-3-types-of-machine-learning.md)

## Extracted Text

```text
[PDF page 110; printed page 110]
3.7.2 Types of Codes

Companies use various coding methods for data representation. These methods help ensure
that codes are easy for users to learn and apply. When creating or altering codes, it's
important to gather user feedback. Below are seven common types of codes:

   1. Sequence Codes:
         o Sequence codes are numbers or letters assigned in a specific order. These
            codes don’t carry extra information beyond indicating the order in which items
            are entered into the system.

[PDF page 111; printed page 111]
       o   For example, in a human resources system, employees are assigned
           consecutive numbers. The number 584 indicates that this employee was hired
           after employee 433, but it doesn’t provide the exact hire date.




       o




2. Block Sequence Codes:
      o Block sequence codes use blocks of numbers to represent different
          classifications.
      o For instance, college course numbers might be assigned using this method. A
          100-level course (e.g., Chemistry 110) indicates a freshman-level course, while
          a 200-level course (e.g., Mathematics 225) indicates a sophomore-level
          course. Numbers within a block can also carry additional meaning, such as
          prerequisites (e.g., English 151 is a prerequisite for English 152).
3. Alphabetic Codes:
      o These codes use letters to categorize or distinguish items, often based on a
          category or an easy-to-remember abbreviation, also known as a mnemonic
          code.

   There are several variations:

       o   Category Codes: Used to identify related items, such as department codes in a
           store (e.g., GN for gardening supplies, HW for hardware, EL for electronics).
       o Abbreviation Codes: These are alphabetic abbreviations, such as state codes
           like NY for New York, ME for Maine, and MN for Minnesota.
       o Mnemonic Codes: These are alphabetic abbreviations designed to be easy to
           remember. For example, three-character airport codes like ATL for Atlanta and
           MIA for Miami. Some airport codes are not mnemonic, like ORD for Chicago
           O'Hare or MCO for Orlando.
4. Significant Digit Codes:
       o These codes use subgroups of digits to represent different levels of
           classification. Each digit or group of digits has its significance.
       o For example, postal codes are significant digit codes, as are inventory location
           codes. An inventory location code might be something like 11205327, which is
           broken down into:
               ▪ 11 for the warehouse number,
               ▪ 0 for the floor number,

[PDF page 112; printed page 112]
              ▪  53 for the section code,
              ▪  2 for the aisle number, and
              ▪  7 for the bin number.
      o   Each of these subgroups holds meaning and helps pinpoint a specific location
          within a warehouse.




5. Derivation Codes:
      o   Derivation codes are created by combining various attributes or characteristics of an
          item. These codes are commonly used in magazine subscription systems, for example.
      o   A typical derivation code for a magazine subscription might include:
              ▪ The subscriber’s five-digit postal code,
              ▪ The first, third, and fourth letters of the subscriber's last name,
              ▪ The last two digits of the subscriber's house number, and
              ▪ The first, third, and fourth letters of the subscriber's street name.
      o   This combination of elements creates a unique code for each subscriber, drawing on
          multiple pieces of personal information.




6. Cipher Codes:
      o   Cipher codes use a keyword to encode numbers. Each letter in the keyword
          corresponds to a specific number.
      o   For instance, a store may use a 10-letter word (e.g., CAMPGROUND) to encode
          wholesale prices. In this case, each letter corresponds to a number:
              ▪ C = 1, A = 2, M = 3, and so on.
      o   A code like GRAND could indicate that the store paid $562.90 for an item, where the
          word is translated into a number using the cipher.
7. Action Codes:
      o   Action codes specify the action that should be taken with an associated item.
      o   In a student records system, for example, action codes could include:
               ▪ D for displaying a record,
               ▪ A for adding a record, and
               ▪ X for exiting the program.
      o   These codes guide the system in determining what function should be performed.
```
