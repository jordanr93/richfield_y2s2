---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "125-127"
printed_pages: "125-127"
section: "Handling Errors"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "error"
  - "conn"
  - "mysqli"
  - "connection"
  - "handling"
  - "database"
  - "servername"
  - "username"
  - "password"
  - "connect"
  - "failed"
  - "echo"
---

# Handling Errors

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 125-127 | printed pages 125-127

Related sections: [Making A Connection](4-18-making-a-connection.md), [Reading Data](4-20-reading-data.md), [Batch Processing](../../information-systems-622-study-guide/sections/4-6-2-batch-processing.md), [DATA CONTROL](../../information-systems-622-study-guide/sections/3-9-data-control.md), [DBMS COMPONENTS](../../information-systems-622-study-guide/sections/3-2-dbms-components.md), [Data Structures](../../information-systems-622-study-guide/sections/3-1-1-data-structures.md)

## Extracted Text

```text
[PDF page 125; printed page 125]
4.19 Handling Errors




Connecting with Error Handling




$servername = "localhost";

$username = "root";

$password = "";

$database = "mydatabase";



// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);


                                            125

[PDF page 126; printed page 126]
// Check connection

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}

echo "Connected successfully";




Error Handling for Queries




// Example query

$sql = "SELECT * FROM some_table";

$result = mysqli_query($conn, $sql);



// Check if query failed

if (!$result) {

    echo "Query failed: " . mysqli_error($conn);

} else {

    // Process the result here

}



// Close the connection

mysqli_close($conn);


                                            126

[PDF page 127; printed page 127]
Using a Custom Error Handling Function



function handleDbError($conn) {

    echo "Error: " . mysqli_error($conn);

    // Optionally log the error or send an email to the webmaster

  // error_log("Database error: " . mysqli_error($conn), 3,
"/var/log/my_app_errors.log");

}



$servername = "localhost";

$username = "root";

$password = "";

$database = "mydatabase";



// Create connection

$conn = mysqli_connect($servername, $username, $password, $database);



// Check connection

if (!$conn) {

    die("Connection failed: " . mysqli_connect_error());

}

echo "Connected successfully";



                                            127
```
