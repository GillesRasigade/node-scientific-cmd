var express = require('express');

// Application API definition:
var api = {
    
    // Initialization:
    _init: function() {
        
        
    },
    
    // Get the output object:
    _output: function( req ) {
        
        var output = {};
        
        if ( req.query.verbose ) {
            output.query = {
                action: req.params.action,
                url: req.url,
                params:req.params,
                query:req.query
            }
        }
        
        return output;
    },
}

// Initialize:
api._init();

// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/get/').forEach(function(file) {
  if (file.match(/.+\.js/g) !== null && file !== 'index.js') {
    var name = file.replace('.js', '');
    api[name] = require('./get/' + file);
  }
});

module.exports = api;