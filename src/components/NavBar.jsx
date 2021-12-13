import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import SideBar from './SideBar'
// import homeLogo from './images/react-brands.svg'
import lucaLogo from './images/luca-logo.png'
import userIcon from './images/user-solid.svg'
import bellIcon from './images/bell-solid.svg'

function NavBar() {
  const [show, setshow] = useState(false)
  const handleSideBar = () => setshow(!show)
  return (
    <>
      <Navbar
        bg="luca"
        expand="lg"
        sticky="top"
        // className="position-fixed w-100"
        style={{ zIndex: '1500' }}
      >
        <Container>
          <Navbar.Brand className="text-white" href="/">
            <img
              src={lucaLogo}
              width="110"
              className="d-inline-block align-top me-2"
              alt="logo"
            />
          </Navbar.Brand>

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
                <NavDropdown
                  title={<img src={userIcon} alt="User" />}
                  id="nav-dropdown-user"
                >
                  <NavDropdown.Item href="/Info">會員中心</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/">登出</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            <Nav.Link
              onClick={handleSideBar}
              className="App-notextDecoration text-white"
            >
              ☰
            </Nav.Link>
          </div>
        </Container>
      </Navbar>
      <SideBar show={show} handleSideBar={handleSideBar} />
    </>
  )
}

export default NavBar
