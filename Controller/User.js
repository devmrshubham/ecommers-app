const User = require("../model/User");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SingUp = async (req, res) => {
    try {
        const { name, gmail, password } = req.body
        if (!name && !gmail && !password) {
            res.send(
                {
                    msg: "please fill the SingUp form",
                    status: 0
                }
            )
        } else if (!name) {
            res.send(
                {
                    msg: "please fill name input",
                    status: 0
                }
            )
        } else if (!gmail) {
            res.send(
                {
                    msg: "please fill Email input",
                    status: 0

                }
            )
        } else if (!password) {
            res.send(
                {
                    msg: "please fill Password input",
                    status: 0
                }
            )
        } else {

            const exist = await User.findOne({ gmail });
            if (exist) {
                res.send(
                    {
                        msg: "User Already exist Please Login",
                        status: 0
                    }
                )
            } else {

                const genratePassword = await bycrpt.hash(password, 10)

                const AddUser = new User(
                    {
                        name: name,
                        gmail: gmail,
                        password: genratePassword
                    }
                )

                AddUser.save()
                    .then(
                        (success) => {
                            res.send(
                                {
                                    msg: "User Register Successfully..",
                                    user: AddUser,
                                    status: 1
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            console.log(`SingUp fuction error :${error}`)
                        }
                    )
            }
        }
    } catch (error) {
        console.log(error)

    }
}

const LogIn = async (req, res) => {
    try {
        const { gmail, password } = req.body
        if (!gmail && !password) {
            res.send(
                {
                    msg: "please fill the login form",
                    status: 0
                }
            )
        } else if (!gmail) {
            res.send(
                {
                    msg: "please fill Email input",
                    status: 0

                }
            )
        } else if (!password) {
            res.send(
                {
                    msg: "please fill Password input",
                    status: 0
                }
            )
        } else {

            const exist = await User.findOne({ gmail });
            if (!exist) {
                res.send(
                    {
                        msg: "User not Exist Please Register",
                        status: 0
                    }
                )
            } else {

                const passwordCompaire = await bycrpt.compare(password, exist.password)
                if (!passwordCompaire) {
                    res.send(
                        {
                            msg: "Please fill Correct Password",
                            status: 0
                        }
                    )
                } else {
                    const Token = await jwt.sign({ id: exist._id }, `${process.env.Secret_Code}`, { expiresIn: "1d" })

                    res.send(
                        {
                            user: exist,
                            token: Token,
                            msg: "User Login Successfully...",
                            status: 1
                        }
                    )
                }



            }
        }
    } catch (error) {
        console.log(error)

    }
}


const Forgot = async (req, res) => {
    try {
        const { gmail } = req.body
        if (!gmail) {
            res.send(
                {
                    msg: "please fill Email input",
                    status: 0

                }
            )
        } else {

            const exist = await User.findOne({ gmail });
            if (!exist) {
                res.send(
                    {
                        msg: "User not Exist...",
                        status: 0
                    }
                )
            } else {


                const Token = await jwt.sign({ id: exist._id }, `${process.env.Secret_Code}`, { expiresIn: "1d" })

                res.send(
                    {
                        user: exist,
                        token: Token,
                        msg: "User Email Matched..",
                        status: 1
                    }
                )




            }
        }
    } catch (error) {
        console.log(error)

    }
}

const ResetPassword = async (req, res) => {
    try {
        const { id } = req.params
        const { password } = req.body
        if (!password) {
            res.send(
                {
                    msg: "please fill Password input",
                    status: 0

                }
            )
        } else {

            const exist = await User.findById(id);
            if (!exist) {
                res.send(
                    {
                        msg: "User not Exist...",
                        status: 0
                    }
                )
            } else {

                const GenratePassword = await bycrpt.hash(password, 10)

                User.findByIdAndUpdate({ _id: id }, { password: GenratePassword })
                    .then(
                        (success) => {
                            res.send(
                                {
                                    user: success,
                                    status: 1,
                                    msg: "Your Password  Successfully Update.... "
                                }
                            )
                        }
                    ).catch(
                        (error) => {
                            console.log(error)
                        }
                    )
            }
        }
    } catch (error) {
        console.log(error)

    }
}

module.exports = { SingUp, LogIn, Forgot, ResetPassword }