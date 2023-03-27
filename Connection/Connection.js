const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://pratikvyavahare:Mmit2002@collagewebsitedb.y4zg5eq.mongodb.net/test")
.then((result) => {
    console.log("Connection Successfully");
}).catch((err) => {
    console.log("Error in Connection DB:",err)
});