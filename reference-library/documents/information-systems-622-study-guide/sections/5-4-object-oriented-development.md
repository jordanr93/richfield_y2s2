---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "173-174"
printed_pages: "173-174"
section: "OBJECT-ORIENTED DEVELOPMENT"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "objects"
  - "object-oriented"
  - "design"
  - "object"
  - "customer"
  - "such"
  - "methods"
  - "interactions"
  - "diagrams"
  - "ooa"
  - "relationships"
  - "structure"
---

# OBJECT-ORIENTED DEVELOPMENT

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 173-174 | printed pages 173-174

Related sections: [Implementation of Object-Oriented Designs](5-4-2-implementation-of-object-oriented-designs.md), [Object-Oriented Cohesion and Coupling](5-4-3-object-oriented-cohesion-and-coupling.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md), [Application Development Tasks](5-2-2-application-development-tasks.md), [SUMMARY](5-10-summary.md), [Software Development Phase](../../programming-622-study-guide/sections/1-2-software-development-phase.md)

## Extracted Text

```text
[PDF page 173; printed page 173]
5.4 OBJECT-ORIENTED DEVELOPMENT

Object-Oriented Development (OOD) is a methodology that builds on the principles of object-
oriented analysis (OOA). As discussed in Chapter 6, OOA focuses on organizing the system
into objects that contain both data and methods (program logic). When implementing an
object-oriented design, the relationships and interactions between these objects are already
defined, unlike in structured design where a structure chart is used to describe the interaction
between program modules. In OOD, the object model itself represents the structure of the
application.

In object-oriented design, classes are used to group similar objects together. Each class
contains attributes, which define the characteristics of the objects, and methods, which
define the behavior or actions that the objects can perform. For example, the Customer class
might have attributes like Number, Name, and Address, as well as methods such as
PlaceOrder, ModifyOrder, and PayInvoice. The interactions between these classes are
represented using class diagrams, which also show how different classes, like Customer and
Order, communicate with each other.

This design approach offers a more natural mapping to real-world systems, and the object
interactions defined during the OOA phase simplify the translation into a programming
language. The relationships between objects are well-defined, enabling a clearer and more
maintainable structure than traditional modular design methods.

[PDF page 174; printed page 174]
                                (Tilley and Rosenblatt, 2024)



In addition to class diagrams, object-oriented development often involves using object
relationship diagrams to provide a clear overview of object interactions. These diagrams were
created during the object-oriented analysis phase and help to visually represent how objects
within the system interact to carry out business functions and processes.

For example, an object relationship diagram for a fitness center might illustrate different
objects, such as Customer, Membership, Trainer, Workout, and Payment. These objects would
interact with one another to support processes such as membership sign-ups, workout
scheduling, payment processing, and tracking customer progress.

In such a diagram, the relationships between objects, such as Customer interacting with
Membership to register or Trainer interacting with Workout to create a training plan, are
clearly shown. This diagram helps developers understand the overall flow of information and
actions within the system, ensuring that object interactions are well-structured and aligned
with the business goals.
```
