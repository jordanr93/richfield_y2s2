---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "102-104"
printed_pages: "102-104"
section: "Database Models"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "you"
  - "database"
  - "databases"
  - "php"
  - "files"
  - "use"
  - "they"
  - "need"
  - "when"
  - "your"
  - "will"
  - "work"
---

# Database Models

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 102-104 | printed pages 102-104

Related sections: [Introduction](4-0-introduction.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md), [Interfaces for Users, Database Administrators, and Related Systems](../../information-systems-622-study-guide/sections/3-2-1-interfaces-for-users-database-administrators-and-related-systems.md), [Creating A New Database](4-10-creating-a-new-database.md), [Database Architecture](4-1-database-architecture.md), [Relational Databases](4-6-relational-databases.md)

## Extracted Text

```text
[PDF page 102; printed page 102]
                    available database models are laying particular emphasis on
                    what a Relational Database System is.
                •   Write and use complex SQL statements to query a database for
                    the required output.
                •   Manipulate tables in a database.
                •   INSERT, UPDATE and DELETE records in any table within a
                    database




4.0 Introduction


In the previous chapter, you learned how to use external files in PHP to store and
retrieve data. While files are useful in many cases, they have limitations as data storage
solutions. For instance, if you need to filter or sort the data from a file, you must write
custom PHP code to handle these tasks. This becomes tedious and inefficient, especially
when dealing with large data sets, such as hundreds of thousands of user records. When
this happens, your script could slow down significantly, which is far from ideal when
you're building a popular website.

Databases were specifically designed to overcome these challenges. With their ability to
organize and manage large amounts of data efficiently, they function like well-managed
lending libraries, but with superhero-like capabilities. Instead of searching through




                                             102

[PDF page 103; printed page 103]
endless rows of files, you can simply enter a word or phrase in a search field or
command line, and the information you need appears almost instantly.

In this chapter, you will explore how databases work and learn how to integrate them
into your PHP applications. You will focus on the essential operations of selecting,
inserting, updating, and deleting data. The goal is to give you a solid foundation for
working with databases in PHP. Specifically, this chapter will cover:

   •   The advantages of using databases over files for data storage, particularly in
       terms of performance and flexibility.

   •   An introduction to some of the most popular databases, including MySQL, and
       how they differ from one another.

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
```
