---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "37-39"
printed_pages: "37-39"
section: "PHP Form Validation"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "form"
  - "user"
  - "input"
  - "have"
  - "validation"
  - "fields"
  - "php"
  - "html"
  - "just"
  - "inputs"
  - "database"
  - "can"
---

# PHP Form Validation

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 37-39 | printed pages 37-39

Related sections: [PHP Form Data And Security](1-4-php-form-data-and-security.md), [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md), [Topic 1: PHP and HTML Form](1-topic-1-php-and-html-form.md), [First Normal Form](../../information-systems-622-study-guide/sections/3-6-2-first-normal-form.md), [SOURCE DOCUMENT ANO FORM DESIGN](../../information-systems-622-study-guide/sections/2-5-source-document-ano-form-design.md), [Second Normal Form](../../information-systems-622-study-guide/sections/3-6-3-second-normal-form.md)

## Extracted Text

```text
[PDF page 37; printed page 37]
1.7 PHP Form Validation



In HTML, forms are used to collect user input/information. But, as far as HTML goes, it
just provides the graphical interface and the ability to write on the input fields. However,
the aim we collect user information is because we need to process this

information. That usually means saving the inputs to a database so that they can be
accessed later for several purposes. In this section, we will not send information to the
database, as that requires an active database that is already set up and includes
knowledge form SQL language, but we can retrieve information that the user has given
us. It is important to have a way to get information, because what you use it for and where
you want to show/save it depends. Let’s have a look at the HTML form below:




                                            37

[PDF page 38; printed page 38]
This form is just a regular one, and includes inputs for name, e-mail, age and gender. This
information will be the subject of a print when the Submit button is clicked. That just
proves that we got the information from the user. For now, let’s see what we got and fill
in the form:




Next, we check each input to make sure the user has written/chosen something, and the
input is not empty. We do this using two well-known functions in PHP, the isset() and
empty(). After making sure we have this right, we can also validate fields. In this case, only
the name input may need some sort of validation to make sure one simply doesn’t write
numbers in there, while other inputs are validated from HTML5, in the case of email and
age




                                             38

[PDF page 39; printed page 39]
Validation is a must for all fields when considering real web projects. If the fields have
been set, information about each field will be printed. After clicking the "Submit" button,
the result we’d have is:




                                            39
```
