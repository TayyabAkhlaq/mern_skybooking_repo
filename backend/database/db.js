const mongoose = require('mongoose');

const connectionString = "mongodb+srv://tayyabakhlaq680:travelbooking@cluster0.uslyjbn.mongodb.net/";

const dbFunction = async () =>
{
    try {
       await mongoose.connect(connectionString);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error Occured" , error);
    }
}
module.exports = dbFunction;

