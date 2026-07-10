---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "90-92"
printed_pages: "90-92"
section: "Types of Relationships"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "relationship"
  - "many"
  - "entity"
  - "can"
  - "instance"
  - "many-to-many"
  - "second"
  - "first"
  - "relationships"
  - "connecting"
  - "shown"
  - "figure"
---

# Types of Relationships

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 90-92 | printed pages 90-92

Related sections: [Types of Big Data Alalytics](../../big-data-iot-600-study-guide/sections/5-4-types-of-big-data-alalytics.md), [Types of Maintenance](6-2-1-types-of-maintenance.md), [Types of Machine Learning](../../machine-learning-600-study-guide/sections/1-3-types-of-machine-learning.md), [Implementation of Queues as Arrays](../../programming-622-study-guide/sections/6-2-implementation-of-queues-as-arrays.md), [Lack of Skilled Talent](../../big-data-iot-600-study-guide/sections/114-lack-of-skilled-talent.md), [Layer Architecture of Internet of Things](../../big-data-iot-600-study-guide/sections/2-3-layer-architecture-of-internet-of-things.md)

## Extracted Text

```text
[PDF page 90; printed page 90]
3.5.2 Types of Relationships


There are three types of relationships that can exist between entities: one-to-one, one-to-
many, and many-to-many.

   1. One-to-One Relationship (1:1)


       A one-to-one relationship occurs when exactly one instance of the second entity is
       associated with each instance of the first entity. For example, if each doctor has
       exactly one office and each office is assigned to one doctor, this would be a 1:1
       relationship. In an ERD, the number "1" is placed next to the lines connecting the two
       entities to indicate this relationship, as shown in Figure 9-13.

[PDF page 91; printed page 91]
                                (Tilley and Rosenblatt, 2024)



   2. One-to-Many Relationship (1:M)


       A one-to-many relationship exists when one instance of the first entity can relate to
       many instances of the second entity, but each instance of the second entity can only
       relate to one instance of the first entity. For example, in the relationship between
       DEPARTMENT and EMPLOYEE, one department can have many employees, but each
       employee works in only one department at a time. In an ERD, the line connecting the
       "many" side is labeled with "M," and the line connecting the "one" side is labeled with
       "1," as shown in Figure 9-14.




                                (Tilley and Rosenblatt, 2024)



How many is many?


In some cases, the "many" can refer to any number, including zero. For example, an individual
might own multiple automobiles, one automobile, or none at all. Therefore, "many" can
represent any number, including zero, as shown in the INDIVIDUAL and AUTOMOBILE
relationship in Figure 9-14.

   3. Many-to-Many Relationship (M:N)


       A many-to-many relationship occurs when one instance of the first entity can relate
       to many instances of the second entity, and one instance of the second entity can
       relate to many instances of the first entity. For example, the relationship between

[PDF page 92; printed page 92]
       STUDENT and CLASS is many-to-many: a student can take many classes, and each class
       can have many students enrolled. In an ERD, both connecting lines are labeled with
       the letter "M" and "N" to indicate the many-to-many relationship, as shown in Figure
       9-15.




                                 (Tilley and Rosenblatt, 2024)


An M:N relationship differs from 1:1 or 1:M relationships because the event or transaction
linking the two entities is actually a third entity, known as an associative entity, which has its
own characteristics. In the first example in Figure 9-15, the ENROLL IN symbol represents a
REGISTRATION entity, which records each instance of a specific student enrolling in a specific
course. Similarly, the RESERVES SEAT ON symbol represents a RESERVATION entity, which
records each instance of a specific passenger reserving a seat on a specific flight. In the third
example, the LISTS symbol represents an ORDER LINE entity, which records each instance of
a specific product being listed in a specific customer order.

Figure 9-16 shows an ERD for a sales system, highlighting various entities and relationships,
including the associative entity called ORDER LINE. The detailed nature of these relationships
is referred to as cardinality. To create an accurate data design that reflects all relationships
among system entities, an analyst must fully understand cardinality.
```
