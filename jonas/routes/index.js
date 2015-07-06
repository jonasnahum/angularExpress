var express = require('express');
var router = express.Router();
var articulosFactory = require('../models/articulo');
var dbname = 'mongodb://localhost/articulos';
var mongoose = require('mongoose'); 
mongoose.connect(dbname);

var db = mongoose.connection;
db.once('open', function (callback) {
    console.log("la conexion esta abierta en articulos..");
});

router.get('/', function(req, res, next) {
   var Articulo = mongoose.model('Articulo'); 
    
    Articulo.find(function (err, articulos) {
        if (err) 
            return next(err);
        res.locals.articulos = articulos;
        res.render("layout");
    }); 
});

router.get('/articulos', function(req, res, next) { 
    var Articulo = mongoose.model('Articulo'); 
    
    Articulo.find(function (err, articulos) {
        if (err) 
            return next(err);
        res.send(articulos);
    }); 
});

router.post('/nuevo', function(req, res, next) {
    var articulo = articulosFactory({
        producto: req.body.producto, 
        precio: parseInt(req.body.precio, 10) 
    });    
    
    articulo.save(function (err, data) {
        if (err) return next(err);
        res.json({success: true});
    });            
});
router.get('/editar/:id', function(req, res, next) {
    var Articulo = mongoose.model('Articulo');
    
    Articulo.findById(req.params.id, function (err, articulo) {
        if (err) return next(err);
        res.send(articulo);
    });
});
router.post('/editar', function(req, res, next) {
    var Articulo = mongoose.model('Articulo');
    Articulo.findById(req.body.id, function (err, articulo) {
        if (err) return next(err);

        articulo.producto = req.body.producto;
        articulo.precio = parseInt(req.body.precio, 10);  
        
        articulo.save(function (err, data) {
            if (err) return next(err);
            res.json({success: true});
        }); 
    });   
});

router.get('/borrar/:id', function(req, res, next) {
    var Articulo = mongoose.model('Articulo');
    
    Articulo.remove({ _id: req.params.id }, function (err) {
        if (err) return next(err);
        
        res.redirect('/articulos');
    });
});

router.get('/ver/:id', function(req, res, next) {
    var Articulo = mongoose.model('Articulo');
    
    Articulo.findById(req.params.id, function (err, articulo) {
        if (err) return next(err);
        res.render('view', { articulo: articulo });
    });
});




module.exports = router;

