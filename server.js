const fs = require('fs');
const path = require('path')
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// Telling the server to use the router set up wiuth apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());
// Instructs server to make 'public' files readily available to server.js 
app.use(express.static('public'));
const { animals } = require('./data/animals.json');

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`)
})