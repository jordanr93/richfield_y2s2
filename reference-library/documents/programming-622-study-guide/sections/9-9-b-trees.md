---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "663-688"
printed_pages: "663-688"
section: "B-Trees"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "tree"
  - "search"
  - "b-tree"
  - "node"
  - "which"
  - "has"
  - "children"
  - "figure"
  - "order"
  - "m-way"
  - "following"
  - "properties"
---

# B-Trees

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 663-688 | printed pages 663-688

Related sections: [Binary Search Trees](9-3-binary-search-trees.md), [AVL (Height-Balanced) Trees](9-7-avl-height-balanced-trees.md), [TOPIC 9: BINARY TREES AND B-TREES](9-topic-9-binary-trees-and-b-trees.md), [Time-Related Properties](../../internet-programming-622-study-guide/sections/3-3-time-related-properties.md), [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md), [AVL Tree Rotations](9-8-avl-tree-rotations.md)

## Extracted Text

```text
[PDF page 663; printed page 663]
9.9 B-Trees


In the previous sections of this chapter, we discussed how to build binary search trees and in particular
AVL trees to effectively organize data dynamically and effectively search the data. However, the
performance of the search depends on the height of the tree. In this section, we discuss B-trees in which
the leaves are on the same level and are not too far from the root.


Definition: (m-way search tree) An m-way search tree is a tree in which each node has at most m children,
and if the tree is nonempty, it has the following properties:

                                                    663

[PDF page 664; printed page 664]
1. Each node has the following form:


                                                                                          where P0, P1, P2, . . .
   , Pn are pointers to the subtrees of the node, K1, K2, . . . , Kn are keys such that K1 < K2 < . . .< Kn, and
   n ≤ m – 1.
2. All keys, if any, in the node to which Pi points are less than Ki+1.

3. All keys, if any, in the node to which Pi points are greater than Ki.




                                                   664

[PDF page 665; printed page 665]
   4. The subtrees, if any, to which each Pi points are m-way search trees
Figure 9-24 shows a 5-way search tree.




                                         FIGURE 9-24 A 5-way search tree



Definition: (B-tree of order m) A B-tree of order m is an m-way search tree that is either empty, or has the
following properties:


   1. All leaves are on the same level.
   2. 2. All internal nodes except the root have at most m (nonempty) children and at least children.
       (Note that denotes the ceiling of m/2.)
   3. The root has at least 2 children if it is not a leaf, and at most m children.


Figure 9-25 shows a B-tree of order 5.




                                         FIGURE 9-25 A B-tree of order 5



Note that the 5-way search tree in Figure 9-24 is not a B-tree of order 5.


The basic operations performed on a B-tree are search the tree, insert an item in the tree, delete an item
from the tree, and traverse the tree. In the remainder of this section, we discuss how to implement some
of these operations.


Before discussing these properties and describing the structure of a node and the class to implement the
                                                  665

[PDF page 666; printed page 666]
properties of a B-tree, we note the following: Until now, we have passed only data types as parameters
to templates. Just like types (data types), constant expressions can also be passed as parameters to
templates. For example, consider the following class template:


template<class elemType, int size>
class listType
{
        public:
                  .




                                                 666

[PDF page 667; printed page 667]
                 .
                 .
       private: int
                 maxSize; int
                 length;
                 elemType listElem[size];
};


This class template contains an array data member. The array element type and the size of the array are
passed as parameters to the class template. To create a list of 100 components of int elements, we use
the following statement:
listType<int, 100> intList;


Next, we give the definitions of the B-tree node and the class that implements the properties of a Btree.


Each node should store the number of keys in the node, the records, and the pointer to subtrees. We use
an array to store the records and an array to store the pointers to the subtrees. Thus, the definition of a
B-tree node is as follows:


template <class recType, int bTreeOrder> struct
bTreeNode
{
       int       recCount;      recType
       list[bTreeOrder - 1];
       bTreeNode *children[bTreeOrder];
};


The class implementing the properties of a B-tree must, among others, implement the search, traversal,
insertion, and deletion algorithms. The following class implements the basic properties of a B-tree as an
ADT:
//*************************************************************
// class bTree
// This class specifies the basic operations to implement a B-tree.

                                                    667

[PDF page 668; printed page 668]
//************************************************************
* template <class recType, int bTreeOrder> class bTree
{ public:
              bool search(const recType& searchItem);
              //Function to determine if searchItem is in the B-tree.
              //Postcondition: Returns true if searchItem is found in the //
              B-tree; otherwise, returns false.


              void insert(const recType& insertItem); //Function
              to insert insertItem in the B-tree.
              //Postcondition: If insertItem is not in the the B-tree, it //
              is inserted in the B-tree.


              void inOrder();
              //Function to do an inorder traversal of the B-tree.




                                                    668

[PDF page 669; printed page 669]
                  bTree();
                  //constructor
                  //Add additional members as needed.


        protected:
                  bTreeNode<recType, bTreeOrder> *root;
};


9.1.14 Search


The function search searches the binary search tree for a given item. If the item is found in the binary
search tree, it returns true; otherwise, it returns false. The search must start at the root node. Because,
usually, there is more than one item in a node, we must search the array containing the data. Therefore,
in addition to the function search, we also write the function searchNode that searches a node
sequentially. If item is found, the function searchNode returns true and the location in the array where
item is found. If item is not in the node, the function returns false and location points to either the first
item that is larger than the search item or one past the last item in the node. The definitions of these
functions are as follows:


template <class recType, int bTreeOrder> void
bTree<recType, bTreeOrder>::searchNode
        (bTreeNode<recType, bTreeOrder> *current, const recType& item, bool& found, int& location)
{ location = 0;
        while (location < current->recCount && item > current->list[location]) location++;


        if (location < current->recCount && item == current->list[location])
        found = true; else
                  found = false;
} //end searchNode


template <class recType, int bTreeOrder>
bool bTree<recType, bTreeOrder>::search(const recType& searchItem)

                                                    669

[PDF page 670; printed page 670]
{
    bool found = false;
    int location;


    bTreeNode<recType, bTreeOrder> *current;
    current = root;
    while (current != NULL && !found)
    {
            searchNode(current, item, found, location);


            if      (!found)     current     =   current-
                      >children[location];
    }




                                                 670

[PDF page 671; printed page 671]
       return found;
} //end search


Note that the function searchNode searches the node sequentially. However, because the data in the
node is ordered, we can also use a binary search algorithm to search the node. We leave it as an exercise
for you to modify the definition of the function searchNode so that it uses a binary search algorithm to
search the node.


9.1.15 Traversing a B-Tree


As in the case of a binary tree, a B-tree can be traversed in three ways: inorder, preorder, and
postorder.We only discuss the inorder traversal algorithm and leave the others as an exercise.


template <class recType, int bTreeOrder>
void bTree<recType, bTreeOrder>::inOrder()
{
       recInorder(root);
} // end inOrder


template <class recType, int bTreeOrder>
void bTree<recType, bTreeOrder>::recInorder(bTreeNode<recType, bTreeOrder> *current)
{
       if (current != NULL)
       {
                 recInorder(current->children[0]);         for
                 (int i = 0; i < current->recCount; i++)
                 { cout << current->list[i] << " ";
                         recInorder(current->children[i + 1]);
                 }
       }
} //end recInorder


9.1.16 Insertion into a B-Tree
                                                       671

[PDF page 672; printed page 672]
The general algorithm to insert an item in a B-tree is as follows.


Insert Algorithm: Search the tree to see if the key is already in the tree. If the key is already in the tree,
output an error messsage. If the key is not in the tree, the search terminates at a leaf. The record is
inserted into the leaf if there is room. If the leaf is full, split the node into two nodes and the median key
is moved to the parent node. (Note that the median is determined by considering all the keys in the node
and the new key to be inserted.) The splitting can propogate upward even as far as the root, causing the
tree to increase in height.


Next, we illustrate how the insert algorithm works.


Figures 9-26 to 9-29 shows the insertion of items into an initially empty B-tree of order 5.




                                                    672

[PDF page 673; printed page 673]
                                 FIGURE 9-26 Item insertion into a B-tree of order 5



The insertion of 40, 30, 70, and 5 is shown in Figure 9-26(a). The insertion of 16 requires to split the root
node, causing the height of the tree to increase; see Figure 9-26(b). The insertion of 82 and 95 is shown
in Figure 9-26(c). The next item inserted is 100; see Figure 9-26(d). The item 100 is to be inserted in the
right child of the root node. However, the right child of the root node is full. So we split this node and
move the median key, which is 82, to the parent node. Because the parent node is not full, we can insert
82 in the parent node; see Figure 9-26(d).


Figure 9-27 shows the insertion of 73, 54, 98, and 37.




                                     FIGURE 9-27 Insertion of 73, 54, 98, and 37



Note that 73, 54, and 98 are inserted without splitting any node; see Figure 9-27(a). However, the insertion
of 37 requires the splitting of a node. The item 37 is to be inserted in the right child of 30. However, the
right child of 30 is full, as shown in Figure 9-27(a). So we split the right child of 30, insert 37, and move the
median key, which is 54, to the parent node. Because the parent node is not full, the median key 54 is
inserted into the parent node; see Figure 9-27(b).


Figure 9-28 shows the insertion of 25, 62, 81, 150, and 79 into the B-tree of Figure 9-27(b).




                                                        673

[PDF page 674; printed page 674]
FIGURE 9-28 Insertion of 25, 62, 81, 150, and 79




                     674

[PDF page 675; printed page 675]
Note that 25, 62, 81, and 150 are inserted without splitting any node; see Figure 9-28(a). However, the
insertion of 79 requires the splitting of a node. The item 79 is to be inserted in the right child of 54.
However, the right child of 54 is full; see Figure 9-28(a). So we split the right child of 54, insert 79, and
move the median key, which is 73, to the parent node. Because the parent node is not full, the median
key 73 is inserted into the parent node; see Figure 9-28(b).


Next, we insert 200, as shown in Figure 9-29.




                                                FIGURE 9-29 Insertion of 200



The item 200 is to be inserted in the right child of 82; see Figure 9-28(b). However, the right child of 82 is
full. So we split the right child of 82, insert 200 in the node, and move the median key, which is 100, to
the parent node. However, the parent node, which is the root node in Figure 9-28(b), is also full. So we
split the parent node and move the median key, which is 73, to the new root node; see Figure 9-29. From
Figure 9-29, it is clear that the height of the B-tree is increased.


From the previous discussion, it follows that to implement the insertion algorithm, we need algorithms to
split a node, insert an item into a node, and move the median key to the parent node. Furthermore,
because the insertion of an item might require the splitting of a node and moving the median key to the
parent node, the simplest way to implement the insertion algorithm is to use recursion. To trigger the
recursion, we will write another function, insertBTree. The definition of the function insert, which uses
the function insertBTree, is as follows:


template <class recType, int bTreeOrder>
void bTree<recType, bTreeOrder>::insert(const recType& insertItem)
{
        bool isTaller = false;
        recType median;



                                                           675

[PDF page 676; printed page 676]
bTreeNode<recType, bTreeOrder> *rightChild;
insertBTree(root, insertItem, median, rightChild, isTaller);
if (isTaller)                                  //the tree is initially empty or the root
                                               //was split by the function insertBTree
{
        bTreeNode<recType, bTreeOrder> *tempRoot;
        tempRoot = new bTreeNode<recType, bTreeOrder>;
        tempRoot->recCount = 1; tempRoot->list[0] =
        median; tempRoot->children[0] = root; tempRoot-
        >children[1] = rightChild; root = tempRoot;




                                             676

[PDF page 677; printed page 677]
        }
} //insert


The function insertBTree recursively inserts an item into a B-tree. After inserting an item, it returns true if
the height of the tree is to be increased. If the root node is to be split, this function splits the root node,
sets isTaller to true, and sends the median key, median, and a pointer, rightChild, of the right child of
median to the function insert. The function insert adjusts the root of the B-tree. This function has five
parameters: current—a pointer to the B-tree in which to insert an item, insertItem—item to be inserted
in the B-tree, median—to return the median key, rightChild—pointer to the right child of median, and
isTaller—to indicate if the height of a B-tree is to be increased. In pseudocode, the algorithm is as follows:


        if (current is NULL)
        {
                Either the B-tree is empty or the search ends at an empty subtree.
                Set median to insertItem
                Set rightChild to NULL
                Set isTaller to true

        }
        else
        {       Call function searchNode to search the current node
               if insertItem is in the node output
               an error message else
                {
                        call the function insertBTree with appropriate parameters
                        if isTaller is true if current node is not full insert item into
                        current node else call the function splitNode to split the
                        node
               }
}


We leave it as an exercise for you to write the definition of the function insertBTree.


The function insertNode inserts an item in the node. Because the keys in the node are in order, the

                                                       677

[PDF page 678; printed page 678]
algorithm to insert a new item is similar to the insertAt function. The function has four parameters:
current—a pointer to the node in which to insert the new item, insertItem—the item to be inserted,
rightChild—a pointer to the right subtree of the item to be inserted, and insertPosition—the position in
the array where to insert the item. The definition of this function is as follows:


template <class recType, int bTreeOrder> void
bTree<recType, bTreeOrder>::insertNode
       (bTreeNode<recType, bTreeOrder> *current,const recType& insertItem,
               bTreeNode<recType, bTreeOrder>* &rightChild,int insertPosition)
{
       int index;


       for (index = current->recCount; index > insertPosition;index--)




                                                    678

[PDF page 679; printed page 679]
       { current->list[index] = current->list[index - 1];
               current->children[index + 1] = current->children[index];
       }


       current->list[index] = insertItem; current->children[index
       + 1] = rightChild;
       current->recCount++;
} //end insertNode


The function splitNode splits a node into two nodes and inserts the new item in the relevant node. It
returns the median key and a pointer to the second half of the node. The parameter current points to the
node to be split, insertItem is the item to be inserted, newChild is a pointer to the right child of the item
to be inserted, insertPosition specifies the position where to insert the new item, after splitting the node
the parameter rightNode returns a pointer to the right half of the node, and median returns the median
key of the node.


template <class recType, int bTreeOrder> void
bTree<recType, bTreeOrder>::splitNode
       (bTreeNode<recType, bTreeOrder> *current,const recType& insertItem,
               bTreeNode<recType, bTreeOrder>* rightChild,int insertPosition, bTreeNode<recType,
               bTreeOrder>* &rightNode,recType &median)
{
       rightNode = new bTreeNode<recType, bTreeOrder>;
       int mid = (bTreeOrder - 1) / 2;
       if (insertPosition <= mid)                      //new item goes in the first half of the node
       { int index = 0; int i
               = mid;
               while (i < bTreeOrder - 1)
               { rightNode->list[index] = current->list[i];
                        rightNode->children[index + 1] = current->children[i + 1]; index++;
                        i++;
               }



                                                      679

[PDF page 680; printed page 680]
        current->recCount = mid;
        insertNode(current, insertItem, rightChild, insertPosition);
        (current->recCount)--;


        median = current->list[current->recCount];


        rightNode->recCount = index;
        rightNode->children[0] = current->children[current->recCount + 1];
}
else                                          //new item goes in the second half of the node
{ int i = mid + 1;
        int index = 0;




                                            680

[PDF page 681; printed page 681]
                 while (i < bTreeOrder - 1)
                 { rightNode->list[index] = current->list[i];
                         rightNode->children[index + 1] = current->children[i + 1];
                         index++; i++;
                 }


                 current->recCount = mid;
                 rightNode->recCount = index;


                 median = current->list[mid]; insertNode(rightNode, insertItem,
                 rightChild, insertPosition - mid - 1); rightNode->children[0] = current-
                 >children[current->recCount + 1];

          }
} //split Node




We leave it as an exercise for you to include the functions to insert an item in a B-tree and the functions
to search and traverse a B-tree in the class BTree, and write a program to perform these operations on a
B-tree.


9.1.17 Deletion from a B-Tree


To delete an item from a B-tree, we search the tree for the item to be deleted, say deleteItem. The
following cases arise:
    1. If deleteItem is not in the tree, output an appropriate error message.
    2. If deleteItem is in the tree, find the node containing the deleteItem. If the node containing the
          deleteItem is not a leaf, its immediate predecessor (or successor) is in a leaf. So we can swap the
          immediate predecessor (or successor) with the deleteItem to move the deleteItem into a leaf. We
          consider the cases to delete an item from a leaf.
              a. If the leaf contains more than the minimum number of keys, delete the deleteItem from
                 the leaf. (In this case, no further action is required.)
              b. If the leaf contains only the minimum number of keys, look at the sibling nodes that are
                 adjacent to the leaf. (Note that the sibling nodes and the leaf have the same parent node.)
                                                       681

[PDF page 682; printed page 682]
                   i. If one of the sibling nodes has more than the minimum number of keys, move one
                       of the keys from that sibling node to the parent and one key from the parent to the
                       leaf, and then delete deleteItem.
                   ii. If the adjacent siblings have only the minimum number of keys, then combine one
                       of the siblings with the leaf and the median key from the parent. If this action does
                       not leave the minimum number of keys in the parent node, this process of
                       combining the nodes propogates upward, possibly as far as the root node, which
                       could result in reducing the height of the B-tree.


Next, we illustrate how the deletion process works. Consider the B-tree of order 5 shown in Figure 9-30.




                                                   682

[PDF page 683; printed page 683]
                                        FIGURE 9-30 A B-tree of order 5



Let us delete 18 from this B-tree. Because 18 is in a leaf and the leaf has more than the minimum number
of keys, we simply delete 18 from the leaf; see Figure 9-31.




                                FIGURE 9-31 Deleting 18 from a B-tree of order 5



Next, let us delete 30. Figure 9-32 shows the B-tree before and after deleting 30.




                                 FIGURE 9-32 B-tree before and after deleting 30



The leaf containing 30 has only the minimum number of keys. However, its adjacent sibling has more than
the minimum number of keys. So we move 20 from the adjacent sibling to the parent node and then move
25 from the parent node to the leaf; see Figure 9-32(b).


                                                      683

[PDF page 684; printed page 684]
Next, let us delete 70. Figure 9-33 shows the process of deleting 70.




                                                   684

[PDF page 685; printed page 685]
                                   FIGURE 9-33 Deletion of 70 from the B-tree



The node containing 70 is not a leaf. So we swap 70 with its immediate predecessor, which is 68; see
Figure 9-33(b). After deleting 70 from the leaf, because the leaf does not have the minimum number of
keys, it is combined with its adjacent sibling; see Figure 9-33(c). However, this process does not leave the
minimum number of keys in the parent node, which is 90. So we combine this node with its left sibling
and their parent, which in this case is the root node; see Figure 9-33(d). Note that the deletion of 70
resulted in reducing the height of the B-tree.


We leave it as an exercise for you to develop the necessary algorithms to delete a record from a B-tree.
Key Terms
1. A binary tree is either empty or it has a special node called the root node. If the tree is nonempty, the
   root node has two sets of nodes, called the left and right subtrees, such that the left and right subtrees

                                                     685

[PDF page 686; printed page 686]
    are also binary trees.
2. The node of a binary tree has two links in it.
3. A node in a binary tree is called a leaf if it has no left and right children.
4. A node U is called the parent of a node V if there is a branch from U to V.




                                                      686

[PDF page 687; printed page 687]
5. A path from a node X to a node Y in a binary tree is a sequence of nodes X0, X1, . . . , Xn such that (a) X
       = X0, Xn = Y and (b) Xi-1 is the parent of Xi for all i = 1, 2, . . . , n. That is, there is a branch from X0 to X1,
       X1 to X2, . . . , Xi-1 to Xi, . . . , Xn-1 to Xn.
6. The level of a node in a binary tree is the number of branches on the path from the root to the node.
7. The level of the root node of a binary tree is 0; the level of the children of the root node is 1.
8. The height of a binary tree is the number of nodes on the longest path from the root to a leaf.
9. In an inorder traversal, the binary tree is traversed as follows: (a) Traverse the left subtree; (b) visit
       the node; (c) traverse the right subtree.
10. In a preorder traversal, the binary tree is traversed as follows: (a) Visit the node; (b) traverse the left
       subtree; (c) traverse the right subtree.
11. In a postorder traversal, the binary tree is traversed as follows: (a) Traverse the left subtree; (b)
       traverse the right subtree; (c) visit the node.
12. A binary search tree T is either empty or
  i.        T has a special node called the root node.

  ii.       T has two sets of nodes, LT and RT, called the left subtree and the right subtree of T, respectively.
  iii.      The key in the root node is larger than every key in the left subtree and smaller than every key in
            the right subtree.
  iv.       LT and RT are binary search trees.
13. To delete a node from a binary search tree that has both left and right nonempty subtrees, first its
       immediate predecessor is located, then the predecessor’s info is copied into the node, and finally the
       predecessor is deleted.
14. A perfectly balanced binary tree is a binary tree such that
  i.        The heights of the left and right subtrees of the root are equal.
  ii.       The left and right subtrees of the root are perfectly balanced binary trees.
15. An AVL (or height-balanced) tree is a binary search tree such that
  i.        The heights of the left and right subtrees of the root differ by at most 1.
  ii.       The left and right subtrees of the root are AVL trees.
16. Let x be a node in a binary tree. xl denotes the height of the left subtree of x; xh denotes the height of
       the right subtree of x.
17. Let T be an AVL tree and x be a node in T. Then |xh - xl| ≤ 1, where |xh - xl| denotes the absolute value
       of xh - xl.
18. Let x be a node in the AVL tree T.

        a. If xl > xh, we say the x is left high. In this case, xl = xh + 1.
                                                             687

[PDF page 688; printed page 688]
    b. If xl = xh, we say the x is equal high.

    c. If xh > xl, we say the x is right high. In this case, xh = xl + 1.
19. The balance factor of x, written bf(x), is defined as bf(x) = xh -xl.
20. Let x be a node in the AVL tree T. Then,
    a. If x is left high, bf(x) = -1.
    b. If x is equal high, bf(x) = 0.
    c. If x is right high, bf(x) = 1.
21. Let x be a node in a binary tree. We say that node x violates the balance criteria if |xh - xl| > 1, that is,
    the heights of the left and right subtrees of x differ by more than 1.
22. Every node x in the AVL tree T, in addition to the data and pointers to the left and right subtrees, must
    keep track of its balance factor.
23. In an AVL tree, there are two types of rotations: left rotation and right rotation. Suppose that the
    rotation occurs at node, say x. If it is a left rotation, certain nodes from the right subtree of x move to
    its left subtree; the root of the right subtree of x becomes the new root of the reconstructed subtree.




                                                         688
```
