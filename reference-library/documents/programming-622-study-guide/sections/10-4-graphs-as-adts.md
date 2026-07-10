---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "705-711"
printed_pages: "705-711"
section: "Graphs as ADTs"
chapter: "TOPIC 10: GRAPHS"
keywords:
  - "graph"
  - "postcondition"
  - "void"
  - "first"
  - "traversal"
  - "graphtype"
  - "vertex"
  - "depth"
  - "vertices"
  - "graphs"
  - "implement"
  - "perform"
---

# Graphs as ADTs

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 705-711 | printed pages 705-711

Related sections: [TOPIC 10: GRAPHS](10-topic-10-graphs.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [Breadth-First Topological Ordering](10-10-breadth-first-topological-ordering.md), [Graph Traversals](10-5-graph-traversals.md), [Operations on Graphs](10-3-operations-on-graphs.md), [Shortest Path](10-7-shortest-path.md)

## Extracted Text

```text
[PDF page 705; printed page 705]
10.4 Graphs as ADTs


In this section, we describe the class to implement graphs as an abstract data type (ADT) and provide the
 definitions of the functions to implement the operations on a graph.




                                                     705

[PDF page 706; printed page 706]
The following class defines a graph as an ADT:
//***************************************************************
// class graphType
// This class specifies the basic operations to implement a graph.
//**************************************************************** class
graphType
{
       public:


                 bool isEmpty() const;
                 //Function to determine whether the graph is empty.
                 //Postcondition: Returns true if the graph is empty; //
                 otherwise, returns false.


                 void createGraph(); //Function
                 to create a graph.
                 //Postcondition: The graph is created using the //
                 adjacency list representation.


                 void clearGraph(); //Function
                 to clear graph.
                 //Postcondition: The memory occupied by each vertex //
                 is deallocated.


                 void printGraph() const;
                 //Function to print graph.
                 //Postcondition: The graph is printed.


                 void depthFirstTraversal();
                 //Function to perform the depth first traversal of //the
                 entire graph.
                 //Postcondition: The vertices of the graph are printed //
                 using the depth first traversal algorithm.

                                                     706

[PDF page 707; printed page 707]
void dftAtVertex(int vertex);
//Function to perform the depth first traversal of
//the graph at a node specified by the parameter vertex.
//Postcondition: Starting at vertex, the vertices are //
printed using the depth first traversal algorithm.


void breadthFirstTraversal();
//Function to perform the breadth first traversal of //the
entire graph.
//Postcondition: The vertices of the graph are printed //
using the breadth first traversal algorithm.


graphType(int size = 0);
//Constructor




                                     707

[PDF page 708; printed page 708]
                //Postcondition: gSize = 0; maxSize = size; //
                graph is an array of pointers to linked lists.


                ~graphType();
                //Destructor
                //The storage occupied by the vertices is deallocated.


        protected:
                int maxSize; //maximum number of vertices int
                gSize; //current number of vertices
                unorderedLinkedList<int> *graph; //array to create //adjacency
                lists


        private:     void     dft(int   v,   bool
                visited[]);
                //Function to perform the depth first traversal of
                //the graph at a node specified by the parameter vertex. //This
                function is used by the public member functions
                //depthFirstTraversal and dftAtVertex.
                //Postcondition: Starting at vertex, the vertices are //
                printed using the depth first traversal algorithm.
};


We leave the UML class diagram of the class graphType as an exercise.
The definitions of the functions of the class graphType are discussed next.
A graph is empty if the number of vertices is 0—that is, if gSize is 0. Therefore, the definition of the function
isEmpty is as follows:


bool graphType::isEmpty() const
{ return (gSize == 0);
}


The definition of the function createGraph depends on how the data is input into the program. For

                                                      708

[PDF page 709; printed page 709]
illustration purposes, we assume that the data to the program is input from a file. The user is prompted
for the input file. The data in the file appears in the following form:


                       5
                       0 2 4 ... -999 1
                       3 6 8 ... -999
                       ...


The first line of input specifies the number of vertices in the graph. The first entry in the remaining lines
specifies the vertex, and all of the remaining entries in the line (except the last) specify the vertices that
are adjacent to the vertex. Each line ends with the number –999.


Using these conventions, the definition of the function createGraph is as follows:




                                                     709

[PDF page 710; printed page 710]
void graphType::createGraph()
{
       ifstream infile;
       char fileName[50];


       int vertex;
       int adjacentVertex;


       if (gSize != 0)                                  //if the graph is not empty, make it empty
                clearGraph();


       cout << "Enter input file name: ";
       cin >> fileName; cout << endl;

       infile.open(fileName);
       if (!infile)
       {
                cout << "Cannot open input file." << endl; return;
       }
       infile >> gSize;                                 //get the number of vertices
       for (int index = 0; index < gSize; index++)
       { infile >> vertex;
                infile >> adjacentVertex;


                while (adjacentVertex != -999)
                {
                          graph[vertex].insertLast(adjacentVertex); infile
                          >> adjacentVertex;
                }                                       //end while
       }                                                // end for


       infile.close();
}                                                       //end createGraph

                                                       710

[PDF page 711; printed page 711]
The function clearGraph empties the graph by deallocating the storage occupied by each linked list and
then setting the number of vertices to 0.


void graphType::clearGraph()
{ for (int index = 0; index < gSize; index++)
       graph[index].destroyList(); gSize = 0;
}                                                    //end clearGraph
The definition of the function printGraph is given next:




                                                    711
```
