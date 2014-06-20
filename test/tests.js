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
  
  
});