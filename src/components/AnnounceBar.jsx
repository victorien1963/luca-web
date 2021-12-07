import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function AnnounceBar(props) {
  const { setting } = props
  const { content } = setting
  return (
    <Card className="pl-2 App-textLeft">
      <Card.Text>{content}</Card.Text>
    </Card>
  )
}

AnnounceBar.propTypes = {
  setting: PropTypes.shape(),
}

AnnounceBar.defaultProps = {
  setting: {
    content: '霹靂卡霹靂啪啦 波波莉娜貝貝魯多',
  },
}

export default AnnounceBar
