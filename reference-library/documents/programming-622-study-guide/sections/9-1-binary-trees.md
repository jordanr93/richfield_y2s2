---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "567-575"
printed_pages: "567-575"
section: "Binary Trees"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "item"
  - "search"
  - "list"
  - "binary"
  - "deletion"
  - "insertion"
  - "array"
  - "trees"
  - "you"
  - "what"
  - "such"
  - "because"
---

# Binary Trees

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 567-575 | printed pages 567-575

Related sections: [Binary Search Trees](9-3-binary-search-trees.md), [Binary Search](7-4-binary-search.md), [TOPIC 9: BINARY TREES AND B-TREES](9-topic-9-binary-trees-and-b-trees.md), [AVL (Height-Balanced) Trees](9-7-avl-height-balanced-trees.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 567; printed page 567]
9       TOPIC 9: BINARY TREES AND B-TREES
                         LEARNING OUTCOMES:
                         After studying this topic you should be able to:

                        •   Understand the importance of programming language paradigms

                        •   Become aware of structured-design and object-oriented design
                            programming methodologies
                        •   Learn what an algorithm is and explore problem-solving techniques

                        •   Discover what a compiler is and what it does

                        •   Examine a C++ program

                        •   Explore how a C++ program is processed



When data is being organized, a programmer’s highest priority is to organize it in such a way that item
 insertion, deletion, and lookups (searches) are fast. You have already seen how to store and process data
 in an array. Because an array is a random access data structure, if the data is properly organized (for
 example, sorted), we can use a search algorithm, such as a binary search, to effectively find and retrieve
 an item from the list. However, we know that storing data in an array has its limitations. For example,
 iteminsertion (especially if the array is sorted) and item deletion can be very time consuming, especially
 if the list size is very large, because each of these operations requires data movement. To speed up item
 insertion and deletion, we can use linked lists. Item insertion and deletion in a linked list do not require
 any data movement; we simply adjust some of the pointers in the list. However, one of the drawbacks of
 linked lists is that theymust be processed sequentially. That is, to insert or delete an item, or simply search
 the list for a particular item, we must begin our search at the first node in the list. As you know, a
 sequential search is good only for very small lists because the average search length of a sequential search
 is half the size of the list.


9.1 Binary Trees


This chapter discusses how to dynamically organize data so that item insertion, deletion, and lookups are
 more efficient.


We first introduce some definitions to facilitate our discussion.



                                                       567

[PDF page 568; printed page 568]
Definition: A binary tree, T, is either empty or such that


        i. T has a special node called the root node.
        ii. T has two sets of nodes, LT and RT, called the left subtree and right subtree of T, respectively.
        iii. LT and RT are binary trees.


A binary tree can be shown pictorially. Suppose that T is a binary tree with a root node A. Let L A denote
the left subtree of A and RA denote the right subtree of A. Now LA and RA are binary trees. Suppose that B
is the root node of LA and C is the root node of RA. B is called the left child of A; C is called the right child
of A. Furthermore, A is called the parent of B and C.


In the diagram of a binary tree, each node of the binary tree is represented as a circle and the circle is
labeled by the node. The root node of the binary tree is drawn at the top. The left child of the root node
(if any) is drawn below and to the left of the root node. Similarly, the right child of the root node (if any)




                                                      568

[PDF page 569; printed page 569]
is drawn below and to the right of the root node. Children are connected to the parent by an arrow from
the parent to the child. An arrow is usually called a directed edge or a directed branch (or simply a branch).
Because the root node, B, of LA is already drawn, we apply the same procedure to draw the remaining
parts of LA. RA is drawn similarly. If a node has no left child, for example, when we draw an arrow from
the node to the left child, we end the arrow with three lines. That is, three lines at the end of an arrow
indicate that the subtree is empty.


The diagram in Figure 9-1 is an example of a binary tree. The root node of this binary tree is A. The left
subtree of the root node, which we denoted by LA, is the set LA = {B, D, E, G} and the right subtree of the
root node, which we denote by RA, is the set RA = {C, F, H}. The root node of the left subtree of A—that is,
the root node of LA—is node B. The root node of RA is C, and so on. Clearly, LA and RA are binary trees.
Because three lines at the end of an arrow mean that the subtree is empty, it follows that the left subtree
of D is empty.




                                               FIGURE 9-1 Binary tree



In Figure 9-1, the left child of A is B and the right child of A is C. Similarly, for node F, the left child is H and
node F has no right child.

Example 9-1 shows nonempty binary trees.
EXAMPLE 9-1
Figure 9-2 shows binary trees with one, two, or three nodes.




                                 FIGURE 9-2 Binary tree with one, two, or three nodes



                                                        569

[PDF page 570; printed page 570]
In the binary tree of Figure 9-2(a), the root node is A, LA = empty, and RA = empty.


In the binary tree of Figure 9-2(b), the root node is A, LA = {B}, and RA = empty. The root node of LA = B, LB
= empty, and RB = empty.


In the binary tree of Figure 9-2(c), the root node is A, LA = empty, RA = {C}. The root node of RA = C, LC =
empty, and RC = empty.




                                                     570

