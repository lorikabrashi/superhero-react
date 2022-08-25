import { Container } from 'react-bootstrap'
import RegisterForm from '../../Components/Forms/Register/Register'

import { api, endpoints } from '../../lib/api'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import { useState } from 'react'

const Register = () => {
  const [message, setMessage] = useState('')
  const [variant, setVariant] = useState('danger')

  const submitRegister = async (data) => {
    setVariant('danger')
    const config = {
      data,
    }
    const result = await api.call(endpoints.register, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }
    setVariant('success')
    setMessage('Please verify your account')
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
        <SuperHeroAlert variant={variant}>{message}</SuperHeroAlert>
      </Container>
      {variant !== 'success' && <RegisterForm setMessage={setMessage} submit={submitRegister} />}
    </>
  )
}

export default Register
