/**
	MongoConnection
	Connect your database async 
**/
// Require mongo client
const { MongoClient } = require("mongodb");
// Empty object to export
let manager = { };
// Public function
let connect = (dbName) => {
	const uri = "mongodb://localhost/" + dbName;
	const client = new MongoClient(uri,  {useUnifiedTopology: true});
	// Main Promise
	let promise = new Promise(Q)
	// QPromise function
	function Q(resolve){
		const connection = client.connect();
		connection.then( () => {
			// Users colllection
			manager["users"] = client.db(dbName).collection("users");
			resolve(manager);
		})
	}
	return promise;
}
// exports
manager["connectWith"] = connect;
module.exports = manager;






