---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "50-53"
printed_pages: "50-53"
section: "Sessions"
chapter: "Topic 2: Session Controls and Cookies"
keywords:
  - "session"
  - "sessions"
  - "you"
  - "variables"
  - "preferences"
  - "can"
  - "php"
  - "cookie"
  - "user"
  - "start"
  - "array"
  - "hits"
---

# Sessions

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 50-53 | printed pages 50-53

Related sections: [Combining Cookies And Sessions](2-4-combining-cookies-and-sessions.md), [Review Questions](17-review-questions.md), [Challenges in Data Privacy](../../big-data-iot-600-study-guide/sections/2-5-3-challenges-in-data-privacy.md), [Prescriptive Analytics](../../big-data-iot-600-study-guide/sections/98-prescriptive-analytics.md), [Use Real-time Monitoring Tools](../../big-data-iot-600-study-guide/sections/127-use-real-time-monitoring-tools.md), [Client/Server Tiers:](../../information-systems-622-study-guide/sections/4-3-2-client-server-tiers.md)

## Extracted Text

```text
[PDF page 50; printed page 50]
2.2 Sessions



PHP has built-in support for sessions, which simplifies state management by handling
cookie manipulation for you. Sessions provide persistent variables that are accessible
across different pages and multiple visits to the site. Sessions are ideal for tasks like
creating multi-page forms (e.g., shopping carts), storing user authentication data
between pages, and saving user preferences.




How Sessions Work

When a user visits your site for the first time, PHP issues a unique session ID. By default,
this session ID is stored in a cookie called PHPSESSID. If the user's browser does not
support cookies or if cookies are disabled, the session ID is passed through URLs within
the site. Each session has an associated data store. You can register variables to be loaded

                                            50

[PDF page 51; printed page 51]
from this data store at the start of each page and saved back at the end. These variables
persist across pages, meaning changes made on one page are visible on others. For
instance, an "add to cart" link can add items to a registered array that represents the
shopping cart. This array can then be used on other pages to display the cart contents.




Starting and Using Sessions

Sessions start automatically when a script runs. If necessary, a new session ID is generated
(which may include sending a cookie to the browser), and any persistent session variables
are loaded. You can register a variable in the session by assigning a value to the
$_SESSION[] array. For example, here's a simple hit counter using sessions:




session_start();

$_SESSION['hits'] = $_SESSION['hits'] + 1;

echo "This page has been viewed {$_SESSION['hits']} times.";

The session_start() function loads registered variables into the $_SESSION associative
array. The keys are the names of the variables (e.g., $_SESSION['hits']). If you need to
retrieve the current session ID, you can use the session_id() function. To end a session,
you call session_destroy(). This removes the session data store, but the cookie remains in
the browser cache. As a result, the user will have the same session ID on subsequent visits,
but no data will be stored.




Example: Setting Preferences with Sessions

Here’s an example that shows how to set preferences using sessions instead of cookies.




                                             51

[PDF page 52; printed page 52]
Setting Preferences with Sessions (prefs_session.php)




<html>

<head><title>Preferences Set</title></head>

<body>

<?php

  session_start();




  $colors = array(

       'black' => "#000000",

       'white' => "#ffffff",

       'red' => "#ff0000",

       'blue' => "#0000ff"

  );




  $backgroundName = $_POST['background'];

  $foregroundName = $_POST['foreground'];




  $_SESSION['backgroundName'] = $backgroundName;

  $_SESSION['foregroundName'] = $foregroundName;



                                          52

[PDF page 53; printed page 53]
?>




<p>Thank you. Your preferences have been changed to:<br />

  Background: <?= $backgroundName; ?><br />

  Foreground: <?= $foregroundName; ?></p>

<p>Click <a href="prefs_session_demo.php">here</a> to see the preferences in
action.</p>

</body>

</html>

Using Preferences From Sessions (prefs_session_demo.php)




<?php

session_start();

$backgroundName = $_SESSION['backgroundName'];

$foregroundName = $_SESSION['foregroundName'];

?>




<html>

<head><title>Front Door</title></head>

<body bgcolor="<?= $backgroundName; ?>" text="<?= $foregroundName; ?>">

  <h1>Welcome to the Store</h1>

                                         53
```
