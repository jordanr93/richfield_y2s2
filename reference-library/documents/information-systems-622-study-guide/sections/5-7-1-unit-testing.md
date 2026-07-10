---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "180-182"
printed_pages: "180-182"
section: "Unit Testing"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "testing"
  - "test"
  - "integration"
  - "unit"
  - "individual"
  - "errors"
  - "might"
  - "ensures"
  - "before"
  - "correct"
  - "possible"
  - "values"
---

# Unit Testing

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 180-182 | printed pages 180-182

Related sections: [TESTING](5-7-testing.md), [Testing Process After Coding](138-testing-process-after-coding.md), [Testing For The End Of A File](../../internet-programming-622-study-guide/sections/3-10-testing-for-the-end-of-a-file.md), [Data Cleaning, Normalization, and Transformation in Big data Workflows](../../big-data-iot-600-study-guide/sections/1-5-data-cleaning-normalization-and-transformation-in-big-data-workflows.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Diagnostic Analytics](../../big-data-iot-600-study-guide/sections/93-diagnostic-analytics.md)

## Extracted Text

```text
[PDF page 180; printed page 180]
      to more formal testing phases, starting with unit testing, then progressing to
      integration testing, and finally system testing, as shown in Figure 11-21.

5.7.3 Unit Testing

Unit testing is the process of testing an individual program or module to identify and eliminate
execution errors that could cause abnormal program termination and logic errors that might
have been overlooked during the desk checking phase. This ensures that each part of the
program works as expected before integration with other parts of the system.

[PDF page 181; printed page 181]
                                (Tilley and Rosenblatt, 2024)


Test Data

Test data plays a crucial role in identifying both correct and erroneous data, ensuring the
system functions correctly in all possible situations. For instance, if a program expects
numeric input within a certain range, the test data should cover:

   •   Minimum values
   •   Maximum values
   •   Out-of-range values
   •   Alphanumeric characters, to test error handling

Software tools are often employed during testing to identify the location and possible causes
of program errors.

Unit Testing

In unit testing, individual programs or modules are tested separately before they are
integrated into the system. One common technique used during this phase is stub testing. In
stub testing, programmers simulate other program outcomes or results, displaying messages
to indicate whether the program executes successfully. This ensures that individual
components work as intended before they are connected to the rest of the system.

Typically, test data is created by someone other than the original programmer, often systems
analysts, as part of a larger test plan that outlines how, when, and by whom testing will be

[PDF page 182; printed page 182]
conducted. This plan also identifies what test data will be used. A comprehensive test plan
should cover every possible situation the program might encounter.

Integration Testing

Integration testing involves testing programs that depend on each other. For example, if
there is a program that checks and validates customer credit status and another that updates
the customer master file, integration testing ensures the correct transfer of data between
these programs. Without integration testing, there’s no guarantee that the data passed from
one program to another will be correct.

During integration testing, test data must account for both normal and unusual conditions.
For instance, one might test by passing typical records followed by blank or incomplete
records to simulate unusual situations.

It’s important that integration tests only begin after all unit tests have been completed
successfully.

System Testing

System testing is the final stage of testing, where the entire system is tested as a whole. It
involves simulating actual operating conditions by entering data (including real data) and
performing tasks like queries and report generation. The goal is to verify that the system
performs as expected under all conditions. This includes checking:

   •   All input handling, both valid and invalid
   •   User interaction with the system
   •   Proper integration of all system components
   •   The system’s ability to handle expected data volumes efficiently

Commercial software packages also undergo system testing, though unit and integration tests
may not be performed in the same manner. Successful system testing is often referred to as
acceptance testing since it signifies that the system is ready for deployment.

Challenges and Considerations

   •   Testing Effort: The amount of testing required depends on the project, and decisions
       must be made carefully. Pressure from users, tight budgets, and management
       deadlines often push for quick testing and deployment, which can compromise the
       quality of the final product.
   •   Cost of Errors: Testing helps identify errors early, potentially saving time and money
       by preventing costly issues later. However, no system is 100% error-free, and some
       issues may not be discovered until the system is operational. Critical errors affecting
       data integrity must be addressed immediately, while minor issues (e.g., typographical
       errors) can be corrected post-deployment.
   •   User Expectations: Users may have differing expectations, with some wanting a
       completely finished product while others may be willing to accept minor updates after
```
