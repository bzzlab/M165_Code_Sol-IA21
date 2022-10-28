### Exercise 8.02: Export
Exportieren Sie die 100 Records aus der Collection posts, damit Sie diese in Excel öffnen können.
Dabei müssen Sie nur die Felder Author, Text, Datum und Titel exportieren. Die exportierten
Daten sollen in eine geeignet benannten Datei gespeichert und nach dem Datum aufsteigend sortiert sein. 


#### Solution 8.02: Export
```
mongoexport --host localhost --port 27017 --db=training --collection=posts --type=CSV \
--fields=author,body,date,title  --limit=100 --sort="{date:1}" \
--out=training_posts.csv
```
