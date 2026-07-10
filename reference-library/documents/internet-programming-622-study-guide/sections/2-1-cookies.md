---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "42-49"
printed_pages: "42-49"
section: "Cookies"
chapter: "Topic 2: Session Controls and Cookies"
keywords:
  - "web"
  - "cookies"
  - "you"
  - "store"
  - "php"
  - "remember"
  - "browser"
  - "requests"
  - "cart"
  - "state"
  - "create"
  - "previous"
---

# Cookies

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 42-49 | printed pages 42-49

Related sections: [Combining Cookies And Sessions](2-4-combining-cookies-and-sessions.md), [Topic 2: Session Controls and Cookies](2-topic-2-session-controls-and-cookies.md), [Alternative to Cookies](2-3-alternative-to-cookies.md), [How to run PHP with XAMMP](64-how-to-run-php-with-xammp.md), [Introduction](4-0-introduction.md), [Review Questions](17-review-questions.md)

## Extracted Text

```text
[PDF page 42; printed page 42]
Topic 2: Session Controls and Cookies




              LEARNING OUTCOMES
     After reading this Section of the guide, the learner should be able to:

                   •   Demonstrate their understanding of saving state in PHP to write
                       powerful and persistent web applications that can remember session
                       information between page views.
                   •   Create cookies, read cookies and delete cookies.
                   •   Understand PHP’s session-handling functionalities enabling them to
                       create, sustain and destroy sessions as needed.




2.0 Introduction


Because HTTP is a stateless protocol, most of the PHP scripts you created in previous
chapters are very much one-shot affairs. Each time they run, they start with a “clean slate”
of variables and other data. This is because each request that a browser makes to a Web
server is independent of any previous requests. When a Web server receives a request to



                                              42

[PDF page 43; printed page 43]
run a PHP script, it loads the script into its memory, runs it, and then removes all traces
of it from memory.




However, most of the Web applications you use today have a need to store data between
browser requests. For example, a shopping cart needs to remember which items you have
added to your cart, and a forum application needs to remember your identity whenever
you post a message in the forum. In other words, there is a need to preserve the current
state of a user ‘s interaction with an application from one request to the next. In this
chapter, we look at ways to save state, that is to give the web application the ability to
store data between browser requests to enable it to remember related or linked actions
or requests such as the items that a web user continually adds to his shopping cart. The
addition of each incremental item to the cart is a different action but is linked or related
to the previous addition as well as to the next. We explore how to use:

•      (Query strings to store small amounts of data in the URL)

•      Cookies to store larger amounts of data in the browser itself

•      Sessions to store even larger amounts of data and store it in a much more secure
fashion By using any of these three methods (or a combination of them), you can create
persistent Web applications that carry their data from one page view to the next.

Read/activity: You are encouraged to go through your prescribed book, the internet
and/or any other comparable source and perform some research pertaining to Query
Strings as a “Keeping State” technique in web application development. You may consult
your prescribed text between pages 192 and 200 and are strongly urged to consult other
sources to augment to the information available here on the subject. The subject is small
and should not take more than an hour of your time.

2.1 Cookies



                                            43

[PDF page 44; printed page 44]
A cookie is a small piece of data that a server can send to a client. On subsequent requests,
the client sends this data back to the server, allowing the server to identify the client.
Cookies are useful for retaining information across repeated visits by a browser, but they
come with a few important considerations.




One key issue is that many browsers allow users to disable cookies, meaning that any
application relying on cookies for state maintenance must have an alternative mechanism
as a fallback.




The most effective way to manage state in PHP is through its built-in session-tracking
system. This system enables you to create persistent variables that remain accessible
across different pages of your application and across multiple visits by the same user.
PHP’s session-tracking system uses cookies (or URLs) behind the scenes to address many
of the challenges associated with state management, automatically handling the
complexities for you. We’ll cover PHP’s session system in more detail later in this chapter.




Understanding Cookies

A cookie is essentially a string containing several fields. A server can send one or more
cookies to the browser as part of its response headers. Some of these fields specify which
pages should send the cookie back to the server, while the value field holds the actual
data. This can include information like a unique user identifier, preferences, etc.




To send a cookie to the browser in PHP, use the setcookie() function:




                                             44

[PDF page 45; printed page 45]
setcookie(name [, value [, expire [, path [, domain [, secure ]]]]]);

This function creates the cookie string based on the given arguments and sends a Cookie
header with that string. Since cookies are sent as headers, setcookie() must be called
before any content (body) is output. Here are the parameters for setcookie():




name: The unique name of the cookie. Multiple cookies with different names and
attributes can exist. The name must not contain spaces or semicolons.




value: The arbitrary string associated with the cookie. While there is no explicit limit on
the size of a cookie value, the original Netscape specification capped the total size of a
cookie (including its name, expiration, and other fields) at 4 KB, so it’s best to keep cookie
values under 3.5 KB.




expire: The expiration date of the cookie. If not specified, the cookie is stored in memory
and expires when the browser closes. The expiration time is given in seconds since
midnight on January 1, 1970 (GMT). For example, use time() + 60 * 60 * 2 to expire the
cookie in 2 hours.




path: The browser will only send the cookie for URLs within this path. By default, it is the
directory of the current page.




domain: The browser will return the cookie only for URLs within this domain. The default
is the server's hostname.




                                              45

[PDF page 46; printed page 46]
secure: If set to true, the cookie will only be sent over HTTPS connections. By default, it
can be sent over unsecured connections.




When the browser sends the cookie back to the server, it can be accessed via the
$_COOKIE superglobal in PHP. The key is the cookie's name, and the value is the data
stored in the cookie. Here's an example that tracks the number of page accesses:




$pageAccesses = $_COOKIE['accesses'];

setcookie('accesses', ++$pageAccesses);

Cookies can be referenced in a way that any periods (.) in the cookie’s name are replaced
by underscores. For example, a cookie named tip.top is accessed as $_COOKIE['tip_top'].




Example: Setting Preferences with Cookies

Here’s an example of an HTML form where a user selects background and foreground
colors, and their preferences are saved as cookies:




HTML Form:




<html>

<head><title>Set Your Preferences</title></head>

<body>

  <form action="prefs.php" method="post">

                                            46

[PDF page 47; printed page 47]
    <p>Background:

      <select name="background">

          <option value="black">Black</option>

          <option value="white">White</option>

          <option value="red">Red</option>

          <option value="blue">Blue</option>

      </select><br />

      Foreground:

      <select name="foreground">

          <option value="black">Black</option>

          <option value="white">White</option>

          <option value="red">Red</option>

          <option value="blue">Blue</option>

      </select>

    </p>

    <input type="submit" value="Change Preferences">

  </form>

</body>

</html>

PHP Script (prefs.php):



                                         47

[PDF page 48; printed page 48]
<html>

<head><title>Preferences Set</title></head>

<body>

<?php

  $colors = array(

       'black' => "#000000",

       'white' => "#ffffff",

       'red' => "#ff0000",

       'blue' => "#0000ff"

  );




  $backgroundName = $_POST['background'];

  $foregroundName = $_POST['foreground'];




  setcookie('bg', $colors[$backgroundName]);

  setcookie('fg', $colors[$foregroundName]);

?>




<p>Thank you. Your preferences have been changed to:<br />



                                         48

[PDF page 49; printed page 49]
  Background: <?= $backgroundName; ?><br />

  Foreground: <?= $foregroundName; ?></p>

<p>Click <a href="prefs_demo.php">here</a> to see the preferences in action.</p>

</body>

</html>

Example Using Color Preferences (prefs_demo.php):




<html>

<head><title>Front Door</title></head>

<?php

  $backgroundName = $_COOKIE['bg'];

  $foregroundName = $_COOKIE['fg'];

?>

<body bgcolor="<?= $backgroundName; ?>" text="<?= $foregroundName; ?>">

  <h1>Welcome to the Store</h1>

  <p>We have many fine products for you to view. Please feel free to browse the aisles
and stop an assistant at any time. But remember, you break it you bought it!</p>

  <p>Would you like to <a href="colors.php">change your preferences?</a></p>

</body>

</html>



                                          49
```
