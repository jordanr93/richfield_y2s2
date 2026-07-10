---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "12-19"
printed_pages: "12-19"
section: "Creating An HTML Form"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "label"
  - "input"
  - "type"
  - "form"
  - "name"
  - "value"
  - "html"
  - "field"
  - "button"
  - "radio"
  - "creating"
  - "web"
---

# Creating An HTML Form

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 12-19 | printed pages 12-19

Related sections: [Handling Empty Form Fields](1-5-handling-empty-form-fields.md), [Topic 1: PHP and HTML Form](1-topic-1-php-and-html-form.md), [Second Normal Form](../../information-systems-622-study-guide/sections/3-6-3-second-normal-form.md), [Third Normal Form](../../information-systems-622-study-guide/sections/3-6-4-third-normal-form.md), [SOURCE DOCUMENT ANO FORM DESIGN](../../information-systems-622-study-guide/sections/2-5-source-document-ano-form-design.md), [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md)

## Extracted Text

```text
[PDF page 12; printed page 12]
1.2 Creating An HTML Form


In this example, we create a web form that contains a variety of input fields. This section
will guide you through creating different types of form fields while also allowing you to
see how they look and function in a web browser. Save the following file as




                                            12

[PDF page 13; printed page 13]
web_form.html in your document root folder, then open it in your browser to view the
form:




<!DOCTYPE html>

<html lang="en">

<head>

  <title>An HTML Form</title>

  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>An HTML Form</h1>

  <form action="" method="get">

    <div style="width: 25em;">

        <label for="textField">A text input field</label>

        <input type="text" name="textField" id="textField" value="" />




        <label for="passwordField">A password field</label>

        <input type="password" name="passwordField" id="passwordField" value="" />




        <label for="checkboxField">A checkbox field</label>

        <input type="checkbox" name="checkboxField" id="checkboxField" value="yes" />

                                             13

[PDF page 14; printed page 14]
      <label for="radioButtonField1">A radio button field</label>

      <input        type="radio"    name="radioButtonField"       id="radioButtonField1"
value="radio1" />




      <label for="radioButtonField2">Another radio button</label>

      <input        type="radio"    name="radioButtonField"       id="radioButtonField2"
value="radio2" />




      <label for="submitButton">A submit button</label>

      <input type="submit" name="submitButton" id="submitButton" value="Submit
Form" />




      <label for="resetButton">A reset button</label>

      <input type="reset" name="resetButton" id="resetButton" value="Reset Form" />




      <label for="fileSelectField">A file select field</label>

      <input type="file" name="fileSelectField" id="fileSelectField" value="" />




      <label for="hiddenField">A hidden field</label>

      <input type="hidden" name="hiddenField" id="hiddenField" value="" />


                                            14

[PDF page 15; printed page 15]
      <label for="imageField">An image field</label>

      <input      type="image"     name="imageField"   id="imageField"   value=""
src="asterisk.gif" width="23" height="23" />




      <label for="pushButton">A push button</label>

      <input type="button" name="pushButton" id="pushButton" value="Click Me" />




      <label for="pullDownMenu">A pull-down menu</label>

      <select name="pullDownMenu" id="pullDownMenu" size="1">

        <option value="option1">Option 1</option>

        <option value="option2">Option 2</option>

        <option value="option3">Option 3</option>

      </select>




      <label for="listBox">A list box</label>

      <select name="listBox" id="listBox" size="3">

        <option value="option1">Option 1</option>

        <option value="option2">Option 2</option>

        <option value="option3">Option 3</option>

      </select>

                                           15

[PDF page 16; printed page 16]
      <label for="multiListBox">A multi-select list box</label>

      <select name="multiListBox" id="multiListBox" size="3" multiple="multiple">

          <option value="option1">Option 1</option>

          <option value="option2">Option 2</option>

          <option value="option3">Option 3</option>

      </select>




      <label for="textAreaField">A text area field</label>

      <textarea            name="textAreaField"       id="textAreaField"         rows="4"
cols="50"></textarea>

    </div>

  </form>

</body>

</html>




Figure 1.1 below shows what the form looks like. In this figure, an asterisk image was used
for the image field; you will need to use an image of your own. Try clicking each control
to see how it functions.




                                            16

[PDF page 17; printed page 17]
Figure 1.1




This XHTML web page contains the most common types of form controls you are likely to
encounter. The form itself is created as follows:




<form action="" method="get">




Since the form uses the get method, the form field names and values will be sent to the
server in the URL. We will introduce the get method shortly. Meanwhile, the empty action
attribute tells the browser to send the form data back to the same page (web_form.html).
In a real-world scenario, this attribute would contain the URL of a form handler script.

                                            17

[PDF page 18; printed page 18]
Each form control is then created in sequence. Most controls include a name attribute,
which defines the field name that stores the data, and a value attribute, which contains
either a fixed value or, for user-input fields, a default value. These field names and values
function similarly to keys and values in an associative array.




Additionally, each control is typically associated with a <label> element containing the
field’s descriptive text, making it easier for users to understand and interact with the
form. The for attribute within <label> elements matches the corresponding id attribute
of the control.




Once the controls are added, the form is completed with a closing </form> tag.




Try filling in some fields and clicking the Submit Form button. Since the action attribute is
empty, the browser sends the form data back to the same page (web_form.html).
However, since this page is only an HTML document, it cannot process the data. Soon,
you’ll learn how to write PHP scripts to handle form submissions.




When the form is submitted, you can see all form data in the browser’s address bar, as
shown in Figure 1.2. This occurs because the get method sends form data as part of the
URL. The data for each field appears as a name/value pair, separated by the ? character:




http://localhost/web_form.html?textField=Hello&passwordField=secret& ...




                                             18

[PDF page 19; printed page 19]
The get method has limitations, as URLs can only contain a limited number of characters
(typically up to 1,024 characters). If you need to send larger amounts of data, use the post
method instead:




<form action="myscript.php" method="post">




Unlike get, the post method sends data within the HTTP headers instead of the URL,
allowing for larger data transmission. When users refresh the page after submitting a
form via post, their browser may display a dialog box asking if they want to resend their
form data.




Figure 1.2




                                            19
```
