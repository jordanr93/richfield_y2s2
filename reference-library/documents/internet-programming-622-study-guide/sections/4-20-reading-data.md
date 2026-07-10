---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "128-131"
printed_pages: "128-131"
section: "Reading Data"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "fruit"
  - "mysqli"
  - "name"
  - "color"
  - "conn"
  - "connection"
  - "query"
  - "table"
  - "fetch"
  - "create"
  - "database"
  - "mydatabase"
---

# Reading Data

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 128-131 | printed pages 128-131

Related sections: [Reading Data from A Table with The SELECT And SELECT … Where Clauses](4-13-reading-data-from-a-table-with-the-select-and-select-where-clauses.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Data Structures](../../information-systems-622-study-guide/sections/3-1-1-data-structures.md), [Physical Data Repository](../../information-systems-622-study-guide/sections/3-2-3-physical-data-repository.md), [Creating A Table](4-11-creating-a-table.md), [Updating Data in A Table Using The UPDATE and UPDATE … WHERE Clauses](4-14-updating-data-in-a-table-using-the-update-and-update-where-clauses.md)

## Extracted Text

```text
[PDF page 128; printed page 128]
4.20 Reading Data


Assuming you have a table fruit, you can fetch data from it as follows:



Set up the table in MySQL:



CREATE DATABASE mydatabase;

USE mydatabase;




                                            128

[PDF page 129; printed page 129]
CREATE TABLE fruit (

     id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,

     name VARCHAR(30) NOT NULL,

     color VARCHAR(30) NOT NULL,

     PRIMARY KEY (id)

);



INSERT INTO fruit (name, color) VALUES ('banana', 'yellow');

INSERT INTO fruit (name, color) VALUES ('tangerine', 'orange');

INSERT INTO fruit (name, color) VALUES ('plum', 'purple');

PHP script to display data (get_fruit.php):



<!DOCTYPE html>

<html lang="en">

<head>

     <meta charset="UTF-8">

     <title>Fruit</title>

     <link rel="stylesheet" type="text/css" href="common.css">

</head>

<body>

     <h1>Fruit</h1>

     <?php

     $servername = "localhost";

     $username = "root";


                                              129

[PDF page 130; printed page 130]
$password = "";

$database = "mydatabase";



// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);



// Check connection

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}



// SQL query to fetch data

$sql = "SELECT * FROM fruit";

$result = mysqli_query($conn, $sql);



// Check for query error

if (!$result) {

    die("Query failed: " . mysqli_error($conn));

}



// Display results

echo "<ul>";

while ($row = mysqli_fetch_assoc($result)) {




                                          130

[PDF page 131; printed page 131]
    echo "<li>A " . htmlspecialchars($row["name"]) . " is " .
htmlspecialchars($row["color"]) . "</li>";

  }

  echo "</ul>";



  // Close the connection

  mysqli_close($conn);

  ?>

</body>

</html>




                                           131
```
