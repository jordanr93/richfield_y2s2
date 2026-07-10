---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "689-695"
printed_pages: "689-695"
section: "Review Questions"
chapter: "TOPIC 9: BINARY TREES AND B-TREES"
keywords:
  - "tree"
  - "binary"
  - "node"
  - "nodes"
  - "sequence"
  - "figure"
  - "inorder"
  - "list"
  - "preorder"
  - "exercises"
  - "through"
  - "redraw"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 689-695 | printed pages 689-695

Related sections: [Review Questions](30-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/10-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/17-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/37-review-questions.md), [Review questions](../../internet-programming-622-study-guide/sections/60-review-questions.md)

## Extracted Text

```text
[PDF page 689; printed page 689]
        Review Questions


1. Mark the following statements as true or false.
a. A binary tree must be nonempty.
b. The level of the root node is 0.
c. If a tree has only one node, the height of this tree is 0 because the number of levels is 0.
d. The inorder traversal of a binary tree always outputs the data in ascending order.


2. There are 14 different binary trees with four nodes. Draw all of them. The binary tree of Figure 9-34 is
   to be used for Exercises 3 through 8.




                                  FIGURE 9-34 Binary tree for Exercises 3 through 8



3. Find LA, the node in the left subtree of A.


4. Find RA, the node in the right subtree of A.



                                                        689

[PDF page 690; printed page 690]
5. Find RB, the node in the right subtree of B.


6. List the nodes of this binary tree in an inorder sequence.


7. List the nodes of this binary tree in a preorder sequence.


8. List the nodes of this binary tree in a postorder sequence.




                                                   690

[PDF page 691; printed page 691]
The binary tree of Figure 9-35 is to be used for Exercises 9 through 13.




                                FIGURE 9-35 Binary tree for Exercises 9 through 13



9. List the path from the node with info 80 to the node with info 79.


10. A nodewith info 35 is to be inserted in the tree. List the nodes that are visited by the function insert
   to insert 35. Redraw the tree after inserting 35.


11. Delete node 52 and redraw the binary tree.


12. Delete node 40 and redraw the binary tree.


13. Delete nodes 80 and 58 in that order. Redraw the binary tree after each deletion.


14. Suppose that you are given two sequences of elements corresponding to the inorder sequence and
   the preorder sequence. Prove that it is possible to reconstruct a unique binary tree.

15. The nodes in a binary tree in preorder and inorder sequences are as follows:
                       preorder: ABCDEFGHIJKLM inorder:
                       CEDFBAHJIKGML

                                                      691

[PDF page 692; printed page 692]
Draw the binary tree.


16. Given the preorder sequence and the postorder sequence, show that it might not be possible to
   reconstruct the binary tree.




                                              692

[PDF page 693; printed page 693]
17. Insert 100 in the AVL tree of Figure 9-36. The resulting tree must be an AVL tree. What is the balance
   factor at the root node after the insertion?




                                      FIGURE 9-36 AVL tree for Exercise 17



18. Insert 45 in the AVL tree of Figure 9-37. The resulting tree must be an AVL tree. What is the balance
   factor at the root node after the insertion?




                                      FIGURE 9-37 AVL tree for Exercise 18



19. Insert 42 in the AVL tree of Figure 9-38. The resulting tree must be an AVL tree. What is the balance
   factor at the root node after the insertion?




                                      FIGURE 9-38 AVL tree for Exercise 19



20. The keys 24, 39, 31, 46, 48, 34, 19, 5, and 29 are inserted (in the order given) into an initially empty

                                                     693

[PDF page 694; printed page 694]
AVL tree. Show the AVL tree after each insertion. The binary tree of Figure 9-39 is to be used for
Exercises 21 to 23.




                                             694

[PDF page 695; printed page 695]
                                 FIGURE 9-39 B-tree of order 5 for Exercises 21 to 23



21. Insert the keys 72, 30, and 50, in this order, into the B-tree of order 5 of Figure 9-39. Show the resulting
   tree.
22. Insert the keys 38, 45, 55, 80, and 85 into the B-tree of order 5 of Figure 9-39. Show the resulting tree.


23. Insert the keys 2, 30, 42, 10, 96, 15, 50, 82, and 98 into the B-tree of order 5 of Figure 9-39. Show the
   resulting tree.


The binary tree of Figure 9-40 is to be used for Exercises 24 to 27.




                                 FIGURE 9-40 B-tree of order 5 for Exercises 24 to 27



24. Delete 7 from the B-tree of order 5 of Figure 9-40. Show the resulting tree.


25. Delete 40 from the B-tree of order 5 of Figure 9-40. Show the resulting tree.


26. Delete 88 from the B-tree of order 5 of Figure 9-40. Show the resulting tree.


27. Delete 12 from the B-tree of order 5 of Figure 9-40. Show the resulting tree.


28. Suppose that you have the keys 40, 30, 70, 5, 16, 82, 95, 100, 73, 54, 98, 37, 25, 62, 81, 150, 79, and
   87.
a. Insert these keys into an initially empty B-tree of order 5.
b. Insert these keys into an initially empty B-tree of order 6.



                                                        695
```
