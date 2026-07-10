---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "597-615"
printed_pages: "597-615"
section: "Binary Search Trees"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "binary"
  - "tree"
  - "node"
  - "search"
  - "figure"
  - "root"
  - "item"
  - "our"
  - "subtree"
  - "compare"
  - "because"
  - "must"
---

# Binary Search Trees

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 597-615 | printed pages 597-615

Related sections: [Binary Search](7-4-binary-search.md), [Binary Trees](9-1-binary-trees.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [B-Trees](9-9-b-trees.md), [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md)

## Extracted Text

```text
[PDF page 597; printed page 597]
9.3 Binary Search Trees


Now that you know the basic operations on a binary tree, this section discusses a special type of binary
 tree, called a binary search tree.


Consider the binary tree in Figure 9-6.




                                             FIGURE 9-6 Arbitrary binary tree



Suppose that we want to determine whether 50 is in the binary tree. To do so, we can use any of the
 previous traversal algorithms to visit each node and compare the search item with the data stored in the
 node. However, this could require us to traverse a large part of the binary tree, so the search would be
 slow. We need to visit each node in the binary tree until either the item is found or we have traversed the
 entire binary tree because no criteria exist to guide our search. This case is like an arbitrary linked list
 where we must start our search at the first node, and continue looking at each node until either the item
 is found or the entire list is searched.
                                                          597

[PDF page 598; printed page 598]
On the other hand, consider the binary tree in Figure 9-7.




                                                   598

[PDF page 599; printed page 599]
                                          FIGURE 9-7 Binary search tree



In      the binary tree in Figure 9-7, the data in each node is
        Larger than the data in its left subtree
        Smaller than the data in its right subtree


The binary tree in Figure 9-7 has some structure. Suppose that we want to determine whether 58 is in this
binary tree. As before, we must start our search at the root node. We compare 58 with the data in the
root node; that is, we compare 58 with 60. Because 58 ≠ 60 and 58 < 60, it is guaranteed that 58 will not
be in the right subtree of the root node. Therefore, if 58 is in the binary tree, it must be in the left subtree
of the root node. We follow the left pointer of the root node and go to the node with info 50.We now
apply the same criteria at this node. Because 58 > 50, wemust follow the right pointer of this node and go
to the node with info 58. At this node we find item 58.


This example shows that every time we move down to a child, we eliminate one of the subtrees of the
node from our search. If the binary tree is nicely constructed, the search is very similar to the binary search
on arrays.


The binary tree given in Figure 9-7 is a special type of binary tree, called a binary search tree. (In the
following definition, by the term key of the node we mean the key of the data item that uniquely identifies
the item.)


Definition: A binary search tree, T, is either empty or the following is true:
        i.     T has a special node called the root node.
        ii.    T has two sets of nodes, LT and RT, called the left subtree and right subtree of T,
               respectively.
        iii.   The key in the root node is larger than every key in the left subtree and smaller than every
                                                      599

[PDF page 600; printed page 600]
              key in the right subtree.
       iv.    LT and RT are binary search trees.


The following operations are typically performed on a binary search tree:




                                                   600

[PDF page 601; printed page 601]
        Search the binary search tree for a particular item.
        Insert an item in the binary search tree.
        Delete an item from the binary search tree.
        Find the height of the binary search tree.
        Find the number of nodes in the binary search tree.
        Find the number of leaves in the binary search tree.
        Traverse the binary search tree. Copy
        the binary search tree.
Clearly, every binary search tree is a binary tree. The height of a binary search tree is determined the same
way as the height of a binary tree. Similarly, the operations to find the number of nodes, to find the
number of leaves, and to do inorder, preorder, and postorder traversals of a binary search tree are the
same as those for a binary tree. Therefore, we can inherit all of these operations from the binary tree.
That is, we can extend the definition of the binary tree by using the principle of inheritance and, hence,
define the binary search tree.


The following class defines a binary search tree as an ADT by extending the definition of the binary tree:
//**************************************************************
// This class specifies the basic operations to implement a binary search tree.
//**************************************************************
template <class elemType>
class bSearchTreeType: public binaryTreeType<elemType>
{
       public:


                 bool search(const elemType& searchItem) const;
                 //Function to determine if searchItem is in the binary
                 //search tree.
                 //Postcondition: Returns true if searchItem is found in the //
                 binary search tree; otherwise, returns false.


                 void insert(const elemType& insertItem);
                 //Function to insert insertItem in the binary search tree.
                 //Postcondition: If no node in the binary search tree has the

                                                     601

[PDF page 602; printed page 602]
       // same info as insertItem, a node with the info insertItem
       // is created and inserted in the binary search tree.


       void deleteNode(const elemType& deleteItem);
       //Function to delete deleteItem from the binary search tree.
       //Postcondition: If a node with the same info as deleteItem //
       is found, it is deleted from the binary search tree.


private:


       void deleteFromTree(binaryTreeNode<elemType>* &p);
       //Function to delete the node to which p points is deleted //from
       the binary search tree.
       //Postcondition: The node to which p points is deleted from //
       the binary search tree.




                                            602

[PDF page 603; printed page 603]
};
Next, we describe each of these operations.




9.1.6 Search


The function search searches the binary search tree for a given item. If the item is found in the binary
search tree, it returns true; otherwise, it returns false. Because the pointer root points to the root node
of the binary search tree, we must begin our search at the root node. Furthermore, because root must
always point to the root node, we need a pointer, say current, to traverse the binary search tree. The
pointer current is initialized to root.


If the binary search tree is nonempty, we first compare the search item with the info in the root node. If
they are the same, we stop the search and return true. Otherwise, if the search item is smaller than the
info in the node, we follow llink to go to the left subtree; otherwise, we follow rlink to go to the right
subtree. We repeat this process for the next node. If the search item is in the binary search tree, our
search ends at the node containing the search item; otherwise, the search ends at an empty subtree. Thus,
the general algorithm is as follows:


                        if root is NULL
                                Cannot search an empty tree, returns false. else
                        { current = root;
                                while (current is not NULL and not found) if (current->info
                                          is the same as the search item) set found to true;
                                          else if(current->info is greater than the search
                                          item) follow the llink of current else follow the rlink
                                          of current
                        }
This pseudocode algorithm translates into the following C++ function:
template <class elemType> bool
bSearchTreeType<elemType>::
search(const elemType& searchItem) const
{

                                                        603

[PDF page 604; printed page 604]
binaryTreeNode<elemType> *current;
bool found = false;


if (root == NULL) cerr << "Cannot search the empty
tree." << endl; else
{
       current = root;


       while (current != NULL && !found)
       {
               if (current->info == searchItem)
               found = true; else if (current->info
               > searchItem) current = current-




                                            604

[PDF page 605; printed page 605]
                        >llink; else current = current-
                        >rlink;
                }//end while
       }//end else


       return found;
}//end search


9.1.7 Insert


After inserting an item in a binary search tree, the resulting binary tree must also be a binary search tree.
To insert a new item, first we search the binary search tree and find the place where the new item is to
be inserted. The search algorithm is similar to the search algorithm of the function search. Here we
traverse the binary search tree with two pointers—a pointer, say current, to check the current node and
a pointer, say trailCurrent, pointing to the parent of current. Because duplicate items are not allowed, our
search must end at an empty subtree. We can then use the pointer trailCurrent to insert the new item at
the proper place. The item to be inserted, insertItem, is passed as a parameter to the function insert. The
general algorithm is as follows:


   a. Create a new node and copy insertItem into the new node. Also set llink and rlink of the new node
       to NULL.
   b. if the root is NULL, the tree is empty so make root point to the new node.
       else
       { current = root;
                while (current is not NULL) //search the binary tree
                { trailCurrent = current;
                       if (current->info is the same as the insertItem)
                                  Error: Cannot insert duplicate exit
                       else if(current->info > insertItem)
                                  Follow llink of current else
                                  Follow rlink of current
                }


                                                        605

[PDF page 606; printed page 606]
              //insert the new node in the binary tree


              if (trailCurrent->info > insertItem) make the new node
                      the left child of trailCurrent
              else make the new node the right child of trailCurrent
       }
This pseudocode algorithm translates into the following C++ function:




template <class elemType>
void bSearchTreeType<elemType>::insert(const elemType& insertItem)
{

       binaryTreeNode<elemType> *current;                    //pointer to traverse the tree
       binaryTreeNode<elemType> *trailCurrent;               //pointer behind current




                                                       606

[PDF page 607; printed page 607]
       binaryTreeNode<elemType> *newNode; newNode //pointer to create the node
       = new binaryTreeNode<elemType>;
       assert(newNode != NULL); newNode-
       >info = insertItem; newNode->llink =
       NULL; newNode->rlink = NULL;



       if (root == NULL) root =
                newNode;
       else
       {
                Current = root;


                while (current != NULL)
                {
                        trailCurrent = current;


                        if (current->info == insertItem)
                        {
                               cerr << "The insert item is already in the list-"; cerr <<
                                  "duplicates are not allowed."<< insertItem << endl;
                                  return;
                        }
                        else if (current->info > insertItem) current
                               = current->llink;
                        else current = current->rlink;
                }//end while


                if (trailCurrent->info > insertItem)
                trailCurrent->llink = newNode; else
                trailCurrent->rlink = newNode;
       }
}//end insert

                                                       607

[PDF page 608; printed page 608]
9.3.3 Delete


As before, first we search the binary search tree to find the node to be deleted. To help you better
understand the delete operation, before describing the function to delete an item from the binary search
tree, let us consider the binary search tree given in Figure 9-8.




                                                    608

[PDF page 609; printed page 609]
                                FIGURE 9-8 Binary search tree before deleting a node



After deleting the desired item (if it exists in the binary search tree), the resulting tree must be a binary
search tree. The delete operation has four cases, as follows:


Case 1: The node to be deleted has no left and right subtrees; that is, the node to be deleted is a leaf. For
example, the node with info 45 is a leaf.


Case 2: The node to be deleted has no left subtree; that is, the left subtree is empty, but it has a nonempty
right subtree. For example, the left subtree of node with info 40 is empty and its right subtree is nonempty.


Case 3: The node to be deleted has no right subtree; that is, the right subtree is empty, but it has a
nonempty left subtree. For example, the left subtree of node with info 80 is empty and its right subtree is
nonempty.


Case 4: The node to be deleted has nonempty left and right subtrees. For example, the left and the right
subtrees of node with info 50 are nonempty.


Figure 9-9 illustrates these four cases.




                                                       609

[PDF page 610; printed page 610]
                        FIGURE 9-9 The binary tree of Figure 9-8 after deleting various items



Case 1: Suppose that we want to delete 45 from the binary search tree in Figure 9-8. We search the binary
tree and arrive at the node containing 45. Because this node is a leaf and is the left child of its parent, we
can simply set the llink of the parent node to NULL and deallocate the memory occupied by this node.
After deleting this node, Figure 9-9(a) shows the resulting binary search tree.


Case 2: Suppose that we want to delete 30 from the binary search tree in Figure 9-8. In this case, the node
to be deleted has no left subtree. Because 30 is the left child of its parent node, we make the llink of the
parent node point to the right child of 30 and then deallocate the memory occupied by 30. Figure 9-9(b)
shows the resulting binary tree.


                                                        610

[PDF page 611; printed page 611]
Case 3: Suppose that we want to delete 80 from the binary search tree of Figure 9-8. The node containing
80 has no right child and is the right child of its parent. Thus, we make the rlink of the parent of 80—that
is, 70—point to the left child of 80. Figure 9-9(c) shows the resulting binary tree.




                                                    611

[PDF page 612; printed page 612]
Case 4: Suppose that we want to delete 50 from the binary search tree in Figure 9-8. The node with info
50 has a nonempty left subtree and a nonempty right subtree. Here, we first reduce this case to either
Case 2 or Case 3 as follows. To be specific, suppose that we reduce it to Case 3—that is, the node to be
deleted has no right subtree. For this case, we find the immediate predecessor of 50 in this binary tree,
which is 48. This is done by first going to the left child of 50 and then locating the rightmost node of the
left subtree of 50. To do so, we follow the rlink of the nodes. Because the binary search tree is finite, we
eventually arrive at a node that has no right subtree. Next, we swap the info in the node to be deleted
with the info of its immediate predecessor. In this case, we swap 48 with 50. This reduces to the case
wherein the node to be deleted has no right subtree. We now apply Case 3 to delete the node. (Note that
because we will delete the immediate predecessor from the binary tree, we, in fact, copy only the info of
the immediate predecessor into the node to be deleted.) After deleting 50 from the binary search tree in
Figure 9-8, the resulting binary tree is as shown in Figure 9-9(d).


In each case, we see that the resulting binary tree is again a binary search tree.


From this discussion, it follows that to delete an item from a binary search tree, we must do the following:


    1. Find the node containing the item (if any) to be deleted.
    2. Delete the node.


We accomplish the second step by a separate function, which we will call deleteFromTree. Given a pointer
to the node to be deleted, this function deletes the node by taking into account the previous four cases.


The preceding examples show that whenever we delete a node from a binary tree, we adjust one of the
pointers of the parent node. Because the adjustment has to be made in the parent node, we must call the
function deleteFromTree by using an appropriate pointer of the parent node. For example, suppose that
the node to be deleted is 35, which is the right child of its parent node. Further suppose that trailCurrent
points to the node containing 30, the parent node of 35. A call to the function deleteFromTree is as follows:


                       deleteFromTree(trailCurrent->rlink);


Of course, if the node to be deleted is the root node, then the call to the function deleteFromTree is as
follows:

                                                    612

[PDF page 613; printed page 613]
deleteFromTree(root);


We now define the C++ function deleteFromTree:


template <class elemType>
void bSearchTreeType<elemType>::deleteFromTree(binaryTreeNode<elemType>* &p)
{
       binaryTreeNode<elemType> *current;                   //pointer to traverse the tree
       binaryTreeNode<elemType> *trailCurrent; //pointer behind current
       binaryTreeNode<elemType> *temp; //pointer to delete the node


       if (p == NULL) cerr << "Error: The node to be deleted is NULL."
       << endl; else if(p->llink == NULL && p->rlink == NULL)
       {




                                                   613

[PDF page 614; printed page 614]
        temp = p; p
        = NULL;
        delete temp;
}
else if(p->llink == NULL)
{
        temp = p; p =
        temp->rlink;
        delete temp;
}
else if(p->rlink == NULL)
{
        temp = p; p =
        temp->llink;
        delete temp;
}
else
{ current = p->llink;
        trailCurrent = NULL;


        while (current->rlink != NULL)
        { trailCurrent = current; current
                = current->rlink;
        }//end while


        p->info = current->info;


        if (trailCurrent == NULL)                      //current did not move;
                                                       //current == p->llink; adjust p
                p->llink = current->llink; else
        trailCurrent->rlink = current->llink; delete
        current;
}//end else
                                              614

[PDF page 615; printed page 615]
}//end deleteFromTree


Next, we describe the function deleteNode. The function deleteNode first searches the binary search tree
to find the node containing the item to be deleted. The item to be deleted, deleteItem, is passed as a
parameter to the function. If the node containing deleteItem is found in the binary search tree, the
function deleteNode calls the function deleteFromTree to delete the node. The definition of the function
deleteNode is given next.


template <class elemType>
void bSearchTreeType<elemType>::deleteNode(const elemType& deleteItem)
{
       binaryTreeNode<elemType> *current; //pointer to traverse the tree
       binaryTreeNode<elemType> *trailCurrent; //pointer behind current
       bool found = false;




                                                 615
```
