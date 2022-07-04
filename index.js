const express = require('express');
const app = express();

app.use('/api',require('./routes/api'));

app.listen(4000,function(){
    console.log("we are ready bro");
})