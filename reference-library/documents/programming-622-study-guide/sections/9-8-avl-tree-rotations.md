---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "640-662"
printed_pages: "640-662"
section: "AVL Tree Rotations"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "tree"
  - "node"
  - "avl"
  - "subtree"
  - "figure"
  - "nodes"
  - "path"
  - "root"
  - "before"
  - "shown"
  - "reconstructing"
  - "remaining"
---

# AVL Tree Rotations

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 640-662 | printed pages 640-662

Related sections: [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md), [Binary Search Trees](9-3-binary-search-trees.md), [Binary Tree Traversal](9-2-binary-tree-traversal.md), [AVL (Height-Balanced) Trees](9-7-avl-height-balanced-trees.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [Minimum Spanning Tree](10-8-minimum-spanning-tree.md)

## Extracted Text

```text
[PDF page 640; printed page 640]
next section, ‘‘AVL Tree Rotations.’’)


Notice that in Figures 9-14(c) and 9-15(c), after reconstructing the subtree at the node, the subtree no
longer grew in height. At this point, we usually send the message that overall the tree did not gain any
height to the remaining nodes on the path back to the root node of the tree, and so the remaining nodes
on the path do not need to do anything.


Next, consider the AVL tree of Figure 9-16. Let us insert 95 into this AVL tree.




                                FIGURE 9-16 AVL tree before and after inserting 95



We search the tree and insert 95, as shown in Figure 9-16(b). After inserting 95, we see that the subtrees
                                                  640

[PDF page 641; printed page 641]
with root nodes 90, 80, and 75 are still AVL trees. When backtracking the path, we simply adjust the
balance factor of these nodes (if needed). However, when we backtrack to the root node, we discover
that the tree at this node is no longer an AVL tree. Prior to insertion, bf(50) was 1, that is, its right subtree
was higher than its left subtree. After insertion, the subtree grew in height, thus violating the balance
criteria at 50. So we construct the tree at node 50. In this case, the tree will be reconstructed as shown in
Figure 9-16(c).




                                                      641

[PDF page 642; printed page 642]
Before discussing the general algorithms for reconstructing (rotating) a subtree, let us consider one more
 case. Consider the AVL tree as shown in Figure 9-17(a). Let us insert 88 in this tree.




                                  FIGURE 9-17 AVL tree before and after inserting 88



Following the insertion procedure as described previously, we obtain the tree as shown in Figure 917(b).
 As before, we now backtrack to the root node. We adjust the balance factor of nodes 85 and 90.
When we visit node 80, we discover that at this node we need to reconstruct the subtree. In this case, the
 subtree is reconstructed as shown in Figure 9-17(c). As before, after reconstructing the subtree, the entire
 tree is balanced. So for the remaining nodes on the path back to the root node, we would not do anything.


The examples described previously indicate that if part of the tree requires reconstruction, then after
 reconstructing that part of the tree, we can ignore the remaining nodes on the path back to the root node.
 (This is, indeed, the case.) Also, after inserting the node, the reconstruction can occur at any node on the
 path back to the root node.




9.8 AVL Tree Rotations


We now describe the reconstruction procedure, called rotating the tree. There are two types of rotations:
 left rotation and right rotation. Suppose the rotation occurs at a node x. If it is a left rotation, then certain
 nodes fromthe right subtree of x move to its left subtree; the root of the right subtree of x becomes the
 new root of the reconstructed subtree. Similarly, if it is a right rotation at x, certain nodes from the left
 subtree of x move to its right subtree; the root of the left subtree of x becomes the new root of the
 reconstructed subtree.


                                                        642

[PDF page 643; printed page 643]
Case 1: Consider Figure 9-18.




                                643

[PDF page 644; printed page 644]
                                        FIGURE 9-18 Right rotation at b



In Figure 9-18, subtrees T1, T2, and T3 are of equal height, say h. The dotted rectangle shows an item
insertion in T1, causing the height of the subtree T1 to increase by 1. The subtree at node a is still an AVL
tree, but the balance criteria is violated at the root node. We note the following in this tree. Because the
        tree is a binary search tree,
        Every key in subtree T1 is smaller than the key in node a. Every
        key in subtree T2 is larger than the key in node a.
        Every key in subtree T2 is smaller than the key in node b.


Therefore,
1. We make T2 (the right subtree of node a) the left subtree of node b.
2. We make node b the right child of node a.
3. Node a becomes the root of the reconstructed tree, as shown in Figure 9-18.


Case 2: This case is a mirror image of Case 1. See Figure 9-19.




                                         FIGURE 9-19 Left rotation at a




                                                     644

[PDF page 645; printed page 645]
Case 3: Consider Figure 9-20.




                        FIGURE 9-20 Double rotation: First rotate left at a and then right at c




In Figure 9-20, the tree on the left is the tree prior to the reconstruction. The heights of the subtrees are
shown in the figure. The dotted rectangle shows that a new item is inserted in the subtree, causing the




                                                        645

[PDF page 646; printed page 646]
subtree to grow in height. The new item is inserted either in T2 or T3. We note the following (in the tree
         prior to reconstruction):
         All keys in T3 are smaller than the key in node c.
         All keys in T3 are larger than the key in node b.
         All keys in T2 are smaller than the key in node b.
         All keys in T2 are larger than the key in node a.
         After insertion, the subtrees with root nodes a and b are still AVL trees.
         The balance criteria is violated at the root node, c, of the tree.
         The balance factors of node c, bf(c) = -1, and node a, bf(a) = 1 are opposite.


This is an example of double rotation. One rotation is required at node a, and another rotation is required
at node c. If the balance factor of the node, where the tree is to be reconstructed, and the balance factor
of the higher subtree are opposite, that node requires a double rotation. First, we rotate the tree at node
a and then at node c. Now the tree at node a is right high and so we make a left rotation at a. Next,
because the tree at node c is left high, we make a right rotation at c. Figure 9-20 shows the resulting tree
(which is to the right of the tree after insertion). Figure 9-21, however, shows both rotations in sequence.




FIGURE 9-21 Left rotation at a followed by a right rotation at c Case 4: This is a mirror image of Case




                                                         646

[PDF page 647; printed page 647]
3. We illustrate this with the help of Figure 9-22.




                       FIGURE 9-22 Double rotation: First rotate right at c, then rotate left at a



Using these four cases, we now describe what type of rotation might be required at a node.




                                                         647

[PDF page 648; printed page 648]
Suppose that the tree is to be reconstructed, by rotation, at node x. Then, the subtree with root node x
requires either a single or a double rotation.


    1. Suppose that the balance factor of the node x and the balance factor of the root node of the higher
        subtree of x have the same sign, that is, both positive or both negative.


1. If these balance factors are positive, make a single left rotation at x. (Prior to insertion, the right
    subtree of x was higher than its left subtree. The new item was inserted in the right subtree of x,
    causing the height of the right subtree to increase in height, which in turn violated the balance criteria
    at x.)
2. If these balance factors are negative, make a single right rotation at x. (Prior to insertion, the left right
    subtree of x was higher than its right subtree. The new item was inserted in the left subtree of x,
    causing the height of the left subtree to increase in height, which in turn violated the balance criteria
    at x.)


    2. Suppose that the balance factor of the node x and the balance factor of the higher subtree of x are
        opposite in sign. To be specific, suppose that the balance factor of node x prior to insertion was 1
        and suppose that y is the root node of the left subtree of x. After insertion, the balance factor of
        node y is 1. That is, after insertion, the right subtree of node y grew in height. In this case, we
        require a double rotation at x. First, we make a left rotation at y (because y is right high). Then, we
        make a right rotation at x. The other case, which is a mirror image of this case, is handled similarly.


The following C++ functions implement the left and right rotations of a node. The pointer of the node
requiring the rotation is passed as a parameter to the function.


template <class elemT>
void rotateToLeft(AVLNode<elemT>* &root)
{
        AVLNode<elemT> *p;                                     //pointer to the root of the
                                                               //right subtree of root
        if (root == NULL) cerr << "Error in the tree" << endl; else if (root->rlink ==
        NULL) cerr << "Error in the tree:"<<" No right subtree to rotate." << endl;
        else

                                                      648

[PDF page 649; printed page 649]
       { p = root->rlink;
                root->rlink = p->llink;           //the left subtree of p becomes
                                                  //the right subtree of root
                p->llink = root;
                root = p;                         //make p the new root node
       }
}//rotateLeft


template <class elemT>
void rotateToRight(AVLNode<elemT>* &root)
{
       AVLNode<elemT> *p;                         //pointer to the root of
                                                  //the left subtree of root




                                            649

[PDF page 650; printed page 650]
       if (root == NULL) cerr << "Error in the tree" << endl; else if (root->llink ==
       NULL) cerr << "Error in the tree:"<< " No left subtree to rotate." << endl;
       else
       { p = root->llink;
               root->llink = p->rlink;                        //the right subtree of p becomes
                                                              //the left subtree of root
               p->rlink = root;
               root = p;                                      //make p the new root node
       }
}//end rotateRight


Now that we know how to implement both rotations, we next write the C++ functions, balanceFromLeft
and balanceFromRight, which are used to reconstruct the tree at a particular node. The pointer of the
node where reconstruction occurs is passed as a parameter to this function. These functions use the
functions rotateToLeft and rotateToRight to reconstruct the tree, and also adjust the balance factors of
the nodes affected by the reconstruction. The function balanceFromLeft is called when the subtree is left
double high and certain nodes need to be moved to the right subtree. The function balanceFromRight has
similar conventions.


template <class elemT>
void balanceFromLeft(AVLNode<elemT>* &root)
{
       AVLNode<elemT> *p;
       AVLNode<elemT> *w;

       p = root->llink;                                       //p points to the left subtree of root
       switch (p->bfactor)
       { case -1: root->bfactor = 0; p->bfactor = 0; rotateToRight(root);
               break; case 0: cerr << "Error: Cannot balance from the left."
               << endl; break; case 1:
                          w = p->rlink;




                                                     650

[PDF page 651; printed page 651]
switch (w->bfactor)                 //adjust the balance factors
{ case -1: root->bfactor = 1; p-
       >bfactor = 0; break;
       case 0: root->bfactor =
               0; p->bfactor = 0;
               break;
       case 1: root->bfactor =
               0; p->bfactor = -
               1;




                              651

[PDF page 652; printed page 652]
                       }                                      //end switch
                       w->bfactor = 0;
                       rotateToLeft(p); root->llink
                       = p; rotateToRight(root);

       }                                                      //end switch;

}                                                             //end balanceFromLeft
For the sake of completeness, we also give the definition of the function balanceFromRight:
template <class elemT>
void balanceFromRight(AVLNode<elemT>* &root)
{
       AVLNode<elemT> *p;
       AVLNode<elemT> *w;

       p = root->rlink;                                       //p points to the left subtree of root
       switch (p->bfactor)
       { case -1: w = p->llink;
                       switch (w->bfactor)                    //adjust the balance factors
                       { case -1: root->bfactor = 0; p-
                                  >bfactor = 1; break; case
                                  0: root->bfactor = 0; p-
                                  >bfactor = 0; break; case
                                  1: root->bfactor = -1;
                                         p->bfactor = 0;
                       }                                      //end switch


                       w->bfactor = 0; rotateToRight(p); root->rlink = p;
               rotateToLeft(root); break; case 0: cerr << "Error: Cannot
               balance from the left." << endl; break; case 1: root->bfactor
               = 0; p->bfactor = 0;
                       rotateToLeft(root);
       }                                                      //end switch;
}                                                             //end balanceFromRight


We now focus our attention on the function insertIntoAVL. The function insertIntoAVL inserts the new
                                               652

[PDF page 653; printed page 653]
item in the AVL tree. The item to be inserted and the pointer of the root node of the AVL tree are passed
as parameters to this function.


The following steps describe the function insertIntoAVL:


   1. Create a node and copy the item to be inserted into the newly created node.
   2. Search the tree and find the place for the new node in the tree.
   3. Insert the new node in the tree.




                                                  653

[PDF page 654; printed page 654]
    4. Backtrack the path, which was constructed to find the place for the new node in the tree, to the
       root node. If necessary, adjust the balance factors of the nodes, or reconstruct the tree at a node
       on the path.


Because Step 4 requires us to backtrack the path to the root node, and in the binary tree we have links
only from the parent to the children, the easiest way to implement the function insertIntoAVL is to use
recursion. (Recall that recursion automatically takes care of the backtracking.) This is exactly what we do.
The function insertIntoAVL also uses a reference bool parameter, isTaller, to indicate to the parent
whether the subtree grew in height or not.


template <class elemT>
void insertIntoAVL(AVLNode<elemT>* &root, AVLNode<elemT> *newNode, bool& isTaller)
{
       if (root == NULL)
       {
               root = newNode; isTaller
               = true;
       }
       else if (root->info == newNode->info) cerr << "No
       duplicates are allowed." << endl; else if (root->info >
       newNode->info) //newItem goes in //the left subtree
       {
               insertIntoAVL(root->llink,       newNode,      isTaller);   if
               (isTaller) //after insertion, the subtree grew in height
                         switch (root->bfactor)
                         {
                                case -1:
                                        balanceFromLeft(root)
                                ; isTaller = false; break; case 0:
                                root->bfactor = -1; isTaller =
                                true; break; case 1: root-
                                >bfactor = 0;
                                        isTaller = false;

                                                       654

[PDF page 655; printed page 655]
               }//end switch
}//end if
else
{
        insertIntoAVL(root->rlink, newNode, isTaller); if
        (isTaller) //after insertion, the subtree grew in
                       //height switch
               (root->bfactor)
               { case -1: root-
                       >bfacto
                       r = 0;
                       isTaller
                       = false;
                       break;
                       case 0:




                                             655

[PDF page 656; printed page 656]
                               root-
                               >bfacto
                               r = 1;
                               isTaller
                               = true;
                               break;
                               case 1:
                                          balanceFromRight(root); isTaller
                                          = false;
                       }//end switch
       }//end else
}//insertIntoAVL




Next, we illustrate the insertIntoAVL function and build an AVL tree from scratch. Initially the tree is empty.
Each figure shows the item to be inserted as well as the balance factor of each node. An equal sign, =, on
the top of a node indicates that the balance factor of this node is 0, the less-than sign, <, indicates that
the balance factor of this node is –1, and the greater-than sign, >, indicates that the balance factor of this
node is 1.


Figure 9-23 shows how items are inserted into an initially empty AVL tree.




                                                       656

[PDF page 657; printed page 657]
                             FIGURE 9-23 Item insertion into an initially empty AVL tree



First, we insert 40; see Figure 9-23(a). Next, we insert 30 into the AVL tree. Item 30 is inserted into the left
subtree of node 40, causing the left subtree of 40 to grow in height. After insertion, the balance factor of
node 40 is –1; see Figure 9-23(b).


Next, we insert 20 into the AVL tree. See Figure 9-23(c). The insertion of 20 violates the balance criteria at
node 40. The tree is reconstructed at node 40 by making a single right rotation.


Next, we insert 60 into the AVL tree. See Figure 9-23(d). The insertion of 60 does not require
reconstruction; only the balance factor is adjusted at nodes 40 and 30.



                                                        657

[PDF page 658; printed page 658]
Next, we insert 50. See Figure 9-23(e). The insertion of 50 requires the tree to be reconstructed at 40.
Notice that a double rotation is made at node 40.


Next, we insert 80; see Figure 9-23(f). The insertion of 80 requires the tree to be reconstructed at node
30.




                                                    658

[PDF page 659; printed page 659]
Next, we insert 15; see Figure 9-23(g). The insertion of node 15 does not require any part of the tree to
be reconstructed. We need to only adjust the balance factor of nodes 20, 30, and 50.


Next, we insert 28; see Figure 9-23(h). The insertion of node 28 also does not require any part of the tree
to be reconstructed. We need only to adjust the balance factor of node 20.


Next, we insert 25. The insertion of 25 requires a double rotation at node 30. Figure 9-23(i) shows both
rotations in sequence. In Figure 9-23(i), the tree is first rotated left at node 20 and then right at node 30.


The following function creates a node, stores the info in the node, and calls the function insertIntoAVL to
insert the new node in the AVL tree:


template <class elemT>
void insert(const elemT &newItem)
{
       bool isTaller = false;
       AVLNode<elemT> *newNode;


       newNode = new AVLNode<elemT>;
       newNode->info = newItem; newNode-
       >bfactor = 0; newNode->llink = NULL;
       newNode->rlink = NULL;


       insertIntoAVL(root, newNode, isTaller);
}


We leave it as an exercise for you to design the class to implement AVL trees as an ADT. (Notice that
because the structure of the node of an AVL tree is different from the structure of the node of a binary
tree discussed in the beginning of this chapter, you cannot use inheritance to derive the class to
implement AVL trees from the class binaryTreeType.)


9.1.12 Deletion from AVL Trees


                                                     659

[PDF page 660; printed page 660]
To delete an item from an AVL tree, first we find the node containing the item to be deleted. The following
four cases arise:


Case 1:        The node to be deleted is a leaf.
Case 2:        The node to be deleted has no right child, that is, its right subtree is empty.
Case 3:        The node to be deleted has no left child, that is, its left subtree is empty.
Case 4:        The node to be deleted has a left child and a right child.


Cases 1–3 are easier to handle than Case 4. Let us first discuss Case 4.


Suppose that the node to be deleted, say x, has a left and a right child. As in the case of deletion from a
binary search tree, we reduce Case 4 to Case 2. That is, we find the immediate predecessor, say y of x.
Then, the data of y is copied into x and now the node to be deleted is y. Clearly, y has no right child.




                                                    660

[PDF page 661; printed page 661]
To delete the node, we adjust one of the pointers of the parent node. After deleting the node, the resulting
tree might no longer be an AVL tree. As in the case of insertion into an AVL tree, we traverse the path
(from the parent node) back to the root node. For each node on this path, sometimes we need to change
only the balance factor, while other times the tree at a particular node is reconstructed. The following
steps describe what to do to a node on the path back to the root node. (As in the case of insertion, we use
the bool variable shorter to indicate whether the height of the subtree is reduced.) Let p be a node on the
path back to the root node. We look at the current balance factor of p.


    1. If the current balance factor of p is equal high, the balance factor of p is changed according to if
        the left subtree of p was shortened or the right subtree of p was shortened. The variable shorter
        is set to false.
    2. Suppose that the balance factor of p is not equal and the taller subtree of p is shortened. The
        balance factor of p is changed to equal high, and the variable shorter is left as true.
    3. Suppose that the balance factor of p is not equal and the shorter subtree of p is shortened. Further
        suppose that q points to the root of the taller subtree of p.
            a. If the balance factor of q is equal, a single rotation is required at p and shorter is set to
                false.
            b. If the balance factor of q is the same as p, a single rotation is required at p and shorter is
                set to true.
            c. Suppose that the balance factors of p and q are opposite. A double rotation is required at
                p (a single rotation at q and then a single rotation at p). We adjust the balance factors and
                set shorter to true.


9.1.13 Analysis: AVL Trees


Consider all possible AVL trees of height h. Let Th be an AVL tree of height h such that Th has the fewest
number of nodes. Let Thl denote the left subtree of Th and Thr denote the right subtree of Th. Then


                           |Th| = |Thl| + |Thr| + 1;
where |Th| denotes the number of nodes in Th.
Because Th is an AVL tree of height h such that Th has the fewest number of nodes, it follows that one of
the subtrees of Th is of height h - 1 and the other is of height h - 2. To be specific, suppose Thl is of height
h - 1 and Thr is of height h - 2. From the definition of Th, it follows that Thl is an AVL tree of height h - 1 such

                                                       661

[PDF page 662; printed page 662]
that Thl has the fewest number of nodes among all AVL trees of height h - 1. Similarly, Thr is an AVL tree of
height h - 2 that has the fewest number of nodes among all AVL trees of height h - 2. Thus, Thl is of the
form Th-1 and Thr is of the form Th-2. Hence,




                                                    662
```
