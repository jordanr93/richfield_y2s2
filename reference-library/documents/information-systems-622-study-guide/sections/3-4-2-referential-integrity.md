---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "88-88"
printed_pages: "88-88"
section: "Referential Integrity"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "referential"
  - "integrity"
  - "table"
  - "advisor"
  - "key"
  - "customer"
  - "foreign"
  - "value"
  - "unless"
  - "primary"
  - "another"
  - "order"
---

# Referential Integrity

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 88-88 | printed pages 88-88

Related sections: [Definitions](3-4-1-definitions.md), [First Normal Form](3-6-2-first-normal-form.md), [Creating A Table](../../internet-programming-622-study-guide/sections/4-11-creating-a-table.md), [Tracking Key Metrics](../../big-data-iot-600-study-guide/sections/103-tracking-key-metrics.md), [Third Normal Form](3-6-4-third-normal-form.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md)

## Extracted Text

```text
[PDF page 88; printed page 88]
3.4.2 Referential Integrity


Validity checks help avoid data input errors. One type of validity check, called referential
integrity, is a set of rules that prevents data inconsistency and quality issues. In a relational
database, referential integrity means that a foreign key value cannot be entered in one table
unless it matches an existing primary key in another table.

For example, referential integrity would prevent a customer order from being entered in an
order table unless that customer already exists in the customer table. Without referential
integrity, an order could exist without a corresponding customer, which would create an
orphan record.

In the example shown in Figure 9-10, referential integrity will not allow a user to enter an
advisor number (foreign key value) in the STUDENT table unless a valid advisor number
(primary key value) already exists in the ADVISOR table.

Referential integrity can also prevent the deletion of a record if it has a primary key that is
referenced by foreign keys in another table. For example, if an advisor resigns to accept a
position at another school, the advisor cannot be deleted from the ADVISOR table if there are
```
