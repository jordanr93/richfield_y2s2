---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "732-744"
printed_pages: "732-744"
section: "Minimum Spanning Tree"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "figure"
  - "graph"
  - "tree"
  - "spanning"
  - "graphs"
  - "connections"
  - "called"
  - "such"
  - "cost"
  - "factor"
  - "cities"
  - "maintaining"
---

# Minimum Spanning Tree

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 732-744 | printed pages 732-744

Related sections: [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md), [AVL Tree Rotations](9-8-avl-tree-rotations.md), [Graph Definitions and Notations](10-2-graph-definitions-and-notations.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 732; printed page 732]
10.8 Minimum Spanning Tree


Consider the graph of Figure 10-14, which represents the airline connections of a company, between
seven cities. The number on each edge represents some cost factor of maintaining the connection
between cities.




             FIGURE 10-14 Airline connections between cities and the cost factor of maintaining the connections



Due to financial hardship, the company needs to shut down the maximum number of connections and still
be able to fly (may be not directly) from one city to another. The graphs of Figure 10-15(a), (b), and
(c) show three different solutions.
                                                           732

[PDF page 733; printed page 733]
FIGURE 10-15 Possible solutions to the graph of Figure 10-14




                           733

[PDF page 734; printed page 734]
The total cost factor of maintaining the remaining connections in Figure 10-15(a) is 33, in Figure 1015(b)
it is 28, and in Figure 10-15(c) it is 25. Out of these three solutions, obviously, the desired solution is the
one shown by the graph of Figure 10-15(c) because it gives the lowest cost factor. Graphs of Figure 10-15
are called spanning trees of the graph of Figure 10-14.


Let us note the following from the graphs of Figure 10-15. Each of the graphs of Figure 10-15 is a subgraph
of the graph of Figure 10-14, and there is a unique path from a node to any other node. Such graphs are
called trees. There are many other situations, where given a weighted graph, we need to determine a
graph such as in Figure 10-15 with the smallest weight. In this section, we give an algorithm to determine
such graphs. However, first we introduce some terminology.


A (free) tree T is a simple graph such that if u and v are two vertices in T, there is a unique path from u to
v. A tree in which a particular vertex is designated as a root is called a rooted tree. If a weight is assigned
to the edges in T, T is called a weighted tree. If T is a weighted tree, the weight of T, denoted by W(T), is
the sum of the weights of all the edges in T.


A tree T is called a spanning tree of graph G if T is a subgraph of G such that V(T) = V(G), that is, all the
vertices of G are in T.


Suppose G denotes the graph of Figure 10-14. Then the graphs of Figure 10-15 show three spanning trees
of G. Let us note the following theorem.


Theorem 10-1: A graph G has a spanning tree if and only if G is connected.


From this theorem, it follows that to determine a spanning tree of a graph, the graph must be connected.


Definition: Let G be a weighted graph. A minimum (minimal) spanning tree of G is a spanning tree with
the minimum weight.


There are two well-known algorithms, Prim’s algorithm and Kruskal’s algorithm, for finding a minimum
spanning tree of a graph. This section discusses Prim’s algorithm to find a minimum spanning tree.



                                                     734

[PDF page 735; printed page 735]
Prim’s algorithm builds the tree iteratively by adding edges until a minimum spanning tree is obtained.
We start with a designated vertex, which we call the source vertex. At each iteration, a new edge that
does not form a cycle is added to the tree.


Let G be a weighted graph such that V(G) = {v0, v1,. . .,vn-1}, where n, the number of vertices, is nonnegative.
Let v0 be the source vertex. Let T be the partially built tree. Initially V(T) contains the source vertex and
E(T) is empty. At the next iteration, a new vertex that is not in V(T) is added to V(T), such that an edge
exists from a vertex in T to the new vertex so that the corresponding edge has the smallest weight. The
corresponding edge is added to E(T).


The general form of Prim’s algorithm is as follows. (Let n be the number of vertices in G.)


1. Set V(T) = {source}
2. Set E(T) = empty




                                                     735

