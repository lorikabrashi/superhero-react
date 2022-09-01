import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SuperheroCard from '../SuperheroCard/SuperheroCard'

const ListSuperHeros = ({ superheros, favoriteList, toggleFavorite }) => {
  return (
    <Row>
      {superheros.map((elem) => {
        return (
          <Col md={4} key={elem._id}>
            <SuperheroCard data={elem} favoriteList={favoriteList} toggleFavorite={toggleFavorite}  />
          </Col>
        )
      })}
    </Row>
  )
}

export default ListSuperHeros
