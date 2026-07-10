---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "227-230"
printed_pages: "227-230"
section: "Physical Security"
chapter: "CHAPTER 6: Managing Systems Support and Security"
keywords:
  - "security"
  - "physical"
  - "all"
  - "must"
  - "operations"
  - "access"
  - "levels"
  - "network"
  - "which"
  - "crucial"
  - "equipment"
  - "chain"
---

# Physical Security

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 227-230 | printed pages 227-230

Related sections: [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md), [Security Standards](../../big-data-iot-600-study-guide/sections/3-4-2-security-standards.md), [Security Standards for IoT](../../big-data-iot-600-study-guide/sections/3-3-3-security-standards-for-iot.md), [Security Techniques for Protecting Big Data](../../big-data-iot-600-study-guide/sections/4-7-2-security-techniques-for-protecting-big-data.md), [Security and Data Breaches](../../big-data-iot-600-study-guide/sections/123-security-and-data-breaches.md)

## Extracted Text

```text
[PDF page 227; printed page 227]
levels of protection. These levels include physical security, network security, application
security, file security, user security, and procedural security, all of which must work together
seamlessly. Similar to the links in a chain, the overall security of a system is determined by its

[PDF page 228; printed page 228]
most vulnerable component. While top-level management typically has the final say in
strategic decisions and budget allocations related to security measures, it's crucial for systems
analysts to have a thorough understanding of all security aspects to provide well-informed
recommendations regarding these interconnected security levels and their specific
requirements. Like the chain shown in Figure 12-19, system security is only as strong as the
weakest link.




                                  (Tilley and Rosenblatt, 2024)



6.6.1 Physical Security

The first level of system security focuses on the physical environment, which includes IT
resources and personnel across the organization. It is crucial to pay special attention to critical
equipment located in operations centers, where servers, network hardware, and other
related devices are managed. Large companies typically have dedicated rooms specifically
designed for IT operations, while smaller businesses may repurpose an office or storage
space. Regardless of size or structure, an operations center must be safeguarded from
unauthorized access. In addition to the centrally located equipment, all computers within the
network must be secured, as each server or workstation could serve as a potential entry point.
Physical access to computers represents a point of entry into the system, which needs to be
carefully controlled and protected.

OPERATIONS CENTER SECURITY:

Perimeter security is crucial in any room or area where computer equipment is operated or
maintained. Physical access should be strictly controlled, with each entrance fitted with a
suitable security device. All access doors should feature internal hinges and electromagnetic

[PDF page 229; printed page 229]
locks with battery backup systems to ensure power availability in case of an outage. When
the battery runs out, the doors should fail in a closed position, but there must be an
emergency release allowing those inside the room to open the door.
To improve security, many companies are incorporating biometric scanning systems that
analyze an individual's facial features, fingerprints, handprints, or eye characteristics, as
illustrated in Figure 12-20. These advanced authentication methods replace magnetic ID
badges, which are susceptible to loss, theft, or tampering. For example, Apple's Face ID
system, mentioned in Chapter 2, is a biometric security method used for smartphones and
mobile devices, as discussed in the section on portable computers.
Video cameras and motion sensors can also be deployed to monitor the security of the
computer room, documenting all physical activity. Motion sensors use infrared technology to
detect movement and can be set to trigger audible or silent alarms and send email alerts
when activated. Additionally, sensors can monitor the temperature and humidity within the
computer room. Motion sensor alarms should be set to activate during times when no activity
is expected, and authorized technicians should have codes to disable or enable the alarms as
needed.




                                (Tilley and Rosenblatt, 2024)



SERVERS AND DESKTOP COMPUTERS:

Whenever possible, server and desktop computer cases should be equipped with locks. This
simple precaution helps prevent an intruder from altering the hardware configuration,
damaging the equipment, or removing disk drives. Server racks should also be locked to
prevent unauthorized insertion or removal of keystroke loggers. A keystroke logger is a device
placed between a keyboard and computer, typically appearing as an ordinary cable plug,
making it inconspicuous. It records everything typed, including passwords, while the system
operates normally. While keystroke loggers can be used legitimately for system monitoring
and restoration, they represent a serious security risk if used maliciously by an intruder.
In addition to hardware-based keystroke loggers, software-based versions exist. These
programs, which can be disguised as legitimate software, are often downloaded from the
internet or a company network. They operate invisibly, recording keystrokes and transmitting
the information to the person who installed them. Such malicious software can be removed
by antivirus and antispyware programs, discussed later in the Application Security section.
Tamper-evident cases are a valuable addition wherever possible. These cases are designed to
indicate any attempt to open or unlock them. If a computer case is opened, an indicator LED
remains lit until it is cleared with a password. While tamper-evident cases don't prevent

[PDF page 230; printed page 230]
unauthorized access, they make it more likely that a security breach will be detected. Many
modern servers are now offered with tamper-evident cases as standard.
For servers and workstations left unattended, monitor screen savers should be used that hide
the display and require special passwords to be cleared. Locking the screen after a period of
inactivity is another protective measure. A BIOS-level password (also known as a boot-level
or power-on password) can be set up to prevent unauthorized individuals from booting the
computer using secondary devices. This password needs to be entered before the computer
can be started.
Lastly, companies must plan for power reliability. For mission-critical systems, large-scale
backup power sources are necessary to ensure business continuity. In other cases, computer
systems and network devices should be connected to an uninterruptible power supply (UPS)
that includes battery backup with enough capacity. The UPS should be capable of supporting
short-term operations to allow for proper system shutdown and backup processes.

PORTABLE COMPUTERS:

When evaluating physical security, it's important to account for extra security measures for
notebooks, laptops, and tablet computers. Due to their small size and high value, these
devices are prime targets for theft and industrial espionage. While the following suggestions
focus on notebook security, many also apply to desktop workstations.
Select a secure operating system: Choose an OS that supports secure logins, BIOS-level
passwords, and strong firewall protection. Always use a user account with limited privileges
rather than an administrator account. Additionally, obscure the administrator account name
to make it harder for casual intruders to guess.
Mark the computer: Engrave the device with the company name and address or attach a
tamper-proof asset ID tag. Many hardware vendors offer the option to add an asset ID tag to
the BIOS, so a message like "Property of [Company Name] – Company Use Only" can appear
upon startup. While these steps may not deter professional thieves, they can make the device
less appealing to casual thieves or make it more difficult to resell. Security experts also
recommend using a generic carrying case instead of a custom one that might attract
attention.
Consider biometric devices: Opt for a computer with a built-in fingerprint reader or facial
recognition system for an extra layer of security.
Universal Security Slot (USS): Many laptops are equipped with a USS that allows you to attach
a cable lock or laptop alarm. While these precautions might not stop a professional thief, they
can discourage casual theft.
Backup data: Always back up all critical data before using the notebook computer outside the
office. For highly sensitive data, use removable media like a flash memory device instead of
storing it on the laptop's hard drive.
Use tracking software: Consider installing software that enables the laptop to periodically
contact a security tracking center. If the device is stolen, the tracking system can identify the
computer and its location, helping law enforcement agencies recover it.
Location services and remote wiping: Services like Apple's Find My iPhone, Google’s Find My
Device, and Microsoft’s similar offerings help locate lost devices. These services also allow
remote data wiping and factory resets. For example, Apple's app, shown in Figure 12-21, can
remotely erase data from a stolen iPhone.
Stay alert while traveling: Be cautious in high-risk situations where thieves might create a
```
