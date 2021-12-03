import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function Form(props) {
  const [action, setAction] = useState('login')
  const { fakeAuth } = props
  return (
    <Card className="p-2">
      <Card.Title>{action === 'login' ? 'Login' : 'Register'}</Card.Title>
      <Card.Body>
        {action === 'login' && <LoginForm />}
        {action === 'register' && <RegisterForm />}
        <Button variant="primary" onClick={() => fakeAuth()}>
          {action === 'login' ? 'Login' : 'Register'}
        </Button>
      </Card.Body>
      <Card.Footer>
        <Button
          style={{ boxShadow: 'none' }}
          variant="link"
          onClick={() => setAction(action === 'login' ? 'register' : 'login')}
        >
          {action === 'login' ? 'Register now' : 'already have an account?'}
        </Button>
      </Card.Footer>
    </Card>
  )
}

Form.propTypes = {
  fakeAuth: PropTypes.func.isRequired,
}

export default Form
