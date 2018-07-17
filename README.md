# Helpful scripts

## Developlment .env settings

.env file
```
SERVER_PORT=3000
MONGO_URL=mongodb://localhost
MONGO_PORT=27017
DOMAIN=localhost
```

## Running the dev server
Running the dev server will automatically update the browser when you make changes in the source files

To run guestApp on the dev server, run ```npm run guest```

To run employeeApp on the dev server, run ```npm run employee```

To run managerApp on the dev server, run ```npm run manager```
<br/>
<br/>

## Building the production files
Run ```npm run build``` to create a new set of folders and files in frontend/dist. NOTE: This will replace any folders and files currently in frontend/dist

After webpack finishes building, you can visit [http://127.0.0.1:8888](http://127.0.0.1:8888) to view the packages installed in each bundle file
<br/>
<br/>

## Running server.js with nodemon
NOTE: First, run ```npm run build``` to ensure that there are files to serve in frontend/dist

Run ```npm run start``` to start the server with nodemon, then visit [http://localhost:3000/](http://localhost:3000/) to witness the server serve you the files you want! :D
<br/>
<br/>

## Testing
Run ```npm run test``` to start jest in --watch mode (continuous <strong>frontend</strong> testing)

Run ```npm run testOnce``` to run jest once (<strong>frontend</strong> testing)

Run ```npm run testServer``` to start jest in --watch mode (continuous <strong>backend</strong> testing)

Run ```npm run testServerOnce``` to run jest once (<strong>backend</strong> testing)

## Seeding data
Run ```npm run seedEmployees``` to seed the database with data from backend/seed/employeeSeeder.js

Run ```npm run seedManagers``` to seed the database with data from backend/seed/managerSeeder.js

Run ```npm run seedShifts``` to seed the database with data from backend/seed/shiftSeeder.js

Run ```npm run seedBusinesses``` to seed the database with data from backend/seed/businessSeeder.js