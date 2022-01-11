/**	
	Development server for socketIO-WebSockets
	Version 1.0.0
**/

// Requirements
let app = require('express')();
let http = require('http').Server(app);
// Port to listen
const port 	= 8888;
// Databse name
const example_db = "exampledb";
// require promise connection
let db;
let mongoConn = require('./mongo-conn').connectWith(example_db);
// Db connection open async
mongoConn.then( (manager) => { db = manager;});
// Routes
app.get("/users", function(request, response){
	db.users.find().toArray().then(users => {
		response.send(users);	
	});
});

// Start Listen
http.listen(port, () => {
	console.log("Dev-Server listening at port: ", port);
});


