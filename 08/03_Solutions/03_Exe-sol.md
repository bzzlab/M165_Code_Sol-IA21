### Exercise 8.03: Datenbank mit Authentifizierung absichern
1. Sichern Sie die training Datenbank mit dem Benutzer trainingAdmin und einem Passwort ab.
2. Testen Sie den Zugriff auf die training Datenbank.

#### Solution 8.03: Datenbank mit Authentifizierung absichern
1. In Datagrip: Add admin-user i.e. in database training
```
use training
db.createUser(
   {
     user: "trainingAdmin",
     pwd: "Hello1234",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```
2. On the console: Enable authentication in the configuration.
For Window:
```
# edit
nano '/c/Program Files/MongoDB/Server/6.0/bin/mongod.cfg'
# add
security:
    authorization: enabled
```
... and start mongodb with the change. For Windows either
with WINDOWS+R and services.msc or with sc-Command
```
sc query MongoDB
sc stop MongoDB
sc start MongoDB
```

3. Connect without credentials -> training database should not be visible
4. Connect with credentials -> training database should be visible
5. Make a test query on the training database
