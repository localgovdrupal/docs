# Hosting LocalGov Drupal on Azure

You can effectively host LGD  on Microsoft Azure, leveraging various services provided by the platform. This page outlines different approaches taken by Croydon, Essex and Criminal Justice Hub, offering insights into the pros and cons of each setup.

## Hosting Options

### Croydon Borough Council
Croydon uses Azure Webapps (App Service) for hosting their LocalGov Drupal sites. Here are the key details of their setup:

#### Hosting Options

**Upload from Git Repository or FTP:** Azure uses its own PHP Docker container. However, this option was found lacking for Drupal hosting.

**Custom Docker Container:** Extending Azure’s PHP container allowed Croydon to maintain integration with Azure while fine-tuning for Drupal.

**Docker Compose:** Allows multiple containers but remains in "Preview," leading them to avoid it.

#### Virtual Machine (VM) Specifications

P2V2 Category: 2 virtual cores, 7GB memory, capable of hosting 4-6 Webapps.

**Pros:**
- Consistent environment between local and Azure-hosted sites.
- Simplified maintenance with Azure handling OS upgrades, scaling, TLS certificates, load balancers, etc.
- Built-in support for blue-green deployments.
- No downtime in nearly 3 years of Drupal hosting in Azure.

**Cons:**
- Bundling Apache, PHP, and other services into a single container is not ideal.

#### Additional Services

**Database:** Azure MySQL with 2 virtual cores, 333 GB disk, and rolling backups.

**File Storage:** Azure File Share mounted within the PHP container.

**CDN:** Microsoft CDN is used for content delivery -cheap but effective.

**Redis:** Not utilised due to cost concerns.

#### Costs
Monthly hosting costs for a production environment and a dev environment are in the lower four figures, with MySQL instances being the most significant expense.

### Essex County Council

Essex's setup differs slightly:

- **Hosting:**
  - **Azure Front Door:** Used instead of Azure CDN.
  - **Container Apps:** Chosen over Azure App Service.
  - **Azure Managed MariaDB:** Used instead of Azure Managed MySQL.
- **CI/CD:**
    - **GitLab CI:** Preferred over Azure DevOps Pipelines for integration.

Azure Database for MariaDB was deprecated in 2024 and new instances cannot be created. The alternative is **Azure Database for MySQL - Flexible Server**, which is better and cheaper.

### Criminal Justice Hub (CJH)

The Criminal Justice Hub (CJH) took a different approach after evaluating several options. Their main goal was to:

- Deploy a technically sound solution. Since CJH is a non-profit organisation, the DevOps team is likely to experience frequent changes. Each shortcut taken could become a potential hurdle for new people.
- Ensure easy scalability, utilising the cloud.
- Maintain cost control.

#### Hosting Options

**Azure Web Apps:** Found to have limitations due to vendor lock-in and slow file share performance.

**Azure Container Instances (ACI):** Limited by sandboxed environments and restricted volume mounts.

**Linux VM on Azure:** Selected as the most rational choice for its flexibility, speed, and ease of scaling.

#### Database

Azure Database for MariaDB: (1 core, 2GB RAM) Chosen for its cloud-native scalability. Only used  for the production environment, integrating MariaDB into the VM for staging and development servers.

#### File Storage

**Azure Storage Account:** Used with locally-redundant storage for binary files. This allows you to keep the drive size within the VM low and share binary data from a single resource as needed. This resource scales organically.

## Continuous Integration and Continuous Deployment (CI/CD)

### Croydon Borough Council

Croydon uses Azure DevOps Pipelines for CI/CD:

**Pros:**
- Seamless integration with Azure services.
- YAML-based pipeline definitions stored within the Drupal codebase.

**Cons:**
- Running Drush commands inside containers requires complex workarounds.
- Occasional bugs in the pipeline product cause challenges.

### Criminal Justice Hub (CJH)

CJH opted for GitHub Actions over Azure DevOps due to issues with Azure’s pipeline grant requirements.
