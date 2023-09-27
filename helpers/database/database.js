const mongoose = require("mongoose");

const url = "mongodb+srv://todolist:ep9OQKApBjsKZjKd@todolistproject.szdoigv.mongodb.net/?retryWrites=true&w=majority";

const connectToDB = async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Database connected!")).catch(err => console.log(err));
};

module.exports = {
    connectToDB,
};