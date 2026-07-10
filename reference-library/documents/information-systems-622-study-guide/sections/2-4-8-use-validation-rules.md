---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "52-54"
printed_pages: "52-54"
section: "Use Validation Rules"
chapter: "CHAPTER 2: User Interface Design"
keywords:
  - "check"
  - "entered"
  - "validation"
  - "range"
  - "rules"
  - "will"
  - "types"
  - "sequence"
  - "ensures"
  - "type"
  - "can"
  - "rule"
---

# Use Validation Rules

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 52-54 | printed pages 52-54

Related sections: [PHP Form Validation](../../internet-programming-622-study-guide/sections/1-7-php-form-validation.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Use of Data for Unintended Purposes](../../big-data-iot-600-study-guide/sections/124-use-of-data-for-unintended-purposes.md), [Sequence Container: vector](../../programming-622-study-guide/sections/2-3-sequence-container-vector.md), [Use Technology to Support Data-Driven Decisions](../../big-data-iot-600-study-guide/sections/89-use-technology-to-support-data-driven-decisions.md), [Create an Interface That Is Easy to Learn and Use](2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md)

## Extracted Text

```text
[PDF page 52; printed page 52]
2.4.8 Use Validation Rules
Validation rules are an essential part of improving data quality by preventing errors at the
data entry stage. By using various types of validation checks, we can ensure that the data
being entered into the system meets the required conditions, which ultimately prevents
incorrect or inconsistent data from entering the system. Here are the key types of validation
rules that can be applied:

[PDF page 53; printed page 53]
                               (Tilley and Rosenblatt, 2024)


Types of Validation Rules:

   1. Sequence Check:

          o   This ensures that data is entered in a specific sequence. For example, if work
              orders must be entered in numerical sequence, a validation rule will flag any
              order numbers entered out of sequence. Similarly, transactions should be
              entered chronologically, and any date entered out of order would trigger an
              error.

   2. Existence Check:

          o   This is used to ensure that mandatory fields are not left blank. For instance, if
              an employee record requires a Social Security number, the system will not
              allow the record to be saved unless a valid Social Security number is entered.

   3. Data Type Check:

          o   This rule ensures that the data entered matches the required type. For
              example, a field that expects numeric data will only allow numbers or numeric
              symbols, while an alphabetic field will only accept letters (A-Z or a-z). This
              prevents users from entering the wrong type of data.

   4. Range Check:

          o   A range check ensures that data falls within a specified minimum and
              maximum range. For example, the number of hours worked by an employee

[PDF page 54; printed page 54]
           should fall between 0 and 24 hours. A similar rule can be applied for monetary
           values or other types of numeric data. If a value is outside of the acceptable
           range, it will trigger an error.

5. Reasonableness Check:

       o   This check flags values that are within acceptable limits but seem unusual or
           questionable. For example, a payment value of $0.05 or $5,000,000 might
           technically pass a range check, but both could be errors. Similarly, a daily-
           hours-worked value of 24 might pass a range check but may seem
           unreasonable, thus triggering a reasonableness check.

6. Validity Check:

       o   This type of check ensures that data entered must match one of a set of
           predefined valid values. For instance, if an inventory system accepts only 20
           valid item classes, any input that doesn’t match one of these valid classes
           would fail the check. Validity checks can also be used to ensure referential
           integrity—for example, ensuring a customer number in an order matches one
           in the customer file.

7. Combination Check:

       o   This rule is applied when two or more fields must be consistent when
           considered together. Even if individual fields pass their validation checks, the
           combination of their values might be inconsistent or unreasonable. For
           example, if an order for 30 units of an item applies a discount rate that only
           applies to orders of 100 units or more, this would be an invalid combination.

8. Batch Controls:

       o   Batch controls are used to verify the accuracy of batch data input. Before a
           batch of data (e.g., orders) is entered, the system can calculate totals (such as
           the total number of records or the sum of quantities). After the data is entered,
           the system recalculates these totals, and if they don't match, it indicates that
           there is an error in the batch. Batch controls do not identify specific errors but
           help to verify that the entire batch of data is correct.
```
