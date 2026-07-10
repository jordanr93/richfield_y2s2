---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "141-143"
printed_pages: "141-143"
section: "Example"
chapter: "CHAPTER 4: System Architecture"
keywords:
  - "processing"
  - "can"
  - "account"
  - "batch"
  - "online"
  - "when"
  - "customer"
  - "balance"
  - "times"
  - "card"
  - "atm"
  - "number"
---

# Example

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 141-143 | printed pages 141-143

Related sections: [Legacy Systems](4-1-6-legacy-systems.md), [Data-Driven Strategy Formulation](../../big-data-iot-600-study-guide/sections/5-3-data-driven-strategy-formulation.md), [Example: Using Data Visualization to Communicate Strategy](../../big-data-iot-600-study-guide/sections/109-example-using-data-visualization-to-communicate-strategy.md), [Outcome:](../../big-data-iot-600-study-guide/sections/90-outcome.md), [Predictive and Prescriptive Analytics to Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-1-predictive-and-prescriptive-analytics-to-strategy-development.md), [Real-Time Data Processing](../../big-data-iot-600-study-guide/sections/117-real-time-data-processing.md)

## Extracted Text

```text
[PDF page 141; printed page 141]
A common example of online processing is an airline reservations system. When customers
visit the airline’s website, they can input their origin, destination, travel dates, and times. The
system then searches the database and displays available flights, times, and prices. The
customer can proceed to make a reservation, entering their name, address, and credit card
details. The system immediately creates the reservation, assigns a seat, and updates the flight
database.

Online processing can also be applied to file-oriented systems. For example, when a customer
uses an ATM to inquire about their account balance, the system follows these steps:

   1. The customer enters their account number and requests the balance.
   2. The ATM verifies the customer's card and password, then retrieves the account record
      using the account number as the primary key.
   3. The system verifies the account number and displays the balance.
   4. The system transmits the current balance to the ATM, which prints it for the customer.

Characteristics of Online Processing Systems

Online processing systems typically have four key characteristics:

   1. Immediate Transaction Processing: The system processes transactions completely
      when and where they occur.
   2. User Interaction: Users interact directly with the information system.
   3. Random Data Access: Users can access data randomly.
   4. System Availability: The information system must be available whenever needed to
      support business functions.

[PDF page 142; printed page 142]
                                (Tilley and Rosenblatt, 2024)



4.6.2 Batch Processing
Batch processing means that data is managed in groups or batches. This method was a
common and acceptable choice in the 1960s, and for most firms, it was the only option.
Today, while real-time information is crucial for most businesses, batch processing is still
useful in certain situations. For example, it is often applied to large volumes of data that
need to be processed on a routine schedule, such as weekly payroll, daily credit card
transaction updates, or closing stock data that needs to be calculated and published in the
next day's news media.

The advantages of batch processing include:

   •   Tasks can be planned and run on a predetermined schedule, without user
       involvement.
   •   Batch programs requiring major network resources can be scheduled to run during
       off-peak times when costs are lower and impact on other traffic is minimized.
   •   Security, audit, and privacy: Batch methods are well-suited for handling tasks that
       involve sensitive data, as they run in a relatively controlled environment.

   4.6.3 Example

The diagram in Figure 10-14 shows how a point-of-sale (POS) terminal, such as that used in a
supermarket, might trigger a series of online and batch processing events. The system uses
online processing to handle data entry and inventory updates, while reports and accounting
entries are handled in a batch. A company would choose a mix of online and batch processing
when it makes good business sense.

[PDF page 143; printed page 143]
Consider the following scenario in a typical retail store:

   •   During business hours, a salesperson enters a sale on a POS terminal, which is part of
       an online system that handles daily sales transactions and maintains an up-to-date
       inventory file.
   •   When the salesperson enters the transaction, online processing occurs. The system
       performs calculations, updates the inventory file, and produces output on the POS
       terminal in the form of a screen display and a printed receipt. At the same time, each
       sales transaction creates input data for day-end batch processing.
   •   When the store closes, the system uses the sales transactions to produce the daily
       sales report, perform the related accounting entries, and analyze the data to identify
       slow- or fast-moving items, sales trends, and related issues (such as store discounts
       for the next day).

This mix of online and batch processing is an example of how businesses can leverage both
methods to meet different needs efficiently. Online processing ensures real-time updates and
interaction, while batch processing is used for handling large volumes of data that don't
require immediate attention.




                                  (Tilley and Rosenblatt, 2024)

Online and batch processing are fundamentally different but can work well together in certain
scenarios. In the case of the retail store example, an online system handles the POS
processing, which must be done in real-time as transactions occur, ensuring that the data is
entered and validated immediately. This provides up-to-date information, which is crucial for
maintaining an accurate inventory and ensuring smooth operations. However, online
processing can be expensive for smaller firms, especially when dealing with a high volume of
transactions, and the additional costs related to data backup and recovery can further
increase IT expenditures.

On the other hand, batch processing is well-suited for routine, overnight tasks such as
generating sales reports, performing accounting entries, and analyzing marketing data. It can
be cost-effective and less vulnerable to system disruptions, as it doesn't require real-time
interaction with users. Batch processing can be scheduled to run when network traffic is
```
