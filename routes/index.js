const product_routes = require('./product.routes');
const ventas_routes = require('./ventas.routes');
const usuarios_routes = require('./usuarios.routes');
//Esto se hace con cada archivo de rutas

module.exports = Object.freeze({
    product_routes,
    ventas_routes,
    usuarios_routes
});