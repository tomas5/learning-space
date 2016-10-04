# T-SQL: Recover

## Database Files and Filegroups

[Database Files and Filegroups](https://msdn.microsoft.com/en-us/library/ms189563.aspx)

At a minimum, every SQL Server database has two operating system files: a data file and a log file. 

The recommended file name extension for primary data files is .mdf
File name extension for secondary data files is .ndf
and file name extension for transaction logs is .ldf

Data files contain data and objects such as tables, indexes, stored procedures, and views. Log files contain the information that is required to recover all transactions in the database. Data files can be grouped together in filegroups for allocation and administration purposes.

By default, the data and transaction logs are put on the same drive and path. This is done to handle single-disk systems. However, this may not be optimal for production environments. It's recommend that you put data and log files on separate disks.