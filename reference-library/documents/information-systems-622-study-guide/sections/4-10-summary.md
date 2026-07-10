---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "153-156"
printed_pages: "153-156"
section: "SUMMARY"
chapter: "4. 9 SYSTEMS DESIGN COMPLETION"
keywords:
  - "design"
  - "user"
  - "approval"
  - "phase"
  - "including"
  - "costs"
  - "processing"
  - "requirements"
  - "project"
  - "implementation"
  - "detailed"
  - "interface"
---

# SUMMARY

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 153-156 | printed pages 153-156

Related sections: [System Design Specification](4-9-1-system-design-specification.md), [SUMMARY](2-10-summary.md), [HUMAN-COMPUTER INTERACTION](2-2-human-computer-interaction.md), [Software Development Phase](../../programming-622-study-guide/sections/1-2-software-development-phase.md), [Summary](../../big-data-iot-600-study-guide/sections/48-summary.md), [Summary](../../big-data-iot-600-study-guide/sections/5-8-summary.md)

## Extracted Text

```text
[PDF page 153; printed page 153]
   1. Management Summary: A brief overview for managers and executives, including the
      project’s current status, costs, benefits, implementation schedule, and key issues
      requiring attention.
   2. System Components: A detailed description of the system design, including the user
      interface, inputs, outputs, files, databases, network specifications, and any necessary
      support processing such as backup and recovery.
   3. System Environment: The section describing constraints and conditions affecting the
      system, such as transaction volumes, data storage needs, processing schedules, and
      reporting deadlines.
   4. Implementation Requirements: Specifications for setup processing, initial data entry,
      user training requirements, and software test plans.
   5. Time and Cost Estimates: Detailed schedules, cost estimates, and staffing needs for
      system development, as well as comparisons of projected costs versus actual
      expenditures.
   6. Additional Material: Any other relevant documentation from previous phases that
      might assist in the review and understanding of the design.

[PDF page 154; printed page 154]
4.9.2 User Approval
User approval is crucial throughout the systems design phase. Users must review and
approve the interface design, reports, menus, data entry screens, and other elements
affecting their interaction with the system. This approval process continues throughout the
design phase, with the systems analyst meeting with users to review prototypes, make
necessary adjustments, and obtain written approval. Securing user approval early ensures
that the project stays on track and meets user expectations, while also providing valuable
feedback about the system's design.

IT department members, including management, programmers, and the operations group,
also need to review the system design specification. They will be concerned with staffing,
costs, hardware/software requirements, network impacts, and other operational
considerations. Clear communication from the systems analyst ensures that all stakeholders
are informed, their input is considered, and approvals are obtained efficiently.

Once the system design specification is completed, it should be distributed to all relevant
stakeholders, allowing at least one week for review before the presentation.



4.9.3 Presentations


The presentation phase marks the end of the systems design phase. Several presentations
are typically conducted to explain the system, address questions, gather feedback, and obtain
final approval.

   1. First Presentation: Presented to the technical team, including systems analysts,
      programmers, and technical support staff. This presentation is focused on technical
      details and prepares the team for the next phases of the project.
   2. Second Presentation: Directed at department managers and users from affected
      departments. The goal is to gain support and approval from those who will be using
      the system and those responsible for overseeing its implementation. This presentation
      emphasizes the impact on the user experience and operational aspects of the system.
   3. Final Presentation: Given to company management, this presentation aims to secure
      management's approval and support for moving forward with the next SDLC phase—
      systems implementation. By this point, all necessary approvals should have been
      secured from users and IT, and the management presentation focuses on obtaining a
      commitment for the resources required for implementation.

[PDF page 155; printed page 155]
4.10 SUMMARY


An information system integrates hardware, software, data, procedures, and people into an
architecture that transforms the system's logical design into a physical structure. This
structure includes all necessary hardware, software, and processing methods. The software
includes application programs that handle input, manage processing logic, and produce the
required output.

When selecting a system architecture, analysts must consider factors such as ERP, initial costs,
total cost of ownership (TCO), scalability, web integration, legacy system interfaces,
processing options, security, and corporate portals. ERP establishes a company-wide IT
strategy, defining standards for data, processing, networks, and user interface design.
Companies can extend ERP systems to suppliers and customers via Supply Chain Management
(SCM). A systems analyst should assess costs and ensure the system is scalable—able to be
expanded, modified, or downsized easily to meet business demands. Analysts must also
consider whether the system should be web-based, follow internet protocols, and interface
with legacy systems. Security is a major concern, especially for e-commerce applications
handling sensitive data. Processing methods influence system design and the resources
required, while corporate portals offer a gateway for various stakeholders to access different
services.

System architecture relies on servers and clients. Servers provide data and processing services
to clients. In mainframe architecture, the server handles all processing, and terminals
communicate with the centralized system. Clients can connect to distributed systems forming
local or wide area networks (LANs or WANs). Client/server architecture distributes processing
between clients and a central server. Typically, the client manages the user interface (input,
queries, and screen display), while the server stores data and handles database management.
Application logic is distributed between the client and server. Clients request information
from the server, which performs the necessary operation and returns the result. Client/server
systems are more scalable and flexible compared to file server designs.

[PDF page 156; printed page 156]
A fat (or thick) client design places most application processing at the client side, while a thin
client design shifts most processing to the server. Fat clients may incur higher TCO due to
hardware and software needs, plus maintenance costs, but are simpler to develop. Thin
clients have a central server that handles most processing.

Client/server systems can be two-tier or three-tier. In a two-tier design, the client handles the
user interface, and the server stores data. Application logic can be on either the client or
server. In a three-tier design, the client handles the user interface, and the server stores data,
with an additional middle layer, known as the application server, that processes client
requests and converts them into commands for the server. Middleware connects different
applications and enables them to share data. When designing a system, analysts also need to
consider cost-benefit and performance issues.

The internet has significantly influenced system architecture. Analysts must consider e-
commerce architecture, packaged solutions, and service providers when implementing
designs. Concepts such as cloud computing and Web 2.0 are shaping the future of internet
computing. Cloud computing uses remote servers for processing, and Web 2.0 promotes
dynamic interaction and collaboration online, contributing to the growth of social networking
and group communication.

The primary method for processing today is online processing, where users interact with
systems that process transactions in real-time. Batch systems, on the other hand, process
transactions in scheduled groups. Many online systems also use batch processing for tasks
like reporting and accounting.

Networks enable sharing of hardware, software, and data to reduce costs and enhance user
capabilities. The OSI model, a seven-layer framework, represents how networks function.
Network configurations (topologies) include hierarchical, bus, ring, star, and mesh designs.
Wireless networks (WLANs), based on IEEE 802.11 standards, have become widely popular
for their flexibility. However, wireless networks can face issues such as interference and
security concerns.

A system design specification outlines the complete system architecture and serves as the
foundation for final presentations at the end of the design phase. After these presentations,
the project may move to the system development phase, require more design work, or be
canceled.
```
