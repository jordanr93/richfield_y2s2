---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "63-63"
printed_pages: "63-63"
section: "Retrieving A Filename from A Path"
chapter: "Topic 3: File System Management"
keywords:
  - "filename"
  - "path"
  - "basename"
  - "you"
  - "docs"
  - "directory"
  - "file"
  - "assigns"
  - "home"
  - "james"
  - "doc"
  - "retrieving"
---

# Retrieving A Filename from A Path

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 63-63 | printed pages 63-63

Related sections: [Telling A File from A Directory](3-18-telling-a-file-from-a-directory.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Mario and Danica: A Data Design Example](../../information-systems-622-study-guide/sections/3-1-2-mario-and-danica-a-data-design-example.md), [Copying, Renaming And Deleting Files](3-14-copying-renaming-and-deleting-files.md), [Deleting Data From A Table](4-15-deleting-data-from-a-table.md)

## Extracted Text

```text
[PDF page 63; printed page 63]
3.4 Retrieving A Filename from A Path


It is often very useful to separate a filename from its directory path, and the basename()
function in PHP allows you to do exactly that. This function takes a complete file path
and returns only the filename.


For example, the following code assigns index.html to the variable $filename:




$filename = basename("/home/james/docs/index.html");
If you provide a directory path instead of a file path, the function will return the
rightmost directory name. Here’s an example that assigns the value docs to $dir:


$dir = basename("/home/james/docs");
Essentially, basename() retrieves the last string segment after the rightmost slash (/).


If you don’t want the file extension (or suffix), you can strip it off by providing the suffix
as a second argument to the basename() function. For example, the following code
assigns myfile to $filename, removing the .doc extension:


$filename = basename("/home/james/docs/myfile.doc", ".doc");
```
