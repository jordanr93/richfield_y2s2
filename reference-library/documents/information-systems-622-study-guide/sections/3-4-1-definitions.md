---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "85-87"
printed_pages: "85-87"
section: "Definitions"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "entity"
  - "field"
  - "customer"
  - "table"
  - "fields"
  - "key"
  - "entities"
  - "used"
  - "record"
  - "primary"
  - "file"
  - "candidate"
---

# Definitions

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 85-87 | printed pages 85-87

Related sections: [First Normal Form](3-6-2-first-normal-form.md), [Referential Integrity](3-4-2-referential-integrity.md), [Creating A Table](../../internet-programming-622-study-guide/sections/4-11-creating-a-table.md), [Data Quality and Accuracy](../../big-data-iot-600-study-guide/sections/111-data-quality-and-accuracy.md), [Tracking Key Metrics](../../big-data-iot-600-study-guide/sections/103-tracking-key-metrics.md), [Focus on Data Entry Screens](2-4-7-focus-on-data-entry-screens.md)

## Extracted Text

```text
[PDF page 85; printed page 85]
   3.4.1 Definitions

   •   ENTITY: An entity is a person, place, thing, or event for which data is collected and
       maintained. For example, in an online sales system, entities might include CUSTOMER,
       ORDER, PRODUCT, and SUPPLIER. During the systems analysis phase, data flow
       diagrams (DFDs) were used to identify various entities and data stores. Now, the
       relationships among these entities will be considered.
   •   TABLE OR FILE: Data is organized into tables or files. A table or file contains a set of
       related records that store data about a specific entity. Tables and files are typically
       represented as two-dimensional structures with vertical columns and horizontal rows.

[PDF page 86; printed page 86]
       Each column represents a field (a characteristic of the entity), and each row
       represents a record (an individual instance of the entity). For example, if a company
       has 10,000 customers, the CUSTOMER table will have 10,000 records, each
       representing a specific customer. The terms table and file are often used
       interchangeably, depending on the context.

   •   FIELD: A field, also called an attribute, is a single characteristic or fact about an entity.
       For example, a CUSTOMER entity might include fields such as Customer ID, First
       Name, Last Name, Address, City, State, Postal Code, and Email Address. A common
       field is an attribute that appears in more than one entity. Common fields can be used
       to link entities in various types of relationships.


   •   RECORD: A record, also called a tuple, is a set of related fields that describes one
       instance or occurrence of an entity (e.g., one customer, one order, or one product). A
       record can consist of one or more fields, depending on the information needed.

These terms form the foundation for understanding data design and help in structuring and
organizing the database efficiently.

[PDF page 87; printed page 87]
                                 (Tilley and Rosenblatt, 2024)

A candidate key refers to any field or combination of fields that could potentially be used as
the primary key in a table. For example, if each employee has a unique employee number,
that could serve as a primary key. However, a Social Security number would not make a good
candidate key, as it is not always unique. When selecting a primary key, the field chosen
should contain the least amount of data and be the easiest to use. Any field that isn’t selected
as a primary or candidate key is called a nonkey field.
In some cases, there are multiple candidate keys that could serve as the primary key. For
example, the "COURSE DESCRIPTION" field in the COURSE table could also be a candidate key.
However, the OFFICE field in the ADVISOR table cannot be a candidate key because multiple
advisors could share the same office.

A foreign key is a field in one table that links to the primary key in another table, establishing
a relationship between the two. For example, "ADVISOR NUMBER" appears in both the
"STUDENT" and "ADVISOR" tables, joining them together. In the ADVISOR table, the ADVISOR
NUMBER is the primary key, but in the STUDENT table, it acts as a foreign key. Foreign keys
```
