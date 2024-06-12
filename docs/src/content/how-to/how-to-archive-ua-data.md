# How to archive Google Universal Analytics data

From the 1st of July 2024, Universal Analytics Data & Properties will begin to
be deleted by Google. Unless this data has been exported & backed up, your data
will probably be lost.

This how to will outline one way to export core historical data in an easy to
read format in Google Sheets.

This method is based [on the tool here](https://developers.google.com/analytics/solutions/google-analytics-spreadsheet-add-on) for taking data backups from Universal Analytics
We have created a time-saving template that you can use. 

It includes high level data for Jan 2021 to the end of 2023, such as:
* totals - users / sessions / page views by month
* traffic channels - sessions / bounce rate by year
* page views - pages and total views, by year, for all pages with 200+ views
* landing pages - entrances / bounce rate, by year, for all pages with 200+ entrances
* events - all events with  Category and Label, by year
* city - location info with users /  sessions / pageviews, by year 
* device type - users /  sessions / pageviews, by year 


## Step 1 - install the Google Analytics Add-On:
* Sign in to your Google Drive / Docs 
* Create a new Google Spreadsheet (or open an existing one).
* From the menu bar choose: Add-ons > Get Add-ons…
* Find the Google Analytics Add-on from the add-ons gallery and select it.
* From the add-on description page, click the "+" in the top right corner to add this add-on to your spreadsheet.
* A dialog should pop up requesting your permission for the add-on to access your Google Analytics data. Click "Accept".
* The add-on is now installed. A "Google Analytics" submenu should now appear in the Add-ons menu.


## Step 2 - download the template
Download this [Google Sheet](https://docs.google.com/spreadsheets/d/1amfcXH4w7A2fRUgwBR1fcywNnMwPw5ok1GUbn5F8Ab4/copy) and (optionally) make a copy. 


## Step 3 - make any changes to the Report Configuration (OPTIONAL) 
For example you may want to add more or different Goal Completions. 
The Template includes Goal #1 and #2 completions, which will be shown by traffic channel.
In your analytics account if you look under Conversions > Goals > Overview >All Goals you'll see the number of each Goal that was created for the property. 

Or you may want to go back further than January 2021. To do that you'll need to create new columns. Copy a column, change the Report Name and the Start Date and End Date. 

Or you may want to add more reports. This tool gives you the codes for each dimension and metric in UA - https://ga-dev-tools.google/dimensions-metrics-explorer/
For example to add User Gender to a report, it would be ga:userGender


## Step 4 - select the right Analytics view
In row 2 'View ID', add the ID for the analytics property you want to archive. 
You can find the ID in Google Analytics by going to Admin > View Settings. 
It will be a number such as 55438832


## Step 5 - run reports
In the spreadsheet menu bar, select Extensions > Google Analytics > Run Reports.
You should now have a tab for each column, filled with lovely data. 


## Step 6 - check
If something isn't quite right, change the configuration and Run Reports again. 


## Step 7 - edit and enhance  (OPTIONAL) 
Some data you may want to tidy up, for example Bounce Rate won't by default show as a percentage.
Or add Charts - select your data and from the menu bar select Insert > Chart. 


## Step 8 - do the same for any other sites  (OPTIONAL) 
Make a copy of your new sheet and change the View ID to run the same reports for another site. 






