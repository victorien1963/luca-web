import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function Showcase(props) {
  const { children, setting } = props
  const { title } = setting
  const { titleEng } = setting
  return (
    <Card className="p-0">
      <Card.Body>
        {title && <Card.Title className="mb-0">{title}</Card.Title>}
        {titleEng && (
          <Card.Text className="App-textMid text-grey">{titleEng}</Card.Text>
        )}
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
    title: 'H i ! ， 歡迎來到 L U C A !',
  },
}

export default Showcase
