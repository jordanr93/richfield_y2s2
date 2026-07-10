---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "61-61"
printed_pages: "61-61"
section: "Getting Information on Files"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "exists"
  - "files"
  - "getting"
  - "you"
  - "can"
  - "use"
  - "home"
  - "chris"
  - "myfile"
  - "txt"
  - "returns"
---

# Getting Information on Files

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 61-61 | printed pages 61-61

Related sections: [Copying, Renaming And Deleting Files](3-14-copying-renaming-and-deleting-files.md), [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Focus on Data Entry Screens](../../information-systems-622-study-guide/sections/2-4-7-focus-on-data-entry-screens.md), [Focus on Usability](../../information-systems-622-study-guide/sections/2-3-5-focus-on-usability.md)

## Extracted Text

```text
[PDF page 61; printed page 61]
3.2 Getting Information on Files


PHP provides several functions to retrieve useful information about files. For example,
before attempting to open a file, you can use the file_exists() function to check if it
exists:




file_exists("/home/chris/myfile.txt");




The file_exists() function returns `true` if the specified file exists and false otherwise.



Similarly, you can use the filesize() function to determine the size of a file in bytes:




filesize("/home/chris/myfile.txt");




This function returns the file size in bytes or `false` if an error occurs (e.g., if the file does
not exist).




                                               61
```
