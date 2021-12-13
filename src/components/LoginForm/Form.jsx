import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

function Form(props) {
  const [action, setAction] = useState('login')
  const { show, handleClose } = props
  // const fakeAuth = { status: 'authed', name: 'RD' }
  const [data, setdata] = useState({ email: '', password: '' })
  const onDataChange = (event) => {
    setdata({ ...data, [event.target.name]: event.target.value })
  }
  return (
    <Modal show={show} onHide={() => handleClose()} className="p-2">
      <Modal.Body>
        <Modal.Title>{action === 'login' ? 'Login' : 'Register'}</Modal.Title>
        {action === 'login' && (
          <LoginForm
            setting={{
              fields: [
                {
                  label: 'Email address',
                  name: 'email',
                  type: 'email',
                  placeholder: 'Enter Email...',
                },
                {
                  label: 'Password',
                  name: 'password',
                  type: 'password',
                  placeholder: 'Enter Password...',
                },
              ],
              onDataChange,
            }}
          />
        )}
        {action === 'register' && (
          <RegisterForm
            setting={{
              fields: [
                {
                  label: 'Email address',
                  name: 'email',
                  type: 'email',
                  placeholder: 'Enter Email...',
                },
                {
                  label: 'Password',
                  name: 'password',
                  type: 'password',
                  placeholder: 'Enter Password...',
                },
              ],
              onDataChange,
            }}
          />
        )}
        <Button
          variant="luca"
          onClick={() => handleClose(data)}
          disabled={Object.keys(data).some((key) => data[key] === '')}
        >
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
