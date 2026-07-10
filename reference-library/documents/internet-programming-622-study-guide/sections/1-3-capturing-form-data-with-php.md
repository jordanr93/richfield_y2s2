---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "20-27"
printed_pages: "20-27"
section: "Capturing Form Data With PHP"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "form"
  - "php"
  - "superglobal"
  - "script"
  - "you"
  - "get"
  - "values"
  - "html"
  - "method"
  - "array"
  - "field"
  - "sent"
---

# Capturing Form Data With PHP

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 20-27 | printed pages 20-27

Related sections: [PHP Form Data And Security](1-4-php-form-data-and-security.md), [Generating Web Forms With PHP](1-6-generating-web-forms-with-php.md), [PHP Form Validation](1-7-php-form-validation.md), [Topic 1: PHP and HTML Form](1-topic-1-php-and-html-form.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Handling Empty Form Fields](1-5-handling-empty-form-fields.md)

## Extracted Text

```text
[PDF page 20; printed page 20]
1.3 Capturing Form Data With PHP




You now know how to create an HTML form and how data in a form is sent to the server.
But how do you write a PHP script to handle that data when it arrives at the server?




First, the form’s action attribute needs to specify the URL of the PHP script that will handle
the form data. For example:




<form action="form_handler.php" method="post">

Next, you need to create the form_handler.php script. When users submit their forms,
their data is sent to the server, and the form_handler.php script is executed. The script
must read the form data and process it.




To read data from a form, you use superglobal variables. A superglobal is a built-in PHP
variable that is available in any scope: at the top level of your script, within a function, or
within a class method. Earlier, we discussed the $GLOBALS superglobal array, which
contains a list of all global variables used in your application. Here, we introduce three
new superglobal arrays:




Superglobal Array       Description

$_GET                   Contains a list of all field names and values sent by a form using
the GET method.




                                              20

[PDF page 21; printed page 21]
$_POST                Contains a list of all field names and values sent by a form using
the POST method.

$_REQUEST              Combines the values of both the $_GET and $_POST arrays, along
with the values of the $_COOKIE superglobal array.

Each of these superglobal arrays contains the field names from the form as array keys,
with the field values as array values. For example, if you created a form using the GET
method with the following field:




<input type="text" name="emailAddress" value="" />

You could access the value entered by the user using either the $_GET or $_REQUEST
superglobal:




$email = $_GET["emailAddress"];

$email = $_REQUEST["emailAddress"];

Example: Creating a User Registration Form

Let’s create a simple registration form and a PHP script to process the form data. First,
save the following HTML code as registration.html in your document root folder:




<!DOCTYPE html>

<html lang="en">

<head>

  <title>Membership Form</title>


                                           21

[PDF page 22; printed page 22]
  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>Membership Form</h1>

  <p>Thanks for choosing to join The Widget Club. To register, please fill in your details
below and click "Send Details".</p>

  <form action="process_registration.php" method="post">

    <div style="width: 30em;">

      <label for="firstName">First name</label>

      <input type="text" name="firstName" id="firstName" value="" />




      <label for="lastName">Last name</label>

      <input type="text" name="lastName" id="lastName" value="" />




      <label for="password1">Choose a password</label>

      <input type="password" name="password1" id="password1" value="" />




      <label for="password2">Retype password</label>

      <input type="password" name="password2" id="password2" value="" />




      <label for="genderMale">Are you male...</label>

                                           22

[PDF page 23; printed page 23]
      <input type="radio" name="gender" id="genderMale" value="M" />

      <label for="genderFemale">...or female?</label>

      <input type="radio" name="gender" id="genderFemale" value="F" />




      <label for="favoriteWidget">What’s your favorite widget?</label>

      <select name="favoriteWidget" id="favoriteWidget" size="1">

         <option value="superWidget">The SuperWidget</option>

         <option value="megaWidget">The MegaWidget</option>

         <option value="wonderWidget">The WonderWidget</option>

      </select>




      <label for="newsletter">Do you want to receive our newsletter?</label>

      <input type="checkbox" name="newsletter" id="newsletter" value="yes" />




      <label for="comments">Any comments?</label>

      <textarea name="comments" id="comments" rows="4" cols="50"></textarea>




      <div style="clear: both;">

         <input type="submit" name="submitButton" id="submitButton" value="Send
Details" />



                                         23

[PDF page 24; printed page 24]
           <input type="reset" name="resetButton" id="resetButton" value="Reset Form"
style="margin-right: 20px;" />

         </div>

    </div>

  </form>

</body>

</html>

Next, create a PHP script named process_registration.php to handle the form submission.
Save this script in the same folder as registration.html and open the registration.html URL
in your web browser. After filling in the form and clicking the "Send Details" button, the
data will be displayed on a new page:




<!DOCTYPE html>

<html lang="en">

<head>

  <title>Thank You</title>

  <link rel="stylesheet" type="text/css" href="common.css" />

</head>

<body>

  <h1>Thank You</h1>

  <p>Thank you for registering. Here is the information you submitted:</p>

  <dl>

                                            24

[PDF page 25; printed page 25]
    <dt>First name</dt><dd><?php echo $_POST["firstName"]; ?></dd>

    <dt>Last name</dt><dd><?php echo $_POST["lastName"]; ?></dd>

    <dt>Password</dt><dd><?php echo $_POST["password1"]; ?></dd>

    <dt>Retyped password</dt><dd><?php echo $_POST["password2"]; ?></dd>

    <dt>Gender</dt><dd><?php echo $_POST["gender"]; ?></dd>

    <dt>Favorite widget</dt><dd><?php echo $_POST["favoriteWidget"]; ?></dd>

    <dt>Do     you   want    to    receive    our   newsletter?</dt><dd><?php   echo
$_POST["newsletter"]; ?></dd>

    <dt>Comments</dt><dd><?php echo $_POST["comments"]; ?></dd>

  </dl>

</body>

</html>

How It Works

The form is sent using the POST method, so the script accesses the form data from the
$_POST superglobal array and displays each field value using echo():




<dt>First name</dt><dd><?php echo $_POST["firstName"]; ?></dd>

Alternatively, you can use the $_REQUEST superglobal, which combines $_GET and
$_POST, to access the form data:




                                             25

[PDF page 26; printed page 26]
<dt>First name</dt><dd><?php echo $_REQUEST["firstName"]; ?></dd>




                           Figure 1.3 - Form Before Submission

Before submitting the form, it will look something like the form in Figure 1.3, where users
fill in their details.




                                            26

[PDF page 27; printed page 27]
                              Figure 1.4 - Result After Submission

After submission, the data you entered will be displayed in a list format as shown in Figure
1.4.




Best Practices

Generally, if you know that your form will use either the GET or POST method, it's best to
use $_GET or $_POST specifically rather than $_REQUEST. This helps reduce ambiguity,
prevent bugs, and avoid potential conflicts with cookies (for example, if there is a cookie
with the same name as a form field).




                                            27
```
