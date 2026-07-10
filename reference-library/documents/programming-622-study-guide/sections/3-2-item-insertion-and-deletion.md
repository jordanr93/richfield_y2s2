---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "125-138"
printed_pages: "125-138"
section: "Item Insertion and Deletion"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "link"
  - "list"
  - "newnode"
  - "node"
  - "linked"
  - "info"
  - "statements"
  - "item"
  - "insertion"
  - "figure"
  - "newnode-"
  - "following"
---

# Item Insertion and Deletion

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 125-138 | printed pages 125-138

Related sections: [Review Questions](30-review-questions.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward](5-6-removing-recursion-nonrecursive-algorithm-to-print-a-linked-list-backward.md), [Insertion into an Ordered List](7-5-insertion-into-an-ordered-list.md), [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md)

## Extracted Text

```text
[PDF page 125; printed page 125]
3.2 Item Insertion and Deletion


 This section discusses how to insert an item into, and delete an item from, a linked list. Consider the
 following definition of a node. (For simplicity, we assume that the info type is int. The next section, which
 discusses linked lists as an abstract data type (ADT) using templates, uses the generic definition of a node.)


                        struct nodeType
                        {
                                int info; nodeType
                                *link;
                        };


 We will use the following variable declaration:
 nodeType *head, *p, *q, *newNode;


3.2.1 Insertion


 Consider the linked list shown in Figure 3-6.




                                    FIGURE 3-6 Linked list before item insertion



 Suppose that p points to the node with info 65, and a new node with info 50 is to be created and inserted
 after p. Consider the following statements:


                                                       125

[PDF page 126; printed page 126]
                      newNode = new nodeType;            //create newNode
                      newNode->info = 50;                //store 50 in the new node
                      newNode->link = p->link; p->link
                      = newNode;


Table 3-3 shows the effect of these statements.




                                                  126

[PDF page 127; printed page 127]
                                       TABLE 3-3: Inserting a node in a linked list




Note that the sequence of statements to insert the node, that is,


                        newNode->link = p->link; p->link
                        = newNode;


is very important because to insert newNode in the list we use only one pointer, p, to adjust the links of
the nodes of the linked list. Suppose that we reverse the sequence of the statements and execute the
statements in the following order:


                        p->link = newNode;
                        newNode->link = p->link;


Figure 3-7 shows the resulting list after these statements execute.




        FIGURE 3-7 List after the execution of the statement p->link = newNode; followed by the execution of the
                                          statement newNode->link = p->link;

                                                          127

[PDF page 128; printed page 128]
From Figure 3-7, it is clear that newNode points back to itself and the remainder of the list is lost.


Using two pointers, we can simplify the insertion code somewhat. Suppose q points to the node with info
34. (See Figure 3-8.)




                                                     128

[PDF page 129; printed page 129]
                                          FIGURE 3-8 List with pointers p and q



The following statements insert newNode between p and q:


                       newNode->link = q; p->link
                       = newNode;


The order in which these statements execute does not matter. To illustrate this, suppose that we execute
 the statements in the following order:


                       p->link = newNode; newNode->link
                       = q;


Table 3-4 shows the effect of these statements.


                              TABLE 3-4: Inserting a node in a linked list using two pointers




3.2.2 Deletion


Consider the linked list shown in Figure 3-9.




                                                           129

[PDF page 130; printed page 130]
                                 FIGURE 3-9 Node to be deleted is with info 34



Suppose that the node with info 34 is to be deleted from the list. The following statement removes the
node from the list:
p->link = p->link->link;


Figure 3-10 shows the resulting list after the preceding statement executes.




                                                     130

[PDF page 131; printed page 131]
                          FIGURE 3-10 List after the statement p->link = p->link->link; executes



 From Figure 3-10, it is clear that the node with info 34 is removed from the list. However, the memory is
 still occupied by this node and this memory is inaccessible; that is, this node is dangling. To deallocate the
 memory, we need a pointer to this node. The following statements delete the node from the list and
 deallocate the memory occupied by this node:


                        q = p->link; p->link
                         = q->link; delete
                         q;


 Table 3-5 shows the effect of these statements.


                                      TABLE 3-5: Deleting a node from a linked list




3.2.3 Building a Linked List


 Now that we know how to insert a node in a linked list, let us see how to build a linked list. First, we
 consider a linked list in general. If the data we read is unsorted, the linked list will be unsorted. Such a list
 can be built in two ways: forward and backward. In the forward manner, a new node is always inserted at
 the end of the linked list. In the backward manner, a new node is always inserted at the beginning of the

                                                          131

[PDF page 132; printed page 132]
 list. We will consider both cases.


3.2.4 Building a Linked List Forward


 Suppose that the nodes are in the usual info-link form and info is of type int. Let us assume that we process
 the following data:


                        2 15 8 24 34




                                                     132

[PDF page 133; printed page 133]
We need three pointers to build the list: one to point to the first node in the list, which cannot be moved,
one to point to the last node in the list, and one to create the new node. Consider the following variable
declaration:


                         nodeType *first, *last, *newNode; int
                         num;


Suppose that first points to the first node in the list. Initially, the list is empty, so both first and last are
NULL. Thus, we must have the statements


                         first = NULL;
                         last = NULL;


to initialize first and last to NULL.


Next, consider the following statements:


1       cin >> num;                                    //read and store a number in num
2       newNode = new nodeType;                //allocate memory of type nodeType
                                                       //and store the address of the
                                                       //allocated memory in newNode 3
newNode->info = num;                           //copy the value of num into the
                                                       //info field of newNode

4       newNode->link = NULL;                           //initialize the link field of
                                                        //newNode to NULL
5       if (first == NULL)                              //if first is NULL, the list is empty;
                                                        //make first and last point to newNode
        {
5a              first = newNode;
5b              last = newNode;
        }
6       else                                            //list is not empty


                                                      133

[PDF page 134; printed page 134]
       {
6a             last->link = newNode;                  //insert newNode at the end of the list 6b
       last = newNode;                       //set last so that it points to the
                                                      //actual last node in the list
       }


Let us now execute these statements. Initially, both first and last are NULL. Therefore, we have the list as
shown in Figure 3-11.




                                            FIGURE 3-11 Empty list




                                                    134

[PDF page 135; printed page 135]
After statement 1 executes, num is 2. Statement 2 creates a node and stores the address of that node in
newNode. Statement 3 stores 2 in the info field of newNode, and statement 4 stores NULL in the link field
of newNode. (See Figure 3-12.)




                                       FIGURE 3-12 newNode with info 2



Because first is NULL, we execute statements 5a and 5b. Figure 3-13 shows the resulting list.




                                  FIGURE 3-13 List after inserting newNode in it



We now repeat statements 1 through 6b. After statement 1 executes, num is 15. Statement 2 creates a
node and stores the address of this node in newNode. Statement 3 stores 15 in the info field of newNode,
and statement 4 stores NULL in the link field of newNode. (See Figure 3-14.)




                                   FIGURE 3-14 List and newNode with info 15



Because first is not NULL, we execute statements 6a and 6b. Figure 3-15 shows the resulting list.




                               FIGURE 3-15 List after inserting newNode at the end



We now repeat statements 1 through 6b three more times. Figure 3-16 shows the resulting list.




                                  FIGURE 3-16 List after inserting 8, 24, and 34



                                                      135

[PDF page 136; printed page 136]
We can put the previous statements in a loop, and execute the loop until certain conditions are met, to
build the linked list. We can, in fact, write a C++ function to build a linked list.


Suppose that we read a list of integers ending with -999. The following function, buildListForward, builds
a linked list (in a forward manner) and returns the pointer of the built list:


nodeType* buildListForward()




                                                      136

[PDF page 137; printed page 137]
 {
        nodeType *first, *newNode, *last; int
        num;


        cout << "Enter a list of integers ending with -999."<< endl; cin
        >> num;
        first = NULL;


        while (num != -999)
        {
                 newNode = new nodeType; newNode->info
                 = num;
                 newNode->link = NULL;


                 if (first == NULL)
                 {
                          first = newNode;
                          last = newNode;
                 }
                 else
                 {
                          last->link = newNode;
                          last = newNode;

                 }


                 cin >> num;
        }                                         //end while return
        first;
 }                                                //end buildListForward


3.2.5 Building a Linked List Backward


 Now we consider the case of building a linked list backward. For the previously given data—2, 15, 8, 24,
                                                    137

[PDF page 138; printed page 138]
and 34—the linked list is as shown in Figure 3-17.




                                    FIGURE 3-17 List after building it backward



Because the new node is always inserted at the beginning of the list, we do not need to know the end of
the list, so the pointer last is not needed. Also, after inserting the new node at the beginning, the new
node becomes the first node in the list. Thus, we need to update the value of the pointer first to correctly
point to the first node in the list. We see, then, that we need only two pointers to build the linked list: one
to point to the list and one to create the new node. Because initially the list is empty, the pointer first
must be initialized to NULL. The following C++ function builds the linked list backward and returns the
pointer of the built list:


nodeType* buildListBackward()




                                                       138
```
