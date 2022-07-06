const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name: {
        type:String,
        required:[true, "name field is required"]
    },
    rank:{
        type:String,
    },
    availability:{
        type:Boolean,
        default:false
    }
});
const Ninja = mongoose.model('Ninja', NinjaSchema);

module.exports = Ninja;