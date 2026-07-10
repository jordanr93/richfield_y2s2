---
document: "Internet Programming 622 Study Guide"
source_file: "INTERNET PROGRAMMING  622 STUDY GUIDE.pdf"
document_version: "created 2025-02-13; modified 2025-02-13"
pdf_pages: "54-54"
printed_pages: "54-54"
section: "Alternative to Cookies"
chapter: "Topic 2: Session Controls and Cookies"
keywords:
  - "session"
  - "php"
  - "alternative"
  - "form"
  - "every"
  - "cookies"
  - "passing"
  - "fields"
  - "urls"
  - "can"
  - "link"
  - "rewrite"
---

# Alternative to Cookies

Source trace: [original PDF](../../../originals/INTERNET%20PROGRAMMING%20%20622%20STUDY%20GUIDE.pdf) | PDF pages 54-54 | printed pages 54-54

Related sections: [Topic 2: Session Controls and Cookies](2-topic-2-session-controls-and-cookies.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md), [Create an Interface That Is Easy to Learn and Use](../../information-systems-622-study-guide/sections/2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md), [Combining Cookies And Sessions](2-4-combining-cookies-and-sessions.md), [Cookies](2-1-cookies.md), [PHP Form Validation](1-7-php-form-validation.md)

## Extracted Text

```text
[PDF page 54; printed page 54]
2.3 Alternative to Cookies


By default, PHP passes the session ID between pages using the PHPSESSID cookie.
However, PHP’s session system offers two alternative methods for passing the session ID:
form fields and URLs.




Using form fields to pass the session ID can be cumbersome, as it requires every link
between pages to be a form submission, which is not practical for most applications.




On the other hand, passing the session ID via URLs is a more seamless approach. PHP can
automatically rewrite the HTML, adding the session ID to every relative link. For this to
work, PHP must be compiled with the --enable-trans-id option. This method does come
with a performance trade-off because PHP must parse and rewrite every page. For busy

                                           54
```
