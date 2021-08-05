# How I Processed These

1. Made a copy from originals and copied to this folder: `./csvRetrievalFromXlsFiles`
2. Opened each `.xls` file in Numbers on Mac
  1. Removed all table formatting, including merged cells
  2. Made columns headers equal to `| Placement State |	Nationality	| FY 2011	| Cumulative Total |`, with `FY` year different for each year
  3. Removed extraneous blank columns and document/disclaimer informational rows
  4. Saved reformat
  5. Export file to `.csv`
3. Used `npm csvtojson` command via terminal with year the only difference between files:
```
csv2json ./csvRetrievalFromXlsFiles/FY\ 2011\ Arrivals\ by\ State\ and\ Nationality.csv -o ./csvToJsonConversionFiles/2011arrivals.json
```
8. Ran `node processor.js` for each year to create final year json files `2011.json` files
9. Pretty format each of those year files
