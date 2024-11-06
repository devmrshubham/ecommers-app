
const jwt = require("jsonwebtoken");

const JwtVeryfy = async (req, res, next) => {
    try {
        const { token } = req.params;
        if (!token) {
            res.send(
                {
                    msg: "User not Authorized",
                    status: 0
                }
            )
        } else {
            jwt.verify(token, `${process.env.Secret_Code}`, (error, decoded) => {
                if (error) {

                    console.log(`error with token ${error}`)
                } else {
                    next()
                }
            })
        }
    } catch (error) {
        console.log(`error with token ${error}`)
    }
}

module.exports = { JwtVeryfy }