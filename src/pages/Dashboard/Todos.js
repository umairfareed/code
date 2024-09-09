import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Todos() {
    const navigate = useNavigate();
    let exTodos = JSON.parse(localStorage.getItem('todos')) || [];
    return (
        <main className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Todos</h1>
                        <hr />
                        <div className="card p-3 p-md-4 mt-3 ">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Created-Date</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exTodos.map((item, i) => {
                                        const { id, title, description, location, createddate, status } = item
                                      return(
                                          
                                           <tr key={i}>
                                              <th scope='row'>{i+1}</th>
                                              <td>{id}</td>
                                              <td>{title}</td>
                                              <td style={{ maxWidth: 100 }}>{description}</td>
                                              <td>{location}</td>
                                              <td>{createddate}</td>
                                              <td>{status}</td>
                                              <td>
                                                  <button className='btn btn-sm btn-info me-1'>Edit</button>
                                                  <button className='btn btn-sm btn-danger'>Delete</button></td>
                                          </tr> 
                                      )
                                    })}

                                </tbody>
                            </table>
                            <div className="row">
                                <div className="col text-center">
                                    <button className='btn btn-primary w-50 mb-4' onClick={() => navigate('/frontend/addtodo')}>Add Todo</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
