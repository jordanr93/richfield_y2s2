---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "113-113"
printed_pages: "113-113"
section: "Designing Codes"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "codes"
  - "code"
  - "number"
  - "designing"
  - "keep"
  - "need"
  - "will"
  - "future"
  - "might"
  - "use"
  - "can"
  - "both"
---

# Designing Codes

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 113-113 | printed pages 113-113

Related sections: [Legacy Systems](4-1-6-legacy-systems.md), [Types of Codes](3-7-2-types-of-codes.md), [Database Models](../../internet-programming-622-study-guide/sections/4-4-database-models.md), [Why Do You Need XAMPP?](../../internet-programming-622-study-guide/sections/63-why-do-you-need-xampp.md), [Integrating Predictive and Prescriptive Analytics into Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-2-integrating-predictive-and-prescriptive-analytics-into-strategy-development.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md)

## Extracted Text

```text
[PDF page 113; printed page 113]
3.7.3 Designing Codes
Here are some important suggestions for designing codes effectively:
    1. Keep codes concise: Codes should not be unnecessarily long. For example, if you need
        to identify 250 customers, there’s no need to create a six-digit code. A smaller code
        will suffice and be more efficient.
    2. Allow for expansion: A coding scheme should accommodate future growth. If a
        company has eight warehouses today, using a single-digit code might work, but as the
        number of warehouses grows, the code must be expanded. For example, a two-digit
        code or even an alphanumeric code might be necessary in the future. Airlines use six-
        character codes, allowing for millions of combinations, which is an example of
        accommodating future needs.
    3. Keep codes stable: Consistency is key. Changing codes frequently can create
        problems, especially with stored data and documents. During the transition, both old
        and new codes may need to be used for a time, and special procedures will be required
        to manage both. For example, when telephone area codes change, both the old and
        new codes may be valid for a period.
    4. Make codes unique: Codes used for identification must be unique. If a code can
        represent multiple things, it loses its usefulness. For example, the code HW could
        represent hardware or houseware, but it’s not specific enough to be useful on its own.
    5. Use sortable codes: When grouping items by code, ensure the codes are sortable. For
        example, products with codes in the 100s and 300s should be of one type, while
        products with codes in the 200s should be of another type. Be mindful of the sorting
        order—sometimes adding leading zeros (e.g., 01, 02, 03) will ensure that single-digit
        codes are sorted properly with double-digit codes.
    6. Use a simple structure: Keep code structures simple and uniform. Avoid mixing
        formats, such as using two letters, a hyphen, and a single digit in one part number,
        and one letter, a hyphen, and two digits in another. Consistent format makes codes
        easier to understand and manage.
    7. Avoid confusion: Certain characters can be easily confused, such as the number zero
        (0) and the uppercase letter O, or the number one (1) and the uppercase letter I.
        Ensure your code design avoids using characters that might be misread, reducing the
        likelihood of errors.
    8. Make codes meaningful: Codes should be intuitive, user-friendly, and easy to
        interpret. A code like SW for the southwest sales region is much easier to understand
        and remember than a code like 14. Similarly, ENG for the English department is easier
        to interpret than something like XVA or 132.
    9. Use a code for a single purpose: Avoid combining unrelated attributes into a single
        code. For example, using one code for both an employee’s department and insurance
        plan type can lead to confusion. It’s better to have separate codes for each attribute.
    10. Keep codes consistent: If one system (e.g., payroll) uses two-digit department codes,
        don’t create a completely different coding scheme for another system (e.g.,
        personnel). Consistency across systems is important for clarity and ease of use.
By following these guidelines, codes can be designed in a way that is efficient, effective, and
user-friendly.
```
