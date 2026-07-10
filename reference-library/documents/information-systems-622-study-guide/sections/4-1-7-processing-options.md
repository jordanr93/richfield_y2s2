---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "123-126"
printed_pages: "123-126"
section: "Processing Options"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "companies"
  - "erp"
  - "bikes"
  - "both"
  - "processing"
  - "organization"
  - "its"
  - "architecture"
  - "software"
  - "order"
  - "options"
  - "corporate"
---

# Processing Options

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 123-126 | printed pages 123-126

Related sections: [Corporate Portals](4-1-9-corporate-portals.md), [Web Integration](4-1-5-web-integration.md), [ARCHITECTURE CHECKLIST](4-1-architecture-checklist.md), [IN-HOUSE SOFTWARE DEVELOPMENT OPTIONS](1-3-in-house-software-development-options.md), [Assess Data Processing Performance](../../big-data-iot-600-study-guide/sections/128-assess-data-processing-performance.md), [Big Data Storage Solutions](../../big-data-iot-600-study-guide/sections/4-4-big-data-storage-solutions.md)

## Extracted Text

```text
[PDF page 123; printed page 123]
   •     Processing options

[PDF page 124; printed page 124]
   •   Security concerns
   •   Corporate portals

Corporate Organization and Culture

An information system needs to fit well within a company’s organization and culture to be
successful. For instance, consider two large bicycle brands: Green Bikes and Blue Bikes. Both
companies operate across three divisions: a manufacturing unit in Asia, a bike accessory and
clothing factory in Los Angeles, and a Canadian plant for bike carriers and custom trailers.
Although the companies appear similar, their organizational cultures differ. Green Bikes is
highly centralized, managing daily operations from its Los Angeles office, whereas Blue Bikes
allows its divisions to operate independently with minimal oversight.

If both companies sought advice from a consultant about an IT architecture to enhance
productivity and reduce costs, the consultant would have to consider how the companies'
organizational structures and cultures influence the architecture recommendation. The best
approach would likely involve studying daily business functions, engaging with users at all
levels, and addressing operational feasibility, much like earlier stages in the development
process.

Enterprise Resource Planning (ERP)

ERP software helps companies implement a unified IT strategy across the organization, with
specific guidelines for architecture, data standards, processing, networking, and user
interfaces. The key benefit of ERP is its ability to define a platform, consisting of both
hardware and software, that ensures easy connectivity and integration with future systems,
including both internal software and third-party applications.

Many companies are extending their ERP systems to suppliers and customers through supply
chain management (SCM). In a fully integrated supply chain, a customer order might
automatically trigger a work order in the manufacturing system, which then prompts an order
for more parts from suppliers. In competitive and dynamic markets, SCM allows businesses
to respond more quickly, improve customer service, and reduce costs.

Oracle, for example, provides ERP solutions as cloud-based services. These services support
employee collaboration, mobile access to information, and data analytics to gain insights into
business processes.

[PDF page 125; printed page 125]
                                 (Tilley and Rosenblatt, 2024)
4.1.3 Initial Cost and TCO

Considering economic feasibility and Total Cost of Ownership (TCO) during the system
planning and analysis phase is crucial. TCO includes both hard costs (tangible expenses like
purchases, fees, and contracts) and soft costs (such as management, support, training, and
downtime), which are often harder to measure but just as significant.

A TCO analysis should address the following questions:

   •   Is in-house development still the best option? Are the necessary technical skills
       available, and does the initial cost estimate still seem realistic?
   •   If a specific package was selected earlier, is it still the best choice? Are newer versions
       or competing products available, and have there been any changes in pricing or
       support?
   •   Are there new outsourcing options?
   •   Have any economic, governmental, or regulatory changes occurred that could impact
       the project?
   •   Have any technical advancements occurred that could influence the project?
   •   Have any major assumptions changed since the company made the "build versus buy"
       decision?
   •   Are there merger or acquisition considerations that might require compatibility with
       a specific environment?
   •   Have any new trends emerged in the marketplace? Are new products or technologies
       about to be introduced?
   •   Have the original TCO estimates been updated? Are there significant differences?

[PDF page 126; printed page 126]
The answers to these questions might alter the initial cost and TCO, and the system’s
requirements and alternatives should be reviewed before moving forward with the system
architecture design.

4.1.4 Scalability

Scalability, or extensibility, refers to a system's ability to expand, change, or downsize to meet
a business’s evolving needs. It's especially important in systems like transaction processing
systems, which must be capable of handling increasing volumes over time. A scalable
network, for instance, should support anywhere from a few nodes to thousands of them,
while a scalable Database Management System (DBMS) should handle the addition of new
business divisions or data volumes. Scalability is a key consideration when investing heavily in
a project, as management is concerned about the system’s long-term viability and
adaptability.

4.1.5 Web Integration

Information systems often include applications that manage input, processing logic, and
output. A systems analyst must assess whether a new application will be part of an e-
commerce strategy and how it integrates with other web-based components. Web-centric
architecture follows internet design protocols, allowing seamless integration into an e-
commerce strategy. Even if e-commerce is not involved, a web-based application can still
operate on the internet or a company’s intranet or extranet, avoiding many connectivity and
compatibility issues that arise with different hardware environments. In a web-based
environment, external business partners can easily exchange data using standard web
browsers.

4.1.6 Legacy Systems

When a new system is introduced, it might need to interface with existing legacy systems,
which are older but still functional. For example, a new marketing system might need to send
sales data to an accounting system or retrieve product cost data from a legacy manufacturing
system. Interfacing new systems with legacy systems involves analyzing data formats and
ensuring compatibility. In some cases, legacy data may need to be converted, a process that
can be both costly and time-consuming. Middleware can sometimes be used to facilitate
communication between new and legacy systems. It's also important to determine whether
the new application will eventually replace the legacy system or coexist with it.

4.1.7 Processing Options

During system architecture planning, one of the key considerations is how data will be
processed: online or in batches. For example, transaction processing systems that handle
large volumes of orders will require more network capacity, processing power, and storage
than a monthly billing system that processes data in batches. If the system is required to
operate online 24/7, provisions for backup and quick recovery in case of failure are essential.
The characteristics of both online and batch processing methods, along with examples of
each, are further discussed later in this chapter.
```
