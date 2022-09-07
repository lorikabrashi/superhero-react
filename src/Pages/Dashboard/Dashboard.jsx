import { Container, Row, Col } from 'react-bootstrap'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'
const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Dashboard</h1>
          <div>Here we can display all user and superhero activity!</div>
        </Col>
      </Row>
    </Container>
  )
}

export default withMenu(Dashboard, MENU_TYPES.admin)