[PDF page 736; printed page 736]
3. for i = 1 to n
    3.1. minWeight = infinity;
    3.2. for j = 1 to n
                if vj is in V(T) for k = 1 to n if vk is not in T and weight[vj, vk]
                          < minWeight
                                 {
                                          endVertex = vk; edge
                                          = (vj, vk);
                                          minWeight = weight[vj, vk];
                                 }
    3.3. V(T) = V(T)      {endVertex};
    3.4. E(T) = E(T) {edge};


Let us illustrate Prim’s algorithm using the graph G of Figure 10-16 (which is same as the graph of Figure
10-14).




                                            FIGURE 10-16 Weighted graph G



Let N denote the set of vertices of G that are not in T. Suppose that the source vertex is 0. Figure 10-17
shows how Prim’s algorithm works.




                                                         736

[PDF page 737; printed page 737]
                            FIGURE 10-17 Graph G, V(T), E(T), and N after Steps 1 and 2 execute

After Steps 1 and 2 execute, V(T), E(T), and N are as shown in Figure 10-17(a). Step 3 checks the following
edges: (0,1), (0,2), and (0,3). The weight of the edge (0,1) is 6, the weight of the edge (0,2) is 5, and the
weight of the edge (0,3) is 2. Clearly, the edge (0,3) has the smallest weight; see Figure 10-17(b). Therefore,
vertex 3 is added to V(T) and the edge (0,3) is added to E(T). Figure 10-17(b) shows the resulting graph, V(T),
E(T), and N. (The dotted line shows the edge in T.)


Next, Step 3 checks the following edges: (0,1), (0,2), and (3,4). The weight of the edge (0,1) is 6, the weight
of the edge (0,2) is 5, and the weight of the edge (3,4) is 8. Clearly, the edge (0,2) has the smallest weight.
Therefore, vertex 2 is added to V(T) and the edge (0,2) is added to E(T). Figure 10-17(c) shows the resulting
graph, V(T), E(T), and N.


At the next iteration, Step 3 checks the following edges: (0,1), (2,5), (2,6), and (3,4). The weight of the
edge (0,1) is 6, the weight of the edge (2,5) is 7, the weight of the edge (2,6) is 5, and the weight of the

                                                           737

[PDF page 738; printed page 738]
edge (3,4) is 8. Clearly, the edge (2,6) has the smallest weight. Therefore, vertex 6 is added to V(T) and the
edge (2,6) is added to E(T). Figure 10-17(d) shows the resulting graph, V(T), E(T), and N. (The dotted lines
show the edges in T.)


At the next iteration, Step 3 checks the following edges: (0,1), (2,5), (3,4), and (6,1). The weight of the
edge (0,1) is 6, the weight of the edge (2,5) is 7, the weight of the edge (3,4) is 8, and the weight of the




                                                    738

[PDF page 739; printed page 739]
edge (6,1) is 4. Clearly, the edge (6,1) has the smallest weight. Therefore, vertex 1 is added to V(T) and the
edge (6,1) is added to E(T). Figure 10-17(e) shows the resulting graph, V(T), E(T), and N. (The dotted lines
show the edges in T.)


At the next iteration, Step 3 checks the following edges: (1,4), (2,5), and (3,4). The weight of the edge (1,4)
is 2, the weight of the edge (2,5) is 7, and the weight of the edge (3,4) is 8. Clearly, the edge (1,4) has the
smallest weight. Therefore, vertex 4 is added to V(T) and the edge (1,4) is added to E(T). Figure 10-17(f )
shows the resulting graph, V(T), E(T), and N. (The dotted lines show the edges in T.)


At the next iteration, Step 3 checks the following edges: (2,5) and (4,5). The weight of the edge (2,5) is 7
and the weight of the edge (4,5) is 10. Clearly, the edge (2,5) has the smallest weight. Therefore, vertex 5
is added to V(T) and the edge (2,5) is added to E(T). Figure 10-17(g) shows the resulting graph, V(T), E(T),
and N. (The dotted lines show the edges in T.)


In Figure 10-17(g), the dotted lines show a minimum spanning tree of G of weight 25.


Before we give the definition of the function to implement Prim’s algorithm, let us first define a spanning
tree as an ADT.


