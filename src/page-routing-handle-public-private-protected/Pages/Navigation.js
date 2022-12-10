import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
export default function Navigation() {
  return (
    <nav>
      <Link to="/landing">Landing__</Link>
      <Link to="/home">Home__</Link>
      <Link to="/dashboard">Dashboard__</Link>
      <Link to="/analytics">Analytics__</Link>
      <Link to="/admin">Admin__</Link>
      <Link to="/signin">Login__</Link>
      <Link to="/signout">Logout__</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  )
}
