import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import SuperheroTable from '../../Components/SuperheroTable/SuperheroTable'
import { api, endpoints } from '../../lib/api'
import { getHeaderStructure } from '../../lib/helpers'

const EditSuperheros = () => {

  const token = useSelector((state) => state.auth.data.token)
  const config = {
    headers: getHeaderStructure(token),
  }

  const [superheros, setSuperheros] = useState([])

  useEffect(() => {
    const getSuperheros = async () => {
      const result = await api.call(endpoints.superheros, config)
      setSuperheros(result.data)
    }
    getSuperheros()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <SuperheroTable superheros={superheros} />
        </Col>
      </Row>
    </Container>
  )
}

export default EditSuperheros
