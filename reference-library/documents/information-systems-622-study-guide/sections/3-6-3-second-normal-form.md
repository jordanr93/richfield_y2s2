---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "93-98"
printed_pages: "93-98"
section: "Second Normal Form"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "field"
  - "repeating"
  - "number"
  - "design"
  - "fields"
  - "order"
  - "normal"
  - "form"
  - "notation"
  - "table"
  - "name"
  - "group"
---

# Second Normal Form

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 93-98 | printed pages 93-98

Related sections: [First Normal Form](3-6-2-first-normal-form.md), [Third Normal Form](3-6-4-third-normal-form.md), [Standard Notation Format](3-6-1-standard-notation-format.md), [Two Real-World Examples](3-6-5-two-real-world-examples.md), [Creating An HTML Form](../../internet-programming-622-study-guide/sections/1-2-creating-an-html-form.md), [Handling Empty Form Fields](../../internet-programming-622-study-guide/sections/1-5-handling-empty-form-fields.md)

## Extracted Text

```text
[PDF page 93; printed page 93]
form, second normal form, and third normal form. These stages represent a progression, with
third normal form being the optimal design. Most business databases are designed using third
normal form, though higher normal forms exist, they are rarely needed in business systems.


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

[PDF page 95; printed page 95]
This notation indicates that the ORDER table design contains eight fields, which are listed
within the outer parentheses. The ORDER field is underlined to indicate it is the primary key.
The fields PRODUCT NUMBER, DESCRIPTION, NUMBER ORDERED, SUPPLIER NUMBER,
SUPPLIER NAME, and ISO are enclosed within an inner set of parentheses to show they are
part of a repeating group. Note that PRODUCT NUMBER is also underlined because it serves
as the primary key of the repeating group. If a customer orders three different products in
one order, these six fields will repeat for each product.


3.6.2 First Normal Form

A table is in first normal form (1NF) if it does not contain a repeating group. To convert an
unnormalized design to 1NF, the table’s primary key must be expanded to include the primary
key of the repeating group.
For instance, in the ORDER table shown in Figure 9-20, the repeating group consists of six
fields: PRODUCT NUMBER, DESCRIPTION, NUMBER ORDERED, SUPPLIER NUMBER, SUPPLIER
NAME, and ISO. Of these fields, only PRODUCT NUMBER can act as a primary key because it
uniquely identifies each instance of the repeating group. DESCRIPTION cannot be a primary
key because it may not be unique; for example, many products might share the same
description, like "washer," but be identified uniquely by their part numbers.
When the primary key of the ORDER table is expanded to include PRODUCT NUMBER, the
repeating group is eliminated, and the ORDER table is now in 1NF. The new design looks like
this:

ORDER (ORDER, DATE, PRODUCT NUMBER, DESCRIPTION, NUMBER ORDERED, SUPPLIER
NUMBER, SUPPLIER NAME, ISO)

In this 1NF design, the repeating group is removed, and more records are generated—one for
each combination of a specific order and a specific product. For example, the repeating group
for order number 86223 now becomes three separate records, and the repeating group for
order number 86390 becomes two separate records. As a result, each record in the 1NF
design represents a single instance of a specific order and product.
It is important to note that the primary key in the 1NF design is a combination of the ORDER
and PRODUCT NUMBER fields. Neither ORDER nor PRODUCT NUMBER alone can be the
primary key, as ORDER does not uniquely identify each product in a multiple-item order, and
PRODUCT NUMBER can appear more than once across different orders. Therefore, both fields
together form a composite primary key to uniquely identify each record in the table.

[PDF page 96; printed page 96]
                                  (Tilley and Rosenblatt, 2024)


3.6.3 Second Normal Form


To understand second normal form (2NF), it's essential to grasp the concept of functional
dependence. A field A is functionally dependent on field B if the value of field A depends on
field B. For example, in Figure 9-21, the DATE value is functionally dependent on the ORDER
because for a specific order number, there can only be one date. In contrast, the product
description is not dependent on the order number because there might be multiple product
descriptions for a specific order number, each representing a different item ordered.

A table design is in second normal form (2NF) if it is in 1NF and if all fields that are not part of
the primary key are functionally dependent on the entire primary key. If any field in a 1NF
table depends on only part of a combination primary key, the table is not in 2NF.

Note that if a 1NF design has a primary key consisting of only one field, the issue of partial
dependence does not arise, because the entire primary key is a single field. Therefore, a 1NF
table with a single-field primary key is automatically in 2NF.

Now, let's reexamine the 1NF design for the ORDER table shown in Figure 9-21:


ORDER (ORDER, DATE, PRODUCT NUMBER, DESCRIPTION, NUMBER ORDERED, SUPPLIER
NUMBER, SUPPLIER NAME, ISO)

[PDF page 97; printed page 97]
Recall that the primary key is the combination of the order number and the product number.
The NUMBER ORDERED field depends on the entire primary key because it refers to a specific
product number and a specific order number. However, the DATE field depends only on the
order number, which is only part of the primary key. Similarly, the DESCRIPTION field depends
on the product number, which is also only part of the primary key. Since some fields do not
depend on the entire primary key, the design is not in 2NF.

Converting 1NF to 2NF


There is a standard process for converting a table from 1NF to 2NF. The objective is to break
the original table into two or more new tables and reassign the fields so that each nonkey
field will depend on the entire primary key in its table. The following steps should be followed:

   1. Create and name a separate table for each field in the existing primary key.
      For example, in Figure 9-21, the ORDER table’s primary key has two fields, ORDER and
      PRODUCT NUMBER, so two tables must be created. The result is:


       ORDER                                      (ORDER,                                    ...)
       PRODUCT (PRODUCT NUMBER, ...)

   2. Create a new table for each possible combination of the original primary key fields.
      In the Figure 9-21 example, a new table is created with a combination primary key of
      ORDER and PRODUCT NUMBER. This table describes individual lines in an order, so it
      is                     named                       ORDER                       LINE:
      ORDER LINE (ORDER, PRODUCT NUMBER)



   3. Study the three tables and place each field with its appropriate primary key, which
      is    the      minimal        key     on     which     it    functionally     depends.
      After placing the fields in the appropriate tables, remove any table that does not have
      any additional fields assigned to it. The remaining tables represent the 2NF version of
      the original table.

The         three       tables       in       2NF        would         be:
ORDER                             (ORDER,                           DATE)
PRODUCT (PRODUCT NUMBER, DESCRIPTION, SUPPLIER NUMBER, SUPPLIER NAME, ISO)
ORDER LINE (ORDER, PRODUCT NUMBER)

Figure 9-22 shows the 2NF table designs. By following the steps, the original 1NF table has
been converted into three 2NF tables.

Why       is      it     important      to     move        from        1NF         to      2NF?
There are four kinds of problems with 1NF designs that do not exist in 2NF:

[PDF page 98; printed page 98]
1. Cumbersome updates:


   Suppose there are 500 current orders for product number 304, and the product
   description needs to be updated. In 1NF, this would require modifying 500 records,
   which is labor-intensive and costly.

2. Inconsistent                                                                   data:
   In 1NF, there could be inconsistent product descriptions across records. If product
   number 304 appears in many order records, some descriptions might be inaccurate or
   misspelled. This inconsistency is difficult to manage and results in data quality
   problems.
3. Problems                adding              a             new              product:
   In 1NF, the primary key requires both an order number and a product number. This
   creates difficulty when adding a new product that has not been ordered yet, as there
   is no order number to use.




                           (Tilley and Rosenblatt, 2024)
```
