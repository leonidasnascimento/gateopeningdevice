class deviceModel{
    toJson(){
        return JSON.stringify(this.deviceModel);
    }

    constructor(name, guid, imei, createdDate, model){
        this.name = name;
        this.guid = guid;
        this.imei = imei;
        this.createdDate = createdDate;
        this.model = model;
    }
}

module.exports.deviceModel = deviceModel;