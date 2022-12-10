import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()

  const [user, setUser] = React.useState({
    username: '',
    password: '',
    err: 'Sign-in',
  })

  const handleChange = (type, e) => {
    if (type == 'username') {
      setUser({ ...user, username: e.target.value })
    }

    if (type == 'password') {
      setUser({ ...user, password: e.target.value })
    }

    if (type == 'role') {
      setUser({ ...user, role: e.target.value })
    }
  }

  const handleLogin = () => {
    try {
      if (user?.username && user?.password && user?.role) {
        if (
          window.atob(localStorage.getItem('username')) == user?.username &&
          window.atob(localStorage.getItem('password')) == user?.password &&
          window.atob(localStorage.getItem('role')) == user?.role
        ) {
          setUser({ ...user, err: 'username/password/role success' })
          setTimeout(() => {
            navigate('/home')
          }, 3000)
        } else {
          setUser({ ...user, err: 'username/password/role not matched!' })
        }
      } else {
        setUser({ ...user, err: 'username/password/role empty !' })
      }
    } catch (err) {
      setUser({ ...user, err: 'err !' })
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
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            handleChange('username', e)
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            handleChange('password', e)
          }}
        />
        <select
          onChange={(e) => {
            handleChange('role', e)
          }}
        >
          <option value="user">user</option>
          <option value="admin">admin</option>
          <option value="manager">manager</option>
        </select>
        <button onClick={handleLogin}> Sign in</button>
      </div>
    </div>
  )
}
