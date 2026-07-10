---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "164-168"
printed_pages: "164-168"
section: "Structure Charts"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "decision"
  - "diagrams"
  - "figure"
  - "tools"
  - "logic"
  - "modules"
  - "flowcharts"
  - "can"
  - "pseudocode"
  - "language"
  - "erds"
  - "used"
---

# Structure Charts

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 164-168 | printed pages 164-168

Related sections: [Drawing a Structure Chart](5-3-3-drawing-a-structure-chart.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Data Quality and Accuracy](../../big-data-iot-600-study-guide/sections/111-data-quality-and-accuracy.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Use of Data for Unintended Purposes](../../big-data-iot-600-study-guide/sections/124-use-of-data-for-unintended-purposes.md), [SUMMARY](5-10-summary.md)

## Extracted Text

```text
[PDF page 164; printed page 164]
Data Flow Diagrams (DFDs) and structure charts. OO methods utilize various Unified Modeling
Language (UML) diagrams, including use case, class, sequence, and state transition diagrams.
Agile methods typically use spiral or other iterative models like the one shown in Figure 11-6.

[PDF page 165; printed page 165]
                                 (Tilley and Rosenblatt, 2024)

In addition to methodology-specific tools, developers also have access to multipurpose tools
that help translate system logic into functioning program modules. These generic tools
include:

ENTITY-RELATIONSHIP DIAGRAMS (ERDs)

During data design (Chapter 9), ERDs were discussed as a way to show how system entities
and objects interact. ERDs are useful regardless of the methodology employed, as they help
map out the relationships between entities (such as one-to-one, one-to-many, and many-to-
many), which must be implemented in the application development process.

FLOWCHARTS

As discussed in Chapter 5, flowcharts are useful for representing program logic and are
especially helpful in visualizing modular design. Flowcharts graphically depict logical rules and
interactions, using symbols connected by arrows. By using flowcharts, developers can break
large systems into smaller subsystems and modules that are easier to understand and code.

PSEUDOCODE

Pseudocode is a technique used to represent program logic in a simple and structured form
of English. Unlike programming languages, pseudocode is not language-specific, allowing it to
describe program actions in plain language without requiring strict syntax. This tool allows
both systems analysts and programmers to describe software modules that can be
implemented in any programming language. Figure 11-7 provides an example of pseudocode
for a sales promotion policy.

DECISION TABLES AND DECISION TREES

As explained in Chapter 5, decision tables and decision trees can be used to model the
business logic of an information system. In addition to serving as modeling tools, decision
tables and decision trees can be used during the system development process as code

[PDF page 166; printed page 166]
modules that implement the logical rules. Figure 11-8 shows an example of a decision tree
that documents the sales promotion policy shown in Figure 11-7. The decision tree accurately
reflects the sales promotion policy, which contains three separate conditions and four
possible outcomes.




                                 (Tilley and Rosenblatt, 2024)

5.3 STRUCTURED DEVELOPMENT

Structured application development typically follows a top-down approach, which begins
with a general design and progresses to a more detailed structure. After a systems analyst
documents the system’s requirements, they break the system down into subsystems and
modules in a process called partitioning. This approach, also referred to as modular design, is
similar to constructing a hierarchical set of Data Flow Diagrams (DFDs). By assigning modules
to different programmers, multiple areas of development can progress simultaneously. As
discussed in Chapter 3, project management software can help monitor work on each
module, estimate overall development time, forecast the required human and technical
resources, and calculate a critical path for the project.

Since all the modules must function together correctly, the analyst must proceed carefully,
with continuous input from programmers and IT management to ensure a solid, well-

[PDF page 167; printed page 167]
integrated structure. The analyst also needs to make sure that integration capability is built
into each design and thoroughly tested.

5.3.3 Structure Charts

Structure charts illustrate the program modules and their relationships. A structure chart
consists of rectangles that represent program modules, along with arrows and other symbols
that provide additional information. Generally, a higher-level module, known as a control
module, oversees lower-level modules, which are referred to as subordinate modules. The
structure chart uses symbols to represent various actions or conditions.

   •   MODULE: A rectangle symbolizes a module, as shown in Figure 11-9. In this figure,
       vertical lines at the edges of the rectangle indicate that module 1.3 is a library module.
       A library module contains reusable code that can be invoked from multiple points
       within the chart.
   •   DATA COUPLE: An arrow with an empty circle represents a data couple. A data couple
       indicates the data passed from one module to another. For example, in Figure 11-10,
       the "Look Up Customer Name" module exchanges data with the "Maintain Customer
       Data" module via a data couple.




CONTROL COUPLE: An arrow with a filled circle represents a control couple. A control couple
conveys a message, also known as a status flag, from one module to another. In the example
shown in Figure 11-11, the "Update Customer File" module sends an "Account Overdue" flag
back to the "Maintain Customer Data" module. The purpose of this flag is to signal a specific
condition or action that another module should respond to. Control couples are useful for
indicating when certain conditions are met or when certain actions need to be taken in the
system.

[PDF page 168; printed page 168]
                                (Tilley and Rosenblatt, 2024)


CONDITION: A line with a diamond shape at one end represents a condition. This line indicates
that a control module decides which subordinate modules will be triggered based on a specific
condition. In the example shown in Figure 11-12, "Sort Inventory Part" is a control module
that uses a condition line to determine which of the three subordinate modules to invoke,
depending on the condition. The condition line helps manage decision-making within the
structure, ensuring that the correct module is executed based on certain criteria.




                                (Tilley and Rosenblatt, 2024)


LOOP: A curved arrow represents a loop. A loop signifies that one or more modules are
executed repeatedly. In the example shown in Figure 11-13, the "Get Student Grades" and
"Calculate GPA" modules are repeated as part of the loop. The loop allows for repetitive
execution of certain processes, such as processing multiple records or performing iterative
calculations until a specific condition is met.
```
