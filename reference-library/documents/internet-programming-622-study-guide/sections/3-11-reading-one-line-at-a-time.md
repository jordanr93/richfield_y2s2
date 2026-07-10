---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "79-79"
printed_pages: "79-79"
section: "Reading One Line At A Time"
chapter: "Topic 3: File System Management"
keywords:
  - "line"
  - "file"
  - "reading"
  - "read"
  - "fgets"
  - "time"
  - "when"
  - "end"
  - "characters"
  - "files"
  - "returns"
  - "can"
---

# Reading One Line At A Time

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 79-79 | printed pages 79-79

Related sections: [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Reading and Writing Strings Of Characters](3-9-reading-and-writing-strings-of-characters.md), [Reading and Writing To Files](3-8-reading-and-writing-to-files.md), [Testing For The End Of A File](3-10-testing-for-the-end-of-a-file.md), [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Time-Related Properties](3-3-time-related-properties.md)

## Extracted Text

```text
[PDF page 79; printed page 79]
3.11 Reading One Line At A Time


Reading text from a file one line at a time is often useful, especially when dealing with
data files or configuration files that contain one chunk of information per line, such as
data records or settings.

To read a line from an open file, use the fgets() function. Pass in the file handle, and
fgets() will read from the current file pointer to the end of the current line. It returns the
read characters as a string, including any end-of-line characters (such as \n or \r\n). If an
error occurs, or the end of the file is reached, it returns false.

You can also limit the number of characters read by passing an integer as the second
argument. In this case, fgets() will stop reading when it reaches that number of
characters minus one, unless it encounters the end of the line first. This can be helpful
when reading large files that might not contain line breaks.

Here’s an example that uses fgets() to read and display a three-line text file, one line at a
time. The while loop continues until fgets() returns false (which happens when the end
of the file is reached):

/* milton.txt contains:

The mind is its own place, and in itself

Can make a Heav’n of Hell, a Hell of Heav’n.

What matter where, if I be still the same,

*/



                                             79
```
