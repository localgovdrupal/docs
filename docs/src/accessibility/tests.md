# Accessibility tests
The tests described here are intended to provide a relatively quick, standard process for checking the conformance of LocalGov Drupal. By necessity it covers a sub-set of WCAG success criteria, and wherever possible testers should avail themselves of the full WAI documentation, including the definitive [Understanding](https://www.w3.org/WAI/WCAG22/Understanding/) and [Techniques](https://www.w3.org/WAI/WCAG22/Techniques/) content.

Test annotations:
- M - Manual
- A - Automated
- U - User

## 1. Resize

| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
| Resize text [M] | [1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text) | AA | Zoom to 200%. Confirm no loss of information or functionality.|
| Reflow [M] | [1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) | AA | Confirm no loss of information or functionality, and without scrolling in two dimensions at 320px width equivalent (assuming vertical scrolling content).<br><br>For desktop testing, simulate this with Responsive Design Mode in Mozilla or Device Viewport Mode in Chromium browsers. |
| Text spacing [M] | [1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html) | AA | Increase:<ul><li>line-height to 1.5x font size</li><li>Letter spacing to 0.12x font size</li><li>Word spacing to 0.16x font size</li></ul>Confirm no loss of content or functionality.<br><br>Embed the following CSS snippet for a proximate test:<br><br>`* {line-height: 1.5em !important; letter-spacing: 0.12em !important; word-spacing: 0.16em !important;}`|


## 2. Keyboard
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
| Keyboard control for all functionality [M] | [2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)/[2.1.3](https://www.w3.org/WAI/WCAG22/Understanding/keyboard-no-exception.html) | A/AAA | Identify all functionality. Use only the keyboard to access all functions.<br><br>Pay particular attention to mouse-centric functionality such as drag-and-drop, scroll, and zoom, and that mouse event handlers such as click have keyboard support. |
| No keyboard trap [M] | [2.1.2](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap) | A | Navigate through the entire content using the keyboard. Ensure focus is not trapped in any element. Pay particular attention to embedded elements such as video and maps. |
| Visible focus [M] | [2.4.7](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html) | AA | Navgiate the content using the keyboard. Ensure that any elements that accept focus have a clear focus indicator, and that only one element displays a focus indicator at any given time.<br><br>See [2.4.11](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible-enhanced) for guidance on clearly visible indicators. |
| Links to skip blocks where appropriate [M] | [2.4.1](https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks) | A | Identify blocks which may benefit from skip links. For example a list of recent news items, or navigation blocks. Ensure that there is a link to skip these blocks.<br><br>As a minimum, the first focusable element on all pages should be a link to skip to the main page content. |
| Focus order [M] | [2.4.3](https://www.w3.org/WAI/WCAG22/Understanding/focus-order) | A | Navigate the content using only the keyboard. You should encounter information in an order that is consistent with the meaning and structure of the content.<br><br>Pay particular attention to elements where the `tabindex` attribute may have defined, multi-level navigation in menus, interfaces which hide and reveal content based on user input, forms, and modals.<br><br>See also SC [1.3.2 - Meaningful sequence](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) |
| No change of context on focus [M] | [3.2.1](https://www.w3.org/WAI/WCAG22/Understanding/on-focus) | A | Ensure that when an element receives focus, there is no context change including:<ul><li>focus moving to another element;</li><li>submission of a form automatically;</li><li>opening of a new window.</li></ul>In short, check that when the user navigates to an element and it receives focus, the focus remains there until the user moves it. |
| Change of context on input [M] | [3.2.2](https://www.w3.org/WAI/WCAG22/Understanding/on-input) | A | Check that entering data or selecting a form control has predictable effects. Where a potentially unpredictable effect will occur, such as focus moving to another form element on input, describe the effect to the user at the beginning of the form or as part of the element label.<br><br>For example, a form control for a credit card may consist of four separate text inputs, with focus moving to the next as soon as the user enters 4 digits in the previous input.<br><br>This behaviour should be described to the user before the form control (although in this case the potential user benefit to the behaviour is questionable at best). |

## 3. Colour, contrast, animation
Most automated tools including pa11y and FAE will check and report on colour contrast, but may not always correctly identify text sizes or test focus indicators and other non-text contrast.

For testing a single page, use the built-in browser accessibility tools which have excellent colour contrast coverage: Accessibility Inspector (Mozilla) or Lighthouse (Chromium).

Manually test any components that have state changes triggered with javascript, for example accordions.

When testing specific colour values during development, use an application like [Colour Contrast Analyser](https://developer.paciellogroup.com/resources/contrastanalyser/), a browser extension, or [WebAIM's web-based contrast checker](https://webaim.org/resources/contrastchecker/).

| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
| Colour contrast - regular text [M,A] | [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)/[1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)|AA/AAA| Check that contrast ratio for regular text (under 18pt, or 14pt if bold) is at least 4.5:1 (AA) or 7:1 (AAA) using the W3C's contrast ratio definition. |
| Colour contrast - large text [M,A] | [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)/[1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)|AA/AAA| Check that contrast ratio for large text (at least 18pt, or 14pt if bold) is at least 3:1 (AA) or 4.5:1 (AAA) using the W3C's contrast ratio definition. |
| Colour contrast - focus indicator [M] | [1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)|AA/AAA| Ensure the contrast ratio between any focus indicator and its background is at least 4.5:1 (AA) or 7:1 (AAA).|
| Contrast for graphical objects [M]| [1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html)|AA/AAA| Where an graphical object is used to convey meaning to a user that is not communicated by other means, ensure the object has sufficient contrast in itself and against its background.<br><br>For example, an icon of a telephone with a telephone number beside it must have sufficient contrast, unless the word 'Telephone number' or other meaningful label is also provided.<br><br>This is a complex issue - review the [WAI Understanding documentation](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) for more information.|
| Colour contrast for selection [M,A] | [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)/[1.4.6](https://www.w3.org/WAI/WCAG22/Understanding/contrast-enhanced)|AA/AAA|The CSS pseudo-element ::selection allows designers to style text which is selected. Ensure that selected text meets the minimum contrast ratio as per regular and large text above. (Use Cmd / Ctrl A to select all text in the selected browser window.)|
| High-contrast modes | [1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum)| AA | Check that colour choices do not conflict with default settings for Windows High Contrast Mode and other OS / browser dark modes. This can be a cursory check - it is not possible to account for all user-defined preferences.|
| Meaning is not conveyed through colour alone | [1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color) | A | Check that colour is not the sole method of communicating information or state. This includes but is not limited to:<ul><li>links, which should be underlined or have some other visual indicator when in body text;</li><li>indicators for required fields and errors in forms;</li><li>disabled content and elements;</li><li>active/non-active tabs or other interface elements.</li></ul>|

## 4. Links & buttons
To extract a list of all links on a page, along with their link text, try [URL Extractor](https://urlextractor.net/). NB: This doesn't reliably determine link text / titles, especially when anchor elements surround multiple child elements such as an image + text.

(The Web Developer Toolbar browser extension used to provide this information, but recent versions only tabulate URLs without link text.)

| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Link purpose [M,A]|[2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)/[2.4.9](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only)|A/AAA|Check that the purpose of each link on the page can be determined from the link text alone, or the link with its context (for example a link in a table cell may have context provided by a table header cell). Where links span multiple elements, for example an icon and text, ensure the text equivalents for non-text content make sense in combination with the link text. In most cases a null alt attribute for images.<br><br>Where the link is to a downloadable resource, include the file size in the link text. This provides users with information that helps them to make a decision about whether to download the resource.<br><br>Where multiple versions of a resource are linked to, for example PDF and Word versions of a downloadable document, use consistent link text for the subject and distinguish the links with the format, for example 'Title of document (PDF 1MB)'.|
|Link text unique across destinations [M,A]|[2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)|A|Check that link text is unique across link destinations. Automated tests can help with this. If links have the same destination, using the same text for them all is recommended (commonly found for things like contact links in a site header and footer).|
| Use the button element for buttons [M]|[2.4.4](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context)|A|Button and link elements behave differently in browsers, so use them for their intended purposes. Both are focusable, but buttons are triggered by either the space bar or the Enter key, while links are triggered by the Enter key. If a button is no focussed, the space bar will scroll the current window by a page. This is why you should rarely style links to look like buttons - a user pressing space bar may expect an action to be performed, but will instead have their viewport scrolled downwards.<br><br>Links will be listed by most screen readers in a specific interface for users to browse available navigation options, buttons will not be.<br><br>When triggered, links should take the user to a new destination or a section within the current page. Buttons should perform an action such as submitting a form, closing or opening a section of content, or something similar. This is an issue to be particulary conscious of with interfaces enchanced with javascript.|
|Link target size [M]|[2.5.5](https://www.w3.org/WAI/WCAG22/Understanding/target-size.html)|AAA|Ensure touch targets have a size of at least 44 x 44 CSS pixels. Inline links and links with equivalent targets of sufficient size are not required to meet this minimum, but it is good practice nonetheless.|

## 5. Images
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|All images have alt attributes [A]|[1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)|A|Test with an automated tool.|
| Populated image alt attributes are appropriate [M]|[1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)|A|Check that all images have appropriate alt attributes - null for decorative images, and communicating the purpose of the image otherwise.<br><br>**Web Developer Toolbar > Images > Display Alt Attributes** shows alt attributes inline on a page.<br><br>**Outline Images Without Alt Attributes** from the same menu highlights images without alt attributes.<br><br>(**View Image Information** from the same menu provides a table of all images used on a page, but includes background images, and does not register null alt attributes.)<br><br>If in doubt, use the [WAI alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/).|
|Decorative images have a null alt attribute and no title attribute [M]|[1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)|A|NB: Although it's also acceptable to use the `role="decorative"` attribute instead of an alt attribute, there's no good reason for doing so.|
|Use text instead of an image of text unless particular presentation of the text is required|[1.4.5](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text)/[1.4.9](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception.html)|AA/AAA|Check for images of text used for headings and other purposes where styled text would achieve the same effect. This ensures users can resize and otherwise manipulate the content to their preference.<br><br>This does not apply where the image contains other significant content, or where the text requires a particular presentation to convey its purpose, for example a logo.|
|Images of text have an alt attribute of the text in image unless the text is purely decorative [M]|[1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)|A|Where an image is primarily a representation of text, for example a logo or sign, ensure the alt attribute matches the text in the image, or is null if the image is purely decorative.|
|aria-label attributes are used appropriately [M]|[1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content)|A|`aria-label` can be used alongside the ARIA role `role="img"` to identify multiple elements as a single image. For example 3 images within a `<div>` can be given null alt attributes, and the containing `<div>` an `aria-label` that describes the composite image. (`aria-labelledby` could also be used in this case if the text alternative was defined elsewhere, for example in a heading.)|

## 6. Video & audio
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|A text alternative serving an equivalent purpose should be provided for pre-recorded video and audio [M]|1.1.1/ [1.2](https://www.w3.org/WAI/WCAG22/Understanding/time-based-media)|A-AAA|Provide transcript for audio-only, audio-description for video-only.<br><br>For synchronised media (audio and video) provide synchronised captions, and to achieve AAA provide sign language interpretation.<br><br>For live video and audio, only provide a descriptive label.|
|Audio does not autoplay [M]|[1.4.2](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)|A|Do not automatically play any sound that last more than 3 seconds. Best-practice is to not auto-play any audio.|
|Media can be controlled with the keyboard [M]|[2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)|A|Check that all media can be controlled with the keyboard, and can at least be paused with the space bar when focussed.|
|Assess seizure risk of video [M]|[2.3.1](https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold)|A|Review video for flashes and blinks that may trigger photosensitive seizures.|

## 7. Forms
The Web Developer Toolbar provides several useful tools for viewing and testing forms:<ul><li>Display Form Details will show form element markup inline;</li><li>Outline Form Fields Without Labels does exactly what you'd think;</li><li>Remove Form Validation is useful for submitting incomplete forms which have client-side validation;</li><li>View Form Information provides a tabular view of all form elements including their type and label.</li></ul>
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Form instructions [M]|[3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)|A|Provide general instructions to help users understand how to complete the form. These should be provided before the `<form>` element.|
|Labels [A,M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)/[3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)|A|Ensure all form controls have explicitly associated `<label>` elements that clearly and unambiguously describe the form control's purpose.<br><br>If using the `aria-labelledby` attribute on the form control element, be aware that it is used instead of the `<label>` by screen readers.<br><br>`aria-labelledby` can also support multiple values - be aware that the order the values are declared determines the reading order.<br><br>Use `aria-describedby` to provide information additional to that in the `<label>` - it is announced in addition, not instead of the `<label>`|
|Label visibility [M]|-|-|If a label is hidden, use a [technique](https://webaim.org/techniques/css/invisiblecontent/) that still makes it accessible to ATs.|
|Required information [M]|[1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)|AA|Use aria-required or required attribute on required elements. The latter is preferred since it provides client-side validation in most browsers and is announced by most screen readers.<br><br>Labels for required fields should also contain the word 'required' - do not rely on colour alone to indicate required fields. An asterisk is less accessible, due to variations in screen reader handling, but acceptable if one of the required attributes is also used.|
|Autocomplete / input purposes|[1.3.5](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)|AA|Use the autocomplete attribute when appropriate to assist users, for example `autocomplete="name"` - see the [list of Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG22/#input-purposes) for full scope|
|Group related fields [M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)[3.3.2](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)|A|Group related inputs with either a `<fieldset>` and `<legend>`, or with ARIA group roles and labels.<br><br>Radio buttons should always be grouped with a `<fieldset>`.<br><br>When using ARIA group roles, set the `role="group"` attribute on the containing element, and use the `aria-labelledby` attribute to set the label for the group.|
|Multi-select controls [A]|[2.1.1](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)|A|Avoid using multi-select controls where possible, unless supported by a javascript or other library that improves their keyboard navigation. (Multiple checkboxes can provide a direct alternative.)|
|Validation [M]|3.3|A-AAA|Use HTML5 input type attributes to support client-side validation and help users to not submit incomplete or invalid information.|
|Error notification [M]|[3.3.1](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html)/[3.3.3](https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion)|A/AAA|If the user submits a form that results in an error or errors, notify the user.<br><br>At a high-level, this should be done via the main heading of the page, generally an `<h1>` or `<h2>` elements, and optionally the `<title>` element. This ensures the failure of the form submission is communicated clearly to all users, and announced by screen readers in a prominent element.<br><br>Ideally, all errors should be enumerated and listed at the top of the form page in a container with `role="alert"`, and linked to the relevant form control. Inline feedback should be included within or near each form control that requires the user's attention. This should not be based on colour or graphical indicator alone, and the control labels and descriptions should provide clear indication of an error, and assistance to the user in how to correct it. `aria-describedby` is ideal for providing additional contextual feedback for users (see Labels above).<br><br>If providing error notification as a user inputs data, for example if an invalid character is used in a field, ensure the notification container has the `aria-live` attribute set with the value `polite` ([source](https://www.w3.org/WAI/tutorials/forms/notifications/#during-typing)). If notification is triggered on focus change, i.e. when focus leaves the form control, set `aria-live` to `assertive` ([source](https://www.w3.org/WAI/tutorials/forms/notifications/#on-focus-change)).|

## 8. Non-HTML documents
- If possible don't use non-HTML formats, or provide HTML alternatives.
- Observe best accessibility practices for the document format: [PDF](https://www.w3.org/WAI/WCAG22/Techniques/#pdf), [MS Word](https://webaim.org/techniques/word/), [MS Excel](https://support.microsoft.com/en-us/office/make-your-excel-documents-accessible-to-people-with-disabilities-6cc05fc5-1314-48b5-8eb3-683e49b3e593), [MS Powerpoint](https://support.microsoft.com/en-us/office/make-your-powerpoint-presentations-accessible-to-people-with-disabilities-6f7772b2-2f33-4bd2-8ca7-dae3b2b3ef25)

## 9. Tables
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Use for tabular data only [M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|Use the `<table>` element for tabular data only. Do not *ever* use it for layout, even if WCAG says you can. If you need a grid layout, use CSS Grid.|
|Captions [M]|[2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)|AA|All tables should have a `<caption>` element as their first child. For complex tables that need a lengthy description, consider adding a `<span>` within the `<caption>`, or use an element before or after the `<table>` and associate it using `aria-labelledby` on the `<table>` element. (The `<table>` `summary` attribute can also be used, but is not rendered by browsers and generally only available to screen readers.)|
|thead, tbody, tfoot [M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|Ensure structural elements within the table are used appropriately.|
|th scope defined [A]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|Set the `scope` attribute for all `<th>` elements, even if there are only uni-directional table headers, since some screen readers may not determine the correct scope.|
|headers attribute [M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|For complex tables with multiple or nested headers, use the `<th>` `headers` attribute to define the cell header, where the value matches the id of the `<th>` containing the label. `headers` accepts multiple values, screen readers will read the corresponding values in the order in which they are declared in the attribute.|

## 10. Semantic, valid HTML
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Valid HTML [A]|[4.1.1](https://www.w3.org/WAI/WCAG22/Understanding/parsing)|A|Validate the HTML of the page. See [HTML Validation](testing.html#html-validation) for details.|
|ARIA landmarks [A]|[4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)|A|Use ARIA landmarks to identify the regions of the page and help users navigate around it.<br><br>Do not define the `role` attribute for HTML5 elements that have implicit roles: see [List of implicit ARIA semantics](https://www.w3.org/TR/html-aria/#docconformance).|
|All content in landmark region [A]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|Ensure all content resides in a landmark region.|
|Consistent, contiguous headings [A,M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)/[2.4.6](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)|A/AA|Heading elements should be consistent across a site and site sections. Heading ranks (levels) should be contiguous when increasing the heading level, but can skip levels when decreasing (e.g. `<h4>` followed by `<h2>` is acceptable).<br><br>There is an exception for fixed page sections, such as sidebars, which do not have to maintain rank flow from other content areas ([source](https://www.w3.org/WAI/tutorials/page-structure/headings/#exception-for-fixed-page-sections)).|
|Linear content flow [M]|[1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence)|A|Content should be ordered in a meaningful sequence, when linearised. For example multi-column content should flow from the top to the bottom of each column, before moving to the top of the next column.|
|Use of most suitable elements [M]|[1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)|A|Check that the most suitable semantic elements are used for all content and controls. Common opportunities for improvement are:<ul><li>ordered, unordered, and definition lists;</li><li>`<a>` elements used as buttons, especially with javascript in UI controls;</li><li>abbreviations/initialisms not using `<abbr>`.</li></ul>|

## 11. Document titles
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Unique across site [A]|[2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)|A|Check that all page titles are unique across a site. Most easily done with a crawler and post-crawl analysis.|
|Page titles reflect content [M]|[2.4.2](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)|A|Check that page titles are meaningful and reflect the page content.|

## 12. Screen reader
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Communicate important state changes [M]|4.1.3|A| Communicate important state changes to users of AT by setting the `aria-live` attribute or `role="alert"` on the message container. Use the latter where there is no [change of context](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html#dfn-status-message).|
|ARIA widget attributes [M]|[4.1.2]|A|Define appropriate aria attributes for interface elements. For example `aria-expanded` for accordion controls. See the [list of valid attributes](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties#attrs_widgets) for reference.|

## 13. Content
| Test | Success criteria | Level | Method |
|--|:-:|:-:|--|
|Default human language [AA]|[3.1.2](https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts)|A|Check the HTML element has the lang attribute set.|
|Unusual words|[3.1.3](https://www.w3.org/WAI/WCAG22/Understanding/unusual-words)|AAA|Minimise jargon, provide explanations for specialist language.|
|Abbreviations+ [M]|[3.1.4](https://www.w3.org/WAI/WCAG22/Understanding/abbreviations)|AAA|Use appropriate HTML to define abbreviations, initialisms, and acronyms. Always expand abbreviations+ on first use.|
|Use plain language|[3.1.5](https://www.w3.org/WAI/WCAG22/Understanding/reading-level)|AAA|Content should be written as clearly and simply as possible.|

## 14. Progressive enhancement
- Whenever possible, build robust and resilient pages that function if CSS and/or javascript are not available or fully functional.
- Create a baseline experience using HTML and CSS that provides access to the information the page is communicating.
- Use feature detection to check browser supports.
- Inject javascript-dependent features using javascript.


