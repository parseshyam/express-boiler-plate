"use strict"
let app = require('express')();
const { validationResult, body } = require('express-validator');

app = require('./middlewares/requiredMiddlewares')(app); // change this route to point the index route

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
    ]
}

app.use('/v1', require('./routes'));


app.post('/test', userValidations.login(), async (req, res, next) => {
    if (validationErrorHandler(req, res))
        return;
    const { ...data } = req.body;
    return res.status(200).json({ ...data })

})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        status: false,
        message: error,
        data: error.stack
    });
});



const validationErrorHandler = (req, res, statusCode) => {
    let error = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        error = true;
        res.status(statusCode || 200).json({ errors: errors.array() });
    }
    return error;
}


app.listen(3000, () => console.log('Server is up and running.'));