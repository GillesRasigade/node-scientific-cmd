var express = require('express');
var router = express.Router();

// Application API definition:
var api = {
    
    // Initialization:
    _init: function() {},
    
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
    
    // Just output 1:
    ping: function(req, res, next){ res.jsonp( 1 ); },
    
    // Test all methods:
    mocha: function(req, res, next){
        
        var output = this._output(req);
        
        (function(){
            
            var spawn = require('child_process').spawn;
            
            // Get the file to test:
            var file = req.query.file;
            
            // Get the Mocha stdout:
            var stdout = '';
 
            // Execute the child spawn:
            mocha = spawn('mocha', [ '-R', 'json' , './test/' + ( file ? file : '' ) ]);
            
            // Read and update the stdout buffer data:
            mocha.stdout.on('data', function(data) {
                stdout += data;
            });
             
            // When tests are finished, output the results:
            mocha.on('close', function() {
                
                // Remove possible extra output:
                stdout = stdout.replace(/^[^\{]*\{/,'{');
                
                // Output the mocha tests:
                res.jsonp( JSON.parse(stdout) );
                
            });
            
        })();
        
    }
}

// Initialize:
api._init();

module.exports = api;