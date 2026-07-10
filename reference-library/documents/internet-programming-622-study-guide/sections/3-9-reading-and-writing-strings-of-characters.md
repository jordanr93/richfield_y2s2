---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "73-76"
printed_pages: "73-76"
section: "Reading and Writing Strings Of Characters"
chapter: "Topic 3: File System Management"
keywords:
  - "characters"
  - "file"
  - "handle"
  - "fread"
  - "read"
  - "string"
  - "ten"
  - "reading"
  - "number"
  - "will"
  - "writing"
  - "txt"
---

# Reading and Writing Strings Of Characters

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 73-76 | printed pages 73-76

Related sections: [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Opening And Closing Files](3-5-opening-and-closing-files.md), [Testing For The End Of A File](3-10-testing-for-the-end-of-a-file.md), [Reading One Line At A Time](3-11-reading-one-line-at-a-time.md), [Practical Application of IoT Technologies and Standards](../../big-data-iot-600-study-guide/sections/3-5-practical-application-of-iot-technologies-and-standards.md)

## Extracted Text

```text
[PDF page 73; printed page 73]
3.9 Reading and Writing Strings Of Characters




                                            73

[PDF page 74; printed page 74]
The fread() function in PHP is used to read a string of characters from a file. It takes two
arguments: the file handle and the number of characters to read. The function reads the
specified number of characters (or fewer if the end of the file is reached) and returns
them as a string. Here's an example:



$handle = fopen("data.txt", "r");

$data = fread($handle, 10);

This code reads the first ten characters from data.txt and assigns them to $data as a
string.

When working with binary files, a character is always one byte long, so reading ten
characters will read exactly ten bytes. However, when working with Unicode files, where
each character may take up multiple bytes, reading ten characters could result in
reading, for example, twenty bytes.

After calling fread(), the file pointer moves forward by the number of characters read.
So in the example above, after the function runs, the file pointer is positioned ten
characters forward from the start of the file. If you call fread() again, it will read the next
ten characters. If fewer than ten characters remain, fread() will read and return as many
characters as are left.

For reading one character at a time, you can use the fgetc() function. It takes a file
handle as its argument and returns a single character from the file, or false when the
end of the file is reached:



$one_char = fgetc($handle);

Note that fgetc() can be slow when working with large files. It's generally faster to read
several characters at once using fread() or other file-reading functions.

To write data to a file, use the fwrite() function. It requires two arguments: the file
handle and the string to write. fwrite() writes the contents of the string to the file and
returns the number of characters written (or false if there’s an error). Here's an
example:




                                              74

[PDF page 75; printed page 75]
$handle = fopen("data.txt", "w");

fwrite($handle, "ABCxyz");

The first line opens data.txt for writing, which erases any existing content. If the file
doesn't exist, PHP attempts to create it. The second line writes the string "ABCxyz" to
the beginning of the file. Similar to fread(), after writing, the file pointer moves to the
position after the written string. If you call fwrite() again, it will append the same six
characters, so the file will contain "ABCxyzABCxyz".

You can limit the number of characters written by providing a third argument. The
function will stop writing once it has written the specified number of characters (or
fewer if the string is shorter). For example:



fwrite($handle, "abcdefghij", 4);

This will write only the first four characters "abcd" to the file.

A common use of file functions in web scripts is for creating hit counters, which track
how many times a web page has been visited. Below is an example of a simple hit
counter script:



<!DOCTYPE html>

<html lang="en">

<head>

  <title>Hit counter</title>

  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>A simple hit counter</h1>

  <?php

  $counterFile = "./count.dat";


                                              75

[PDF page 76; printed page 76]
if (!file_exists($counterFile)) {

    if (!($handle = fopen($counterFile, "w"))) {

        die("Cannot create the counter file.");

    } else {

        fwrite($handle, 0);

        fclose($handle);

    }

}



if (!($handle = fopen($counterFile, "r"))) {

    die("Cannot read the counter file.");

}



$counter = (int) fread($handle, 20);

fclose($handle);

$counter++;



echo "<p>You're visitor No. $counter.</p>";



if (!($handle = fopen($counterFile, "w"))) {

    die("Cannot open the counter file for writing.");

}




                                             76
```
