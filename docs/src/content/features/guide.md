# Guide

Guide pages are useful when you want to group together a collection of connected pages, where there's no set process to be followed.

They are useful if you want to give someone a range of information on one subject. The user can use the 'Next' button to move through the guide.

Typical uses include:

* types of animal welfare licences
* changing a birth record
* coroners
* sheltered housing

If you want to group together pages where there is a set process - applying for a permit, for example - then use [Step by step pages](https://docs.localgovdrupal.org/content/features/step-by-step.html) instead.

### Examples in the wild

[Dumfries & Galloway: Funded early learning and childcare](https://www.dumfriesandgalloway.gov.uk/schools-learning/early-learning-childcare/funded-early-learning-childcare)

[Woking: Health and safety at work](https://beta.woking.gov.uk/business-licences-permits/health-safety-work)

## How to use

Please see this video guide by content designer Ben Hills-Jones.

<iframe width="560" height="315" src="https://www.youtube.com/embed/nwk-hXkDanc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Layout options

In February 2025 we included two new site wide layout options for guides:

* 'stacked' heading pattern
* vertical list of pages within a guide

See an [example on our demo site](https://demo.localgovdrupal.org/node/37/travel-passes-and-support/blue-badges/apply-blue-badge). 

This change follows best practice in the NHS design system.

![NHS design system showing stacked headings and vertical contents list](https://github.com/user-attachments/assets/1999f4a3-697f-411c-84ad-de8784b0c092)

To enable these changes:

1. Click on the 'Appearance' tab
   
![Appearance tab](https://github.com/user-attachments/assets/c1363a8c-fca7-480d-b9e6-7eaf6ea0fdb8)

2. Click on your active theme

3. Look for these new controls and enable the ones you want
   
![Controls for stacked headings and vertical list of pages](https://github.com/user-attachments/assets/1dded88c-0860-499d-96d4-1526df2208c2)

If you can't see these controls, ask your dev to:

* check [localgov_base](https://github.com/localgovdrupal/localgov_base) and [localgov_guides](https://github.com/localgovdrupal/localgov_guides) are up to date
* make these changes if you don't have the required access

It's best practice to try this on a dev site first, to ensure your guide pages look OK with the changes.
