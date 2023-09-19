const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const apiRoutes = require('./routes.js');

const app = express();

app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://root:root@cluster0.2wysf.mongodb.net/?retryWrites=true&w=majority'    ,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    }
  )
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log(e);
  });



  app.use('/api', apiRoutes);
  
  
  app.listen(3000, () => {
    console.log("listening on port 4000");
  });