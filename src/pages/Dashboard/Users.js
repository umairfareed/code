import React from 'react'


export default function Users() {

    let exUsers = JSON.parse(localStorage.getItem('users')) || [];


    return (
        <main className='p-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Users</h1>
                        <hr />
                        <div className="card p-3 p-md-4 mt-3">
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {exUsers.map((item, i) => {
                                        const { fullName, email, password } = item
                                        return (

                                            <tr key={i}>
                                                <th scope='row'>{i+1}</th>
                                                <td>{fullName}</td>
                                                <td>{email}</td>
                                                <td>-----</td>
                                            </tr>
                                        )
                                    })};

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
