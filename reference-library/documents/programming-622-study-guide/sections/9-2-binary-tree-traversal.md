---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "576-596"
printed_pages: "576-596"
section: "Binary Tree Traversal"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "binary"
  - "tree"
  - "traversal"
  - "node"
  - "traverse"
  - "inorder"
  - "subtree"
  - "visit"
  - "preorder"
  - "postorder"
  - "traversed"
  - "left"
---

# Binary Tree Traversal

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 576-596 | printed pages 576-596

Related sections: [Nonrecursive Binary Tree Traversal Algorithms](9-5-nonrecursive-binary-tree-traversal-algorithms.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Binary Search Trees](9-3-binary-search-trees.md), [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md), [AVL Tree Rotations](9-8-avl-tree-rotations.md)

## Extracted Text

```text
[PDF page 576; printed page 576]
9.2 Binary Tree Traversal


The item insertion, deletion, and lookup operations require that the binary tree be traversed. Thus, the
 most common operation performed on a binary tree is to traverse the binary tree, or visit each node of
 the binary tree. As you can see from the diagram of a binary tree, the traversal must start at the root node
 because there is a pointer to the root node. For each node, we have two choices:


         Visit the node first.
         Visit the subtrees first.


These choices lead to three different traversals of a binary tree—Inorder, preorder, and postorder.
 9.1.2 Inorder Traversal


In an inorder traversal, the binary tree is traversed as follows:
    1. Traverse the left subtree.




                                                     576

[PDF page 577; printed page 577]
    2. Visit the node.
    3. Traverse the right subtree.


9.1.3 Preorder Traversal


In a preorder traversal, the binary tree is traversed as follows:
    1. Visit the node.
    2. Traverse the left subtree.
    3. Traverse the right subtree.


9.1.4 Postorder Traversal


In a postorder traversal, the binary tree is traversed as follows:
    1. Traverse the left subtree.
    2. Traverse the right subtree.
    3. Visit the node.


Clearly, each of these traversal algorithms is recursive.


The listing of the nodes produced by the inorder traversal of a binary tree is called the inorder sequence.
The listing of the nodes produced by the preorder traversal of a binary tree is called the preorder
sequence. The listing of the nodes produced by the postorder traversal of a binary tree is called the
postorder sequence.


Before giving the C++ code for each of these traversals, let us illustrate the inorder traversal of the binary
tree in Figure 9-5. For simplicity, we assume that visiting a node means to output the data stored in the
node. The section, ‘‘Binary Tree Traversal and Functions as Parameters,’’ located later in this chapter,
explains how to modify the binary tree traversal algorithms so that by using a function, the user can specify
the action to be performed on a node when the node is visited.




                                                     577

[PDF page 578; printed page 578]
                                  FIGURE 9-5 Binary tree for an inorder traversal



A pointer to the binary tree in Figure 9-5 is stored in the pointer variable root (which points to the node
with info A). Therefore, we start the traversal at A.


   1. Traverse the left subtree of A; that is, traverse LA = {B, D}.

   2. Visit A.

   3. Traverse the right subtree of A; that is, traverse RA = {C}.


Now, we cannot do Step 2 until we have finished Step 1.




                                                       578

[PDF page 579; printed page 579]
   1. Traverse the left subtree of A; that is, traverse LA = {B, D}. Now LA is a binary tree with the root node
       B. Because LA is a binary tree, we apply the inorder traversal criteria to LA.


       1.1. Traverse the left subtree of B; that is, traverse LB = empty.
       1.2. Visit B.
       1.3. Traverse the right subtree of B; that is, traverse RB = {D}.


As before, first we complete Step 1.1 before going to Step 1.2.


       1.1. Because the left subtree of B is empty, there is nothing to traverse.
           Step 1.1 is completed, so we proceed to Step 1.2.
       1.2. Visit B. That is, output B on an output device. Clearly, the first node printed is B. This completes
            Step 1.2, so we proceed to Step 1.3.
       1.3. Traverse the right subtree of B; that is, traverse RB = {D}. Now RB is a binary tree with the root
            node D. Because RB is a binary tree, we apply the inorder traversal criteria to RB.


           1.3.1 Traverse the left subtree of D; that is, traverse LD = empty.
           1.3.2 Visit D.
           1.3.3 Traverse the right subtree of D; that is, traverse RD = empty.

           1.3.1. Because the left subtree of D is empty, there is nothing to traverse. Step 1.3.1 is
                       completed, so we proceed to Step 1.3.2.
           1.3.2. Visit D. That is, output D on an output device. This completes Step 1.3.2, so we proceed
                       to Step 1.3.3.
           1.3.3. Because the right subtree of D is empty, there is nothing to traverse. Step 1.3.3 is
                       completed.


This completes Step 1.3. Because Steps 1.1, 1.2, and 1.3 are completed, Step 1 is completed, and so we
go to Step 2.


   2. Visit A. That is, output A on an output device. This completes Step 2, so we proceed to Step 3.
   3. Traverse the right subtree of A; that is, traverse RA = {C}. Now RA is a binary tree with the root
       node C. Because RA is a binary tree, we apply the inorder traversal criteria to RA.


                                                     579

[PDF page 580; printed page 580]
       3.1. Traverse the left subtree of C; that is, traverse LC = empty.
       3.2. Visit C.
       3.3. Traverse the right subtree of C; that is, traverse RC = empty.


       3.1 Because the left subtree of C is empty, there is nothing to traverse. Step 3.1 is completed.
       3.2. Visit C. That is, output C on an output device. This completes Step 3.2, so we proceed to Step
            3.3.
       3.3. Because the right subtree of C is empty, there is nothing to traverse. Step 3.3 is completed.


This completes Step 3, which in turn completes the traversal of the binary tree.
Clearly, the inorder traversal of the previous binary tree outputs the nodes in the following order:
                       Inorder sequence: B D A C




                                                    580

[PDF page 581; printed page 581]
Similarly, the preorder and postorder traversals output the nodes in the following order:
                         Preorder sequence: A B D C
                         Postorder sequence: D B C A


As you can see from the walk-through of the inorder traversal, after visiting the left subtree of a node we
must come back to the node itself. The links are only in one direction; that is, the parent node points to
the left and right children, but there is no pointer from each child to the parent. Therefore, before going
to a child, we must somehow save a pointer to the parent node. A convenient way to do this is to write a
recursive inorder function because in a recursive call after completing a particular call, the control goes
back to the caller. (Later we discuss how to write nonrecursive traversal functions.) The recursive
definition of the function to implement the inorder traversal algorithms is as follows:


template <class elemType>
void inorder(binaryTreeNode<elemType> *p) const
{
       if (p != NULL)
       { inorder(p->llink); cout << p-
                 >info << " ";
                 inorder(p->rlink);
       }
}


To do the inorder traversal of a binary tree, the root node of the binary tree is passed as a parameter to
the function inorder. For example, if the root points to the root node of the binary tree, a call to the
function inorder is as follows:
inorder(root);


Similarly, we can write the functions to implement the preorder and postorder traversals.
The definitions of these functions are given next.


template <class elemType>
void preorder(binaryTreeNode<elemType> *p) const
{

                                                      581

[PDF page 582; printed page 582]
      if (p != NULL)
      { cout << p->info << " ";
              preorder(p->llink);
              preorder(p->rlink);
      }
}


template <class elemType>
void postorder(binaryTreeNode<elemType> *p) const
{
      if (p != NULL)




                                              582

[PDF page 583; printed page 583]
        { postorder(p->llink);
                postorder(p-
               >rlink);
               cout << p->info << " ";
       }
}


9.1.5 Implementing Binary Trees


The previous sections described various operations that can be performed on a binary tree, as well as the
functions to implement these operations. This section describes binary trees as an abstract data type
(ADT). Before designing the class to implement a binary tree as an ADT, let us list various operations that
are typically performed on a binary tree:


        Determine whether the binary tree is empty.
        Search the binary tree for a particular item.
        Insert an item in the binary tree.
        Delete an item from the binary tree.
        Find the height of the binary tree.
        Find the number of nodes in the binary tree.
        Find the number of leaves in the binary tree.
        Traverse the binary tree.
        Copy the binary tree.


The item search, insertion, and deletion operations all require the binary tree to be traversed. However,
because the nodes of a binary tree are in no particular order, these algorithms are not very efficient on
arbitrary binary trees. That is, no criteria exist to guide the search on these binary trees, as we will see in
the next section. Therefore, we will discuss these algorithms when we discuss special binary trees.


Other than for the search, insertion, and deletion operations, the following class defines binary trees as
an ADT. The definition of the node is the same as before. However, for the sake of completeness and easy
reference, we give the definition of the node followed by the definition of the class.
//*************************************************************

                                                     583

[PDF page 584; printed page 584]
// class binaryTreeType
// This class specifies the basic operations to implement a binary tree.
//*************************************************************
//Definition of the node template
<class elemType>
struct binaryTreeNode
{
       elemType info; binaryTreeNode<elemType>
       *llink;
       binaryTreeNode<elemType> *rlink;
};


//Definition of the class template
<class elemType>
class binaryTreeType




                                                    584

[PDF page 585; printed page 585]
{
    public:


              const   binaryTreeType<elemType>&          operator=(const   binaryTreeType<elemType>&);
              //Overload the assignment operator.


              bool isEmpty() const;
              //Returns true if the binary tree is empty; //otherwise,
              returns false.


              void inorderTraversal() const;
              //Function to do an inorder traversal of the binary tree.


              void preorderTraversal() const;
              //Function to do a preorder traversal of the binary tree.


              void postorderTraversal() const;
              //Function to do a postorder traversal of the binary tree.


              int treeHeight() const;
              //Returns the height of the binary tree.


              int treeNodeCount() const;
              //Returns the number of nodes in the binary tree.


              int treeLeavesCount() const;
              //Returns the number of leaves in the binary tree.


              void destroyTree();
              //Deallocates the memory space occupied by the binary tree.
              //Postcondition: root = NULL;


                                                  585

[PDF page 586; printed page 586]
       binaryTreeType(const binaryTreeType<elemType>& otherTree);
       //copy constructor


       binaryTreeType(); //default
       constructor


       ~binaryTreeType();
       //destructor
protected:
       binaryTreeNode<elemType> *root;
       private:




                                         586

[PDF page 587; printed page 587]
void               copyTree(binaryTreeNode<elemType>*          &copiedTreeRoot,
binaryTreeNode<elemType>* otherTreeRoot);
//Makes a copy of the binary tree to which
//otherTreeRoot points. The pointer copiedTreeRoot
//points to the root of the copied binary tree.


void destroy(binaryTreeNode<elemType>* &p);
//Function to destroy the binary tree to which p points.
//Postcondition: p = NULL


void inorder(binaryTreeNode<elemType> *p) const;
//Function to do an inorder traversal of the binary
//tree to which p points.


void preorder(binaryTreeNode<elemType> *p) const;
//Function to do a preorder traversal of the binary
//tree to which p points.


void postorder(binaryTreeNode<elemType> *p)
const; //Function to do a postorder traversal of the
binary //tree to which p points.
int height(binaryTreeNode<elemType> *p) const;
//Function to return the height of the binary tree //to
which p points.


int max(int x, int y) const; //Returns
the larger of x and y.


int nodeCount(binaryTreeNode<elemType> *p) const; //Function
to return the number of nodes in the binary
//tree to which p points


int leavesCount(binaryTreeNode<elemType> *p) const;
                                         587

[PDF page 588; printed page 588]
               //Function to return the number of leaves in the binary //tree
               to which p points
};


Notice that the definition of the class binaryTreeType contains the statement to overload the assignment
operator, copy constructor, and destructor. This is because the class binaryTreeType contains pointer data
members. Recall that for classes with pointer data members, the three things that we must do are
explicitly overload the assignment operator, include the copy constructor, and include the destructor.


The definition of the class binaryTreeType contains several member functions that are private members
of the class. These functions are used to implement the public member functions of the class and the user
need not know their existence. For example, to do an inorder traversal, the function inorderTraversal calls
the function inorder and passes the pointer root as a parameter to this function. Suppose that you have
the following statement:




                                                   588

[PDF page 589; printed page 589]
binaryTreeType<int> myTree;


The following statement does an inorder traversal of myTree:


myTree.inorder();


Also, note that in the definition of the class binaryTreeType, the pointer root is declared as a protected
member so that we can later derive special binary trees.


Next, we give the definitions of the member functions of the class binaryTreeType.

The binary tree is empty if root is NULL. So the definition of the function isEmpty is as follows:
template <class elemType>
bool binaryTreeType<elemType>::isEmpty() const
{ return (root == NULL);
}


The default constructor initializes the binary tree to an empty state; that is, it sets the pointer root to
NULL. Therefore, the definition of the default constructor is as follows:


template <class elemType>
binaryTreeType<elemType>::binaryTreeType()
{
       root = NULL;
}
The definitions of the other functions are as follows:


template <class elemType>
void binaryTreeType<elemType>::inorderTraversal() const
{
       inorder(root);
}


template <class elemType>
                                                     589

[PDF page 590; printed page 590]
void binaryTreeType<elemType>::preorderTraversal() const
{
       preorder(root);
}


template <class elemType>
void binaryTreeType<elemType>::postorderTraversal() const
{
       postorder(root);
}


template <class elemType>




                                               590

[PDF page 591; printed page 591]
int binaryTreeType<elemType>::treeHeight() const
{
       return height(root);
}


template <class elemType>
int binaryTreeType<elemType>::treeNodeCount() const
{
       return nodeCount(root);
}


template <class elemType>
int binaryTreeType<elemType>::treeLeavesCount() const
{
       return leavesCount(root);
}


template <class elemType>
void binaryTreeType<elemType>::inorder(binaryTreeNode<elemType> *p) const
{
       if (p != NULL)
       {
              inorder(p->llink); cout
              << p->info << " ";
              inorder(p->rlink);
       }
}


template <class elemType>
void binaryTreeType<elemType>::preorder(binaryTreeNode<elemType> *p) const
{
       if (p != NULL)
       { cout << p->info << " ";
                                                   591

[PDF page 592; printed page 592]
              preorder(p->llink);
              preorder(p->rlink);
      }
}


template <class elemType>
void binaryTreeType<elemType>::postorder(binaryTreeNode<elemType> *p) const
{
      if (p != NULL)
       { postorder(p->llink);
              postorder(p-
              >rlink);
              cout << p->info << " ";
      }
}




                                             592

[PDF page 593; printed page 593]
template <class elemType>
int binaryTreeType<elemType>::height(binaryTreeNode<elemType> *p) const
{ if (p == NULL) return 0; else return 1 + max(height(p->llink),
       height(p->rlink));
}


template <class elemType>
int binaryTreeType<elemType>::max(int x, int y) const
{
       if (x >= y) return
       x; else
                 return y;
}


The definitions of the functions nodeCount and leavesCount are left as exercises for you.


Next, we give the definitions of the functions copyTree, destroy, and destroyTree, as well as the definitions
of the copy constructor and the destructor, and overload the assignment operator.


The definition of the function copyTree is the same as before; here this function is a member of the class
binaryTreeType:


template <class elemType>
void binaryTreeType<elemType>::copyTree
(binaryTreeNode<elemType>* &copiedTreeRoot, binaryTreeNode<elemType>* otherTreeRoot)
{
       if (otherTreeRoot == NULL)
       copiedTreeRoot = NULL; else
       {
                 copiedTreeRoot = new binaryTreeNode<elemType>; copiedTreeRoot->info
                 = otherTreeRoot->info; copyTree(copiedTreeRoot->llink, otherTreeRoot-
                 >llink); copyTree(copiedTreeRoot->rlink, otherTreeRoot->rlink);

                                                     593

[PDF page 594; printed page 594]
       }
} //end copyTree


To destroy a binary tree, for each node, first we destroy its left subtree, then its right subtree, and then
the node itself. We must use the operator delete to deallocate the memory occupied by each node. The
definition of the function destroy is as follows:


template <class elemType>
void binaryTreeType<elemType>::destroy(binaryTreeNode<elemType>* &p)
{
       if (p != NULL)
        { destroy(p->llink);
                destroy(p-
               >rlink); delete p;
               p = NULL;




                                                    594

[PDF page 595; printed page 595]
        }
}


To implement the function destroyTree, we use the function destroy and pass the root node of the binary
tree to the function destroy. The definition of the function destroyTree is as follows:


template <class elemType>
void binaryTreeType<elemType>::destroyTree()
{ destroy(root);
}


Recall that when a class object is passed by value, the copy constructor copies the value of the actual
parameters into the formal parameters. Because the class binaryTreeType has pointer data members,
which creates dynamic memory, we must provide the definition of the copy constructor to avoid the
shallow copying of data. The definition of the copy constructor, given next, uses the function copyTree to
make an identical copy of the binary tree that is passed as a parameter.


//copy constructor template <class elemType>
binaryTreeType<elemType>::binaryTreeType
(const binaryTreeType<elemType>&
otherTree)
{
        if (otherTree.root == NULL) //otherTree is empty root
               = NULL;
        else copyTree(root, otherTree.root);
}


The definition of the destructor is quite straightforward. When an object of type binaryTreeType goes out
of scope, the destructor deallocates the memory occupied by the nodes of the binary tree. The definition
of the destructor uses the function destroy to accomplish this task.


//destructor
template <class elemType>

                                                    595

[PDF page 596; printed page 596]
binaryTreeType<elemType>::~binaryTreeType()
{ destroy(root);
}


Next, we discuss the function to overload the assignment operator. To assign the value of one binary tree
to another binary tree, we make an identical copy of the binary tree to be assigned by using the function
copyTree. The definition of the function to overload the assignment operator is as follows:




//overloading the assignment operator template
<class elemType>
const binaryTreeType<elemType>& binaryTreeType<elemType>::operator= (const
       binaryTreeType<elemType>& otherTree)
{ if (this != &otherTree) //avoid self-copy
        {




                                                  596
```
