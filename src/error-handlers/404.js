'use strict';


function errorNotFound ( request, response, next){
    
  response.status(404).send(' route not found');

}

module.exports = errorNotFound;