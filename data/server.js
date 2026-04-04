window.rawQuestions = [



["What does AD DS stand for?",
["Active Directory Data Service","Active Directory Domain Services","Advanced Domain Directory System","Application Directory Domain Service"],
1,
"AD DS stands for Active Directory Domain Services and provides centralized authentication and directory services."],

["Primary purpose of Active Directory?",
["Store files","Centralized identity and authentication","Backup OS","Manage printers only"],
1,
"AD provides centralized authentication, authorization, and directory management."],

["A Domain Controller (DC) is responsible for?",
["Disk formatting","Authenticating users","Printing files","RAID configuration"],
1,
"A Domain Controller hosts AD DS and authenticates users and computers."],

["Global Catalog stores?",
["All domain data","Partial attributes of all objects in forest","Only users","Only groups"],
1,
"Global Catalog contains partial attribute set of all objects in forest for searches."],

["FSMO stands for?",
["Flexible Single Master Operations","File System Master Operation","Forest Security Master Object","Fast Secure Master Operations"],
0,
"FSMO roles are specialized AD operations handled by specific DCs."],

["How many FSMO roles exist in total?",
["3","4","5","6"],
2,
"There are five FSMO roles: Schema, Domain Naming, RID, PDC Emulator, Infrastructure."],

["Schema Master controls?",
["IP addresses","AD object definitions","DNS records","File quotas"],
1,
"Schema Master manages AD schema modifications."],

["PDC Emulator role handles?",
["DNS replication","Time synchronization","File sharing","RAID config"],
1,
"PDC Emulator manages password updates and time sync."],

["Forest is?",
["Single domain only","Collection of domains","Single OU","Single DC"],
1,
"A forest is a collection of one or more domains sharing schema."],

["Tree in AD refers to?",
["DNS subtree","Collection of domains sharing contiguous namespace","OU grouping","File structure"],
1,
"A tree is group of domains sharing namespace."],

["Organizational Units (OU) are used to?",
["Store files","Organize objects and apply GPO","Manage RAID","Store DNS zones"],
1,
"OUs organize AD objects and allow delegation and GPO application."],

["Containers differ from OU because?",
["They support GPO","They don’t support GPO","They store schema","They replicate differently"],
1,
"Default containers cannot have GPO linked."],

["LDAP is used for?",
["Disk management","Querying directory services","RAID monitoring","DHCP discovery"],
1,
"LDAP protocol is used to query and manage AD objects."],

["AD Schema defines?",
["Disk partitions","Object types and attributes","DNS zones","DHCP scopes"],
1,
"Schema defines structure of AD objects."],

["SYSVOL folder stores?",
["User files","Group Policy templates and scripts","DNS zones","DHCP leases"],
1,
"SYSVOL replicates GPOs and login scripts."],

/* ================= GROUPS & OBJECTS (16–25) ================= */

["AD objects include?",
["Users and computers","RAID arrays","IP scopes","Partitions only"],
0,
"Users, groups, computers are AD objects."],

["Security groups are used for?",
["Email only","Access control","RAID management","Schema editing"],
1,
"Security groups assign permissions."],

["Distribution groups are used for?",
["File permission","Email distribution","Authentication","DNS config"],
1,
"Distribution groups are for email lists."],

["Universal groups can contain members from?",
["Single domain","Multiple domains","Single OU","Single DC"],
1,
"Universal groups span multiple domains."],

["Delegation in AD allows?",
["Schema change","Assigning admin rights for specific tasks","Delete forest","Modify RAID"],
1,
"Delegation assigns limited administrative permissions."],

["Default Domain Policy applies at?",
["OU level","Domain level","Forest only","Container only"],
1,
"Default Domain Policy applies domain-wide."],

["Default Domain Controllers Policy applies to?",
["Users","DCs only","File servers","DNS clients"],
1,
"It applies to domain controllers."],

["Starter GPO is?",
["Pre-configured template","Backup tool","DNS record","RAID config"],
0,
"Starter GPO provides template for new policies."],

["Loopback processing is used for?",
["User-based policy override","File backup","DNS resolution","RAID rebuild"],
0,
"Loopback applies user settings based on computer location."],

["Group Policy refresh interval default is?",
["30 sec","90 min","5 hours","24 hours"],
1,
"GPO refreshes every 90 minutes by default."],

/* ================= DNS (26–40) ================= */

["DNS resolves?",
["MAC address","Domain names to IP","Files","RAID arrays"],
1,
"DNS translates domain names into IP addresses."],

["Primary DNS zone is?",
["Read-only copy","Writable copy","Backup only","Temporary"],
1,
"Primary zone allows record modifications."],

["Secondary zone is?",
["Writable","Read-only copy","Temporary zone","DHCP scope"],
1,
"Secondary zone is read-only copy of primary."],

["Stub zone contains?",
["Full records","Only NS records","Partial info about another zone","DHCP leases"],
2,
"Stub zone contains info for name server delegation."],

["A record maps?",
["IP to name","Name to IP","Mail server","Alias"],
1,
"A record maps hostname to IPv4."],

["AAAA record maps?",
["IPv4","IPv6","Alias","Mail"],
1,
"AAAA maps hostname to IPv6."],

["CNAME record is used for?",
["Alias mapping","IP assignment","DHCP","RAID"],
0,
"CNAME creates alias for hostname."],

["MX record defines?",
["Mail exchange server","IP mapping","RAID priority","GPO link"],
0,
"MX record defines mail server for domain."],

["Forward lookup zone resolves?",
["IP to name","Name to IP","DHCP lease","OU to domain"],
1,
"Forward lookup resolves names to IP."],

["Reverse lookup zone resolves?",
["Name to IP","IP to name","DNS to DHCP","Forest to tree"],
1,
"Reverse lookup maps IP to hostname."],

/* ================= DHCP (41–55) ================= */

["DHCP stands for?",
["Dynamic Host Configuration Protocol","Domain Host Control Protocol","Data Host Config Process","Dynamic Hardware Config Process"],
0,
"DHCP dynamically assigns IP configuration."],

["DORA stands for?",
["Discover Offer Request Acknowledge","Domain Offer Reply Assign","Data Order Request Accept","Discover Open Reply Assign"],
0,
"DORA describes DHCP handshake process."],

["Scope defines?",
["Group policy","Range of IP addresses","DNS record","OU structure"],
1,
"A scope defines pool of IP addresses for DHCP."],

["Lease time defines?",
["User login","Duration IP assigned","File lock","DNS refresh"],
1,
"Lease time determines how long IP assigned."],

["DHCP reservation ensures?",
["Dynamic IP","Fixed IP for device","RAID redundancy","DNS replication"],
1,
"Reservation assigns consistent IP based on MAC."],

["Exclusion range prevents?",
["IP allocation","DNS mapping","RAID failure","User login"],
0,
"Exclusion prevents IP from being assigned."],

["DHCP option 003 provides?",
["DNS server","Default gateway","Time server","Mail server"],
1,
"Option 003 defines default gateway."],

["DHCP option 006 provides?",
["Gateway","DNS server","NTP","Mail"],
1,
"Option 006 provides DNS server address."],

["DHCP failover provides?",
["DNS replication","High availability","RAID mirroring","Schema backup"],
1,
"Failover ensures redundancy."],

["Authorizing DHCP in AD prevents?",
["Unauthorized DHCP servers","DNS errors","RAID crash","GPO failure"],
0,
"Only authorized DHCP servers operate in AD."],

/* ================= FILE SERVICES (56–75) ================= */

["File server role provides?",
["DNS","Centralized file storage","DHCP","RAID config"],
1,
"File server allows shared storage."],

["NTFS permissions apply to?",
["Network only","Local disk files","DHCP","DNS"],
1,
"NTFS controls file-level permissions."],

["Share permissions apply to?",
["Local only","Network access","BIOS","RAID"],
1,
"Share permissions control network-level access."],

["Quota management controls?",
["CPU usage","Disk space usage","RAM","DNS zones"],
1,
"Quotas limit disk space per user."],

["File Screening prevents?",
["Unauthorized file types","DNS errors","RAID loss","DHCP scope"],
0,
"File screening blocks unwanted file types."],

["Storage reports provide?",
["Quota usage insights","DNS log","RAID state","DHCP logs"],
0,
"Storage reports show disk usage trends."],

["File Classification Infrastructure is used for?",
["DNS zone","Tagging files","RAID array","DHCP failover"],
1,
"It classifies files based on rules."],

["Shadow copies allow?",
["DNS backup","Previous version restore","RAID rebuild","IP change"],
1,
"Shadow copies restore previous file versions."],

["Print server role manages?",
["File storage","Printer queues","DNS","DHCP"],
1,
"Print server manages printers and queues."],

["Distributed File System (DFS) allows?",
["RAID","Namespace across servers","DNS replication","GPO backup"],
1,
"DFS provides unified namespace across file servers."],

/* ================= RAID (76–100) ================= */

["RAID stands for?",
["Redundant Array of Independent Disks","Rapid Access Internal Disk","Random Access Internal Data","Remote Array Internal Disk"],
0,
"RAID provides redundancy and/or performance."],

["RAID 0 provides?",
["Redundancy","Performance only","Mirroring","Parity"],
1,
"RAID 0 stripes data without redundancy."],

["RAID 1 provides?",
["Striping","Mirroring","Parity","Cache"],
1,
"RAID 1 mirrors data for redundancy."],

["RAID 5 requires minimum?",
["2 disks","3 disks","4 disks","5 disks"],
1,
"RAID 5 needs minimum three disks."],

["RAID 10 combines?",
["0 and 1","1 and 5","5 and 6","0 and 6"],
0,
"RAID 10 combines striping and mirroring."],

["Parity is used in?",
["RAID 1","RAID 5","RAID 0","No RAID"],
1,
"Parity provides redundancy."],

["Hot spare disk is?",
["Active disk","Standby disk for failure","DNS server","DHCP server"],
1,
"Hot spare replaces failed disk automatically."],

["RAID improves?",
["Security","Performance and redundancy","DNS","DHCP"],
1,
"RAID improves availability and speed."],

["Software RAID configured via?",
["Disk Management","DNS console","AD Users","GPO editor"],
0,
"Windows Disk Management supports software RAID."],

["RAID is not a substitute for?",
["Backup","Performance","Redundancy","Mirroring"],
0,
"RAID does not replace backups."]

];