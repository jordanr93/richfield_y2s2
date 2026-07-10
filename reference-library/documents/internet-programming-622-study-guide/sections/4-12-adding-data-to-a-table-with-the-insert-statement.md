---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "113-115"
printed_pages: "113-115"
section: "Adding Data to A Table With The INSERT Statement"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "insert"
  - "fruit"
  - "table"
  - "values"
  - "you"
  - "name"
  - "color"
  - "statement"
  - "query"
  - "sec"
  - "rows"
  - "see"
---

# Adding Data to A Table With The INSERT Statement

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 113-115 | printed pages 113-115

Related sections: [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Creating A Table](4-11-creating-a-table.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md)

## Extracted Text

```text
[PDF page 113; printed page 113]
4.12 Adding Data to A Table With The INSERT Statement


Now let's add some fruit to the fruit table using the `INSERT` statement. As you know,
the basic syntax for the `INSERT` statement is:




INSERT INTO table VALUES (value1, value2, ...);




This inserts values into each field of the table in the order that the fields were defined.
Since **id** is an `AUTO_INCREMENT` field, we don't need to include it in our `INSERT`
statements — it will be filled automatically.



Here is how to insert three rows into the fruit table by providing values for only the
name and color fields:




INSERT INTO fruit (name, color) VALUES ('banana', 'yellow');




After running this, you should see:


                                            113

[PDF page 114; printed page 114]
Query OK, 1 row affected (0.06 sec)




Next, insert the second fruit record:




INSERT INTO fruit (name, color) VALUES ('tangerine', 'orange');




You should see:




Query OK, 1 row affected (0.00 sec)



Finally, insert the third fruit record:




INSERT INTO fruit (name, color) VALUES ('plum', 'purple');




And you should see:




                                          114

[PDF page 115; printed page 115]
Query OK, 1 row affected (0.00 sec)




If you want to verify that the rows have been successfully added to the table, run the
following query:




SELECT * FROM fruit;




This should show the three records with automatically generated **id** values:




+----+-----------+--------+

| id | name      | color |

+----+-----------+--------+

| 1 | banana | yellow |

| 2 | tangerine | orange |

| 3 | plum       | purple |

+----+-----------+--------+

3 rows in set (0.00 sec)




                                          115
```
