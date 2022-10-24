# Create fancy layouts

Most page types have a Layouts and rich content field, which allows for multi-column layouts and many content components. 

Within this field you may add one or more page sections. This page section can have 1, 2 or 3 columns. This page section can have a background colour, width and padding set to create stand out sections. 

A page section can then have one or more paragraphs or content sections added to it. 

## Duplicate

You can duplicate page sections, or individial paragraphs to save time. 

## Drag and drop interface

Page sections or content sections can be moved around using a pointing device (eg mouse) or the arrow keys on the keyboard. 

## Page sections

All content must be placed within a page section. When you create a new page there will be a + button to add the first section. After you have added one page section you can add a new section before or after an exisiting page section by hovering (or focusing) near the top or bottom of the section and clicking the "Add new section" button. 

To see the outlines of the sections in the interface hover over the area, or keyboard focus to any item within the area. 

### Create a new page section

When you create a new page section you may choose a one, two or three column layout. The columns are of equal width. 

#### Page section width

You can decide whether the page section will be

- **Full width of screen**: the content and background colour will extend to the edges of the screen. The content will have a margin if there is a background colour set.
- **Full with with content contained**: the background colour will be full width while the content will be the same width as the main content.
- **Same as content area:** the content and background colour will be the same width as the main content. 
- **Slightly wider than content area.** The background colour will be full width but the content will break out slightly from the main content area. 

#### Page section background colour

You may pick one of three options for the background colour. 

- **Accent**: This will set the background colour to the colour set as Primary colour through the UI or `--color-accent` in the theme.
- **Accent alt**: set the backgrounf colour to the value set as Secondary colour through the UI or `--color-accent-2` in the theme.
- **Lightgrey**: set the background colour to lightgrey. 

The content sections added to this section will styled so that the content remains visable.

You may increase the top and bottom padding for each section as apppropriate.

## Content sections

The content sections are borrowed heavily from `localgov_subsites` and `localgov_paragraphs`. 

- Text
- Image with caption
- Accordion
- IA block (navigation block)
- Link
- Quote
- Table
- Video
- Documents
- Call out box
- Featured teasers
- Media with text 
- Embedded content lists

### Embedded content lists
A new feature for LocalGov Microsites. 

Embed a list of recent blogs, upcoming events or recent news on the site. 

How to:
1. Add a new component
2. Choose "Embedded content list"
3. Optionally add a Heading with a Heading level (recommended Heading level 2)
4. Pick a block view: Blogs, News, Events
5. Pick a display - this is the varation of the list. eg Most recent, or featured.
6. Within Options you can set how many will display in the list - default 5.
7. Save

## Equal heights

Some items (see the folowing list) will grow to the same height as other items of the same height in the same page section.

- IA block
- Call out block
- Featured teaser

@todo - add an example image
