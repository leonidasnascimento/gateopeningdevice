var baseClass = require('./db');
var opStatus = require('./../models/dbOperationStatusModel');
class deviceData extends baseClass.abstractDataBase{
    create(obj, callBack){
        super.create(obj, 'devices', function(opStatus){
            callBack(opStatus.message);
        })     
    }
}

module.exports.deviceData = deviceData;