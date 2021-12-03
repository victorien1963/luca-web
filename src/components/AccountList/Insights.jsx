import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function Insights(props) {
  const { setting } = props
  const { title, content, imgSrc, link, method } = setting
  return (
    <Card className="p-0">
      {imgSrc && <Card.Img src={imgSrc} variant="top" />}
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      {link && (
        <Card.Footer>
          <Card.Link href={link}>Link</Card.Link>
        </Card.Footer>
      )}
      {method && (
        <Card.Footer>
          <Card.Link onClick={method}>method</Card.Link>
        </Card.Footer>
      )}
    </Card>
  )
}

Insights.propTypes = {
  setting: PropTypes.shape(),
}

Insights.defaultProps = {
  setting: {
    title: 'Nothing here',
    content: '',
  },
}

export default Insights
