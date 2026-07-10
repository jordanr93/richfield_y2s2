---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "161-176"
printed_pages: "161-176"
section: "Unordered Linked Lists"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "type"
  - "newitem"
  - "points"
  - "last"
  - "unorderedlinkedlist"
  - "const"
  - "node"
  - "unordered"
  - "linked"
  - "postcondition"
  - "first"
---

# Unordered Linked Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 161-176 | printed pages 161-176

Related sections: [Ordered Linked Lists](3-6-ordered-linked-lists.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Linked List Iterators](3-4-linked-list-iterators.md), [Linked Lists](3-1-linked-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md)

## Extracted Text

```text
[PDF page 161; printed page 161]
3.5 Unordered Linked Lists


As described in the previous section, we derive the class unorderedLinkedList from the abstract class
 linkedListType and implement the operations search, insertFirst, insertLast, and deleteNode.


The following class defines an unordered linked list as an ADT:
//***********************************************************
 // This class specifies the members to implement the
 basic // properties of an unordered linked list. This class is
 // derived from the class linkedListType.
//*********************************************************** template
 <class Type>

                                                         161

[PDF page 162; printed page 162]
class unorderedLinkedList: public linkedListType<Type>
{ public:
              bool search(const Type& searchItem) const;
              //Function to determine whether searchItem is in the list.
              //Postcondition: Returns true if searchItem is in the list, //
              otherwise the value false is returned.




                                                    162

[PDF page 163; printed page 163]
              void insertFirst(const Type& newItem);
              //Function to insert newItem at the beginning of the list.
              //Postcondition: first points to the new list, newItem
              is // inserted at the beginning of the list, last points to
              // the last node, and count is incremented by 1.


              void insertLast(const Type& newItem);
              //Function to insert newItem at the end of the list.
              //Postcondition: first points to the new list, newItem
              is // inserted at the end of the list, last points to the //
              last node, and count is incremented by 1.


              void deleteNode(const Type& deleteItem); //Function
               to delete deleteItem from the list.
              //Postcondition: If found, the node containing deleteItem
              // is deleted from the list. first points to the first //
              node, last points to the last node of the updated //
              list, and count is decremented by 1.
};


Figure 3-20 shows a UML class diagram of the class unorderedLinkedList and the inheritance hierarchy.




                     FIGURE 3-20 UML class diagram of the class unorderedLinkedList and the
                                             inheritance hierarchy

Next we give the definitions of the member functions of the class unorderedLinkedList.




3.1.8 Search the List
                                                     163

[PDF page 164; printed page 164]
The member function search searches the list for a given item. If the item is found, it returns true;
otherwise, it returns false. Because a linked list is not a random access data structure, we must
sequentially search the list starting from the first node.


This function has the following steps:
    1. Compare the search item with the current node in the list. If the info of the current node is the
       same as the search item, stop the search; otherwise, make the next node the current node.
    2. Repeat Step 1 until either the item is found or no more data is left in the list to compare with the
       search item.


template <class Type>
bool unorderedLinkedList<Type>::search(const Type& searchItem) const
{




                                                     164

[PDF page 165; printed page 165]
       nodeType<Type> *current;                             //pointer to traverse the list
       bool found = false;
       current = first;                                     //set current to point to the first
                                                            //node in the list
       while (current != NULL && !found)                    //search the list

               if (current->info == searchItem)             //searchItem is found
                          found = true;
               else
                          current = current->link;          //make current point to
                                                            //the next node
               return found;
}                                                           //end search


The number of times the while loop executes, in the function search, depends on where in the list the
search item is located. Suppose the list has n items. If the search item is not in the list, the while loop
executes n times. On the other hand, if the search item is the first item, the while loop executes 1 time.
Similarly, if the search item is the ith item in the list, the while loop executes i times. From these
observations, we can show that the function search is of O(n). We will explicitly analyze the sequential
search algorithm in Chapter 7.


3.1.9 Insert the First Node


The function insertFirst inserts the new item at the beginning of the list—that is, before the node pointed
to by first. The steps needed to implement this function are as follows:


    1. Create a new node.
    2. If unable to create the node, terminate the program.
    3. Store the new item in the new node.
    4. Insert the node before first.
    5. Increment count by 1.


template <class Type>
void unorderedLinkedList<Type>::insertFirst(const Type& newItem)
                                                     165

[PDF page 166; printed page 166]
{
    nodeType<Type> *newNode;                //pointer to create the new node newNode
    = new nodeType<Type>;      //create the new node

    newNode->info = newItem;                //store the new item in the node

    newNode->link = first;                  //insert newNode before first

    first = newNode;                        //make first point to the actual first node

    count++;                                //increment count

    if (last == NULL)                       //if the list was empty, newNode is also
                                            //the last node in the list
            last = newNode;
}                                           //end insertFirst




                                           166

[PDF page 167; printed page 167]
3.1.10 Insert the Last Node


The definition of the member function insertLast is similar to the definition of the member function
insertFirst. Here, we insert the new node after last. Essentially, the function insertLast is as follows:


template <class Type>
void unorderedLinkedList<Type>::insertLast(const Type& newItem)
{
        nodeType<Type> *newNode;               //pointer to create the new node newNode
        = new nodeType<Type>; //create the new node

        newNode->info = newItem;               //store the new item in the node

        newNode->link = NULL;                  //set the link field of newNode to NULL

        if (first == NULL)                     //if the list is empty, newNode is
        {                                      //both the first and last node

                first = newNode;
                last = newNode;
                count++;                       //increment count
        }
        else                                   //the list is not empty, insert newNode after last
        {
                last->link = newNode;          //insert newNode after last

                last = newNode;                //make last point to the actual
                                               //last node in the list
                count++;                       //increment count
        }
}                                              //end insertLast


From the definitions of the functions insertFirst and insertLast, it follows that each of these functions is of
O(1).




                                                     167

[PDF page 168; printed page 168]
3.1.11 Delete a Node


Next, we discuss the implementation of the member function deleteNode, which deletes a node from the
       list with a given info. We need to consider the following cases:
       The list is empty.
       The node is nonempty and the node to be deleted is the first node.
       The node is nonempty and the node to be deleted is not the first node, it is somewhere in the list.
      The node to be deleted is not in the list.




                                                   168

[PDF page 169; printed page 169]
If list is empty, we can simply print a message indicating that the list is empty. If list is not empty, we
search the list for the node with the given info and, if such a node is found, we delete this node. After
deleting the node, count is decremented by 1. In pseudocode, the algorithm is as follows:


          if list is empty
                  Output(cannot delete from an empty list); else
          { if the first node is the node with the given info
                  adjust the head pointer, that is, first, and deallocate
                  the memory; else
                  { search the list for the node with the given info if
                             such a node is found, delete it and adjust the
                             values of last (if necessary) and count.
                  }

          }

Case 1:           The list is empty. If the list is empty, output an error message as shown in the
                  pseudocode.
Case 2:           The list is not empty and the node to be deleted is the first node. This case has two
                  scenarios: list has only one node, and list has more than one node. If list has only one node,
                  then after deletion, the list becomes empty. Therefore, after deletion, both first and last
                  are set to NULL and count is set to 0.


Suppose that the node to be deleted is the first node and list has more than one node. Then after deleting
this node, the second node becomes the first node. Therefore, after deleting the node the value of the
pointer first changes and it contains the address of the second node.


Case 3:           The node to be deleted is not the first node, but is somewhere in the list.


This case has two subcases: (a) the node to be deleted is not the last node, and (b) the node to be deleted
is the last node. Let us illustrate the first cases.


Case 3a:          The node to be deleted is not the last node.
Consider the list shown in Figure 3-21.


                                                          169

[PDF page 170; printed page 170]
                                       FIGURE 3-21 list before deleting 37



Suppose that the node to be deleted is 37. After deleting this node, the resulting list is as shown in Figure
3-22. (Notice that the deletion of 37 does not require us to change the values of first and last. The link
field of the previous node—that is, 17—changes. After deletion, the node with info 17 contains the
address of the node with 24.)




                                                      170

[PDF page 171; printed page 171]
                                           FIGURE 3-22 list after deleting 37



Case 3b:           The node to be deleted is the last node. In this case, after deleting the node, the value of
                   the pointer last changes. It contains the address of the node just before the node to be
                   deleted. For example, consider the list given in Figure 3- 21 and the node to be deleted is
                   54. After deleting 54, last contains the address of the node with info 24. Also, count is
                   decremented by 1.

Case 4:            The node to be deleted is not in the list. In this case, the list requires no adjustment. We
                   simply output an error message, indicating that the item to be deleted is not in the list.


From cases 2, 3, and 4, it follows that the deletion of a node requires us to traverse the list. Because a
linked list is not a random access data structure, we must sequentially search the list. We handle case 1
separately because it does not require us to traverse the list. We sequentially search the list starting at
the second node. If the node to be deleted is in the middle of the list, we need to adjust the link field of
the node just before the node to be deleted. Thus, we need a pointer to the previous node. When we
search the list for the given info, we use two pointers: one to check the info of the current node, and one
to keep track of the node just before the current node. If the node to be deleted is the last node, we must
adjust the pointer last.

The definition of the function deleteNode is as follows:
template <class Type>
void unorderedLinkedList<Type>::deleteNode(const Type& deleteItem)
{
          nodeType<Type> *current;                         //pointer to traverse the list
          nodeType<Type> *trailCurrent;                             //pointer just before current bool
          found;


          if (first == NULL)                                        //Case 1; the list is empty.
                   cout << "Cannot delete from an empty list."<< endl; else
          {


                                                         171

[PDF page 172; printed page 172]
if (first->info == deleteItem)         //Case 2
{
        current = first; first
        = first->link;
        count--;

        if (first == NULL)             //the list has only one node
                last = NULL;


        delete current;
}




                                 172

[PDF page 173; printed page 173]
               else                                           //search the list for the node with the given
                                                              //info
               {
                      found = false;
                      trailCurrent = first;                   //set trailCurrent to point
                                                              //to the first node
                      current = first->link;                  //set current to point to

                                                              //the second node
                      while (current != NULL && !found)
                      {
                              if (current->info != deleteItem)
                              { trailCurrent = current;
                                       current = current-> link;
                              }
                              else
                                       found = true;
                      }                                       //end while
                      if (found)                              //Case 3; if found, delete the node
                      { trailCurrent->link = current->link;
                              count--;


                              if (last == current)            //node to be deleted was the
                                                              //last node
                                       last = trailCurrent;   //update the value of last
                              delete current;                 //delete the node from the list
                      }
                      else
                              cout << "The item to be deleted is not in "<< "the list." << endl;
               }                                              //end else
        }                                                     //end else
}                                                             //end deleteNode


From the definition of the function deleteNode, it can be shown that this function is ofO(n).
                                                   173

[PDF page 174; printed page 174]
Table 3-7 gives the time-complexity of the operations of the class unorderedLinkedList.
                   TABLE 3-7: Time-complexity of the operations of the class unorderedLinkedList




                                                       174

[PDF page 175; printed page 175]
3.1.12 Header File of the Unordered Linked List


For the sake of completeness, we show how to create the header file that defines the class
unorderedListType and the operations on such lists. (We assume that the definition of the class
linkedListType and the definitions of the functions to implement the operations are in the header file
linkedList.h.)


#ifndef H_UnorderedLinkedList
#define H_UnorderedLinkedList
//***********************************************************
// This class specifies the members to implement the
basic // properties of an unordered linked list. This class is
// derived from the class linkedListType.
//***********************************************************
#include "linkedList.h" using
namespace std; template
<class Type>
class unorderedLinkedList: public linkedListType<Type>
{ public:
                 bool search(const Type& searchItem) const;
                 //Function to determine whether searchItem is in the list.
                 //Postcondition: Returns true if searchItem is in the list, //
                 otherwise the value false is returned.


                 void insertFirst(const Type& newItem);
                 //Function to insert newItem at the beginning of the list.
                 //Postcondition: first points to the new list, newItem
                 is // inserted at the beginning of the list, last points to
                 // the last node, and count is incremented by 1.


                 void insertLast(const Type& newItem);
                 //Function to insert newItem at the end of the list.
                 //Postcondition: first points to the new list, newItem
                                                        175

[PDF page 176; printed page 176]
     is // inserted at the end of the list, last points to the //
     last node, and count is incremented by 1.


     void deleteNode(const Type& deleteItem); //Function
     to delete deleteItem from the list.
     //Postcondition: If found, the node containing deleteItem
     // is deleted from the list. first points to the first //
     node, last points to the last node of the updated list, //
     and count is decremented by 1.
};


     //Place the definitions of the functions search, insertNode, //insertFirst,
     insertLast, and deleteNode here.
     .
     .




                                             176
```
