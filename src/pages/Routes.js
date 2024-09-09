import React, { useContext } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'
import { AuthContext } from '../contexts/AuthContext'
import PrivateRoute from '../components/PrivateRoute'


export default function Index() {
    const {isAuth} = useContext(AuthContext)
    // const [islogin, setislogin] = useState(false)
    // if (!islogin) return <Login />
    return (
        <>


            <Routes>
                {/* <button className={`btn btn-${islogin ? "danger" : "success"}`} onClick={() => { setislogin(!islogin) }}>{islogin ? "logout" : "login"}</button>
                {islogin
                    ? <Frontend />
                    : <Login />
                }*/}
                {/* <Route path='/auth/login' element={<Login />} /> */}
                <Route path='/*' element={<Frontend />} />
                <Route path='/auth/*' element={!isAuth? <Auth /> : <Navigate to="/dashboard/*" />} />
                <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard} />} />
                <Route path='*' element={<main className='text-center mt-5'><h1>404.Page not found</h1></main>} />
            </Routes>

        </>
    )
}
