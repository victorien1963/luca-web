import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

function Loginform(props) {
  const { setting } = props
  const { fields, onDataChange } = setting
  return (
    <Form className="py-2">
      {fields.map((field) => (
        <Form.Group className="mb-3">
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            name={field.name}
            type={field.type}
            onChange={onDataChange}
            placeholder={field.placeholder}
          />
        </Form.Group>
      ))}
    </Form>
  )
}

Loginform.propTypes = {
  setting: PropTypes.shape(),
}

Loginform.defaultProps = {
  setting: {
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
    onDataChange: () => {},
  },
}

export default Loginform
