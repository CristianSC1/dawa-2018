var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Inicio'
  });
});

router.get('/nosotros', function(req, res){
  res.render('nosotros', {
    title: 'nosotros'
  });
});

router.get('/catalogo', function(req, res){
  res.render('catalogo', {
    title: 'catalogo'
  });
});
router.get('/about', function(req, res){
  res.render('about', {
    title: 'About'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});


module.exports = router;