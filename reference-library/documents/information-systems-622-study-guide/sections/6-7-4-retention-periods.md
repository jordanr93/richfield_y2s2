---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "237-237"
printed_pages: "237-237"
section: "Retention Periods"
chapter: "6. 7 BACKUP AND RECOVERY"
keywords:
  - "backup"
  - "full"
  - "storage"
  - "backups"
  - "differential"
  - "continuous"
  - "files"
  - "media"
  - "while"
  - "many"
  - "often"
  - "incremental"
---

# Retention Periods

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 237-237 | printed pages 237-237

Related sections: [Common Big Data Storage Architectures](../../big-data-iot-600-study-guide/sections/4-5-2-common-big-data-storage-architectures.md), [Data Storage and Management](../../big-data-iot-600-study-guide/sections/3-4-3-data-storage-and-management.md), [Understanding Files And Directories](../../internet-programming-622-study-guide/sections/3-1-understanding-files-and-directories.md), [Bias and Fairness](../../big-data-iot-600-study-guide/sections/121-bias-and-fairness.md), [Big Data](../../big-data-iot-600-study-guide/sections/1-1-big-data.md), [Big Data Storage Architectures](../../big-data-iot-600-study-guide/sections/4-5-big-data-storage-architectures.md)

## Extracted Text

```text
[PDF page 237; printed page 237]
retention periods.

BACKUP MEDIA

Backup media can include tapes, hard drives, optical storage, and online storage. Physical
backups should be clearly labeled and stored securely. Offsiting is the practice of storing
backup media in a location different from the main business site to protect against disasters
like floods, fires, or earthquakes. While many operating systems include built-in backup
utilities, many system administrators prefer using specialized third-party software for large-
scale operations, offering more flexibility and better control.
In addition to offline storage, cloud-based storage is rapidly growing in popularity. Many
companies rely on cloud backup and retrieval services from top providers. For small and
medium-sized businesses, this option is often cost-effective and reliable.

BACKUP TYPES

There are different types of backups: full, differential, incremental, and continuous.
Full Backup: A full backup copies all files on the system. While thorough, frequent full backups
can be time-consuming and repetitive if most files haven't changed since the last backup.
Differential Backup: This type backs up only the files that have changed or been created since
the last full backup. To restore the system, the last full backup is restored first, followed by
the most recent differential backup. A combination of full and differential backups is often
recommended, as it minimizes storage use while being relatively simple.
Incremental Backup: This method only backs up files that have not been backed up previously.
Although it is faster and requires less storage, restoring the system takes longer, as each
incremental backup must be applied sequentially.
Continuous Backup: Continuous backup is a real-time method that records all system activity
as it happens. This method demands significant hardware, software, and network resources
but allows for rapid and effective system restoration. Continuous backup often uses a
redundant array of independent disks (RAID) system to mirror data, providing fault tolerance.
This means that the failure of one disk does not impact the system. RAID systems offer better
performance, higher capacity, and increased reliability compared to a single large disk. When
set up on a server, a RAID array of multiple drives appears to the computer as a single logical
drive.
```
