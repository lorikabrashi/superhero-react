import { Container } from 'react-bootstrap'
import RegisterForm from '../../Components/RegisterForm/RegisterForm'

import { api, endpoints } from '../../lib/api'

const Register = () => {
  
  const submitRegister = async (data, setErrors) => {
    const result = await api.call(endpoints.register, data)
    if(!result.success){
      setErrors([result])
      return
    }
    alert('redirect to login')
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <RegisterForm submit={submitRegister} />
    </>
  )
}

export default Register
