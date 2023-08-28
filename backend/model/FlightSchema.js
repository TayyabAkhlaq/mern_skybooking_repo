const mongoose =  require('mongoose');

const {Schema} = mongoose;

const FlightSchema = new Schema({
    from: {
        type:String,
        required:true
    },
    to: {
        type:String,
        required:true
    },
   class: {
        type:String,
        required:true
    },
    departure: {
        type:String,
        required:true
    },
    return: {
        type:String,
        required:true
    },
    adults: {
        type:Number,
        required:true
    },
    childrens: {
        type:Number,
        required:true
    }

})

module.exports = mongoose.model("flightinfo",FlightSchema);