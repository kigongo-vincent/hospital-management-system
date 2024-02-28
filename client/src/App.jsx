import React from 'react'
import {Route, Routes} from 'react-router-dom'
import LoginPage from './pages/Login'
import SignUpPage from './pages/Signup'
import AdminDashboard from './pages/Admindashboard'
import SplashScreen from './pages/SplashScreen'
import Staffdashboard from './pages/Staffdashboard'
const App = () => {
  return (
    <>
    <Routes>
      <Route Component={SplashScreen} path='/'/>
      <Route Component={LoginPage} path='/login'/>
      <Route Component={SignUpPage} path='/sign-up'/>
      <Route Component={AdminDashboard} path='/admin-dashboard'/>
      <Route Component={Staffdashboard} path='/staff-dashboard'/>
    </Routes>
    </>
  )
}

export default App
