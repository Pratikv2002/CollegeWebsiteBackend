const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASEURL)
.then((result) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log("Error in Connection DB:",err)
});