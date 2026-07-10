---
document: "Big Data and IoT 600 Study Guide"
source_file: "2026 Big data  IOT 600 Study Guide.pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "23-23"
printed_pages: "15-15"
section: "Layer Architecture of Internet of Things"
chapter: "Chapter 2: IoT Architectures and Applications"
keywords:
  - "layer"
  - "middleware"
  - "perception"
  - "architecture"
  - "internet"
  - "things"
  - "iot"
  - "decisions"
  - "can"
  - "its"
  - "name"
  - "like"
---

# Layer Architecture of Internet of Things

Source trace: [original PDF](../../../originals/2026%20Big%20data%20%20IOT%20600%20Study%20Guide.pdf) | PDF pages 23-23 | printed pages 15-15

Related sections: [THE IMPACT OF THE INTERNET](../../information-systems-622-study-guide/sections/4-4-the-impact-of-the-internet.md), [THE EVOLUTION OF SYSTEM ARCHITECTURE](../../information-systems-622-study-guide/sections/4-2-the-evolution-of-system-architecture.md), [Practical Application of IoT Technologies and Standards](3-5-practical-application-of-iot-technologies-and-standards.md), [Database Architecture](../../internet-programming-622-study-guide/sections/4-1-database-architecture.md), [Data Standards in IoT](3-4-data-standards-in-iot.md), [Hadoop architecture](4-3-hadoop-architecture.md)

## Extracted Text

```text
[PDF page 23; printed page 15]
2.3 Layer Architecture of Internet of Things




Figure 2.3 https://www.geeksforgeeks.org/5-layer-architecture-of-internet-of-things/

Perception Layer
The IoT architecture's first layer is this one. Numerous sensors and actuators are employed at the
perception layer to collect pertinent data, such as temperature, moisture content, noises, and
intruder detection. This layer's primary job is to gather information from the environment and
transmit it to a different layer so that decisions can be made based on it.

Network Layer
It is the layer that connects the middleware and perceptual layers, as its name implies. It uses
networking technologies like 3G, 4G, UTMS, WiFi, infrared, etc. to receive data from the
perception layer and send it to the middleware layer. Because it facilitates connection between
the middleware layer and perception, this layer is also known as the communication layer. Every
data transmission is carried out safely, maintaining the acquired data confidential.

Middleware Layer
Advanced functionality like storage, calculation, processing, and action-taking are all included in
the middleware layer. It saves the entire data set and provides the device with the relevant info
based on its name and address. Additionally, it can make decisions based on computations
performed on sensor data sets.

Application Layer
Using data from the middleware layer, the application layer controls every application operation.
Sending emails, turning on alarms, security systems, turning on and off gadgets, smartwatches,
smart agriculture, and more are all part of this program.


                                                                                                15
```
