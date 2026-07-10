---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "96-98"
printed_pages: "96-98"
section: "Telling A File from A Directory"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "directory"
  - "filename"
  - "regular"
  - "entry"
  - "path"
  - "dir"
  - "when"
  - "you"
  - "echo"
  - "whether"
  - "checks"
---

# Telling A File from A Directory

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 96-98 | printed pages 96-98

Related sections: [Retrieving A Filename from A Path](3-4-retrieving-a-filename-from-a-path.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Working With Directory Objects](3-17-working-with-directory-objects.md), [Testing For The End Of A File](3-10-testing-for-the-end-of-a-file.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Mario and Danica: A Data Design Example](../../information-systems-622-study-guide/sections/3-1-2-mario-and-danica-a-data-design-example.md)

## Extracted Text

```text
[PDF page 96; printed page 96]
3.18 Telling A File from A Directory


In PHP, the is_dir() and is_file() functions are useful when you need to determine
whether a particular path refers to a directory or a regular file. This is particularly
important when you're dealing with file systems that might contain both types of items,
such as in a recursive directory traversal or when you want to display only the files in a
folder.

Functions to Test File Types:

   1. is_dir(): This function checks whether the given path is a directory.

           o   Returns true if the path is a directory.

           o   Returns false if it's not a directory (including if it's a regular file or doesn't
               exist).

   2. is_file(): This function checks whether the given path is a regular file.

           o   Returns true if the path is a regular file.

           o   Returns false if it's not a regular file (such as a directory or a symlink).

Example Code:



                                              96

[PDF page 97; printed page 97]
Here’s a simple example of using both functions to check if a given filename is a
directory, a regular file, or neither:

$filename = "myfile";



if (is_dir($filename)) {

    echo "$filename is a directory.";

} elseif (is_file($filename)) {

    echo "$filename is a file.";

} else {

    echo "$filename is neither a directory nor a file.";

}

Explanation:

     •     is_dir($filename): Checks if myfile is a directory.

     •     is_file($filename): If it’s not a directory, checks if myfile is a regular file.

     •     else: If neither condition is true, it concludes that the filename is neither a
           directory nor a regular file (it could be something else like a symlink, a special
           file, or the file doesn’t exist).

Use Case in Directory Traversal:

This is especially useful when traversing directories recursively. For example, when you
need to process files in subdirectories, you might want to check whether an entry is a
file or a directory before processing it:

$directory = "/path/to/directory";

$handle = opendir($directory);



while ($entry = readdir($handle)) {

    if ($entry != "." && $entry != "..") {


                                                  97

[PDF page 98; printed page 98]
        $fullPath = $directory . "/" . $entry;

        if (is_dir($fullPath)) {

            echo "$entry is a directory.<br>";

            // You can process the directory (e.g., open it, recurse into it)

        } elseif (is_file($fullPath)) {

            echo "$entry is a file.<br>";

            // You can process the file

        }

    }

}

closedir($handle);

Summary:

        •   is_dir() checks if the given path is a directory.

        •   is_file() checks if the given path is a regular file.

        •   Both functions return true or false, helping you make decisions in your code
            about how to handle files and directories.




                                                   98
```
