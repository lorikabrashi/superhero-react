import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MENU_TYPES } from '../lib/constants'
import ExposedMenu from '../Components/Menus/ExposedMenu'
import AdminMenu from '../Components/Menus/AdminMenu'
import UserMenu from '../Components/Menus/UserMenu'
import Footer from '../Components/Footer/Footer'
import styles from '../Components/Menus/Menu.module.scss'

import { useSelector } from 'react-redux'

const withMenu = (PageComponent, menuType) => {
  return (props) => {
    const authData = useSelector((state) => state.auth.data)
    let type = <ExposedMenu />
    if (authData) {
      type = authData.role === 'ADMIN' ? <AdminMenu /> : <UserMenu />
    }
    return (
      <>
        <div className={styles.menuWrapper}>
          <Container>
            <Row>
              <Col>{menuType === MENU_TYPES.dynamic ? type : menuType === MENU_TYPES.exposed ? <ExposedMenu /> : menuType === MENU_TYPES.admin ? <AdminMenu /> : <UserMenu />}</Col>
            </Row>
          </Container>
        </div>

        <PageComponent {...props} />
        <Footer />
      </>
    )
  }
}

export default withMenu
