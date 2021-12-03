import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'

function LinkBox(props) {
  const { title, setting } = props
  // const { title, content, imgSrc, link } = setting
  return (
    <Card>
      <Card.Body>
        <Card.Title className="App-textLeft">{title}</Card.Title>
        {setting.map((set) => (
          <Card className="my-2">
            <Card.Body className="App-textLeft">
              <Card.Title>{set.title}</Card.Title>
              <Card.Img src={set.imgSrc} />
              <Card.Text>{set.content}</Card.Text>
            </Card.Body>
            {set.link && (
              <Card.Footer>
                <Card.Link href={set.link}>Link</Card.Link>
              </Card.Footer>
            )}
          </Card>
        ))}
      </Card.Body>
    </Card>
  )
}

LinkBox.propTypes = {
  title: PropTypes.string,
  setting: PropTypes.instanceOf(Array),
}

LinkBox.defaultProps = {
  title: '潮網案例',
  setting: [
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
}

export default LinkBox
