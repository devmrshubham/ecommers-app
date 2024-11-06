const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: "String",
        trim: true,
        required: true
    },
    gmail: {
        type: "String",
        unique: true,
        required: true
    },
    password: {
        type: "String",
        required: true

    }
}, { timestamps: true });

const Users = mongoose.model("Users", UserSchema)

module.exports = Users