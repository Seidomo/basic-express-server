'use strict';

function errorNotFound (error, request, response, next){
    const error = error.message ? error.message : error;
    const errorServer ={
        status : 500,
        message : 'Server Error'
    }
    response.status(errorServer.status);

}

module.exports = errorServer;