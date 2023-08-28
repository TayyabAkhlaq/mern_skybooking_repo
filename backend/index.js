const express = require('express');
const dbFunction = require('./database/db.js');
const createuser = require('./routes/createuser');
const displayusers = require('./routes/displayusers');
const deleteuser = require('./routes/deleteuser');
const updateuser = require('./routes/updateuser');
const loginuser = require('./routes/loginuser');
const createflight = require('./routes/createflight.js');
const searchflight = require('./routes/searchflight.js')

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use((req,res,next)=>
{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
app.use((express.json()));
// Use the createuser router for the specified route
app.use('/api', createuser);
app.use('/api', displayusers);
app.use('/api', deleteuser);
app.use('/api', updateuser);
app.use('/api', loginuser);
app.use('/api', createflight);
app.use('/api', searchflight);

// Call the database function
dbFunction();

app.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});
