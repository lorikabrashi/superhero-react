import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'
import { logout } from '../../lib/store/slices/auth'
import { useDispatch } from 'react-redux'

const UserMenu = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="d-flex justify-content-between">
      <ul className={styles.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/superheros">Superheros</Link>
        </li>
        <li>
          <Link to="/user-profile">Profile</Link>
        </li>
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserMenu
