---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "126-126"
printed_pages: "126-126"
section: "Legacy Systems"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "legacy"
  - "new"
  - "processing"
  - "need"
  - "will"
  - "online"
  - "might"
  - "can"
  - "both"
  - "batches"
  - "when"
  - "introduced"
---

# Legacy Systems

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 126-126 | printed pages 126-126

Related sections: [Integration with Existing Systems](../../big-data-iot-600-study-guide/sections/113-integration-with-existing-systems.md), [Designing Codes](3-7-3-designing-codes.md), [Batch Processing](4-6-2-batch-processing.md), [Example](4-6-3-example.md), [Database Models](../../internet-programming-622-study-guide/sections/4-4-database-models.md), [Why Do You Need XAMPP?](../../internet-programming-622-study-guide/sections/63-why-do-you-need-xampp.md)

## Extracted Text

```text
[PDF page 126; printed page 126]
4.1.6 Legacy Systems

When a new system is introduced, it might need to interface with existing legacy systems,
which are older but still functional. For example, a new marketing system might need to send
sales data to an accounting system or retrieve product cost data from a legacy manufacturing
system. Interfacing new systems with legacy systems involves analyzing data formats and
ensuring compatibility. In some cases, legacy data may need to be converted, a process that
can be both costly and time-consuming. Middleware can sometimes be used to facilitate
communication between new and legacy systems. It's also important to determine whether
the new application will eventually replace the legacy system or coexist with it.

4.1.7 Processing Options

During system architecture planning, one of the key considerations is how data will be
processed: online or in batches. For example, transaction processing systems that handle
large volumes of orders will require more network capacity, processing power, and storage
than a monthly billing system that processes data in batches. If the system is required to
operate online 24/7, provisions for backup and quick recovery in case of failure are essential.
The characteristics of both online and batch processing methods, along with examples of
each, are further discussed later in this chapter.
```
