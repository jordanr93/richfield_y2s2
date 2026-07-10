---
document: "Programming 622 Study Guide"
source_file: "PROGRAMMING 622 STUDY GUIDE.pdf"
document_version: "created 2025-02-03; modified 2025-02-03"
pdf_pages: "473-482"
printed_pages: "473-482"
section: "Rehashing"
chapter: "TOPIC 7: SEARCHING AND HASHING ALGORITHMS"
keywords:
  - "htsize"
  - "table"
  - "probing"
  - "quadratic"
  - "probe"
  - "probes"
  - "divides"
  - "sequence"
  - "prime"
  - "half"
  - "suppose"
  - "not"
---

# Rehashing

Source trace: [original PDF](../../../originals/PROGRAMMING%20622%20STUDY%20GUIDE.pdf) | PDF pages 473-482 | printed pages 473-482

Related sections: [Creating A Table](../../internet-programming-622-study-guide/sections/4-11-creating-a-table.md), [Characteristics Of Big Data](../../big-data-iot-600-study-guide/sections/1-2-characteristics-of-big-data.md), [Data Ownership](../../big-data-iot-600-study-guide/sections/122-data-ownership.md), [Real-Time Data Processing](../../big-data-iot-600-study-guide/sections/117-real-time-data-processing.md), [Data Structures](../../information-systems-622-study-guide/sections/3-1-1-data-structures.md), [Definitions](../../information-systems-622-study-guide/sections/3-4-1-definitions.md)

## Extracted Text