[PDF page 571; printed page 571]
In the binary tree of Figure 9-2(d), the root node is A, LA = {B}, RA = {C}. The root node of LA = B, LB = empty,
RB = empty. The root node of RA = C, LC = empty, RC = empty.


EXAMPLE 9-2
This example shows other cases of nonempty binary trees with three nodes. See Figure 9-3.




                                  FIGURE 9-3 Various binary trees with three nodes



As you can see from the preceding examples, every node in a binary tree has at most two children. Thus,
every node, other than storing its own information, must keep track of its left subtree and right subtree.
This implies that every node has two pointers, llink and rlink. The pointer llink points to the root node of
the left subtree; the pointer rlink points to the root node of the right subtree.


The following struct defines the node of a binary tree:
template <class elemType>
struct binaryTreeNode
{
        elemType info; binaryTreeNode<elemType>
        *llink;
        binaryTreeNode<elemType> *rlink;
};


        From the definition of the node, it is clear that for each
        node, The data is stored in info.
        A pointer to the left child is stored in llink.
        A pointer to the right child is stored in rlink.


Furthermore, a pointer to the root node of the binary tree is stored outside the binary tree in a pointer

                                                          571

[PDF page 572; printed page 572]
variable, usually called the root, of type binaryTreeNode. Thus, in general, a binary tree looks like the
diagram in Figure 9-4.




                                                  572

[PDF page 573; printed page 573]
                                              FIGURE 9-4 Binary tree

For simplicity, we will continue to draw binary trees as before. That is, we use circles to represent nodes,
and left and right arrows to represent links. As before, three lines at the end of an arrow mean that the
subtree is empty.


Before we leave this section, let us define a few more terms.


A node in the binary tree is called a leaf if it has no left and right children. Let U and V be two nodes in the
binary tree T. U is called a parent of V if there is a branch from U to V. A path from a node X to a node Y
in the binary tree is a sequence of nodes X0, X1, . . . , Xn such that




Because the branches go only from a parent to its children, from the previous discussion it is clear that in
a binary tree, there is a unique path from the root to every node in the binary tree.


Definition: The level of a node in a binary tree is the number of branches on the path from the root to the
node.


Clearly, the level of the root node of a binary tree is 0, and the level of the children of the root node is 1.
Definition: The height of a binary tree is the number of nodes on the longest path from the root to a leaf.
Suppose that a pointer p to the root node of a binary tree is given. We next describe the C++ function
height to find the height of the binary tree. The pointer to the root node is passed as a parameter to the
function height.


If the binary tree is empty, the height is 0. Suppose that the binary tree is nonempty. To find the height of
the binary tree, we first find the height of the left subtree and the height of the right subtree. We then
take the maximum of these two heights and add 1 to find the height of the binary tree. To find the height
of the left (right) subtree, we apply the same procedure because the left (right) subtree is a binary tree.
Therefore, the general algorithm to find the height of a binary tree is as follows. Suppose height(p)
denotes the height of the binary tree with root p.



                                                      573

[PDF page 574; printed page 574]
                       if (p is NULL) height(p) = 0 else height(p) = 1 + max(height(p-
                       >llink), height(p->rlink))
Clearly, this is a recursive algorithm. The following function implements this algorithm:
template <class elemType>
int height(binaryTreeNode<elemType> *p) const
{ if (p == NULL) return 0; else return 1 + max(height(p->llink),
       height(p->rlink));
}




                                                     574

[PDF page 575; printed page 575]
The definition of the function height uses the function max to determine the larger of two integers. The
function max can be easily implemented.


Similarly, we can implement algorithms to find the number of nodes and number of leaves in a binary
tree.


9.1.1 Copy Tree


One useful operation on binary trees is to make an identical copy of a binary tree. A binary tree is a
dynamic data structure; that is, memory for its nodes is allocated and deallocated during program
execution. Therefore, if we use just the value of the pointer of the root node to make a copy of a binary
tree, we get a shallow copy of the data. To make an identical copy of a binary tree, we need to create as
many nodes as there are in the binary tree to be copied. Moreover, in the copied tree, these nodes must
appear in the same order as they are in the original binary tree.


Given a pointer to the root node of a binary tree, we next describe the function copyTree, which makes a
copy of a given binary tree. This function is also useful in implementing the copy constructor and
overloading the assignment operator, as described later in this chapter (see the section, ‘‘Implementing
Binary Trees’’).


template <class elemType>
void copyTree(binaryTreeNode<elemType>* &copiedTreeRoot, binaryTreeNode<elemType>*
               otherTreeRoot)
{
        if (otherTreeRoot == NULL)
        copiedTreeRoot = NULL; else
        {
               copiedTreeRoot = new binaryTreeNode<elemType>; copiedTreeRoot->info
               = otherTreeRoot->info; copyTree(copiedTreeRoot->llink, otherTreeRoot-
               >llink); copyTree(copiedTreeRoot->rlink, otherTreeRoot->rlink);
        }
}//end copyTree


                                                   575
```
