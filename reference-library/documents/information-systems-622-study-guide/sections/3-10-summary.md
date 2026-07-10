---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "119-122"
printed_pages: "119-122"
section: "SUMMARY"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "database"
  - "dbms"
  - "access"
  - "tables"
  - "security"
  - "user"
  - "which"
  - "entity"
  - "files"
  - "file-oriented"
  - "manage"
  - "stored"
---

# SUMMARY

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 119-122 | printed pages 119-122

Related sections: [Understanding Relational Databases](../../internet-programming-622-study-guide/sections/4-7-understanding-relational-databases.md), [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Common Big Data Storage Architectures](../../big-data-iot-600-study-guide/sections/4-5-2-common-big-data-storage-architectures.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md), [Privacy and Data Protection](../../big-data-iot-600-study-guide/sections/119-privacy-and-data-protection.md), [Security Standards](../../big-data-iot-600-study-guide/sections/3-4-2-security-standards.md)

## Extracted Text

```text
[PDF page 119; printed page 119]
       3.10 SUMMARY


This chapter continues the exploration of the systems design phase in the Systems
Development Life Cycle (SDLC). It explains that files and tables contain data about people,
places, things, or events that impact the information system. File-oriented systems, also
known as file processing systems, manage data stored separately.

A database consists of interconnected tables that form an overall data structure. A Database
Management System (DBMS) is a suite of tools, features, and interfaces that enables users to
add, update, manage, access, and analyze data within a database. DBMS designs offer greater
power and flexibility compared to traditional file-oriented systems, providing benefits like
scalability, organization-wide access, cost efficiency, data sharing, conflict resolution,
standard enforcement, controlled redundancy, security, flexibility, improved programmer

[PDF page 120; printed page 120]
productivity, and data independence. Large databases require complex security and
backup/recovery features.

DBMS components include user, database administrator (DBA), and system interfaces, a Data
Manipulation Language (DML), schemas, and a physical data repository. Other data
management techniques include data warehousing, which organizes data for easy access, and
data mining, which seeks patterns and relationships in data. Data mining includes techniques
like clickstream storage (tracking user interactions with a site) and market basket analysis
(identifying product relationships and consumer purchasing patterns).

In web-based systems, the Internet serves as the user interface for the DBMS. Access to the
database is provided through a web browser and an internet connection. Middleware can
interpret HTML client requests and convert them into database commands. Web-based data
must be secure and easily accessible to authorized users, with security measures
implemented at three levels: the database, the web server, and the telecommunications links
between components.

In an information system, an entity represents a person, place, thing, or event for which data
is gathered and maintained. A field or attribute represents a characteristic of an entity, while
a record or tuple contains related fields that describe a single instance of an entity. Data is
stored in files (in file-based systems) and tables (in a DBMS environment).

A primary key is the field or combination of fields that uniquely and minimally identifies a
specific record, while a candidate key is any field that could serve as a primary key. A foreign
key matches the primary key of another file or table. A secondary key is used for sorting or
retrieving records.

Entity-Relationship Diagrams (ERDs) graphically represent all entities in a system and their
relationships. The basic relationships in an ERD are one-to-one (1:1), one-to-many (1:M), and
many-to-many (M:N), with M:N relationships linked by an associative entity. Cardinality refers
to the relationship between two entities, and crow's foot notation is a common method to
represent cardinality.

Normalization is the process of refining data design to avoid problems. A record is in 1st
Normal Form (1NF) if it has no repeating groups. It is in 2nd Normal Form (2NF) if it is in 1NF
and all non-key fields depend on the primary key. A record is in 3rd Normal Form (3NF) if it is
in 2NF and no non-key field depends on another non-key field.

Data design tasks include creating an initial ERD, assigning data elements to entities,
normalizing table designs, and completing the data dictionary for files, records, and fields.

A code is a set of letters or numbers used to represent data. Codes help speed up data entry,
reduce storage requirements, and cut transmission time. They can also reveal or conceal
information. Types of codes include sequence codes, block sequence codes, classification
codes, alphanumeric codes (e.g., category, abbreviation, mnemonic), significant digit codes,
denotation codes, cipher codes, and action codes.

[PDF page 121; printed page 121]
Logical storage refers to how users perceive information, regardless of how or where it is
stored. Physical storage involves hardware-related processes such as reading and writing
binary data to physical media. A logical record is a set of related field values describing an
entity. Data can be stored in various formats, such as EBCDIC, ASCII, binary, Unicode, ISO, and
absolute formats.

File and database control measures include restricting data access, encrypting data,
performing backups and recovery, maintaining audit trail files, and using internal audit fields.

EXERCISES

Questions:

    1.  What is a data structure?
    2.  Briefly describe the components of a DBMS.
    3.  List the major characteristics of web-based design.
    4.  Explain primary key, candidate key, secondary key, and foreign key.
    5.  What are ERDs and how are they used?
    6.  How do you convert an unnormalized design to 1NF? In your answer, refer to specific
        pages and figures in this chapter.
    7. How are codes used in data design?
    8. What is data warehousing and data mining?
    9. How would a specific date, such as March 15, 2019, be represented as an absolute
        date?
    10. How are permissions used to control access to data?

Discussion Topics:

    1. In the auto shop examples in Section 9.1.2, what are some problems that might arise
       in Mario's system? Why won’t Danica run into the same problems? Provide specific
       examples in your answer.
    2. Many large organizations have had their database system hacked and customer data
       stolen. How should the security for the database be different than security for the rest
       of the system? Does it make a difference for web-based data designs? If so, how?
    3. Suggest three typical business situations where referential integrity avoids data
       problems.
    4. We use lots of codes in our personal and business lives. How many can you name?
    5. Are there ethical issues to consider when planning a database? For example, should
       sensitive personal data (such as medical information) be stored in the same DBMS that
       manages employee salary and benefits data? Why or why not?

Projects:

    1. Consider an automobile dealership with three locations. Identify the possible
       candidate keys, the likely primary key, a probable foreign key, and potential secondary
       keys.
    2. Visit a bookstore and draw an ERD describing the bookstore's operations.

[PDF page 122; printed page 122]
3. Cludadwy Chairs sells a patented seat that spectators can take to youth soccer games.
   The company operates a factory in Kansas and also contracts its manufacturing
   projects to small firms in Canada and Mexico. An unusual problem has occurred for
   this small multinational company: People are getting confused about dates in internal
   memos, purchase orders, and email. When the company’s database was originally
   designed, the designer was not aware that the format for dates in Canada and Mexico
   was different from the format used in the United States. For example, in Canada and
   Mexico, the notation 7/1/19 indicates January 7, 2019, whereas in the United States,
   the same notation indicates July 1, 2019. Although it seems like a small point, the date
   confusion       has       resulted      in      several      order        cancellations.
   Cludadwy Chairs has asked for your advice. You could suggest writing a simple
   program to convert the dates automatically or design a switchboard command that
   would allow users to select a date format as data is entered. You realize, however,
   that Cludadwy Chairs might want to do business in other countries in the future. What
   would be the best course of action? Should the company adapt to the standard of
   each country, or should it maintain a single international format? What are the
   arguments for each option?
4. Use Microsoft Access or similar database software to create a DBMS for the imaginary
   company called TopTex Publishing, which is described in Case in Point 9.1. Add several
   sample records to each table and report to the class on your progress.
5. Search the internet to find information about date formats. Determine whether the
   date format used in the United States is the most common format.
```
