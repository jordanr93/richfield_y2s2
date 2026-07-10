---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "93-95"
printed_pages: "93-95"
section: "Working With Directory Objects"
chapter: "Topic 3: File System Management"
keywords:
  - "directory"
  - "object"
  - "dir"
  - "handle"
  - "contents"
  - "path"
  - "php"
  - "properties"
  - "home"
  - "echo"
  - "dir-"
  - "file"
---

# Working With Directory Objects

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 93-95 | printed pages 93-95

Related sections: [Working With Directories](3-15-working-with-directories.md), [Telling A File from A Directory](3-18-telling-a-file-from-a-directory.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Other Directory Functions](3-16-other-directory-functions.md), [Retrieving A Filename from A Path](3-4-retrieving-a-filename-from-a-path.md), [Identifying Classes, Objects, and Operations](../../programming-622-study-guide/sections/1-7-identifying-classes-objects-and-operations.md)

## Extracted Text

```text
[PDF page 93; printed page 93]
3.17 Working With Directory Objects


In PHP, the Directory class offers an object-oriented approach to working with
directories. Here's how you can use this class to list directory contents, as well as some
of the key properties and methods it provides.

Creating and Using a Directory Object

   1. Creating a Directory Object: You can create a Directory object using the dir()
       function. This function takes the path to the directory you want to work with as
       an argument.

   2. $dir = dir("/home/james/docs");

   3. Directory Properties: Once the Directory object is created, it has two useful
       properties:

           o   handle: This is the directory handle, which can be used with functions like
               readdir(), rewinddir(), and closedir().

           o   path: This is the path to the directory.

Example of using these properties:

echo $dir->handle . "<br />"; // Displays the directory handle

echo $dir->path . "<br />"; // Displays "/home/james/docs"



                                             93

[PDF page 94; printed page 94]
Directory Methods

The Directory class provides three main methods:

   1. read(): This method is equivalent to readdir(), and it reads the next entry in the
       directory.

   2. rewind(): This method is equivalent to rewinddir(), and it resets the directory
       pointer to the beginning of the directory entries.

   3. close(): This method is equivalent to closedir(), and it closes the directory handle.

Example: Listing Directory Contents with Directory Object

Here’s an example of how to use the Directory class to list the contents of a directory:

<!DOCTYPE html>

<html lang="en">

<head>

  <title>Listing the contents of a directory</title>

  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>Listing the contents of a directory</h1>

  <?php

  $dirPath = "/home/matt/images";

  $dir = dir($dirPath);

  ?>


                                             94

[PDF page 95; printed page 95]
  <p><?php echo $dirPath ?> contains the following files and folders:</p>

  <ul>

    <?php

    // Read through the directory and display all entries except "." and ".."

    while ($file = $dir->read()) {

         if ($file != "." && $file != "..") {

             echo "<li>$file</li>";

         }

    }

    $dir->close(); // Close the directory handle

    ?>

  </ul>

</body>

</html>

Explanation of the Code:

   •     Creating the Directory Object: The dir() function is called with the directory path
         /home/matt/images, and it returns a Directory object.

   •     Reading the Directory: The read() method is used to read the entries in the
         directory. It returns the next entry in the directory each time it's called.

   •     Filtering Entries: In the loop, entries "." and ".." are skipped because they
         represent the current and parent directories, respectively.


                                                95
```
