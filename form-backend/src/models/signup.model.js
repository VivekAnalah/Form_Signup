
const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
    name : {type : String, require:true},
    email : {type : String, require: true,unique:true},
    mobile : {type : String, require: true},
    password : {type : String, require: true},
    uniqueID : {type : String, require: true, unique:true},

    remainingTime: {
        type: Number,
        default: 120000,
        required: true
      },
})

const Signup = mongoose.model("user-signup", SignupSchema);

module.exports = Signup;








