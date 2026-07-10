---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "95-95"
printed_pages: "95-95"
section: "First Normal Form"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "order"
  - "number"
  - "product"
  - "repeating"
  - "group"
  - "primary"
  - "key"
  - "table"
  - "design"
  - "form"
  - "fields"
  - "description"
---

# First Normal Form

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 95-95 | printed pages 95-95

Related sections: [Second Normal Form](3-6-3-second-normal-form.md), [Third Normal Form](3-6-4-third-normal-form.md), [Standard Notation Format](3-6-1-standard-notation-format.md), [Two Real-World Examples](3-6-5-two-real-world-examples.md), [PHP Form Validation](../../internet-programming-622-study-guide/sections/1-7-php-form-validation.md), [Topic 1: PHP and HTML Form](../../internet-programming-622-study-guide/sections/1-topic-1-php-and-html-form.md)

## Extracted Text

```text
[PDF page 95; printed page 95]
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
```
