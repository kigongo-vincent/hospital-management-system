import React from 'react'
import {motion} from 'framer-motion'
const SplashScreen = () => {
  return (
    <motion.div 
    initial={{x: 100}}
    animate={{x: 0}}
    exit={{x: 100}}
    className='full-page splash-screen d-flex align-items-center justify-content-between flex-column'>
      <motion.div/>
      <motion.div className='d-flex align-items-center justify-content-center  flex-column'>
      <img src="https://mla7c53pmfhs.i.optimole.com/wW1pluc-hwydQ3-J/w:996/h:1024/q:mauto/https://athealthblog.com/wp-content/uploads/2022/02/medical-g2012fccfe_1280.png" alt="" />
      <h1 className="poppins-bold mt-4">
        Hospital Management System
      </h1>
      </motion.div>
      <p className="opacity-50">All rights reserved hospitalmanagementsystem &copy;</p>
    </motion.div>
  )
}

export default SplashScreen
