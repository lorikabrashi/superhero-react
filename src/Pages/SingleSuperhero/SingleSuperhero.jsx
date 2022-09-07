import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { api, endpoints } from '../../lib/api'
import { useSelector } from 'react-redux'
import { getHeaderStructure } from '../../lib/helpers'
import EditSuperHeroForm from '../../Components/Forms/EditSuperHeroForm/EditSuperHeroForm'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'

const SingleSuperhero = () => {
  const { superheroId } = useParams()

  const [superhero, setSuperhero] = useState()
  const [alert, setAlert] = useState(false)
  const [msg, setMsg] = useState('') 
  const [variant, setVariant] = useState('success')

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
    
    try{
      await api.call(endpoints.editSuperhero, editConfig)
      setMsg('Superhero was successfully changed!')
      setVariant('success')
    }
    catch(err){
      setMsg('You got an error!')
      setVariant('danger')
    }
    setAlert(true)
  }

  const changeImage = async (file) => {

    const formData = new FormData();
    formData.append("superhero-image", file);
    const editConfig = {...config}
    editConfig.data = formData
    try{
      await api.call(endpoints.editSuperheroImage, editConfig)
      setMsg('Superhero image was successfully changed!')
      setVariant('success')
    }catch(err){
      setMsg('You got an error!')
      setVariant('danger')
    }
    setAlert(true)
  }

  return (
    <Container>
      <Row>
        {alert && <SuperHeroAlert variant={variant}>{msg}</SuperHeroAlert>} 
        <Col>{superhero && <EditSuperHeroForm superhero={superhero} edit={handleEdit} changeImage={changeImage} />}</Col>
      </Row>
    </Container>
  )
}

export default withMenu(SingleSuperhero, MENU_TYPES.admin)
