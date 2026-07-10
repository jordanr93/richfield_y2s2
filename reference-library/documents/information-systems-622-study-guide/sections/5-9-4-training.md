---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "190-196"
printed_pages: "190-196"
section: "Training"
chapter: "CHAPTER 5: Managing Systems Implementation"
keywords:
  - "old"
  - "new"
  - "operation"
  - "both"
  - "direct"
  - "cutover"
  - "parallel"
  - "errors"
  - "because"
  - "running"
  - "output"
  - "pilot"
---

# Training

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 190-196 | printed pages 190-196

Related sections: [Epilogue](../../big-data-iot-600-study-guide/sections/01-epilogue.md), [Evaluating Security Challenges in IoT Systems](../../big-data-iot-600-study-guide/sections/2-5-evaluating-security-challenges-in-iot-systems.md), [IoT Technologies: Overview](../../big-data-iot-600-study-guide/sections/3-1-iot-technologies-overview.md), [Data Conversion](5-9-3-data-conversion.md), [Legacy Systems](4-1-6-legacy-systems.md), [User Training](6-1-1-user-training.md)

## Extracted Text

```text
[PDF page 190; printed page 190]
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

[PDF page 192; printed page 192]
However, phased operation is not feasible if the system cannot be divided into logical
modules or if the number of modules is large. In these cases, it might become more expensive
than pilot operation.

Choosing the Right Method

Each changeover method has its own set of advantages and disadvantages. A systems analyst
must weigh these factors carefully and recommend the best method based on the specific
business situation, the system's complexity, the organization's tolerance for risk, and the
resources available.

The final decision will be influenced by input from the IT staff, users, and management, with
the ultimate goal of minimizing risk while ensuring a smooth transition from the old system
to the new one.




5.9.5 Data Conversion

Data conversion is a crucial part of the system installation process, where data from the old
system is transferred to the new system. The conversion process can happen before, during,
or after the new system becomes fully operational. It is important to develop a data
conversion plan early and test it once the test environment is set up.

When replacing an existing system with a new one, data conversion should ideally be
automated. The old system may be able to export data in a format compatible with the new
system or use a standard format like A Cll or ODBC. ODBC (Open Database Connectivity) is a

[PDF page 193; printed page 193]
widely used industry standard that enables databases from different vendors to communicate
and exchange data. Most database vendors provide ODBC drivers to facilitate this
communication.

If a standard format is unavailable, a program will need to be created to extract the data and
convert it into a suitable format for the new system. Data conversion can be more challenging
when transitioning from a manual system, as all data may need to be manually entered unless
scanning is used. Even in automated conversions, the new system may require additional data
that must be entered manually.

During the conversion process, strict input controls must be in place to protect the data from
unauthorized access and prevent incorrect data input. Errors are inevitable despite careful
preparation. For example, issues like duplicate customer records or inconsistent data that
were tolerated in the old system may cause the new system to fail. Organizations often
require that users verify all data, fix errors, and provide any missing information during the
conversion. Although this process can be costly and time-consuming, it is essential that the
new system is populated with accurate and error-free data.

5.9.6 Training

No system can be effective without proper training, whether it involves software, hardware,
or manufacturing processes. For an information system to succeed, it requires training for
users, managers, and IT staff members. The success of the entire system development can
depend on whether people understand and know how to effectively use the system.

Training Plan

A training plan should be considered early in the system development process. As
documentation is created, it should be assessed for how it can be used in future training
sessions. When the system is implemented, it's important to provide the right training for the
right people at the right time. The first step is identifying who needs training and what kind
of training is required. The organization should be carefully analyzed to determine how the
system supports business operations and who will be involved or affected by the system.

The three primary groups that require training are users, managers, and IT staff. A manager
doesn't need to know every feature or detail of the system but should have an overview to
ensure proper user training. Users, on the other hand, need to know how to perform their
specific job functions but do not need to understand the full system's design or cost allocation.
IT staff members need to have the most comprehensive understanding of the system to
support it, as they must understand its operation, how it supports business needs, and the
skills users need to perform their tasks.

Once training needs are identified, decisions must be made about how to deliver the training.
Training can be sourced from vendors, outside training firms, or from internal resources, such
as IT staff.

[PDF page 194; printed page 194]
                                 (Tilley and Rosenblatt, 2024)



Vendor Training

When the system involves purchasing software or hardware, vendor-supplied training should
be part of the request for proposal (RFP) or request for quotation (RFQ). Many vendors offer
training programs either for free or at a low cost, which may be included as part of the product
package. In some cases, companies may negotiate training costs depending on their
relationship with the vendor.

Vendor training typically focuses on the products the vendor has developed and often
provides the best value. However, this training may be limited to the standard version of the
product, and additional in-house training may be necessary if the product has been
customized for the organization.

Webinars, Podcasts, and Tutorials

Vendors often offer web-based training options, such as webinars, podcasts, and tutorials. A
webinar is an online seminar that offers an interactive training experience. These sessions are
typically scheduled events with a group of pre-registered users and a presenter. They can also

[PDF page 195; printed page 195]
be prerecorded and accessed as a webcast, which is a one-way transmission for on-demand
viewing.

A podcast is an audio or multimedia file available for download, which users can listen to at
their convenience. Podcasts can be pre-scheduled, made available on demand, or updated
automatically, depending on user preferences.

A tutorial is an online, interactive lesson that guides users through learning materials. These
can be developed by software vendors, an organization’s IT team, or third parties. Tutorials
are often available for popular software packages and may be sold separately online.

Outside Training Resources

Independent training firms can also provide hardware or software training if vendor training
is not feasible or internal resources are unavailable. The growth of information technology
has led to an expansion in the computer training industry. Many training firms, institutes, and
consultants offer both standardized and customized training programs. For example,
platforms like Udemy provide online courses to fulfill various training needs. Additionally,
universities, industry associations, and other nonprofit organizations may offer training
resources.




                                (Tilley and Rosenblatt, 2024)



Training Tips

[PDF page 196; printed page 196]
In many cases, both IT staff and user departments are responsible for developing and
conducting training for internally developed software. If the organization has a service desk,
their staff might assist with user training.

Multimedia can be an effective training tool. Tools like Microsoft PowerPoint or Apple
Keynote can be used to create engaging presentations with slides, animations, and sound.
Software that records keystrokes and mouse actions, such as Camtasia or Panopto, can
provide demonstrations of the system in action. If a media or graphics team is available, they
can help produce training materials, including videos and instructional charts.




                                (Tilley and Rosenblatt, 2024)


   •   Train People in Groups: Group training is an efficient way to utilize time and
       resources. It also provides the opportunity for trainees to learn from one another
       through shared questions and challenges. Training should be tailored to the job
       interests and skills of different participant groups. For example, IT staff and users
       require different types of training, and a single program may not meet everyone’s
       needs.
   •   Select the Most Effective Training Location: Conducting training at the company's
       location offers benefits such as no travel costs, the ability to handle local emergencies,
       and the convenience of training in the actual environment where the system will
       operate. However, there are potential downsides: employees may be distracted by
       other duties, and using company facilities could disrupt normal operations and limit
       hands-on training opportunities.
   •   Provide Multiple Learning Methods: People learn in different ways. Some prefer
       lectures, discussions, or Q&A sessions, while others learn best by watching
       demonstrations or reading materials. Most people benefit most from hands-on
       experience, so training should include methods that cater to hearing, seeing, and
       doing.
   •   Leverage Previous Trainees: After one group has been trained, they can assist others.
       Peer learning can be effective, as users often understand the system more quickly
       when trained by colleagues with similar experiences and job responsibilities. The
       "train-the-trainer" strategy can be used, where knowledgeable users train others. In
```
