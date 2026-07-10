---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "69-72"
printed_pages: "69-72"
section: "Reading and Writing To Files"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "handle"
  - "txt"
  - "reads"
  - "fopen"
  - "fclose"
  - "line"
  - "contents"
  - "files"
  - "you"
  - "outputs"
  - "reading"
---

# Reading and Writing To Files

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 69-72 | printed pages 69-72

Related sections: [Reading And Writing Entire Files](3-12-reading-and-writing-entire-files.md), [Reading and Writing Strings Of Characters](3-9-reading-and-writing-strings-of-characters.md), [Opening And Closing Files](3-5-opening-and-closing-files.md), [Copying, Renaming And Deleting Files](3-14-copying-renaming-and-deleting-files.md), [Getting Information on Files](3-2-getting-information-on-files.md), [Reading One Line At A Time](3-11-reading-one-line-at-a-time.md)

## Extracted Text

```text
[PDF page 69; printed page 69]
3.8 Reading and Writing To Files


PHP provides a variety of functions to interact with files, allowing you to read and write
data in different ways depending on your specific needs. Below is a breakdown of the
functions you've mentioned, along with examples and use cases:

Reading from a File:

   fread()
   Reads a string of characters from a file. You specify the length of characters to be

                                             69

[PDF page 70; printed page 70]
read.
Example:

$handle = fopen("file.txt", "r");

$content = fread($handle, filesize("file.txt"));

fclose($handle);

fgetc()
Reads a single character at a time from the file. This is useful when you want to
process the file character by character.
Example:

$handle = fopen("file.txt", "r");

$char = fgetc($handle);

fclose($handle);

fgets()
Reads a single line from the file, stopping at the end of the line or the length you
specify.
Example:

$handle = fopen("file.txt", "r");

$line = fgets($handle);

fclose($handle);

fgetcsv()
Reads a line of comma-separated values (CSV) from the file. This is useful for reading
CSV files.
Example:

$handle = fopen("data.csv", "r");

while (($data = fgetcsv($handle)) !== FALSE) {

    print_r($data); // Process each CSV line

}

fclose($handle);

                                          70

[PDF page 71; printed page 71]
   file()
   Reads the entire file into an array, with each line being an element in the array.
   Example:

   $lines = file("file.txt");

   print_r($lines); // Outputs array of lines from file

   file_get_contents()
   Reads the entire file into a string. It’s simpler than using fread() and is great for
   smaller files.
   Example:

   $content = file_get_contents("file.txt");

   echo $content; // Outputs the file's content

   fpassthru()
   Outputs the contents of an open file directly to the browser.
   Example:

   $handle = fopen("image.jpg", "r");

   header("Content-Type: image/jpeg");

   fpassthru($handle);

   fclose($handle);

   readfile()
   Similar to fpassthru(), this function outputs a file's contents directly.
   Example:

   readfile("file.txt"); // Outputs the contents of the file to the browser



Writing to a File:

   fwrite():

   Writes a string of characters to a file. It’s used when you want to write to a file
   opened in write or append mode.
   Example:


                                             71

[PDF page 72; printed page 72]
   $handle = fopen("file.txt", "w");

   fwrite($handle, "Hello, world!");

   fclose($handle);

   file_put_contents()
   Writes an entire string to a file without needing to open it first. It’s a simpler
   alternative to fwrite().
   Example:

   file_put_contents("file.txt", "Hello, world!");



File Pointer Functions:

   fseek()
   Moves the file pointer to a specific location within the file. This is useful for random
   access to a file.
   Example:

   $handle = fopen("file.txt", "r");

   fseek($handle, 10); // Moves pointer to the 10th byte

   $content = fread($handle, 5);

   fclose($handle);

   ftell()
   Returns the current position of the file pointer.
   Example:

   $handle = fopen("file.txt", "r");

   fseek($handle, 10); // Moves pointer to 10th byte

   echo ftell($handle); // Outputs current position of file pointer

   fclose($handle);

   rewind()
   Resets the file pointer to the beginning of the file.
   Example:

                                             72
```
