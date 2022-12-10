import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom'

export default function Logout() {
  let navigate = useNavigate()
  const [user, setUser] = React.useState({
    username: '',
    password: '',
    err: 'Sign-out',
  })

  const handleLogout = () => {
    localStorage.setItem('username', '')
    localStorage.setItem('password', '')
    if (
      localStorage.getItem('username') == '' &&
      localStorage.getItem('password') == ''
    ) {
      setUser({ ...user, err: 'signout success' })
      setTimeout(() => {
        navigate('/signup')
      }, 3000)
    } else {
      setUser({ ...user, err: 'signout failed !' })
    }
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
      }}
    >
      <div
        style={{
          width: '100%',
          color: 'white',
          position: 'relative',
          top: '45vh',
          textAlign: 'center',
        }}
      >
        <h1>{user?.err}</h1>
        <button onClick={handleLogout}>Sign out</button>
      </div>
    </div>
  )
}
