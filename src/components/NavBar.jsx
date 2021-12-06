import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar(props) {
  const { setting } = props
  const { auth, handleLoginShow, handleLogOut } = setting
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Navbar.Brand>PUNWAVE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {auth.status === 'authed' ? (
              <NavDropdown title={auth.name} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link
                    to="/Info"
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    會員中心
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogOut}>登出</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={handleLoginShow}>登入</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
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
