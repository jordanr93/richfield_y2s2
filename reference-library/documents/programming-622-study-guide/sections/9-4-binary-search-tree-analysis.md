---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "616-618"
printed_pages: "616-618"
section: "Binary Search Tree: Analysis"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "search"
  - "comparisons"
  - "number"
  - "case"
  - "binary"
  - "let"
  - "tree"
  - "performance"
  - "linear"
  - "average"
  - "log2n"
  - "analysis"
---

# Binary Search Tree: Analysis

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 616-618 | printed pages 616-618

Related sections: [Binary Search Trees](9-3-binary-search-trees.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [Binary Search](7-4-binary-search.md), [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Nonrecursive Binary Tree Traversal Algorithms](9-5-nonrecursive-binary-tree-traversal-algorithms.md), [Big Data Analysis Techniques](../../big-data-iot-600-study-guide/sections/1-4-big-data-analysis-techniques.md)

## Extracted Text

```text
[PDF page 616; printed page 616]
9.4 Binary Search Tree: Analysis


                                                   616

[PDF page 617; printed page 617]
This section provides an analysis of the performance of binary search trees. Let T be a binary search tree
with n nodes, where n> 0. Suppose that we want to determine whether an item, x, is in T. The performance
of the search algorithm depends on the shape of T. Let us first consider the worst case. In the worst case,
T is linear. That is, T is one of the forms shown in Figure 9-10.




                                                     617

[PDF page 618; printed page 618]
                                        FIGURE 9-10 Linear binary trees



Because T is linear, the performance of the search algorithm on T is the same as its performance on a
linear list. Therefore, in the successful case, on average, the search algorithm makes (n + 1) / 2 key
comparisons. In the unsuccessful case, it makes n comparisons.


Let us now consider the average-case behavior. In the successful case, the search would end at a node.
Because there are n items, there are n! possible orderings of the keys. We assume that all n! orderings of
the keys are possible. Let S(n) denote the number of comparisons in the average successful case, and U(n)
denote the number of comparisons in the average unsuccessful case.


The number of comparisons required to determine whether x is in T is one more than the number of
comparisons required to insert x in T. Furthermore, the number of comparisons required to insert x in T is
the same as the number of comparisons made in the unsuccessful search, reflecting that x is not in T. From
this, it follows that



                                                                                            (Equation 9-1)
It is also known that



                                                                                            (Equation 9-2)



Solving Equations (9-1) and (9-2), it can be shown that U(n) ≈ 2.77log2n and S(n) ≈ 1.39log2n.
We can now formulate the following result.
Theorem: Let T be a binary search tree with n nodes, where n> 0. The average number of nodes visited in
a search of T is approximately 1.39log2n = O(log2n) and the number of key comparisons is approximately

                                                     618
```
