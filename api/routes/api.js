var express = require('express');
var router = express.Router();

// Application API definition:
/*router.get('/', function(req, res) {

  console.log( 27 , req );
  res.jsonp({html: 'string', url: req.url, path: req.path});
  
  //res.render('index', { title: 'API' });

});*/

/*app.get('/api/*',function(req, res){
   console.log('hello');
});*/

router.route('/api')
.all(function(req, res, next) {
  // runs for all HTTP verbs first
  // think of it as route specific middleware!
  console.log('here');
  next();
})
.get(function(req, res, next) {
  res.jsonp({hello:"world"});
})
.post(function(req, res, next) {
  // maybe add a new event...
})

module.exports = router;