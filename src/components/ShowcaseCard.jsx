import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function ShowcaseCard(props) {
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

ShowcaseCard.propTypes = {
  setting: PropTypes.shape(),
}

ShowcaseCard.defaultProps = {
  setting: {
    title: '跨平台整合',
    content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
    imgSrc:
      'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
    link: 'https://nautilus.punwave.com/',
  },
}

export default ShowcaseCard