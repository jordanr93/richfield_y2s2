---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "33-36"
printed_pages: "33-36"
section: "Generating Web Forms With PHP"
chapter: "Topic 1: PHP and HTML Form"
keywords:
  - "fields"
  - "form"
  - "error"
  - "filled"
  - "script"
  - "required"
  - "missing"
  - "message"
  - "checks"
  - "field"
  - "ensures"
  - "entered"
---

# Generating Web Forms With PHP

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 33-36 | printed pages 33-36

Related sections: [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md), [Focus on Data Entry Screens](../../information-systems-622-study-guide/sections/2-4-7-focus-on-data-entry-screens.md), [Second Normal Form](../../information-systems-622-study-guide/sections/3-6-3-second-normal-form.md), [How HTML Forms Work](1-1-how-html-forms-work.md), [How to run PHP with XAMMP](64-how-to-run-php-with-xammp.md), [PHP Form Validation](1-7-php-form-validation.md)

## Extracted Text

```text
[PDF page 33; printed page 33]
1.6 Generating Web Forms With PHP



The script allows users to fill out a membership registration form, and it dynamically
checks whether the required fields are filled. If fields are missing, the form is redisplayed
with error messages. Additionally, it ensures that the previously entered data is retained,
allowing users to correct any mistakes without having to re-enter all their information.




Key Components of the Script:

Form Display and Handling:




                                             33

[PDF page 34; printed page 34]
The form is displayed when the page is loaded, and upon submission, the script checks if
the required fields are filled.

If any fields are missing, an error message is displayed, and the form is displayed with the
fields that need to be completed highlighted.

Validation of Input:




The script checks for required fields (firstName, lastName, password1, password2,
gender).

If any required fields are missing, the form is redisplayed with an error message, and the
missing fields are highlighted using the validateField() function.

Prefilling Fields:




The script retains the values entered in the form fields by using the setValue() function,
which echoes the submitted value if it exists. This ensures the form is not reset when
there are errors.

Error Handling:




The validateField() function adds a CSS class (error) to the labels of fields that were not
filled in. This visually indicates to the user which fields need to be completed.

Displaying Thank You Message:




If all required fields are filled, the script displays a thank-you message. This message is
shown by the displayThanks() function.

                                             34

[PDF page 35; printed page 35]
Step-by-Step Breakdown of Functions:

processForm(): This function processes the form submission. It checks whether all
required fields have been filled. If they are not filled, it redisplays the form with error
messages.




displayForm($missingFields): This function is responsible for displaying the form. If there
are missing fields, it will show an error message, highlight the missing fields, and prefill
the values the user already entered.




validateField($fieldName, $missingFields): This function checks if a field is in the
$missingFields array and, if so, applies the error CSS class to highlight the field.




setValue($fieldName): This function ensures that, if a field was filled in during the
previous submission, its value is retained by displaying it in the form input.




setChecked($fieldName, $fieldValue): For radio buttons and checkboxes, this function
checks if the field was selected, so the correct options remain selected when the form is
redisplayed.




setSelected($fieldName, $fieldValue): Similar to setChecked, but for <select> options. It
ensures that the user's previously selected option is displayed when the form is
redisplayed.




                                              35

[PDF page 36; printed page 36]
displayThanks(): This function displays the thank-you message once the form is correctly
filled out.




How the Script Works:

Initial Form Display: When the page is first loaded, the form is displayed with no data. If
the user submits the form, the script checks for missing fields and redisplays the form
with an error message if needed.




Form Submission and Validation:




If the form is submitted and all required fields are filled, the script shows the thank-you
message.

If any required fields are missing, the form is redisplayed with those fields highlighted in
red, allowing the user to correct their mistakes.

Form Prefilling: If the user previously entered some data, the script will retain those
values and prefill the form, so the user doesn't need to re-enter them after correcting
their mistakes.




Example Output:

When you browse the script in your browser:




If you submit an empty form, the missing required fields will be highlighted, and an error
message will guide you to fill them in.

                                            36
```
