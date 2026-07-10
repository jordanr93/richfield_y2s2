---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "108-109"
printed_pages: "108-109"
section: "Introducing SQL Statements"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "table"
  - "statements"
  - "sql"
  - "john"
  - "tables"
  - "select"
  - "where"
  - "firstname"
  - "introducing"
  - "databases"
  - "you"
  - "deletes"
---

# Introducing SQL Statements

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 108-109 | printed pages 108-109

Related sections: [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]](4-topic-4-databases-and-structured-query-language-sql.md), [Incorporate Feedback for Continuous Improvement](../../big-data-iot-600-study-guide/sections/131-incorporate-feedback-for-continuous-improvement.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [Review questions](60-review-questions.md)

## Extracted Text

```text
[PDF page 108; printed page 108]
4.9 Introducing SQL Statements



To work with databases and tables, you use SQL statements. These statements allow
you to interact with the data stored in the tables. Common SQL statements include:

   •   SELECT: Retrieves data from one or more tables.

   •   INSERT: Inserts data into a table.

   •   REPLACE: Replaces data in a table. If the same record exists, it is overwritten
       with new data.

                                            108

[PDF page 109; printed page 109]
   •   UPDATE: Updates data in a table.

   •   DELETE: Deletes data from a table.

There are also SQL statements that deal with the structure of databases and tables,
rather than manipulating the data within them:

   •   CREATE: Creates a database, table, or index.

   •   ALTER: Modifies the structure of a table.

   •   DROP: Deletes a database or table.

In this chapter, you'll explore most of these statements in detail, but let's first look at
the typical form of a MySQL SELECT statement, which is used to retrieve records from a
table. SQL operations like this are often referred to as queries, hence the name
Structured Query Language:

SELECT field1, field2, ..., fieldn FROM table WHERE condition;

A statement can span multiple lines for readability, as shown in this simple example:

SELECT lastName, firstName

FROM users

WHERE firstName = 'John';

In this query, the FROM clause specifies the table to retrieve data from (users), and the
WHERE clause filters the data based on the condition that the firstName is 'John'. The
output might look like this if there are matching records:

Simpleton John

Smith John

Thomas John


                                             109
```
