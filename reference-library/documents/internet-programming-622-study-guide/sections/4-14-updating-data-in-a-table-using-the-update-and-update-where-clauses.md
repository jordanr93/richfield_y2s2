---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "119-119"
printed_pages: "119-119"
section: "Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "update"
  - "where"
  - "table"
  - "yellow"
  - "statement"
  - "you"
  - "will"
  - "name"
  - "grapefruit"
  - "color"
  - "updating"
  - "clauses"
---

# Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 119-119 | printed pages 119-119

Related sections: [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [The Ethical and Legal Considerations in Big Data Strategy](../../big-data-iot-600-study-guide/sections/5-7-the-ethical-and-legal-considerations-in-big-data-strategy.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Data Cleaning, Normalization, and Transformation in Big data Workflows](../../big-data-iot-600-study-guide/sections/1-5-data-cleaning-normalization-and-transformation-in-big-data-workflows.md)

## Extracted Text

```text
[PDF page 119; printed page 119]
4.14 Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses


The UPDATE statement in SQL allows you to modify existing data within a table. It is
commonly used when you need to change one or more values of specific records in the
database. However, it is important to use a WHERE clause to specify which records
should be updated, as leaving it out will update all rows in the table.

Example of the UPDATE statement:

UPDATE fruit

SET name = 'grapefruit', color = 'yellow'

WHERE id = 2;

This command updates the record where id = 2. It changes the name to 'grapefruit' and
the color to 'yellow'. After executing this statement, the fruit table will look like this:

+----+------------+--------+

| id | name       | color |

+----+------------+--------+

| 1 | banana       | yellow |

| 2 | grapefruit | yellow |

| 3 | plum       | purple |

+----+------------+--------+

This is an important operation, especially in database management where you need to
keep your data current and relevant. Be careful when using UPDATE without a WHERE
clause as it will update all rows, which could be a costly mistake if not intended.



To get deeper into your research:




                                            119
```
