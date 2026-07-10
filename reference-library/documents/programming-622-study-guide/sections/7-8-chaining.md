---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "483-491"
printed_pages: "483-491"
section: "Chaining"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "hash"
  - "mod"
  - "keys"
  - "slot"
  - "linked"
  - "list"
  - "time"
  - "chaining"
  - "all"
  - "same"
  - "any"
  - "natural"
---

# Chaining

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 483-491 | printed pages 483-491

Related sections: [System Changeover](../../information-systems-622-study-guide/sections/5-9-2-system-changeover.md), [Challenges with Encryption](../../big-data-iot-600-study-guide/sections/2-5-1-challenges-with-encryption.md), [Data Storage and Management](../../big-data-iot-600-study-guide/sections/3-4-3-data-storage-and-management.md), [Ensure Data Security](../../big-data-iot-600-study-guide/sections/134-ensure-data-security.md), [Fostering Collaboration and Engagement](../../big-data-iot-600-study-guide/sections/106-fostering-collaboration-and-engagement.md), [Set Clear, Measurable Objectives](../../big-data-iot-600-study-guide/sections/85-set-clear-measurable-objectives.md)

## Extracted Text

```text
[PDF page 483; printed page 483]
       7.8 Chaining


        One simple scheme is to chain all collisions in lists attached to the appropriate slot. This allows an
        unlimited number of collisions to be handled and doesn't require a priori knowledge of how many
        elements are contained in the collection. The tradeoff is the same as with linked lists versus array
        implementations of collections: linked list overhead in space and, to a lesser extent, in time.
        7.2.5.1 Collision Resolution by Chaining


                                                                  483

[PDF page 484; printed page 484]
When there is a collision (keys hash to the same slot), the incoming keys is stored in an overflow area and
the corresponding record is appeared at the end of the linked list.




                                                   484

[PDF page 485; printed page 485]
Each slot T[j] contains a linked list of all the keys whose hash value is j. For example, h(k1) = h(kn) and h(k5)
= h(k2) = h(k7).

             t case running time for insertion is O(1).


                                        -hashing, all n keys hash to the same slot, creating a list of length n.
The worst-case time for search is thus θ(n) plus the time to compute the hash function.

keys: 5,28,19,15,20,33,12,17,10 slots: 9
hash function = h(k) = k mod 9


                        h(5) = 5 mod 9 = 4 h(28)
                        = 28 mod 9 = 1 h(19) =
                        19 mod 9 = 1 h(15) = 15
                        mod 9 = 6 h(20) = 20
                        mod 9 = 2 h(33) = 33
                        mod 9 = 6 h(12) = 12
                        mod 9 = 3 h(17) = 17
                        mod 9 = 8 h(10) = 10
                        mod 9 = 1


A good hash function satisfies the assumption of simple uniform hashing, each element is equally likely
to hash into any of the m slots, independently of where any other element has hash to. But usually it is
not possible to check this condition because one rarely knows the probability distribution according to
which the keys are drawn.

In practice, we use heuristic techniques to create a hash function that perform well. One good approach
is to derive the hash value in a way that is expected to be independent of any patterns that might exist in
the data (division method).
                                                      485

[PDF page 486; printed page 486]
Most hash function assume that the universe of keys is the set of natural numbers. Thus, its keys are not
natural to interpret than as natural numbers.
7.2.5.2 Method for Creating Hash Function


   1. The division method.
   2. The multiplication method.
   3. Universal hashing.




                                                  486

[PDF page 487; printed page 487]
7.8.1.1 The Division Method

       Map a key k into one of m slots by taking the remainder of k divided by m. That is, the hash function is
       h(k) = k mod m.
       Example:


         If table size m = 12
       key k = 100

         than
           h(100) = 100 mod 12
                   =4




       Poor choices of m m should not be a power of 2, since if m = 2p, then h(k) is just the p lowest-order bits
                of k. So, 2p may be a poor choice, because permuting the characters of k does not change value.


       Good m choice of m
                A prime not too close to an exact of 2.
      7.8.2 The Multiplication Method

       Two step process


       Step 1: Multiply the key k by a constant 0< A < 1 and extract the fraction part of kA. Step
       2: Multiply kA by m and take the floor of the result.


       The hash function using multiplication method is:


                                   h(k) = ëm(kA mod 1)û


       where "kA mod 1" means the fractional part of kA, that is, kA - ëkAû.
       Advantage of this method is that the value of m is not critical and can be implemented on most computers.
       A reasonable value of constant A is
                » (sqrt5 - 1) /2
      7.8.3 Universal Hashing

                                                           487

[PDF page 488; printed page 488]
Open Addressing


This is another way to deal with collisions.

In this technique all elements are stored in the hash table itself. That is, each table entry contains either
an element or NIL. When searching for element (or empty slot), we systematically examine slots until we
found an element (or empty slot). There are no lists and no elements stored outside the table. That implies
that table can completely "fill up"; the load factor α can never exceed 1.Advantage of this technique is




                                                    488

[PDF page 489; printed page 489]
that it avoids pointers (pointers need space too). Instead of chasing pointers, we compute the sequence
of slots to be examined. To perform insertion, we successively examine or probe, the hash table until we
find an empty slot. The sequence of slots probed "depends upon the key being inserted." To determine
which slots to probe, the hash function includes the probe number as a second input.
Thus,                       the                       hash               function                     becomes
h: × {0, 1, . . . m -1 }--> {0, 1, . . . , m-1}

and the probe sequence


                          < h(k, 0), h(k, 1), . . . , h(k, m-1) >
in which every slot is eventually considered.
Exercise
1. Suppose there are eight students with IDs 197354883, 933185971, 132489992, 134152075, 216500325,
  106500325, 216510325, 197354884. Suppose hash table, HT, is of the size 19, indexed 0, 1, 2, . . ., 18.
  Show how these students’ IDs, in the order given, are inserted in HT using the hashing function h(k) = k
  % 19. Use linear probing to resolve collision.


2. Suppose there are six workers, in a workshop, with IDs 147, 169, 580, 216, 974, and 124. Suppose hash
  table, HT, is of the size 13, indexed 0, 1, 2, . . ., 12. Show how these workers’ IDs, in the order given, are
  inserted in HT using the hashing function h(k) = k % 13. Use linear probing to resolve collision.


3. Suppose there are five workers, in a shop, with IDs 909, 185, 657, 116, and 150. Suppose hash table,
  HT, is of the size 7, indexed 0, 1, 2, . . ., 6. Show how these workers’ IDs, in the order given, are inserted
  in HT using the hashing function h(k) = k % 7. Use linear probing to resolve collision.


4. Suppose there are seven students with IDs 5701, 9302, 4210, 9015, 1553, 9902, and 2104. Suppose
  hash table, HT, is of the size 19, indexed 0,1,2, . . ., 18. Show how these students’ IDs, in the order given,
  are inserted in HT using the hashing function h(k) = k % 19. Use double hashing to resolve collision,
  where the second hash function is given by g(k) = (k+1) % 17.


5. Suppose that an item is to be removed from a hash table that was implemented using linear or quadratic
  probing. Why wouldn’t you mark the position of the item to be deleted as empty?


6. What are the advantages of open hashing?
                                                            489

[PDF page 490; printed page 490]
7. Give a numerical example to show that collision resolution by quadratic probing is better than chaining.


8. Give a numerical example to show that collision resolution by chaining is better than quadratic probing.


9. Suppose that the size of the hash table is 1001 and the table has 850 items. What is the load factor?


10.    Suppose that the size of the hash table is 1001 and the table has 750 items. On average, how many
  comparisons are made to determine whether an item is in the list if: a. Linear probing is used.
b. Quadratic probing is used.
c. Chaining is used.




                                                   490

[PDF page 491; printed page 491]
11. Suppose that 550 items are to be stored in a hash table. If, on average, three key comparisons are
needed to determine whether an item is in the table, what should be the size of the hash table if: a. Linear
probing is used.
b. Quadratic probing is used.
c. Chaining is used.




                                                   491
```
