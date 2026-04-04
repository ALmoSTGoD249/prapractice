window.rawQuestions = [
    /* ================= AZ-900 FUNDAMENTALS (51–110) ================= */

["Which cloud model provides dedicated infrastructure for a single organization?",
["Public Cloud","Private Cloud","Hybrid Cloud","Community Cloud"],
1,
"Private cloud is dedicated to one organization"],

["Which Azure service is used for identity management?",
["Azure Monitor","Azure AD","Azure Policy","Azure Backup"],
1,"Azure AD manages identities"],

["Which cloud service model requires the least management?",
["IaaS","PaaS","SaaS","On-Prem"],
2,"SaaS requires least management"],

["Operational Expenditure (OpEx) means?",
["Upfront cost","Pay as you go","Hardware purchase","Datacenter cost"],
1,"OpEx is consumption-based payment"],

["Which Azure service provides serverless computing?",
["Azure VM","Azure Functions","Azure VNet","Azure Disk"],
1,"Azure Functions is serverless"],

["Which Azure service is used to host web apps?",
["Azure VM","Azure App Service","Azure Storage","Azure AD"],
1,"App Service hosts web apps"],

["Which Azure storage is best for unstructured data?",
["Table","Queue","Blob","Disk"],
2,"Blob storage stores unstructured data"],

["Which tool estimates Azure pricing?",
["Azure Advisor","Pricing Calculator","Azure Monitor","Cost Management"],
1,"Pricing calculator estimates cost"],

["Which Azure feature ensures compliance with rules?",
["RBAC","Policy","Locks","Monitor"],
1,"Policy enforces compliance"],

["Which Azure feature prevents resource deletion?",
["RBAC","Policy","Resource Lock","Tags"],
2,"Resource locks prevent deletion"],

["Which Azure service provides backup?",
["Site Recovery","Azure Backup","Azure Monitor","Advisor"],
1,"Azure Backup backs up data"],

["Which Azure service provides disaster recovery?",
["Azure Backup","Azure Site Recovery","Azure Monitor","Advisor"],
1,"Site Recovery is for DR"],

["Which Azure service provides recommendations?",
["Advisor","Monitor","Policy","Backup"],
0,"Azure Advisor gives recommendations"],

["Which Azure service is used for monitoring?",
["Azure AD","Azure Monitor","Azure Policy","Azure RBAC"],
1,"Azure Monitor collects logs and metrics"],

["Which Azure storage service provides file shares?",
["Blob","File","Queue","Table"],
1,"Azure Files provides SMB shares"],

["Which Azure service is NoSQL storage?",
["Azure SQL","Table Storage","Blob Storage","File Storage"],
1,"Table storage is NoSQL"],

["Which cloud model combines on-prem and cloud?",
["Public","Private","Hybrid","Dedicated"],
2,"Hybrid combines both"],

["Which Azure service distributes traffic across VMs?",
["Traffic Manager","Load Balancer","App Gateway","DNS"],
1,"Load Balancer distributes traffic"],

["Which Azure service routes traffic globally?",
["Load Balancer","Traffic Manager","NSG","VNet"],
1,"Traffic Manager routes globally"],

["Which Azure service provides Layer 7 routing?",
["Load Balancer","Application Gateway","Traffic Manager","DNS"],
1,"App Gateway works at Layer 7"],

["Which Azure service protects web apps from attacks?",
["NSG","Azure Firewall","WAF","DDoS"],
2,"WAF protects web apps"],

["Which Azure pricing gives discount for long commitment?",
["Pay-as-you-go","Reserved","Spot","Free"],
1,"Reserved gives discount"],

["Which Azure service is used for relational database?",
["Blob","Table","Azure SQL","Queue"],
2,"Azure SQL is relational"],

["Which Azure feature organizes resources?",
["Resource Group","Policy","RBAC","Locks"],
0,"Resource Groups organize resources"],

["Which Azure feature controls access?",
["RBAC","Policy","Locks","Tags"],
0,"RBAC controls access"],

/* ================= AZ-104 ADMINISTRATOR (111–200) ================= */

["You need to give a user full access to a resource group. Which role should you assign?",
["Reader","Contributor","Owner","User Access Admin"],
2,"Owner has full access"],

["You need to give a user permission to create and manage VMs only.",
["Reader","VM Contributor","Owner","Policy Contributor"],
1,"VM Contributor manages VMs only"],

["You need to enforce that only specific VM sizes can be created.",
["RBAC","Policy","Locks","Tags"],
1,"Policy enforces resource rules"],

["You need to prevent deletion of a storage account.",
["RBAC","Policy","Delete Lock","NSG"],
2,"Delete lock prevents deletion"],

["You need temporary admin access for a user.",
["RBAC","Policy","PIM","Locks"],
2,"PIM provides temporary access"],

["You need to autoscale VMs.",
["Availability Set","Scale Set","Load Balancer","NSG"],
1,"Scale Set provides autoscaling"],

["You need to distribute HTTP traffic based on URL path.",
["Load Balancer","App Gateway","Traffic Manager","Front Door"],
1,"App Gateway supports path routing"],

["You need to connect on-prem network to Azure.",
["VNet Peering","Site-to-Site VPN","Point-to-Site VPN","NSG"],
1,"Site-to-Site connects networks"],

["You need to connect a single laptop to Azure network.",
["Site-to-Site","Point-to-Site","ExpressRoute","Peering"],
1,"Point-to-Site connects single device"],

["Which storage replication copies data to another region?",
["LRS","ZRS","GRS","Premium"],
2,"GRS replicates to another region"],

["Which replication provides highest redundancy?",
["LRS","ZRS","GRS","GZRS"],
3,"GZRS replicates across zones and region"],

["You need private access to storage from VNet.",
["Service Endpoint","Private Endpoint","VPN","Peering"],
1,"Private Endpoint uses private IP"],

["Which NSG rule priority is highest?",
["100","200","300","400"],
0,"Lower number = higher priority"],

["Which Azure service monitors CPU and memory?",
["Advisor","Monitor","Policy","RBAC"],
1,"Azure Monitor tracks metrics"],

["Which service stores backup data?",
["Recovery Vault","Storage Account","Log Analytics","Monitor"],
0,"Recovery Services Vault stores backups"],

["You need disaster recovery for VMs.",
["Backup","Site Recovery","Monitor","Advisor"],
1,"Site Recovery is DR"],

["Which availability protects from datacenter failure?",
["Availability Set","Availability Zone","Scale Set","Load Balancer"],
1,"Availability Zone protects from datacenter failure"],

["Which availability protects from hardware failure?",
["Availability Set","Availability Zone","Traffic Manager","Front Door"],
0,"Availability Set protects from hardware failure"],

["Which Azure service analyzes cost?",
["Cost Management","Advisor","Monitor","Policy"],
0,"Cost Management analyzes spending"],

["Which role can assign roles to others?",
["Reader","Contributor","Owner","User Access Admin"],
3,"User Access Admin manages access"],

["Which service provides DDoS protection?",
["NSG","WAF","DDoS Protection","Firewall"],
2,"Azure DDoS Protection"],

["Which service filters traffic using rules?",
["NSG","Policy","RBAC","Locks"],
0,"NSG filters network traffic"],

["Which service provides centralized logs?",
["Log Analytics","Advisor","Policy","RBAC"],
0,"Log Analytics stores logs"],

["Which service provides global HTTP load balancing?",
["Traffic Manager","Front Door","Load Balancer","NSG"],
1,"Front Door is global HTTP LB"],

["Which service provides internal load balancing?",
["Public LB","Internal LB","Traffic Manager","Front Door"],
1,"Internal LB is for internal traffic"]
/* ================= AZURE DEVOPS (201–260) ================= */

["What is Azure DevOps?",
["A database service","A DevOps lifecycle tool","A virtual machine service","A monitoring tool"],
1,"Azure DevOps is a platform for managing the DevOps lifecycle"],

["Which Azure DevOps service is used for source code management?",
["Azure Pipelines","Azure Repos","Azure Boards","Azure Test Plans"],
1,"Azure Repos is used for Git repositories"],

["Which Azure DevOps service is used for CI/CD?",
["Azure Boards","Azure Pipelines","Azure Repos","Azure Artifacts"],
1,"Azure Pipelines is used for CI/CD"],

["Which Azure DevOps service is used for project tracking?",
["Azure Boards","Azure Pipelines","Azure Repos","Azure Test Plans"],
0,"Azure Boards is used for work tracking"],

["Which Azure DevOps service is used to store packages?",
["Azure Boards","Azure Artifacts","Azure Pipelines","Azure Repos"],
1,"Azure Artifacts stores packages"],

["What does CI stand for?",
["Continuous Integration","Continuous Improvement","Code Integration","Central Integration"],
0,"CI = Continuous Integration"],

["What does CD stand for?",
["Continuous Deployment","Central Deployment","Code Delivery","Cloud Deployment"],
0,"CD = Continuous Deployment"],

["What is a pipeline in Azure DevOps?",
["A storage account","Automated workflow","A virtual machine","A database"],
1,"Pipeline automates build and deployment"],

["Which file is commonly used to define pipeline as code?",
["config.json","pipeline.yml","azure-pipelines.yml","build.txt"],
2,"azure-pipelines.yml defines pipeline"],

["What is a build in DevOps?",
["Compiling source code","Deploying server","Monitoring logs","Creating VM"],
0,"Build compiles code"],

["What is a release in DevOps?",
["Deleting code","Deploying application","Monitoring CPU","Creating database"],
1,"Release deploys application"],

["Which version control system is used in Azure Repos?",
["Git","SVN","Mercurial","TFS only"],
0,"Azure Repos supports Git"],

["What is a commit?",
["Saving code changes","Deleting repository","Deploying code","Testing code"],
0,"Commit saves changes"],

["What is branching?",
["Deleting code","Creating separate code version","Deploying app","Testing server"],
1,"Branching creates separate code versions"],

["What is a pull request?",
["Delete request","Merge request","Build request","Deploy request"],
1,"Pull request merges code"],

["What is DevOps?",
["Development only","Operations only","Development + Operations collaboration","Testing only"],
2,"DevOps combines development and operations"],

["What is Infrastructure as Code (IaC)?",
["Manual setup","Code-based infrastructure setup","Network monitoring","Manual deployment"],
1,"IaC uses code to manage infrastructure"],

["Which tool is used for IaC in Azure?",
["Terraform","Word","Excel","Paint"],
0,"Terraform is IaC tool"],

["Which Microsoft tool is used for IaC?",
["ARM Templates","Notepad","Visio","PowerPoint"],
0,"ARM templates define infrastructure"],

["What is YAML used for in DevOps?",
["Writing code","Writing pipelines","Writing database","Writing OS"],
1,"YAML defines pipelines"],

["Which pipeline triggers automatically when code is pushed?",
["Release pipeline","CI pipeline","Manual pipeline","Test pipeline"],
1,"CI triggers on code push"],

["What is artifact in DevOps?",
["Source code","Build output","Log file","Test case"],
1,"Artifact is build output"],

["Which Azure DevOps service is used for manual and automated testing?",
["Azure Test Plans","Azure Boards","Azure Repos","Azure Pipelines"],
0,"Azure Test Plans manages testing"],

["What is a self-hosted agent?",
["Microsoft hosted server","Your own server running pipeline","Storage account","Database"],
1,"Self-hosted agent runs pipeline on your machine"],

["What is a Microsoft-hosted agent?",
["Your local PC","Azure hosted VM","On-prem server","Database server"],
1,"Microsoft-hosted agent is Azure VM"],

["What is release pipeline used for?",
["Build code","Deploy code","Monitor code","Delete code"],
1,"Release pipeline deploys code"],

["What is blue-green deployment?",
["Two identical environments","Deleting environment","Testing code","Backup method"],
0,"Blue-green uses two environments"],

["What is rollback?",
["Delete code","Revert to previous version","Deploy new version","Merge branch"],
1,"Rollback restores previous version"],

["What is continuous monitoring?",
["Monitoring after deployment","Monitoring before coding","Monitoring hardware only","Monitoring HR"],
0,"Continuous monitoring tracks app after deployment"],

["Which Azure service integrates with Azure DevOps for CI/CD?",
["Azure VM","Azure App Service","Azure Storage","Azure AD"],
1,"App Service integrates with CI/CD"]

];