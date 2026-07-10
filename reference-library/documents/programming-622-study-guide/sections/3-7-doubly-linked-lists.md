---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "195-214"
printed_pages: "195-214"
section: "Doubly Linked Lists"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "node"
  - "linked"
  - "doubly"
  - "type"
  - "last"
  - "const"
  - "first"
  - "empty"
  - "null"
  - "every"
  - "next"
---

# Doubly Linked Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 195-214 | printed pages 195-214

Related sections: [Unordered Linked Lists](3-5-unordered-linked-lists.md), [Linked Lists with Header and Trailer Nodes](3-9-linked-lists-with-header-and-trailer-nodes.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md), [Linked Lists](3-1-linked-lists.md), [Mergesort: Linked List-Based Lists](8-4-mergesort-linked-list-based-lists.md), [Removing Recursion: Nonrecursive Algorithm to Print a Linked List Backward](5-6-removing-recursion-nonrecursive-algorithm-to-print-a-linked-list-backward.md)

## Extracted Text

```text
[PDF page 195; printed page 195]
3.7 Doubly Linked Lists


A doubly linked list is a linked list in which every node has a next pointer and a back pointer. In other
 words, every node contains the address of the next node (except the last node), and every node contains
 the address of the previous node (except the first node).(See Figure 3-27.)



                                                           195

[PDF page 196; printed page 196]
                                           FIGURE 3-27 Doubly linked list



A doubly linked list can be traversed in either direction. That is, we can traverse the list starting at the first
node or, if a pointer to the last node is given, we can traverse the list starting at the last node. As before,
the typical operations on a doubly linked list are as follows: Initialize the list, destroy the list, determine
whether the list is empty, search the list for a given item, insert an item, delete an item, and so on. The
following class defines a doubly linked list as an ADT and specifies the basic operations on a doubly linked
list:




                                                       196

[PDF page 197; printed page 197]
//**********************************************************
* // This class specifies the members to implement the basic // properties
of an ordered doubly linked list.
//***********************************************************
//Definition of the node template
<class Type>
struct nodeType
{
       Type info; nodeType<Type>
       *next;
       nodeType<Type> *back;
};


template <class Type> class
doublyLinkedList
{
       public:
                 const doublyLinkedList<Type>& operator=(const doublyLinkedList<Type> &); //Overload
                 the assignment operator.


                 void initializeList();
                 //Function to initialize the list to an empty state.
                 //Postcondition: first = NULL; last = NULL; count = 0;


                 bool isEmptyList() const;
                 //Function to determine whether the list is empty.
                 //Postcondition: Returns true if the list is empty, //
                 otherwise returns false.


                 void destroy();
                 //Function to delete all the nodes from the list.
                 //Postcondition: first = NULL; last = NULL; count = 0;


                                                       197

[PDF page 198; printed page 198]
void print() const;     o contained in each node //in reverse order.
//Function to output
the info contained in   int length() const;
each node.              //Function to return the number of nodes in the list.
                        //Postcondition: The value of count is returned.
void reversePrint()
const;                  Type front() const;
/                       //Function to return the first element of the list.
/
F
u
n
c
t
i
o
n
t
o
o
u
t
p
u
t
t
h
e
i
n
f
                                                             198

[PDF page 199; printed page 199]
//Precondition: The list must exist and must not be empty.
//Postcondition: If the list is empty, the program terminates; //
otherwise, the first element of the list is returned.
Type back() const;
//Function to return the last element of the list.
//Precondition: The list must exist and must not be empty.
//Postcondition: If the list is empty, the program terminates; //
otherwise, the last element of the list is returned.


bool search(const Type& searchItem) const;
//Function to determine whether searchItem is in the list.
//Postcondition: Returns true if searchItem is found in the //
list, otherwise returns false.


void insert(const Type& insertItem);
//Function to insert insertItem in the list.
//Precondition: If the list is nonempty, it must be in order.
//Postcondition: insertItem is inserted at the proper place
// in the list, first points to the first node, last points
// to the last node of the new list, and count is //
incremented by 1.


void deleteNode(const Type& deleteItem); //Function
to delete deleteItem from the list.
//Postcondition: If found, the node containing deleteItem is
// deleted from the list; first points to the first node of
// the new list, last points to the last node of the new
// list, and count is decremented by 1; otherwise an //
appropriate message is printed.


doublyLinkedList();
//default constructor
//Initializes the list to an empty state.
                                        199

[PDF page 200; printed page 200]
       //Postcondition: first = NULL; last = NULL; count = 0;


       doublyLinkedList(const doublyLinkedList<Type>& otherList);
       //copy constructor


       ~doublyLinkedList();
       //destructor
       //Postcondition: The list object is destroyed.


protected:
       int count;
       nodeType<Type> *first;          //pointer to the first node
nodeType<Type> *last; //pointer to the last node private:
       void copyList(const doublyLinkedList<Type>& otherList); //Function
       to make a copy of otherList.




                                            200

[PDF page 201; printed page 201]
                 //Postcondition: A copy of otherList is created and assigned
                 // to this list.
};
We leave the UML class diagram of the class doublyLinkedList as an exercise for you.


The functions to implement the operations of a doubly linked list are similar to the ones discussed earlier.
Here, because every node has two pointers, back and next, some of the operations require the adjustment
of two pointers in each node. For the insert and delete operations, because we can traverse the list in
either direction, we use only one pointer to traverse the list. Let us call this pointer current. We can set
the value of trailCurrent by using both the current pointer and the back pointer of the node pointed to by
current. We give the definition of each function here, with four exceptions. Definitions of the functions
copyList, the copy constructor, overloading the assignment operator, and the destructor are left as
exercises for you. Furthermore, the function copyList is used only to implement the copy constructor and
overload the assignment operator.


3.5.1 Default Constructor


The default constructor initializes the doubly linked list to an empty state. It sets first and last to NULL and
count to 0.


template <class Type>
doublyLinkedList<Type>::doublyLinkedList()
{ first= NULL; last =
        NULL;
        count = 0;
}


3.5.2 isEmptyList


This operation returns true if the list is empty; otherwise, it returns false. The list is empty if the pointer
first is NULL.


template <class Type>
                                                      201

[PDF page 202; printed page 202]
bool doublyLinkedList<Type>::isEmptyList() const
{ return (first == NULL);
}


3.5.3 Destroy the List


This operation deletes all the nodes in the list, leaving the list in an empty state.We traverse the list
starting at the first node and then delete each node. Furthermore, count is set to 0.


template <class Type>
void doublyLinkedList<Type>::destroy()
{
        nodeType<Type> *temp; //pointer to delete the node while
        (first != NULL)




                                                   202

[PDF page 203; printed page 203]
        { temp = first; first =
                  first->next;
                  delete temp;
        }
        last = NULL;
        count = 0;
}


3.5.4 Initialize the List


This operation reinitializes the doubly linked list to an empty state. This task can be done by using the
operation destroy. The definition of the function initializeList is as follows:


template <class Type>
void doublyLinkedList<Type>::initializeList()
{ destroy();
}


3.5.5 Length of the List


The length of a linked list (that is, how many nodes are in the list) is stored in the variable count. Therefore,
this function returns the value of this variable.


template <class Type>
int doublyLinkedList<Type>::length() const
{ return count;
}


3.5.6 Print the List


The function print outputs the info contained in each node. We traverse the list starting from the first
node.

                                                      203

[PDF page 204; printed page 204]
template <class Type>
void doublyLinkedList<Type>::print() const
{

       nodeType<Type> *current;                 //pointer to traverse the list

       current = first;                         //set current to point to the first node
       while (current != NULL)
       {
               cout << current->info << " ";    //output info
               current = current->next;
       }                                        //end while

}                                               //end print




                                               204

[PDF page 205; printed page 205]
3.5.7 Reverse Print the List


This function outputs the info contained in each node in reverse order. We traverse the list in reverse
order starting from the last node. Its definition is as follows:


template <class Type>
void doublyLinkedList<Type>::reversePrint() const
{

        nodeType<Type> *current;                               //pointer to traverse the list

        current = last;                                        //set current to point to the last node
        while (current != NULL)
        { cout << current->info << " ";
                current = current->back;

        }                                                      //end while

}                                                              //end reversePrint



3.5.8 Search the List


The function search returns true if searchItem is found in the list; otherwise, it returns false.The search
algorithm is exactly the same as the search algorithm for an ordered linked list.


template <class Type>
bool doublyLinkedList<Type>::search(const Type& searchItem) const
{
       bool found = false;
       nodeType<Type> *current;        //pointer to traverse the list current = first;
       while (current != NULL && !found) if
               (current->info >= searchItem)
               found = true; else current =
               current->next;
                                                     205

[PDF page 206; printed page 206]
        if (found) found = (current->info == searchItem); //test for equality
        return found;
}                                                             //end search


3.5.9 First and Last Elements


The function front returns the first element of the list and the function back returns the last element of
the list. If the list is empty, both functions terminate the program. Their definitions are as follows:


template <class Type>
Type doublyLinkedList<Type>::front() const
{ assert(first != NULL);




                                                     206

[PDF page 207; printed page 207]
          return first->info;
}
template <class Type>
Type doublyLinkedList<Type>::back() const
{ assert(last != NULL);
          return last->info;
}


3.5.10 Insert a Node


Because we are inserting an item in a doubly linked list, the insertion of a node in the list requires the
adjustment of two pointers in certain nodes. As before, we find the place where the new item is supposed
to be inserted, create the node, store the new item, and adjust the link fields of the new node and other
particular nodes in the list.


There are four cases:

Case 1:           Insertion in an empty list
Case 2:           Insertion at the beginning of a nonempty list
Case 3:           Insertion at the end of a nonempty list
Case 4:           Insertion somewhere in a nonempty list


Both cases 1 and 2 require us to change the value of the pointer first. Cases 3 and 4 are similar. After
inserting an item, count is incremented by 1. Next, we show case 4.


Consider the doubly linked list shown in Figure 3-28.




                                   FIGURE 3-28 Doubly linked list before inserting 20



Suppose that 20 is to be inserted in the list. After inserting 20, the resulting list is as shown in Figure 3-
29.
                                                         207

[PDF page 208; printed page 208]
                                FIGURE 3-29 Doubly linked list after inserting 20



From Figure 3-29, it follows that the next pointer of node 15, the back pointer of node 24, and both the
next and back pointers of node 20 need to be adjusted.




                                                     208

[PDF page 209; printed page 209]
The definition of the function insert is as follows:


template <class Type>
void doublyLinkedList<Type>::insert(const Type& insertItem)
{

        nodeType<Type> *current;                        //pointer to traverse the list
        nodeType<Type> *trailCurrent;                   //pointer just before current
        nodeType<Type> *newNode;                        //pointer to create a node
        bool found;

        newNode = new nodeType<Type>;                   //create the node
        newNode->info = insertItem;                     //store the new item in the node
        newNode->next = NULL;
        newNode->back = NULL;

        if (first == NULL)                              //if list is empty, newNode is the only node
        {
                first = newNode;
                last = newNode;
                count++;
        }
        else
        { found = false;
                current =
                first;


                while (current != NULL && !found) //search the list
                         if (current->info >= insertItem) found = true;
                         else
                         { trailCurrent = current;
                                 current = current->next;
                         }

                if (current == first)                   //insert newNode before first


                                                       209

[PDF page 210; printed page 210]
{      first->back = newNode;
       newNode->next = first;
       first = newNode; count++;



}
else
{                                   //insert newNode between trailCurrent and current
       if (current != NULL)
       {
              trailCurrent->next = newNode;
              newNode->back = trailCurrent;
              newNode->next = current;
              current->back = newNode;
       }




                                   210

[PDF page 211; printed page 211]
                       else
                       {
                               trailCurrent->next = newNode;
                               newNode->back = trailCurrent;
                               last = newNode;

                       }


                       count++;
                }                                           //end else
          }                                                 //end else
}                                                          //end insert


3.5.11 Delete a Node


This operation deletes a given item (if found) from the doubly linked list. As before, we first search the list
to see whether the item to be deleted is in the list. The search algorithm is the same as before. Similar to
the insert operation, this operation (if the item to be deleted is in the list) requires the adjustment of two
pointers in certain nodes. The delete operation has several cases:

Case 1:        The list is empty.
Case 2:        The item to be deleted is in the first node of the list, which would require us to change the
               value of the pointer first.
Case 3:        The item to be deleted is somewhere in the list.
Case 4:        The item to be deleted is not in the list.


After deleting a node, count is decremented by 1. Let us demonstrate case 3. Consider the list shown in
Figure 3-30.




                                    FIGURE 3-30 Doubly linked list before deleting 17



Suppose that the item to be deleted is 17. First, we search the list with two pointers and find the node

                                                          211

[PDF page 212; printed page 212]
with info 17, and then adjust the link field of the affected nodes. (See Figure 3-31.)




             FIGURE 3-31 List after adjusting the links of the nodes before and after the node with info 17



Next, we delete the node pointed to by current. (See Figure 3-32.)




                                                         212

[PDF page 213; printed page 213]
                                    FIGURE 3-32 List after deleting the node with info 17

The definition of the function deleteNode is as follows:


template <class Type>
void doublyLinkedList<Type>::deleteNode(const Type& deleteItem)
{
       nodeType<Type> *current;                              //pointer to traverse the list
       nodeType<Type> *trailCurrent;                                  //pointer just before current bool
       found;


       if (first == NULL) cout << "Cannot delete from an empty list."
                << endl;
       else if (first->info == deleteItem)                            //node to be deleted is the first node
       { current = first; first =
                first->next;


                if (first != NULL) first-
                >back = NULL; else last =
                NULL;


                count--;
                delete current;
       }
       else
       {
                found = false;
                current = first;


                while (current != NULL && !found) //search the list if

                                                            213

[PDF page 214; printed page 214]
(          t->info >= deleteItem) found = true; else current
c          = current->next;
u
r   if (current == NULL) cout << "The item to be deleted is not in "<< "the
r          list." << endl;
e   else if (current->info == deleteItem)         //check for equality
n   {
           trailCurrent = current->back; trailCurrent-
           >next = current->next; if (current->next !=
           NULL) current->next->back = trailCurrent;
           if (current == last)
                   last = trailCurrent;


           count--;




                                            214
```
