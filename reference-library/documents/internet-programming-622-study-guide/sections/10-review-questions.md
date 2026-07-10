---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "40-41"
printed_pages: "40-41"
section: "Review Questions"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "php"
  - "form"
  - "create"
  - "email"
  - "implement"
  - "password"
  - "file"
  - "name"
  - "age"
  - "validation"
  - "ensure"
  - "fields"
---

# Review Questions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 40-41 | printed pages 40-41

Related sections: [Review Questions](37-review-questions.md), [Review Questions](17-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Review Questions](../../machine-learning-600-study-guide/sections/2-7-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/09-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/19-review-questions.md)

## Extracted Text

```text
[PDF page 40; printed page 40]
Review Questions



      Exercise 1

      Create a PHP form that collects a user's name, email, and age. Implement
      validation to ensure:

              - The name and email fields are not empty.

              - The email is in a valid format.

              - The age is a number between 18 and 60.

              - Display appropriate error messages if validation fails.




      Exercise 2

      Develop a secure PHP login form with username and password fields. Implement
      the following security measures:

     - Prevent SQL injection using prepared statements.

     - Sanitize input data to avoid XSS attacks.

     - Use `password_hash()` for storing passwords and `password_verify()` for checking
   passwords.

      Exercise 3

      Create a PHP form with a multi-select dropdown for selecting favorite
      programming languages. Ensure that:

              - The PHP script can recognize multiple selected values.




                                            40

[PDF page 41; printed page 41]
       - It properly processes and displays the selected values after form
       submission.

Exercise 4

Create a file upload form in PHP that allows users to upload an image. Implement
the following requirements:

       - Only allow files with extensions `.jpg`, `.jpeg`, and `.png`.

       - Restrict the file size to a maximum of 2MB.

       - Move the uploaded file to a `uploads/` directory and display the uploaded
       image on the page.

       - Show appropriate error messages if conditions are not met.




                                     41
```
