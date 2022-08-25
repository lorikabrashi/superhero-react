import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import LoginForm from '../../Components/Forms/Login'
import { api, endpoints } from '../../lib/api'
const Login = () => {
  const [errorMessage, setErrorMessage] = useState()

  const submit = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoints.login, config)
    if (!result.success) {
      setErrorMessage([result.data])
      return
    }
      console.log(result)
      // Store token into store & local storage
      // refresh page
  }

  return (
    <>
      <Container>
        <h1>Login</h1>
        <SuperHeroAlert variant={'danger'}>{errorMessage}</SuperHeroAlert>
      </Container>
      <LoginForm setMessage={setErrorMessage} submit={submit} />
    </>
  )
}
export default Login
