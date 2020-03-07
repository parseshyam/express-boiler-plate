const logger = require('morgan');
const express = require('express');

module.exports = function applyMiddleware(app) {
    app.use(
        logger("dev"),
        express.json(),
        express.urlencoded({ extended: false }),
    );
    return app;
}

