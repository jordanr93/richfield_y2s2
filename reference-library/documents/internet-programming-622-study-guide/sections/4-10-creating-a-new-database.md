---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "110-110"
printed_pages: "110-110"
section: "Creating A New Database"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "database"
  - "mysql"
  - "new"
  - "enter"
  - "you"
  - "create"
  - "command"
  - "creating"
  - "following"
  - "prompt"
  - "root"
  - "will"
---

# Creating A New Database

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 110-110 | printed pages 110-110

Related sections: [Creating A Table](4-11-creating-a-table.md), [Database Models](4-4-database-models.md), [Database Management Systems](../../information-systems-622-study-guide/sections/3-1-3-database-management-systems.md), [Interfaces for Users, Database Administrators, and Related Systems](../../information-systems-622-study-guide/sections/3-2-1-interfaces-for-users-database-administrators-and-related-systems.md), [Mario and Danica: A Data Design Example](../../information-systems-622-study-guide/sections/3-1-2-mario-and-danica-a-data-design-example.md), [Database Architecture](4-1-database-architecture.md)

## Extracted Text

```text
[PDF page 110; printed page 110]
4.10 Creating A New Database
Creating a new MySQL database is straightforward. To begin, open the MySQL
command-line tool and enter the following command in the shell prompt on Windows:

mysql -u root -p

After pressing Enter, you will be prompted to enter the root password. Once you've
entered the correct password and pressed Enter again, you should see the MySQL
prompt:

mysql >

To create a new database, you use the CREATE DATABASE command. For example, to
create a database named mydatabase, type the following command:

CREATE DATABASE mydatabase;

Press Enter, and MySQL will create the new database. You can verify that the database
has been created by listing all the databases on the system with the following
command:

SHOW DATABASES;

You should see an output like this:

+--------------------+

| Database           |

                                            110
```
