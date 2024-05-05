const mongoose = require (`mongoose`);
const Schema = mongoose.Schema;

const KingdomSchema = new Schema({
    name : {type : String, require : true},
    description : {type : String, require : true},
    ubication : {type : String},
},
{collection: `kingdoms`});

const Kingdom = mongoose.model (`kingdoms`, KingdomSchema);

module.exports = Kingdom;
