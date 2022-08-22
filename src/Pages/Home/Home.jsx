import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import endpoints from '../../lib/api/endpoints'
import api from '../../lib/api/api'


const Home = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getAppName = async () => {
  
      const response = await api.call(endpoints.homePOST, {
        name: 'TEST'
      })
  
      console.log(response.data)
      setData(response.data)
    }
    getAppName()
  }, [])

  return (
    <Container>
      <Row>
        <Col md={6}>{data && data.name}</Col>
      </Row>
    </Container>
  )
}

export default Home
