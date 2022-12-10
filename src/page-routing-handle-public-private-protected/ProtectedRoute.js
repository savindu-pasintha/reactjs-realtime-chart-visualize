import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  Outlet,
} from 'react-router-dom'

export default function ProtectedRoute({
  children,
  isAllowedPermission,
  redirectPath = '/landing',
}) {
  if (isAllowedPermission) {
    return children ? children : <Outlet />
  } else {
    return <Navigate to={redirectPath} replace />
  }
}
