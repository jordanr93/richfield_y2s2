---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "457-460"
printed_pages: "457-460"
section: "Insertion into an Ordered List"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "list"
  - "item"
  - "insert"
  - "ordered"
  - "mid"
  - "first"
  - "inserted"
  - "use"
  - "else"
  - "array"
  - "find"
  - "where"
---

# Insertion into an Ordered List

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 457-460 | printed pages 457-460

Related sections: [Linked List as an ADT](3-3-linked-list-as-an-adt.md), [Ordered Linked Lists](3-6-ordered-linked-lists.md), [STL Sequence Container: list](3-8-stl-sequence-container-list.md), [Create an Attractive Layout and Design](../../information-systems-622-study-guide/sections/2-4-5-create-an-attractive-layout-and-design.md), [Create an Interface That Is Easy to Learn and Use](../../information-systems-622-study-guide/sections/2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md), [Drawing an ERD](../../information-systems-622-study-guide/sections/3-5-1-drawing-an-erd.md)

## Extracted Text

```text
[PDF page 457; printed page 457]
7.5 Insertion into an Ordered List


 Suppose that you have an ordered list and want to insert an item in the list. After insertion, the resulting
 list must also be ordered. Chapter 3 described how to insert an item into an ordered linked list. This section
 describes how to insert an item into an ordered list stored in an array.


 To store the item in the ordered list, first we must find the place in the list where the item is to be inserted.
 Then we slide the list elements one array position down to make room for the item to be inserted, and
 then we insert the item. Because the list is sorted and stored in an array, we can use an algorithm similar
 to the binary search algorithm to find the place in the list where the item is to be inserted. We can then
 use the function insertAt (of the class arrayListType) to insert the item. (Note that we cannot use the
 binary search algorithm as designed previously because it returns –1 if the item is not in the list. Of course,
 we can write another function using the binary search technique to find the position in the array where
 the item is to be inserted.) Therefore, the algorithm to insert the item is: (The special cases, such as
 inserting an item in an empty list or in a full list, are handled separately.)


     1. Use an algorithm similar to the binary search algorithm to find the place where the item is to be

                                                        457

[PDF page 458; printed page 458]
         inserted.
    2. if the item is already in this list
                  output an appropriate message else use the function
         insertAt to insert the item in the list.

The following function, insertOrd, implements this algorithm.
template <class elemType>
void orderedArrayListType<elemType>::insertOrd(const elemType& item)
{ int first = 0; int last =
         length - 1; int mid;
         bool found = false;
         if (length == 0) //the list is empty
         {
                  list[0] = item;




                                                    458

[PDF page 459; printed page 459]
                length++;
        }
        else if (length == maxSize) cerr << "Cannot insert into
        a full list." << endl; else
        {
                while (first <= last && !found)
                { mid = (first + last) / 2; if
                        (list[mid] == item)
                        found = true; else if
                        (list[mid] > item) last =
                        mid - 1; else
                                  first = mid + 1;
                }//end while if (found) cerr << "The insert item is
                already in the list. "
                                  << "Duplicates are not allowed." << endl;
                else
                {
                         if (list[mid] < item)
                         mid++;
                         insertAt(mid, item);
                }
        }


}//end insertOrd


Similarly, you can write a function to remove an element from an ordered list.


If we add the binary search algorithm and the insertOrd algorithm to the class orderedArrayListType, the
definition of this class is as follows:


template <class elemType>
class orderedArrayListType: public arrayListType<elemType>
{ public:

                                                      459

[PDF page 460; printed page 460]
               void insertOrd(const elemType&);
               int binarySearch(const elemType& item) const; orderedArrayListType(int
               size = 100);
};
Because the class orderedArrayListType is derived from the class arrayListType, and the list elements of
an orderedArrayListType are ordered, we must override the functions insertAt and insertEnd of the class
arrayListType in the class orderedArrayListType. We do this so that if these functions are used by an object
of type orderedArrayListType, then after using these functions, the list elements of the object are still in
order. We leave the details of these functions as an exercise for you. Furthermore, you can also override
the function seqSearch so that while performing a sequential search on an ordered list, it takes into
account that the elements are in order. We leave the details of this function also as an exercise.


Table 7-4 summarizes the algorithm analysis of the search algorithms discussed earlier.


                              TABLE 7-4 Number of comparisons for a list of length n




                                                      460
```
