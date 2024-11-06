const path = require("path")
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const UserRouter = require("./Router/User")

// dot env configration
dotenv.config()
//reset object
const app = express();
//middleware
app.use(express.json());
app.use(cors());

//routers
app.use("/", UserRouter)
//port

const PORT = 3000 || process.env.PORT

//listen

mongoose.connect(`${process.env.mongoDb}`)
    .then(
        (success) => {
            app.get("/", (req, res) => {
                app.use(express.static(path.resolve(__dirname, "frontend", "build")));
                res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
            });
            console.log("yess database connected")
            app.listen(PORT, () => {
                console.log(`this server running on at http://localhost:${PORT}`)
            })
        }
    ).catch(
        (error) => {
            console.log("databse not connected ")
            console.log(error)
        }
    )

