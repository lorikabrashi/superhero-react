import { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const Register = () => {
  const [firstName, setFirstName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    alert('submit')
  }

  return (
    <Container>
      <h1>Register</h1>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                placeholder="First Name"
              />
            </Form.Group>

            <div className='sbumit'>
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Register
