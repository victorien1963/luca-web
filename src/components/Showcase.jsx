import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function Showcase(props) {
  const { children, setting } = props
  const { title } = setting
  return (
    <Card className="p-0">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {children}
      </Card.Body>
    </Card>
  )
}

Showcase.propTypes = {
  setting: PropTypes.shape(),
  children: PropTypes.instanceOf(Object).isRequired,
}

Showcase.defaultProps = {
  setting: {
    title: 'Hi User, Welcome to LUCA! how’s ur morning?',
  },
}

export default Showcase
