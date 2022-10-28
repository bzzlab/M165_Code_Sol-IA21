### Exercise 8.01: Restore und Backup
1. Restoren Sie die Training-Datenbank aus diesem Repo unter dem DB-Namen training (https://github.com/huynhsamha/quick-mongo-atlas-datasets.git
2. Backupen Sie die Training-Datenbank unter einem anderen Namen in ein Backup-Verzeichnis, welches sich in 
Ihrem Home-Directory befindet.

#### Solution 8.01: Restore und Backup
1.
```
git clone https://github.com/huynhsamha/quick-mongo-atlas-datasets.git
mv quick-mongo-atlas-datasets sample-db
cd sample-db
mongorestore --host localhost --port 27017 --db training --dir ./dump/sample_training
```
2.
```
cd ~
mkdir backup
mongodump --host localhost --port 27017  --db training --out ./backup
```
