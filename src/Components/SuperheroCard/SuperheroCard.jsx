import React, { useEffect } from 'react'
import styles from './SuperheroCard.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regFaHeart } from '@fortawesome/free-regular-svg-icons'

const ListItem = ({ data, title }) => {
  return (
    <div>
      <h5>{title}</h5>
      <ul>
        {Object.keys(data).map((elem, i) => (
          <li key={i}>
            <span className={styles.key}>{elem}</span>: {data[elem] ? data[elem] : 'No data'}
          </li>
        ))}
      </ul>
    </div>
  )
}

const SuperheroCard = ({ data, favoriteList, toggleFavorite }) => {
  
  const handleFavoriteClick = (e) => {
    toggleFavorite(data._id)
  }

  return (
    <div className={styles.card}>
      <figure>
        <img src={data.images} alt="superhero" />
      </figure>
      <div className={`${styles.titleWrapper} d-flex justify-content-between`}>
        <h2 className={styles.name}>{data.name}</h2>

        <FontAwesomeIcon size="lg" icon={favoriteList.includes(data._id) ? faHeart : regFaHeart} onClick={handleFavoriteClick} />
      </div>

      <h4>Publisher: {data.publisher}</h4>
      <ListItem data={data.appearance} title="Appearance" />
      <ListItem data={data.biography} title="Biography" />
      <ListItem data={data.powerstats} title="Power Stats" />
    </div>
  )
}

export default SuperheroCard
