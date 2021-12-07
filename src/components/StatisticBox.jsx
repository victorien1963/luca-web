import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function StatisticBox(props) {
  const { setting } = props
  const { title, content, link, method } = setting
  return (
    <Card className="p-0">
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

StatisticBox.propTypes = {
  setting: PropTypes.shape(),
}

StatisticBox.defaultProps = {
  setting: {
    title: '跨平台整合',
    content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
  },
}

export default StatisticBox
