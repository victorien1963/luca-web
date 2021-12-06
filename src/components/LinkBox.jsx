import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function LinkBox(props) {
  const { setting } = props
  const { title, content } = setting
  return (
    <Card>
      <Card.Body>
        <Card.Title className="App-textLeft">{title}</Card.Title>
        {content.map((c, i) => (
          <Card key={i} className="my-2">
            <Card.Body className="App-textLeft">
              <Card.Title>{c.title}</Card.Title>
              <Card.Img src={c.imgSrc} />
              <Card.Text>{c.content}</Card.Text>
            </Card.Body>
            {c.link && (
              <Card.Footer>
                <Card.Link href={c.link}>Link</Card.Link>
              </Card.Footer>
            )}
          </Card>
        ))}
      </Card.Body>
    </Card>
  )
}

LinkBox.propTypes = {
  setting: PropTypes.shape(),
}

LinkBox.defaultProps = {
  setting: {
    title: '潮網案例',
    content: [
      {
        title: '跨平台整合',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
        link: 'https://nautilus.punwave.com/',
      },
      {
        title: '跨平台整合',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
        link: 'https://nautilus.punwave.com/',
      },
      {
        title: '跨平台整合',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
        link: 'https://nautilus.punwave.com/',
      },
    ],
  },
}

export default LinkBox
