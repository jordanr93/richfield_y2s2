---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "135-135"
printed_pages: "135-135"
section: "Performance Issues"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "server"
  - "performance"
  - "client"
  - "clients"
  - "design"
  - "network"
  - "when"
  - "can"
  - "stored"
  - "ddbms"
  - "issues"
  - "architecture"
---

# Performance Issues

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 135-135 | printed pages 135-135

Related sections: [Cost-Benefit Issues](4-3-4-cost-benefit-issues.md), [Client/Server Tiers:](4-3-2-client-server-tiers.md), [Performance and Workload Measurement](6-4-2-performance-and-workload-measurement.md), [Security Issues](4-1-8-security-issues.md), [Assess Data Processing Performance](../../big-data-iot-600-study-guide/sections/128-assess-data-processing-performance.md), [Techniques for Resolving IoT Security Issues](../../big-data-iot-600-study-guide/sections/2-5-4-techniques-for-resolving-iot-security-issues.md)

## Extracted Text

```text
[PDF page 135; printed page 135]
4.3.5 Performance Issues

Although client/server architecture has several advantages, it also comes with performance
challenges due to the separation of server-based data and networked clients that access the
data.

In a centralized environment, a server-based program sends commands executed by the
server's CPU. Processing speed is enhanced because both the data and program instructions
travel on an internal system bus, which is more efficient than external networks. In contrast,
a client/server design separates applications from data. Clients submit data requests to the
server, which sends the data back. As the number of clients and demand for services increase,
the network’s capacity becomes a limiting factor, causing system performance to decline.

According to IBM, client/server systems have different performance characteristics from
centralized systems. Response times in client/server systems increase gradually as more
requests are made, but then rise sharply when the system nears its capacity. This point,
known as the "knee of the curve," marks a dramatic drop in speed and efficiency. To maintain
acceptable performance, developers must anticipate the number of users, network traffic,
server size and location, and design a system that supports both current and future needs.

To optimize performance, client/server systems must be designed so that clients only contact
the server when necessary and minimize communication trips. This is one goal of the HTTP/2
protocol used between servers and web browsers.

Another factor affecting client/server performance is data storage. Just as processing can
occur at different locations, data can be stored in multiple places through a distributed
database management system (DDBMS). Using a DDBMS offers several advantages, such as
reducing network traffic by storing data closer to users, scalability (allowing new data sites to
be added without reworking the system), and increased fault tolerance due to data being
stored in multiple locations. However, data security can become a challenge when data is
stored in various places, as it is harder to enforce controls and standards. Additionally, the
architecture of a DDBMS is more complex and difficult to manage. From a design perspective,
companies often desire the control of centralization and the flexibility of decentralization.
```
