//dependencies
const express     = require('express');
const path        = require('path');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const mongoose    = require('mongoose');
const config      = require('./config/database');
const snacklist  = require('./controller/snacklist');

//connect mongoose to database
mongoose.connect(config.database);

const port = process.env.PORT || 3000;

//Intialize app variable
const app = express();

//Middleware for cors - allows for the server to communicate with client
app.use(cors());

//Middleware for bodyparsing for being able to read information from a POST request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//public folder for static files
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
  res.send("womp");
})

//route all http requests to /snacklist to snacklist controllers
app.use('/snacklist', snacklist);



//listen to port 3000
app.listen(port, () => {
  console.log(`Starting the server at port ${port}`);
});
