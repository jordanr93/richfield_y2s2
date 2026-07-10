---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "78-79"
printed_pages: "78-79"
section: "Mario and Danica: A Data Design Example"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "mechanic"
  - "mario"
  - "danica"
  - "shop"
  - "two"
  - "file-oriented"
  - "file"
  - "job"
  - "stored"
  - "database"
  - "pay"
  - "design"
---

# Mario and Danica: A Data Design Example

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 78-79 | printed pages 78-79

Related sections: [Reading Data from A Table with The SELECT And SELECT … Where Clauses](../../internet-programming-622-study-guide/sections/4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](../../internet-programming-622-study-guide/sections/4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Privacy and Data Protection](../../big-data-iot-600-study-guide/sections/119-privacy-and-data-protection.md), [Chapter Two: Data Preprocessing and Feature Engineering](../../machine-learning-600-study-guide/sections/2-chapter-two-data-preprocessing-and-feature-engineering.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Chapter 4: Big Data Storage and Security](../../big-data-iot-600-study-guide/sections/4-chapter-4-big-data-storage-and-security.md)

## Extracted Text

```text
[PDF page 78; printed page 78]
3.1.2 Mario and Danica: A Data Design Example

MARIO'S AUTO SHOP: Mario relies on two file-oriented systems, also known as file processing
systems, to manage his business. These systems store data in separate files that are not
connected or linked. The following describes how Mario's file-oriented systems work:
    • The MECHANIC SYSTEM uses the MECHANIC file to store data about shop employees.
    • The JOB SYSTEM uses the JOB file to store data about the work performed at the shop.

In this setup, as shown in Figure 9-2, data about the mechanic, the customer, and the brake
job could be stored either in a file-oriented system or in a database system. However, using
two separate systems means that some data is stored in two different places, and there is a
chance that the data may not be consistent. For example, three data items—Mechanic No,
Name, and Pay Rate—are stored in both files. This redundancy is a significant disadvantage
of file-oriented systems because it threatens data quality and integrity. A typical issue, as seen
in Figure 9-3, is the discrepancy in Jim Jones' pay rate: it is listed as $18.90 in the MECHANIC
SYSTEM file but $19.80 in the JOB SYSTEM file.

[PDF page 79; printed page 79]
                                (Tilley and Rosenblatt, 2024)

DANICA'S AUTO SHOP: Danica uses a database management system (DBMS) with two
separate tables that are joined together, making them function like one large table, as shown
in Figure 9-4. In Danica's SHOP OPERATIONS SYSTEM, the tables are linked by the Mechanic
ID field, known as a common field because it connects the tables. Unlike Mario’s system, no
other data items are duplicated in Danica’s system, except for the common field. This design
is called a relational database or relational model, which was introduced in the 1970s and
remains the standard method for organizing, storing, and managing business data.
In contrast to Mario’s file-oriented systems, which show two different pay rates for Jim Jones
due to a possible data entry error, Danica’s relational database prevents such errors. In her
system, an employee’s pay rate is stored in only one place. However, it’s important to note
that DBMSs are not entirely immune to data entry issues, which will be discussed in more
detail later in this chapter.
```