```text
[PDF page 473; printed page 473]
      7.7 Rehashing


       In this method, if a collision occurs with the hash function h, we use a series of hash functions, h1, h2, . .
       ., hs. That is, if the collision occurs at h(X), the array slots hi(X), 1 ≤ hi(X) ≤ s are examined.


       7.2.3.3 Quadratic Probing


       Suppose that an item with key X is hashed at t, that is, h(X) = t and 0 ≤ t ≤ HTSize – 1. Further suppose that
       position t is already occupied. In quadratic probing, starting at position t, we linearly search the array at
       locations (t + 1)% HTSize, (t + 22 ) % HTSize = (t + 4) % HTSize, (t + 32) % HTSize = (t + 9) % HTSize, . . ., (t +
       i2) % HTSize. That is, the probe sequence is: t, (t + 1) % HTSize (t + 22 ) % HTSize, (t + 32) % HTSize, . . ., (t +
       i2) % HTSize.


      EXAMPLE 7-6




                                                               473

[PDF page 474; printed page 474]
Although quadratic probing reduces primary clustering, we do not know if it probes all the positions in the
table. In fact, it does not probe all the positions in the table. However, when HTSize is a prime, quadratic
probing probes about half the table before repeating the probe sequence. Let us prove this observation.


Suppose that HTSize is a prime and for 0 ≤ i < j ≤ HTSize,


                       (t + i2)%HTSize = (t + j2)%HTSize:




                                                     474

[PDF page 475; printed page 475]
This implies that HTSize divides (j2 – i2), that is, HTSize divides (j – i) (j + i). Because HTSize is a prime, we
get HTSize divides (j – i) or HTSize divides (j + i).
Now because 0 < j - i < HTSize, it follows that HTSize does not divide (j - i). Hence, HTSize divides (j + i). This
implies that j + i ≥ HTSize, so j ≥ (HTSize / 2).


Hence, quadratic probing probes half the table before repeating the probe sequence. Thus, it follows that
if the size of HTSize is a prime at least twice the number of items, we can resolve all the collisions.


Because probing half the table is already a considerable number of probes, after making these many
probes we assume that the table is full and stop the insertion (and search). (This can occur when the table
is actually half full; in practice, it seldom happens unless the table is nearly full.)


Next we describe how to generate the probe sequence.


Note that
                         22 = 1 + (2 * 2 – 1)

                         32 = 1 + 3 + (2 * 3 – 1) 42
                         = 1 + 3 + 5 + (2 * 4 – 1)

                         .
                         .
                         . i2 = 1 + 3 + 5 + 7 + . . . + (2 * i - 1); i ≥
                         1:


Thus, it follows that


                         (t + i2)%HTSize = (t + 1 + 3 + 5 + 7 + . . . + (2 * i – 1))%HTSize


Consider the probe sequence t, t + 1, t + 22, t + 32, . . . , (t + i2) % HTSize. The following C++ code computes
the ith probe, that is, (t + i2) % HTSize:


                         int inc = 1;
                         int pCount = 0;

                                                            475

[PDF page 476; printed page 476]
                     while (p < i)
                     { t = (t + inc) % HTSize; inc =
                             inc + 2; pCount++;
                     }
The following pseudocode implements quadratic probing (assume that HTSize is a prime):
                     int pCount; int
                     inc;
                     int hIndex;
                     hIndex = hashFunction(insertKey);
                     pCount = 0;




                                                       476

[PDF page 477; printed page 477]
                        inc = 1;


                        while (HT[hIndex] is not empty && HT[hIndex] is not the same as the insert item
                                           && pCount < HTSize / 2)
                        {
                                   pCount++;
                                   hIndex = (hIndex + inc ) % HTSize;
                                   inc = inc + 2;
                        }


                        if (HT[hIndex] is empty)
                                   HT[hIndex] = newItem; else if (HT[hIndex] is the
                        same as the insert item) cerr << "Error: No duplicates are
                        allowed." << endl; else cerr << "Error: The table is full. "
                                           << "Unable to resolve the collisions." << endl;


Both randomand quadratic probings eliminate primary clustering. However, if two nonidentical keys, say
X1 and X2, are hashed to the same home position, that is, h(X1) = h(X2), then the same probe sequence is
followed for both keys. The same probe sequence is used for both keys because random probing and
quadratic probing are functions of the home positions, not the original key. It follows that if the hash
function causes a cluster at a particular home position, the cluster remains under these probings. This is
called secondary clustering.


One way to solve secondary clustering is to use linear probing, with the increment value a function of the
key. This is called double hashing. In double hashing, if a collision occurs at h(X), the probe sequence is
generated by using the rule:


                        (h(X) + i * g (X)) % HTSize


where g is the second hash function, and i = 0, 1, 2, 3, . . . .


If the size of the hash table is a prime p, then we can define g as follows:


                                                        477

[PDF page 478; printed page 478]
              g(k) = 1+(k % (p – 2))

EXAMPLE 7-7




                                       478

[PDF page 479; printed page 479]
       EXAMPLE 7-8




7.2.4 Deletion: Open Addressing


Suppose that an item, say R, is to be deleted from the hash table, HT. Clearly, we first must find the index

                                                   479

[PDF page 480; printed page 480]
of R in HT. To find the index of R, we apply the same criteria we applied to R when R was inserted in HT.
Let us further assume that after inserting R, another item, R’, was inserted in HT, and the home position




                                                  480

[PDF page 481; printed page 481]
of R and R’ is the same. The probe sequence of R is contained in the probe sequence of R’ because R’ was
inserted in the hash table after R. Suppose that we delete R simply by marking the array slot containing R
as empty. If this array position stays empty, then while searching for R’ and following its probe sequence,
the search terminates at this empty array position. This gives the impression that R’ is not in the table,
which, of course, is incorrect. The item R cannot be deleted simply by marking its position as empty from
the hash table.


One way to solve this problem is to create a special key to be stored in the key of the items to be deleted.
The special key in any slot indicates that this array slot is available for a new item to be inserted. However,
during the search, the search should not terminate at this location. This, unfortunately, makes the deletion
algorithm slow and complicated.


Another solution is to use another array, say indexStatusList of int, of the same size as the hash table as
follows: Initialize each position of indexStatusList to 0, indicating that the corresponding position in the
hash table is empty. When an item is added to the hash table at position, say i, we set indexStatusList[i]
to 1. When an item is deleted from the hash table at position, say k, we set indexStatusList[k] to -1.
Therefore, each entry in the array indexStatusList is -1, 0, or 1.


For example, suppose that you have the hash table as shown in Figure 7-8.




                                     FIGURE 7-8 Hash table and indexStatusList



In Figure 7-8, the hash table positions 0, 1, 3, 5, 6, and 8 are occupied. Suppose that the entries at positions
3 and 6 are removed. To remove these entries from the hash table, we store -1 at positions 3 and 6 in the
array indexStatusList (see Figure 7-9).



                                                       481

[PDF page 482; printed page 482]
FIGURE 7-9 Hash table and indexStatusList after removing the entries at positions 3 and 6




                                          482
```
