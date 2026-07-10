---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "133-133"
printed_pages: "133-133"
section: "Client/Server Tiers:"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "server"
  - "client"
  - "design"
  - "two-tier"
  - "tiers"
  - "designs"
  - "called"
  - "user"
  - "interface"
  - "stored"
  - "logic"
  - "can"
---

# Client/Server Tiers:

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 133-133 | printed pages 133-133

Related sections: [Client-Server Databases](../../internet-programming-622-study-guide/sections/4-3-client-server-databases.md), [CLIENT/SERVER ARCHITECTURE](4-3-client-server-architecture.md), [CLIENT/SERVER ARCHITECTURE](4-3-client-server-architecture-2.md), [Performance Issues](4-3-5-performance-issues.md), [GUIDELINES FOR USER INTERFACE DESIGN](2-4-guidelines-for-user-interface-design.md), [SUMMARY](2-10-summary.md)

## Extracted Text

```text
[PDF page 133; printed page 133]
4.3.2 Client/Server Tiers:

6. Early client/server designs were called two-tier designs. In a two-tier design, the user
   interface resides on the client, the data is stored on the server, and the application
   logic can be distributed between the client and server.
7. A more popular design today is the three-tier design, where the user interface remains
   on the client, and the data is stored on the server, similar to the two-tier model.
   However, a middle layer is added between the client and server, responsible for
   processing client requests and translating them into data access commands that the
   server can execute. This middle layer is often called an application server as it houses
   the business logic required by the system. A three-tier design may also be referred to
   as a multi-tier design, especially when there are multiple intermediate layers involved.




                             (Tilley and Rosenblatt, 2024)
```
