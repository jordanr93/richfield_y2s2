---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "57-58"
printed_pages: "57-58"
section: "Review Questions"
chapter: "Topic 2: Session Controls and Cookies"
keywords:
  - "user"
  - "php"
  - "session"
  - "sessions"
  - "login"
  - "username"
  - "cookie"
  - "steps"
  - "cookies"
  - "create"
  - "successful"
  - "value"
---

# Review Questions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 57-58 | printed pages 57-58

Related sections: [Review Questions](10-review-questions.md), [Review Questions](37-review-questions.md), [Review Questions](../../programming-622-study-guide/sections/35-review-questions.md), [Review Questions](../../big-data-iot-600-study-guide/sections/138-review-questions.md), [Combining Cookies And Sessions](2-4-combining-cookies-and-sessions.md), [Sessions](2-2-sessions.md)

## Extracted Text

```text
[PDF page 57; printed page 57]
Review Questions


Exercise 1: Saving State in PHP (Sessions & Cookies)



Create a simple login system using PHP sessions. The system should:

- Allow a user to log in with a username and password (hardcoded for simplicity).

- Store the username in a session variable after successful login.

- Redirect the user to a welcome page displaying their username.

- Provide a logout option that destroys the session and redirects the user to the login
page.




Exercise 2: Creating, Reading, and Deleting Cookies




Write a PHP script that:



                                            57

[PDF page 58; printed page 58]
- Sets a cookie named `user_preference` with a value of the user’s favorite color.

- Reads and displays the cookie value on the page.

- Provides a button to delete the cookie and refresh the page.




Exercise 3: PHP Session Handling Functionalities

Create a multi-step form (e.g., registration with three steps: Personal Info, Contact
Details, and Account Details) that uses PHP sessions to retain data between steps. Ensure
that:

- The user can navigate back and forth between steps without losing entered data.

- The final step displays a summary of all entered information before submitting.

- A session is destroyed upon successful submission.




                                           58
```
