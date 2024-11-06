const router = require("express").Router()
const { SingUp, LogIn, Forgot, ResetPassword } = require("../Controller/User");
const { JwtVeryfy } = require("../Middleware/User")

router.post("/sign-up", SingUp)
router.post("/forgot-password", Forgot)
router.put("/reset-password/:id/:token", JwtVeryfy, ResetPassword)
router.post("/log-in", LogIn)

module.exports = router