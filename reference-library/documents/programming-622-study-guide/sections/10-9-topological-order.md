---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "745-746"
printed_pages: "745-746"
section: "Topological Order"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "course"
  - "graph"
  - "vertex"
  - "topological"
  - "courses"
  - "directed"
  - "order"
  - "before"
  - "take"
  - "can"
  - "such"
  - "has"
---

# Topological Order

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 745-746 | printed pages 745-746

Related sections: [Breadth-First Topological Ordering](10-10-breadth-first-topological-ordering.md), [Challenges in Data Privacy](../../big-data-iot-600-study-guide/sections/2-5-3-challenges-in-data-privacy.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Prescriptive Analytics](../../big-data-iot-600-study-guide/sections/98-prescriptive-analytics.md), [The Importance of Data Security in Big Data](../../big-data-iot-600-study-guide/sections/4-7-1-the-importance-of-data-security-in-big-data.md), [Reduce Input Volume](../../information-systems-622-study-guide/sections/2-4-10-reduce-input-volume.md)

## Extracted Text

```text
[PDF page 745; printed page 745]
10.9 Topological Order


 In college, before taking a particular course, students, usually, must take all its prerequisite courses, if any.
 For example, before taking the Programming II course, the student must take the Programming I course.
 However, certain courses can be taken independent of each other. The courses within a department can
 be represented as a directed graph. A directed edge from, say vertex u to vertex v means the course
 represented by the vertex u is a prerequisite of the course represented by the vertex v. It would be helpful
 for the students to know, before starting a major, the sequence in which they can take the courses so that
 before taking a course they take all its prerequisite courses and fulfill the graduation requirements on
 time. In this section, we describe an algorithm that can be used to output the vertices of a directed graph

                                                        745

[PDF page 746; printed page 746]
in such a sequence. Let us first introduce some terminology.


Let G be a directed graph and V(G) = {v1, v2, . . ., vn}, where n ≥ 0. A topological ordering of V(G) is a linear
ordering vi1, vi2, . . ., vin of the vertices such that, if vij is a predecessor of vik, j ≠ k, 1 ≤ j ≤ n, 1 ≤ k ≤ n, then
vij precedes vik, that is, j < k in this linear ordering.


In this section, we describe an algorithm, topological order, which outputs the vertices of a directed graph
in topological order. We assume that the graph has no cycles. We leave it as an exercise for you to modify
the algorithm for the graphs that have cycles.


         Because the graph has no cycles, the following is true:
         There exists a vertex v in G such that v has no successor.
         There exists a vertex u in G such that u has no predecessor.




                                                            746
```
