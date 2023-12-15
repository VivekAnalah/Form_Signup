const express = require("express");
const app = express.Router();

const Question = require("../models/question.model");
const Signup = require("../models/signup.model");

app.post("/", async (req,res) => {

    const {user_answers, email} = req.body;
    console.log(user_answers);

    try{

        let data = await Question.find({}, {Correct_Answer : 1})
        let user = await Signup.findOne({ email });
        let points = 0;

       

        for(let i=0;i<user_answers.length;i++){
            if(user_answers[i] === data[i].Correct_Answer){
                points++;
            }
        }

        if (user) {
           
            const updatePoints = await Signup.updateOne({email},  { $set: { points: points, Exam:true }  })
              return res.send({Status : "Ok", msg:"Exam Completed", email: email, points });
           
          } else {
            return res.send({Status: "Error", msg: "User Does not Exist"});
          }
        
       

    }
    catch (e) {
        res.status(400).send({Status : "Error"});
     }
})

module.exports = app;