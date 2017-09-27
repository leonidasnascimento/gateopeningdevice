//Require
var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var opStatus = require('./../models/dbOperationStatusModel');

//Definitions
var connectionString = 'mongodb://gateopeningdevice:EfkWfnIFl9u5GKJqE9JfD0fMmbVw7T6h6sTmeGHQYcvk996b8bInJmzS4XJQfYf2SPhywxkgKJ1FIebKWeknWw==@gateopeningdevice.documents.azure.com:10255/?ssl=true';
var databaseErrorConnectionMessage = 'Database connection error';
var databaseObjectCreatedSuccessfully = 'Object created successfully!';
var databaseObjectDeletedSuccessfully = 'Object deleted successfully!';
var databaseObjectUpdatedSuccessfully = 'Object updated successfully!';
var databaseName = 'gateopeningdevice';

class abstractDataBase{
	create(obj, document, callBack){
		mongoClient.connect(connectionString, function (err, db) {
			assert.equal(err, null, databaseErrorConnectionMessage);
			
			db.db(databaseName).collection(document).insert(obj, function(obj){
				db.close();
				
				if(obj){
					callBack(new opStatus.dbOperarionStatusModel(false, obj.message, obj.code, obj.name, obj.stack));
				}else{
					callBack(new opStatus.dbOperarionStatusModel(true, databaseObjectCreatedSuccessfully, null, null, null));
				}
			});
		});   
	}
	
	update(filter, obj, collection, callBack){
		mongoClient.connect(connectionString, function (err, db) {
			assert.equal(err, null, databaseErrorConnectionMessage);
			
			db.db(databaseName).collection(collection).update(filter, obj, function(obj){
				db.close();
				
				if(obj != null){
					callBack(new opStatus.dbOperarionStatusModel(false, obj.message, obj.code, obj.name, obj.stack));
				}else{
					callBack(new opStatus.dbOperarionStatusModel(true, databaseObjectCreatedSuccessfully, null, null, null));
				}
			});
		});   
	}
	
	delete(obj, collection, callBack){
		mongoClient.connect(connectionString, function (err, db) {
			assert.equal(err, null, databaseErrorConnectionMessage);
			
			db.db(databaseName).collection(collection).findOneAndDelete(obj, function(obj){
				db.close();
				
				if(obj != null){
					callBack(new opStatus.dbOperarionStatusModel(false, obj.message, obj.code, obj.name, obj.stack));
				}else{
					callBack(new opStatus.dbOperarionStatusModel(true, databaseObjectCreatedSuccessfully, null, null, null));
				}
			});
		});   
	}
	
	find(obj, collection, callBack){
		mongoClient.connect(connectionString, function (err, db) {
			assert.equal(err, null, databaseErrorConnectionMessage);
			
			var resultQuery = db.db(databaseName).collection(collection).find(obj);
			db.close();					
			
			callBack(resultQuery);
		});   
	}
}

module.exports.abstractDataBase = abstractDataBase;