---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "132-133"
printed_pages: "132-133"
section: "Review questions"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "customers"
  - "sql"
  - "table"
  - "customerid"
  - "orders"
  - "john"
  - "doe"
  - "rdbms"
  - "database"
  - "int"
  - "key"
  - "varchar"
---

# Review questions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 132-133 | printed pages 132-133

Related sections: [Review Questions](../../programming-622-study-guide/sections/09-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/19-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/35-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/51-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../machine-learning-600-study-guide/sections/2-7-review-questions.md)

## Extracted Text

```text
[PDF page 132; printed page 132]
Review questions


Exercise 1: RDBMS

Describe what a Relational Database Management System (RDBMS) is and list three
examples of popular RDBMS software.




Exercise 2: Writing Complex SQL Queries

Given the following database schema for an E-commerce System:

CREATE TABLE Customers (

     CustomerID INT PRIMARY KEY AUTO_INCREMENT,

     Name VARCHAR(100),

     Email VARCHAR(100) UNIQUE,

     Country VARCHAR(50)

);




CREATE TABLE Orders (

     OrderID INT PRIMARY KEY AUTO_INCREMENT,

     CustomerID INT,

     OrderDate DATE,

     TotalAmount DECIMAL(10,2),

     FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)


                                          132

[PDF page 133; printed page 133]
);

Write an SQL query to:

     •   Retrieve all customers who have placed at least one order.
     •   List all orders along with the corresponding customer's name.
     •   Get the total amount spent by each customer (use GROUP BY).

Exercise 3: Manipulating Tables in a Database




Modify the Customers table to:

     •   Add a new column Phone Number that accepts up to 15 characters.
     •   Change the Country column to accept up to 100 characters.

Write the necessary SQL statements.




Exercise 4: INSERT, UPDATE, and DELETE Records




Using the Customers and Orders tables above, write SQL statements to:

     •   Insert a new customer named "John Doe" with an email johndoe@example.com
         from "USA".
     •   Update the email of "John Doe" to john.doe@newmail.com.
     •   Delete all orders associated with the customer "John Doe" before removing them
         from the Customers table.




                                           133
```
