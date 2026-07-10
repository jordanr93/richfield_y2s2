---
document: "Big Data and IoT 600 Study Guide"
source_file: "2026 Big data  IOT 600 Study Guide.pdf"
document_version: "created 2026-01-12; modified 2026-01-12"
pdf_pages: "61-65"
printed_pages: "53-57"
section: "Common Big Data Storage Architectures"
chapter: "Chapter 4: Big Data Storage and Security"
keywords:
  - "storage"
  - "big"
  - "distributed"
  - "file"
  - "hdfs"
  - "architectures"
  - "which"
  - "nodes"
  - "machines"
  - "designed"
  - "processing"
  - "files"
---

# Common Big Data Storage Architectures

Source trace: [original PDF](../../../originals/2026%20Big%20data%20%20IOT%20600%20Study%20Guide.pdf) | PDF pages 61-65 | printed pages 53-57

Related sections: [Big Data Storage Architectures](4-5-big-data-storage-architectures.md), [Big Data Storage Solutions](4-4-big-data-storage-solutions.md), [Key Characteristics of Big Data Storage Architectures](4-5-1-key-characteristics-of-big-data-storage-architectures.md), [Common tools and frameworks used for big data analysis](1-3-common-tools-and-frameworks-used-for-big-data-analysis.md), [Fundamentals of Big Data Storage](4-1-fundamentals-of-big-data-storage.md), [Chapter 4: Big Data Storage and Security](4-chapter-4-big-data-storage-and-security.md)

## Extracted Text

