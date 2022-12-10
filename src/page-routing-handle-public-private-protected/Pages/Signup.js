import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom'

export default function Signup() {
  let navigate = useNavigate()

  const [user, setUser] = React.useState({
    username: '',
    password: '',
    role: '',
    err: 'Sign-up',
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

  const handleSignup = () => {
    try {
      if (user?.username && user?.password) {
        let u = window.btoa(user.username) ? window.btoa(user.username) : ''
        let p = window.btoa(user.password) ? window.btoa(user.password) : ''
        let r = window.btoa(user.role) ? window.btoa(user.role) : ''
        localStorage.setItem('username', u)
        localStorage.setItem('password', p)
        localStorage.setItem('role', r)
        if (
          localStorage.getItem('username') != '' &&
          localStorage.getItem('password') != '' &&
          localStorage.getItem('role') != ''
        ) {
          setUser({ ...user, err: 'username/password/role success' })
          setTimeout(() => {
            navigate('/signin')
          }, 3000)
        } else {
          setUser({ ...user, err: 'username/password/role not stored !' })
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
        <button onClick={handleSignup}> Sign up</button>
      </div>
    </div>
  )
}
