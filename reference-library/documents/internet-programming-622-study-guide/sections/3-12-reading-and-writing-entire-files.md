---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "80-82"
printed_pages: "80-82"
section: "Reading And Writing Entire Files"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "lines"
  - "line"
  - "contents"
  - "files"
  - "include"
  - "you"
  - "array"
  - "reading"
  - "writing"
  - "can"
  - "open"
---

# Reading And Writing Entire Files

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 80-82 | printed pages 80-82

Related sections: [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Opening And Closing Files](3-5-opening-and-closing-files.md), [Reading and Writing Strings Of Characters](3-9-reading-and-writing-strings-of-characters.md), [Copying, Renaming And Deleting Files](3-14-copying-renaming-and-deleting-files.md), [Reading One Line At A Time](3-11-reading-one-line-at-a-time.md), [Getting Information on Files](3-2-getting-information-on-files.md)

## Extracted Text

```text
[PDF page 80; printed page 80]
3.12 Reading And Writing Entire Files


Writing code to read a file line by line, or string by string, can be tedious. Fortunately,
PHP provides several functions that allow you to access the complete contents of a file
in one go, making it easier to work with smaller files. These functions include:

     •   file() — Reads a whole file into an array, without needing to open it.

     •   file_get_contents() and file_put_contents() — For reading from and writing to a
         file without needing to open it.

     •   fpassthru() — Displays the contents of an open file.

     •   readfile() — Displays the contents of a file without needing to open it.




                                              80

[PDF page 81; printed page 81]
Since these functions read the entire file into memory at once, they are best suited for
relatively small files (a few MB at most). For large files, such as a 100MB text file, it’s
more efficient to use fread() or fgets() to read and process the file in smaller chunks.

file() Function

The file() function reads the contents of a file into an array, with each element
containing one line from the file. It takes the filename as its only argument and returns
an array with the lines of the file. Here’s an example:

$lines = file("/home/chris/myfile.txt");

Each element of the array will contain one line from the file, including the newline
character at the end of each line. The function automatically handles opening, reading,
and closing the file, so you don’t need to manage the file handle manually.

You can also pass flags as the second parameter to modify the behavior of file(). Here
are some useful flags:

    Flag                       Description

    FILE_USE_INCLUDE_PATH      Search for the file in the include path (see Chapter 20 for
                               more on include paths).

    FILE_IGNORE_NEW_LINES Removes the newline characters from the end of each
                          line in the array.

    FILE_SKIP_EMPTY_LINES      Skips empty lines in the file.

You can combine these flags using the bitwise OR operator. For example, the following
code reads a file, looking for it in the include path and ignoring any empty lines:

$lines = file("myfile.txt", FILE_USE_INCLUDE_PATH | FILE_SKIP_EMPTY_LINES);

You can also use file() to fetch files from remote servers:

$lines = file("http://www.example.com/index.html");

foreach ($lines as $line) {

     echo $line . "<br />";

}

file_get_contents() Function

                                             81

[PDF page 82; printed page 82]
file_get_contents() is similar to file(), but it returns the entire file contents as a single
string rather than an array of lines. The newline characters are included in the string:

$fileContents = file_get_contents("myfile.txt");

If there’s an issue reading the file, file_get_contents() will return false.

You can also pass the FILE_USE_INCLUDE_PATH flag and specify an offset and length to
control where the reading starts and how much of the file is read. For example, to read
23 characters from myfile.txt starting at character 17:

$fileContents = file_get_contents("myfile.txt", null, null, 17, 23);

The first two null values are placeholders for the flags and context arguments, which are
not used in this case.

file_put_contents() Function

file_put_contents() writes a string to a file. If the file exists, it will be overwritten (unless
you specify the FILE_APPEND flag). It returns the number of characters written, or false
if there’s a problem:

$numChars = file_put_contents("myfile.txt", $myString);

You can pass flags as the third argument to modify how the function behaves. The
available flags are:

  Flag                Description

  FILE_APPEND         Appends the string to the file if the file already exists, instead of
                    overwriting it.

  LOCK_EX            Locks the file before writing to it, preventing other processes from
                    writing to it simultaneously.

fpassthru() and readfile() Functions

Both fpassthru() and readfile() allow you to display the contents of a file directly in the
browser.

    •    fpassthru() requires an open file handle and outputs the file contents from the
         current file pointer onward. For example:

$numChars = fpassthru($handle);


                                               82
```
