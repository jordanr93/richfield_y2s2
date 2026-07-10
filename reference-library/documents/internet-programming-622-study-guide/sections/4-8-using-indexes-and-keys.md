---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "107-107"
printed_pages: "107-107"
section: "Using Indexes and Keys"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "table"
  - "indexes"
  - "keys"
  - "database"
  - "often"
  - "indexing"
  - "columns"
  - "you"
  - "has"
  - "such"
  - "internet"
  - "inexperienced"
---

# Using Indexes and Keys

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 107-107 | printed pages 107-107

Related sections: [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md), [Data Storage and Management](../../big-data-iot-600-study-guide/sections/3-4-3-data-storage-and-management.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md)

## Extracted Text

```text
[PDF page 107; printed page 107]
4.8 Using Indexes and Keys


Inexperienced database designers often complain about their database engines being
slow, and a common reason for this is the lack of indexing. An index is essentially a
separate, sorted list of the values in one or more columns of a table, often referred to as
keys. These terms are largely interchangeable. You can add indexes to one or more
columns either when you create the table or at any point after the table has been
created.

To understand why indexing has such a dramatic effect on performance, let's first
consider a table without indexes. Such a table behaves similarly to a plain text file,
where the database engine must search through the entire table sequentially. Since

                                           107
```
