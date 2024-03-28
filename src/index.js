const express = require('express');
const bodyParser = require('body-parser');
const { PORT, EMAIL } = require('./config/server.config')
const homePingConroller = require('./controllers/home.controller')
const apirouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/api' ,apirouter);  //router Middleware
 

app.listen(PORT, () =>{
    console.log(`Server Started at Port : ${PORT}`);
}) 