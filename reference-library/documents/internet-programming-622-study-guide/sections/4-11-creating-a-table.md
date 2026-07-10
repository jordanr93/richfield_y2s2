---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "111-112"
printed_pages: "111-112"
section: "Creating A Table"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "table"
  - "you"
  - "create"
  - "fruit"
  - "key"
  - "name"
  - "not"
  - "null"
  - "database"
  - "following"
  - "use"
  - "primary"
---

# Creating A Table

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 111-112 | printed pages 111-112

Related sections: [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Creating A New Database](4-10-creating-a-new-database.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md)

## Extracted Text

```text
[PDF page 111; printed page 111]
4.11 Creating A Table


To begin with, we’ll create a simple table in the mydatabase database. Start by selecting
the database with the following command:

USE mydatabase;

Once you press Enter, you should see:

Database changed

Now, you can proceed to create your table. Use the following CREATE TABLE command
to create a table named fruit with three fields: id (the primary key), name (the name of
the fruit), and color (the fruit's color). Type the following at the mysql > prompt:

CREATE TABLE fruit (

  id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,

  name VARCHAR(30) NOT NULL,


                                          111

[PDF page 112; printed page 112]
     color VARCHAR(30) NOT NULL,

     PRIMARY KEY (id)

);

Press Enter at the end of each line. MySQL will display the - > arrows automatically to
indicate the continuation of the statement on the next line. Once the table is
successfully created, you should see a response like this:

Query OK, 0 rows affected (0.06 sec)

Now that the table is created, you can check the list of tables in your database by
running:

SHOW TABLES;

The output should look like this:

+----------------------+

| Tables_in_mydatabase |

+----------------------+

| fruit           |

+----------------------+

1 row in set (0.00 sec)

If you ever need to create a regular index (as opposed to a primary key) for a specific
field in a table, use the KEY or INDEX keyword. For example, if you wanted to add an
index for the name field in the fruit table, you could use the following command:

CREATE TABLE fruit (

     id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,

     name VARCHAR(30) NOT NULL,

     color VARCHAR(30) NOT NULL,

     PRIMARY KEY (id),

     KEY (name)


                                           112
```
