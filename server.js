const express = require('express')
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');
require('dotenv').config();
app.use(bodyParser.json());
app.use(express.json());
const cors = require('cors');
const path = require('path');
// Set EJS as the template engine
app.set('view engine', 'ejs');
// import {user} from './../frontend/src/main'

app.use(cors());
// const userRoutes = require('./routes/userRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const PORT = process.env.PORT || 5173;

// Import the router files

const userRoutes = require('./routes/userRoutes');
const { getUsersDetail } = require('./public/detchDetail');
app.use(express.static(path.join(__dirname, '../frontend/build')));
const User = require('./models/user');


// Use the routers




app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.use('/user', userRoutes);
app.use('/student',userRoutes);

app.listen(PORT, ()=>{
    console.log('listening on port 5173');
})





