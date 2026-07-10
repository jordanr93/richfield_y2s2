---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "90-92"
printed_pages: "90-92"
section: "Other Directory Functions"
chapter: "Topic 3: File System Management"
keywords:
  - "directory"
  - "home"
  - "matt"
  - "you"
  - "chdir"
  - "current"
  - "handle"
  - "usage"
  - "will"
  - "newfolder"
  - "rmdir"
  - "functions"
---

# Other Directory Functions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 90-92 | printed pages 90-92

Related sections: [Working With Directory Objects](3-17-working-with-directory-objects.md), [Telling A File from A Directory](3-18-telling-a-file-from-a-directory.md), [Working With Directories](3-15-working-with-directories.md), [Binary Tree Traversal and Functions as Parameters](../../programming-622-study-guide/sections/9-6-binary-tree-traversal-and-functions-as-parameters.md), [Containers and the Functions begin and end](../../programming-622-study-guide/sections/2-4-containers-and-the-functions-begin-and-end.md), [Opening And Closing Files](3-5-opening-and-closing-files.md)

## Extracted Text

```text
[PDF page 90; printed page 90]
3.16 Other Directory Functions


PHP provides several functions for managing directories. These functions allow you to
change the current directory, create and remove directories, and navigate through
directory entries.

1. rewinddir()

The rewinddir() function resets the internal pointer of a directory handle to the first
entry in the directory. This is the directory counterpart of the rewind() function for files.

Usage:

$handle = opendir("/home/matt/images");

while ($file = readdir($handle)) {

                                             90

[PDF page 91; printed page 91]
    echo $file . "<br>";

}

rewinddir($handle); // Reset the directory pointer to the start

This is useful when you want to re-read the entries of a directory from the beginning
after iterating through it.

2. chdir()

The chdir() function changes the current directory. After calling chdir(), relative file
paths will be resolved starting from the new current directory.

Usage:

chdir("/home/matt/myfolder");

$handle = fopen("myfile.txt", "r"); // Opens /home/matt/myfolder/myfile.txt

You can also use chdir() to navigate to a directory and open files in that directory
without specifying their full path. It returns true if the directory was successfully
changed, or false if there was an error (e.g., directory not found).

3. getcwd()

The getcwd() function returns the current directory, which is the directory where PHP
will look for files by default.

Usage:

chdir("/home/matt/newfolder");

echo getcwd(); // Displays "/home/matt/newfolder"

This function is useful if you want to know the current directory, especially if you're
dealing with relative file paths.

4. mkdir()

The mkdir() function creates a new directory at the specified path. If the parent
directory doesn't exist, the function will fail. You can also specify permissions for the
new directory.

Usage:


                                             91

[PDF page 92; printed page 92]
mkdir("/home/matt/newfolder"); // Creates the "newfolder" directory

You can also set permissions using the second argument (mode):

mkdir("/home/matt/newfolder", 0777); // Creates directory with full permissions

5. rmdir()

The rmdir() function deletes an empty directory. The directory must be empty for
rmdir() to succeed. If the directory isn't empty, the function will fail and return false.

Usage:

rmdir("/home/matt/myfolder"); // Removes "myfolder" directory

If the directory isn't empty or PHP doesn't have the required permissions, rmdir() will
return false.

6. dirname()

The dirname() function returns the directory portion of a path, excluding the filename. It
can be helpful when you want to extract the directory path from a full file path.

Usage:

$path = "/home/james/docs/index.html";

$directoryPath = dirname($path); // Returns "/home/james/docs"

$filename = basename($path); // Returns "index.html"

dirname() extracts the directory part, while basename() extracts the filename part.



Summary of Directory Functions:

   •     rewinddir(): Resets the internal directory pointer to the first entry.

   •     chdir(): Changes the current directory.

   •     getcwd(): Returns the current working directory.

   •     mkdir(): Creates a new directory.

   •     rmdir(): Deletes an empty directory.


                                              92
```
