'use strict';


 function errorNotFound (error, request, response, next){
    const error = error.message ? error.message : error;
    const errNotFound ={
        status : 404,
        message : 'Not Found'
    }
    response.status(errNotFound.status);

}

module.exports = errorNotFound;