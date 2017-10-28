var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

module.exports = () => {

    var app = express ();

    //middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    consign()
        .include('controllers')
        .then('persistencia')
        .into(app);

    return app;
}