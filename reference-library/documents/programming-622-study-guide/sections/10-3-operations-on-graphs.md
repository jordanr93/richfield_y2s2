---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "704-704"
printed_pages: "704-704"
section: "Operations on Graphs"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "graph"
  - "operations"
  - "graphs"
  - "list"
  - "computer"
  - "memory"
  - "linked"
  - "particular"
  - "representation"
  - "empty"
  - "specific"
  - "use"
---

# Operations on Graphs

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 704-704 | printed pages 704-704

Related sections: [TOPIC 10: GRAPHS](10-topic-10-graphs.md), [Operations Documentation](../../information-systems-622-study-guide/sections/5-8-3-operations-documentation.md), [Getting Information on Files](../../internet-programming-622-study-guide/sections/3-2-getting-information-on-files.md), [Graphs as ADTs](10-4-graphs-as-adts.md), [Identifying Classes, Objects, and Operations](1-7-identifying-classes-objects-and-operations.md), [Baselines](../../information-systems-622-study-guide/sections/6-3-7-baselines.md)

## Extracted Text

```text
[PDF page 704; printed page 704]
10.3 Operations on Graphs


Now that you know how to represent graphs in computer memory, the next obvious step is to learn the
 basic operations on a graph. The operations commonly performed on a graph are as follows:


     1. Create the graph. That is, store the graph in computer memory using a particular graph
         representation.
     2. Clear the graph. This operation makes the graph empty.
     3. Determine whether the graph is empty.
     4. Traverse the graph.
     5. Print the graph.


We will add more operations on a graph when we discuss a specific application or a particular graph later
 in this chapter.


How a graph is represented in computer memory depends on the specific application. For illustration
 purposes, we use the adjacency list (linked list) representation of graphs. Therefore, for each vertex v the
 vertices adjacent to v (in a directed graph, also called the immediate successors) are stored in the linked
 list associated with v.


To manage the data in a linked list, we use the class unorderedLinkedList, discussed in Chapter 3.



                                                      704
```
