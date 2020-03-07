
const router = require("express").Router();
const { validationHandler } = require('../middlewares/index')
const { validateUser } = require('../validations');
/**
 * @validationHandler
 * if you dont want to use extra middleware "validationHandler"
 * then use validationResult(req).throw(); in controller to directly throw the error in catch block
 * but better you the validation handler to keep good abstraction.
**/
router
    .post(
        "/login",
        //Auth,
        validateUser.login(),
        validationHandler,
        (req, res, next) => {
            res.status(200).json({
                message: "Yay reached to the destination",
                body: req.body
            });
        })
    .get("/login", (req, res) => {
        res.status(200).json({
            message: "This is same but get route"
        })
    });

router.post("/register", () => { });

module.exports = router;
