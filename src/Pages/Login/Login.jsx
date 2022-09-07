import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import LoginForm from '../../Components/Forms/Login'
import { api, endpoints } from '../../lib/api'

import { login } from '../../lib/store/slices/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
    dispatch(login(result.data))
    navigate('/dashboard')
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
export default withMenu(Login, MENU_TYPES.exposed)
