---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "712-719"
printed_pages: "712-719"
section: "Graph Traversals"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "graph"
  - "vertex"
  - "depth-first"
  - "visited"
  - "traversal"
  - "vertices"
  - "search"
  - "not"
  - "figure"
  - "starts"
  - "traverse"
  - "tree"
---

# Graph Traversals

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 712-719 | printed pages 712-719

Related sections: [Graph Definitions and Notations](10-2-graph-definitions-and-notations.md), [Graphs as ADTs](10-4-graphs-as-adts.md), [B-Trees](9-9-b-trees.md), [Binary Search Trees](9-3-binary-search-trees.md), [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 712; printed page 712]
10.5 Graph Traversals


Processing a graph requires the ability to traverse the graph. This section discusses the graph traversal
 algorithms.


Traversing a graph is similar to traversing a binary tree, except that traversing a graph is a bit more
 complicated. Now a binary tree has no cycles and starting at the root node we can traverse the entire
 tree. On the other hand, a graph might have cycles and we might not be able to traverse the entire graph
                                                   712

[PDF page 713; printed page 713]
from a single vertex (for example, if the graph is not connected). Therefore, we must keep track of the
vertices that have been visited. We must also traverse the graph from each vertex (that has not been
visited) of the graph. This ensures that the entire graph is traversed.


The two most common graph traversal algorithms are the depth-first traversal and breadth-first traversal,
which are described next. For simplicity, we assume that when a vertex is visited, its index is output.
Moreover, each vertex is visited only once. We use the bool array visited to keep track of the visited
vertices.




10.1.3 Depth-First Traversal


The depth-first traversal is similar to the preorder traversal of a binary tree. The general algorithm is as
follows: for each vertex, v, in the graph if v is not visited start the depth first traversal at v




                                                       713

[PDF page 714; printed page 714]
Consider the graph G3 of Figure 10-4. It is shown here again as Figure 10-7 for easy reference.




                                                 FIGURE 10-7 Directed graph G3



The depth-first ordering of the vertices of graph G3 in Figure 10-7 is as follows:
                        0 1 2 4 3 5 6 8 10 7 9


For the graph of Figure 10-7, the depth-first search starts at the vertex 0. After visiting all the vertices that
can be reached starting at the vertex 0, the depth-first search starts at the next vertex that is not visited.
There is a path from the vertex 0 to every other vertex except the vertices 7 and 9. Therefore, when the
depth-first search starts at the vertex 0, all the vertices except 7 and 9 are visited before these vertices.
After completing the depth-first search that started at the vertex 0, the depth-first search starts at the
vertex 7 and then at the vertex 9. Note that there is no path from the vertex 7 to the vertex 9. Therefore,
after completing the depth-first search that started at the vertex 7, the depth-first search starts at the
vertex 9. The general algorithm to do a depth-first traversal at a given node, v, is as follows:


    1. mark node v as visited
    2. visit the node
    3. for each vertex u adjacent to v if u is not visited start the depth first traversal at u


Clearly, this is a recursive algorithm. We use a recursive function, dft, to implement this algorithm. The
vertex at which the depth-first traversal is to be started, and the bool array visited, are passed as
parameters to this function.


void graphType::dft(int v, bool visited[])
{ visited[v] = true;
        cout << " " << v << " ";                                  //visit the vertex linkedListIterator<int>
        graphIt;
                                                        714

[PDF page 715; printed page 715]
                                                            //for each vertex adjacent to v
       for (graphIt = graph[v].begin(); graphIt != graph[v].end();++graphIt)
       {
              int w = *graphIt; if
              (!visited[w]) dft(w,
              visited);
       }                                                    //end loop
}                                                           //end dft


In the preceding code, note that the statement




                                                   715

[PDF page 716; printed page 716]
                         linkedListIterator<int> graphIt;


declares graphIt to be an iterator. In the for loop, we use it to traverse a linked list (adjacency list) to which
the pointer graph[v] points. Next, let us look at the statement


                         int w = *graphIt;


The expression *graphIt returns the label of the vertex, adjacent to the vertex v, to which graphIt points.


Next, we give the definition of the function depthFirstTraversal to implement the depth-first traversal of
the graph.


void graphType::depthFirstTraversal()
{

        bool *visited;                                          //pointer to create the array to keep
                                                                //track of the visited vertices
        visited = new bool[gSize];
        for (int index = 0; index < gSize; index++)
                visited[index] = false;
                                                                //For each vertex that is not visited, do a
                                                                //depth first traverssal

        for (int index = 0; index < gSize; index++) if
                (!visited[index]) dft(index,visited);
        delete [] visited;
}                                                               //end depthFirstTraversal


The function depthFirstTraversal performs a depth-first traversal of the entire graph. The definition of the
function dftAtVertex, which performs a depth-first traversal at a given vertex, is as follows:


void graphType::dftAtVertex(int vertex)
{
        bool *visited;

                                                         716

[PDF page 717; printed page 717]
      visited = new bool[gSize];


      for (int index = 0; index < gSize; index++) visited[index]
              = false;
      dft(vertex, visited);
      delete [] visited;
}                                                            // end dftAtVertex
10.1.4 Breadth-First Traversal




                                                    717

[PDF page 718; printed page 718]
The breadth-first traversal of a graph is similar to traversing a binary tree level-by-level (the nodes at each
level are visited from left to right). All the nodes at any level, i, are visited before visiting the nodes at level
i + 1.


The breadth-first ordering of the vertices of the graph G3 in Figure 10-7 is as follows:
                        0 1 5 2 3 6 4 8 10 7 9
For the graph G3, we start the breadth traversal at vertex 0. After visiting the vertex 0, we visit the vertices
that are directly connected to it and are not visited, which are 1 and 5. Next, we visit the vertices that are
directly connected to 1 and are not visited, which are 2 and 3. After this, we visit the vertices that are
directly connected to 5 and are not visited, which is 6. After this, we visit the vertices that are directly
connected to 2 and are not visited, and so on.


As in the case of the depth-first traversal, because it might not be possible to traverse the entire graph
from a single vertex, the breadth-first traversal also traverses the graph from each vertex that is not
visited. Starting at the first vertex, the graph is traversed as much as possible; we then go to the next
vertex that has not been visited. To implement the breadth-first search algorithm, we use a queue. The
general algorithm is as follows:


    1. for each vertex v in the graph if v is not visited
                        add v to the queue                       //start the breadth first search at v
    2. Mark v as visited
    3. while the queue is not empty
         3.1. Remove vertex u from the queue
         3.2. Retrieve the vertices adjacent to u 3.3.
             for each vertex w that is adjacent to u
             if w is not visited
                3.3.1 Add w to the queue
                3.3.2 Mark w as visited

The following C++ function, breadthFirstTraversal, implements this algorithm:
void graphType::breadthFirstTraversal()
{
         linkedQueueType<int> queue;



                                                         718

[PDF page 719; printed page 719]
bool *visited;
visited = new bool[gSize];


for (int ind = 0; ind < gSize; ind++)
        visited[ind] = false;                       //initialize the array
                                                    //visited to false


linkedListIterator<int> graphIt;


for (int index = 0; index < gSize; index++)




                                              719
```
