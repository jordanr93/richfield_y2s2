---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "144-148"
printed_pages: "144-148"
section: "Network Topology"
chapter: "4. 7 NETWORK MODELS"
keywords:
  - "network"
  - "topology"
  - "layer"
  - "model"
  - "osi"
  - "layers"
  - "physical"
  - "computers"
  - "devices"
  - "logical"
  - "hierarchical"
  - "handle"
---

# Network Topology

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 144-148 | printed pages 144-148

Related sections: [Device Connectivity and Network Communication Standards](../../big-data-iot-600-study-guide/sections/3-3-1-device-connectivity-and-network-communication-standards.md), [Network Communication Protocols](../../big-data-iot-600-study-guide/sections/3-2-2-network-communication-protocols.md), [Network Devices](4-7-3-network-devices.md), [How IOTs works](../../big-data-iot-600-study-guide/sections/2-2-how-iots-works.md), [Security Standards](../../big-data-iot-600-study-guide/sections/3-4-2-security-standards.md), [Security Standards for IoT](../../big-data-iot-600-study-guide/sections/3-3-3-security-standards-for-iot.md)

## Extracted Text

```text
[PDF page 144; printed page 144]
understand several key concepts, such as the OSI model, network topology, network protocols,
and wireless networks. These concepts help in configuring the network efficiently and
effectively.

4.7.1 The OSI Model

The OSI (Open Systems Interconnection) model is essential for understanding how data
moves between applications on different networked computers. The model consists of seven
layers, each responsible for a specific function. These layers ensure seamless network
connectivity across different hardware environments, providing a standardized way for
different systems to communicate.

The layers in the OSI model are:

   1.   Physical Layer: Deals with the hardware transmission of data over the network.
   2.   Data Link Layer: Manages error detection and correction from the physical layer.
   3.   Network Layer: Handles the routing of data packets across the network.
   4.   Transport Layer: Ensures error-free data transfer between devices.
   5.   Session Layer: Manages sessions between applications.
   6.   Presentation Layer: Translates data between the application and transport layers.
   7.   Application Layer: Provides the interface for software applications to communicate
        over the network.

   4.7.2 Network Topology

Network topology refers to how the network is physically or logically arranged. Physical
topology describes the actual layout of cables and devices, while logical topology describes
how data travels between devices.

A physical topology might not always match the logical topology, as cabling might be set up
for practical reasons (e.g., cost) but could still use a different pattern for logical data flow.
Network topologies can generally be grouped into four main types: hierarchical, bus, ring, and
star.

Hierarchical Network Topology

[PDF page 145; printed page 145]
In a hierarchical network, one or more powerful servers control the entire network. Lower-
level servers handle departmental tasks or more localized operations. This type of topology is
commonly used in larger organizations, such as retail chains, where a central computer tracks
sales and inventory levels while local computers handle day-to-day operations at individual
stores.

In this example:

   •   The central computer in the retail store chain analyzes sales trends and determines
       stock levels.
   •   Local computers at each store handle sales transactions and update the central
       computer.

This topology reflects the operational flow of the organization, where higher levels manage
broader tasks, while lower levels handle specific, localized tasks.




                                (Tilley and Rosenblatt, 2024)


Bus Network

In a bus network, a single communication path connects all devices, including the central
server, departmental servers, workstations, and peripheral devices. Data is transmitted in
both directions along the central bus. Key advantages of a bus network include:

   •   Lower cabling requirements compared to other topologies, as only one cable is
       needed.
   •   Flexibility: Devices can be added or removed without disrupting the entire network.

[PDF page 146; printed page 146]
   •   Fault tolerance: Failure in one workstation does not affect other devices on the
       network.

However, the bus network has significant disadvantages:

   •   If the central bus fails, the entire network goes down.
   •   Performance issues: As more devices are added, the network’s performance can
       degrade because all traffic passes through the same bus.

While bus networks were once a common LAN topology, they are now less popular due to
newer technologies. Some businesses still use bus networks to avoid the cost of new wiring
and hardware.




                                (Tilley and Rosenblatt, 2024)



Ring Network

A ring network is arranged in a circle where data flows in only one direction, passing through
each device until it reaches the destination. IBM’s token ring LANs were an example of this
setup, which was primarily used in large companies using IBM mainframe systems.

Advantages of a ring network:

   •   Structured data flow, as data only travels in one direction, reducing the risk of network
       collisions.

[PDF page 147; printed page 147]
Disadvantages:

   •   If any device fails, the entire network can be disrupted because data cannot bypass
       the failed device.
   •   Outdated: While still in use by some legacy systems, ring networks are less common
       today.




                                     (Tilley and Rosenblatt, 2024)

Star Network

The star network is one of the most popular LAN topologies due to its speed and versatility.
It has a central device (usually a switch) that manages the network and handles all data traffic
between devices. Older hub-based star networks have been largely replaced by switches,
which offer improved performance.

Advantages of a star network:

   •   Central control: All traffic flows into and out of the switch, making it easier to manage
       and monitor the network.
   •   Better performance: A switch ensures that data is only sent to the devices that need
       it, rather than broadcasting to all devices, as a hub does.
   •   Easy to expand: New devices can be added by connecting them to the central switch.

Disadvantages:

   •   The switch is a single point of failure; if it fails, the entire network can go down.
       However, in large star networks, backup switches can mitigate this risk.

[PDF page 148; printed page 148]
                                (Tilley and Rosenblatt, 2024)



Mesh Network

In a mesh network, every device is connected to every other device, providing multiple paths
for data to travel. This design is highly reliable and offers redundancy, as there are several
backup routes for data if one path fails.

Advantages of a mesh network:

   •   Redundancy: Multiple paths allow for uninterrupted communication if any node fails,
       which is particularly useful for mission-critical applications.
   •   Reliability: This design is resistant to network outages, as data can find alternative
       paths.

Disadvantages:

   •   Expensive: Setting up and maintaining a mesh network is costly due to the large
       number of connections required.
   •   Complexity: It is difficult to manage due to the numerous connections between
       devices.
```
