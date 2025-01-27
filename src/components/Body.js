import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Body
