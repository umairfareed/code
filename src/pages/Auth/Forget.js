import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function Forget() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.email === email);

    if (user) {
      if (newPassword === confirmPassword) {
        const updatedUser = { ...user, password: newPassword };
        const updatedUsers = users.map(u => u.email === email ? updatedUser : u);
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Password reset successfully');
        navigate('/login');
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Email not found');
    }
  };
  return (
    <main className='py-5'>
    <div className="container">
     <div className="row">
         <div className="col ">
          <div className="card border-none mx-auto p-3 p-md-4" style={{maxWidth:500}}>
             <h2 className='text-center'>Forget Password</h2>
             <hr />
             <form onSubmit={handleResetPassword}>
              <div className="row">
                <div className="col-12 mb-4">
                  <input required type="email" name='email' className='form-control' placeholder='Enter your Email'onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="col-12 mb-4">
                  <input required type="password" name='email' className='form-control' placeholder='Enter New Password'onChange={(e)=>setNewPassword(e.target.value)}/>
                </div>
                <div className="col-12 mb-4">
                  <input required type="password" name='email' className='form-control' placeholder='Confirm New Password'onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <div className="col">
                  <button type='submit' className='btn btn-primary w-100'>Login with Email</button>
                  <p className='h6 mb-0 mt-2'>Remeber password?<Link to='/login'>Login</Link></p>
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
