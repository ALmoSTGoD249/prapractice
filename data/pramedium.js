window.rawQuestions = [

/* ================= HARDWARE (1–12) ================= */

["A user reports system running very slow and disk usage constantly high. HDD installed. What upgrade would most improve performance?",
["More RAM","SSD","New monitor","USB 3.0 hub"],
1,
"Replacing HDD with SSD dramatically improves disk I/O performance."],

["A server requires redundancy for two drives only. Which RAID is best?",
["RAID 0","RAID 1","RAID 5","RAID 10"],
1,
"RAID 1 mirrors data between two drives."],

["System does not retain BIOS settings after shutdown. What component likely failed?",
["RAM","CMOS battery","CPU","GPU"],
1,
"CMOS battery maintains BIOS settings when power is off."],

["You need to install a high-performance GPU. Which slot should you use?",
["PCI","ISA","PCIe x16","AGP 1x"],
2,
"PCIe x16 provides required bandwidth for modern GPUs."],

["A workstation overheats during rendering. First action?",
["Replace RAM","Check cooling system","Reinstall OS","Change DNS"],
1,
"Overheating typically relates to cooling issues."],

["RAID 0 provides?",
["Redundancy","Parity","Performance only","Backup"],
2,
"RAID 0 improves speed but provides no redundancy."],

["ECC memory is recommended for?",
["Gaming PCs","Servers","Tablets","Thin clients"],
1,
"ECC memory prevents data corruption in servers."],

["DIMM modules are installed in?",
["CPU socket","Motherboard memory slots","GPU slot","PCI slot"],
1,
"DIMMs are installed in memory slots on motherboard."],

["NVMe drives connect via?",
["SATA","USB","PCIe","IDE"],
2,
"NVMe uses PCIe interface."],

["POST occurs when?",
["Shutdown","Booting","Login","Sleep"],
1,
"POST runs during system startup."],

["A blade server primarily improves?",
["Desktop performance","Data center density","Laptop battery","RAM speed"],
1,
"Blade servers increase density in racks."],

["Hot-swappable drives allow?",
["Replace disk without shutdown","Faster CPU","Extra RAM","BIOS update"],
0,
"Hot-swap allows replacing drives while system runs."],

/* ================= WINDOWS CLIENT (13–28) ================= */

["A user cannot connect to WiFi but Ethernet works. Most likely cause?",
["DNS issue","Wireless adapter disabled","RAM fault","GPO issue"],
1,
"Wireless adapter may be disabled or driver missing."],

["System crashes after new driver installed. Best recovery method?",
["Startup Repair","System Restore","Replace RAM","Disable DNS"],
1,
"System Restore reverts to previous working state."],

["User needs encrypted USB. Which feature?",
["Disk Cleanup","BitLocker To Go","CHKDSK","Defrag"],
1,
"BitLocker To Go encrypts removable drives."],

["High CPU usage from unknown process. Which tool first?",
["Event Viewer","Task Manager","BIOS","Diskpart"],
1,
"Task Manager identifies process using CPU."],

["User deleted file accidentally. First place to check?",
["System32","Recycle Bin","Event Viewer","Temp folder"],
1,
"Recycle Bin stores deleted files."],

["Laptop battery draining quickly. What check first?",
["Power settings","Replace motherboard","Reset BIOS","Change DNS"],
0,
"Power plan settings affect battery life."],

["BitLocker recovery requested after hardware change. Why?",
["Disk full","TPM triggered","Low RAM","DNS failure"],
1,
"TPM detects hardware integrity changes."],

["PC extremely slow after update. Likely background cause?",
["Malware","Indexing service","RAID failure","CMOS issue"],
1,
"Indexing or update tasks can slow system temporarily."],

["Cannot join domain. Most common cause?",
["Wrong DNS server","Low RAM","RAID issue","BIOS problem"],
0,
"Domain join requires correct DNS."],

["Windows fails to boot. Which tool?",
["Task Manager","Startup Repair","Services","Disk Cleanup"],
1,
"Startup Repair resolves boot issues."],

["System files corrupted. Correct command?",
["ipconfig","sfc /scannow","diskpart","route"],
1,
"SFC repairs corrupted system files."],

["Frequent blue screen after RAM upgrade. Cause?",
["Wrong RAM compatibility","DNS","RAID","Printer"],
0,
"Incompatible RAM causes BSOD."],

["User cannot access shared folder but others can. Likely cause?",
["Network down","Permission issue","RAID failure","CMOS issue"],
1,
"Access issue likely permission-related."],

["Windows Hello uses?",
["Fingerprint/Face ID","DNS","RAID","BIOS"],
0,
"Windows Hello supports biometric authentication."],

["CHKDSK command checks?",
["Network","Disk errors","RAM","GPO"],
1,
"CHKDSK checks file system integrity."],

["Storage Sense does?",
["Encrypt files","Clean temporary files","Install drivers","Reset OS"],
1,
"Storage Sense removes temporary files."],

/* ================= WINDOWS SERVER (29–44) ================= */

["Clients receive 169.254.x.x addresses. Why?",
["DNS error","DHCP unavailable","RAID issue","RAM full"],
1,
"No DHCP response leads to APIPA addresses."],

["A DNS A record is used to?",
["Map name to IPv4","Map IP to name","Store mail server","Alias"],
0,
"A record maps hostname to IPv4."],

["GPO not applying. First check?",
["Link enabled","RAM","DNS zone","RAID"],
0,
"Verify GPO link and inheritance."],

["PDC Emulator handles?",
["Time sync","RAID","DHCP","Cache"],
0,
"PDC provides time synchronization."],

["Global Catalog required for?",
["Forest-wide searches","RAM upgrade","RAID","Printer"],
0,
"GC stores partial attributes for forest."],

["FSMO total roles?",
["3","4","5","6"],
2,
"There are five FSMO roles."],

["DHCP reservation ensures?",
["Dynamic IP","Fixed IP","DNS zone","OU"],
1,
"Reservation assigns specific IP by MAC."],

["SYSVOL stores?",
["User data","GPO templates","DNS logs","DHCP leases"],
1,
"SYSVOL replicates GPO data."],

["Secondary DNS zone is?",
["Writable","Read-only copy","Primary","Stub"],
1,
"Secondary zone is read-only copy."],

["Quota exceeded on file server. Controlled by?",
["NTFS","FSRM","DHCP","DNS"],
1,
"FSRM manages quotas."],

["Loopback processing affects?",
["User settings by computer","DNS","RAID","RAM"],
0,
"Loopback applies user policies based on computer."],

["Kerberos time issue likely due to?",
["PDC time drift","RAM","DNS","RAID"],
0,
"PDC maintains domain time."],

["Infrastructure Master should not be on?",
["GC in multi-domain","File server","DHCP","DNS"],
0,
"Role conflict occurs if on GC in multi-domain forest."],

["Stub zone contains?",
["All records","NS records info","DHCP scope","GPO"],
1,
"Stub zone contains delegation info."],

["AD Schema defines?",
["Disk layout","Object attributes","DNS zones","RAID"],
1,
"Schema defines object structure."],

["DHCP DORA first step?",
["Offer","Discover","Request","Acknowledge"],
1,
"Client sends Discover first."],

/* ================= LINUX (45–60) ================= */

["Directory permission 600 means?",
["Accessible","No execute","Full access","Public"],
1,
"Directory needs execute bit to enter."],

["fstab controls?",
["RAM","Mount configuration","DNS","RAID"],
1,
"fstab defines permanent mount points."],

["df command shows?",
["Directory size","Disk usage","IP config","Cache"],
1,
"df shows filesystem usage."],

["chmod 755 gives owner?",
["rwx","rw-","r--","---"],
0,
"7 = rwx for owner."],

["SELinux primarily provides?",
["Performance","Security enforcement","RAID","DNS"],
1,
"SELinux enforces security policies."],

["grep command is used to?",
["Search text","Format disk","Set permission","Route traffic"],
0,
"grep searches patterns in files."],

["Service not starting. Command to check?",
["systemctl status","df","chmod","route"],
0,
"systemctl shows service state."],

["Symbolic link breaks when?",
["Target deleted","Permission changed","Owner changed","IP changed"],
0,
"If target removed, symlink breaks."],

["Hard link shares?",
["Inode","Name","Path","Permission"],
0,
"Hard links share same inode."],

["mkfs is used to?",
["Create filesystem","Delete user","Mount disk","Encrypt file"],
0,
"mkfs formats partition."],

["Cron used for?",
["Startup only","Scheduling tasks","DNS","RAID"],
1,
"Cron schedules jobs."],

["Root directory symbol?",
["/home","/","/root","/etc"],
1,
"/ is root directory."],

["du command shows?",
["Free space","Directory size","IP","Cache"],
1,
"du shows disk usage per directory."],

["File owner change command?",
["chmod","chown","df","route"],
1,
"chown changes file ownership."],

["Package install command (RHEL)?",
["apt","yum/dnf","pip","install"],
1,
"RHEL uses yum/dnf."],

["Runlevel now managed by?",
["systemd","init.d only","cron","BIOS"],
0,
"systemd replaces traditional runlevels."],

/* ================= NETWORKING (61–80) ================= */

["Router works at OSI layer?",
["2","3","4","7"],
1,
"Router operates at Network layer (Layer 3)." ],

["Switch forwards based on?",
["IP","MAC","Port 80","DNS"],
1,
"Switch uses MAC address table."],

["Subnet /26 usable hosts?",
["62","64","30","126"],
0,
"/26 provides 62 usable hosts."],

["Ping uses protocol?",
["TCP","UDP","ICMP","ARP"],
2,
"Ping uses ICMP."],

["STP prevents?",
["Loops","DNS errors","RAM overflow","IP conflict"],
0,
"STP prevents switching loops."],

["NAT converts?",
["MAC to IP","Private to Public IP","DNS to IP","RAM"],
1,
"NAT translates private IPs."],

["Private IP example?",
["8.8.8.8","192.168.1.5","1.1.1.1","9.9.9.9"],
1,
"192.168.x.x is private."],

["OSPF is?",
["Distance vector","Link-state","Hybrid","Static"],
1,
"OSPF is link-state protocol."],

["Default gateway needed for?",
["LAN only","Internet access","DNS","Cache"],
1,
"Gateway routes outside network."],

["DNS resolves?",
["IP to MAC","Name to IP","Cache","RAM"],
1,
"DNS resolves domain names."],

["ACL used for?",
["Routing","Filtering traffic","RAID","Cache"],
1,
"ACL filters network traffic."],

["VLAN separates?",
["Collision domain","Broadcast domain","CPU","RAM"],
1,
"VLAN separates broadcast domains."],

["IPv4 is?",
["32-bit","64-bit","128-bit","16-bit"],
0,
"IPv4 is 32-bit address."],

["Port 443 used for?",
["HTTP","HTTPS","FTP","SSH"],
1,
"443 is HTTPS."],

["RIP uses metric?",
["Bandwidth","Hop count","Delay","Cost"],
1,
"RIP uses hop count."],

["BGP used for?",
["LAN routing","Internet routing","RAID","RAM"],
1,
"BGP routes between autonomous systems."],

["DHCP assigns?",
["DNS zone","IP address","GPO","Cache"],
1,
"DHCP assigns IP addresses."],

["Tracert shows?",
["Route path","DNS zone","RAM","Cache"],
0,
"Tracert shows hop path."],

["Collision domain broken by?",
["Hub","Switch","Repeater","Cable"],
1,
"Switch breaks collision domains."],

["CIDR allows?",
["Classful only","Classless addressing","No subnet","Static only"],
1,
"CIDR enables flexible subnetting."],

/* ================= ITIL (81–88) ================= */

["Incident Management goal?",
["Find root cause","Restore service quickly","Upgrade system","Audit"],
1,
"Incident management restores service."],

["Problem Management focuses on?",
["Quick fix","Root cause","Deployment","Backup"],
1,
"Problem management identifies root cause."],

["SLA defines?",
["Security rule","Service level target","Disk quota","Schema"],
1,
"SLA defines agreed performance levels."],

["Change Enablement ensures?",
["Random change","Controlled change","No change","RAM upgrade"],
1,
"Change Enablement controls risk."],

["SVS stands for?",
["Service Value System","Server Virtual Service","System Value Service","None"],
0,
"SVS is ITIL core model."],

["High MTTR indicates?",
["Fast recovery","Slow recovery","High uptime","Low latency"],
1,
"High MTTR means slower recovery."],

["KPI measures?",
["RAM","Performance","RAID","BIOS"],
1,
"KPI measures performance."],

["Continual Improvement means?",
["One-time","Ongoing improvement","Optional","Temporary"],
1,
"ITIL promotes continuous improvement."],

/* ================= MISC (89–100) ================= */

["Hypervisor Type 1 runs?",
["On OS","On hardware","In BIOS","On RAM"],
1,
"Type 1 runs directly on hardware."],

["Incremental backup copies?",
["All data","Changed data only","Nothing","System files"],
1,
"Incremental copies changed data only."],

["VPN provides?",
["Encryption","Cache","RAID","BIOS"],
0,
"VPN encrypts traffic."],

["Load balancing improves?",
["Storage","Availability","RAM","DNS"],
1,
"Load balancing improves uptime."],

["Zero Trust assumes?",
["Internal trusted","No implicit trust","DNS safe","RAID secure"],
1,
"Zero Trust requires verification always."],

["Latency measures?",
["Speed","Delay","Capacity","RAM"],
1,
"Latency measures delay."],

["Throughput measures?",
["Delay","Data transfer rate","RAM","Cache"],
1,
"Throughput measures speed of data transfer."],

["Disaster Recovery focuses on?",
["Prevention","Recovery after failure","RAM","DNS"],
1,
"DR ensures business continuity."],

["High availability reduces?",
["Cost","Downtime","RAM","DNS"],
1,
"HA reduces downtime."],

["Two-factor authentication requires?",
["Password only","Two verification methods","DNS","BIOS"],
1,
"2FA uses two forms of authentication."],

["Virtualization allows?",
["Multiple OS on one machine","More RAM physically","RAID config","BIOS edit"],
0,
"Virtualization runs multiple OS instances."],

["Cloud IaaS provides?",
["Infrastructure resources","Software only","Cache","BIOS"],
0,
"IaaS provides virtualized hardware resources."]

];