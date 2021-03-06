.. meta::
    :author: Cask Data, Inc.
    :description: CDAP and Hadoop distribution compatibility
    :copyright: Copyright © 2017 Cask Data, Inc.

.. _admin-manual-cdap-hadoop-compatibility-matrix:

=============================
CDAP and Hadoop Compatibility
=============================

These tables list which versions of CDAP are compatible with different Hadoop
distributions. The combinations are ones that we have either tested and confirmed their
compatibility or know to be incompatible.

- :ref:`Cloudera Distribution of Apache Hadoop (CDH) <admin-manual-cdap-hadoop-compatibility-cdh>`
- :ref:`Hortonworks Data Platform (HDP) <admin-manual-cdap-hadoop-compatibility-hdp>`
- :ref:`MapR <admin-manual-cdap-hadoop-compatibility-mapr>`
- :ref:`Amazon Hadoop (EMR) <admin-manual-cdap-hadoop-compatibility-emr>`
- :ref:`Microsoft HDInsight <admin-manual-cdap-hadoop-compatibility-hdinsight>`

.. _admin-manual-cdap-hadoop-compatibility-cdh:

Cloudera Distribution of Apache Hadoop (CDH)
============================================

+------------------------------------------------------------------------------------------------------------------------------+
| **CDH Distro Versions**                                                                                                      |
+================+=========+=========+=========+=========+=========+=========+=========+=========+=========+=========+=========+
| CDAP Version   | 5.11    | 5.10    | 5.9     | 5.8     | 5.7     | 5.6     | 5.5     | 5.4     | 5.3     | 5.2     | 5.1     |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 4.2.0          | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 4.1.1          | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 4.1.0          | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 4.0.0          | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.6.0          | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.5          | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.4          | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.3          | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.2          | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.1          | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.5.0          | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.4.x          | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.3.2 - 3.3.7  | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.3.1          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.3.0          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.2.x          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.1.x          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 3.0.x          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+
| 2.8.x          | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    |
+----------------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+

.. _admin-manual-cdap-hadoop-compatibility-hdp:

Hortonworks Data Platform (HDP)
===============================

+-----------------------------------------------------------------------------------------+
| **HDP Versions**                                                                        |
+==============+==============+=========+=========+=========+=========+=========+=========+
| CDAP Version | 2.6          | 2.5     | 2.4     | 2.3     | 2.2     | 2.1     | 2.0     |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 4.2.0        | **Yes**      | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 4.1.1        | **Yes**      | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 4.1.0        | *No*         | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 4.0.0        | *No*         | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.6.0        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.5        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.4        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.3        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.2        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.1        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.5.0        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.4.x        | *No*         | *No*    | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.3.2-3.3.7  | *No*         | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.3.1        | *No*         | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.3.0        | *No*         | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.2.x        | *No*         | *No*    | *No*    | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.1.x        | *No*         | *No*    | *No*    | *No*    | **Yes** | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 3.0.x        | *No*         | *No*    | *No*    | *No*    | *No*    | **Yes** | **Yes** |
+--------------+--------------+---------+---------+---------+---------+---------+---------+
| 2.8.x        | *No*         | *No*    | *No*    | *No*    | *No*    | *No*    | *No*    |
+--------------+--------------+---------+---------+---------+---------+---------+---------+


.. _admin-manual-cdap-hadoop-compatibility-mapr:

MapR
====

+------------------------------------------------------+
| **MapR**                                             |
+==============+=========+=========+=========+=========+
| CDAP Version |5.2      | 5.1     | 5.0     | 4.1     |
+--------------+---------+---------+---------+---------+
| 4.2.0        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 4.1.1        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 4.1.0        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 4.0.0        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.6.0        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.5        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.4        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.3        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.2        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.1        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.5.0        | **Yes** | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.4.x        | *No*    | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.3.2-3.3.7  | *No*    | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.3.1        | *No*    | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.3.0        | *No*    | **Yes** | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.2.x        | *No*    | *No*    | **Yes** | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.1.x        | *No*    | *No*    | *No*    | **Yes** |
+--------------+---------+---------+---------+---------+
| 3.0.x        | *No*    | *No*    | *No*    | *No*    |
+--------------+---------+---------+---------+---------+
| 2.8.x        | *No*    | *No*    | *No*    | *No*    |
+--------------+---------+---------+---------+---------+


.. _admin-manual-cdap-hadoop-compatibility-emr:

Amazon Hadoop (EMR)
===================

+---------------------------------------------------------+
| **Amazon EMR**                                          |
+==============+============+=========+=========+=========+
| CDAP Version | 4.9.1      | 4.8.x   | 4.7.x   | 4.6.0   |
+--------------+------------+---------+---------+---------+
| 4.2.0        | **Yes**    | **Yes** | **Yes** | **Yes** |
+--------------+------------+---------+---------+---------+
| 4.1.1        | **Yes**    | **Yes** | **Yes** | **Yes** |
+--------------+------------+---------+---------+---------+
| 4.1.0        | *No*       | **Yes** | **Yes** | **Yes** |
+--------------+------------+---------+---------+---------+
| 4.0.0        | *No*       | **Yes** | **Yes** | **Yes** |
+--------------+------------+---------+---------+---------+
| 3.6.0        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.5        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.4        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.3        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.2        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.1        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.5.0        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.4.x        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.3.2-3.3.7  | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.3.1        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.3.0        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.2.x        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.1.x        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 3.0.x        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+
| 2.8.x        | *No*       | *No*    | *No*    | *No*    |
+--------------+------------+---------+---------+---------+


.. _admin-manual-cdap-hadoop-compatibility-hdinsight:

Microsoft HDInsight
===================
+------------------------------------+
| **Microsoft HDInsight**            |
+==============+===========+=========+
| CDAP Version | 3.5       | 3.4     |
+--------------+-----------+---------+
| 4.2.0        | ?         | ?       |
+--------------+-----------+---------+
| 4.1.1        | *No*      | *No*    |
+--------------+-----------+---------+
| 4.1.0        | **Yes**   | **Yes** |
+--------------+-----------+---------+
| 4.0.0        | **Yes**   | **Yes** |
+--------------+-----------+---------+
| 3.6.0        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.5.5        | *No*      | **Yes** |
+--------------+-----------+---------+
| 3.5.4        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.5.3        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.5.2        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.5.1        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.5.0        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.4.x        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.3.2-3.3.7  | *No*      | *No*    |
+--------------+-----------+---------+
| 3.3.1        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.3.0        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.2.x        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.1.x        | *No*      | *No*    |
+--------------+-----------+---------+
| 3.0.x        | *No*      | *No*    |
+--------------+-----------+---------+
| 2.8.x        | *No*      | *No*    |
+--------------+-----------+---------+
