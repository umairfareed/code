import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Forget from './Forget'

export default function Auth() {
  return (
    <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forget' element={<Forget />} />
    </Routes>
  )
}
