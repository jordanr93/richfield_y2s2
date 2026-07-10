---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "116-118"
printed_pages: "116-118"
section: "Reading Data from A Table with The SELECT And SELECT … Where Clauses"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "select"
  - "you"
  - "name"
  - "table"
  - "where"
  - "fruit"
  - "retrieve"
  - "color"
  - "can"
  - "filter"
  - "all"
  - "banana"
---

# Reading Data from A Table with The SELECT And SELECT … Where Clauses

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 116-118 | printed pages 116-118

Related sections: [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Creating A Table](4-11-creating-a-table.md), [Reading Data](4-20-reading-data.md)

## Extracted Text

```text
[PDF page 116; printed page 116]
4.13 Reading Data from A Table with The SELECT And SELECT … Where Clauses


The SELECT statement in SQL is a powerful tool for retrieving data from a database. You
can query tables in various ways to filter, sort, and display the information you need.

Here are a few examples using the fruit table you've created:

Retrieve All Data

To retrieve all the data from the fruit table, you use:

SELECT * FROM fruit;

This query returns every row and column in the fruit table. The * means "all fields" in
the table.

Example result:

+----+-----------+--------+

| id | name      | color |

+----+-----------+--------+

| 1 | banana | yellow |

| 2 | tangerine | orange |

| 3 | plum       | purple |

+----+-----------+--------+

3 rows in set (0.00 sec)

Retrieve Specific Columns



                                            116

[PDF page 117; printed page 117]
You can also specify which columns to retrieve. For instance, to get just the name and
color columns:

SELECT name, color FROM fruit;

This will return only the specified columns:

+-----------+--------+

| name       | color |

+-----------+--------+

| banana | yellow |

| tangerine | orange |

| plum      | purple |

+-----------+--------+

3 rows in set (0.00 sec)

Filter Data Using the WHERE Clause

To retrieve specific rows, you can add a WHERE clause to filter the results based on
certain conditions.

For example, to get all records where the name is 'banana':

SELECT * FROM fruit WHERE name = 'banana';

The result will be:

+----+--------+--------+

| id | name | color |

+----+--------+--------+


                                           117

[PDF page 118; printed page 118]
| 1 | banana | yellow |

+----+--------+--------+

1 row in set (0.08 sec)

Similarly, you can filter based on other conditions. For instance, to retrieve fruits with an
id greater than or equal to 2:

SELECT * FROM fruit WHERE id >= 2;

The result:

+----+-----------+--------+

| id | name      | color |

+----+-----------+--------+

| 2 | tangerine | orange |

| 3 | plum       | purple |

+----+-----------+--------+

2 rows in set (0.06 sec)

Key Takeaways:

    •   SELECT * FROM table_name retrieves all data from the table.

    •   SELECT column1, column2 lets you specify which columns to retrieve.

    •   WHERE clause helps filter results based on conditions you define, like equality
        (=) or greater than (>=).

With these basic queries, you can start retrieving specific data from your database to
use in your applications!


                                            118
```
