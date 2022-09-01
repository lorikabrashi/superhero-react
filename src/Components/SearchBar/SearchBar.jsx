import React, { useState } from 'react'
import {Col, Form} from 'react-bootstrap'
const SearchBar = ({filterSearch}) => {

  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    filterSearch(search)
  }

  return (
    <Col md={{ span: 4, offset: 4 }}>
    
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3">
      <input
        type="text"
        className="form-control"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="Search"
      />
    </Form.Group>
    </Form>
    </Col>
  )
}

export default SearchBar