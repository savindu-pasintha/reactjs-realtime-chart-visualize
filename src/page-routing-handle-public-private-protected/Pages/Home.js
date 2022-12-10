import React from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'

export default function Home({ user }) {
  if (true) {
    return <h2>Home (Protected: authenticated user required)</h2>
  } else {
    return <Navigate to="/landing" replace />
  }
}