```text
[PDF page 61; printed page 53]
performance. Let's explore the most common Big Data storage architectures, which include
distributed storage, data lakes, NoSQL databases, and cloud-based systems.

4.5.1 Key Characteristics of Big Data Storage Architectures

   Scalability:

           Big Data storage systems must scale horizontally, meaning they can expand by adding
           more machines rather than upgrading existing hardware. This ensures that data
           storage grows alongside increasing data volumes.

   Fault Tolerance:

           Given the distributed nature of Big Data, systems are designed to handle failures
           without losing data. Fault tolerance is achieved by replicating data across multiple
           nodes to ensure availability even when part of the system fails.

   Distributed Processing:




                                                                                                 53

[PDF page 62; printed page 54]
           Big Data systems use distributed processing, where data is processed in parallel across
           different nodes or machines, which speeds up data analysis. Frameworks like Apache
           Hadoop and Apache Spark are crucial in this architecture.

   High Throughput:

           Big Data storage solutions are optimized for high throughput, enabling quick data
           read/write operations. This is essential for real-time processing and large-scale data
           analytics.

4.5.2 Common Big Data Storage Architectures

Distributed File Systems (DFS)

       Distributed file systems like Hadoop Distributed File System (HDFS) are designed to
       handle large-scale data storage across multiple machines. HDFS divides large datasets
       into smaller blocks, which are distributed across different nodes. Data is processed in
       parallel, improving both scalability and performance.

HDFS Architecture:

HDFS is designed as a master/slave system. One NameNode, a master server that controls client
access to files and maintains the file system namespace, makes up an HDFS cluster. Furthermore,
a number of DataNodes—typically one for each cluster node—manage the storage connected to
the nodes they operate on. HDFS permits the storage of user data in files and provides a file
system namespace. A file is internally divided into one or more blocks, each of which is kept in a
collection of DataNodes. File system namespace activities, such as opening, shutting, and
renaming files and directories, are carried out by the NameNode. Additionally, it establishes how
blocks are mapped to DataNodes. Serving read and write requests from the file system's
customers is the responsibility of the DataNodes. When instructed by the NameNode, the
DataNodes also create, remove, and replicate blocks.




                                                                                               54

[PDF page 63; printed page 55]
Figure 4.2 HDFS architecture , https://hadoop.apache.org/docs/r1.2.1/hdfs_design.html

Software components called NameNode and DataNode are made to operate on standard
computers. Usually, a GNU/Linux operating system (OS) powers these computers. Any computer
that can run Java can run the NameNode or DataNode software, which is how HDFS is
constructed. HDFS may be installed on a variety of computers thanks to the use of the incredibly
portable Java programming language. In a typical deployment, the NameNode program is the
only software running on a dedicated workstation. One instance of the DataNode software is
installed on each of the other computers in the cluster. Although it is rarely the case in an actual
deployment, the design does not prohibit operating many DataNodes on the same system.
A cluster's architecture is much simplified when there is only one NameNode present. All HDFS
metadata is stored and arbitrated by the NameNode. Because of the way the system is set up,
user data never passes via the NameNode.



Replication: Data blocks are replicated across multiple DataNodes, ensuring fault tolerance. If
one node fails, the data can still be accessed from another node.

                   Scalability: As data grows, more nodes can be added to the cluster to handle
                   the increasing load.

           Advantages:

                   Scalability and fault tolerance.


                                                                                                 55

[PDF page 64; printed page 56]
             Suitable for batch processing and handling large datasets.

NoSQL Databases

      NoSQL databases are designed to store unstructured and semi-structured data and
      are particularly suited for Big Data applications that require horizontal scaling and fast
      data retrieval. These databases offer flexibility in handling a variety of data types and
      are optimized for high performance.

      Types of NoSQL Databases:

             Document Stores (e.g., MongoDB): Store data in flexible formats like JSON or
             BSON, allowing for easy handling of semi-structured data.

             Column-family Stores (e.g., Apache Cassandra): Data is stored in columns,
             which optimizes read and write operations for large datasets.

             Key-Value Stores (e.g., Redis): Store data as simple key-value pairs, offering
             extremely fast retrieval speeds, often used for caching.

             Graph Databases (e.g., Neo4j): Store data in graph format, ideal for
             applications that need to analyze complex relationships between data points.

      Advantages:

             High scalability and flexibility to handle diverse data types.

             Suitable for real-time data processing.

Data Lakes

      A Data Lake is a centralized storage repository that holds raw data in its native format,
      be it structured, semi-structured, or unstructured. Unlike traditional databases, data
      lakes allow organizations to store data without having to structure it first, making
      them highly flexible for future analysis.

      Architecture of a Data Lake:

             Ingestion Layer: Raw data is ingested from multiple sources, including sensors,
             logs, and databases, without being processed or transformed.

             Storage Layer: Data is stored in scalable distributed file systems such as HDFS
             or cloud storage.



                                                                                             56

[PDF page 65; printed page 57]
             Processing Layer: Data is processed using Big Data frameworks like Hadoop or
             Apache Spark.

             Access Layer: Data is accessed for querying, analysis, and visualization through
             various BI tools or custom applications.

      Advantages:

             Flexibility in storing raw data.

             Scalability and cost-effectiveness, especially when using cloud storage
             solutions.

Cloud-Based Storage Systems

      Cloud-based storage solutions are becoming the preferred option for Big Data due to
      their scalability, flexibility, and pay-as-you-go pricing models. Major cloud providers,
      such as Amazon Web Services (AWS), Google Cloud, and Microsoft Azure, offer
      robust platforms for Big Data storage and processing.

      Amazon S3 (Simple Storage Service):

             Amazon S3 is an object storage service known for its scalability, security, and
             durability. It supports a wide range of data types and is commonly used for
             backup, archiving, and storing media files.

      Google Cloud Storage:

             Google Cloud Storage offers highly scalable object storage, tightly integrated
             with Google’s machine learning tools, making it a popular choice for data
             scientists and analysts.

      Microsoft Azure Blob Storage:

             Azure Blob Storage is optimized for storing large amounts of unstructured
             data, offering integration with the Azure ecosystem for advanced analytics and
             AI workloads.

      Advantages:

             Elastic scalability and cost-effectiveness.

             Seamless access from anywhere and integration with other cloud-based
             analytics tools.

                                                                                           57
```
