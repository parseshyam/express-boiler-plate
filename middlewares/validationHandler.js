const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
    console.log("Inside validation handler")
    try {
        validationResult(req).throw();
        next();
    } catch (e) {
        console.log(e)
        res.status(200).json({ ...e });
    }
}