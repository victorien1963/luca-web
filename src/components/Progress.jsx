import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'

function Progress(props) {
  const { setting } = props
  const { title, titleEng, data } = setting
  return (
    <Card className="p-3 App-textLeft recharge-card">
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {titleEng && <Card.Text>{titleEng}</Card.Text>}
        <ProgressBar className="rounded-pill fs-5" style={{ height: '32px' }}>
          <ProgressBar
            variant="warning"
            animated
            now={(data.spend / data.total) * 100}
            label={`$${data.spend}`}
            key={1}
          />
          <ProgressBar
            className="bg-grey"
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
    title: '儲 值 金 額',
    titleEng: 'Total amount',
    data: { spend: 12000, total: 18000 },
  },
}

export default Progress
