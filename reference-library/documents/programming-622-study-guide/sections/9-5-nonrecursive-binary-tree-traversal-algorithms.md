---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "619-625"
printed_pages: "619-625"
section: "Nonrecursive Binary Tree Traversal Algorithms"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "node"
  - "binary"
  - "tree"
  - "current"
  - "traversal"
  - "inorder"
  - "then"
  - "nonrecursive"
  - "stack"
  - "leftmost"
  - "preorder"
  - "postorder"
---

# Nonrecursive Binary Tree Traversal Algorithms

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 619-625 | printed pages 619-625

Related sections: [Binary Tree Traversal](9-2-binary-tree-traversal.md), [Binary Tree Traversal and Functions as Parameters](9-6-binary-tree-traversal-and-functions-as-parameters.md), [Binary Search Tree: Analysis](9-4-binary-search-tree-analysis.md), [Decision Tree Regression](../../machine-learning-600-study-guide/sections/3-5-decision-tree-regression.md), [Binary Search Trees](9-3-binary-search-trees.md), [Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward](5-6-removing-recursion-nonrecursive-algorithm-to-print-a-linked-list-backward.md)

## Extracted Text

```text
[PDF page 619; printed page 619]
9.5 Nonrecursive Binary Tree Traversal Algorithms


The previous sections described how to do the following:




                                                 619

[PDF page 620; printed page 620]
        Traverse a binary tree using the inorder, preorder, and postorder methods.
        Construct a binary tree.
        Insert an item in a binary tree.
        Delete an item from a binary tree.


The traversal algorithms—inorder, preorder, and postorder—discussed earlier are recursive. Because
traversing a binary tree is a fundamental operation and recursive functions are somewhat less efficient
then their iterative versions, this section discusses the nonrecursive inorder, preorder, and postorder
traversal algorithms.


9.1.8 Nonrecursive Inorder Traversal


In the inorder traversal of a binary tree, for each node, the left subtree is visited first, then the node, and
then the right subtree. It follows that in an inorder traversal, the first node visited is the leftmost node of
the binary tree. For example, in the binary tree in Figure 9-11, the leftmost node is the node with info 28.




                                   FIGURE 9-11 Binary tree; leftmost node is 28



To get to the leftmost node of the binary tree, we start by traversing the binary tree at the root node and
then follow the left link of each node until the left link of a node becomes null. We then back up to the
parent node, visit the node, and then move to the right node. Because links go in only one direction, to
get back to a node, we must save a pointer to the node before moving to the child node. Moreover, the
nodes must be backtracked in the order they were traversed. It follows that while backtracking, the nodes
must be visited in a last-in, first-out manner. This can be done by using a stack. We, therefore, save a
pointer to a node in a stack. The general algorithm is as follows:


    1. current = root;                         //start

                                                      620

[PDF page 621; printed page 621]
   traversing the binary tree at the root node
2. while (current is not NULL or stack is nonempty) if
   (current is not NULL)
   {
           push current into the stack;
           current = current->llink;
   }
   else
   {
           pop stack into current;
           visit current;                 //visit the node




                                                 621

[PDF page 622; printed page 622]
               current = current->rlink;        //move to the right child
       }
The following function implements the nonrecursive inorder traversal of a binary tree:
template <class elemType>
void binaryTreeType<elemType>::nonRecursiveInTraversal() const
{
       stackType<binaryTreeNode<elemType>* > stack; binaryTreeNode<elemType>
       *current;
       current = root;


       while ((current != NULL) || (!stack.isEmptyStack()))
               if (current != NULL)
               {
                         stack.push(current);
                         current = current->llink;
               }
               else
               { current = stack.top(); stack.pop();
                         cout << current->info << " ";
                         current = current->rlink;
               } cout
       << endl;
}


9.1.9 Nonrecursive Preorder Traversal


In a preorder traversal of a binary tree, for each node, first the node is visited, then the left subtree is
visited, and then the right subtree is visited. As in the case of an inorder traversal, after visiting a node
and before moving to the left subtree, we must save a pointer to the node so that after visiting the left
subtree, we can visit the right subtree. The general algorithm is as follows:


    1. current = root;
               //start the traversal at the root node
                                                         622

[PDF page 623; printed page 623]
   2. while (current is not NULL or stack is nonempty) if
       (current is not NULL)
              { visit current node; push
                     current into stack;
                     current = current->llink;
              }
              else
              {
                     pop stack into current;
                     current = current->rlink;              //prepare to visit the right subtree
              }




The following function implements the nonrecursive preorder traversal algorithm:




                                                  623

[PDF page 624; printed page 624]
template <class elemType>
void binaryTreeType<elemType>::nonRecursivePreTraversal() const
{
       stackType<binaryTreeNode<elemType>*> stack; binaryTreeNode<elemType>
       *current;
       current = root;
       while ((current != NULL) || (!stack.isEmptyStack()))
               if (current != NULL)
               { cout << current->info << " ";
                         stack.push(current);
                         current = current->llink;
               }
               else
               { current = stack.top();
                         stack.pop();
                         current = current->rlink;
               } cout
       << endl;
}


9.1.10 Nonrecursive Postorder Traversal


In a postorder traversal of a binary tree, for each node, first the left subtree is visited, then the right
subtree is visited, and then the node is visited. As in the case of an inorder traversal, in a postorder
traversal, the first node visited is the leftmost node of the binary tree. Because—for each node—the left
and right subtrees are visited before visiting the node, we must indicate to the node whether the left and
right subtrees have been visited. After visiting the left subtree of a node and before visiting the node,
wemust visit its right subtree. Therefore, after returning from a left subtree, we must tell the node that
the right subtree needs to be visited, and after visiting the right subtree we must tell the node that it can
now be visited. To do this, other than saving a pointer to the node (to get back to the right subtree and to
the node itself), we also save an integer value of 1 before moving to the left subtree and an integer value
of 2 before moving to the right subtree. Whenever the stack is popped, the integer value associated with

                                                     624

[PDF page 625; printed page 625]
that pointer is popped as well. This integer value tells whether the left and right subtrees of a node have
been visited. The general algorithm is as follows:


   1. current = root; //start the traversal at the root node
   2. v = 0;
   3. if (current is NULL) the binary tree is empty

   4. if (current is not NULL)
       a. push current into stack;
       b. push 1 into stack;
       c. current = current->llink;
       d. while (stack is not empty)
               if (current is not NULL and v is 0)
               {




                                                      625
```
