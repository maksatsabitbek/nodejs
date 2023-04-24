const express = require('express');

const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan');
// const dotenv = require('dotenv'); 

// dotenv.config()
const MONGO_URI = "mongodb+srv://maksatsabitbek:mkjn1234!@cluster0.rbhgomj.mongodb.net/?retryWrites=true&w=majority";

//db 
mongoose.connect(MONGO_URI)
.then( () => console.log('DB connected'))

mongoose.connection.on("error", err => {
    console.log('DB connection error: ' + err.message)
})

// bring in routes 
const postRoutes = require('./routes/post.js')
const myOwnMiddleware = (req, res, next) => {
    console.log("modleware applied!!!");
    next();
};

//middleware - 
app.use(morgan("dev"))
app.use(myOwnMiddleware);

app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {console.log('a node js api is listening on port: ${port}')});