---
document: "Big Data and IoT 600 Study Guide"
source_file: "2026 Big data  IOT 600 Study Guide.pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "42-44"
printed_pages: "34-36"
section: "Network Communication Protocols"
chapter: "Chapter 3: IoT technologies and Standards"
keywords:
  - "communication"
  - "iot"
  - "mqtt"
  - "protocol"
  - "protocols"
  - "devices"
  - "message"
  - "subscribe"
  - "qos"
  - "but"
  - "http"
  - "such"
---

# Network Communication Protocols

Source trace: [original PDF](../../../originals/2026%20Big%20data%20%20IOT%20600%20Study%20Guide.pdf) | PDF pages 42-44 | printed pages 34-36

Related sections: [Application Communication Protocols](3-2-1-application-communication-protocols.md), [IoT Communication Protocols](3-1-6-iot-communication-protocols.md), [Device Connectivity and Network Communication Standards](3-3-1-device-connectivity-and-network-communication-standards.md), [Summary](48-summary.md), [Utilize Data Visualization for Effective Strategy Communication](5-5-utilize-data-visualization-for-effective-strategy-communication.md), [4. 7 NETWORK MODELS](../../information-systems-622-study-guide/sections/4-4-7-network-models.md)

## Extracted Text

```text
[PDF page 42; printed page 34]
       Network Communication Protocols: These protocols facilitate the transfer of data
       between devices over networks such as LANs, WANs, or the internet.

3.2.1 Application Communication Protocols

       Message Queue Telemetry Transport (MQTT)


       MQTT is a lightweight messaging protocol designed to operate in environments with low
       bandwidth and intermittent connectivity. It works on a publish/subscribe architecture,
       where devices (clients) subscribe to topics to receive data updates published by brokers.
       MQTT is commonly used in scenarios where sensors need to communicate data reliably
       or unreliably.

          Use Case: In a smart factory, temperature sensors send data to an MQTT broker.
          Clients (such as controllers or monitoring systems) subscribe to these temperature
          data topics to receive real-time updates.

          Quality of Service (QoS) Levels:

                  QoS Level 0: No guarantee of message delivery.

                  QoS Level 1: Guarantees message delivery but may result in duplicate
                  messages.

                  QoS Level 2: Guarantees message delivery with no duplicates.

   HyperText Transfer Protocol (HTTP)


   HTTP is the foundational protocol for data exchange on the World Wide Web. While it’s used
   in IoT, it has some limitations:

              •   It’s a request-response protocol, designed for communication between two
                  systems at a time.
              •   It's unidirectional, meaning a client sends a request and receives a response,
                  which is not ideal for IoT’s multi-device communication needs.


                                                                                             34

[PDF page 43; printed page 35]
       •   It can be inefficient in terms of power consumption due to its reliance on
           TCP, making it unsuitable for battery-powered IoT devices.

Constrained Application Protocol (CoAP)


CoAP is designed for constrained networks, such as low-power or low-bandwidth
environments. Like HTTP, it follows a client-server model but is more optimized for IoT
due to its use of UDP and low overhead. CoAP supports methods like GET, POST, PUT, and
DELETE for resource manipulation, similar to HTTP, but is much lighter and suited for
intermittent connections.

Data Distribution Service (DDS)


DDS uses a publish/subscribe architecture similar to MQTT but differs in that it operates
without brokers. Devices are directly connected in a Global Data Space (GDS), which
reduces bottlenecks and supports dynamic network changes, meaning devices can join or
leave the network without issues. It’s used in high-demand systems where real-time data
flow is critical.

WebSocket


WebSocket creates a full-duplex TCP connection between a client (typically a browser)
and a server, allowing continuous two-way communication. It improves on HTTP by
maintaining a persistent connection, but it is still considered too heavy for many IoT
applications due to the overhead associated with maintaining the connection.

Advanced Message Queue Protocol (AMQP)


Initially designed for banking environments, AMQP supports both publish/subscribe and
request/response models. It guarantees message delivery, and its TCP-based nature
ensures reliability, but it comes with significant overhead compared to MQTT. AMQP
supports three QoS levels:

   At most once: No acknowledgment needed from the receiver.

   At least once: Acknowledgment is required, and missing messages are retransmitted.

   Exactly once: Guarantees that each message is sent only once, requiring special
   coordination.

Extensible Messaging and Presence Protocol (XMPP)
                                                                                        35

[PDF page 44; printed page 36]
       XMPP is a decentralized, open-source messaging protocol that was initially used for
       instant messaging. In IoT, it’s used for communication between devices, especially in
       environments requiring high security. XMPP uses an addressing scheme similar to emails
       (e.g., jabberID@domain.com), allowing devices to communicate regardless of their
       physical location.

       OPC Unified Architecture (OPC UA)


       OPC UA is widely used in industrial applications to enable interoperability between
       different manufacturers, operating systems, and programming languages. It is transport-
       agnostic, meaning it supports both request/response and publish/subscribe
       communication models, making it highly versatile for IoT applications across industries.



3.2.2 Network Communication Protocols

Network communication protocols are essential for ensuring that IoT devices can communicate
efficiently over various types of networks. These protocols operate at different layers of the
network stack and are optimized for the specific needs of IoT devices, such as low power
consumption, scalability, and reliability.

       IPv6 over Low-Power Wireless Personal Area Networks (6LoWPAN)


       6LoWPAN is an adaptation of IPv6 for low-power devices, enabling them to communicate
       directly over the internet. It is ideal for networks using IEEE 802.15.4-based technologies,
       like smart meters and environmental sensors, by ensuring compatibility with traditional
       internet protocols.

       Bluetooth & Bluetooth Low Energy (BLE)


       Bluetooth, especially its energy-efficient version BLE, is used for short-range
       communication. It is commonly found in personal IoT devices such as wearables and
       medical monitors. BLE offers low power consumption and is ideal for devices that require
       periodic communication rather than continuous data transmission.

       LoRaWAN (Long Range Wide Area Network)


       LoRaWAN is a low-power, long-range communication protocol designed for applications

                                                                                                36
```
