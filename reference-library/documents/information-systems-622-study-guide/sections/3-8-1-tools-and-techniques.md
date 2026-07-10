---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "114-117"
printed_pages: "114-117"
section: "Tools and Techniques"
chapter: "CHAPTER 3: Data Design"
keywords:
  - "warehouse"
  - "tools"
  - "access"
  - "can"
  - "such"
  - "specific"
  - "sales"
  - "mart"
  - "needs"
  - "storage"
  - "databases"
  - "making"
---

# Tools and Techniques

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 114-117 | printed pages 114-117

Related sections: [Chapter 1: Big Data Analysis and Extraction Techniques](../../big-data-iot-600-study-guide/sections/1-chapter-1-big-data-analysis-and-extraction-techniques.md), [Common tools and frameworks used for big data analysis](../../big-data-iot-600-study-guide/sections/1-3-common-tools-and-frameworks-used-for-big-data-analysis.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Data Storage and Management](../../big-data-iot-600-study-guide/sections/3-4-3-data-storage-and-management.md), [Data Storage and Processing Technologies](../../big-data-iot-600-study-guide/sections/3-1-4-data-storage-and-processing-technologies.md), [Security Techniques for Protecting Big Data](../../big-data-iot-600-study-guide/sections/4-7-2-security-techniques-for-protecting-big-data.md)

## Extracted Text

