---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "170-172"
printed_pages: "170-172"
section: "Drawing a Structure Chart"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "structure"
  - "dfds"
  - "chart"
  - "modules"
  - "couples"
  - "identify"
  - "loops"
  - "object"
  - "control"
  - "step"
  - "diagrams"
  - "used"
---

# Drawing a Structure Chart

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 170-172 | printed pages 170-172

Related sections: [Structure Charts](5-3-1-structure-charts.md), [Key Components of a Big Data Strategy](../../big-data-iot-600-study-guide/sections/5-2-key-components-of-a-big-data-strategy.md), [Foster a Culture of Continuous Improvement](../../big-data-iot-600-study-guide/sections/136-foster-a-culture-of-continuous-improvement.md), [Drawing an ERD](3-5-1-drawing-an-erd.md), [OBJECT-ORIENTED DEVELOPMENT](5-4-object-oriented-development.md), [SUMMARY](5-10-summary.md)

## Extracted Text

```text
[PDF page 170; printed page 170]
5.3.3 Drawing a Structure Chart


If a structured analysis method was used during system design, the structure charts will be
based on the DFDs created during data and process modeling.

Typically, three steps are followed when creating a structure chart:

   1. Review DFDs: Identify the processes and methods.

   2. Identify Program Modules: Determine control-subordinate relationships.

   3. Add Symbols for Couples and Loops: Include the necessary symbols to represent data
      and control couples, as well as loops.

[PDF page 171; printed page 171]
                                 (Tilley and Rosenblatt, 2024)


STEP 1. REVIEW THE DFDs: The first step is to review all DFDs (Data Flow Diagrams) for
accuracy and completeness, especially if changes have occurred since the systems analysis
phase. If object models were also developed, they should be analyzed to identify the objects,
the methods that each object must perform, and the relationships among the objects. A
method is similar to a functional primitive and requires code to implement the necessary
actions.

STEP 2. IDENTIFY MODULES AND RELATIONSHIPS: Working from the logical model,
functional primitives or object methods are transformed into program modules. When
analyzing a set of DFDs, remember that each DFD level represents a processing level. If DFDs
are being used, one works way down from the context diagram to the lower-level diagrams,
identifying control modules and subordinate modules until the functional primitives are
reached. If more cohesion is desired, processes can be divided into smaller modules that
handle a single task. Figure 11-16 shows a structure chart based on the order system from
Chapter 5. Note how the three-level structure chart relates to the three DFD levels.

STEP 3. ADD COUPLES, LOOPS, AND CONDITIONS: Next, couples, loops, and conditions are
added to the structure chart. If DFDs are being used, the data flows and the data dictionary
can be reviewed to identify the data elements that pass from one module to another. In
addition to adding the data couples, control couples are added where a module is sending a
control parameter, or flag, to another module. Loops and condition lines that indicate
repetitive or alternative processing steps are also added, as shown in Figure 11-16. If an object
model was developed, the class diagrams and object relationship diagrams can be reviewed
to ensure that the interaction among the objects is fully understood.
```
