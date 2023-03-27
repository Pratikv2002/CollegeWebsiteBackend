const express = require('express');

var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
const dotenv = require('dotenv');
dotenv.config()

var cors = require('cors')
const PORT = process.env.PORT ;
const router = require("./Router/Router")
const corsOptions = {
        //To allow requests from client
        origin: [
          "http://localhost:3001",
          "http://127.0.0.1",
          "http://104.142.122.231",
        ],
        credentials: true,
        exposedHeaders: ["set-cookie"],
      };

// app.use("http://localhost:3001", cors(corsOptions));
app.use(cors());
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
        });
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(router);
require("./Connection/Connection")


app.listen(PORT,()=>{
        console.log(`Listen at Port ${PORT}` )
})
