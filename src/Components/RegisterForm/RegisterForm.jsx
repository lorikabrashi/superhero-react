import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'

const RegisterForm = ({ submit }) => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [password, setPassword] = useState()
  const [confPassword, setConfPassword] = useState()
  const [age, setAge] = useState(0)
  const [email, setEmail] = useState()
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const passwordRegex = /^(?:(?=.*[a-z])(?:(?=.*[A-Z])(?=.*[\d\W])|(?=.*\W)(?=.*\d))|(?=.*\W)(?=.*[A-Z])(?=.*\d)).{6,}$/

    const localErrors = []
     setErrors(localErrors)

    if(!firstName){
      localErrors.push('First name cannot be empty!');
    }
    if(!lastName){
      localErrors.push('Last name cannot be empty!');
    }
    if(!emailRegex.test(email)){
      localErrors.push('Email is not valid!');
    }
    if(!age){
      localErrors.push('Age name cannot be empty!');
    }
    if(age < 0){
      localErrors.push('Age cannot be less then 0!');
    }
    if(!passwordRegex.test(password)){
      localErrors.push('Password must contain a number and a character')
    }
    if(confPassword !== password){
      localErrors.push('Passwords do not match')
    }

    if(localErrors.length){
      setErrors(localErrors)
      return
    }
    const data = {
      firstName,
      lastName,
      email,
      age,
      password
    }
    submit(data, setErrors)
  }

  return (
    <Container>
      {errors.length > 0 && <Alert variant="danger">{errors[0]}</Alert>}

      <Row>
        <Col>
          <Form
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                // required
                className="form-control"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                placeholder="First Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <input
                type="text"
                // required
                className="form-control"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                placeholder="Last Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <input
                type="text"
                // required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <input
                type="number"
                // required
                // min={1}
                className="form-control"
                value={age}
                onChange={(e) => {
                  setAge(e.target.value)
                }}
                placeholder="Age"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                // required
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Confirm Password</Form.Label>
              <input
                type="password"
                // required
                className="form-control"
                value={confPassword}
                onChange={(e) => {
                  setConfPassword(e.target.value)
                }}
                placeholder="Confirm Password"
              />
            </Form.Group>

            <div className="sbumit">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm
