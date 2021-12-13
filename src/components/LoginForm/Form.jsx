import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function Form(props) {
  const [action, setAction] = useState('login')
  const { show, handleClose } = props
  const fakeAuth = { status: 'authed', name: 'RD' }
  return (
    <Modal show={show} onHide={() => handleClose()} className="p-2">
      <Modal.Body>
        <Modal.Title>{action === 'login' ? 'Login' : 'Register'}</Modal.Title>
        {action === 'login' && <LoginForm />}
        {action === 'register' && <RegisterForm />}
        <Button variant="luca" onClick={() => handleClose(fakeAuth)}>
          {action === 'login' ? 'Login' : 'Register'}
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ boxShadow: 'none' }}
          variant="link"
          onClick={() => setAction(action === 'login' ? 'register' : 'login')}
        >
          {action === 'login' ? 'Register now' : 'already have an account?'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

Form.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
}

export default Form