Let mstv be a bool array such that mstv[j] is true if the vertex vi is in T, and false otherwise. Let edges be
an array such that edges[j] = k, if there is an edge connecting vertices vj and vk. Suppose that the edge (vi,
vj) is in the minimum spanning tree. Let edgeWeights be an array such that edgeWeights[j] is the weight
of the edge (vi, vj).
Using these conventions, the following class defines a spanning tree as an ADT:
//*****************************************************************
// class msTreeType
// This class specifies the operations to find a minimum spanning tree in a graph.
//*****************************************************************
class msTreeType: public graphType
{
        public:
                  void createSpanningGraph();
                  //Function to create the graph and the weight matrix.

                                                     739

[PDF page 740; printed page 740]
//Postcondition: The graph using adjacency lists and
// its weight matrix is created.


void minimumSpanning(int sVertex);
//Function to create a minimum spanning tree with //root
as sVertex.
// Postcondition: A minimum spanning tree is created.
// The weight of the edges is also saved in the array //
edgeWeights.


void printTreeAndWeight();
//Function to output the edges of the minimum spanning tree
//and the weight of the minimum spanning tree.
//Postcondition: The edges of a minimum spanning tree //
and their weights are printed.




                                     740

[PDF page 741; printed page 741]
               msTreeType(int size = 0);
               //Constructor
               //Postcondition: gSize = 0; maxSize = size; //
               graph is an array of pointers to linked lists.
               // weights is a two-dimensional array to store the weights //
               of the edges.
               // edges is an array to store the edges of a minimum //
               spanning tree.
               // edgeWeights is an array to store the weights of the //
               edges of a minimum spanning tree.


               ~msTreeType();
               //Destructor
               //The storage occupied by the vertices and the arrays //weights,
               edges, and edgeWeights is deallocated.


       protected:
               int source; double
               **weights; int
               *edges;
               double *edgeWeights;
};


We leave the UML class diagram of the class msTreeType and the inheritance hierarchy as an exercise.
The definition of the function createSpanningGraph is also left as an exercise for you. This function creates
the graph and the weight matrix associated with the graph.

The following C++ function, minimumSpanning, implements Prim’s algorithm, as described previously:
void msTreeType::minimumSpanning(int sVertex)
{
       int startVertex, endVertex;
       double minWeight;

       source = sVertex;

                                                     741

[PDF page 742; printed page 742]
bool *mstv;
mstv = new bool[gSize];


for (int j = 0; j < gSize; j++)
{ mstv[j] = false; edges[j]
        = source;
        edgeWeights[j] = weights[source][j];
}


mstv[source] = true;
edgeWeights[source] = 0;




                                           742

[PDF page 743; printed page 743]
       for (int i = 0; i < gSize - 1; i++)
       {
                minWeight = DBL_MAX;


                for (int j = 0; j < gSize; j++) if
                         (mstv[j])
                                  for (int k = 0; k < gSize; k++) if (!mstv[k] &&
                                             weights[j][k] < minWeight)
                                             {
                                                     endVertex = k; startVertex
                                                     = j;
                                                     minWeight = weights[j][k];
                                             }


                mstv[endVertex] = true; edges[endVertex]
                = startVertex;
                edgeWeights[endVertex] = minWeight;
       }                                                           //end for
}                                                                  //end minimumSpanning


The definition of the function minimumSpanning contains three nested for loops. Therefore, in the worst
case, Prim’s algorithm given in this section is of the order O(n3). It is possible to design Prim’s algorithm
so that it is of the order O(n2); Programming Exercise 5 at the end of this chapter asks you to do this.

The definition of the function printTreeAndWeight is as follows:
void msTreeType::printTreeAndWeight()
{
       double treeWeight = 0;
       cout << "Source Vertex: " << source << endl; cout
       << "Edges Weight" << endl;


       for (int j = 0; j < gSize; j++)
       {

                                                            743

[PDF page 744; printed page 744]
               if (edges[j] != j)
               {
                       treeWeight = treeWeight + edgeWeights[j];
                       cout << "("<<edges[j] << ", " << j << ") " << edgeWeights[j] << endl;
               }
       }


       cout << endl;
       cout << "Minimum spanning Tree Weight: " << treeWeight << endl;
}                                                            //end printTreeAndWeight


The definitions of the constructor and the destructor are as follows:




                                                    744
```
