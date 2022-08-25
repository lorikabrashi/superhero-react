import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { emailRegex } from '../../../lib/constants'

const Login = ({ submit, setMessage }) => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const localErrors = []
    setMessage('')

    if (!emailRegex.test(email)) {
      localErrors.push('Email is not valid!')
    }
    if (!password) {
      localErrors.push('Password cannot be empty!')
    }
    if (localErrors.length) {
      setMessage(localErrors[0])
      return
    }

    const data = {
      email,
      password,
    }
    submit(data)
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <input
                type="email"
                required
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                required
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <div className="submit">
                <Button type="submit">Submit</Button>
              </div>
              <small>
                <Link to={'/forgot-password'}>ForgotPassword?</Link>
              </small>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
