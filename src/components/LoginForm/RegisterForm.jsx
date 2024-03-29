import React from 'react'
// import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function RegisterForm() {
  return (
    <Form className="py-2">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      {/* <Button variant="luca" type="submit">
        Register
      </Button> */}
    </Form>
  )
}

export default RegisterForm
