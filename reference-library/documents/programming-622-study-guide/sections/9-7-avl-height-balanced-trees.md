---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "633-639"
printed_pages: "633-639"
section: "AVL (Height-Balanced) Trees"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "tree"
  - "binary"
  - "search"
  - "balanced"
  - "perfectly"
  - "trees"
  - "avl"
  - "height"
  - "left"
  - "right"
  - "height-balanced"
  - "subtrees"
---

# AVL (Height-Balanced) Trees

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 633-639 | printed pages 633-639

Related sections: [Binary Search Trees](9-3-binary-search-trees.md), [Binary Trees](9-1-binary-trees.md), [AVL Tree Rotations](9-8-avl-tree-rotations.md), [B-Trees](9-9-b-trees.md), [TOPIC 9: BINARY TREES AND B-TREES](9-topic-9-binary-trees-and-b-trees.md), [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md)

## Extracted Text

```text
[PDF page 633; printed page 633]
9.7 AVL (Height-Balanced) Trees




                                                    633

[PDF page 634; printed page 634]
In the previous sections, you learned how to build and manipulate a binary search tree. The performance
of the search algorithm on a binary search tree depends on how the binary tree is built. The shape of the
binary search tree depends on the data set. If the data set is sorted, the binary search tree is linear and so
the search algorithm would not be efficient. On the other hand, if the tree is nicely built, the search would
be fast. In fact, the smaller the height of the tree, the faster the search. Therefore, we want the height of
the binary search tree to be as small as possible. This section describes a special type of binary search tree,
called the AVL tree (also called the height-balanced tree) in which the resulting binary search is nearly
balanced. AVL trees are due to the mathematicians G. M. Adel´sonVel´skii and E. M. Landis and are so
named in their honor. The methods of building such binary trees were given by them in 1962.


We begin by defining the following terms.


Definition: A perfectly balanced binary tree is a binary tree such that


       i. The heights of the left and right subtrees of the root are equal.
       ii. The left and right subtrees of the root are perfectly balanced binary trees.


Figure 9-12 shows a perfectly balanced binary tree.




                                    FIGURE 9-12 Perfectly balanced binary tree



Let T be a binary tree and x be a node in T. If T is perfectly balanced, then from the definition of the
perfectly balanced tree, it follows that the height of the left subtree of x is the same as the height of the
right subtree of x.


It can be proved that, if T is a perfectly balanced binary tree of height h, then the number of nodes in T is
2h -1. From this, it follows that if the number of items in the data set is not equal to 2 h -1 for some
nonnegative integer h, then we cannot construct a perfectly balanced binary tree. Moreover, perfectly
balanced binary trees are a too stringent refinement.



                                                      634

[PDF page 635; printed page 635]
Definition: An AVL tree (or height-balanced tree) is a binary search tree such that


       i. The heights of the left and right subtrees of the root differ by at most 1.
       ii. The left and right subtrees of the root are AVL trees.


Figure 9-13 gives examples of AVL and non-AVL trees.




                                                    635

[PDF page 636; printed page 636]
                                          FIGURE 9-13 AVL and non-AVL trees



Let x be a node in a binary tree. Let xl denote the height of the left subtree of x, and xh denote the height
of the right subtree of x.


Proposition: Let T be an AVL tree and x be a node in T. Then |xh - xl| ≤ 1, where |xh - xl| denotes the
absolute value of xh - xl.


Let x be a node in the AVL tree T.


    1. If xl > xh, we say that x is left high. In this case, xl = xh + 1.

    2. If xl = xh, we say that x is equal high.

    3. If xh > xl, we say that x is right high. In this case, xh = xl + 1.
Definition: The balance factor of x, written bf(x), is defined by bf(x) = xh - xl.


Let x be a node in the AVL tree T. Then,


    1. If x is left high, bf(x) = -1.
    2. If x is equal high, bf(x) = 0.
    3. If x is right high, bf(x) = 1.


Definition: Let x be a node in a binary tree. We say that the node x violates the balance criteria if | xh - xl|
> 1, that is, the heights of the left and right subtrees of x differ by more than 1.


From the preceding discussion, it follows that in addition to the data and pointers to the left and right
subtrees, one more thing is associated with each node x in the AVL tree T, which is the balance factor of

                                                          636

[PDF page 637; printed page 637]
x. Thus, every node must keep track of its balance factor. To make the algorithms efficient, we store the
balance factor of each node in the node itself. Hence, the definition of a node in the AVL tree is as follows:


template<class elemType> struct
AVLNode
{
       elemType info;
       int bfactor;                    //balance factor
       AVLNode<elemType> *llink;
       AVLNode<elemType> *rlink;
};




                                                     637

[PDF page 638; printed page 638]
Because an AVL tree is a binary search tree, the search algorithm for an AVL tree is the same as the search
algorithm for a binary search tree. Other operations, such as finding the height, determining the number
of nodes, checking whether the tree is empty, tree traversal, and so on, on AVL trees can be implemented
exactly the same way they are implemented on binary trees. However, item insertion and deletion
operations on AVL trees are somewhat different from the ones discussed for binary search trees. This is
because after inserting (or deleting) a node from an AVL tree, the resulting binary tree must be an AVL
tree. Next, we describe these operations.


9.1.11 Insertion


To insert an item in an AVL tree, first we search the tree and find the place where the new item is to be
inserted. Because an AVL tree is a binary search tree, to find the place for the new item we can search the
AVL tree using a search algorithm similar to the search algorithm designed for binary search trees. If the
item to be inserted is already in the tree, the search ends at a nonempty subtree. Because duplicates are
not allowed, in this case we can output an appropriate error message. Suppose that the item to be
inserted is not in the AVL tree. Then, the search ends at an empty subtree and we insert the item in that
subtree. After inserting the new item in the tree, the resulting tree might not be an AVL tree. Thus, we
must restore the tree’s balance criteria. This is accomplished by traveling the same path, back to the root
node, which was followed when the new item was inserted in the AVL tree. The nodes on this path (back
to the root node) are visited and either their balance factor is changed, or we might have to reconstruct
part of the tree. We illustrate these cases with the help of the following examples.


Consider the AVL tree of Figure 9-14 (a). Let us insert 90 into this AVL tree.




                                FIGURE 9-14 AVL tree before and after inserting 90



We search the tree starting at the root node to find the place for 90. The dotted arrow shows the path.
We insert a node with info 90 and obtain the tree of Figure 9-14(b). The binary tree of Figure 9-14(b) is

                                                      638

[PDF page 639; printed page 639]
not an AVL tree. So we backtrack and go to node 80. Prior to insertion, bf(80) was 0. Because the new
node was inserted into the (empty) right subtree of 80, we change its balance factor to 1 (not shown in
the figure). Now we go back to node 70. Prior to insertion, bf(70) was 1. Because after insertion the height
of the right subtree of 70 is increased, we see that the subtree with root node 70 is not an AVL tree. In
this case, we reconstruct this subtree (this is called rotating the tree at root node 70). Therefore, we obtain
the tree shown in Figure 9-14(c). The binary tree of Figure 9-14 is an AVL tree.


Now consider the AVL tree of Figure 9-15(a). Let us insert 75 into the AVL tree of Figure 9-15(a).




                                                     639
```
