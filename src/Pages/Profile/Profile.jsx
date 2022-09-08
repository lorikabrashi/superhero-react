import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'
import ProfileForm from '../../Components/Forms/ProfileForm'
import { api, endpoints } from '../../lib/api'
import { useSelector } from 'react-redux'
import { getHeaderStructure } from '../../lib/helpers'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import ProfilePicture from '../../Components/ProfilePicture'

const Profile = () => {
  const [userData, setUserData] = useState()
  const [variant, setVariant] = useState('success')
  const [msg, setMsg] = useState('')
  const [alert, setAlert] = useState(false)

  const token = useSelector((state) => state.auth.data.token)
  const config = {
    headers: getHeaderStructure(token),
  }

  useEffect(() => {
    const getProfile = async () => {
      const result = await api.call(endpoints.getProfileData, config)
      setUserData(result.data)
    }
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleEdit = async (data) => {
    const dataConf = { ...config, data }
    try{
      await api.call(endpoints.updateProfile, dataConf)
      setMsg('Profile updated successfully!')
    }
    catch(err){
      setVariant('danger')
      setMsg('You got an error!')
    }
    setAlert(true)
  }
  const handleEditImage = async (file) => {
    const data = new FormData()
    data.append('profile-image', file)
    const dataConf = { ...config, data }

    try{
      await api.call(endpoints.updateProfilePicture, dataConf)
      setMsg('Profile Picture updated successfully!')
    }
    catch(err){
      setVariant('danger')
      setMsg('You got an error!')
    }
    setAlert(true)
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>Profile Page</h1>
        </Col>
        <Col>
          {alert && <SuperHeroAlert variant={variant}>{msg}</SuperHeroAlert>}



          {userData && (
            <>
              <ProfilePicture imgSource={userData.profilePicture} changeProfileImage={handleEditImage} />
              <ProfileForm userData={userData} handleEdit={handleEdit} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default withMenu(Profile, MENU_TYPES.dynamic)
