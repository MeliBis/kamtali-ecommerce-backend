const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect('mongodb+srv://DATA:DATA@cluster0.ye38bea.mongodb.net/test')
}
module.exports ={
    dbConnection,
}