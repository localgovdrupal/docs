# Appearance

Microsite admins have the permission to change the appearance through the user interface (UI). With this and the flexible layout options it is possible to create sites with very differnent look and feel. 

*Note:* We highly recommend consulting a visual / UX designer. We hope to create useful documentation for designers, and would value input from designers about what would be helpful in this area.

## Accessibility checking (`localgov_sa11y`)

There is a built-in accessibility checker for all logged in users. This will highlight various accessibility issues and warnings for you. 

Under the settings, you can select advanced checks, including Colour contrast. We highly recommend that you turn this on while setting up the site theme. 

## Site design: General settings

Theoretically you can just set up the styles in this panel for a good looking site, however in practice you may like to override more components for more granular control. 

### Colours

**Colours**: the fields for setting colours allow HEX, RGB, RGBA, HSL, color names in the text input. The colour picker field is there to help but only allows / reflects HEX values. If you enter the colour value in HEX you will see the colour swatch, and the outline change in the field. 

**Accent 1 / Accent 1 contrast** : these colours are used together and should meet colour contrast standards. By default accent 1 affects the following

- Header bacground / text colour
- Footer background / text colour
- Active element* highlights
- Background colour accent 1 (on a page_section - todo add link )

*todo add a list of active and inactive elements. 

**Accent 2 / Accent 2 contrast**: these colours are used together and should meet colour contrast standards. By default Accent 2 affects the following:

- Preheader background / text colour
- Inactive element highlights
- Backgrounf colour accent 2 (on a page_section - todo add link )


**Text colour**: the main body text and heading colour


### Typography

#### Fonts

**Fonts**: we've offered a limited set of fonts, which are stored locally so that we don't run in to problems with GDPR (@todo add link). If you'd like to use another font please read the section on [adding a custom theme](#custom-theme). 

**Base font size**: This is the size of the main text. You can define this in rem, em, px. 
We calculate the size of other text elements (headings etc) from this base font size. These can be overridden in the Heading section.

Note: It is best practice to define the font in REM, read about why below.

**Resources**:

- [UX Design: Rems and Px](https://uxdesign.cc/why-designers-should-move-from-px-to-rem-and-how-to-do-that-in-figma-c0ea23e07a15_)
- [px to rem converter](https://nekocalc.com/px-to-rem-converter)


**Base line height**: line height is the height of a line of text, and affects how much space appears between each line. This is set as a number - eg 1.2

### Spacing

The Base spacing field allows you to create more or less space between elements. It affects the padding and margins between items.

## Heading Overrides

The Heading overrides tab allows you to override the default styles (inherited from the Global styles tab) for each heading ( h1 to h6 ).

**Resources**
- [Typography Handbook](https://typographyhandbook.com/)

## Preheader 

The preheader region appears before the header. It shows the sitewide search if enabled.

**Colours**: background, text, link and link hover colours can be set here. By default these will inherit Accent 2 / Accent 2 contrast.

**Pre-header width**: There are 3 options for the display of the preheader. The difference is clearest if there is a background colour set.
- Full width content and background: both the content and background are full width of the screen
- Constrained content and full width background: the content is constrained to the width of the page, while the background is full width
- Constrained content and background: both the background and content are constrained and centered

![Illustration showing the three options described above.](/microsites/images/preheaderWidth.png)


## Header content

**Colours**: background, text, link and hover colours can be set here. By default these inherit Accent 1 / Accent 1 contrast. 

**Header width**

- *Full width content and background*: both the content and background are full width of the screen
- *Constrained content and full width background*: the content is constrained to the width of the page, while the background is full width
- *Constrained content and background*: both the background and content are constrained and centered

### Logo, site name and site slogan

You can upload a custom logo. If uploaded here it will display in the header. 
You can turn on / off the display of the site name and site slogan. These are set in the Site settings tab.

**Site name styles**
- Assuming the site name is checked, you can alter the font size and font weight. 

**Alignment**: 

The header items cant be aligned vertically to the top, center or bottom of the header region.

### Menu / Off canvas region styles

You can set styles for the menu, submenu (at wider screens) and mobile menu. 

Off canvas is the region that comes in from the side when the mobile menu is clicked. 

## Footer content

**Colours**: background, text, link and hover colours can be set here. By default these inherit Accent 1 / Accent 1 contrast. 

**Footer width**
- Full width content and background: both the content and background are full width of the screen
- Constrained content and full width background: the content is constrained to the width of the page, while the background is full width
- Constrained content and background: both the background and content are constrained and centered

### Footer banner

The footer banner is an image intended for branding purposes. It displays above the main footer content, and respects the width set on the footer content in the Footer Design section.

@todo - add screenshot.

### Text blocks
You can add up to four text blocks in the footer. Each allows all the usual styles and content available in the WYSIWYG. There is a field which allows you to override the alignment, which is obvious if you have fewer that four blocks.

### Footer logos
You may upload an unlimited number of logos to display in the footer. These will resize automatically.

### Copyright notice and Powered by LocalGov Drupal notice. 
There are optional fields to display copyright notices, and a Powered by LocalGov Drupal notice. 

### Footer menu

There is a footer menu - called "Housekeeping menu" available. Manage this under the Microsite administration > Menus tab.

## Advanced

You can set the **Teaser image style** for all teasers on the site. 

The options are:
- Square
- Landscape 3x2
- Landscape 7x3 

@todo - add a link to the cropping section.

You can also **Hide the title on the homepage**.

## Custom theme

If the above options don't give you enough control over the appearance of the site you can create a child theme of `localgov_microsites_base`. See the theme README for instructions for how to do this quickly and efficently. 

@todo add Example: custom font
