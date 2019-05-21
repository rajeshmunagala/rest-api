const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/rest-db",  { useNewUrlParser: true });
mongoose.connection.on('connected', ()=>{
    console.log('connected mongodb @ 27107');
});

const postsRoute = require("./routes/posts");
app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
    res.send("We are on Home");
});

//How to start server
app.listen(3000);