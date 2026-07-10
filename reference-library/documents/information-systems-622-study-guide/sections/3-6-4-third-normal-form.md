---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "99-100"
printed_pages: "99-100"
section: "Third Normal Form"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "design"
  - "supplier"
  - "field"
  - "key"
  - "name"
  - "nonkey"
  - "product"
  - "table"
  - "third"
  - "normal"
  - "form"
  - "order"
---

# Third Normal Form

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 99-100 | printed pages 99-100

Related sections: [Second Normal Form](3-6-3-second-normal-form.md), [First Normal Form](3-6-2-first-normal-form.md), [Creating An HTML Form](../../internet-programming-622-study-guide/sections/1-2-creating-an-html-form.md), [Handling Empty Form Fields](../../internet-programming-622-study-guide/sections/1-5-handling-empty-form-fields.md), [Standard Notation Format](3-6-1-standard-notation-format.md), [Capturing Form Data With PHP](../../internet-programming-622-study-guide/sections/1-3-capturing-form-data-with-php.md)

## Extracted Text

```text
[PDF page 99; printed page 99]
3.6.4 Third Normal Form


A popular rule of thumb is that a design is in Third Normal Form (3NF) if every nonkey field
depends on the key, the whole key, and nothing but the key. A 3NF design eliminates
redundancy and data integrity issues that can still exist in 2NF designs.

Continuing with the ORDER example, let's review the PRODUCT table design in Figure 9-23:
PRODUCT (PRODUCT NUMBER, DESCRIPTION, SUPPLIER NUMBER, SUPPLIER NAME, ISO)

[PDF page 100; printed page 100]
                                 (Tilley and Rosenblatt, 2024)

This PRODUCT table is in 1NF because it has no repeating group, and it is in 2NF because the
primary key is a single field. However, there are still potential problems in this design:

   1. Cumbersome                                                                  updates:
      If a supplier's name needs to be changed, every record in which that name appears
      must be updated. If there are hundreds or thousands of records, this becomes slow,
      expensive, and prone to errors.
   2. Inconsistent                                                                    data:
      The 2NF design allows a supplier to have different names or ISO statuses in different
      records, leading to potential inconsistencies.
   3. Problems                      adding                   new                 suppliers:
      Since the supplier name is included in the ORDER table, a dummy ORDER record must
      be created to add a new supplier who has not yet received any orders.
   4. Loss                     of                    supplier                information:
      If all orders for a supplier are deleted, the supplier's number and name will also be
      lost.

These issues arise because the design is not in 3NF. A table design is in 3NF if it is in 2NF and
if no nonkey field is dependent on another nonkey field. A nonkey field is any field that is not
a candidate key for the primary key.
```
