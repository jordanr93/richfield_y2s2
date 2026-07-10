---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "177-194"
printed_pages: "177-194"
section: "Ordered Linked Lists"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "ordered"
  - "linked"
  - "newitem"
  - "type"
  - "insert"
  - "const"
  - "postcondition"
  - "points"
  - "void"
  - "last"
  - "lists"
---

# Ordered Linked Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 177-194 | printed pages 177-194

Related sections: [Unordered Linked Lists](3-5-unordered-linked-lists.md), [Doubly Linked Lists](3-7-doubly-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Linked Lists](3-1-linked-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Ordered Lists](7-3-ordered-lists.md)

## Extracted Text

```text
[PDF page 177; printed page 177]
3.6 Ordered Linked Lists
The preceding section described the operations on an unordered linked list. This section deals with
 ordered linked lists. As noted earlier, we derive the class orderedLinkedList from the class linkedListType
 and provide the definitions of the abstract functions insertFirst, insertLast, search, and deleteNode to take
 advantage of the fact that the elements of an ordered linked list are arranged using some ordering criteria.
 For simplicity, we assume that elements of an ordered linked list are arranged in ascending order.


Because the elements of an ordered linked list are in order, we include the function insert to insert an
 element in an ordered list at the proper place.


The following class defines an ordered linked list as an ADT:
//***********************************************************
 // This class specifies the members to implement the
 basic // properties of an ordered linked list. This class is //
 derived from the class linkedListType.
//*********************************************************** template
 <class Type>
class orderedLinkedList: public linkedListType<Type>
{ public:
                 bool search(const Type& searchItem) const;
                //Function to determine whether searchItem is in the list.
                 //Postcondition: Returns true if searchItem is in the list, //
                 otherwise the value false is returned.


                 void insert(const Type& newItem); //Function
                 to insert newItem in the list.
                //Postcondition: first points to the new list, newItem
                 // is inserted at the proper place in the list, and //
                 count is incremented by 1.


                                                        177

[PDF page 178; printed page 178]
void insertFirst(const Type& newItem);
//Function to insert newItem at the beginning of the list.
//Postcondition: first points to the new list, newItem is
// inserted at the beginning of the list, last points to the //
last node in the list, and count is incremented by 1.


void insertLast(const Type& newItem);
//Function to insert newItem at the end of the list.
//Postcondition: first points to the new list, newItem is //
inserted at the end of the list, last points to the
// last node in the list, and count is incremented by 1.


void deleteNode(const Type& deleteItem); //Function
to delete deleteItem from the list.
//Postcondition: If found, the node containing deleteItem is




                                      178

[PDF page 179; printed page 179]
                   // deleted from the list; first points to the first node
                   // of the new list, and count is decremented by 1. If //
                   deleteItem is not in the list, an appropriate message
                   // is printed.
};


Figure 3-23 shows a UML class diagram of the class orderedLinkedList and the inheritance hierarchy.




                            FIGURE 3-23 UML class diagram of the class orderedLinkedList and the
                                                   inheritance hierarchy



Next we give the definitions of the member functions of the class orderedLinkedList.


3.1.13 Search the List


First, we discuss the search operation. The algorithm to implement the search operation is similar to the
search algorithm for general lists discussed earlier. Here, because the list is sorted, we can improve the
search algorithm somewhat. As before, we start the search at the first node in the list. We stop the search
as soon as we find a node in the list with info greater than or equal to the search item, or we have searched
the entire list.


The following steps describe this algorithm:
1.      Compare the search item with the current node in the list. If the info of the current node is greater
than or equal to the search item, stop the search; otherwise, make the next node the current node.
2.      Repeat Step 1 until either an item in the list that is greater than or equal to the search item is
found, or no more data is left in the list to compare with the search item.


Note that the loop does not explicitly check whether the search item is equal to an item in the list. Thus,
after the loop executes, we must check whether the search item is equal to the item in the list.
                                                           179

[PDF page 180; printed page 180]
template <class Type>
bool orderedLinkedList<Type>::search(const Type& searchItem) const
{
       bool found = false;
       nodeType<Type> *current;                             //pointer to traverse the list
       current = first;                                     //start the search at the first
       node while (current != NULL && !found) if (current->info >= searchItem) found = true;
       else current = current->link;
       if (found) found = (current->info == searchItem); //test for equality
       return found;
}                                                           //end search




                                                   180

[PDF page 181; printed page 181]
As in the case of the search function of the class unorderedLinkedList, the search function of the class
orderedLinkedList is also of O(n).


3.1.14 Insert a Node


To insert an item in an ordered linked list, we first find the place where the new item is supposed to go,
then we insert the item in the list. To find the place for the new item in the list, as before, we search the
list. Here we use two pointers, current and trailCurrent, to search the list. The pointer current points to
the node whose info is being compared with the itemto be inserted, and trailCurrent points to the node
just before current. Because the list is in order, the search algorithm is the same as before. The following
cases arise:


Case 1:         The list is initially empty. The node containing the new item is the only node and, thus, the
                first node in the list.
Case 2:         The new item is smaller than the smallest item in the list. The new item goes at the
                beginning of the list. In this case, we need to adjust the list’s head pointer— that is, first.
                Also, count is incremented by 1.
Case 3:         The item is to be inserted somewhere in the list.
Case 3a:        The new item is larger than all the items in the list. In this case, the new item is inserted at
                the end of the list. Thus, the value of current is NULL and the new item is inserted after
                trailCurrent. Also, count is incremented by 1.
Case 3b:        The new item is to be inserted somewhere in the middle of the list. In this case, the new
                item is inserted between trailCurrent and current. Also, count is incremented by 1.
The following statements can accomplish both cases 3a and 3b. Assume newNode points to the new node.
                        trailCurrent->link = newNode; newNode->link
                        = current;


Let us next illustrate Case 3.

Case 3:         The list is not empty, and the item to be inserted is larger than the first item in the list. As
                indicated previously, this case has two scenarios.
Case 3a:        The item to be inserted is larger than the largest item in the list; that is, it goes at the end
                of the list. Consider the list shown in Figure 3-24.

                                                      181

[PDF page 182; printed page 182]
                                        FIGURE 3-24 list before inserting 65



Suppose that we want to insert 65 in the list. After inserting 65, the resulting list is as shown in Figure 3-
25.




                                                       182

[PDF page 183; printed page 183]
                                          FIGURE 3-25 list after inserting 65



Case 3b: The item to be inserted goes somewhere in the middle of the list. Again consider the list shown
               in Figure 3-24. Suppose that we want to insert 25 in this list. Clearly, 25 goes between 17
               and 27, which would require the link of the node with info 17 to be changed. After inserting
               25, the resulting list is as shown in Figure 3-26.




                              FIGURE 3-26 list after inserting 25 in the list in Figure 5-24



From case 3, it follows that we must first traverse the list to find the place where the new item is to be
inserted. It also follows that we should traverse the list with two pointers— say, current and trailCurrent.
The pointer current is used to traverse the list and compare the info of the node in the list with the item
to be inserted. The pointer trailCurrent points to the node just before current. For example, in case 3b,
when the search stops, trailCurrent points to node 17 and current points to node 27. The item is inserted
after trailCurrent. In case 3a, after searching the list to find the place for 65, trailCurrent points to node
54 and current is NULL.


The definition of the function insert is as follows:
template <class Type>
void orderedLinkedList<Type>::insert(const Type& newItem)
{
        nodeType<Type> *current;                  //pointer to traverse the list nodeType<Type>
        *trailCurrent;         //pointer just before current nodeType<Type> *newNode;
                //pointer to create a node bool found;


        newNode = new nodeType<Type>;                       //create the node


                                                          183

[PDF page 184; printed page 184]
newNode->info = newItem;    //store newItem in the node
newNode->link = NULL;       //set the link field of the node
                            //to NULL




                           184

[PDF page 185; printed page 185]
if (first == NULL)                               //Case 1
{
        first = newNode;
        last = newNode;
        count++;
}
else
{ current = first;
        found = false;



        while (current != NULL && !found) //search the list
                if (current->info >= newItem) found = true;
                else
                 { trailCurrent = current;
                         current = current->link;
                 }


        if (current == first)                    //Case 2
        {
                 newNode->link = first; first
                 = newNode;
                 count++;
        }
        else                                     //Case 3
        {
                 trailCurrent->link = newNode;
                 newNode->link = current;


                 if (current == NULL) last
                         = newNode;
                 count++;
        }

                                                185

[PDF page 186; printed page 186]
       }                                              //end else
}                                                     //end insert


The function insert uses a while loop to find the place where the new item is to be inserted and this loop
is similar to the while loop used in the search function. It can be shown that the function insert is of O(n).


3.1.15 Insert First and Insert Last


The function insertFirst inserts the new item at the beginning of the list. However, because the resulting
list must be sorted, the new item must be inserted at the proper place. Similarly, the function insertLast
must insert the new item at the proper place. We, therefore, use the function insert to insert the new
item at its proper place. The definitions of these functions are as follows:


template <class Type>
void orderedLinkedList<Type>::insertFirst(const Type& newItem)




                                                     186

[PDF page 187; printed page 187]
{
          insert(newItem);
}                //end insertFirst


template <class Type>
void orderedLinkedList<Type>::insertLast(const Type& newItem)
{
          insert(newItem);
}                //end insertLast


Note that in reality, the functions insertFirst and insertLast do not apply to an ordered linked list because
the new item must be inserted at the proper place in the list. However, you must provide its definition as
these functions are declared as abstract in the parent class.


The functions insertFirst and insertLast use the function insert, which is of O(n). It follows that these
functions are of O(n).


3.1.16 Delete a Node


To delete a given item from an ordered linked list, first we search the list to see whether the item to be
deleted is in the list. The function to implement this operation is the same as the delete operation on
general linked lists. Here, because the list is sorted, we can somewhat improve the algorithm for ordered
linked lists.


As in the case of insertNode, we search the list with two pointers, current and trailCurrent. Similar to the
operation insertNode, several cases arise:


Case 1:          The list is initially empty.We have an error. We cannot delete from an empty list.
Case 2:          The item to be deleted is contained in the first node of the list. We must adjust the head
                 pointer of the list—that is, first.
Case 3:          The item to be deleted is somewhere in the list. In this case, current points to the node
                 containing the item to be deleted, and trailCurrent points to the node just before the node


                                                       187

[PDF page 188; printed page 188]
                   pointed to by current.


Case 4:            The list is not empty, but the item to be deleted is not in the list.
After deleting a node, count is decremented by 1. The definition of the function deleteNode is as follows:
template <class Type>
void orderedLinkedList<Type>::deleteNode(const Type& deleteItem)
{
          nodeType<Type> *current;                        //pointer to traverse the list
          nodeType<Type> *trailCurrent;                           //pointer just before current bool
          found;


          if (first == NULL)                                       //Case 1
                   cout << "Cannot delete from an empty list." << endl;
          else




                                                         188

[PDF page 189; printed page 189]
{
    current = first;
    found = false;


    while (current != NULL && !found)            //search the list if
            (current->info >= deleteItem) found = true;
            else
            {
                       trailCurrent = current;
                       current = current->link;
            }


    if (current == NULL)                                 //Case 4
            cout << "The item to be deleted is not in the list."<< endl;
    else if (current->info == deleteItem) //the item to be
                                                         //deleted is in the list
            {
                       if (first == current)             //Case 2
                       {
                               first = first->link;


                               if (first == NULL) last
                                        = NULL;


                               delete current;
                       }
                       else                              //Case 3
                       {
                               trailCurrent->link = current->link;


                               if (current == last) last =
                                        trailCurrent;
                               delete current;
                                               189

[PDF page 190; printed page 190]
                               }
                               count--;
                       }
                       else                                       //Case 4
                               cout << "The item to be deleted is not in the "<< "list." << endl;
       }
}                                                                 //end deleteNode


From the definition of the function deleteNode, it can be shown that this function is of O(n).
Table 3-8 gives the time-complexity of the operations of the class orderedLinkedList.
                     TABLE 3-8: Time-complexity of the operations of the class orderedLinkedList




                                                        190

[PDF page 191; printed page 191]
3.1.17 Header File of the Ordered Linked List


For the sake of completeness, we show how to create the header file that defines the class
orderedListType and the operations on such lists. (We assume that the definition of the class
linkedListType and the definitions of the functions to implement the operations are in the header file
linkedList.h.)


#ifndef H_orderedListType
#define H_orderedListType
//***********************************************************
// This class specifies the members to implement the
basic // properties of an ordered linked list. This class is //
derived from the class linkedListType.
//***********************************************************
#include "linkedList.h" using
namespace std; template
<class Type>
class orderedLinkedList: public linkedListType<Type>
{ public:
                 bool search(const Type& searchItem) const;
                 //Function to determine whether searchItem is in the list.
                 //Postcondition: Returns true if searchItem is in the list, //
                 otherwise the value false is returned.



                                                       191

[PDF page 192; printed page 192]
void insert(const Type& newItem); //Function
to insert newItem in the list.
//Postcondition: first points to the new list, newItem
is // inserted at the proper place in the list, and count
// is incremented by 1.


void insertFirst(const Type& newItem);
//Function to insert newItem at the beginning of the list.
//Postcondition: first points to the new list, newItem is
// inserted at the beginning of the list, last points to the //
last node in the list, and count is incremented by 1.




                                      192

[PDF page 193; printed page 193]
                      void insertLast(const Type& newItem);
                      //Function to insert newItem at the end of the list.
                      //Postcondition: first points to the new list, newItem
                      is // inserted at the end of the list, last points to the //
                      last node in the list, and count is incremented by 1.


                      void deleteNode(const Type& deleteItem); //Function
                      to delete deleteItem from the list.
                      //Postcondition: If found, the node containing deleteItem is
                      // deleted from the list; first points to the first node of
                      // the new list, and count is decremented by 1. If //
                      deleteItem is not in the list, an appropriate message
                      // is printed.
        };


                      //Place the definitions of the functions search, insert, //insertfirst,
                      insertLast, and deleteNode here.
                      .
                      .
                      .
        #endif


The following program tests various operations on an ordered linked list:

//**********************************************************

// This program tests the various operations on an ordered

// linked list.

//**********************************************************

        #include <iostream>                                                                     //Line 1

        #include "orderedLinkedList.h"                                                          //Line 2

        using namespace std;                                                                    //Line 3

                                                             193

[PDF page 194; printed page 194]
    int main()                                                               //Line 4

{

           orderedLinkedList<int> list1, list2;                              //Line 5

           int num;                                                          //Line 6

           cout << "Line 7: Enter numbers ending "<< "with -999." << endl;   //Line 7
           cin >> num;                                                       //Line 8
           while (num != -999)                                               //Line 9

           {                                                                 //Line 10

                   list1.insert(num);                                        //Line 11




                                                     194
```
