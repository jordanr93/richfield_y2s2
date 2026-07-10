---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "63-65"
printed_pages: "63-65"
section: "Opening And Closing Files"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "open"
  - "reading"
  - "writing"
  - "will"
  - "fopen"
  - "exist"
  - "handle"
  - "opened"
  - "opening"
  - "closing"
  - "you"
---

# Opening And Closing Files

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 63-65 | printed pages 63-65

Related sections: [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Reading and Writing Strings Of Characters](3-9-reading-and-writing-strings-of-characters.md), [Copying, Renaming And Deleting Files](3-14-copying-renaming-and-deleting-files.md), [Closing Files With fclose()](3-7-closing-files-with-fclose.md)

## Extracted Text

```text
[PDF page 63; printed page 63]
3.5 Opening And Closing Files




                                              63

[PDF page 64; printed page 64]
When working with files in PHP, opening a file is the first step, and this is typically done
using functions like fopen(). A file handle is essentially a pointer that represents the
open file, allowing your script to interact with it. The file handle is used in subsequent
operations (e.g., reading, writing, or closing the file).
Opening a File:
To open a file, you use the fopen() function. This function requires two parameters:
     1. File path – The path to the file you want to open.
     2. Mode – The mode in which the file should be opened (read, write, append, etc.).
Here are some common modes:
     •     r – Open a file for reading. The file must exist.
     •     w – Open a file for writing. If the file doesn't exist, it will be created. If it exists,
           its content will be erased.
     •     a – Open a file for writing. If the file doesn't exist, it will be created. If it exists,
           data will be written at the end of the file.
     •     r+ – Open a file for reading and writing. The file must exist.
     •     w+ – Open a file for reading and writing. If the file doesn't exist, it will be
           created. If it exists, its content will be erased.
     •     a+ – Open a file for reading and appending. If the file doesn't exist, it will be
           created.
Example:
$file = fopen("example.txt", "r"); // Opens file for reading
if ($file) {
    echo "File opened successfully!";
} else {
    echo "Unable to open the file.";
}
File Handle:




                                                   64

[PDF page 65; printed page 65]
Once the file is opened, the fopen() function returns a file handle. This handle is a
pointer that PHP uses to interact with the file. It is essential when performing
operations on the file (e.g., reading, writing, or closing).
Reading from a File:
Once the file is opened, you can read its contents using functions like fread(), fgets(), or
fgetcsv().
For example, using fgets() to read a file line by line:
$file = fopen("example.txt", "r");
if ($file) {
    while (($line = fgets($file)) !== false) {
        echo $line;
    }
    fclose($file); // Close the file when done
} else {
    echo "Unable to open the file.";
}
Writing to a File:
You can write to a file using the fwrite() function. Make sure the file is opened in a write
mode (w, w+, a, or a+).
$file = fopen("example.txt", "w");
if ($file) {
    fwrite($file, "Hello, World!");
    fclose($file); // Always close the file after writing
} else {
    echo "Unable to open the file.";
}
Closing a File:
After you are finished interacting with the file, you should always close it to release the
file handle and free system resources. This is done with the fclose() function.


                                                 65
```
