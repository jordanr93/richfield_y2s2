---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "209-212"
printed_pages: "209-212"
section: "Preventive Maintenance"
chapter: "CHAPTER 6: Managing Systems Support and Security"
keywords:
  - "maintenance"
  - "corrective"
  - "environment"
  - "costs"
  - "system's"
  - "adaptive"
  - "errors"
  - "operational"
  - "any"
  - "preventive"
  - "use"
  - "which"
---

# Preventive Maintenance

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 209-212 | printed pages 209-212

Related sections: [Corrective Maintenance](6-2-2-corrective-maintenance.md), [Adaptive Maintenance](6-2-3-adaptive-maintenance.md), [The Maintenance Team](6-3-1-the-maintenance-team.md), [MAINTENANCE MANAGEMENT](6-3-maintenance-management.md), [MAINTENANCE TASKS](6-2-maintenance-tasks.md), [Maintenance Releases](6-3-5-maintenance-releases.md)

## Extracted Text

```text
[PDF page 209; printed page 209]
   4. Preventive Maintenance: This type reduces the likelihood of future system failures.

Some analysts use the term "maintenance" specifically to refer to corrective maintenance,
which addresses problems. However, it's more useful to consider the concept of maintenance
more broadly by recognizing the different types of tasks involved.

[PDF page 210; printed page 210]
Maintenance costs are typically high at the start of a system's implementation, as issues need
to be identified, investigated, and resolved through corrective maintenance. Once the system
stabilizes, costs generally decrease, with only minor adaptive maintenance required. Over
time, adaptive and perfective maintenance activities increase as the business environment
evolves. Toward the end of a system's useful life, adaptive and corrective maintenance costs
rise rapidly, while perfective maintenance usually decreases when it's clear that the system
will be replaced. Figure 12-4 shows the typical patterns of these four types of maintenance
throughout the system's lifespan.




                                (Tilley and Rosenblatt, 2024)

6.2.2 Corrective Maintenance

Corrective maintenance is the process of diagnosing and fixing errors in an operational
system. To avoid introducing additional problems, any maintenance work must undergo
careful analysis before implementing changes. The most effective approach to maintenance
is a scaled-down version of the SDLC, which involves investigation, analysis, design, and
testing before implementing any solution. As noted in Chapter 11, the distinction between a
test environment and an operational environment is crucial. Any maintenance work that

[PDF page 211; printed page 211]
might affect the system must first be performed in the test environment, and only then
migrated to the operational system.

IT support staff address errors in various ways, depending on the nature and severity of the
issue. Most organizations have standard procedures for minor errors, such as incorrect report
titles or improper data formats. Typically, a user submits a system request that is evaluated,
prioritized, and scheduled by the system administrator or systems review committee. If
approved, the maintenance team designs, tests, documents, and implements the solution.

As mentioned in Chapter 2, many organizations use a standard online form for submitting
system requests, while smaller firms may handle it informally via email. For more significant
issues, such as incorrect report totals or inconsistent data, users submit a system request with
supporting evidence, which is given high priority, and the maintenance team begins work
immediately.




                                 (Tilley and Rosenblatt, 2024)

In the case of a system failure, the emergency response is prioritized. The maintenance team
bypasses the initial steps and works to fix the problem immediately. This often involves
applying a patch, which is a temporary software module that provides a quick fix, allowing
operations to resume. During this time, a system request is created either by the user or an
IT department member and is added to the maintenance log. Once the system is up and
running again, the maintenance team investigates the root cause, analyzes the issue, and
designs a permanent solution. The IT response team updates the test data files, thoroughly
tests the system, and prepares complete documentation.
Regardless of the prioritization method used, having a standard ranking framework can be
beneficial. For instance, Figure 12-5 presents a three-level structure for assessing IT support's
potential impact.

[PDF page 212; printed page 212]
                                 (Tilley and Rosenblatt, 2024)


6.2.3 Adaptive Maintenance

Adaptive maintenance involves enhancing an operational system by adding new features or
capabilities to meet changing business needs. This can result from business environment
shifts, such as the introduction of new products or services, advancements in manufacturing
technology, or the need for new web-based operations. The process for minor adaptive
maintenance follows a similar procedure to corrective maintenance, where a user submits a
system request evaluated by the systems review committee. The maintenance team then
analyzes, designs, tests, and implements the enhancement. For larger projects, adaptive
maintenance can be more resource-intensive and resemble a small-scale SDLC project, as it
must work within the constraints of the existing system.

6.2.4 Perfective Maintenance

Perfective maintenance focuses on improving an operational system to make it more
efficient, reliable, and easier to maintain. While corrective and adaptive maintenance
requests generally come from users, the IT department typically initiates perfective
maintenance. This type of maintenance can be prompted by declining system efficiency due
to changes in user activity or data patterns. Perfective maintenance helps improve system
performance, reliability, and maintainability by addressing issues such as inefficient input
processes or complex programs. However, it is often overlooked in favor of new projects or
more urgent corrective and adaptive maintenance tasks. It is most cost-effective during the
middle of a system’s life cycle but may become costly later if the system is near the end of
its operational life. Software reengineering is a key technique used in perfective
maintenance, which involves using analytical techniques to identify improvements in
performance and quality.

6.2.5 Preventive Maintenance

Preventive maintenance involves proactively identifying potential areas of trouble and
taking steps to prevent issues before they occur. Like perfective maintenance, it is typically
initiated by the IT department. Preventive maintenance aims to reduce downtime, improve
user satisfaction, and lower total cost of ownership (TCO). However, it often competes with
other projects for IT resources and may not always receive the attention it deserves.
```
