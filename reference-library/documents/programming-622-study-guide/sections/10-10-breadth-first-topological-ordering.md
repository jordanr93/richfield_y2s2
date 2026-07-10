---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "747-767"
printed_pages: "747-767"
section: "Breadth-First Topological Ordering"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "topological"
  - "ordering"
  - "breadth-first"
  - "predcount"
  - "queue"
  - "first"
  - "vertex"
  - "graph"
  - "vertices"
  - "next"
  - "has"
  - "predecessor"
---

# Breadth-First Topological Ordering

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 747-767 | printed pages 747-767

Related sections: [Topological Order](10-9-topological-order.md), [Graphs as ADTs](10-4-graphs-as-adts.md), [First Normal Form](../../information-systems-622-study-guide/sections/3-6-2-first-normal-form.md), [Graph Traversals](10-5-graph-traversals.md), [Data Ownership](../../big-data-iot-600-study-guide/sections/122-data-ownership.md), [Descriptive Analytics](../../big-data-iot-600-study-guide/sections/92-descriptive-analytics.md)

## Extracted Text

```text
[PDF page 747; printed page 747]
                    //Function to perform breadth first topological ordering of //a
                    graph.
                    //Postcondition: The vertices are output in a breadth first //topological
                    order.


                    topologicalOrderType(int size = 0);
                    //Constructor
                    //Postcondition: gSize = 0; maxSize = size;
                    // graph is an array of pointers to linked lists.
 };
 Next, we discuss how to implement the function bfTopOrder.




10.10 Breadth-First Topological Ordering


 Recall that the breadth-first traversal algorithm is similar to traversing a binary tree level-by-level, and so
                                                           747

[PDF page 748; printed page 748]
the root node (which has no predecessor) is visited first. Therefore, in the breadth-first topological
ordering, we first find a vertex that has no predecessor vertex and place it first in the topological ordering.
We next find the vertex, say v, all of whose predecessors have been placed in the topological ordering and
place v next in the topological ordering. To keep track of the number of vertices of a vertex, we use the
array predCount. Initially, predCount[j] is the number of predecessors of the vertex vj. The queue used to
guide the breadth-first traversal is initialized to those vertices vk such that predCount[k] is 0. In essence,
the general algorithm is as follows:
   4. Create the array predCount and initialize it so that predCount[i] is the number of predecessors of
       the vertex vi.
   5. Initialize the queue, say queue, to all those vertices vk so that predCount[k] is 0. (Clearly, queue is
       not empty because the graph has no cycles.)
   6. while the queue is not empty
        3.1 Remove the front element, u, of the queue.
        3.2 Put u in the next available position, say topologicalOrder[topIndex], and increment topIndex.




                                                     748

[PDF page 749; printed page 749]
           3.3 For all the immediate successors w of u,
               3.3.1 Decrement the predecessor count of w by 1.
               3.3.2 if the predecessor count of w is 0, add w to queue.
The graph G3 of Figure 10-7 has no cycles. The vertices of G3 in breadth-first topological ordering are as
follows:
                         Breadth First Topological order: 0 9 1 7 2 5 4 6 3 8 10
Next, we illustrate the breadth-first topological ordering of the graph G3.
After Steps 1 and 2 execute, the arrays predCount, topologicalOrder, and queue are as shown in Figure
10-18. (Notice that for simplicity, we show only the elements of the queue.)




                 FIGURE 10-18 Arrays predCount, topologicalOrder, and queue after Steps 1 and 2 execute



Step 3 executes as long as the queue is nonempty.


Iteration 1 of Step 3: After Step 3.1 executes, the value of u is 0. Step 3.2 stores the value of u, which is 0,
in the next available position in the array topologicalOrder.Notice that 0 is stored at position 0 in this
array. Step 3.3 reduces the predecessor count of all the successors of 0 by 1, and if the predecessor count
of any successor node of 0 reduces to 0, that node is pushed into queue. The successor nodes of the node
0 are the nodes 1 and 5. The predecessor count of the node 1 reduces to 0, and the predecessor count of
the node 5 reduces to 1. The node 1 is pushed into queue. After the first iteration of Step 3, the arrays
predCount, topologicalOrder, and queue are as shown in Figure 10-19.




                                                         749

[PDF page 750; printed page 750]
             FIGURE 10-19 Arrays predCount, topologicalOrder, and queue after the first iteration of Step 3



Iteration 2 of Step 3: The queue is nonempty. After Step 3.1 executes, the value of u is 9. Step 3.2 stores
the value of u, which is 9, in the next available position in the array topologicalOrder. Notice that 9 is
stored at position 1 in this array. Step 3.3 reduces the predecessor count of all the successors of 9 by 1,
and if the predecessor count of any successor node of 9 reduces to 0, that node is pushed into queue. The




                                                         750

[PDF page 751; printed page 751]
successor nodes of the node 9 are the nodes 4, 7, and 10. The predecessor count of the node 7 reduces
to 0 and the predecessor count of the nodes 4 and 10 reduces to 1. The node 7 is pushed into queue. After
the second iteration of Step 3, the arrays predCount, topologicalOrder, and queue are as shown in Figure




10-20.
           FIGURE 10-20 Arrays predCount, topologicalOrder, and queue after the second iteration of Step 3



Iteration 3 of Step 3: The queue is nonempty. After Step 3.1 executes, the value of u is 1. Step 3.2 stores
the value of u, which is 1, in the next available position in the array topologicalOrder. Notice that 1 is
stored at position 2 in this array. Step 3.3 reduces the predecessor count of all the successors of 1 by 1
and if the predecessor count of any successor node of 1 reduces to 0, that node is pushed into queue. The
successor nodes of the node 1 are the nodes 2, 3, and 5. The predecessor count of the nodes 2 and 5




reduces to 0 and the predecessor count of the node 3 reduces to 2. The nodes 2 and 5, in this order, are
pushed into the queue. After the third iteration of Step 3, the arrays predCount, topologicalOrder, and
queue are as shown in Figure 10-21.
            FIGURE 10-21 Arrays predCount, topologicalOrder, andqueue after the third iteration of Step 3

If you repeat Step 3 eight more times, the arrays predCount, topologicalOrder, and queue are as shown
in Figure 10-22.




                                                        751

[PDF page 752; printed page 752]
FIGURE 10-22 Arrays predCount, topologicalOrder, and queue after Step 3 executes




                                     752

[PDF page 753; printed page 753]
In Figure 10-22, the array topologicalOrder shows the breadth-first topological ordering of the nodes of
the graph G3.

The following C++ function implements this breadth-first topological ordering algorithm:
void topologicalOrderType::bfTopOrder()
{
       linkedQueueType<int> queue;


       int *topologicalOrder;                     //pointer to the array to store
                                                  //breadth first topological ordering
       topologicalOrder = new int[gSize];
       int topIndex = 0;
       linkedListIterator<int> graphIt;           //iterator to traverse a linked list


       int *predCount;                            //pointer to the array to store the
                                                  //predecessor count of a vertex.
       predCount = new int[gSize];


       for (int ind = 0; ind < gSize; ind++) predCount[ind]
                = 0;


                                                  //Determine the predecessor count of all the vertices.
       for (int ind = 0; ind < gSize; ind++)
       {
                for (graphIt = graph[ind].begin(); graphIt != graph[ind].end(); ++graphIt)
                {
                       int w = *graphIt;
                       predCount[w]++;
                }
       }


                                                                          (predCount[ind] == 0) queue.addQueue(ind);


       for (int ind = 0; ind < gSize; ind++) if                   while (!queue.isEmptyQueue())
                                                        753

[PDF page 754; printed page 754]
{                                //Initialize queue: If the predecessor count of //vertex
                                 is 0, put this node into the queue.
    int u = queue.front(); queue.deleteQueue();
    topologicalOrder[topIndex++] = u;




                                        754

[PDF page 755; printed page 755]
                                               //Reduce the predecessor count of all the successors //of
                                               u by 1. If the predecessor count of a vertex //becomes 0,
                                               put this vertex into the queue.
               for (graphIt = graph[u].begin();graphIt != graph[u].end(); ++graphIt)
               {
                       int w = *graphIt; predCount[w]--;
                       if (predCount[w] == 0) queue.addQueue(w);
               }
       }//end while


                                               //output the vertices in breadth first topological order
       for (int ind = 0; ind < gSize; ind++) cout <<
               topologicalOrder[ind] << " ";


       cout << endl;


       delete [] topologicalOrder;
       delete [] predCount;
}                                              //bfTopOrder


We leave the definition of the constructor as an exercise.


10.2   Euler Circuits


Let us consider the Kӧnigsberg bridge problem stated at the beginning of the chapter. The problem is to
determine whether it is possible to take a walk that crosses each bridge exactly once before returning to
the starting point; see Figure 10-1. As remarked earlier, Euler converted this problem into a graph theory
problem as follows: Each of the islands A, B, C, and D is considered as a vertex of a graph and the bridges
are considered as edges, as shown in Figure 10-2. Now the problem reduces to finding a circuit in the
graph of Figure 10-2, such that it contains all the edges. In this section, we further describe properties of
graphs, which will help us answer this question.


Definition: A circuit is a path of nonzero length from a vertex u to u with no repeated edges.
                                                     755

[PDF page 756; printed page 756]
Definition: A circuit in a graph that includes all the edges of the graph is called an Euler circuit.
Definition: A graph G is said to be Eulerian if either G is a trivial graph or G has an Euler circuit.
Notice that the graph of Figure 10-2 is a connected graph and this graph has odd degree vertices as well
as even degree vertices.


Let us consider a connected graph with more than one vertex such that every vertex has odd degree. For
example, consider the graph of Figure 10-23. This is a connected graph and every vertex of this graph is
odd degree. This graph has no circuit and so has no circuit that contains all the edges.




                                                       756

[PDF page 757; printed page 757]
                                 FIGURE 10-23 A graph with all vertices of odd degree



Next consider the connected graph G of Figure 10-24 such that every vertex has even degree.




                                 FIGURE 10-24 A graph with all vertices of even degree



The graph of Figure 10-24 has an Euler circuit. For example, (0, e1, 1, e2, 2, e3, 3, e4, 5, e5, 1, e6, 3, e7, 4, e8,
0) is an Euler circuit in the graph of Figure 10-24.


The following theorems give necessary and sufficient conditions for a connected graph to have an Euler
circuit.


Theorem 10-2: If a connected graph G is Eulerian, then every vertex of G has even degree.


Theorem 10-3: Let G be a connected graph such that every vertex of G is of even degree. Then G has an
Euler circuit.


We can effectively use this theorem to determine whether a connected graph G has an Euler circuit by
checking whether all of its vertices are of even degree.


Let us again consider the Ko¨nigsberg bridge problem. Notice that the graph corresponding to this
problem is a connected graph but has vertices of odd degree; see Figure 10-2. Hence, by Theorem 10-2,
the graph of Figure 10-2 has no Euler circuit. In other words, starting at one land area, it is not possible to
walk across all the bridges exactly once and return to the starting land area.


                                                         757

[PDF page 758; printed page 758]
After 1736, two additional bridges have been constructed on the Pregel river—one is between the regions
B and C and the other is between A and D. The graph with the additional two bridges is shown in Figure
10-25.




                                                 758

[PDF page 759; printed page 759]
                     FIGURE 10-25 Graph of the Kӧnigsberg bridge problem with two additional bridges



By Theorem 10-3, every connected graph with only even degree vertices has an Euler circuit. Next, we
describe an algorithm, known as Fleury’s algorithm, which can be used to construct an Euler circuit in a
connected graph with vertices of even degrees.


Fleury’s Algorithm


Step 1. Choose a vertex v as the starting vertex for the circuit and choose an edge e with v as one of the
end vertices.


Step 2. If the other end vertex u of the edge e is also v, go to Step 3. Otherwise, choose an edge e1 different
from e with u as one of the end vertices. If the other vertex u1 of e1 is v, go to Step 3; otherwise, choose
an edge e2 different from e and e1 with u1 as one of the end vertices and repeat Step
2.


Step 3. If the circuit T1 obtained in Step 2 contains all the edges, then stop. Otherwise, choose an edge ej
different from the edges of T1 such that one of the end vertices of ej, say, w is a member of the circuit T1.


Step 4. Construct a circuit T2 with starting vertex w, as in Steps 1 and 2, such that all the edges of T2 are
different from the edges in the circuit T1.


Step 5. Construct the circuit T3 by inserting the circuit T2 at w of the circuit T1. Now go to Step 3 and repeat
Step 3 with the circuit T3.


Next, we illustrate how Fleury’s algorithm works. Consider the graph of Figure 10-26.




                                                          759

[PDF page 760; printed page 760]
                                  FIGURE 10-26 A graph with all vertices of even degree



Let us apply Fleury’s algorithm to find an Eulerian circuit.


First, select vertex 0 and form the circuit: T1: (0, e1, 1, e3, 2, e2, 0).




                                                          760

[PDF page 761; printed page 761]
Next, select vertex 1 and edge e4. Construct the circuit: C1: (1, e4, 2, e6, 6, e7, 3, e5, 1). Then
form the circuit: T2: (0, e1, C1, e3, 2, e2, 0).


Circuit T2 does not contain all the edges of the given graph. Now choose vertex 6 and edge e8 and form
the circuit: C2: (6, e8, 6).


Now construct the circuit: T3: (0, e1, 1, e4, 2, e6, C2, e7, 3, e5, 1, e3, 2, e2, 0).


This circuit also does not contain all the edges. Select now vertex 3 and edge e11. Form the circuit: C3: (3,
e11, 4, e10, 5, e9, 3).


Next, construct the circuit: T4: (0, e1,1, e4, 2, e6, C2, e7, C3, e5, 1, e3, 2, e2, 0).


Circuit T4 contains all the vertices and all the edges of the given graph and, hence, it is an Euler circuit.
We leave it as an exercise for you to write a program to implement Fleury’s algorithm.
Key Terms


1. A graph G is a pair, G = (V, E), where V is a finite nonempty set, called the set of vertices of G and E V
    x V , called the set of edges.
2. In an undirected graph G = (V, E), the elements of E are unordered pairs.
3. In a directed graph G = (V, E), the elements of E are ordered pairs.
4. Let G be a graph. A graph H is called a subgraph of G if every vertex of H is a vertex of G and every
    edge in H is an edge in G.
5. Two vertices u and v in an undirected graph are called adjacent if there is an edge from one to the
    other.
6. An edge incident on a single vertex is called a loop.
7. In an undirected graph, if two edges e1 and e2 are associated with the same pair of vertices {u, v}, then
    e1 and e2 are called parallel edges.
8. A graph is called a simple graph if it has no loops and no parallel edges.
9. Let e = (u, v) be an edge in an undirected graph G. The edge e is said to be incident on the vertices u
    and v.
10. A path from a vertex u to a vertex v is a sequence of vertices u1, u2, . . ., un such that u = u1, un = v, and
    (ui, ui+ 1) is an edge for all i = 1, 2, . . ., n - 1.

                                                             761

[PDF page 762; printed page 762]
11. The vertices u and v are called connected if there is a path from u to v.
12. A simple path is a path in which all the vertices, except possibly the first and last vertices, are distinct.
13. A cycle in G is a simple path in which the first and last vertices are the same.
14. An undirected graph G is called connected if there is a path from any vertex to any other vertex.
15. A maximal subset of connected vertices is called a component of G.
16. Suppose that u and v are vertices in a directed graph G. If there is an edge from u to v, that is, (u, v) E,
    we say that u is adjacent to v and v is adjacent from u.
17. A directed graph G is called strongly connected if any two vertices in G are connected.
18. Let G be a graph with n vertices, where n > 0. Let V(G) = {v1, v2, . . ., vn}. The adjacency matrix AG is a
    two-dimensional n x n matrix such that the (i, j)th entry of AG is 1 if there is an edge from vi to vj;
    otherwise, the (i, j)th entry is 0.
19. In an adjacency list representation, corresponding to each vertex v is a linked list such that each node
    of the linked list contains the vertex u and (v, u) E(G).




                                                      762

[PDF page 763; printed page 763]
20. The depth-first traversal of a graph is similar to the preorder traversal of a binary tree.
21. The breadth-first traversal of a graph is similar to the level-by-level traversal of a binary tree.
22. The shortest path algorithm gives the shortest distance for a given node to every other node in the
     graph.
23. In a weighted graph, every edge has a nonnegative weight.
24. The weight of the path P is the sum of the weights of all the edges on the path P, which is also called
     the weight of v from u via P.
25. A (free) tree T is a simple graph such that if u and v are two vertices in T, there is a unique path from
     u to v.
26. A tree in which a particular vertex is designated as a root is called a rooted tree.
27. Suppose T is a tree. If a weight is assigned to the edges in T, T is called a weighted tree.
28. If T is a weighted tree, the weight of T, denoted by W(T), is the sum of the weights of all the edges in
T.
29. A tree T is called a spanning tree of graph G if T is a subgraph of G such that V(T) = V(G)—that is, if all
     the vertices of G are in T.
30. Let G be a graph and V(G) = {v1, v2, . . ., vn}, where n ≥ 0. A topological ordering of V(G) is a linear
     ordering vi1, vi2, . . ., vin of the vertices such that if vij is a predecessor of vik, j ≠ k, 1 ≤ j, k ≤ n, then vij
     precedes vik, that is, j < k in this linear ordering.
31. A circuit is a path of nonzero length from a vertex u to u with no repeated edges.
32. A circuit in a graph that includes all the edges of the graph is called an Euler circuit.
33. A graph G is said to be Eulerian if either G is a trivial graph or G has an Euler circuit.


Exercises


Use the graph in Figure 10-27 for Exercises 1 through 4.




                                       FIGURE 10-27 Graph for Exercises 1 through 4



1. Find the adjacency matrix of the graph.



                                                           763

[PDF page 764; printed page 764]
2. Draw the adjacency list of the graph.


3. List the nodes of the graph in a depth-first traversal.


4. List the nodes of the graph in a breadth-first traversal.


5. Find the weight matrix of the graph in Figure 10-28.




                                                    764

[PDF page 765; printed page 765]
                                      FIGURE 10-28 Graph for Exercise 5



6. Consider the graph in Figure 10-29. Find the shortest distance from node 0 to every other node in the
   graph.




                                      FIGURE 10-29 Graph for Exercise 6



7. Find a spanning tree in the graph in Figure 10-30.




                                      FIGURE 10-30 Graph for Exercise 7



8. Find a spanning tree in the graph in Figure 10-31.




                                      FIGURE 10-31 Graph for Exercise 8



9. Find the minimum spanning tree for the graph in Figure 10-32 using the algorithm given in this chapter.
                                                    765

[PDF page 766; printed page 766]
                                       FIGURE 10-32 Graph for Exercise 9




10. List the nodes of the graph of Figure 10-33 in a breadth-first topological ordering.




                                       FIGURE 10-33 Graph for Exercise 10



11. Describe whether the graph in Figure 10-34 has an Euler circuit. If the graph has an Euler circuit, find
   one such circuit.




                                       FIGURE 10-34 Graph for Exercise 11




12. Describe whether the graph in Figure 10-35 has an Euler circuit. If the graph has an Euler circuit, find
   one such circuit.




                                                     766

[PDF page 767; printed page 767]
FIGURE 10-35 Graph for Exercise 12




              767
```
