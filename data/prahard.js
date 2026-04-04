window.rawQuestions = [

/* ================= HARDWARE (1–12) ================= */

["A production SQL server needs both high performance and redundancy using 4 disks. Which RAID level should be implemented?",
["RAID 0","RAID 5","RAID 1","RAID 10"],
3,
"RAID 10 provides both striping and mirroring, delivering high I/O performance and redundancy."],

["A server powers on but emits repeating beep codes and fails to boot. What is the most probable cause?",
["Failed NIC","RAM failure","Disk corruption","OS crash"],
1,
"POST beep codes most commonly indicate memory issues."],

["A workstation under heavy load shuts down unexpectedly. Monitoring shows CPU temps at 95°C. Most likely issue?",
["Faulty PSU","Insufficient cooling","Bad SSD","BIOS corruption"],
1,
"Overheating suggests cooling failure or poor thermal paste application."],

["System recognizes only half of newly installed RAM. What is the likely cause?",
["Faulty CPU","Incorrect DIMM pairing","RAID misconfig","CMOS reset"],
1,
"Improper DIMM slot configuration prevents full detection."],

["A system loses BIOS time/date after shutdown. Root cause?",
["RAM fault","CMOS battery failure","GPU issue","HDD bad sectors"],
1,
"A dead CMOS battery resets BIOS settings."],

["An enterprise requires hot-swappable disks. Which interface supports this best?",
["PATA","IDE","SAS","ISA"],
2,
"SAS supports enterprise-grade hot swapping."],

["A CAD engineer needs maximum GPU throughput. Best expansion interface?",
["PCI","AGP","PCIe","ISA"],
2,
"PCIe offers highest bandwidth for GPUs."],

["A VM host requires lowest latency storage. Best option?",
["SATA HDD","SATA SSD","NVMe PCIe SSD","USB 3.0"],
2,
"NVMe over PCIe delivers lowest latency and highest throughput."],

["A RAID array continues operating after one disk failure without downtime. Most likely configuration?",
["RAID 0","RAID 1","JBOD","Single disk"],
1,
"RAID 1 mirrors data, allowing one disk failure."],

["An ECC memory module is used in a server. Why?",
["Faster speed","Error detection/correction","Lower voltage","Bigger cache"],
1,
"ECC memory corrects single-bit errors, critical for servers."],

["A blade server architecture primarily improves?",
["Standalone operation","Density and shared resources","Low power CPUs","Single disk usage"],
1,
"Blade servers share chassis power and cooling, maximizing density."],

["After BIOS update, system fails to POST. Most probable cause?",
["Corrupt firmware","RAM issue","Disk issue","NIC issue"],
0,
"Interrupted or corrupt BIOS flashing prevents POST."],

/* ================= WINDOWS CLIENT (13–28) ================= */

["After a major Windows update, disk usage stays at 100%. Likely cause?",
["Malware","Background indexing/update processes","BIOS issue","RAM failure"],
1,
"Post-update indexing and background services often spike disk usage."],

["User forgot domain password. Best solution?",
["Reset locally","Clear CMOS","Domain admin reset","Reinstall OS"],
2,
"Domain admin must reset credentials in AD."],

["System fails to boot after driver update. Best recovery option?",
["Format disk","Startup Repair","Replace GPU","Disable BIOS"],
1,
"Startup Repair or System Restore fixes driver-induced boot failures."],

["BitLocker recovery key requested after hardware change. Why?",
["Disk full","TPM integrity trigger","RAM full","DNS issue"],
1,
"TPM detects hardware changes and requests recovery."],

["PC cannot join domain. Error indicates DNS failure. Root cause?",
["Wrong gateway","Incorrect DNS server","Low RAM","RAID failure"],
1,
"Domain joins require correct DNS pointing to AD-integrated DNS."],

["Frequent app crashes. Reliability Monitor shows driver error. Fix?",
["Increase RAM","Rollback/update driver","Replace CPU","Disable GPO"],
1,
"Driver instability causes application crashes."],

["High CPU usage from unknown process. First diagnostic tool?",
["Event Viewer","Resource Monitor","BIOS","GPO"],
1,
"Resource Monitor identifies detailed process behavior."],

["Laptop battery drains rapidly after update. First step?",
["Replace battery","Adjust power plan","Upgrade BIOS","Reset OS"],
1,
"Check power settings before hardware replacement."],

["User cannot access network printer but others can. Likely cause?",
["Printer offline","Permission issue","DNS crash","RAID failure"],
1,
"User-level permission issue likely."],

["Windows Hello stops working after webcam replacement. Why?",
["Driver mismatch","TPM failure","RAM issue","DNS issue"],
0,
"New hardware requires proper driver support."],

["System files corrupted by malware. Correct repair sequence?",
["SFC only","DISM then SFC","CHKDSK only","ipconfig"],
1,
"DISM repairs image; SFC repairs system files."],

["WiFi adapter missing from Device Manager. First check?",
["RAM","BIOS wireless disabled","Disk","GPO"],
1,
"Wireless may be disabled in BIOS."],

["User accidentally deleted file. Immediate action?",
["Run CHKDSK","Check Recycle Bin","Reset OS","Clear cache"],
1,
"Recycle Bin is first recovery location."],

["PC stuck in reboot loop after patch. Tool to use?",
["Task Manager","Startup Repair","Services","Disk Cleanup"],
1,
"Startup Repair resolves boot loops."],

["System extremely slow with low RAM usage. Disk thrashing observed. Cause?",
["Paging due to background service","GPU failure","BIOS reset","DNS issue"],
0,
"Heavy paging from background service can cause thrashing."],

["User needs secure USB encryption. Tool?",
["BitLocker To Go","Disk Cleanup","Task Manager","GPO"],
0,
"BitLocker To Go encrypts removable drives."],

/* ================= WINDOWS SERVER (29–44) ================= */

["Users report intermittent authentication failures across domains. Likely cause?",
["FSMO transfer failure","Global Catalog unavailable","RAID failure","DHCP issue"],
1,
"Global Catalog required for forest-wide authentication."],

["A new DC not replicating SYSVOL. Root cause?",
["DFS replication issue","DNS failure","RAID crash","BIOS reset"],
0,
"SYSVOL uses DFS replication."],

["Clients receive APIPA addresses. Why?",
["DNS failure","DHCP unavailable","GPO error","RAID issue"],
1,
"No DHCP response triggers APIPA."],

["A DNS secondary zone not updating. Cause?",
["Zone transfer disabled","Low RAM","RAID error","BIOS corruption"],
0,
"Zone transfers must be enabled."],

["Users locked out after password change delay. Responsible FSMO?",
["Schema","RID","PDC Emulator","Infrastructure"],
2,
"PDC handles immediate password updates."],

["GPO not applying to OU. First check?",
["Loopback processing","Link enabled and inheritance","RAM","DNS"],
1,
"Verify link and inheritance settings."],

["Quota exceeded warning on file server. Which feature controls this?",
["NTFS permission","FSRM quota","GPO","DHCP"],
1,
"File Server Resource Manager manages quotas."],

["DHCP scope exhaustion during peak hours. Best fix?",
["Add exclusion","Extend scope","Disable DHCP","Restart server"],
1,
"Extend IP address pool."],

["AD schema extension failed. Which FSMO required?",
["RID","PDC","Schema Master","Infrastructure"],
2,
"Schema changes require Schema Master."],

["A new domain added to forest but cannot be resolved. Likely cause?",
["Missing DNS zone","RAID issue","RAM","BIOS"],
0,
"DNS must host zone for new domain."],

["Reservation created but device still receives random IP. Why?",
["Wrong MAC entered","Low RAM","DNS failure","RAID error"],
0,
"Reservation requires correct MAC address."],

["Loopback processing in replace mode causes user settings overridden. Why?",
["Replace mode forces computer settings","GPO disabled","DNS issue","RAM full"],
0,
"Replace mode applies computer-based user policies."],

["File screening prevents .mp3 uploads. Which role?",
["DFS","FSRM","DHCP","ADDS"],
1,
"FSRM handles file screening."],

["Infrastructure Master role conflict occurs when?",
["Multiple DCs","GC on every DC","No GC","RAID issue"],
1,
"Infrastructure role must not be on GC in multi-domain forest."],

["Kerberos ticket issues due to time drift. Responsible role?",
["Schema","PDC Emulator","RID","Infrastructure"],
1,
"PDC provides time synchronization."],

["Starter GPO used primarily for?",
["Template creation","DNS config","RAID","DHCP"],
0,
"Starter GPO acts as baseline template."],

/* ================= LINUX (45–60) ================= */

["Web server fails after permission change. Directory shows 600. Problem?",
["No execute permission","Low RAM","DNS","Kernel panic"],
0,
"Directories require execute to access."],

["System not mounting at boot. fstab entry incorrect. Command to test?",
["mount -a","df","ls","chmod"],
0,
"mount -a tests fstab entries."],

["High load average but low CPU usage. Cause?",
["Disk I/O wait","RAM issue","DNS","SELinux"],
0,
"I/O wait increases load average."],

["User cannot execute script despite chmod 644. Why?",
["No execute bit","Wrong owner","DNS","Kernel error"],
0,
"644 lacks execute permission."],

["SELinux blocking service despite correct permissions. Why?",
["Context mismatch","Low RAM","BIOS","DNS"],
0,
"SELinux contexts override normal permissions."],

["Filesystem errors after crash. Repair tool?",
["df","du","fsck","ls"],
2,
"fsck checks and repairs filesystems."],

["Symbolic link broken after move. Why?",
["Absolute path used","RAM issue","BIOS","DNS"],
0,
"Absolute symlink breaks if target path changes."],

["Service fails to start on boot. Check?",
["systemctl status","df","chmod","route"],
0,
"systemctl shows service status."],

["Disk full but df shows space. Why?",
["Deleted open file","Low RAM","Kernel panic","DNS"],
0,
"Open deleted files consume space."],

["User cron job not running. Likely cause?",
["Incorrect crontab syntax","RAM","BIOS","DNS"],
0,
"Syntax errors prevent execution."],

["Root login disabled via SSH. Why?",
["Security hardening","Kernel bug","RAM issue","DNS"],
0,
"Disabling root SSH improves security."],

["File owned by root inaccessible. Solution?",
["chown","chmod 777","df","route"],
0,
"Change ownership appropriately."],

["NIC not coming up after reboot. Check?",
["/etc/sysconfig or netplan","df","fsck","SELinux"],
0,
"Network config file must be correct."],

["Package dependency failure. Fix?",
["yum/dnf resolve","chmod","route","BIOS"],
0,
"Package manager resolves dependencies."],

["Server compromise suspected. First action?",
["Disconnect network","Reboot","Delete logs","Upgrade RAM"],
0,
"Isolate system immediately."],

["Kernel panic after update. Likely cause?",
["Bad kernel module","DNS","RAID","RAM low"],
0,
"Faulty module causes panic."],

/* ================= NETWORKING (61–80) ================= */

["Users in VLAN 10 cannot reach VLAN 20. Likely issue?",
["No inter-VLAN routing","Low RAM","RAID","DNS"],
0,
"Inter-VLAN routing required."],

["Ping works by IP but not hostname. Cause?",
["DNS failure","Routing issue","STP","RAID"],
0,
"DNS resolution failure."],

["Network loop causing broadcast storm. Fix?",
["Enable STP","Disable router","Change IP","Upgrade RAM"],
0,
"STP prevents loops."],

["Slow WAN link but LAN fast. Tool to measure latency?",
["ping","tracert","ipconfig","arp"],
0,
"Ping measures latency."],

["OSPF neighbor not forming. Check?",
["Area mismatch","RAM","DNS","BIOS"],
0,
"Area mismatch prevents adjacency."],

["RIP route not updating beyond 15 hops. Why?",
["Hop limit","Low RAM","DNS","Loopback"],
0,
"RIP max hop is 15."],

["ACL blocking HTTP traffic. Port?",
["443","80","21","22"],
1,
"HTTP uses port 80."],

["Private IP range example?",
["10.0.0.1","8.8.8.8","1.1.1.1","9.9.9.9"],
0,
"10.0.0.0/8 is private."],

["DHCP DORA step after Discover?",
["Offer","Request","Acknowledge","Reset"],
0,
"Server sends Offer after Discover."],

["High packet loss detected. Tool?",
["ping","netstat","route","nslookup"],
0,
"Ping detects packet loss."],

["BGP primarily used for?",
["LAN routing","Internet routing","DNS","GPO"],
1,
"BGP routes between autonomous systems."],

["Switch MAC table overflow attack. Called?",
["ARP spoofing","CAM flooding","DNS poisoning","RAID attack"],
1,
"CAM flooding overwhelms MAC table."],

["Subnet /26 usable hosts?",
["62","64","126","30"],
0,
"/26 provides 62 usable hosts."],

["IPv6 address length?",
["32-bit","64-bit","128-bit","256-bit"],
2,
"IPv6 is 128-bit."],

["Default gateway required for?",
["Local comm","External comm","DNS only","RAM"],
1,
"Gateway routes outside network."],

["OSPF uses algorithm?",
["Bellman-Ford","Dijkstra","Flooding","Round Robin"],
1,
"OSPF uses SPF (Dijkstra)." ],

["DNS record for mail?",
["A","MX","CNAME","PTR"],
1,
"MX defines mail exchange server."],

["Tracert shows?",
["Latency path","DNS zone","RAM","Cache"],
0,
"Tracert shows route path."],

["Switch breaks collision domain?",
["Hub","Switch","Repeater","Bridge"],
1,
"Switch separates collision domains."],

["Network segmentation improves?",
["Security","RAM","BIOS","Cache"],
0,
"Segmentation enhances security."],

/* ================= ITIL (81–88) ================= */

["Major outage resolved quickly but root cause unknown. Which practice handles analysis?",
["Incident Mgmt","Problem Mgmt","Change Mgmt","Release Mgmt"],
1,
"Problem Management identifies root cause."],

["Frequent failed deployments. Which metric?",
["MTTR","Change Failure Rate","KPI","Throughput"],
1,
"Change Failure Rate measures failed changes."],

["Service restored but no documentation created. What principle violated?",
["Focus on value","Continual improvement","Collaborate","Keep simple"],
1,
"Continual improvement requires review and documentation."],

["Unauthorized change caused outage. What was missing?",
["CAB approval","DNS","RAID","RAM"],
0,
"CAB ensures change governance."],

["Repeated incidents from same root cause. Which issue?",
["No Problem record","Low RAM","DNS","Loopback"],
0,
"Lack of problem management."],

["SLA breach occurred. Primary objective?",
["Blame team","Restore compliance","Upgrade RAM","Reset BIOS"],
1,
"Goal is restore service level."],

["User satisfaction dropping despite uptime. Why?",
["Poor value alignment","High RAM","DNS issue","RAID"],
0,
"Value co-creation not aligned."],

["High MTTR indicates?",
["Slow recovery","High uptime","Good resilience","Low latency"],
0,
"High MTTR means slow recovery."],

/* ================= MISC (89–100) ================= */

["Hypervisor running directly on hardware?",
["Type 1","Type 2","Type 3","None"],
0,
"Type 1 runs on bare metal."],

["Incremental backup after full backup saves?",
["All data","Changed data only","Nothing","System files only"],
1,
"Incremental saves changes only."],

["Encryption protects data in?",
["Transit and rest","RAM only","CPU only","Cache"],
0,
"Encryption protects data in transit and at rest."],

["Load balancer improves?",
["Storage","Availability","RAM","BIOS"],
1,
"Load balancing improves availability."],

["Zero Trust security assumes?",
["Internal trusted","No trust by default","DNS safe","RAID secure"],
1,
"Zero Trust assumes no implicit trust."],

["High latency affects?",
["Delay","Throughput","Cache","RAM"],
0,
"Latency measures delay."],

["Throughput measures?",
["Delay","Data transfer rate","RAM","DNS"],
1,
"Throughput is transfer rate."],

["VPN provides?",
["Encryption","Cache","RAID","RAM"],
0,
"VPN encrypts communication."],

["Cloud IaaS provides?",
["Infrastructure","Software only","BIOS","Cache"],
0,
"IaaS provides virtualized hardware resources."],

["Two-factor authentication requires?",
["Password only","Two verification methods","DNS","BIOS"],
1,
"2FA requires two forms of verification."],

["Disaster recovery planning focuses on?",
["Prevention","Recovery after failure","DNS","RAM"],
1,
"DR ensures recovery after disaster."],

["High availability ensures?",
["Zero cost","Minimal downtime","No RAM","No DNS"],
1,
"High availability reduces downtime."]

];
