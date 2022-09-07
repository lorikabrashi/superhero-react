import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'

const Profile = () => {
  return (
    <Container>
      <Row>
        <Col>Profile</Col>
      </Row>
    </Container>
  )
}

export default withMenu(Profile, MENU_TYPES.dynamic)
