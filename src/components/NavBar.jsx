import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import homeLogo from './images/react-brands.svg'
import userIcon from './images/user-solid.svg'
import bellIcon from './images/bell-solid.svg'

function NavBar(props) {
  const { setting } = props
  const { auth, handleLoginShow, handleLogOut } = setting
  return (
    <Navbar bg="luca" expand="lg">
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand className="text-white">
            <img
              src={homeLogo}
              width="30"
              height="30"
              className="d-inline-block align-top me-2"
              alt="logo"
            />
            L U C A
          </Navbar.Brand>
        </Link>
        <div className="ms-auto d-flex">
          {/* Bell */}
          <Navbar.Toggle aria-controls="navbar-nav-bell" />
          <Navbar.Collapse id="navbar-nav-bell">
            <Nav className="nav-icons ms-auto">
              <NavDropdown
                title={<img src={bellIcon} alt="User" />}
                id="nav-dropdown-bell"
              >
                <NavDropdown.Item>系統通知示意</NavDropdown.Item>
                <NavDropdown.Item>系統通知示意</NavDropdown.Item>
                <NavDropdown.Item>系統通知示意</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          {/* User */}
          <Navbar.Toggle aria-controls="navbar-nav-user" />
          <Navbar.Collapse id="navbar-nav-user">
            <Nav className="nav-icons ms-auto">
              {auth.status === 'authed' ? (
                <NavDropdown
                  title={<img src={userIcon} alt="User" />}
                  id="nav-dropdown-user"
                >
                  <NavDropdown.Item href="/Info">會員中心</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogOut}>
                    登出
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link onClick={handleLoginShow}>登入</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  )
}

NavBar.propTypes = {
  setting: PropTypes.shape(),
}

NavBar.defaultProps = {
  setting: {
    auth: { status: 'authed', name: 'RD' },
    handleLoginShow: () => {},
  },
}

export default NavBar
