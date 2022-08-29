import { Col, Container, Row } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from '../../lib/store/slices/auth'

const Home = () => {
  const token = useSelector((state) => state.auth.token)
  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col md={6}>
          {<div>
            <div>
              <button aria-label="Increment value" onClick={() => dispatch(login('my token'))}>
                Login
              </button>
              <span>{JSON.stringify(token)}</span>
              <button aria-label="Decrement value" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </div>
          </div>}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
