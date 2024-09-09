import React, { useContext } from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      navigate('/dashboard/dashboard-home');
    } else {
      alert('User not found ');
    }
    setIsAuth(true)
    console.log('isAuth', isAuth)
  };
  return (
    <main className='py-5' >
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className='text-center'>Login Page</h2>
              <hr />
              <form onSubmit={handleLogin}>

              <div className="row">
                <div className="col-12 mb-4">
                <input required type='email' name='email' className='form-control' placeholder='Enter Email ' value={email} onChange={(e) => setEmail ( e.target.value)}/>
                </div>
                <div className="col-12 mb-4">
                <input required type='password' name='password' className='form-control' placeholder='Enter Password ' value={password} onChange={(e) => setPassword (e.target.value)} />
                </div>
                <div className="col-12">
                  <button type='submit' className='btn btn-primary w-100' >Login
                    
                  </button>
                  <p className='h6 mb-0 mt-2'>Don't have account? <Link to='/auth/register'>Register Now</Link></p>
                  <p className='h6 mb-0 mt-2'>Forget password? <Link to='/forget'>Reset Password</Link></p>
                </div>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

