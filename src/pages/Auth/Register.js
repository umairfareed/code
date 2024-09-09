import React from 'react'
import { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom'

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    navigate('/login');
  };
  return (
    <main className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="card border-none mx-auto p-3 p-md-4" style={{ maxWidth: 400 }}>
              <h2 className='text-center'>Register Page</h2>
              <hr />
              <form onSubmit={handleRegister} >
                <div className="row">
                  <div className="col-12 mb-4">
                    <input required type="text" name='fullName' className='form-control' placeholder='Enter Name'value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                  </div>
                  <div className="col-12 mb-4">
                    <input required type="email" name='email' className='form-control' placeholder='Enter Email'value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className="col-12 mb-4">
                    <input required type="password" name='password' className='form-control' placeholder='Enter Password'value={password} onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className="col-12">
                    <button type='submit' className='btn btn-primary w-100'>Register</button>
                    <p className='h6 mb-0 mt-2'>Already have an account?<Link to="/auth/login">Login</Link></p>
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
