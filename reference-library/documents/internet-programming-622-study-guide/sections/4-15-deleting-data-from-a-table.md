---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "120-120"
printed_pages: "120-120"
section: "Deleting Data From A Table"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "table"
  - "delete"
  - "statement"
  - "where"
  - "will"
  - "deleting"
  - "like"
  - "clause"
  - "rows"
  - "fruit"
  - "internet"
  - "sql"
---

# Deleting Data From A Table

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 120-120 | printed pages 120-120

Related sections: [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Creating A Table](4-11-creating-a-table.md), [Key Components of a Big Data Strategy](../../big-data-iot-600-study-guide/sections/5-2-key-components-of-a-big-data-strategy.md)

## Extracted Text

```text
[PDF page 120; printed page 120]
4.15 Deleting Data From A Table
The DELETE statement in SQL is used to remove data from a table. Just like the UPDATE
statement, you can use a WHERE clause to specify which rows to delete. If no WHERE
clause is provided, all the rows in the table will be deleted, but the table itself will
remain intact.

Example of the DELETE statement:

DELETE FROM fruit WHERE id = 2;

This command will delete the row where id = 2. After executing the statement, the fruit
table will look like this:

+----+--------+--------+

| id | name | color |

+----+--------+--------+

| 1 | banana | yellow |

| 3 | plum | purple |


                                             120
```
