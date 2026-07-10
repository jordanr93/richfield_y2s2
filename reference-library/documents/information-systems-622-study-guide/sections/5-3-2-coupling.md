---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "169-169"
printed_pages: "169-169"
section: "Coupling"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "cohesion"
  - "cohesive"
  - "customer"
  - "coupling"
  - "single"
  - "task"
  - "number"
  - "check"
  - "desirable"
  - "modules"
  - "named"
  - "than"
---

# Coupling

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 169-169 | printed pages 169-169

Related sections: [Cohesion and Coupling](5-3-2-cohesion-and-coupling.md), [Object-Oriented Cohesion and Coupling](5-4-3-object-oriented-cohesion-and-coupling.md), [SUMMARY](5-10-summary.md), [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md), [Data Overload](../../big-data-iot-600-study-guide/sections/112-data-overload.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md)

## Extracted Text

```text
[PDF page 169; printed page 169]
5.3.4 Cohesion and Coupling


Cohesion and coupling are important tools for evaluating the overall design. As explained in
the following sections, it is desirable to have modules that are highly cohesive and loosely
coupled. Otherwise, system maintenance becomes more costly due to difficulties in making
changes to the system's structure.

Cohesion measures a module's scope and processing characteristics. A module that performs
a single function or task has a high degree of cohesion, which is desirable. Because it focuses
on a single task, a cohesive module is much easier to code and reuse. For example, a module
named Verify Customer Number is more cohesive than a module named Calculate and Print
Statements. If the word and is found in a module name, this implies that more than one task
is involved.

If a module must perform multiple tasks, more complex coding is required, and the module
will be more difficult to create and maintain. To make a module more cohesive, split it into
separate units, each with a single function. For example, by splitting the module Check
Customer Number and Credit Limit in Figure 11-14 into two separate modules—Check
Customer Number and Check Customer Credit Limit—cohesion is greatly improved.
```
