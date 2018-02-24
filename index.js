const express = require('express');
const mongoose = require('mongoose');

const app = express();

const routes = require('./routes/studentRoutes');
const config = require('./config');
const cors = require('./util/index').cors;

// Use cors
if(config.enableCors) app.use(cors);

app.use('/', routes);

mongoose.connect(config.db_url, (err) => {
    if(err) console.log(err);
});

app.listen(config.port, () => {
    console.log('Server running at port ' + config.port);
});