```text
[PDF page 114; printed page 114]
3.8.1 Tools and Techniques

In the realm of data storage and access, tools like data warehousing and data mining play a
crucial role in helping businesses manage vast amounts of data essential for operations and
decision-making. These tools, along with considerations related to data storage formats and
storage of date fields, are vital for strategic business success.

Data Warehousing

Large companies typically maintain numerous databases, and these databases may or may
not be interconnected. To facilitate quick and easy access to this vast amount of information,
businesses use specialized software that organizes and stores data in a way known as a data
warehouse.

A data warehouse is an integrated collection of data that can include a variety of information,
often from different sources within the organization. This allows for a cohesive, enterprise-
wide perspective on the data, which aids in supporting management analysis and decision-
making.

The primary feature of a data warehouse is its ability to combine and store data from different
systems, making it easier for users to access relevant information for their analysis. For
instance, data from order processing, inventory, and payroll systems can all be stored
together in a data warehouse, making it easier to retrieve data across different systems.

A data warehouse is organized in such a way that users can analyze multidimensional data by
selecting specific characteristics or dimensions. For example, a user might want to retrieve
sales data for a particular month or for a specific sales representative across multiple systems.
Without a data warehouse, this would require accessing multiple databases and systems,
which could be time-consuming and complex. However, with a data warehouse, data from

[PDF page 115; printed page 115]
different systems (such as sales data and employee information) can be linked and retrieved
with ease.




Data Mart

While a data warehouse covers the entire enterprise's data needs, some companies opt for
data marts. A data mart is a smaller, more focused version of a data warehouse. It serves the
needs of a specific department, such as sales, marketing, or finance. Each data mart includes
only the data that the department needs to function effectively.

Data marts have their advantages, such as faster access times due to their smaller size, and
they are more tailored to specific departmental needs. However, there are trade-offs, and the
choice between using a data warehouse or a data mart often depends on the company's
particular situation and data requirements


Data Storage and Access:

Regardless of the overall approach, storing large amounts of data is a complex process that
requires careful planning and structure, much like building a house. A well-organized data
warehouse needs an architecture with detailed planning and specifications.
Data Mining:

Data mining software is designed to identify meaningful patterns and relationships in data.
For example, data mining can help a consumer products company identify potential
customers based on their previous purchases. Although data about customer behavior is
valuable, it also raises ethical and privacy concerns, as highlighted in this chapter’s "Question
of Ethics" section. The growth of e-commerce has made data mining a key marketing tool.
Dan R. Greening, in his article "Data Mining on the Web," discusses how web hosts can collect
data about visitors, but much of it is of little value. He mentions that marketers and analysts
are now using machine learning algorithms to uncover hidden patterns in databases and take
action based on those insights. He also suggests measurable goals for web marketers, such

[PDF page 116; printed page 116]
as:
      •   Increasing the number of pages viewed per session
      •   Increasing the number of referred customers
      •   Reducing clicks to close (i.e., the number of page views needed to complete a purchase
          or obtain desired information)
      •   Increasing checkouts per visit
      •   Increasing average profit per checkout

This type of data collection is often called clickstream storage, and it can help create profiles
of typical customers, including new customers, returning customers, and those who browse
but don't buy. However, it raises legal and privacy concerns if companies misuse this data by
linking online behaviors to personal information.
Data mining helps uncover patterns and trends in large datasets, making it a valuable tool for
managers. For instance, there’s a well-known story about a supermarket chain discovering
that beer and diapers were often purchased together. Whether true or not, the conclusion is
clear: retailers can optimize store layout by grouping such products together. This technique,
known as market basket analysis, uses association rule learning.

Logical vs. Physical Storage:

It’s important to distinguish between logical and physical storage. Logical storage refers to
how users view and access data, regardless of where or how it is actually stored. On the other
hand, physical storage involves the hardware that reads and writes binary data to media like
hard drives, CDs/DVDs, or network storage devices. For example, a document may be stored
in different physical locations on a hard drive, but the user sees it as a single logical entity on
the screen.
Logical storage involves characters (alphabetic or numeric) that form fields, which describe a
specific attribute of a person, place, thing, or event. When designing fields, space should be
allocated for the largest anticipated values, but without wasting storage for unused capacity.
For example, a customer order entry system for 800 customers should use a five-character
field (00001 to 99999), not a three-character field.
A logical record is a set of related field values that describes a person, place, thing, or event.
Application programs interact with these logical records without concern for where or how
the data is stored physically. The operating system handles the physical storage location.

Data Coding:

Computers use binary digits (bits), which are either 1 or 0, to represent data. Various coding
schemes, such as EBCDIC, ASCII, and binary, are used to encode and store data. Unicode, a
newer standard, uses two bytes per character, allowing it to represent over 65,000 unique
characters. This is especially useful in global systems that need to support multiple languages.
   • EBCDIC (Extended Binary Coded Decimal Interchange Code) is commonly used on
       mainframes and high-capacity servers, while ASCII (American Standard Code for
       Information Interchange) is used on most personal computers.
   • Binary storage is more efficient because it represents numbers directly as binary
       values. For instance, an integer uses only 16 bits to store a number like 12,345,
       whereas ASCII or EBCDIC would need more space.

[PDF page 117; printed page 117]
Unicode enables the representation of a vast range of multilingual characters, which is
essential for multinational systems or software used in various regions. Previously, software
was developed in English and translated later, which was costly and error-prone. Unicode
allows for content to be developed in a way that’s easily translatable, simplifying this process
and supporting languages worldwide. Most modern operating systems and platforms now
support Unicode.




                                 (Tilley and Rosenblatt, 2024)


Storing Dates:

The best way to store dates depends on how they will be displayed and whether they will be
used in calculations.

At the turn of the twenty-first century, many organizations faced a major problem known as
the Y2K issue. This occurred because dates were often stored using only two digits for the
year. In response to that experience, most date formats now follow the model set by the
International Organization for Standardization (ISO), which uses a four-digit year, two digits
for the month, and two digits for the day (YYYYMMDD). For example, a date stored in the ISO
format, such as 20150504, represents May 4, 2015. Using this format allows for easy sorting
and comparisons of dates. If one date in this format is larger than another, the first date is
later. For example, 20150504 (May 4, 2015) is later than 20130927 (September 27, 2013).

However, problems arise when dates need to be used in calculations. For example, if a
manufacturing order placed on June 23 takes three weeks to complete, when will the order
be ready? Or if a payment due on August 13 is not paid until April 27 of the following year,
how late is the payment and how much interest is owed? In these cases, it is easier to use
absolute dates.

An absolute date is the total number of days since a specific base date. To calculate the
number of days between two absolute dates, you simply subtract one date from the other.
For example, if the base date is January 1, 1900, then May 4, 2015, would have an absolute
date of 42,128. Similarly, September 27, 2013, would have an absolute date of 41,544.
Subtracting the earlier date from the later one (42,128 - 41,544) results in 584 days. This
```
