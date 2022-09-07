import { Col, Container, Row } from 'react-bootstrap'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'


const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Welcome to superhero app</h1>
          <div>The best app in the world!</div>
        </Col>
      </Row>
    </Container>
  )
}

export default withMenu(Home, MENU_TYPES.dynamic)
