---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "143-145"
printed_pages: "143-145"
section: "How to run PHP with XAMMP"
chapter: "Topic 4: DATABASES AND STRUCTURED QUERY LANGUAGE [SQL]"
keywords:
  - "php"
  - "folder"
  - "your"
  - "code"
  - "open"
  - "then"
  - "you"
  - "browser"
  - "web"
  - "run"
  - "named"
  - "xampp"
---

# How to run PHP with XAMMP

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 143-145 | printed pages 143-145

Related sections: [Connecting To MySQL From PHP](4-17-connecting-to-mysql-from-php.md), [Capturing Form Data With PHP](1-3-capturing-form-data-with-php.md), [Adding Data to A Table With The INSERT Statement](4-12-adding-data-to-a-table-with-the-insert-statement.md), [Opening A File With fopen()](3-6-opening-a-file-with-fopen.md), [PHP Form Data And Security](1-4-php-form-data-and-security.md), [Why Do You Need XAMPP?](63-why-do-you-need-xampp.md)

## Extracted Text

```text
[PDF page 143; printed page 143]
How to run PHP with XAMMP
To run PHP with XAMPP you will have to go through some steps, and I will break it down
so you can understand.


First, open the local storage folder, go to the “xampp” folder and open it. You should see
a folder named “htdocs”. Open it then create a new folder in it. In my case I named the
folder I created “Demo” (so give your folder the name of your choice).




Next, open your VS code, click on open folder, then go to the location where you saved
the folder you created (which in my case I named “Demo”). Create a file with the

                                           143

[PDF page 144; printed page 144]
extension .php – in my case I named mine test.php. The extension .php tells the code
editor that we are working on a PHP code/project.




create a file with an extension of .php

PHP is run with the <?php (Code goes in here) ?> tag. The opening tag is <?php then your
PHP code goes next before the closing tag ?>. For example:

<?php

echo “<h1> My Name is Derek </h2>;

?>

The echo keyword tells the browser to display My Name is Derek while
the <h1></h1> tells the web browser to format the text to be bold/bigger. Then save it.

After writing the code, open the XAMPP control panel, and start the Apache module by
clicking on start under the action section.




Then go to your web browser and in the search bar type localhost/Demo/test.php, then
enter. Your web browser should be display this:


                                              144

[PDF page 145; printed page 145]
web display

If your code was displayed on the web browser, congratulations! You're up and running.




                                         145
```
