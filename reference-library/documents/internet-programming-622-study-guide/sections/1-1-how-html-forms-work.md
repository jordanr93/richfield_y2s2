---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "10-11"
printed_pages: "10-11"
section: "How HTML Forms Work"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "form"
  - "html"
  - "php"
  - "myscript"
  - "forms"
  - "tag"
  - "web"
  - "work"
  - "before"
  - "elements"
  - "fields"
  - "buttons"
---

# How HTML Forms Work

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 10-11 | printed pages 10-11

Related sections: [Topic 1: PHP and HTML Form](1-topic-1-php-and-html-form.md), [Creating An HTML Form](1-2-creating-an-html-form.md), [Generating Web Forms With PHP](1-6-generating-web-forms-with-php.md), [How to run PHP with XAMMP](64-how-to-run-php-with-xammp.md), [PHP Form Validation](1-7-php-form-validation.md), [How IOTs works](../../big-data-iot-600-study-guide/sections/2-2-how-iots-works.md)

## Extracted Text

```text
[PDF page 10; printed page 10]
1.1 How HTML Forms Work



Understanding HTML Forms Before Using PHP




Before diving into PHP, it's important to understand how an HTML form is structured. An
HTML form, or web form, is simply a collection of HTML elements embedded within a




                                           10

[PDF page 11; printed page 11]
webpage. By adding different types of elements, you can create form fields such as text
fields, dropdown menus, checkboxes, radio buttons, and submit buttons.




All web forms begin with an opening `<form>` tag and end with a closing `</form>` tag:




<form action="myscript.php" method="post">

  <!-- Form contents go here -->

</form>




The second line in this example is an HTML comment. Everything between `<!--` and `-->`
is ignored by the web browser and is only visible in the source code.

Key Attributes of the `<form>` Tag




The `<form>` tag includes two important attributes:




1. `action`– Specifies where to send the form data when the user submits the form. This
should be either:

 - An absolute URL (e.g., `http://www.example.com/myscript.php`)

 - A relative URL (e.g., `myscript.php`, `/myscript.php`, or `../scripts/myscript.php`)


                                            11
```
