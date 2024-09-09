import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Todos from './Todos'
import AddTodo from './AddTodo'
import Users from './Users'
import DashboardHome from './DashboardHome'

export default function Dashboard() {
  return (
      <Routes>
        <Route path='dashboard-home' element={<DashboardHome />} />
        <Route path='todos' element={<Todos />} />
        <Route path='addtodo' element={<AddTodo />} />
        <Route path='users' element={<Users />} />
    </Routes>
  )
}
