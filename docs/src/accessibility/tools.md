# Tools
These tools help to achieve compliant development, and help make testing whole pages and sites more efficient and accurate.

If you know of additional or superior alternatives please share these with us.

## Manual tests
Much accessibility testing is conducted using standard Chromium / Mozilla developer tools plus selected extensions.

Manual testing should be conducted using both a desktop web browser, and a small-screen mobile browser with a touch interface.

## Browser extensions
Some suggested browser extensions to assist with manual testing. These may be referenced in the testing methods described below.
- Web Developer - lots of insights including HTML validation. [Chrome](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm), [Mozilla](https://addons.mozilla.org/en-GB/firefox/addon/web-developer/)
- Landmarks - hierarchical view of landmarks with navigation. [Chrome](https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp), [Mozilla](https://addons.mozilla.org/en-GB/firefox/addon/landmarks/)
- axe web accessibility testing. [Chrome](https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd), [Mozilla](https://addons.mozilla.org/en-GB/firefox/addon/axe-devtools/)
- AInspector Sidebar. [Mozilla](https://addons.mozilla.org/en-GB/firefox/addon/ainspector-wcag/)

## Stand-alone applications
Additional stand-alone applications may be used where beneficial, including:
- [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/)

## Screen readers
All developers should undertake some basic screen reader testing. This is never a replacement for user testing, but can surface issues that would otherwise not be apparent.

Test with the most popular screen readers:

- [NVDA](https://www.nvaccess.org/download/) - Windows, free download
- [JAWS](https://support.freedomscientific.com/Downloads/JAWS) - Windows, free download, runs for 40 mins
- VoiceOver - macOS/iOS, integrated

The Paciello Group have produced a very useful guide to which can form the basis of testing with screen readers: [Basic screen reader commands for accessibility testing](https://developer.paciellogroup.com/blog/2015/01/basic-screen-reader-commands-for-accessibility-testing/)

## Automated tests
Automated testing is an efficient means of identifying issues for a small number of success criteria. For example testing for the presence of alt attributes on all images ([1.1.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)).

Automated testing cannot reliably determine whether any success criteria is fully met, and must be accompanied by informed manual testing: automated testing cannot assess the appropriateness of an alt attribute.

Useful background reading: [What we found when we tested tools on the world's least acessible webpage](https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/)

It is very useful for testing document structure - headings and landmarks in particular - which can be tricky to evaluate manually or by reviewing markup.

The WAI maintains [a list of automated accessibility testing tools](https://www.w3.org/WAI/ER/tools/).

[TODO] Agree automated tools the project will use / support. Potential free options:

 - [pa11y](https://github.com/pa11y/pa11y)
 - [FAE](https://fae.disability.illinois.edu/)
 - [WAVE](https://wave.webaim.org/)
 - [Tenon.io](https://tenon.io/)
 - [TAW](https://www.tawdis.net/)
