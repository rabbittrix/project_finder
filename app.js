const express = require('express');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

// bodyParser
app.use(bodyParser.urlencoded({extended: false}));

// db connection
db
  .authenticate()
  .then(() => {
  console.log("You have successfully connected to the database.");
}).catch(err =>{
  console.log("Error connecting to the database.", err);
});

// routes
app.get('/', (req, res) => {
  res.send("server is working... :)");
});

//projects routes
app.use('/projects', require('./routes/projects'));
