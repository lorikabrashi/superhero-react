import React from 'react'
import styles from './Footer.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col>superhero.com © 2022 All rights reserved</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
