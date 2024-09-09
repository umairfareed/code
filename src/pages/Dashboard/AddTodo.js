import React from 'react'
import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function AddTodo() {
  const [id, setId] = useState(Math.random().toString(36).slice(2));
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [createddate, setCreateddate] = useState('');
  const [status, setStatus] = useState('---------');
  // const [, set] = useState('');
  // const [, set] = useState('');
  
  const navigate = useNavigate();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    const newTodo = { id, title, description, location,createddate,status };
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    navigate('/frontend/todos');
  };
  return (
    <main className='p-5'>
      <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center'>Add Todo</h1>
                <hr />
                <form onSubmit={handleAddTodo} >
                <div className="row">
                  <div className="col-12 mb-4">
                    <input required type="text" name='title' className='form-control' placeholder='Enter Title'value={title} onChange={(e) => setTitle(e.target.value)}/>
                  </div>
                  <div className="col-12 mb-4">
                    <input required type="text" name='description' className='form-control' placeholder='Enter Description'value={description} onChange={(e) => setDescription(e.target.value)}/>
                  </div>
                  <div className="col-12 mb-4">
                    <input required type="text" name='location' className='form-control' placeholder='Enter Locatin'value={location} onChange={(e) => setLocation(e.target.value)}/>
                  </div>
                  <div className="col-12 mb-4">
                    <input required type='datetime-local' name='createddate' className='form-control' placeholder='Enter date'value={createddate} onChange={(e) => setCreateddate(e.target.value)}/>
                  </div>
                  <div className="col-12">
                    <button type='submit' className='btn btn-primary w-100'>Add</button>
                    <p className='h6 mb-0 mt-2'>Want to see existing todos?<Link to="/frontend/todos">Existing Todos</Link></p>
                  </div>
                </div>
              </form>
            </div>
        </div>
      </div>
    </main>
  )
}
