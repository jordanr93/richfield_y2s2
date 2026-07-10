---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "461-472"
printed_pages: "461-472"
section: "Hashing"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "search"
  - "table"
  - "hash"
  - "order"
  - "binary"
  - "hashing"
  - "sequential"
  - "log2n"
  - "organized"
  - "help"
  - "item"
  - "particular"
---

# Hashing

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 461-472 | printed pages 461-472

Related sections: [First Normal Form](../../information-systems-622-study-guide/sections/3-6-2-first-normal-form.md), [Referential Integrity](../../information-systems-622-study-guide/sections/3-4-2-referential-integrity.md), [Second Normal Form](../../information-systems-622-study-guide/sections/3-6-3-second-normal-form.md), [Standard Notation Format](../../information-systems-622-study-guide/sections/3-6-1-standard-notation-format.md), [Third Normal Form](../../information-systems-622-study-guide/sections/3-6-4-third-normal-form.md), [Binary Search](7-4-binary-search.md)

## Extracted Text

```text
[PDF page 461; printed page 461]
7.6 Hashing


Previous sections of this chapter discussed two search algorithms: sequential and binary. In a binary
search, the data must be sorted; in a sequential search, the data does not need to be in any particular
order. We also analyzed both these algorithms and showed that a sequential search is of order n, and a
binary search is of order log2n, where n is the length of the list. The obvious question is: Can we construct
a search algorithm that is of order less than log2n? Recall that both search algorithms, sequential and
binary, are comparisonbased algorithms. We obtained a lower bound on comparisonbased search
                                                    461

[PDF page 462; printed page 462]
algorithms, which shows that comparison-based search algorithms are at least of order log2n. Therefore,
if we want to construct a search algorithm that is of order less than log2n, it cannot be comparison based.
This section describes an algorithm that, on average, is of order 1.
The previous section showed that for comparison-based algorithms, a binary search achieves the lower
bound. However, a binary search requires the data to be specially organized, that is, the data must be
sorted. The search algorithm that we now describe, called hashing, also requires the data to be specially
organized.


In hashing, the data is organized with the help of a table, called the hash table, denoted by HT, and the
hash table is stored in an array. To determine whether a particular item with a key, say X, is in the table,
we apply a function h, called the hash function, to the key X; that is, we compute h(X), read as h of X. The
function h is typically an arithmetic function and h(X) gives the address of the item in the hash table.
Suppose that the size of the hash table, HT, is m. Then 0 ≤ h(X) < m. Thus, to determine whether the item




                                                    462

[PDF page 463; printed page 463]
with key X is in the table, we look at the entry HT[h(X)] in the hash table. Because the address of an item
is computed with the help of a function, it follows that the items are stored in no particular order.


        Before continuing with this discussion, let us consider the following questions:
         How do we choose a hash function?
        How do we organize the data with the help of the hash table?


First, we discuss how to organize the data in the hash table.


There are two ways that data is organized with the help of the hash table. In the first approach, the data
is stored within the hash table, that is, in an array. In the second approach, the data is stored in linked lists
and the hash table is an array of pointers to those linked lists. Each approach has its own advantages and
disadvantages, and we discuss both approaches in detail. However, first we introduce some more
terminology that is used in this section.


The hash table HT is, usually, divided into, say b buckets HT[0], HT[1], . . ., HT[b – 1]. Each bucket is capable
of holding, say r items. Thus, it follows that br = m, where m is the size of HT. Generally, r = 1 and so each
bucket can hold one item.


The hash function h maps the key X onto an integer t, that is, h(X) = t, such that 0 ≤ h(X) ≤ b – 1.




                                                      463

[PDF page 464; printed page 464]
       EXAMPLE 7-2




We consider now a slight variation of Example 7-2.




                                                     464

[PDF page 465; printed page 465]
EXAMPLE 7-3




       Two keys, X1 and X2, such that X1 ≠ X2, are called synonyms if h(X1) ¼ h(X2). Let X be a key and h(X) = t. If
       bucket t is full, we say that an overflow occurs. Let X1 and X2 be two nonidentical keys. If h(X1) = h(X2), we
       say that a collision occurs. If r = 1, that is, the bucket size is 1, an overflow and a collision occur at the same
       time.


               When choosing a hash function, the main objectives are to:
               Choose a hash function that is easy to compute. Minimize
               the number of collisions.


       Next, we consider some examples of hash functions.


       Suppose that HTSize denotes the size of the hash table, that is, the size of the array holding the hash table.
       We assume that the bucket size is 1. Thus, each bucket can hold one item and, therefore, overflow and
       collision occur simultaneously.
                                                              465

[PDF page 466; printed page 466]
7.2.1 Hash Functions: Some Examples


Several hash functions are described in the literature. Here we describe some of the commonly used hash
functions.




                                                 466

[PDF page 467; printed page 467]
Mid-Square: In this method, the hash function, h, is computed by squaring the identifier, and then using
the appropriate number of bits from the middle of the square to obtain the bucket address. Because the
middle bits of a square usually depend on all the characters, it is expected that different keys will yield
different hash addresses with high probability, even if some of the characters are the same.


Folding: In folding, the key X is partitioned into parts such that all the parts, except possibly the last parts,
are of equal length. The parts are then added, in some convenient way, to obtain the hash address.


Division (Modular arithmetic): In this method, the key X is converted into an integer iX. This integer is then
divided by the size of the hash table to get the remainder, giving the address of X in HT. That is, (in C++)
h(X) = iX % HTSize;


Suppose that each key is a string. The following C++ function uses the division method to compute the
address of the key.


int hashFunction(char *insertKey, int keyLength)
{ int sum = 0;
        for (int j = 0; j < keyLength; j++) sum = sum +
                 static_cast<int>(insertKey[j]);
        return (sum % HTSize);
}                               // end hashFunction


7.2.2 Collision Resolution


As noted previously, the hash function that we choose not only should be easy to compute, but it is most
desirable that the number of collisions is minimized. However, in reality, collisions are unavoidable
because usually a hash function always maps a larger domain onto a smaller range. Thus, in hashing, we
must include algorithms to handle collisions. Collision resolution techniques are classified into two
categories: open addressing (also called closed hashing), and chaining (also called open hashing). In open
addressing, the data is stored within the hash table. In chaining, the data is organized in linked lists and
the hash table is an array of pointers to the linked lists. First we discuss collision resolution by open
addressing.


                                                      467

[PDF page 468; printed page 468]
7.2.3 Open Addressing


As described previously, in open addressing, the data is stored within the hash table. Therefore, for each
key X, h(X) gives the index in the array where the item with key X is likely to be stored. Open addressing
can be implemented in several ways. Next, we describe some of the common ways to implement it.


7.2.3.1 Linear Probing


Suppose that an item with key X is to be inserted in HT. We use the hash function to compute the index
h(X) of this item in HT. Suppose that h(X) = t. Then 0 ≤ h(X) ≤ HTSize – 1. If HT[t] is empty, we store this
item into this array slot. Suppose that HT[t] is already occupied by another item; we have a collision. In
linear probing, starting at location t, we search the array sequentially to find the next available array slot.
In linear probing, we assume that the array is circular so that if the lower portion of the array is full, we
can continue the search in the top portion of the array. This can be easily accomplished by using the mod




                                                     468

[PDF page 469; printed page 469]
operator. That is, starting at t, we check the array locations t, (t + 1) % HTSize, (t + 2) % HTSize, . . ., (t + j)
% HTSize. This is called the probe sequence.


The next array slot is given by


                        (h(X) + j) % HTSize


where j is the jth probe.


EXAMPLE 7-4


Consider the students’ IDs and the hash function given in Example 7-3. Then we know that




Using the linear probing, the array position where each student’s data is stored is:




As before, suppose HT[b] ← a means ‘‘store the data of the student with ID a into HT[b+.’’ Then




The following C++ code implements linear probing:


                                                       469

[PDF page 470; printed page 470]
hIndex = hashFunction(insertKey);
found = false;
while (HT[hIndex] != emptyKey && !found) if
       (HT[hIndex].key == key)
                 found = true;
       else hIndex = (hIndex + 1) % HTSize;




                                    470

[PDF page 471; printed page 471]
                if (found) cerr << "Duplicate items are not allowed." <<
                endl; else
                        HT[hIndex] = newItem;


From the definition of linear probing, we see that linear probing is easy to implement. However, linear
probing causes clustering; that is, more and more new keys would likely be hashed to the array slots that
are already occupied. For example, consider the hash table of size 20, as shown in Figure 7-5.




                                            FIGURE 7-5 Hash table of size 20



Initially, all the array positions are available. Because all the array positions are available, the probability
of any position being probed is (1/20). Suppose that after storing some of the items, the hash table is as
shown in Figure 7-6.



                             FIGURE 7-6 Hash table of size 20 with certain positions occupied



In Figure 7-6, a cross indicates that this array slot is occupied. Slot 9 will be occupied next if, for the next
key, the hash address is 6, 7, 8, or 9. Thus, the probability that slot 9 will be occupied next is 4/20. Similarly,
in this hash table, the probability that array position 14 will be occupied next is 5/20.


Now consider the hash table of Figure 7-7.

                             FIGURE 7-7 Hash table of size 20 with certain positions occupied



In this hash table, the probability that the array position 14 will be occupied next is 9/20, whereas the
probability that the array positions 15, 16, or 17 will be occupied next is 1/20. We see that items tend to
cluster, which would increase the search length. Linear probing, therefore, causes clustering. This
clustering is called primary clustering.


One way to improve linear probing is to skip array positions by a fixed constant, say c, rather than 1. In
this case, the hash address is as follows:



                                                          471

[PDF page 472; printed page 472]
                       (h(X) + i * c) % HTSize


If c = 2 and h(X) = 2k, that is, h(X) is even, only the even-numbered array positions are visited. Similarly, if
c = 2 and h(X) = 2k + 1, that is, h(X) is odd, only the odd-numbered array positions are visited. To visit all
the array positions, the constant c must be relatively prime to HTSize.




                                                     472
```
