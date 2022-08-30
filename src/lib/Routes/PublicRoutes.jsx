import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const PublicRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth.data)

  if (auth) {
    if (auth.role === 'ADMIN') {
      return <Navigate to="/dashboard" />
    } else {
      return <Navigate to="/profile" />
    }
  }
  return <>{ children }</>
}

export default PublicRoutes
