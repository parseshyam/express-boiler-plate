const { body, param, query } = require('express-validator');

const userValidations = {};

userValidations.login = () => {
    return [
        body('userName')// add -> .optional() to make optional
            .exists().withMessage('user name is required!')
            .bail()
            .isString().withMessage('User name should be a string value')
            .bail()
            .trim()
        ,
        body('email')
            .exists().withMessage('Email is required !')
            .bail()
            .isEmail().withMessage('Invalid email provided !')
            .bail()
            .trim()
    ]
}

userValidations.other = () => { }


module.exports = userValidations




