---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "99-101"
printed_pages: "99-101"
section: "Review Questions"
chapter: "Topic 3: File System Management"
keywords:
  - "file"
  - "task"
  - "txt"
  - "create"
  - "files"
  - "practical"
  - "directory"
  - "php"
  - "display"
  - "new"
  - "content"
  - "script"
---

# Review Questions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 99-101 | printed pages 99-101

Related sections: [Review Questions](10-review-questions.md), [Review Questions](17-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../machine-learning-600-study-guide/sections/2-7-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/09-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/19-review-questions.md)

## Extracted Text

```text
[PDF page 99; printed page 99]
Review Questions



Practical Task 1: Demonstrating File and Directory Handling in PHP

   1. Task: Create a PHP script that checks if a file exists. If it exists, display its size and
       last modified date. If it doesn't exist, create a new file with some content.

           o   Check for the existence of a file named example.txt.

           o   If it exists, display the file's size and last modified date.

           o   If it doesn’t exist, create example.txt and write the text "Hello, this is a
               new file!" to it.




Practical Task 2: Retrieving Directory Information

   2. Task: Create a PHP script that lists all files in a directory.

           o   Create a directory named files_dir (if it doesn’t exist) and populate it with
               some text files (e.g., file1.txt, file2.txt, file3.txt).

           o   List all files in the files_dir directory.

           o   Display whether the directory is empty or contains files.




Practical Task 3: Reading and Writing to Files

   3. Task: Write a PHP script that reads data from a file and then appends additional
       content.

           o   Create a file called data.txt with some initial content (e.g., "Initial data").

           o   Read the content of data.txt line by line.

                                                99

[PDF page 100; printed page 100]
           o   Append new content ("This is new data added.") to the file.




Practical Task 4: File Error Handling

   4. Task: Create a PHP script that safely opens a file for reading and writes an error
       message if the file cannot be opened.

           o   Try to open a file called nonexistent.txt for reading.

           o   Use error handling (e.g., if statement) to check if the file was successfully
               opened.

           o   If the file does not exist or cannot be opened, display a custom error
               message.




Practical Task 5: Counting Visits to a Page Using a Hit Counter

   5. Task: Implement a simple hit counter that stores the number of page visits in a
       file.

           o   Create a file called counter.txt that holds the initial value of 0 (indicating
               zero visits).

           o   Each time the page is visited, read the current value, increment it, and
               write the new value back to the file.

           o   Display the visitor number (e.g., "You are visitor #5.") on the page.




Practical Task 6: Working with CSV Files




                                            100

[PDF page 101; printed page 101]
   6. Task: Create a PHP script to read data from a CSV file and display the contents in
       an HTML table.

          o   Create a data.csv file with sample comma-separated values (e.g.,
              name,age,city).

          o   Open the CSV file and read its content line by line.

          o   Display each row of the CSV file in an HTML table.




Practical Task 7: Reading and Writing Binary Data

   7. Task: Write a PHP script that reads and writes binary data to a file.

          o   Open a binary file (e.g., an image or a small binary file).

          o   Read its content and display the length of the binary data.

          o   Write some new binary data into a different file.




                                           101
```
