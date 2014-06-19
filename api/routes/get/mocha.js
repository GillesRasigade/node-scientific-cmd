var express = require('express');
var router = express.Router();

// Application API definition:
var api = {
    
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

module.exports = api.mocha;