import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
const ExposedMenu = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  )
}

export default ExposedMenu
