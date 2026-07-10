---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "698-703"
printed_pages: "698-703"
section: "Graph Definitions and Notations"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "graph"
  - "set"
  - "called"
  - "elements"
  - "symbol"
  - "means"
  - "undirected"
  - "figure"
  - "graphs"
  - "pairs"
  - "edges"
  - "vertex"
---

# Graph Definitions and Notations

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 698-703 | printed pages 698-703

Related sections: [Graph Traversals](10-5-graph-traversals.md), [Set Clear Goals and Metrics](../../big-data-iot-600-study-guide/sections/126-set-clear-goals-and-metrics.md), [Minimum Spanning Tree](10-8-minimum-spanning-tree.md), [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md), [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Chapter 2: IoT Architectures and Applications](../../big-data-iot-600-study-guide/sections/2-chapter-2-iot-architectures-and-applications.md)

## Extracted Text

```text
[PDF page 698; printed page 698]
10.2 Graph Definitions and Notations


 To facilitate and simplify our discussion, we borrow a few definitions and terminology from set theory. Let
 X be a set. If a is an element of X, we write a X. (The symbol ‘‘ ’’ means ‘‘belongs to.’’) A set Y is called a
 subset of X if every element of Y is also an element of X. If Y is a subset of X, we write Y X. (The symbol ‘‘
 ’’ means ‘‘is a subset of.’’) The intersection of sets A and B, written A B, is the set of all elements that are
 in A and B; that is, A B = {x | x A and x B}. (The symbol ‘‘ ’’ means ‘‘intersection.’’) The union of sets A and
 B, written A B, is the set of all elements that are in A or in B; that is, A B = {x | x A or x B}. (The symbol ‘‘
 ’’ means ‘‘union.’’) For sets A and B, the set A x B is the set of all ordered pairs of elements of A and B; that
 is, A x B = {(a, b) | a A, b B}. (The symbol ‘‘x’’ means ‘‘Cartesian product.’’)


 A graph G is a pair, G = (V, E), where V is a finite nonempty set, called the set of vertices of G and E
 V x V . That is, the elements of E are pairs of elements of V. E is called the set of edges of G. G is called
 trivial if it has only one vertex.


 Let V(G) denote the set of vertices, and E(G) denote the set of edges of a graph G. If the elements of E are
 ordered pairs, G is called a directed graph or digraph; otherwise, G is called an undirected graph. In an
 undirected graph, the pairs (u, v) and (v, u) represent the same edge.


 Let G be a graph. A graph H is called a subgraph of G if V(H) V(G) and E(H) E(G); that is, every vertex of H
 is a vertex of G, and every edge in H is an edge in G.


 A graph can be shown pictorially. The vertices are drawn as circles, and a label inside the circle represents
 the vertex. In an undirected graph, the edges are drawn using lines. In a directed graph, the edges are
 drawn using arrows.


 EXAMPLE 10-1
 Figure 10-3 shows some examples of undirected graphs.

                                                       698

[PDF page 699; printed page 699]
FIGURE 10-3 Various undirected graphs




                699

[PDF page 700; printed page 700]
EXAMPLE 10-2
Figure 10-4 shows some examples of directed graphs.




                                            FIGURE 10-4 Various directed graphs



For the graphs of Figure 10-4, we have
V(G1) = {1, 2, 3, 4, 5}                      E(G1) = {(1, 2), (1, 4), (2, 5), (3, 1), (3, 4), (4, 5)}
V(G2) = {0, 1, 2, 3, 4}                      E(G2) = {(0, 1), (0, 3), (1, 2), (1, 4), (2, 1), (2, 4), (4, 3)}
V(G3) = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10} E(G3) = {(0, 1), (0, 5), (1, 2), (1, 3), (1, 5), (2, 4), (4, 3), (5, 6), (6, 8),
                                             (7, 3), (7, 8), (8, 10), (9, 4), (9, 7), (9, 10)}


Let G be an undirected graph. Let u and v be two vertices in G. Then u and v are called adjacent if there is
an edge from one to the other; that is, (u, v) E. An edge incident on a single vertex is called a loop. If two
edges, e1 and e2, are associated with the same pair of vertices {u, v}, then e1 and e2 are called parallel
edges. A graph is called a simple graph if it has no loops and no parallel edges. Let e = (u, v) be an edge in
G. We then say that edge e is incident on the vertices u and v. The degree of u, written deg(u) or d(u), is
the number of edges incident with u. We make the convention that each loop on a vertex u contributes 2
to the degree of u. u is called an even (odd) degree vertex if the degree of u is even (odd). There is a path
from u to v if there is a sequence of vertices u1, u2, . . ., un such that u = u1, un = v and (ui, ui+1) is an edge
for all i = 1, 2, . . ., n - 1. Vertices u and v are called connected if there is a path from u to v. A simple path
is a path in which all the vertices, except possibly the first and last vertices, are distinct. A cycle in G is a
simple path in which the first and last vertices are the same. G is called connected if there is a path from
any vertex to any other vertex. A maximal subset of connected vertices is called a component of G.


Let G be a directed graph, and let u and v be two vertices in G. If there is an edge from u to v, that is, (u,
v) E, we say that u is adjacent to v and v is adjacent from u. The definitions of the paths and cycles in G
are similar to those for undirected graphs. G is called strongly connected if any two vertices in G are
connected.



                                                             700

[PDF page 701; printed page 701]
Consider the directed graphs of Figure 10-4. In G1, 1-4-5 is a path from vertex 1 to vertex 5. There are no
cycles in G1. In G2, 1-2-1 is a cycle. In G3, 0-1-2-4-3 is a path from vertex 0 to vertex 3; 1-5-6-8-10 is a path
from vertex 1 to vertex 10. There are no cycles in G3.


10.1    Graph Representation


To write programs that process and manipulate graphs, the graphs must be stored—that is, represented—
in computer memory. A graph can be represented (in computer memory) in several ways. We now discuss
two commonly used ways: adjacency matrices and adjacency lists.


10.1.1 Adjacency Matrices




                                                      701

[PDF page 702; printed page 702]
Let G be a graph with n vertices, where n > 0. Let V(G) = {v1, v2, ..., vn}. The adjacency matrix AG is a
twodimensional n x n matrix such that the (i, j)th entry of AG is 1 if there is an edge from vi to vj; otherwise,
the (i, j)th entry is 0. That is,




In an undirected graph, if (vi, vj) E(G), then (vj, vi) E(G), so AG(i, j) = 1 = AG( j, i). It follows that the adjacency
matrix of an undirected graph is symmetric.




EXAMPLE 10-3


 Consider the directed graphs of Figure 10-4. The adjacency matrices of the directed graphs G1 and G2 are
as follows:




10.1.2 Adjacency Lists


Let G be a graph with n vertices, where n>0. Let V(G) = {v1, v2, ..., vn}. In the adjacency list representation,
corresponding to each vertex, v, there is a linked list such that each node of the linked list contains the
vertex, u, such that (v, u) E(G). Because there are n nodes, we use an array, A, of size n, such that A[i] is
a reference variable pointing to the first node of the linked list containing the vertices to which vi is
adjacent. Clearly, each node has two components, say vertex and link. The component vertex contains the
index of the vertex adjacent to vertex i.


EXAMPLE 10-4
Consider the directed graphs of Figure 10-4. Figure 10-5 shows the adjacency list of the directed graph G2.



                                                         702

[PDF page 703; printed page 703]
                                  FIGURE 10-5 Adjacency list of graph G2 of Figure 10-4



Figure 10-6 shows the adjacency list of the directed graph G3.




                                                     703
```
