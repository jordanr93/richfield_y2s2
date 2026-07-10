---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "492-501"
printed_pages: "492-501"
section: "Sorting Algorithms"
chapter: "TOPIC 8: SORTING ALGORITHMS"
keywords:
  - "sorting"
  - "lists"
  - "sort"
  - "array-based"
  - "list"
  - "selection"
  - "search"
  - "order"
  - "arraylisttype"
  - "learn"
  - "discussed"
  - "does"
---

# Sorting Algorithms

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 492-501 | printed pages 492-501

Related sections: [Search Algorithms](7-1-search-algorithms.md), [TOPIC 8: SORTING ALGORITHMS](8-topic-8-sorting-algorithms.md), [Chapter 5: Unsupervised Learning – Clustering Algorithms](../../machine-learning-600-study-guide/sections/5-chapter-5-unsupervised-learning-clustering-algorithms.md), [Chapter 3: Supervised Learning – Regression Algorithms](../../machine-learning-600-study-guide/sections/3-chapter-3-supervised-learning-regression-algorithms.md), [Chapter Four: Supervised learning: Classification Algorithms](../../machine-learning-600-study-guide/sections/4-chapter-four-supervised-learning-classification-algorithms.md), [Binary Search](7-4-binary-search.md)

## Extracted Text

