const mongoose = require('mongoose')
const dbURL=process.env.DB_URL
const dbName=process.env.DB_NAME


//////////////////////
const init =  () => {
    mongoose.connect(dbURL+dbName);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("database connected successfully");
    });
}


module.exports={
    init
}