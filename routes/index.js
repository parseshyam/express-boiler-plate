const router = require("express").Router();

router.use('/v1/users', require('./users'));
// other router goes here...

router.use((req, res, next) => {
    console.log("route not found catched here")
    const error = new Error("The URL you trying to reach is invalid!");
    error.status = 404;
    next(error);
});

router.use((error, req, res, next) => {
    console.log("Thrown error catched here")
    res.status(error.status || 500).json({
        status: false,
        message: error,
        data: error.stack
    });
});

module.exports = router;