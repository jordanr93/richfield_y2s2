---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "66-67"
printed_pages: "66-67"
section: "Opening A File With fopen()"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "open"
  - "php"
  - "will"
  - "you"
  - "pointer"
  - "reading"
  - "fopen"
  - "write"
  - "mode"
  - "path"
  - "txt"
---

# Opening A File With fopen()

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 66-67 | printed pages 66-67

Related sections: [Opening And Closing Files](3-5-opening-and-closing-files.md), [Telling A File from A Directory](3-18-telling-a-file-from-a-directory.md), [Testing For The End Of A File](3-10-testing-for-the-end-of-a-file.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [How to run PHP with XAMMP](64-how-to-run-php-with-xammp.md), [Random Access To File Data](3-13-random-access-to-file-data.md)

## Extracted Text

```text
[PDF page 66; printed page 66]
3.6 Opening A File With fopen()

Here's an updated and refined version of the text you provided, with clearer
explanations and improved flow:


The fopen() function in PHP is used to open a file and return a file handle associated
with that file. This file handle acts as a pointer, allowing you to read from or write to the
file.
Syntax:
$handle = fopen("filename", "mode");
    •   First Argument (filename): Specifies the path of the file you want to open. This
        can be:
           o      A simple filename (e.g., "data.txt"), which tells PHP to look in the current
                  directory.
           o      A relative path (e.g., "./data.txt"), pointing to the file in a specific
                  subdirectory.
           o      An absolute path (e.g., "/myfiles/data.txt"), specifying the full path to the
                  file.
           o      A URL to open a file on a remote server (e.g.,
                  http://www.example.com/index.html or


                                                 66

[PDF page 67; printed page 67]
                ftp://ftp.example.com/pub/index.txt). Note that remote files can only be
                opened for reading—you cannot write to them.
   •   Second Argument (mode): Specifies the mode in which the file is opened. It
       defines how the file will be used (read, write, append, etc.). Here are the most
       common modes:
           o    "r": Open the file for reading only. The file pointer is placed at the
                beginning of the file.
           o    "r+": Open the file for reading and writing. The file pointer is placed at
                the beginning of the file.
           o    "w": Open the file for writing only. If the file exists, its content will be
                erased; if it doesn't exist, PHP will attempt to create it.
           o    "w+": Open the file for reading and writing. Any existing content is
                erased, and if the file doesn't exist, PHP will attempt to create it.
           o    "a": Open the file for appending only. Data is written to the end of the
                file. If the file doesn't exist, PHP will attempt to create it.
           o    "a+": Open the file for reading and appending. If the file doesn't exist,
                PHP will attempt to create it.
File Pointer:
PHP uses an internal file pointer to track where the next read or write operation should
occur. The pointer's position depends on the mode used to open the file.
Binary and Text Modes:
You can append either 'b' (binary) or 't' (text) to the mode string to specify how the file
should be treated. This is especially useful when working with files across different
operating systems.
   •   Binary mode ('b') ensures that the file is treated as a binary file, preventing PHP
       from making any line-ending conversions.
   •   Text mode ('t') is typically used when working with text files, allowing PHP to
       convert end-of-line characters between different operating systems.
For example:


                                               67
```
