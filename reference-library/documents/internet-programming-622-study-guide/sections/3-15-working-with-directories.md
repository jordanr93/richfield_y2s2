---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "87-89"
printed_pages: "87-89"
section: "Working With Directories"
chapter: "Topic 3: File System Management"
keywords:
  - "directory"
  - "handle"
  - "php"
  - "file"
  - "contents"
  - "directories"
  - "functions"
  - "you"
  - "opendir"
  - "readdir"
  - "files"
  - "can"
---

# Working With Directories

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 87-89 | printed pages 87-89

Related sections: [Working With Directory Objects](3-17-working-with-directory-objects.md), [Understanding Files And Directories](3-1-understanding-files-and-directories.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Topic 3: File System Management](3-topic-3-file-system-management.md)

## Extracted Text

```text
[PDF page 87; printed page 87]
3.15 Working With Directories


Working with Directories in PHP

PHP provides several functions for managing directories. These functions are somewhat
like the file-handling functions, but they work with directories instead of files. Some
functions use a directory handle, while others take the directory path as a string.

Directory Handle

A directory handle is like a file handle. It's a special variable that refers to an open
directory. You can obtain a directory handle using the opendir() function:

$handle = opendir("/home/james");

If there's an issue opening the directory (e.g., if it doesn't exist), opendir() returns false.

You can close a directory using the closedir() function, passing it the directory handle:

closedir($handle);

Reading Directory Contents

The readdir() function allows you to read the contents of a directory. It expects a
directory handle and returns the name of the next entry in the directory:

$filename = readdir($handle);

Each directory contains entries for files, subdirectories, and special entries:

    •   . represents the directory itself.

    •   .. represents the parent directory.

PHP maintains an internal pointer for the directory, similar to how a file pointer works.
Each call to readdir() moves this pointer to the next entry.

Example: Listing the Contents of a Directory



                                              87

[PDF page 88; printed page 88]
You can use the functions mentioned above to list the contents of a directory. Below is
an example script that lists all files and folders inside a specified directory. You can save
this script as dir_list.php and test it on your web server.

<!DOCTYPE html>

<html lang="en">

<head>

  <title>Listing the contents of a directory</title>

  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>Listing the contents of a directory</h1>

  <?php

    $dirPath = "/home/matt/images"; // Change this to your directory path

    if (!( $handle = opendir($dirPath) )) {

         die("Cannot open the directory.");

    }

  ?>

  <p><?php echo $dirPath ?> contains the following files and folders:</p>

  <ul>

  <?php

    while ($file = readdir($handle)) {

         if ($file != "." && $file != "..") {

             echo "<li>$file</li>";

         }

    }

                                                88

[PDF page 89; printed page 89]
    closedir($handle);

  ?>

  </ul>

</body>

</html>

How It Works:

    1. opendir() opens the specified directory ($dirPath).

    2. readdir() reads each entry in the directory. It returns the name of each file or
       folder, including . and ...

    3. We filter out . and .. using an if statement to avoid listing the current and parent
       directory.

    4. closedir() closes the directory handle once we're done.

Output

This script will output a list of the files and folders in the specified directory
(/home/matt/images) as an unordered list (<ul>).

Result Example

If the directory contains files like image1.jpg, image2.png, and a subdirectory subfolder,
the output might look like this:

/home/matt/images contain the following files and folders:

- image1.jpg

- image2.png

- subfolder



Summary of Functions:

    •    opendir(): Opens a directory and returns a handle.

    •    readdir(): Reads the next entry in a directory.

                                               89
```
