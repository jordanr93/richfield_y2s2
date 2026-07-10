---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "449-449"
printed_pages: "449-449"
section: "Ordered Lists"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "list"
  - "ordered"
  - "lists"
  - "operations"
  - "can"
  - "orderedarraylisttype"
  - "elemtype"
  - "elements"
  - "performed"
  - "determining"
  - "whether"
  - "define"
---

# Ordered Lists

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 449-449 | printed pages 449-449

Related sections: [Ordered Linked Lists](3-6-ordered-linked-lists.md), [Linked Lists](3-1-linked-lists.md), [Heapsort: Array-Based Lists](8-5-heapsort-array-based-lists.md), [Insertion Sort: Array-Based Lists](8-2-insertion-sort-array-based-lists.md), [Insertion into an Ordered List](7-5-insertion-into-an-ordered-list.md), [Linked List as an ADT](3-3-linked-list-as-an-adt.md)

## Extracted Text

```text
[PDF page 449; printed page 449]
7.3 Ordered Lists


A list is ordered if its elements are ordered according to some criteria. The elements of a list are usually in
 ascending order. Several operations that can be performed on an ordered list are similar to the operations
 performed on an arbitrary list. For example, determining whether the list is empty or full, determining the
 length of the list, printing the list, and clearing the list for an ordered list are the same operations as those
 on an unordered list. Therefore, to define an ordered list as an abstract data type (ADT), by using the
 mechanism of inheritance, we can derive the class to implement the ordered lists from the class
 arrayListType discussed in the previous section. Depending on whether a specific application of a list can
 be stored in either an array or a linked list, we define two classes.

The following class, orderedArrayListType, defines an ordered list stored in an array as an ADT:
template <class elemType>
class orderedArrayListType: public arrayListType<elemType>
 { public: orderedArrayListType(int size = 100);
                 //constructor
         ...
                 //We will add the necessary members as needed. private:
                 //We will add the necessary members as needed.
}
Chapter 3 defined the following class to implement ordered linked lists:
template <class elemType>
                                                       449
```
