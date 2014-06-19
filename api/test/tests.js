var assert = require('assert'),
  app = require('../app'),
  request = require('supertest')(app)

describe('Recipe API', function() {
    
  describe('GET /api/wrong', function() {
    it('should return a 404 status code', function(done) {
      
      request
        .get('/api/wrong')
        .expect(404, done)
    });
  });
    
  describe('GET /api/ping', function() {
    it('should return json type, 200 codes and other data', function(done) {
      
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