```text
[PDF page 492; printed page 492]
8      TOPIC 8: SORTING ALGORITHMS
                       LEARNING OUTCOMES:
                       After studying this topic you should be able to:

                         •    Learn the various sorting algorithms
                         •    Explore how to implement selection sort, insertion sort, Shellsort,
                         quicksort, mergesort, and heapsort
                         •    Discover how the sorting algorithms discussed in this chapter
                         perform
                         •    Learn how priority queues are implemented


Chapter 7 discussed the search algorithms on lists. A sequential search does not assume that the data is
 in any particular order; however, as noted, this search does not work efficiently for large lists. By contrast,
 a binary search is very fast for array-based lists, but it requires the data to be in order. Because a binary
 search requires the data to be in order and its performance is good for array-based lists, this chapter
 focuses on sorting algorithms.


8.1 Sorting Algorithms


There are several sorting algorithms in the literature. In this chapter, we discuss some of the most
 commonly used sorting algorithms. To compare the performance of these algorithms, we also provide the
 analysis of these algorithms. These sorting algorithms can be applied to either array-based lists or linked
 lists.We will specify whether the algorithm being developed is for array-based lists or linked lists.


The functions implementing these sorting algorithms are included as public members of the related class.
 (For example, for an array-based list, these are the members of the class arrayListType.) By doing so, the
 algorithms have direct access to the list elements.


Suppose that the sorting algorithm selection sort (described in the next section) is to be applied to array-
 based lists. The following statements show how to include selection sort as a member of the class
 arrayListType:


template <class elemType> class

                                                       492

[PDF page 493; printed page 493]
arrayListType
{ public:
                void selectionSort();
         ...
};


8.1      Selection Sort: Array-Based Lists


In selection sort, a list is sorted by selecting elements in the list, one at a time, and moving them to their
proper positions. This algorithm finds the location of the smallest element in the unsorted portion of the
list and moves it to the top of the unsorted portion (that is, the whole list) of the list. The first time we
locate the smallest item in the entire list, the second time we locate the smallest item in the list starting
from the second element in the list, and so on. Selection sort described here is designed for array-based
lists.




                                                    493

[PDF page 494; printed page 494]
Suppose you have the list shown in Figure 8-1.




                                            FIGURE 8-1 List of 8 elements



Figure 8-2 shows the elements of list in the first iteration.




                                 FIGURE 8-2 Elements of list during the first iteration



Initially, the entire list is unsorted. So we find the smallest item in the list. The smallest item is at position
6, as shown in Figure 8-2(a). Because this is the smallest item, it must be moved to position 0. So we swap
16 (that is, list[0]) with 5 (that is, list[6]), as shown in Figure 8-2(b). After swapping these elements, the
resulting list is as shown in Figure 8-2(c).


Figure 8-3 shows the elements of list in the second iteration.




                                FIGURE 8-3 Elements of list during the second iteration



Now the unsorted list is list[1]...list[7]. So we find the smallest element in the unsorted list. The smallest
element is at position 3, as shown in Figure 8-3(a). Because the smallest element in the unsorted list is at
position 3, it must be moved to position 1. So we swap 7 (that is, list[3]) with 30 (that is, list[1]), as shown
                                                         494

[PDF page 495; printed page 495]
in Figure 8-3(b). After swapping list[1] with list[3], the resulting list is as shown in Figure 8-3(c).


Now the unsorted list is list[2]...list[7]. So we repeat the preceding process of finding the (position of the)
smallest element in the unsorted portion of the list and moving it to the beginning of the unsorted portion
of the list. Selection sort, thus, involves the following steps.


In the unsorted portion of the list:




                                                      495

[PDF page 496; printed page 496]
    1. Find the location of the smallest element.
    2. Move the smallest element to the beginning of the unsorted list.


Initially, the entire list, list[0]...list[length-1], is the unsorted list. After executing Steps 1 and 2 once, the
unsorted list is list[1]...list[length-1]. After executing Steps 1 and 2 a second time, the unsorted list is
list[2]...list[length-1], and so on. We can keep track of the unsorted portion of the list and repeat Steps a
and b with the help of a for loop as follows:


        for (index = 0; index < length - 1; index++)
        {
                1. Find the location, smallestIndex, of the smallest element in list[index]...list[length - 1].

                2. Swap the smallest element with list[index]. That is, swap list[smallestIndex] with
                     list[index].
        }


The first time through the loop, we locate the smallest element in list[0]...list[length-1] and swap this
smallest element with list[0]. The second time through the loop, we locate the smallest element in
list[1]...list[length-1] and swap this smallest element with list[1], and so on. This process continues until
the length of the unsorted list is 1. (Note that a list of length 1 is sorted.) It, therefore, follows that to
implement selection sort, we need to implement Steps 1 and 2.


Given the starting index, first, and the ending index, last, of the list, the following C++ function returns the
index of the smallest element in list[first]...list[last]:


template <class elemType>
int arrayListType<elemType>::minLocation(int first, int last)
{
        int minIndex;


        minIndex = first;
        for (int loc = first + 1; loc <= last; loc++) if(
                list[loc] < list[minIndex])
                minIndex = loc;
                                                            496

[PDF page 497; printed page 497]
       return minIndex;
} //end minLocation


Given the locations in the list of the elements to be swapped, the following C++ function, swap, swaps
those elements:


template <class elemType>
void arrayListType<elemType>::swap(int first, int second)
{
       elemType temp;


       temp = list[first]; list[first]
       = list[second];
       list[second] = temp;
}//end swap




                                                  497

[PDF page 498; printed page 498]
We can now complete the definition of the function selectionSort:


template <class elemType>
void arrayListType<elemType>::selectionSort()
{
        int minIndex;
        for (int loc = 0; loc < length - 1; loc++)
        {
                minIndex = minLocation(loc, length - 1); swap(loc,
                minIndex);
        }
}


You can add the functions to implement selection sort in the definition of the class arrayListType as
follows:


template<class elemType> class
arrayListType
{ public:
                //Place the definitions of the function given earlier here. void
                selectionSort();
                ... private:
                //Place the definitions of the members given earlier here.
                void swap(int first, int second); int minLocation(int first,
                int last);

};


EXAMPLE 8-1




                                                      498

[PDF page 499; printed page 499]
The following program tests selection sort:
//**************************************************************
// This program illustrates how to use selection sort in a //
program.
//**************************************************************
#include <iostream>                                                //Line 1
#include "arrayListType.h"                                         //Line 2
using namespace std;                                               //Line 3
int main()                                                         //Line 4
{                                                                  //Line 5
       arrayListType<int> list;                                    //Line 6
       int num;                                                    //Line 7

       cout << "Line 8: Enter numbers ending with -999" << endl;   //Line 8

       cin >> num;                                                 //Line 9

       while (num != -999)                                         //Line 10




                                                    499

[PDF page 500; printed page 500]
        {        //Line 11 list.insert(num);     //Line 12 cin >> num;         //Line 13
        }                                                                                         //Line 14


        cout << "Line 15: The list before sorting:" << endl;       //Line 15 list.print();       //Line 16
        cout << endl;           //Line 17


        list.selectionSort();                                                                     //Line 18


        cout << "Line 19: The list after sorting:" << endl;    //Line 19 list.print();       //Line 20 cout
        << endl;        //Line 21


        return 0;                                                                                 //Line 22
}                                                                                                 //Line 23


Sample Run: In this sample run, the user input is shaded.
Line 8: Enter numbers ending with -999
34 67 23 12 78 56 36 79 5 32 66 -999
Line 15: The list before sorting: 34 67
23 12 78 56 36 79 5 32 66 Line 19: The
list after sorting:
5 12 23 32 34 36 56 66 67 78 79


For the most part, the preceding output is self-explanatory. Notice that the statement in Line 12 calls the
function insert of the class arrayListType. Similarly, the statements in Lines 16 and 20 call the function
print of the class arrayListType. The statement in Line 18 calls the function selectionSort to sort the list.


8.1.1 Analysis: Selection Sort


In the case of search algorithms (Chapter 7), our only concern was with the number of key (item)
comparisons. A sorting algorithm makes key comparisons and also moves the data. Therefore, in analyzing
the sorting algorithm, we look at the number of key comparisons as well as the number of data
movements. Let us look at the performance of selection sort.


                                                      500

[PDF page 501; printed page 501]
Suppose that the length of the list is n. The function swap does three item assignments and is executed n
- 1 times. Hence, the number of item assignments is 3(n - 1).


The key comparisons are made by the function minLocation. For a list of length k, the function minLocation
makes k - 1 key comparisons. Also, the function minLocation is executed n - 1 times (by the function
selectionSort). The first time, the function minLocation finds the index of the smallest key item in the
entire list and so makes n - 1 comparisons. The second time, the function minLocation finds the index of
the smallest element in the sublist of length n - 1 and so makes n - 2 comparisons, and so on. Hence the
number of key comparisons is as follows:



Thus, it follows that if n = 1000, the number of key comparisons the selection sort makes is
1/2(10002) - 1/2(1000) = 499500 ≈ 500000.




                                                   501
```
