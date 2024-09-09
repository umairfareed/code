import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

export default function DashboardHome() {
    const {isAuth,setIsAuth} = useContext(AuthContext)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
    setIsAuth(false)
    console.log('isAuth', isAuth)
  };
  return (
    <main className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1>Dashboard Home</h1>
          </div>
          <hr />
          <div className="row">

            <div className="col ">
              <button className='btn btn-primary w-100 mb-4'onClick={()=>navigate('/dashboard/todos')} >Existing Todos</button>
            </div>
            <div className="col">
              <button className='btn btn-primary w-100 mb-4'onClick={()=>navigate('/dashboard/addtodo')} >Add Todo</button>

            </div>
          </div>
          <div className="row">

            <div className="col ">
              <button className='btn btn-primary w-100 mb-4'onClick={()=>{navigate('/dashboard/users')}} >Existing Users</button>
            </div>
            <div className="col ">
              <button className='btn btn-primary w-100 mb-4' onClick={() => navigate('/auth/forget')}>Update Password</button>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <button className='btn btn-primary w-50 mb-4' onClick={handleLogout}>Logout</button>

            </div>

          </div>
        </div>
      </div>
    </main>
  )
}