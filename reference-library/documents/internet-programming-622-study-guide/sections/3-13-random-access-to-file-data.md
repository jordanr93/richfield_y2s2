---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "83-84"
printed_pages: "83-84"
section: "Random Access To File Data"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "pointer"
  - "fseek"
  - "you"
  - "characters"
  - "move"
  - "position"
  - "handle"
  - "offset"
  - "specified"
  - "seek"
  - "current"
---

# Random Access To File Data

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 83-84 | printed pages 83-84

Related sections: [Analyze the Data to Extract Insights](../../big-data-iot-600-study-guide/sections/86-analyze-the-data-to-extract-insights.md), [Example: Using Data Visualization to Communicate Strategy](../../big-data-iot-600-study-guide/sections/109-example-using-data-visualization-to-communicate-strategy.md), [Use Technology to Support Data-Driven Decisions](../../big-data-iot-600-study-guide/sections/89-use-technology-to-support-data-driven-decisions.md), [DATA STORAGE AND ACCESS](../../information-systems-622-study-guide/sections/3-8-data-storage-and-access.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md)

## Extracted Text

```text
[PDF page 83; printed page 83]
3.13 Random Access To File Data


When working with files in PHP, the functions we've covered so far (like fgets(), fread(),
etc.) allow you to manipulate data sequentially—reading or writing the file in the same
order the content is arranged. However, sometimes you may need to skip around the
file's contents. For instance, you might want to search for a specific string in a file, then
return to the beginning of the file to search for another string. While this is easy with
small files that you can read entirely into memory using file_get_contents(), it’s not
practical for large files. Fortunately, PHP allows you to move the file pointer within an
open file, enabling you to read or write from any point.

PHP provides three functions to control the file pointer:

   •   fseek() — Repositions the file pointer to a specified position in the file.

   •   rewind() — Moves the file pointer back to the start of the file.

   •   ftell() — Returns the current position of the file pointer.

fseek() Function

The fseek() function moves the file pointer to a specified position. It requires two
arguments: the file handle and an integer offset (the number of characters to move
from the starting point). Here's an example where the file pointer is moved to the



                                             83

[PDF page 84; printed page 84]
eighth character of the file (seven characters after the first one), and then the next five
characters are displayed:

// hello_world.txt contains the characters "Hello, world!"

$handle = fopen("hello_world.txt", "r");

fseek($handle, 7); // Move the pointer to the 8th character (7 characters from the start)

echo fread($handle, 5); // Displays "world"

fclose($handle);

You can also specify how the offset is calculated by passing a third optional argument to
fseek(), using one of the following constants:

   •   SEEK_SET — Sets the pointer to the start of the file plus the specified offset (this
       is the default).

   •   SEEK_CUR — Sets the pointer to the current position plus the specified offset.

   •   SEEK_END — Sets the pointer to the end of the file plus the specified offset (use
       with a negative offset to move backward from the end).

Here’s an example using SEEK_CUR to move the pointer forward by 5 characters from
the current position:

fseek($handle, 5, SEEK_CUR); // Move 5 characters forward from the current position

fseek() returns 0 if it successfully moves the pointer, or -1 if there’s an error. Note that
fseek() doesn’t work with files accessed via remote hosts over HTTP or FTP (e.g., using
fopen("http://www.example.com")).

rewind() Function

If you want to move the file pointer back to the beginning of the file, you can use the
rewind() function. This function does the same thing as calling fseek($handle, 0) but is a
more convenient shorthand:

rewind($handle); // Moves the pointer to the start of the file

ftell() Function

The ftell() function returns the current position of the file pointer, in terms of the
number of characters from the start of the file. Here’s an example:

                                             84
```
