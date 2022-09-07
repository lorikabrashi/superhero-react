import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ListSuperHeros from '../../Components/ListSuperHeros/ListSuperHeros'
import SuperHeroAlert from '../../Components/SuperHeroAlert'
import { api, endpoints } from '../../lib/api'
import { getHeaderStructure } from '../../lib/helpers'
import SearchBar from '../../Components/SearchBar'
import withMenu from '../../hoc/withMenu'
import { MENU_TYPES } from '../../lib/constants'

const Superheros = () => {
  const [completeHeros, setCompleteHeros] = useState([])
  const [superheros, setSuperHeros] = useState([])
  const [favoriteList, setFavoriteList] = useState([])
  

  const token = useSelector((state) => state.auth.data.token)
  const config = {
    headers: getHeaderStructure(token),
  }

  useEffect(() => {
    const getSuperHeros = async () => {
      try {
        const result = await api.call(endpoints.superheros, config)
        setSuperHeros(result.data)
        setCompleteHeros(result.data)

        const favoriteListResult = await api.call(endpoints.favoriteList, config)
        setFavoriteList(favoriteListResult.data.favorites)
      } catch (err) {}
    }
    getSuperHeros()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])


  const toggleFavorite = async (superHeroId) => {
    try {
      const favoriteConfig = { ...config }
      favoriteConfig.data = { _id: superHeroId }
      const favoriteListResult = await api.call(endpoints.updateFavorite, favoriteConfig)
      setFavoriteList(favoriteListResult.data.favorites)
    } catch (err) {}
  }

  const filterSearch = (searchQuery) => {
    if(!searchQuery){
      setSuperHeros(completeHeros)
      return
    }
    const filteredSuperheros = completeHeros.filter((elem) => elem.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setSuperHeros(filteredSuperheros)
  } 

  return (
    <Container>
      <Row>
        <h1>Superhero Page</h1>
      </Row>
      <SearchBar filterSearch={filterSearch} />
      {superheros.length > 0 ? <ListSuperHeros superheros={superheros} favoriteList={favoriteList} toggleFavorite={toggleFavorite} /> : <SuperHeroAlert variant={'info'}>No Superheros</SuperHeroAlert>}
    </Container>
  )
}

export default withMenu(Superheros, MENU_TYPES.user)
