var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var schema = new Schema({    
    producto: String,
    precio: Number
});

var Articulo = mongoose.model('Articulo', schema);//clase

module.exports = function(config) {
    return new Articulo(config);//retorna una instancia.
} 
