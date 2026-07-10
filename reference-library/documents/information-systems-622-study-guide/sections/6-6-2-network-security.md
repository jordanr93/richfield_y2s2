---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "231-235"
printed_pages: "231-235"
section: "Network Security"
chapter: "CHAPTER 6: Managing Systems Support and Security"
keywords:
  - "network"
  - "key"
  - "security"
  - "traffic"
  - "encryption"
  - "wireless"
  - "private"
  - "can"
  - "public"
  - "wpa"
  - "which"
  - "unauthorized"
---

# Network Security

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 231-235 | printed pages 231-235

Related sections: [Big Data Security Frameworks](../../big-data-iot-600-study-guide/sections/4-7-3-big-data-security-frameworks.md), [Cloud-based and distributed big data security solutions](../../big-data-iot-600-study-guide/sections/4-7-4-cloud-based-and-distributed-big-data-security-solutions.md), [Data Privacy and Security Concerns](../../big-data-iot-600-study-guide/sections/115-data-privacy-and-security-concerns.md), [Security Standards](../../big-data-iot-600-study-guide/sections/3-4-2-security-standards.md), [Security Standards for IoT](../../big-data-iot-600-study-guide/sections/3-3-3-security-standards-for-iot.md), [Security Techniques for Protecting Big Data](../../big-data-iot-600-study-guide/sections/4-7-2-security-techniques-for-protecting-big-data.md)

## Extracted Text

