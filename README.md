# Helpful scripts

## Running the dev server
Running the dev server will automatically update the browser when you make changes in the source files

To run guestApp on the dev server, run ```npm run guest```

To run employeeApp on the dev server, run ```npm run employee```

To run employerApp on the dev server, run ```npm run employer```
<br/>
<br/>

## Building the production files
Run ```npm run build``` to create a new set of folders and files in frontend/dist. NOTE: This will replace any folders and files currently in frontend/dist

After webpack finishes building, you can visit [http://127.0.0.1:8888](http://127.0.0.1:8888) to view the packages installed in each bundle file
<br/>
<br/>

## Running server.js with nodemon
NOTE: First, run ```npm run build``` to ensure that there are files to serve in frontend/dist

Run ```npm run server``` to start the server with nodemon, then visit [http://localhost:3000/](http://localhost:3000/) to witness the server serve you the files you want! :D