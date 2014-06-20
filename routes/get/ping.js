var express = require('express');
var router = express.Router();

// Application API definition:
var api = {
    
    // Just output 1:
    ping: function(req, res, next){ res.jsonp( 1 ); },
    
}

module.exports = api.ping;