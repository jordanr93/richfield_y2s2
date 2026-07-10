---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "104-104"
printed_pages: "104-104"
section: "Client-Server Databases"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "database"
  - "databases"
  - "client-server"
  - "server"
  - "client"
  - "typically"
  - "use"
  - "same"
  - "like"
  - "web"
  - "model"
  - "internet"
---

# Client-Server Databases

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 104-104 | printed pages 104-104

Related sections: [CLIENT/SERVER ARCHITECTURE](../../information-systems-622-study-guide/sections/4-3-client-server-architecture.md), [CLIENT/SERVER ARCHITECTURE](../../information-systems-622-study-guide/sections/4-3-client-server-architecture-2.md), [Client/Server Tiers:](../../information-systems-622-study-guide/sections/4-3-2-client-server-tiers.md), [Relational Databases](4-6-relational-databases.md), [Embedded Databases](4-2-embedded-databases.md), [Simple Databases](4-5-simple-databases.md)

## Extracted Text

```text
[PDF page 104; printed page 104]
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
