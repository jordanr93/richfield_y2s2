---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "626-632"
printed_pages: "626-632"
section: "Binary Tree Traversal and Functions as Parameters"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "binary"
  - "tree"
  - "traversal"
  - "parameter"
  - "search"
  - "node"
  - "void"
  - "functions"
  - "employee"
  - "line"
  - "parameters"
  - "visit"
---

# Binary Tree Traversal and Functions as Parameters

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 626-632 | printed pages 626-632

Related sections: [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Nonrecursive Binary Tree Traversal Algorithms](9-5-nonrecursive-binary-tree-traversal-algorithms.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Binary Search Trees](9-3-binary-search-trees.md), [Containers and the Functions begin and end](2-4-containers-and-the-functions-begin-and-end.md), [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md)

## Extracted Text

```text
[PDF page 626; printed page 626]
9.6 Binary Tree Traversal and Functions as Parameters


Suppose that you have stored employee data in a binary search tree, and at the end of the year pay
 increases or bonuses are to be awarded to each employee. This task requires that each node in the binary
 search tree be visited and that the salary of each employee be updated. The preceding sections discussed
 various ways to traverse a binary tree. However, in these traversal algorithms—inorder, preorder, and
 postorder—whenever we visited a node, for simplicity and for illustration purposes, we only output the
 data contained in each node. How do we use a traversal algorithm to visit each node and update the data
 in each node? One way to do so is to first create another binary search tree in which the data in each node
 is the updated data of the original binary search tree, and then destroy the old binary search tree. This
 would require extra computer time and perhaps extra memory, and, therefore, is not efficient. Another
 solution is to write separate traversal algorithms to update the data. This solution requires you to

                                                     626

[PDF page 627; printed page 627]
frequently modify the definition of the class implementing the binary search tree. However, if the user
can write an appropriate function to update the data of each employee and then pass this function as a
parameter to the traversal algorithms, we can considerably enhance the program’s flexibility. This section
describes how to pass functions as parameters to other functions.


In C++, a function name without any parentheses is considered a pointer to the function. To specify a
function as a formal parameter to another function, we specify the function type, followed by the function
name as a pointer, followed by the parameter types of the function. For example, consider the following
statements:




                      void fParamFunc1(void (*visit) (int));               //Line 1 void
                      fParamFunc2(void (*visit) (elemType&));       //Line 2




                                                   627

[PDF page 628; printed page 628]
The statement in Line 1 declares fParamFunc1 to be a function that takes as a parameter any void function
that has one value parameter of type int. The statement in Line 2 declares fParamFunc2 to be a function
that takes as a parameter any void function that has one reference parameter of type elemType.


We can now rewrite the inorder traversal function of the class binaryTreeType. Alternatively, we can
overload the existing inorder traversal functions. To further illustrate function overloading, we will
overload the inorder traversal functions. Therefore, we include the following statements in the definition
of the class binaryTreeType:


                           void inorderTraversal(void (*visit) (elemType&)); //Function
                           to do an inorder traversal of the binary tree. //The
                           parameter visit, which is a function, specifies the //action
                           to be taken at each node.


                           void inorder(binaryTreeNode<elemType> *p, void (*visit) (elemType&));
                           //Function to do an inorder traversal of the binary
                           //tree, starting at the node specified by the parameter p. //The
                           parameter visit, which is a function, specifies the //action to
                           be taken at each node.


The definitions of these functions are as follows:


template <class elemType>
void binaryTreeType<elemType>::inorderTraversal(void (*visit) (elemType& item))
{ inorder(root, *visit);
}


template <class elemType>
void binaryTreeType<elemType>::inorder(binaryTreeNode<elemType>* p, void
        (*visit) (elemType& item))
{
        if (p != NULL)
        { inorder(p->llink, *visit);

                                                        628

[PDF page 629; printed page 629]
                (*visit)(p->info);
                inorder(p->rlink, *visit);
       }
}


The statement


                        (*visit)(p->info);


in the definition of the function inorder makes a call to the function with one reference parameter of the
type elemType pointed to by the pointer visit.

Example 9-3 further illustrates how functions are passed as parameters to other functions.
EXAMPLE 9-3




                                                   629

[PDF page 630; printed page 630]
This example shows how to pass a user-defined function as a parameter to the binary tree traversal
algorithms. For illustration purposes, we show how to use only the inorder traversal function.


The following program uses the class bSearchTreeType, which is derived from the class binaryTreeType,
to build the binary tree. The traversal functions are included in the class binaryTreeType, which are then
inherited by the class bSearchTreeType.
//*************************************************************
* // This program illustrates how to pass a user-defined function // as a
parameter to the binary tree traversal algorithms.
//**************************************************************
#include <iostream>                                                                      //Line 1

#include "binarySearchTree.h"                                                            //Line 2




using namespace std;                                                                      //Line 3




void print(int& x);                                                                      //Line 4

void update(int& x);                                                                     //Line 5




int main()                                                                               //Line 6

{                                                                                        //Line 7

        bSearchTreeType<int> treeRoot;                                                   //Line 8




       int num;                                                                          //Line 9




        cout << "Line 10: Enter numbers ending with -999"<< endl;                        //Line 10

        cin >> num;                                                                      //Line 11
                                                     630

[PDF page 631; printed page 631]
while (num != -999)                                   //Line 12

{                                                     //Line 13

       treeRoot.insert(num);                          //Line 14

       cin >> num;                                    //Line 15

}                                                     //Line 16




cout << endl << "Line 17: Tree nodes in inorder: ";   //Line 17

treeRoot.inorderTraversal(print);                     //Line 18




                                            631

[PDF page 632; printed page 632]
       cout << endl << "Line 19: Tree Height: "<< treeRoot.treeHeight()<< endl << endl; //Line 19


       cout    <<     "Line    20:   *******     Update       Nodes   *******"<<   endl;        //Line   20
       treeRoot.inorderTraversal(update);            //Line 21


       cout << "Line 22: Tree nodes in inorder after "<< "the update: " << endl << " "; //Line 22
       treeRoot.inorderTraversal(print);         //Line 23 cout << endl <<"Line 24: Tree Height: "<<
       treeRoot.treeHeight() << endl; //Line 24 return 0;
                                         //Line 25
}                                                                                          //Line 26


void print(int& x)                                                                         //Line 27
{       //Line 28 cout << x << " ";        //Line 29
}                                                                                          //Line 30


void update(int& x)                                                                        //Line 31
{       //Line 32 x = 2 * x;         //Line 33
}                                                                                          //Line 34
Sample Run: In this sample run, the user input is shaded.
Line 10: Enter numbers ending with -999
56 87 23 65 34 45 12 90 66 -999


Line 17: Tree nodes in inorder: 12 23 34 45 56 65 66 87 90
Line 19: Tree Height: 4


Line 20: ******* Update Notes *******
Line 22: Tree nodes in inorder after the update:
         24 46 68 90 112 130 132 174 180
Line 24: Tree Height: 4


This program works as follows. The statement in Line 8 declares treeRoot to be a binary search tree object,
in which the data in each node is of type int. The statements in Lines 11 through 16 build the binary search
tree. The statement in Line 18 uses the member function inorderTraversal of treeRoot to traverse the
                                                        632
```
