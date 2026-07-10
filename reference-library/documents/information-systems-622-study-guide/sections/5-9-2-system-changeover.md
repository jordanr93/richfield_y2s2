---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "188-191"
printed_pages: "188-191"
section: "System Changeover"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "environment"
  - "operational"
  - "test"
  - "all"
  - "access"
  - "must"
  - "any"
  - "can"
  - "changeover"
  - "conducting"
  - "users"
  - "hardware"
---

# System Changeover

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 188-191 | printed pages 188-191

Related sections: [SYSTEM RETIREMENT](6-8-system-retirement.md), [Security Techniques for Protecting Big Data](../../big-data-iot-600-study-guide/sections/4-7-2-security-techniques-for-protecting-big-data.md), [basic building blocks of an IOT system](../../big-data-iot-600-study-guide/sections/2-4-2-basic-building-blocks-of-an-iot-system.md), [Create an Interface That Is Easy to Learn and Use](2-4-1-create-an-interface-that-is-easy-to-learn-and-use.md), [Focus on Usability](2-3-5-focus-on-usability.md), [GUIDELINES FOR USER INTERFACE DESIGN](2-4-guidelines-for-user-interface-design.md)

## Extracted Text

```text
[PDF page 188; printed page 188]
   •   Performing system changeover
   •   Conducting data conversion
   •   Providing training for users, managers, and IT staff
   •   Carrying out post-implementation tasks

   5.9.3 Operational and Test Environments

An environment, or platform, refers to a specific combination of hardware and software. The
environment used for the actual system operation is called the operational environment or
production environment. The environment used by analysts and programmers to develop and
maintain programs is called the test environment.

A separate test environment is necessary to maintain system security, integrity, and to protect
the operational environment. Typically, the test environment resides on a limited-access
workstation or server located in the IT department.

Access to the operational environment is restricted to users and must be strictly controlled.
Systems analysts and programmers should not have access to the operational environment
except to correct system problems or make authorized modifications. Otherwise, IT
department members should not be accessing the day-to-day operational system.

The test environment for an information system contains copies of all programs, procedures,
and test data files. Before making any changes to the operational system, the analyst must
verify them in the test environment and obtain user approval.

An effective testing process is essential to ensuring product quality. Every experienced
systems analyst can recall stories about seemingly innocent program changes that, when
introduced without proper testing, ended up causing unexpected problems. After any
modification, the same acceptance tests that were run during the system's development
should be repeated. By restricting access to the operational environment and conducting all
tests in a separate environment, the system can be protected, and issues that could damage
data or disrupt operations can be avoided.

The operational environment includes hardware and software configurations, system utilities,
telecommunications resources, and any other components that might affect system
performance. Since network capabilities are crucial in a client/server environment,
connectivity, specifications, and performance must be verified before installing applications.
All communication features in the test environment should be carefully checked and
rechecked after the applications are loaded into the operational environment.
Documentation should specify all network settings, technical, and operational requirements
for communication hardware and software. If network resources need to be built or upgraded
to support the new system, the platform must be rigorously tested before system installation
begins.

[PDF page 189; printed page 189]
                               (Tilley and Rosenblatt, 2024)

5.9.4 System Changeover

System changeover is the process of transitioning from the old system to the new one and
making the new system operational. The changeover process can either be rapid or gradual,
depending on the method chosen. The four primary changeover methods are:

   1.   Direct Cutover
   2.   Parallel Operation
   3.   Pilot Operation
   4.   Phased Operation

Each method has different risk, cost, and timing considerations, and the best choice depends
on the specific situation.

[PDF page 190; printed page 190]
                                (Tilley and Rosenblatt, 2024)



Direct Cutover

The direct cutover method involves switching from the old system to the new one
immediately once the new system becomes operational. This method is typically the least
expensive because only one system needs to be operated and maintained at a time.

However, direct cutover carries significant risks. Despite thorough testing and training,
problems may arise during actual system operation due to unforeseen data situations or user
errors. Since live data is often more complex and larger in volume than test data, these issues
can be harder to anticipate.

Detecting errors is also more difficult with direct cutover because there is no old system to
compare with the new one to check for discrepancies. Additionally, major system errors could
cause the system to terminate abnormally, and with direct cutover, reverting to the old
system is not an option.

Although it is risky, companies often choose direct cutover for implementing commercial
software packages because these packages are typically less prone to total failure. For
systems developed in-house, direct cutover is generally used only for non-critical systems or
when the operating environment cannot support both old and new systems.

When using direct cutover, timing is crucial. For example, systems with periodic cycles
(weekly, monthly, or yearly) should ideally be switched over at the beginning of a quarter or
fiscal year to minimize disruptions.

[PDF page 191; printed page 191]
Parallel Operation

Parallel operation involves running both the old and new systems simultaneously for a
specified period. Data is input into both systems, and the output from the new system is
compared with the output from the old system. The old system is terminated once the new
system is confirmed to be working correctly.

Parallel operation is the safest method because it provides a backup (the old system) if the
new system fails. The output from both systems can be compared, making it easier to detect
problems.

However, this method is the most expensive. Running both systems incurs the cost of
operating and maintaining two systems, and users must work in both systems. In some cases,
temporary staff might be required to handle the extra workload. Additionally, running both
systems could cause delays in processing.

Parallel operation is not practical if the systems are incompatible or if they perform different
functions. It's also inappropriate if the new system changes the business operations
significantly.

Pilot Operation

Pilot operation involves implementing the new system at a selected location (e.g., one branch
or department) while the old system continues to operate in the rest of the organization.
Once the system proves successful at the pilot site, it is rolled out across the rest of the
organization, often using direct cutover.

Pilot operation reduces the risk of system failure compared to direct cutover since only a small
portion of the company is affected at first. It also allows the system to be tested in a real-
world environment without impacting the entire organization. Additionally, the parallel
operation at the pilot site is less expensive than running both systems across the entire
company.

Once the system is proven successful at the pilot site, it can be fully implemented with
minimal changeover time.

Phased Operation

The phased operation method involves implementing the new system in stages or modules.
For instance, one part of the system (e.g., materials management) may be implemented first,
followed by other parts (e.g., production control). Each module is implemented using one of
the other three changeover methods.

Phased operation limits the risk of failure to the module being implemented at the time. If
one module fails, it will not affect the rest of the system. This is a more cost-effective option
than full parallel operation since only one part of the system is operational at a time.
```
