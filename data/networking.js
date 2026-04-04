window.rawQuestions = [
["Which device operates at Layer 2 of the OSI model?",
["Hub","Switch","Router","Modem"],
[1],"Switch operates at Data Link layer"],

["Which topology fails if the central device goes down?",
["Bus","Ring","Star","Mesh"],
[2],"Star topology depends on central device"],

["Ethernet uses which media access method?",
["Token Passing","CSMA/CD","CSMA/CA","TDMA"],
[1],"Ethernet uses CSMA/CD"],

["How many layers are there in the OSI model?",
["4","5","6","7"],
[3],"OSI has 7 layers"],

["Which OSI layer handles encryption?",
["Session","Presentation","Transport","Application"],
[1],"Presentation layer handles encryption"],

["Which protocol assigns IP addresses automatically?",
["DNS","FTP","DHCP","HTTP"],
[2],"DHCP assigns IPs"],

["Which network type covers a small office?",
["WAN","MAN","LAN","PAN"],
[2],"LAN is local area network"],

["IPv4 address length is?",
["16 bits","32 bits","64 bits","128 bits"],
[1],"IPv4 is 32-bit"],

["Which is a private IP address?",
["8.8.8.8","172.16.1.10","1.1.1.1","200.1.1.1"],
[1],"172.16.0.0 – 172.31.255.255"],

["Subnet mask for /24 is?",
["255.0.0.0","255.255.255.0","255.255.255.128","255.255.255.252"],
[1],"/24 equals 255.255.255.0"],

["How many usable hosts in /26?",
["62","64","30","126"],
[0],"64 total minus 2 = 62"],

["Switch forwards frames based on?",
["IP address","MAC address","Port number","Protocol"],
[1],"Switch uses MAC table"],

["Purpose of STP?",
["Increase speed","Prevent routing loops","Prevent switching loops","Assign IP"],
[2],"STP prevents loops"],

["Root bridge is selected based on?",
["Highest MAC","Lowest MAC","Highest priority","Lowest priority"],
[3],"Lowest priority wins"],

["Which protocol is used for network monitoring?",
["FTP","SNMP","SMTP","Telnet"],
[1],"SNMP monitors devices"],

["Ping uses which protocol?",
["TCP","UDP","ICMP","ARP"],
[2],"Ping uses ICMP"],

["Routing decisions are based on?",
["MAC table","VLAN ID","Routing table","Port"],
[2],"Router uses routing table"],

["Which routing logic prefers most specific route?",
["Default routing","Static routing","Longest prefix match","Load balancing"],
[2],"LPM rule"],

["Static routing is best for?",
["Large dynamic networks","Frequently changing networks","Small stable networks","Internet"],
[2],"Static = small networks"],

["Command to configure static route?",
["route add","ip route","router static","set route"],
[1],"Cisco uses ip route"],

["Dynamic routing protocols do what?",
["Assign MAC","Detect topology changes","Encrypt traffic","Create VLANs"],
[1],"They adapt automatically"],

["Which is NOT a routing metric?",
["Bandwidth","Delay","Hop count","MAC address"],
[3],"MAC not a metric"],

["RIP uses which metric?",
["Bandwidth","Delay","Hop count","Cost"],
[2],"Hop count"],

["Maximum hop count in RIP?",
["10","15","16","255"],
[1],"15 max hops"],

["OSPF is a?",
["Distance vector","Hybrid","Link-state","Path vector"],
[2],"OSPF is link-state"],

["OSPF uses which algorithm?",
["Bellman-Ford","Dijkstra","Flooding","Round Robin"],
[1],"SPF algorithm"],

["OSPF backbone area?",
["Area 1","Area 10","Area 0","Area 255"],
[2],"Area 0 is backbone"],

["EIGRP is developed by?",
["IEEE","ISO","Cisco","IETF"],
[2],"Cisco proprietary"],

["EIGRP uses which algorithm?",
["SPF","Bellman-Ford","DUAL","Flooding"],
[2],"DUAL algorithm"],

["ACL is used for?",
["Routing","Filtering traffic","Encryption","Monitoring"],
[1],"ACL filters traffic"],

["Standard ACL filters based on?",
["Destination IP","Source IP","Port","Protocol"],
[1],"Standard = source IP"],

["NAT is used to?",
["Improve speed","Convert private to public IP","Assign MAC","Encrypt data"],
[1],"NAT hides private IPs"],

["PAT allows?",
["One-to-one mapping","Many-to-many","Many-to-one","Static mapping"],
[2],"PAT = many to one"],

["Syslog is used for?",
["Routing updates","Log management","Address resolution","Authentication"],
[1],"Syslog collects logs"],

["Lower Syslog severity means?",
["Less critical","More critical","Debug only","Info only"],
[1],"0 is emergency"],

["Best protocol for large enterprise?",
["RIP","OSPF","Static","BGP"],
[1],"OSPF scales well"],

["Broadcast storm prevention?",
["VLAN","STP","ARP","NAT"],
[1],"STP blocks loops"],

["Longest prefix match chooses?",
["/0","Least specific","Most specific","Random"],
[2],"Most specific subnet"],

["PC cannot reach outside network. Missing?",
["IP","Subnet mask","Gateway","DNS"],
[2],"Default gateway needed"],

["Device that breaks collision domains?",
["Hub","Switch","Router","Repeater"],
[1],"Switch breaks collision domains"],

["Classless routing protocol?",
["RIPv1","RIPv2","IGRP","RIP"],
[1],"RIPv2 is classless"],

["Router operates at which OSI layer?",
["Data Link","Network","Transport","Application"],
[1],"Layer 3"],

["Switch forwards using?",
["IP","MAC","Port","Subnet"],
[1],"MAC address"],

["Command to check interface status?",
["show ip route","show run","show interfaces","show vlan"],
[2],"show interfaces"],

["WAN covers?",
["Room","Building","City","Country"],
[3],"WAN spans countries"]
];
