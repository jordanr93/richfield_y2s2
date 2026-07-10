---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "101-108"
printed_pages: "101-108"
section: "Two Real-World Examples"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "number"
  - "course"
  - "advisor"
  - "table"
  - "name"
  - "credits"
  - "grade"
  - "figure"
  - "entities"
  - "design"
  - "repeating"
  - "group"
---

# Two Real-World Examples

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 101-108 | printed pages 101-108

Related sections: [Second Normal Form](3-6-3-second-normal-form.md), [Standard Notation Format](3-6-1-standard-notation-format.md), [Real-World Application](../../big-data-iot-600-study-guide/sections/5-4-3-real-world-application.md), [First Normal Form](3-6-2-first-normal-form.md), [Real-World Applications of Machine Learning](../../machine-learning-600-study-guide/sections/1-8-real-world-applications-of-machine-learning.md), [Real-Time Data Processing](../../big-data-iot-600-study-guide/sections/117-real-time-data-processing.md)

## Extracted Text

```text
[PDF page 101; printed page 101]
3.6.5 Two Real-World Examples

A good way to understand normalization is to apply the rules to real-world scenarios. This
section presents two different examples: a school and a technical service company. By
following a step-by-step process, data designs can be created that are efficient, maintainable,
and resistant to errors.




EXAMPLE I: Crossroads College

[PDF page 102; printed page 102]
  Consider the typical situation depicted in Figure 9-24, which shows several entities in the
          Crossroads College advising system: ADVISOR, COURSE, and STUDENT.




                                (Tilley and Rosenblatt, 2024)

The relationships among the three entities are shown in the Entity-Relationship Diagram
(ERD) in Figure 9-25. The following sections will discuss the normalization rules for these
entities.




                                (Tilley and Rosenblatt, 2024)

Before starting the normalization process, it is noted that the STUDENT table contains fields
related to the ADVISOR and COURSE entities. As a result, a decision is made to begin with the
initial design for the STUDENT table, shown in Figure 9-26. The table design includes the
following fields:

   •   Student Number
   •   Student Name
   •   Total Credits Taken
   •   Grade Point Average (GPA)
   •   Advisor Number
   •   Advisor Name

[PDF page 103; printed page 103]
   •   Advisor Office
   •   Course Number
   •   Course Description
   •   Course Credits
   •   Grade Received

The STUDENT table in Figure 9-26 is not yet normalized because it has a repeating group
(related to the courses the student has taken). This repeating group consists of Course
Number, Credits, and Grade fields.

The STUDENT table design can be written as follows:

   •   STUDENT (STUDENT NUMBER, STUDENT NAME, TOTAL CREDITS, GPA, ADVISOR
       NUMBER, ADVISOR NAME, OFFICE, (COURSE NUMBER, CREDIT HOURS, GRADE))

To convert this STUDENT table into 1NF, the primary key must be expanded to include the
primary key of the repeating group. This results in a new design that eliminates the repeating
group by turning each course entry into a separate record for each student. The 1NF version
of the STUDENT table is:

   •   STUDENT (STUDENT NUMBER, STUDENT NAME, TOTAL CREDITS, GPA, ADVISOR
       NUMBER, ADVISOR NAME, OFFICE, COURSE NUMBER, CREDIT HOURS, GRADE)

Now, each record contains data about one course taken by one student, and the table is in
1NF. The primary key has been expanded to include STUDENT NUMBER and COURSE
NUMBER, ensuring that each record is unique for each student and course combination.




                                (Tilley and Rosenblatt, 2024)

Figure 9-27 displays the 1NF version of the sample STUDENT data. In this table, certain fields

[PDF page 104; printed page 104]
depend only on a part of the primary key. Specifically, the student name, total credits, GPA,
advisor number, and advisor name are associated only with the student number, and do not
rely on the course number. The course description is dependent solely on the course number,
not the student number. Only the GRADE field depends on the full primary key (both student
number and course number).




                                (Tilley and Rosenblatt, 2024)

Figure 9-27 displays the 1NF version of the sample STUDENT data. In this table, certain fields
depend only on a part of the primary key. Specifically, the student name, total credits, GPA,
advisor number, and advisor name are associated only with the student number, and do not
rely on the course number. The course description is dependent solely on the course number,
not the student number. Only the GRADE field depends on the full primary key (both student
number and course number).

[PDF page 105; printed page 105]
                                (Tilley and Rosenblatt, 2024)

Following the 1NF to 2NF conversion process, new tables are created for each field and
combination of fields within the primary key. The other fields are assigned to their respective
keys. The resulting tables are as follows:

   •   STUDENT (STUDENT NUMBER, STUDENT NAME, TOTAL CREDITS, GPA, ADVISOR
       NUMBER, ADVISOR NAME, OFFICE)
   •   COURSE (COURSE NUMBER, CREDIT HOURS)
   •   GRADE (STUDENT NUMBER, COURSE NUMBER, GRADE)

The original 1NF STUDENT table has now been converted into three tables, all in 2NF. In each
of these tables, every non-key field depends on the entire primary key.

However, are all three tables in 3NF? The COURSE and GRADE tables are in 3NF, but the
STUDENT table is not. This is because the ADVISOR NAME and OFFICE fields depend on the
ADVISOR NUMBER, which is not part of the STUDENT table’s primary key. To convert the
STUDENT table to 3NF, the ADVISOR NAME and OFFICE fields are removed and placed into a
separate table where ADVISOR NUMBER serves as the primary key.

[PDF page 106; printed page 106]
                               (Tilley and Rosenblatt, 2024)


Figure 9-29 illustrates the 3NF versions of the sample data for the STUDENT, ADVISOR,
COURSE, and GRADE tables. The final 3NF design is as follows:

    •   STUDENT (STUDENT NUMBER, STUDENT NAME, TOTAL CREDITS, GPA, ADVISOR
        NUMBER)
    •   ADVISOR (ADVISOR NUMBER, ADVISOR NAME, OFFICE)
    •   COURSE (COURSE NUMBER, CREDIT HOURS)
    •   GRADE (STUDENT NUMBER, COURSE NUMBER, GRADE)

In this design:

    •   Each table now adheres to the principles of 3NF, meaning all non-key fields depend
        only on the primary key, and there is no transitive dependency between non-key
        fields.

[PDF page 107; printed page 107]
                                 (Tilley and Rosenblatt, 2024)
Figure 9-30 illustrates the complete Entity-Relationship Diagram (ERD) after normalization.
There are now four entities: STUDENT, ADVISOR, COURSE, and GRADE (which is an
associative entity).
It’s important to note that in Figure 9-25, which was drawn before GRADE was identified as
an entity, the M:N relationship (many-to-many) between STUDENT and COURSE was
depicted. After normalization, this M:N relationship has been transformed into two 1:M
relationships (one-to-many):
     • One relationship between STUDENT and GRADE.
     • The other relationship between COURSE and GRADE.
This approach eliminates redundancy and creates more efficient data relationships.




                               (Tilley and Rosenblatt, 2024)

[PDF page 108; printed page 108]
To create 3NF designs, it's essential to understand the concepts of first, second, and third
normal forms. A systems analyst will often encounter designs far more complex than the
examples in this chapter.

EXAMPLE 2: Magic Maintenance

Magic Maintenance is a company that provides on-site service for electronic equipment.
Figure 9-31 illustrates the overall database design that such a firm might use. This diagram
incorporates many of the concepts described earlier. The database consists of seven separate
tables, all connected by common fields, making them part of an integrated data structure.




                                (Tilley and Rosenblatt, 2024)

Figure 9-32 offers further details, including sample data, primary keys, and common fields.
It's worth noting that the entities in the database include customers, technicians, and service
calls, among others. This example highlights how databases for real-world businesses can
become intricate, involving multiple entities that need to be normalized to ensure efficient
and accurate data storage.
```
