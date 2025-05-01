import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}
