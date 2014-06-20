var assert = require('assert'),
  app = require('../../app'),
  request = require('supertest')(app)

describe('Recipe API - ping', function() {
    
  describe('GET /api/ping', function() {
    it('should return json type, 200 status code and text equal to 1', function(done) {
      
      request
        .get('/api/ping?verbose=1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            
            assert.equal( 1 , res.text );
            
            /*
            // Get the response text:
            var result = res.text;
            
            // Parse it:
            var result = JSON.parse(res.text);
            
            // Check the JSON response:
            assert.equal(result.query.action, 'ping');
            assert.equal(result.query.url, '/api/ping?verbose=1');
            */
            done();
            
        })
    });
  });
  
  
});