---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "103-105"
printed_pages: "103-105"
section: "Relational Databases"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "database"
  - "databases"
  - "you"
  - "embedded"
  - "use"
  - "php"
  - "have"
  - "architecture"
  - "client-server"
  - "its"
  - "same"
  - "machine"
---

# Relational Databases

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 103-105 | printed pages 103-105

Related sections: [Client-Server Databases](4-3-client-server-databases.md), [Embedded Databases](4-2-embedded-databases.md), [Understanding Relational Databases](4-7-understanding-relational-databases.md), [Database Models](4-4-database-models.md), [Deleting Tables from Databases Using The DROP TABLE Statement](4-16-deleting-tables-from-databases-using-the-drop-table-statement.md), [Simple Databases](4-5-simple-databases.md)

## Extracted Text

```text
[PDF page 103; printed page 103]
   •   The concept of relational databases and how data is organized within them.

   •   How to configure MySQL, a widely used and free database system, to work with
       PHP.

By the end of this chapter, you'll have a basic understanding of how to use databases in
your PHP applications, setting you up for more advanced work in future projects.




4.1 Database Architecture



Before you get going, you need to settle on a particular database with which to
experiment, and that means first deciding on the type of database architecture you are
going to use. Broadly speaking, you have two main options: embedded and client-server.
Let us take a brief look at both.




                                            103

[PDF page 104; printed page 104]
4.2 Embedded Databases



An embedded database engine, as the name suggests, operates within the application
that uses it (in this case, PHP). It runs and stores its data on the same machine as the host
application. The key feature of an embedded database is that it is not networked,
meaning it can only be accessed by one program at a time. As a result, the data cannot
be shared between multiple machines, and each machine would have its own separate
version of the data.

4.3 Client-Server Databases



Client-server databases are more powerful and flexible than embedded databases. They
are typically designed for use over networks, allowing multiple applications on different
machines to simultaneously access and manipulate the same data. In this setup, the
database engine acts as a server, providing data to its clients (like how web servers serve
pages to web browsers). It can handle requests from virtually anywhere, if there is a
network connection and the appropriate client software. However, it's also common for
both the server and client to run on the same machine in some cases. This type of
database is typically found in larger organizations, where large amounts of data need to
be shared across many users and accessed from various locations. The centralized nature
of the database makes tasks like administration and backups more manageable.
Applications that interact with the database rely on specialized, lightweight client
programs to communicate with the server.



4.4 Database Models


As well as considering the architecture of the database system, it is important to think
about the database model you want to use. The database model defines how data is

                                            104

[PDF page 105; printed page 105]
stored, organized, and accessed. There are many different database models in use today,
but in this section, we will focus on two common ones: the simple database model and
the relational database model.




4.5 Simple Databases



Simple database engines, as the name suggests, are among the easiest to work with. The
simple database model is essentially like an associative array of data, where each item is
referenced by a unique key. There are no relationships between the data items in the
database, meaning the structure is very straightforward. For smaller applications, the
simple database model can offer significant advantages. For instance, if your primary
need is to quickly look up data based on keys, simple databases can be extremely fast and
efficient.

4.6 Relational Databases



Relational databases offer significantly more power and flexibility than simple databases,
which is why they are often the preferred choice for many applications. These databases,
also known as RDBMSs (Relational Database Management Systems), are designed to
manage and store data in a structured way, allowing for relationships between different
data sets. This chapter will focus primarily on RDBMSs.




While RDBMSs provide advanced capabilities, they can also be expensive and complex to
set up and administer. The three most well-known RDBMSs are Oracle, DB2 (from IBM),
and SQL Server (from Microsoft). These systems are feature-rich and capable of handling
nearly any data storage or processing needs a modern business could have. However,
their complexity and high costs may be excessive for many projects, especially smaller

                                           105
```
