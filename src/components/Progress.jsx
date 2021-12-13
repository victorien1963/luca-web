import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress(props) {
  const { setting } = props
  const { title, data } = setting
  return (
    <Card className="p-0 App-textLeft">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <ProgressBar className="rounded-pill" style={{ height: '32px' }}>
          <ProgressBar
            animated
            now={(data.spend / data.total) * 100}
            label={`$${data.spend}`}
            key={1}
          />
          <ProgressBar
            variant="light"
            now={100 - (data.spend / data.total) * 100}
            label={`$${data.total}`}
            key={1}
          />
        </ProgressBar>
        {/* <Card.Text>{`已花費:$${data.spend} / 已儲值:$${data.total}`}</Card.Text> */}
      </Card.Body>
    </Card>
  )
}

Progress.propTypes = {
  setting: PropTypes.shape(),
}

Progress.defaultProps = {
  setting: {
    title: '儲值金額',
    data: { spend: 12334, total: 18000 },
  },
}

export default Progress
