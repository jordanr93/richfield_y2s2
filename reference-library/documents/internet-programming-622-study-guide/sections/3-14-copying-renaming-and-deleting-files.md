---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "85-86"
printed_pages: "85-86"
section: "Copying, Renaming And Deleting Files"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "txt"
  - "copy"
  - "rename"
  - "myfile"
  - "files"
  - "unlink"
  - "path"
  - "directory"
  - "renaming"
  - "copied"
  - "you"
---

# Copying, Renaming And Deleting Files

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 85-86 | printed pages 85-86

Related sections: [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Getting Information on Files](3-2-getting-information-on-files.md), [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Understanding Files And Directories](3-1-understanding-files-and-directories.md), [Opening And Closing Files](3-5-opening-and-closing-files.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md)

## Extracted Text

```text
[PDF page 85; printed page 85]
3.14 Copying, Renaming And Deleting Files


PHP provides several functions to manage files, such as copying, renaming, and deleting
files. These operations can be performed using the following functions:

   •   copy() — Copies a file.

   •   rename() — Renames or moves a file.

   •   unlink() — Deletes a file.

copy() Function

The copy() function copies a file from one location to another. It takes two arguments:

   1. The path to the source file.

   2. The path where the file should be copied to.

The function returns true if the copy was successful and false if there was an issue.
Here’s an example of how to use copy():

copy("./copyme.txt", "./copied.txt");

In this example, the file copyme.txt is copied to copied.txt within the same directory.



                                              85

[PDF page 86; printed page 86]
rename() Function

The rename() function allows you to rename or move a file. It works similarly to copy(),
but it also renames the file or moves it to a new location. You provide two arguments:

    1. The current path and filename.

    2. The new path and filename.

Here are two examples:

    •      Renaming a file:

    •      rename("./address.dat", "./address.backup");

This changes the name of the file address.dat to address.backup.

    •      Moving a file to a different folder:

    •      rename("/home/joe/myfile.txt", "/home/joe/archives/myfile.txt");

This moves myfile.txt from the joe folder to the archives folder.

unlink() Function

The unlink() function is used to delete files from the server. It only requires one
argument: the path to the file you want to delete. For example:

unlink("./trash.txt");

This deletes the trash.txt file from the current directory.

Error Handling

All three functions (copy(), rename(), and unlink()) will raise a warning if there’s an
issue, such as the file or directory not being found. To avoid such warnings, it’s a good
practice to check if the file or directory exists before performing any operations. You can
use the file_exists() function to check for the existence of a file or directory:

if (file_exists("./myfile.txt")) {

  copy("./myfile.txt", "./myfile_copy.txt");

} else {

  echo "File does not exist!";


                                                  86
```
