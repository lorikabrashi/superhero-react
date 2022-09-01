import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { api, endpoints } from '../../lib/api'
import SuperHeroAlert from '../../Components/SuperHeroAlert/'
import { Container, Row } from 'react-bootstrap'
import { getHeaderStructure } from '../../lib/helpers'

const VerifyAccount = () => {
  const [success, setSuccess] = useState()
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation()

  useEffect(() => {
    const verifyAccount = async () => {
      if (location.search) {
        const params = new URLSearchParams(location.search)
        const token = params.get('token')

        const config = {
          headers: getHeaderStructure(token)
        }

        const result = await api.call(endpoints.verify, config)
        setSuccess(result.success)
        if (!result.success) {
          setErrorMessage(result.data)
        }
      }
    }

    verifyAccount()
  }, [location.search])

  return (
    <Container>
      <Row>
        {success !== undefined ? (
          success === true ? (
            <SuperHeroAlert variant={'success'}>
              Account is verified! <Link to="/login">Please go to login</Link>
            </SuperHeroAlert>
          ) : (
            <SuperHeroAlert variant={'danger'}>{errorMessage}</SuperHeroAlert>
          )
        ) : null}
      </Row>
    </Container>
  )
}

export default VerifyAccount
