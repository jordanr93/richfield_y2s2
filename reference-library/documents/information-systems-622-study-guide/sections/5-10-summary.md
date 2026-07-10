---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "201-203"
printed_pages: "201-203"
section: "SUMMARY"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "testing"
  - "diagrams"
  - "modules"
  - "use"
  - "tools"
  - "design"
  - "structure"
  - "which"
  - "methods"
  - "agile"
  - "cohesion"
  - "coupling"
---

# SUMMARY

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 201-203 | printed pages 201-203

Related sections: [Application Development Tasks](5-2-2-application-development-tasks.md), [OBJECT-ORIENTED DEVELOPMENT](5-4-object-oriented-development.md), [Summary](../../big-data-iot-600-study-guide/sections/48-summary.md), [Summary](../../big-data-iot-600-study-guide/sections/5-8-summary.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [1. I 0 SUMMARY](1-1-i-0-summary.md)

## Extracted Text

```text
[PDF page 201; printed page 201]
5.10 SUMMARY

The system implementation phase involves the application development, testing,
installation, and evaluation of the new system. During this phase, analysts decide on the
overall design strategy and collaborate with programmers to complete the design, coding,
testing, and documentation. Quality assurance (QA) is crucial throughout this process, and
many organizations adhere to software engineering principles and quality standards set by
organizations like ISO.

Different development approaches use various tools. For instance, structured development
heavily relies on Data Flow Diagrams (DFDs) and structure charts, which depict program
modules, data flows, control flows, conditions, and loops. Object-Oriented (OO) methods use
tools such as use case diagrams, class diagrams, sequence diagrams, and state transition
diagrams. Agile methods typically use iterative and incremental models to create the
system.

[PDF page 202; printed page 202]
Generic tools can also aid system developers in translating system logic into working program
modules. These tools include Functional Requirements Documents (FRDs), flowcharts,
pseudocode, decision tables, and decision trees.

Cohesion measures the scope and focus of a module's processing characteristics. A module
with a single, specific function has high cohesion, which is desirable. Coupling measures the
relationship and interdependence between modules. Loosely coupled modules, which are
relatively independent, are also desirable. These concepts of cohesion and coupling apply to
both structured and object-oriented development.

In creating a structure chart, typically, three steps are followed: 1) Review DFDs and object
models to identify processes and methods; 2) Identify program modules and their control-
subordination relationships; and 3) Add symbols for coupling and loops. The structure chart
is then reviewed to ensure consistency with the system documentation.

For agile development, user stories are created by the customer to define the features
required and their priority levels. In agile methodologies, system releases are iterative, and
each release undergoes careful testing by the customer.

During application development, programmers perform tasks like desk checking, code
reviews, and unit testing. Analysts design the initial test plans, including test steps and data
for integration testing and system testing. Integration testing is necessary for programs that
interact with one another, while system testing is the final step, which includes users in the
testing process.

In addition to system documentation, analysts and technical writers prepare operations
documentation for the IT operations team and user documentation for those who will
interact with the system. User documentation includes materials such as manuals, help
screens, and tutorials.

During the installation process, an operational or production environment is created for the
new system, separate from the testing environment. This environment contains live data and
is accessible only to authorized users. All system changes must first be tested in the test
environment before being applied to the operational environment.

System changeover refers to transitioning the new system into operation. There are four
primary changeover methods: direct cutover, parallel operation, pilot operation, and phased
operation. In direct cutover, the old system is shut down, and the new system starts
immediately. This method is cost-effective but risky. Parallel operation involves running both
the old and new systems simultaneously for a period, making it the safest but most expensive
option. Pilot operation and phased operation are compromises, with pilot operation testing
the new system in a specific group before a wider rollout, and phased operation introducing
one module at a time until the full system is operational.

Data conversion is often required when installing a new system, especially when replacing an
existing computerized system. If possible, the conversion should be automated, particularly
if the old system can export data in a format the new system can use. However, if the data is
coming from a manual system, it may require labor-intensive entry or scanning. Even with

[PDF page 203; printed page 203]
automated data conversion, new systems may require additional data items, which might
need to be entered manually. Throughout the conversion process, data integrity must be
carefully monitored and maintained.

Training is crucial for everyone who will interact with the new system. The IT department
typically handles training, although vendors or professional training organizations may also
assist. Training programs should follow several key guidelines: train people in groups, use
experienced users to train others, create separate programs for different employee groups,
and offer various training methods like discussions, demonstrations, manuals, tutorials,
webinars, and podcasts. Users learn best through interactive, self-paced training methods.

A post-implementation evaluation assesses and reports on the quality of the new system and
the project team's performance. It is typically conducted by individuals who were not directly
involved in the development. This evaluation should be done early while users still have a
fresh memory of the development effort, but not too soon after system implementation to
ensure users have enough experience with the system.

The final report to management includes the final versions of system documentation, any
identified future system enhancements, and a recap of project costs. This report marks the
end of the development phase and the start of the system's operational life.
```
