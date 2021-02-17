'use strict';

const express = require('express');
const app = express();
const serverError = require('./error-handlers/500.js');
const errNotFound = require('./error-handlers/404.js');
const logger = rquire('./middleware/logger.js');



app.get('/person', validator, getPerson);

app.use(serverError);
function getPerson()



module.exports = {
    app: app,
    start : function (port){
        app.listen(port, ()=>{
            console.log('app is listening on port ::' + port);
        })
    }

}



