---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "62-62"
printed_pages: "62-62"
section: "Time-Related Properties"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "was"
  - "properties"
  - "modified"
  - "time"
  - "last"
  - "unix"
  - "which"
  - "timestamp"
  - "time-related"
  - "contents"
  - "files"
---

# Time-Related Properties

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 62-62 | printed pages 62-62

Related sections: [Reading One Line At A Time](3-11-reading-one-line-at-a-time.md), [Common Big Data Storage Architectures](../../big-data-iot-600-study-guide/sections/4-5-2-common-big-data-storage-architectures.md), [Real-Time Data Processing](../../big-data-iot-600-study-guide/sections/117-real-time-data-processing.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Interfaces for Users, Database Administrators, and Related Systems](../../information-systems-622-study-guide/sections/3-2-1-interfaces-for-users-database-administrators-and-related-systems.md), [SUMMARY](../../information-systems-622-study-guide/sections/3-10-summary.md)

## Extracted Text

```text
[PDF page 62; printed page 62]
3.3 Time-Related Properties

In addition to their contents, files have various properties that can provide useful information.
The available properties depend on the operating system in which the files are created and
modified. For example, on both Windows and UNIX-based systems like Linux, file properties
include the time the file was last modified, the time it was last accessed, and the user
permissions set on the file.




PHP provides three functions to retrieve time-related information about files:




fileatime() — Returns the time at which the file was last accessed, represented as a UNIX
timestamp. A file is considered accessed if its contents are read.




filectime() — Returns the time at which the file was last changed, also as a UNIX timestamp. A
file is considered changed if it was created, written to, or if its permissions were modified.




filemtime() — Returns the time at which the file was last modified, again as a UNIX timestamp.
The file is considered modified if it was created or its contents were altered.




A UNIX timestamp is an integer value representing the number of seconds since the UNIX epoch
(midnight on January 1, 1970).




                                                 62
```
