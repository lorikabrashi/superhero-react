import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const ProfileForm = ({ userData, handleEdit }) => {
  const [firstName, setFirstName] = useState(userData.firstName)
  const [lastName, setLastName] = useState(userData.lastName)
  const [age, setAge] = useState(userData.age)

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      firstName,
      lastName,
      age,
    }

    handleEdit(data)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <input
          type="text"
          required
          className="form-control"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
          placeholder="First Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <input
          type="text"
          required
          className="form-control"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value)
          }}
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <input
          type="number"
          required
          className="form-control"
          value={age}
          onChange={(e) => {
            setAge(e.target.value)
          }}
          placeholder="Age"
        />
      </Form.Group>

      <div className="submit">
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

export default ProfileForm
