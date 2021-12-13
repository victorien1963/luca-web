import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
  return (
    <Navbar bg="lucaMid" expand="lg">
      <Container className="justify-content-center text-light App-textMid">
        Copyright © 2021 Wavenet. all rights reserved.
      </Container>
    </Navbar>
  )
}

export default Footer
