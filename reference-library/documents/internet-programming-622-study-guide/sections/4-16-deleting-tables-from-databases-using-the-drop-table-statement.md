---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "121-122"
printed_pages: "121-122"
section: "Deleting Tables from Databases Using The DROP TABLE Statement"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "database"
  - "table"
  - "drop"
  - "mysql"
  - "tables"
  - "statement"
  - "show"
  - "databases"
  - "command"
  - "you"
  - "can"
  - "sec"
---

# Deleting Tables from Databases Using The DROP TABLE Statement

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 121-122 | printed pages 121-122

Related sections: [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [Understanding Relational Databases](4-7-understanding-relational-databases.md), [Connecting To MySQL From PHP](4-17-connecting-to-mysql-from-php.md)

## Extracted Text

```text
[PDF page 121; printed page 121]
4.16 Deleting Tables from Databases Using The DROP TABLE Statement
To delete a table entirely from a database, you can use the DROP TABLE statement in
MySQL. This command will remove the table and all its data permanently. Similarly, you
can delete an entire database with the DROP DATABASE statement.

First, let’s see how the DROP TABLE command works:

    1. Start by listing all the tables in your database using the SHOW TABLES command:

mysql > SHOW TABLES;

+----------------------+

| Tables_in_mydatabase |

+----------------------+

| fruit           |

+----------------------+

1 row in set (0.00 sec)

    2. To delete the fruit table, you can use the DROP TABLE statement:

mysql > DROP TABLE fruit;

Query OK, 0 rows affected (0.25 sec)

    3. To confirm that the table has been deleted, you can run the SHOW TABLES
       command again:

mysql > SHOW TABLES;

Empty set (0.00 sec)


                                           121

[PDF page 122; printed page 122]
As you can see, after running the DROP TABLE statement, the table fruit no longer exists
in the database.

The DROP DATABASE statement works in a similar manner, but it removes an entire
database along with all its tables and data.

    1. To list all the databases in MySQL, use the SHOW DATABASES command:

mysql > SHOW DATABASES;

+--------------------+

| Database             |

+--------------------+

| information_schema |

| mydatabase               |

| mysql            |

+--------------------+

3 rows in set (0.40 sec)

    2. To delete the mydatabase database, use the DROP DATABASE statement:

mysql > DROP DATABASE mydatabase;

Query OK, 0 rows affected (0.14 sec)

    3. To confirm that the database has been deleted, run the SHOW DATABASES
       command again:

mysql > SHOW DATABASES;

+--------------------+

| Database             |

+--------------------+

| information_schema |

| mysql            |


                                          122
```
