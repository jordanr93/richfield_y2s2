---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "721-731"
printed_pages: "721-731"
section: "Shortest Path"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "graph"
  - "vertex"
  - "shortest"
  - "path"
  - "weight"
  - "every"
  - "matrix"
  - "let"
  - "weightedgraphtype"
  - "postcondition"
  - "void"
  - "int"
---

# Shortest Path

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 721-731 | printed pages 721-731

Related sections: [Shortest Path Algorithm](10-6-shortest-path-algorithm.md), [Retrieving A Filename from A Path](../../internet-programming-622-study-guide/sections/3-4-retrieving-a-filename-from-a-path.md), [Graphs as ADTs](10-4-graphs-as-adts.md), [6. 7 BACKUP AND RECOVERY](../../information-systems-622-study-guide/sections/6-6-7-backup-and-recovery.md), [Fault Management](../../information-systems-622-study-guide/sections/6-4-1-fault-management.md), [SYSTEM SECURITY](../../information-systems-622-study-guide/sections/6-5-system-security.md)

## Extracted Text

```text
[PDF page 721; printed page 721]
shortest path (that is, the path with the smallest weight) from her or his city to every other city in the
graph. Many such problems exist in which we want to find the shortest path from a given vertex, called
the source, to every other vertex in the graph.


This section describes the shortest path algorithm, also called a greedy algorithm, developed by Dijkstra.




                                                    721

[PDF page 722; printed page 722]
Let G be a graph with n vertices, where n ≥ 0. Let V(G) = {v1, v2, . . ., vn}. Let W be a two-dimensional n x n




matrix such that


The input to the program is the graph and the weight matrix associated with the graph. To make inputting
the data easier, we extend the definition of the class graphType (using inheritance), and add the function
createWeightedGraph to create the graph and the weight matrix associated with the graph. Let us call
this class weightedGraphType. The functions to implement the shortest path algorithm will also be added
to this class.
//***************************************************************
// class weightedGraphType
// This class specifies the operations to find the weight of the
// shortest path from a given vertex to every other vertex in a graph.
//**************************************************************** class
weightedGraphType: public graphType
{
        public:
                  void createWeightedGraph();
                  //Function to create the graph and the weight matrix.
                  //Postcondition: The graph using adjacency lists and
                  // its weight matrix is created.


                  void shortestPath(int vertex);
                  //Function to determine the weight of a shortest path
                  //from vertex, that is, source, to every other vertex
                  //in the graph.
                  //Postcondition: The weight of the shortest path from vertex //
                  to every other vertex in the graph is determined.


                  void printShortestDistance(int vertex);
                  //Function to print the shortest weight from the vertex
                  //specified by the parameter vertex to every other vertex in //the

                                                       722

[PDF page 723; printed page 723]
graph.
//Postcondition: The weight of the shortest path from vertex //
to every other vertex in the graph is printed.


weightedGraphType(int size = 0);
//Constructor
//Postcondition: gSize = 0; maxSize = size; //
graph is an array of pointers to linked lists.
// weights is a two-dimensional array to store the weights //
of the edges.
// smallestWeight is an array to store the smallest weight //
from source to vertices.


~weightedGraphType();




                                      723

[PDF page 724; printed page 724]
                 //Destructor
                 //The storage occupied by the vertices and the arrays //weights
                 and smallestWeight is deallocated.


         protected:
                 double **weights;              //pointer to create weight matrix double
                 *smallestWeight;       //pointer to create the array to store
                                                //the smallest weight from source to vertices
 };


 We leave the UML class diagram of the class weightedGraphType and the inheritance hierarchy as an
 exercise. The definition of the function createWeightedGraph is also left as an exercise for you. Next, we
 describe the shortest path algorithm.


10.7 Shortest Path


 Given a vertex, say vertex (that is, a source), this section describes the shortest path algorithm. The general
 algorithm is as follows:


 1. Initialize the array smallestWeight so that smallestWeight[u] = weights[vertex, u]
 2. Set smallestWeight[vertex] = 0.
 3. Find the vertex v that is closest to vertex for which the shortest path has not been determined.
 4. Mark v as the (next) vertex for which the smallest weight is found.
5. For each vertex w in G, such that the shortest path from vertex to w has not been determined and an
      edge (v, w) exists, if the weight of the path to w via v is smaller than its current weight, update the
      weight of w to the weight of v + the weight of the edge (v, w).


 Because there are n vertices, Steps 3 through 5 are repeated n - 1 times. Example 10-5 illustrates the
 shortest path algorithm. (We use the Boolean array weightFound to keep track of the vertices for which
 the smallest weight from the source vertex has been found. If the smallest weight for a vertex, from the
 source, has been found, then this vertex’s corresponding entry in the array weightFound is set to true;
 otherwise the corresponding entry is false.)


                                                      724

[PDF page 725; printed page 725]
EXAMPLE 10-5
Let G be the graph shown in Figure 10-8.




                                        FIGURE 10-8 Weighted graph G



Suppose that the source vertex of G is 0. The graph shows the weight of each edge. After Steps 1 and 2
execute, the resulting graph is as shown in Figure 10-9.




                                                   725

[PDF page 726; printed page 726]
                                  FIGURE 10-9 Graph after Steps 1 and 2 execute



Iteration 1 of Steps 3 through 5: At Step 3, we select a vertex that is closest to the vertex 0 and for which
the shortest path has not been found. We do this by finding a vertex in the array smallestWeight that has
the smallest weight and its corresponding entry in the array weightFound is false. Therefore, in this
iteration, we select the vertex 3. At Step 4, we mark weightFound[3] as true. Next at Step 5, we consider
vertices 1 and 4 because these are the vertices for which there is an edge from the vertex 3 and the
shortest path from 0 to these vertices has not been found. We then check if the path from the vertex 0 to
the vertices 1 and 4 via the vertex 3 can be improved. The weight of the path 0-3-1 from 0 to 1 is less than
the weight of the path 0-1. So we update smallestWeight[1] to 14. The weight of the path 0-3-4, which is
2 + 7 = 9, is greater than the weight of the path 0-4, which is 3. So we do not update the weight of the
vertex 4. Figure 10-10 shows the resulting graph. (The dotted arrow shows the shortest path from the
source—that is, from 0—to the vertex.)




                             FIGURE 10-10 Graph after the first iteration of Steps 3 to 5



Iteration 2 of Steps 3 through 5: At Step 3, we select vertex 4 because this is the vertex in the array
smallestWeight that has the smallest weight and its corresponding entry in the array weightFound is false.
Next we execute Steps 4 and 5. At Step 4, we set weightFound[4] to true. At Step 5, we consider vertices
1 and 2 because these are the vertices for which there is an edge from the vertex 4 and the shortest path
from 0 to these vertices has not been found.We then check if the path from the vertex 0 to the vertices 1
and 2 via the vertex 4 can be improved. Clearly, the weight of the path 0-4-1, which is 13, is smaller than
the current weight of 1, which is 14. So we update smallestWeight[1]. Similarly, we update
                                          726

[PDF page 727; printed page 727]
smallestWeight[2]. Figure 10-11 shows the resulting graph.




                                                 727

[PDF page 728; printed page 728]
                           FIGURE 10-11 Graph after the second iteration of Steps 3 to 5



Iteration 3 of Steps 3 through 5: At Step 3, the vertex selected is 2. At Step 4, we set weightFound[2] to
true. Next at Step 5, we consider the vertex 1 because this is the vertex for which there is an edge from
the vertex 2 and the shortest path from 0 to this vertex has not been found. We then check if the path
from the vertex 0 to the vertex 1 via the vertex 2 can be improved. Clearly, the weight of the path 0-4-21,
which is 10, from 0 to 1 is smaller than the current weight of 1 (which is 13). So we update
smallestWeight[1]. Figure 10-12 shows the resulting graph.




                            FIGURE 10-12 Graph after the third iteration of Steps 3 to 5



Iteration 4 of Steps 3 through 5: At Step 3, the vertex 1 is selected and at Step 4, weightFound[1] is set to
true. In this iteration, the action of Step 5 is null because the shortest path from the vertex 0 to every
other vertex in the graph has been determined. Figure 10-13 shows the final graph.




                         FIGURE 10-13 Graph after the fourth iteration of Steps 3 through 5



The following C++ function, shortestPath, implements the previous algorithm:

                                                       728

[PDF page 729; printed page 729]
void weightedGraphType::shortestPath(int vertex)
{
       for (int j = 0; j < gSize; j++) smallestWeight[j] =
               weights[vertex][j];




                                                       729

[PDF page 730; printed page 730]
        bool *weightFound; weightFound
         = new bool[gSize]; for (int j = 0; j
         < gSize; j++)
                 weightFound[j] = false;


        weightFound[vertex] = true;
        smallestWeight[vertex] = 0;


        for (int i = 0; i < gSize - 1; i++)
        {
                 double minWeight = DBL_MAX; int
                 v;


                 for (int j = 0; j < gSize; j++) if (!weightFound[j]) if
                         (smallestWeight[j] < minWeight)
                                   {
                                              v = j;
                                              minWeight = smallestWeight[v];
                                   }
                          weightFound[v] = true;
                          for (int j = 0; j < gSize; j++)
                                   if (!weightFound[j])
                                              if (minWeight + weights[v][j] < smallestWeight[j]) smallestWeight[j]
                                                       = minWeight + weights[v][j];
        }                                                     //end for
}                                                             //end shortestPath


Note that the function shortestPath records only the weight of the shortest path from the source to a
vertex. We leave it for you to modify this function so that the shortest path from the source to a vertex is
also recorded. Moreover, this function uses the named constant DBL_MAX, which is defined in the header
file cfloat.


Let G be a graph with n vertices. In the function shortestPath, the first for loop executes n times and the
                                                            730

[PDF page 731; printed page 731]
second for loop also executes n times. The third for loop executes n – 1 times. The body of the third for
loop contains two for loops, in sequence, and each of these for loops executes n times. Thus, the total
number of iterations of the for loops is n + n + (n – 1)(n + n) = 2n + 2n(n – 1) = O(n2). Hence, the function
shortestPath, that is, the shortest path algorithm is of order O(n2).

The definitions of the function printShortestDistance and the constructor and destructor are as follows:
void weightedGraphType::printShortestDistance(int vertex)
{
       cout << "Source Vertex: " << vertex << endl;
       cout << "Shortest distance from source to each vertex."<< endl; cout
       << "Vertex Shortest_Distance" << endl;
for (int j = 0; j < gSize; j++) cout << setw(4) << j << setw(12) <<
       smallestWeight[j]<< endl; cout << endl;
} //end printShortestDistance




                                                      731
```
