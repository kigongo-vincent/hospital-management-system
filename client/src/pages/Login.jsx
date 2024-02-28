import React, { useState } from "react";
import Input from "../components/Input";
import { motion } from "framer-motion";
import Spinner from '../assets/Spinner.svg'
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [loading, setLoading] = useState(false)


  const handleSubmit=()=>{
    setLoading(true)
  }
  return (
    <motion.div className="full-page bg-palewhite flex-column py-3  d-flex align-items-center justify-content-center">
      <motion.div
        initial={{ translateX: "70%", opacity: 0 }}
        animate={{ translateX: "0%", opacity: 1 }}
        exit={{ translateX: "70%", opacity: 0 }}
        className="bg-white auth-page flex-column  d-flex align-items-center justify-content-center"
      >
        <img
          className="icon-large rounded"
          src="https://cdn.dribbble.com/users/4971284/screenshots/18409757/hospital__1_.png"
          alt=""
        />
        <h2 className="poppins-bold my-3">Welcome back</h2>
        <Input
          error_msg={usernameError && usernameError}
          type={"text"}
          placeholder={"email or username"}
          value={username}
          setter={(e) => setUsername(e.target.value)}
          onFocus={()=>setUsernameError("Please provide a valid username")}
        />
        <Input
          type={"password"}
          placeholder={"password"}
          value={password}
          setter={(e) => setPassword(e.target.value)}
          error_msg={passwordError && passwordError}
          onFocus={()=>setPasswordError('password must have atleast 8 characters')}
        />
        <button onClick={handleSubmit} className="btn btn-primary px-5 py-1 linear-gradient border-0">
          {
            loading
            ?
            <>
            <span className="mx-2 opacity-50">Verifying..</span>
            <img className="icon-sm" src={Spinner}/>
            </>
            : 
            <span>Log in</span>
          }
        </button>
        <p className="py-3 text-secondary">Forgot password</p>
        <p className="">
          Don't have an account, <u className="text-purple">Signup</u>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Login;
