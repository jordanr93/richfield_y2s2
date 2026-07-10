---
document: "Information Systems 622 Study Guide"
source_file: "2026 Information Systems 622 Study Guide .pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "221-222"
printed_pages: "221-222"
section: "Capacity Planning"
chapter: "CHAPTER 6: Managing Systems Support and Security"
keywords:
  - "capacity"
  - "planning"
  - "performance"
  - "future"
  - "can"
  - "current"
  - "necessary"
  - "meet"
  - "model"
  - "what-if"
  - "analysis"
  - "like"
---

# Capacity Planning

Source trace: [original PDF](../../../originals/2026%20Information%20Systems%20622%20Study%20Guide%20.pdf) | PDF pages 221-222 | printed pages 221-222

Related sections: [Strategic Planning for IT Professionals](6-9-2-strategic-planning-for-it-professionals.md), [Big Data Analysis Techniques](../../big-data-iot-600-study-guide/sections/1-4-big-data-analysis-techniques.md), [Incorporate Insights into Strategic Planning](../../big-data-iot-600-study-guide/sections/87-incorporate-insights-into-strategic-planning.md), [Data Management Techniques in Big Data Environments](../../big-data-iot-600-study-guide/sections/4-6-data-management-techniques-in-big-data-environments.md), [Integrating Predictive and Prescriptive Analytics into Strategy Development](../../big-data-iot-600-study-guide/sections/5-4-2-integrating-predictive-and-prescriptive-analytics-into-strategy-development.md), [Layer Architecture of Internet of Things](../../big-data-iot-600-study-guide/sections/2-3-layer-architecture-of-internet-of-things.md)

## Extracted Text

```text
[PDF page 221; printed page 221]
management relies on performance and workload data for capacity planning.


6.4.3 Capacity Planning

Capacity planning involves monitoring current system activity and performance, predicting
future demand, and forecasting the resources necessary to meet desired service levels.
The first step is to create a current model based on the system’s current workload and
performance specifications. Then, future demand and user needs are projected over one to
three years. The model is analyzed to determine what adjustments are necessary to maintain
optimal performance and meet demands. A technique called "what-if analysis" is used to test
various scenarios by modifying one or more elements in the model and observing how other
elements are affected. For example, what-if analysis might answer questions like: How will

[PDF page 222; printed page 222]
response time be impacted if additional client workstations are added to the network? Can
the client/server system handle growth from a new website? What happens to server
throughput if more memory is added?
Tools like Microsoft Excel's Goal Seek feature can assist in what-if analysis by determining the
necessary changes to one value to achieve a specific result in another. In the example shown
in the text, Excel automatically calculates the impact on processing time when the number of
transactions increases to 9,000.
For effective capacity planning, detailed information about transaction volumes, transaction
patterns (daily, weekly, or monthly), query numbers, and the size and types of reports
generated is essential. If the system includes a local area network (LAN), network traffic levels
must be estimated to assess whether the existing hardware and software can handle the load.
For client/server systems, performance and connectivity specifications for each platform
need to be evaluated.




                                 (Tilley and Rosenblatt, 2024)

The most critical element is an accurate forecast of future business activities. If new business
functions or requirements are anticipated, contingency plans should be developed with input
from users and management. The goal is to ensure the system can meet future demands and
continue providing support for business operations. Some companies handle their own
capacity planning, while others purchase software like IDC’s Uptime Infrastructure Monitor
to assist in the process.
```