```text
[PDF page 231; printed page 231]
6.6.2 Network Security

A network consists of two or more devices connected to share data, known as network traffic.
To connect to a network, a computer needs a network interface, which includes hardware
and software that enables the device to interact with the network. Network traffic can be
encrypted to protect it from unauthorized access, which involves encoding the data to ensure

[PDF page 232; printed page 232]
its confidentiality.

ENCRYPTING NETWORK TRAFFIC

Network traffic is vulnerable to interception and potential manipulation, redirection, or
recording. For example, if an unencrypted password or credit card number is sent over a
network, it could be stolen. Encryption masks the content and purpose of the traffic, making
it unreadable to unauthorized users, though it remains visible.
There are two primary encryption techniques:
Private Key Encryption (Symmetric Encryption): This method uses a single key to both encrypt
and decrypt data. While it is fast and straightforward, it presents a key challenge: both the
sender and the receiver must share the same key. This introduces the risk of the key being
intercepted if it's transmitted along with the message.
Public Key Encryption (PKE) (Asymmetric Encryption): Each user has a pair of keys: a public
key and a private key. The public key encrypts messages, and it can be shared freely. Only the
private key can decrypt these messages, which is kept secure. Public key encryption is
commonly used in secure online transactions.

WIRELESS NETWORKS

Wireless network security is especially critical because wireless transmissions are more
vulnerable than those over wired networks. Encrypting wireless traffic makes intercepted
data unusable to unauthorized parties. The evolution of wireless security includes:
Wired Equivalent Privacy (WEP): This early method required a pre-shared key for each
wireless client but offered weak protection.
Wi-Fi Protected Access (WPA): WPA significantly improved security compared to WEP, using
protocols from the Wi-Fi Alliance.
WPA2: This is the latest enhancement to wireless security and extends WPA with the full
implementation of the IEEE 802.11i standard. WPA2 became mandatory for new Wi-Fi-
certified devices after 2006 and is compatible with WPA, making it easier to upgrade security.

PRIVATE NETWORKS

Encrypting all network traffic can significantly slow down the network, so it is not always
practical. In some cases, such as between a web server and a database server, businesses may
use a private network. This is a dedicated connection that doesn’t interact with external
networks, meaning unencrypted traffic is safe from external interception. Each device in a
private network has a dedicated interface, and no interface connects to an outside network,
allowing unencrypted data to remain secure.

VIRTUAL PRIVATE NETWORKS (VPNs)

For larger groups of remote users, Virtual Private Networks (VPNs) offer a secure alternative.
A VPN uses a public network, like the internet, to securely connect remote users. Instead of
using a dedicated connection, a VPN establishes a secure "tunnel" between the user and the
company's internal network. This encrypted tunnel ensures that all transmitted data is
protected. VPNs provide a practical solution for secure remote work.

[PDF page 233; printed page 233]
PORTS AND SERVICES
A port is a number used to route incoming traffic to the correct application on a device. In
TCP/IP networks, each packet of data contains a destination port, which tells the computer
where to send it. Ports are crucial for computer security because open ports can be exploited
by attackers.
Port Scans: Port scanning is a technique used by attackers to detect which services are running
on a computer by attempting connections to different ports. A successful connection to port
25, for example, would indicate the presence of an email service. These scans can be used to
map out a network and identify vulnerabilities.
Denial of Service (DoS) Attacks: A DoS attack occurs when an attacker floods a service with
numerous requests, overwhelming the server and preventing it from responding to legitimate
traffic. This can cause a server to crash or become unresponsive.
Distributed Denial of Service (DDoS) Attacks: A more severe form of DoS attack, a DDoS
involves multiple attacking computers coordinating their efforts to overwhelm a server. This
can cause significant disruptions to the target system, as illustrated in Figure 12-22. DDoS
attacks represent a serious cybersecurity threat, and organizations like the U.S. Computer
Emergency Readiness Team (US-CERT) are established to respond to such incidents (as shown
in Figure 12-23).




                                   (Tilley and Rosenblatt, 2024)

Firewalls: A firewall serves as the primary barrier between a local network (or intranet) and
the internet. It requires at least one network interface connected to the internet and another
to the local network. Firewall software monitors all network traffic to and from each interface.
Pre-configured rules define conditions for whether traffic will be allowed. When a rule
matches, the firewall will either accept, reject, or drop the traffic. If the firewall rejects traffic,

[PDF page 234; printed page 234]
it sends a response indicating that access is denied, but if traffic is dropped, there’s no
response. Firewalls can also be set up to detect and react to denial-of-service attacks, port
scans, and other suspicious activities.




                                 (Tilley and Rosenblatt, 2024)

Network Intrusion Detection: If an intruder tries to breach a system, an alarm should go off
when specific attack patterns or unusual activity are identified. A Network Intrusion Detection
System (NIDS) works like a burglar alarm, alerting administrators to suspicious network traffic
or configuration violations. NIDS needs fine-tuning to distinguish between legitimate traffic
and attacks, and it should be installed on network devices like switches that can monitor all
network traffic. While managing an NIDS can be time-consuming, it provides valuable insights
into attacker behavior and network performance.
Application Security: Besides securing computer rooms and network traffic, server-based
applications must also be safeguarded. This involves analyzing application functions,
identifying security risks, and reviewing documentation. Key areas include managing services,
hardening systems, setting application permissions, validating inputs, applying patches, and
reviewing software logs.
Services: Services are applications listening on specific ports. Unnecessary services should be
disabled to enhance security and performance. A service that's not needed might be
vulnerable to exploitation, such as a poorly configured FTP service that allows hackers to
upload harmful code.
Hardening: This process strengthens a system by removing unnecessary accounts, services,
and features. Default configurations may introduce vulnerabilities, so hardening reduces risks
by eliminating weaknesses, such as weak account permissions. Antivirus and antispyware
software can also be part of the hardening process to protect against malware.
Application Permissions: Applications should restrict access based on user roles. For example,
administrators have full access, while other users may have limited access. Restricting
permissions prevents unauthorized changes to applications.
Input Validation: This involves checking user inputs to ensure they meet expected criteria.
Proper validation prevents errors, improves data integrity, and reduces system maintenance.
Failing to validate inputs can lead to incorrect outputs and system behavior.
Patches and Updates: Software vulnerabilities are discovered over time, and patches are
issued to fix these issues. However, patches should be carefully tested before being applied,
as they could introduce other problems. Automated update services can handle patches but
must be used cautiously to avoid unintended consequences.
Software Logs: Logs track events, errors, and system activity, providing insights into potential
attacks and helping administrators track unauthorized access. Logs should be reviewed
regularly, and an NIDS can alert administrators to suspicious events.
File Security: Protecting files that contain sensitive data is crucial in any security program.

[PDF page 235; printed page 235]
Encryption and file permissions help safeguard these files.
Encryption: This is the process of making files unreadable to unauthorized users. Sensitive
information, such as financial or personnel records, should always be encrypted to protect
privacy. Most modern operating systems offer built-in encryption features.
Permissions: File security relies on permissions that determine what actions users can
perform on files. Permissions like read, write, and execute control access, ensuring that users
only have the necessary rights for their tasks. Administrators should assign minimal
permissions to limit risk.
User Groups: For easier management, user groups can be created with specific permissions.
Instead of assigning permissions to individual users, it's more efficient to assign them to
groups based on roles, which is particularly helpful when users change jobs within an
organization.
User Security: Security also depends on users' actions and their adherence to best practices.
Compromised user accounts are often the entry point for attackers, so it’s critical to manage
user identities, passwords, and be aware of social engineering tactics.
Identity Management: This refers to the controls and processes that identify legitimate users
and system components. A balanced identity management strategy ensures secure and
efficient access while maintaining privacy.
Password Protection: Passwords should be complex and changed regularly. IT managers
should enforce policies that require passwords to meet specific criteria. However, users often
bypass these measures by choosing weak passwords or writing them down in insecure places.
Social Engineering: Attackers may attempt to manipulate users into disclosing information
through social interactions, such as pretending to be someone else. Common techniques
include pretexting, where attackers gather personal information to commit fraud or identity
theft. Awareness training can help users recognize and resist these tactics.
User Resistance: Some users may resist strict security measures, seeing them as inconvenient.
It’s essential to communicate the importance of security to users and create a culture of
awareness. When users understand the impact of security on the company and its
stakeholders, they are more likely to adhere to protocols.
New Technologies: Emerging technologies can enhance security but also introduce new risks.
For example, security tokens can add an extra layer of authentication, but powerful search
applications can inadvertently expose sensitive information. Proper safeguards are necessary
to manage risks associated with these technologies.




                                (Tilley and Rosenblatt, 2024)
Procedural Security: This focuses on the policies and procedures that ensure secure
operations. Management must create a security-focused corporate culture, emphasizing that
security is everyone’s responsibility.
Need-to-Know Concept: This principle limits access to sensitive information to those who
```
