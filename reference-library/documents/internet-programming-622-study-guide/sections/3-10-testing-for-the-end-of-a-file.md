---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "77-78"
printed_pages: "77-78"
section: "Testing For The End Of A File"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "handle"
  - "hello"
  - "feof"
  - "world"
  - "end"
  - "returns"
  - "true"
  - "txt"
  - "characters"
  - "fread"
  - "echo"
---

# Testing For The End Of A File

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 77-78 | printed pages 77-78

Related sections: [Reading and Writing Strings Of Characters](3-9-reading-and-writing-strings-of-characters.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [Reading One Line At A Time](3-11-reading-one-line-at-a-time.md), [Telling A File from A Directory](3-18-telling-a-file-from-a-directory.md), [Containers and the Functions begin and end](../../programming-622-study-guide/sections/2-4-containers-and-the-functions-begin-and-end.md), [Foster a Culture of Continuous Improvement](../../big-data-iot-600-study-guide/sections/136-foster-a-culture-of-continuous-improvement.md)

## Extracted Text

```text
[PDF page 77; printed page 77]
3.10 Testing For The End Of A File


The feof() function serves a simple purpose: it returns true when the file pointer has
reached the end of the file (or if an error occurs) and false otherwise. It takes a single
argument — the file handle to test.

Note that feof() only returns true after the script has tried to read past the last character
in the file. For example:



                                               77

[PDF page 78; printed page 78]
// hello_world.txt contains the characters "Hello, world!"

$handle = fopen("hello_world.txt", "r");

$hello = fread($handle, 13);

echo $hello . "<br />"; // Displays "Hello, world!"

echo feof($handle) . "<br />"; // Displays "" (false)



$five_more_chars = fread($handle, 5);

echo $five_more_chars . "<br />"; // Displays "" (or possibly a newline)

echo feof($handle) . "<br />"; // Displays "1" (true)



fclose($handle);

In this example, feof() returns false immediately after reading "Hello, world!", because
the file pointer is still within the file. After trying to read 5 more characters (which are
not available), feof() then returns true, indicating the end of the file has been reached.

feof() is especially useful when combined with fread() or fgetc() inside a while loop when
you don’t know how long the file is. Here's an example of reading a file in chunks:



// hello_world.txt contains the characters "Hello, world!"

$handle = fopen("hello_world.txt", "r");

$text = "";



while (!feof($handle)) {

    $text .= fread($handle, 3); // Read 3 characters at a time

}


                                             78
```
