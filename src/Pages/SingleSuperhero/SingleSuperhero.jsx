import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { api, endpoints } from '../../lib/api'
import { useSelector } from 'react-redux'
import { getHeaderStructure } from '../../lib/helpers'
import EditSuperHeroForm from '../../Components/Forms/EditSuperHeroForm/EditSuperHeroForm'

const SingleSuperhero = () => {
  const { superheroId } = useParams()

  const [superhero, setSuperhero] = useState()

  const token = useSelector((state) => state.auth.data.token)

  const config = {
    headers: getHeaderStructure(token),
    params: [superheroId],
  }

  useEffect(() => {
    const getSuperHero = async () => {
      const result = await api.call(endpoints.singleSuperhero, config)
      setSuperhero(result.data)
    }
    getSuperHero()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [superheroId])

  const handleEdit = async (data) => {
    const editConfig = {...config}
    editConfig.data = data
    
    const result = await api.call(endpoints.editSuperhero, editConfig)
    console.log(result)
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <pre>{JSON.stringify(superhero, null, 2)}</pre>
        </Col>
        <Col>{superhero && <EditSuperHeroForm superhero={superhero} edit={handleEdit} />}</Col>
      </Row>
    </Container>
  )
}

export default SingleSuperhero
