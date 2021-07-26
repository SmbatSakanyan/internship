require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require('./routes/auth');
const cookieParser = require('cookie-parser');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoute);






app.listen(5000, console.log("app has ben started on port 5000"));