---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "131-132"
printed_pages: "131-132"
section: "CLIENT/SERVER ARCHITECTURE"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "server"
  - "client"
  - "architecture"
  - "processing"
  - "request"
  - "computing"
  - "today"
  - "clients"
  - "setup"
  - "tasks"
  - "access"
  - "interaction"
---

# CLIENT/SERVER ARCHITECTURE

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 131-132 | printed pages 131-132

Related sections: [CLIENT/SERVER ARCHITECTURE](4-3-client-server-architecture.md), [Client-Server Databases](../../internet-programming-622-study-guide/sections/4-3-client-server-databases.md), [Client/Server Tiers:](4-3-2-client-server-tiers.md), [Mainframe Architecture](4-2-1-mainframe-architecture.md), [Hadoop architecture](../../big-data-iot-600-study-guide/sections/4-3-hadoop-architecture.md), [Layer Architecture of Internet of Things](../../big-data-iot-600-study-guide/sections/2-3-layer-architecture-of-internet-of-things.md)

## Extracted Text

```text
[PDF page 131; printed page 131]
4.3 CLIENT/SERVER ARCHITECTURE

Client/server architecture is a distributed computing model commonly used today in
interconnected systems. It divides processing responsibilities between one or more clients
and a central server. In this setup, the client is responsible for handling the user interface,
which includes tasks like data entry, querying, and displaying information. The server, on the
other hand, stores the data and manages database access.

In a typical client/server interaction, the client sends a request for data or a service, and the
server processes that request before sending the result back to the client. Importantly, the
actual data file remains on the server; only the request and response are transmitted over
the network. The server may even contact other servers to gather the necessary data or
processing power, though this interaction is invisible to the client.




                                 (Tilley and Rosenblatt, 2024)



Figure 10-7 highlights key differences between client/server and traditional mainframe
systems. Early client/server systems did not always yield the expected savings, primarily due
to the lack of clear standards at the time. Moreover, the development costs were often higher
than anticipated. The implementation process was also expensive, as the client machines
required powerful hardware and software to handle the processing tasks shared with the
server.

Additionally, many companies had legacy data—older data stored in legacy systems—that
was challenging to access and migrate into a client/server setup. This further complicated the
transition and implementation of client/server systems, making them less cost-effective in
some cases.

[PDF page 132; printed page 132]
                                (Tilley and Rosenblatt, 2024)



   4.3 CLIENT/SERVER ARCHITECTURE

   1. As large-scale networks grew more powerful, client/server systems became
      increasingly cost-effective. Many companies adopted client/server systems to
      leverage a unique combination of computing power, flexibility, and support for
      evolving business operations. Today, client/server architecture remains a popular
      choice in system design, especially as it incorporates Internet protocols and network
      models discussed later in this chapter.
   2. With the rise of business alliances and collaboration with customers and suppliers, the
      client/server concept has expanded to include clients and servers beyond
      organizational boundaries. Service-Oriented Architecture (SOA) exemplifies this
      expansion, where a service can act as both a client and a server simultaneously, even
      existing outside of corporate networks. Some view cloud computing as a completely
      new concept, while others see it as the evolution of client/server architecture. In cloud
      computing, the Internet-based platform handles processing tasks, serving as the
      server while replacing traditional network infrastructures. Regardless of its
      classification, the key takeaway is that successful systems must support business
      requirements, and system architecture remains a crucial aspect of the development
      process.

4.3.1 The Client's Role:
```
