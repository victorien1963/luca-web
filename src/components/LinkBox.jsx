import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'

function LinkBox(props) {
  const { setting } = props
  const { title, content } = setting
  return (
    <Card className="p-0">
      <Card.Body>
        <Card.Title className="App-textLeft">{title}</Card.Title>
        <hr />
        {content.map((c, i) => (
          <Card key={i} className="my-2 py-3">
            <Card.Img src={c.imgSrc} alt="Card image" />
            <Card.ImgOverlay className="d-flex App-blackPanel">
              {/* <Card.Title>{c.title}</Card.Title> */}
              <div className="d-flex align-items-end App-textLeft p-1">
                <Card.Link
                  href={c.link}
                  className="text-white App-textEllipsis App-notextDecoration"
                >
                  {c.content}
                </Card.Link>
              </div>
            </Card.ImgOverlay>
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
