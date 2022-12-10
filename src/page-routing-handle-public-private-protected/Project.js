import React, { lazy, Suspense, Outlet, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom'
import Layout from './Layout/Layout'
import ProtectedRoute from './ProtectedRoute'

const Navigation = lazy(() => import('./Pages/Navigation'))
const Landing = lazy(() => import('./Pages/Landing'))
const Home = lazy(() => import('./Pages/Home'))
const Admin = lazy(() => import('./Pages/Admin'))
const Analytics = lazy(() => import('./Pages/Analytics'))
const Dashboard = lazy(() => import('./Pages/Dashboard'))
const NotFound = lazy(() => import('./Pages/NotFound'))
const Loading = lazy(() => import('./Pages/Loading'))
const Login = lazy(() => import('./Pages/Login'))
const Logout = lazy(() => import('./Pages/Logout'))
const Signup = lazy(() => import('./Pages/Signup'))
const AccessDenied = lazy(() => import('./Pages/AccessDenied'))

const IsAllowedPermissionHook = () => {
  useEffect(() => {
    return window.localStorage.getItem('role')
  }, [])
}

export default function Project() {
  return (
    <BrowserRouter>
      <Suspense>
        <Navigation />

        <Routes>
          {/**public routes*/}
          <Route path="*" element={<NotFound />} />
          <Route index element={<Landing />} />
          <Route path="access-denied" element={<AccessDenied />} />
          <Route path="landing" element={<Landing />} />
          <Route path="home" element={<Home />} />

          <Route path="signin" element={<Login />} />
          <Route path="signout" element={<Logout />} />
          <Route path="signup" element={<Signup />} />

          <Route path="/tab">
            <Route path="/tab1" element={<>Tab 1</>} />
            <Route path="/tab1" element={<>Tab 2</>} />
          </Route>

          <Route
            path="user"
            element={
              <ProtectedRoute
                isAllowedPermission={['admin', 'user', 'manager'].includes(
                  'user',
                )}
                redirectPath={'/access-denied'}
              >
                <Admin type={'user'} />
              </ProtectedRoute>
            }
          />

          <Route
            path="manager"
            element={
              <ProtectedRoute
                isAllowedPermission={['admin', 'user', 'manager'].includes(
                  'manager',
                )}
                redirectPath={'/access-denied'}
              >
                <Admin type={'manager'} />
              </ProtectedRoute>
            }
          />

          <Route
            path="admin"
            element={
              <ProtectedRoute
                isAllowedPermission={['admin', 'user', 'manager'].includes(
                  'admin',
                )}
                redirectPath={'/access-denied'}
              >
                <Admin type={'admin'} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
/*
<Layout />
 <h1>React Router</h1>
          <Navigation />
    <Route path="admin" element={<Admin />} /> 
    
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />


    <Route path="signin" element={<Login />} />
    <Route path="signout" element={<Logout />} />
    <Route path="signup" element={<Signup />} />   

*/
