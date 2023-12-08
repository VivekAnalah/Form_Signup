import React, { useState } from "react";
// import Header from "./Header";
import { Alert } from "./Alert";

import axios from "axios";
import call from "../Call_Icon.png";

const Signup2 = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertTitle, setAlertTitle] = useState("");

  const [Email_valid, setEmail_valid] = useState(true);

  const [Mob_valid, setMob_valid] = useState(true);

  const [Name_valid, setName_valid] = useState(true);

  const validStyle = {
    border: "2px solid #E5E7E8",
  };
  const notValidStyle = {
    border: "1px solid red",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");

  const validMob = (e) => {
    let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);
    let mobile_number = e.target.value;
    // if mobile_number is empty return false
    if (mobile_number == null) {
      console.log("mob not valid");
      setMob("");
      setMob_valid(false);
      return "false";
    }

    // Return true if the mobile_number matched the ReGex
    if (regex.test(mobile_number) == true) {
      setMob(e.target.value);
      setMob_valid(true);
      console.log("mob valid");
      return "true";
    } else {
      console.log("mob not valid");
      setMob("");
      setMob_valid(false);
      return "false";
    }
  };
  const validEmail = (e) => {
    var validRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (e.target.value.match(validRegex)) {
      setEmail_valid(true);
      setEmail(e.target.value);
      console.log("valid");
    } else {
      setEmail_valid(false);
      console.log("not valid");
      setEmail("");
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://pos-registration.onrender.com/signup",
        {
          name,
          email,
          mobile: mob,
        }
      );
      let data = res.data;

      if (data.Status === "Ok") {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("mob").value = "";

        setAlertType("success");
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Success!");
        setTimeout(() => {
          setAlertVisible(false);

        }, 2000);
      } else {
        // alert(data.msg)
        setAlertType("error");
        setAlertMessage(data.msg);
        setAlertVisible(true);
        setAlertTitle("Error:");
        setTimeout(() => {
          setAlertVisible(false);
        }, 5000);
      }
    } catch (e) { }
  };

  const validName = (e) => {

    const inputValue = e.target.value;
    setName(inputValue);

    const nameParts = inputValue.split(' ');
    if (nameParts.length >= 2 && nameParts[1].length>=1) {
      setName_valid(true)
    } else {
      setName_valid(false)
    }


  }

  return (
    <div className="h-screen  ">
      {/* <Header /> */}

      <div className="flex w-[100%]   justify-center py-10 items-center m-[auto] ">
        <form className="bg-white p-10 sm:p-15  rounded-md shadow-lg shadow-blue-500/50 2xl:w-[30%] 2xl:mt-[150px] mt-[100px]">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">Welcome</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
              style={Name_valid ? validStyle : notValidStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => validName(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              autoFocus={true}
              
            />
          </div>

          <div
            className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
            style={Email_valid ? validStyle : notValidStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              onChange={(e) => validEmail(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
          <div
            className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
            style={Mob_valid ? validStyle : notValidStyle}
          >
            

            <img src={call} alt="call_icon" className="w-[15px] h-[15px]" />
            <input
              onChange={(e) => validMob(e)}
              className="pl-2 outline-none border-none w-[100%]"
              type="number"
              name="mob"
              id="mob"
              placeholder="Mobile Number"
            />
          </div>

          <button
            onClick={(e) => handleSignUp(e)}
            className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            disabled={!Email_valid || !Mob_valid || !Name_valid || !name || !email || !mob}
          >
            Sign Up
          </button>
          {/* <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
            <a
              href="https://dashboard.analahinsurance.com/customer/login"
              target="blank"
            >
              {" "}
              Already have an account? Sign In
            </a>
          </span> */}
        </form>

        {alertVisible && (
          <Alert type={alertType} message={alertMessage} title={alertTitle} />
        )}
      </div>
    </div>
  );
};

export default Signup2;