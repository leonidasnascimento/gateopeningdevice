class dbOperarionStatusModel{
    constructor (status, message, errorCode,errorName, errorStack){
        this.status = status;
        this.message = message;
        this.errorCode = errorCode;
        this.errorName = errorName;
        this.errorStack = errorStack;
    }
}

module.exports.dbOperarionStatusModel = dbOperarionStatusModel;