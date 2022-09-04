import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar/Navbar'

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/home' element={<h1>Home View</h1>} />
          <Route path='/contact' element={<h1>Contact View</h1>} />
          <Route path='/agend' element={<h1>Agend</h1>} />
          <Route path='*' element={<h2>No encontro la vista</h2>} />
        </Routes>
      </div>
    </>
  )
}
