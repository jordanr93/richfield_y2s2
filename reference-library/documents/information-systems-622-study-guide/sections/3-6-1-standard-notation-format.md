---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "93-94"
printed_pages: "93-94"
section: "Standard Notation Format"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "field"
  - "repeating"
  - "notation"
  - "fields"
  - "order"
  - "design"
  - "number"
  - "table"
  - "name"
  - "group"
  - "unnormalized"
  - "standard"
---

# Standard Notation Format

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 93-94 | printed pages 93-94

Related sections: [Second Normal Form](3-6-3-second-normal-form.md), [First Normal Form](3-6-2-first-normal-form.md), [Two Real-World Examples](3-6-5-two-real-world-examples.md), [Third Normal Form](3-6-4-third-normal-form.md), [TOPIC 2: STANDARD TEMPLATE LIBRARY (STL)](../../programming-622-study-guide/sections/2-topic-2-standard-template-library-stl.md), [Definitions](3-4-1-definitions.md)

## Extracted Text

```text
[PDF page 93; printed page 93]
3.6.1 Standard Notation Format

[PDF page 94; printed page 94]
Designing tables is easier when using a standardized notation format to represent a table's
structure, fields, and primary key. The standard notation for an ORDER system starts with the
table name, followed by a set of fields in parentheses, separated by commas. The primary key

field(s) are underlined, like this:

NAME (FIELD 1, FIELD 2, FIELD 3).

Repeating Groups

During data design, the analyst must identify repeating groups of fields. A repeating group is
a set of one or more fields that can appear multiple times within a single record, with each
occurrence having different values. For example, in the case of a company using written
source documents to record orders, a repeating group might consist of multiple products
listed within the same order number. In this case, fields such as product number, description,
quantity ordered, supplier number, supplier name, and status would repeat within the same
order. A repeating group can be thought of as a set of child records within a parent record.




                                      (Tilley and Rosenblatt, 2024)

Unnormalized Table Design

A table design that contains a repeating group is referred to as unnormalized. The standard
notation method for representing an unnormalized design is to enclose the repeating group
of fields within a second set of parentheses. An example of an unnormalized table looks like
this:
NAME (FIELD 1, FIELD 2, FIELD 3, (REPEATING FIELD 1, REPEATING FIELD 2))

Now, let's look at the unnormalized ORDER table design shown in Figure 9-20. According to
the notation guidelines, the design can be described as follows:

ORDER (ORDER, DATE, (PRODUCT NUMBER, DESCRIPTION, NUMBER ORDERED, SUPPLIER
NUMBER, SUPPLIER NAME, ISO))
```
