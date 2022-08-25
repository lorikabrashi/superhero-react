import React from 'react'
import { Alert } from 'react-bootstrap'

const SuperHeroAlert = ({variant, children}) => {
  return (
    <>
      { children && <Alert variant={variant}>{children}</Alert>}
    </>
  )
}

export default SuperHeroAlert