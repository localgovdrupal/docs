# Hosting on Microsoft Azure

This case study evolved from a [discussion on a Github issue](https://github.com/localgovdrupal/localgov/issues/497).

Azure is Microsoft's cloud hosting service that allows you hosting
infrastructure to be built up in a number of ways, including with cloud
services, virtual machines and docker containers.

There are a number of councils hosting LocalGov Drupal on Microsoft Azure,
including Croydon.

As Adnan wrote ont the original issues, there are two things to consider here:

1. Drupal hosting.
2. CI/CD

## Hosting
We use [Azure Webapps](https://learn.microsoft.com/en-us/azure/app-service/)
(AKA the "App service") for hosting our LocalGov Drupal sites.  There are three
ways you can provide your PHP code to a Webapp:

1. Upload code from a Git repo or FTP.  Azure then uses its own PHP Docker
container to serve the site.  We avoided it as we found it slightly wanting for
hosting Drupal.
2. Bring your own Docker container.  Azure's own PHP container has good
integration with the rest of Azure.  So we extend the
[Azure PHP container](https://mcr.microsoft.com/v2/appsvc/php/tags/list)
to roll our own.  This way we retain all the Azure goodness while fine tuning
for Drupal.
3. Docker compose.  This allows multiple containers.  But is perennially in
"Preview", so we skipped it.

The underlying VM, which we don't manage, is of P2V2 category.  It has 2 virtual
cores (whatever that means) and 7GB of memory.  It can host 4-6 Webapps.

### Pros
- Easy to maintain consistency between local development sites and Azure hosted
sites.
- Extending Azure's PHP container saves us from OS upgrades.
- Azure App service manages auto scaling, TLS certificates, load balancers, etc.
which leaves us with a lot less hassle.
- Built-in support for [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
- Can't remember of any downtime in our nearly 3 years of Drupal hosting in
Azure.

### Cons
- Having to use a single container means Apache and PHP (and some other
services) had to be bundled into one container which is less than ideal.

### Other services
- Database: Azure's hosted MySQL with 2 virtual cores and 333GB disk space
dispensing 999 IOPS.  MySQL's rolling backup takes up a lot of space (1-3TB)
due to constant update of various cache_* tables.
- Drupal's "files/" directory: Azure storage File share mounted as a shared
directory within the PHP container.
- Microsoft CDN.  Cheap but effective.
- Redis on Azure isn't cheap, so couldn't justify so far due to cost-benefit
considerations.

### Cost
Monthly *total* hosting expenses for a production environment and a dev
environment are in the lower four figures.  The MySQL instances (including a
replica) are costing the lion's share.

## CI/CD
[Azure DevOps pipelines](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/what-is-azure-pipelines)
was a natural choice as it has good integration with rest of the Azure services.
The definitions of various pipelines are provided as Yamls and live as part of
the Drupal codebase.

### Pros
- It works.

### Cons
- Running drush commands inside a running container from a pipeline involves
some gymnastics.
- There have been a few incidences of bugs creeping into the pipeline product
causing us some head scratching.