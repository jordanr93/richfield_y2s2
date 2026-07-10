---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "55-56"
printed_pages: "55-56"
section: "Combining Cookies And Sessions"
chapter: "Topic 2: Session Controls and Cookies"
keywords:
  - "option"
  - "bgcolor"
  - "state"
  - "cookie"
  - "post"
  - "value"
  - "php"
  - "backgroundname"
  - "combining"
  - "cookies"
  - "sessions"
  - "you"
---

# Combining Cookies And Sessions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 55-56 | printed pages 55-56

Related sections: [Cookies](2-1-cookies.md), [Sessions](2-2-sessions.md), [Topic 2: Session Controls and Cookies](2-topic-2-session-controls-and-cookies.md), [PHP Form Data And Security](1-4-php-form-data-and-security.md), [Review Questions](17-review-questions.md), [Evaluate and Adjust Analytical Models](../../big-data-iot-600-study-guide/sections/133-evaluate-and-adjust-analytical-models.md)

## Extracted Text

```text
[PDF page 55; printed page 55]
2.4 Combining Cookies And Sessions



By combining cookies with a custom session handler, you can preserve state across visits.
PHP's built-in sessions handle temporary state—such as which page a user is on—during
a single visit. For more persistent state, such as a unique user ID, you can store that
information in a cookie. Using the user's ID, you can then retrieve more permanent data
(e.g., display preferences, mailing address) from a persistent store, such as a database.




The following example allows users to select text and background colors, which are stored
in a cookie. Any subsequent visits within the next week will send the color preferences
stored in the cookie.




Saving State Across Visits (save_state.php)

<?php

  if ($_POST['bgcolor']) {

      setcookie('bgcolor', $_POST['bgcolor'], time() + (60 * 60 * 24 * 7));

  }


                                              55

[PDF page 56; printed page 56]
  if (isset($_COOKIE['bgcolor'])) {

      $backgroundName = $_COOKIE['bgcolor'];

  } else if (isset($_POST['bgcolor'])) {

      $backgroundName = $_POST['bgcolor'];

  } else {

      $backgroundName = "gray";

  }

?>

<html>

<head><title>Save It</title></head>

<body bgcolor="<?= $backgroundName; ?>">

  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">

      <p>Background color:

        <select name="bgcolor">

             <option value="gray">Gray</option>

             <option value="white">White</option>

             <option value="black">Black</option>

             <option value="blue">Blue</option>

             <option value="green">Green</option>



                                            56
```
