---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "224-232"
printed_pages: "224-232"
section: "Review Questions"
chapter: "TOPIC 3: LINKED LISTS"
keywords:
  - "list"
  - "info"
  - "link-"
  - "linked"
  - "link"
  - "node"
  - "following"
  - "list-"
  - "cout"
  - "statements"
  - "nodes"
  - "c++"
---

# Review Questions

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 224-232 | printed pages 224-232

Related sections: [Item Insertion and Deletion](3-2-item-insertion-and-deletion.md), [Review Questions](78-review-questions.md), [Review Questions](51-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/10-review-questions.md), [Review Questions](../../internet-programming-622-study-guide/sections/17-review-questions.md)

## Extracted Text

```text
[PDF page 224; printed page 224]
        Review Questions


                                                        224

[PDF page 225; printed page 225]
1. Mark the following statements as true or false.
a. In a linked list, the order of the elements is determined by the order in which the nodes were created
  to store the elements.
b. In a linked list, memory allocated for the nodes is sequential.
c. A single linked list can be traversed in either direction.
d. In a linked list, nodes are always inserted either at the beginning or the end because a linked link is not
  a random access data structure.
e. The head pointer of a linked list cannot be used to traverse the list.


Consider the linked list shown in Figure 3-35. Assume that the nodes are in the usual info-link form. Use
this list to answer Exercises 2 through 7. If necessary, declare additional variables. (Assume that list, p, s,
A, and B are pointers of type nodeType.)




                                                      225

[PDF page 226; printed page 226]
                                     FIGURE 3-35 Linked list for Exercises 2–7



2. What is the output of each of the following C++ statements? a.
cout << list->info;
b. cout << A->info;
c. cout << B->link->info;
d. cout << list->link->link->info


3. What is the value of each of the following relational expressions? a.
list->info >= 18
b. list->link == A
c. A->link->info == 16
d. B->link == NULL
e. list->info == 18


4. Mark each of the following statements as valid or invalid. If a statement is invalid, explain why. a.
A = B;
b. list->link = A->link;
c. list->link->info = 45;
d. *list = B;
e. *A = *B;
f. B = A->link->info;
g. A->info = B->info;
h. list = B->link->link;
i. B = B->link->link->link;


5. Write C++ statements to do the following:
a. Make A point to the node containing info 23.
b. Make list point to the node containing 16.
c. Make B point to the last node in the list.

                                                      226

[PDF page 227; printed page 227]
d. Make list point to an empty list.
e. Set the value of the node containing 25 to 35.
f. Create and insert the node with info 10 after the node pointed to by A.
g. Delete the node with info 23. Also, deallocate the memory occupied by this node.


6. What is the output of the following C++ code? p
  = list;
                        while (p != NULL)
                                cout << p->info << " "; p
                        = p->link;
                        cout << endl;


7. If the following C++ code is valid, show the
  output. If it is invalid, explain why. a.    s = A;




                                                        227

[PDF page 228; printed page 228]
       p = B; s-
       >info = B; p
       = p->link;
       cout << s->info << " " << p->info << endl;


b.     p = A;
       p = p->link; s =
       p; p->link =
       NULL; s = s-
       >link;
       cout << p->info << " " << s->info << endl;


8. Show what is produced by the following C++ code. Assume the node is in the usual info-link form with
the info of type int. (list and ptr are pointers of type nodeType.)


a.     list = new nodeType;
       list->info = 10; ptr =
       new nodeType; ptr-
       >info = 13; ptr->link
       = NULL; list->link =
       ptr;
       ptr = new nodeType;
       ptr->info = 18; ptr-
       >link = list->link; list-
       >link = ptr;
       cout << list->info << " " << ptr->info << " "; ptr
       = ptr->link;
       cout << ptr->info << endl;


b.     list = new nodeType;
       list->info = 20; ptr =
       new nodeType; ptr-
       >info = 28; ptr->link

                                                      228

[PDF page 229; printed page 229]
= NULL; list->link =
ptr;
ptr = new nodeType;
ptr->info = 30; ptr-
>link = list;
list = ptr;
ptr = new nodeType;
ptr->info = 42; ptr-
>link = list->link; list-
>link = ptr;
ptr = List;
while (ptr != NULL)
{
         cout << ptr->info << endl;
         ptr = ptr->link;




                                      229

[PDF page 230; printed page 230]
       }

9. Consider the following C++ statements. (The class unorderedLinkedList is as defined in this chapter.)
       unorderedLinkedList<int> list;
       list.insertFirst(15);
       list.insertLast(28);
       list.insertFirst(30);
       list.insertFirst(2);
       list.insertLast(45);
       list.insertFirst(38);
       list.insertLast(25);
       list.deleteNode(30);
       list.insertFirst(18);
       list.deleteNode(28);
       list.deleteNode(12);
       list.print();


What is the output of this program segment?


10. Suppose the input is:
18 30 4 32 45 36 78 19 48 75 -999
What is the output of the following C++ code? (The class unorderedLinkedList is as defined in this chapter.)
       unorderedLinkedList<int> list;
       unorderedLinkedList<int>
       copyList; int num; cin >> num;
       while (num != -999)
       {
                if (num % 5 == 0 || num % 5 == 3)
                list.insertFirst(num); else
                list.insertLast(num);
                cin >> num;
       } list.print();
       cout <<
       endl;

                                                    230

[PDF page 231; printed page 231]
        copyList = list;
        copyList.deleteNode(78);
        copyList.deleteNode(35);
        cout << "Copy List = ";
        copyList.print(); cout << endl;
11. Draw the UML diagram of the class doublyLinkedList as discussed in this chapter.


12. Suppose that intList is a list container and
intList = {3, 23, 23, 43, 56, 11, 11, 23, 25}


Show intList after the following statement executes: intList.unique();




                                                   231

[PDF page 232; printed page 232]
13. Suppose that intList1 and intList2 are list containers and
intList1 = {3, 58, 78, 85, 6, 15, 93, 98, 25} intList2
= {5, 24, 16, 11, 60, 9}


Show intList1 after the following statement executes:
intList1.splice(intList1.begin(), intList2);

14. What is the output of the following program segment?
        list<int> intList;
        ostream_iterator<int> screen(cout, " ");
        list<int>::iterator listIt;
        intList.push_back(5);
        intList.push_front(23);
        intList.push_front(45);
        intList.pop_back();
        intList.push_back(35);
        intList.push_front(0);
        intList.push_back(50);
        intList.push_front(34);
        copy(intList.begin(), intList.end(), screen);
        cout << endl; listIt = intList.begin();
        intList.insert(listIt,76);
        ++listIt; ++listIt;
        intList.insert(listIt,38)
        ; intList.pop_back();
        ++listIt; ++listIt; intList.erase(listIt);
        intList.push_front(2 * intList.back());
        intList.push_back(3 * intList.front());
        copy(intList.begin(), intList.end(),
        screen); cout << endl;




                                                         232
```
