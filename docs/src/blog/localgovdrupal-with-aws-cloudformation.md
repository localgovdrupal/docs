---
title: "Try LocalGovDrupal on AWS"
description: "You can now take LocalGovDrupal on a test drive on AWS thanks to this CloudFormation builder."
date: "2021-04-20"
author: "Greg Harvey"
author_url: "https://twitter.com/greg_harvey"
canonicalUrl: "https://localgovdrupal.org/blog/localgovdrupal-with-aws-cloudformation.html"
---

# Try LocalGovDrupal on AWS

Although I work for an AWS partner, I've always shied away from [AWS CloudFormation](https://aws.amazon.com/cloudformation/), their orchestration technology. However, when I got talking to [Will](https://twitter.com/willguv) here at LocalGovDrupal about reducing the barrier to entry for organisations who want to use the distribution as a starting point, a plan formed. Perhaps the AWS Marketplace would be a good way to allow other councils to find and try out LocalGovDrupal?

The kicker of course is to put something in AWS Marketplace you pretty much need to build it with AWS CloudFormation. CloudFormation basically provides a YAML or JSON formatted means of describing any AWS service so it can be automatically set up and configured, and as a result your infrastructure can be saved in code. There are other products that achieve similar, for example the popular [Terraform](https://www.terraform.io/) from the infrastructure automation people at [Hashicorp](https://www.hashicorp.com/), not to mention the AWS [Ansible](https://www.ansible.com/) modules, both [commercially maintained](https://www.ansible.com/integrations/cloud/amazon-web-services) and [community developed](https://github.com/ansible-collections/community.aws). After some search engine pounding I fell upon the [AWS Reference Architecture project for Highly Available Drupal](https://github.com/aws-samples/aws-refarch-drupal/) in their `aws-samples` repository on GitHub. It's pretty out of date, but nice and complete, even with DNS handling and SSL and CDN configuration right out of the box. It has issues though:

1. It's really old! So it's using an old version of [Drupal](https://www.drupal.org/), an old version of [Amazon Linux](https://aws.amazon.com/amazon-linux-ami/), even an old PHP version (7.0), so all that needed updating
2. It doesn't actually make any effort to handle installing Drupal, in spite of build parameters that imply it does
3. LocalGovDrupal installs with `composer`, but the provided `install_drupal` script assumes you can just unpack a downloaded archive
3. All the instance types are previous generation
4. It doesn't work in AWS regions that weren't yet supporting all the necessary products when it was made (crucially, including London)

So more work that I intended to do - I could've just packed an Amazon Machine Image (AMI) and had done with it, but I decided I wanted to bring this reference architecture into 2021 so I could learn more about CloudFormation and also create a potentially useful "production release" Marketplace product. [All the changes I had to make are recorded here in a pull request on GitHub for posterity.](https://github.com/codeenigma/aws-refarch-drupal/pull/1)

But in essence, here's how it works:

[The master template](https://github.com/codeenigma/aws-refarch-drupal/blob/master/templates/aws-refarch-drupal-master.yaml) defines all the parameters CloudFormation needs the end customer to enter in order to build the infrastructure and install Drupal. Then for each requirement element it loads in a `Resource` sub-template that does the actual creation of that element. [All the resource templates are in our repository](https://github.com/codeenigma/aws-refarch-drupal/tree/master/templates), but also on AWS S3 for public use. The order is set using `DependsOn` in the master template, so because the `newvpc` resource has no dependencies it naturally gets built first, everything else depends on it because it builds a new [Virtual Private Cloud](https://aws.amazon.com/vpc/) (VPC) - a standalone virtual network at AWS. Once that is built and our new network is in place, it moves on to the `securitygroups` resource, which orchestrates the creation of [the virtual firewalls separating the various bits of infrastructure from each other and the outside world](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html).

After that, there's a whole bunch of infra we can build at once, because it all `DependsOn` the VPC and the Security Groups (SGs) existing. So next comes (in no particular order, CloudFormation can build them asynchronously) the:

* `bastion` resource - an AWS [Auto Scaling Group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroup.html) for EC2 (ASG) for creating a server to use as a jumping off point to SSH to the web server cluster, if needed
* `efs` resource - [for mountable network disk](https://aws.amazon.com/efs/)
* `publicalb` resource - to create [our load balancer which will sit in front of our web servers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)

There are a few other resources that depend on the VPC and the SGs, but which also have their own special extra dependencies, namely the:

* `elasticache` resource - this runs up an [ElastiCache](https://aws.amazon.com/elasticache/) cluster for Drupal caching via memcached, but it has an extra dependency - it's optional on the user entry form, so if it isn't selected it isn't built
* `rdscluster` resource - creates an [AWS Aurora (their MySQL flavour) database cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.html) - the only option in the reference architecture, but I altered this to offer the choice of an:
* `rdsinstance` resource - which creates a standalone, [single or multiple availability zone MariaDB instance](https://aws.amazon.com/rds/mariadb/), a single-AZ instance (effectively a single database server) or even [a highly available multi-AZ instance](https://aws.amazon.com/rds/features/multi-az/) being cheaper to operate than a full Aurora cluster!

Once that stuff is all up, CloudFormation can create the ASG for the web servers. This is similar to the `bastion` resource, except it has a few extras. It needs to:

* install PHP and dependencies for LocalGovDrupal
* install `composer`
* install Apache
* install Drupal using `composer` and `drush si` (the site install command)

This all happens via a [`cloud-init`](https://cloudinit.readthedocs.io/en/latest/) script, which gets described in the YAML file of the `web` template and is built and executed by the wrapper AWS have created call `cfn-init` (`cfn` being shorthand for CloudFormation).

Once that's done, it's all over bar the shouting. You might have to wait 15 minutes or so to actually see Drupal, because the `composer install` and the `drush si` take quite a bit of time, but if you login to your AWS console and go to EC2 and Load Balancers you'll see your new load balancer, and there should be a Drupal website on its URL.

There are just two more resources in the master template we haven't loaded in yet, `cloudfront` and `route53`. These are both options on the form, but if selected, and once the `web` template has successfully built its ASG, these templates will be executed. One creates a DNS record for the new Drupal website (but only if you're using [AWS Route 53](https://aws.amazon.com/route53/) for DNS services, of course). The other puts the [CloudFront CDN](https://aws.amazon.com/cloudfront/) in front of your load balancer, for better performance, SSL as standard and DDoS protection (which I recommend - it's not even expensive).

And that's the stack! Once it's all up, you'll find a vanilla LocalGovDrupal waiting for you to play with it.

Is it in the Marketplace? No, not yet - we're not sure how/who should do this, it needs to be discussed. Can you use it? Yes! The good news is all you need is an active AWS account and you can have at it! [Just go to this project on GitHub](https://github.com/codeenigma/aws-refarch-drupal/tree/master#running-localgovdrupal-on-aws) and click on Launch Stack next to the region you want to use, fill in the form and off it will go!

I will continue to develop this, add more `composer` options, an option to load in the demo content project, and so on. Do keep an eye on the repository. [Any issues, let me know via the GitHub issue queue for the project.](https://github.com/codeenigma/aws-refarch-drupal/issues)
