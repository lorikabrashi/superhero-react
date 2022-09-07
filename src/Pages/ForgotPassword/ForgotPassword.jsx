import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import ForgotPasswordForm from '../../Components/Forms/ForgotPassword'
import { api, endpoints } from '../../lib/api'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'

const ForgotPassword = () => {
  const [message, setMessage] = useState()
  const [variant, setVariant] = useState('danger')

  const submitForm = async (data) => {
    const config = {
      data,
    }
    const result = await api.call(endpoints.forgotPassword, config)
    if (!result.success) {
      setMessage([result.data])
      return
    }

    setVariant('success')
    setMessage('An email was sent to you with further instructions!')
  }

  return (
    <>
      <Container>
        <h1>Forgot Password</h1>
        <SuperHeroAlert variant={variant}>{message}</SuperHeroAlert>
      </Container>
      {variant !== 'success' && <ForgotPasswordForm setMessage={setMessage} submit={submitForm} />}
    </>
  )
}

export default withMenu(ForgotPassword, MENU_TYPES.exposed)
