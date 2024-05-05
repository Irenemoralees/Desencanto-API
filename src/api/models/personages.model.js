const mongoose = require (`mongoose`);
const Schema = mongoose.Schema;

const personageSchema = new Schema({
    name : {type : String, require : true},
    description : {type : String, require : true},
    personality : {type : String},
    race : {type : String},
    kingdom: [{type:Schema.ObjectId, ref:`kingdoms`}]
},
{collection: `personages`});

const Personage = mongoose.model (`personages`, personageSchema);

module.exports = Personage;