import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const SplashScreen = () => {
    const navigate = useNavigate()

  useEffect(()=>{
    setTimeout(()=>{
      navigate('/login')
    }, 3000)
  },[])
  return (
    <motion.div
      
      className=" full-page bg-palewhite splash-screen d-flex align-items-center justify-content-between flex-column"
    >
      <motion.div />
      <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ease: "easeInOut", duration: .5}}
      className="shadow-sm p-5 bg-white d-flex align-items-center justify-content-center  flex-column">
        <img
          src="https://mla7c53pmfhs.i.optimole.com/wW1pluc-hwydQ3-J/w:996/h:1024/q:mauto/https://athealthblog.com/wp-content/uploads/2022/02/medical-g2012fccfe_1280.png"
          alt=""
        />
        <h1 className="poppins-bold mt-4">Hospital Management System</h1>
      </motion.div>
      <motion.p className="opacity-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 100, opacity: 0 }}
      transition={{ease: "easeInOut", delay: 1}}
      >
        All rights reserved hospitalmanagementsystem &copy;
      </motion.p>
    </motion.div>
  );
};

export default SplashScreen;
