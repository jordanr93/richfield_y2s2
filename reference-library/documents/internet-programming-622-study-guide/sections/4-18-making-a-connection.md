---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "124-124"
printed_pages: "124-124"
section: "Making A Connection"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "connection"
  - "database"
  - "making"
  - "servername"
  - "username"
  - "password"
  - "internet"
  - "connecting"
  - "mysql"
  - "procedural"
  - "style"
  - "php"
---

# Making A Connection

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 124-124 | printed pages 124-124

Related sections: [Handling Errors](4-19-handling-errors.md), [Making Complex Data Understandable](../../big-data-iot-600-study-guide/sections/102-making-complex-data-understandable.md), [Mario and Danica: A Data Design Example](../../information-systems-622-study-guide/sections/3-1-2-mario-and-danica-a-data-design-example.md), [Connecting To MySQL From PHP](4-17-connecting-to-mysql-from-php.md), [Creating A New Database](4-10-creating-a-new-database.md), [Enabling Faster Decision-Making](../../big-data-iot-600-study-guide/sections/105-enabling-faster-decision-making.md)

## Extracted Text

```text
[PDF page 124; printed page 124]
4.18 Making A Connection


Connecting to MySQL Database with Procedural Style in PHP (Latest Version)



$servername = "localhost";

$username = "root";

$password = "";

$database = "mydatabase";



// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);




                                           124
```
