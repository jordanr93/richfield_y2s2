---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "30-32"
printed_pages: "30-32"
section: "Handling Empty Form Fields"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "field"
  - "sent"
  - "form"
  - "button"
  - "empty"
  - "value"
  - "nothing"
  - "all"
  - "name"
  - "when"
  - "php"
  - "not"
---

# Handling Empty Form Fields

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 30-32 | printed pages 30-32

Related sections: [Creating An HTML Form](1-2-creating-an-html-form.md), [Second Normal Form](../../information-systems-622-study-guide/sections/3-6-3-second-normal-form.md), [Third Normal Form](../../information-systems-622-study-guide/sections/3-6-4-third-normal-form.md), [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md), [First Normal Form](../../information-systems-622-study-guide/sections/3-6-2-first-normal-form.md), [SOURCE DOCUMENT ANO FORM DESIGN](../../information-systems-622-study-guide/sections/2-5-source-document-ano-form-design.md)

## Extracted Text

```text
[PDF page 30; printed page 30]
1.5 Handling Empty Form Fields



When processing form data in PHP, it's important to recognize that users may not fill in
all the fields, and some data might not be sent to the server. Depending on form control,
when a field is left unfilled or unselected, different behaviors occur.




Behavior of Various Form Controls When Not Filled in or Selected



       Form Control                      What Happens When It’s Not filled-In or Selected

 Text input field                The field name is sent, along with an empty value.

 Password field                  The field name is sent, along with an empty value.

 Checkbox field                  Nothing is sent at all.


                                             30

[PDF page 31; printed page 31]
 Radio button field            Nothing is sent at all.
 Submit button
                               Nothing is sent at all if the button is not clicked. This can
                               happen if the user presses Enter/Return to submit a form.
                               However, if there is only one submit button in the form, most
                               browsers will still send the button’s field name and value.

 Reset button                  Nothing is ever sent.

 File select field             The field name is sent, along with an empty value.

 Hidden field                  The field name is sent, along with an empty value.

 Image field                   Same behavior as a submit button.

 Push button                   Nothing is ever sent.

 Pull - down menu              Impossible to select no option, so a value is always sent.

 List box                      Nothing is sent at all.

 Multi - select box            Nothing is sent at all.

 Text area field               The field name is sent, along with an empty value.




Why Is This Important?




When a form field doesn't send any data, PHP doesn't create an entry for that field in the
`$_POST`, `$_GET`, or `$_REQUEST` arrays. Attempting to access such a non-existent
element generates a PHP Notice, like the following:




PHP Notice: Undefined index: gender in process_registration.php on line 18


                                           31

[PDF page 32; printed page 32]
This notice typically appears in the server's error log or directly in the browser window
(depending on your error reporting settings). Although it doesn't interrupt the script
execution, it can clutter logs or display unwanted messages on the page. For example, if
`$_POST[“gender”] ` doesn't exist, the following line will still output an empty string:




<dt>Gender</dt><dd><?php echo $_POST["gender"] ?></dd>




How to Prevent PHP Notices




To avoid PHP notices and ensure that your script handles missing fields gracefully, always
check for the presence of a submitted form field before using it. This can be done with
PHP functions like `isset()` or `array_key_exists()`.




For example:




<dt>Gender</dt><dd><?php if (isset($_POST["gender"])) echo $_POST["gender"];
?></dd>




                                             32
```
