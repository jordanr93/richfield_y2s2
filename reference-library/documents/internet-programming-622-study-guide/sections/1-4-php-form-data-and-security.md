---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "28-29"
printed_pages: "28-29"
section: "PHP Form Data And Security"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "user"
  - "security"
  - "input"
  - "email"
  - "you"
  - "form"
  - "displaying"
  - "could"
  - "your"
  - "php"
  - "html"
  - "post"
---

# PHP Form Data And Security

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 28-29 | printed pages 28-29

Related sections: [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md), [PHP Form Validation](1-7-php-form-validation.md), [Topic 1: PHP and HTML Form](1-topic-1-php-and-html-form.md), [Chapter 4: Big Data Storage and Security](../../big-data-iot-600-study-guide/sections/4-chapter-4-big-data-storage-and-security.md), [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md)

## Extracted Text

```text
[PDF page 28; printed page 28]
1.4 PHP Form Data And Security


You now know how to create an HTML form and handle data sent to the server. However,
it's important to highlight a few security issues with the example script provided earlier.




Security Concerns

Displaying Passwords:

The example script displays the password that the user just entered. In a real-world
scenario, you should never display passwords. This could compromise user security.
Instead, you could send the user their password via email to remind them of it, but even
this should be done cautiously, ensuring that the email is sent securely.




Trusting User Input:

Another major security issue is passing user-entered data — such as the values in $_GET
and $_POST — straight through to a statement like echo() or print() for displaying in a
Web page. You should never trust user input on a public Web site. A malicious user might
submit form data intended to exploit vulnerabilities in your website, such as attempting
to break into your site or gain access to other users’ credentials.




For example, an attacker could submit HTML or JavaScript code that could execute
unwanted actions or steal information, known as Cross-Site Scripting (XSS) attacks.




How to Protect Your Site




                                             28

[PDF page 29; printed page 29]
To avoid these security risks, always validate or filter user input before displaying it on
your web page. Here's how you can ensure user data is safe:




Sanitize User Input:

Use built-in PHP functions to sanitize the user input, removing potentially harmful
content.




$safe_firstName = htmlspecialchars($_POST["firstName"]);

The htmlspecialchars() function converts special characters to HTML entities, preventing
malicious scripts from executing.




Validate User Input:

Make sure that the data is in the correct format. For example, if you're expecting an email
address, check that the input matches the expected pattern.




if (filter_var($_POST["emailAddress"], FILTER_VALIDATE_EMAIL)) {

    // Proceed with processing the email

} else {

    // Handle invalid email

}

Escape Data Before Displaying:



                                            29
```
