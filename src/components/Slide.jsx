import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Carousel from 'react-bootstrap/Carousel'

function Slide(props) {
  const { setting } = props
  const { interval, content } = setting
  return (
    <Card className="p-0">
      <Carousel>
        {content.map((c, i) => (
          <Carousel.Item key={i} interval={interval}>
            <img className="d-block w-100" src={c.imgSrc} alt={c.label} />
            <Carousel.Caption>
              <h3>{c.label}</h3>
              <p>{c.content}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Card>
  )
}

Slide.propTypes = {
  setting: PropTypes.shape(),
}

Slide.defaultProps = {
  setting: {
    interval: 6000,
    content: [
      {
        label: '2022潮網 New SaaS 數據驅動服務',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/11/首頁-Banner-Slider-1920x600.001-min.png',
      },
      {
        label: '對抗演算法!降觸及也不怕的互動攻略',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/11/首頁-Banner-Slider-1920x600.001-min.png',
      },
      {
        label: 'T潮網數據洞察平台協助企業挖掘商機',
        content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
        imgSrc:
          'https://www.wavenet.com.tw/wp-content/uploads/2021/11/首頁-Banner-Slider-1920x600.001-min.png',
      },
    ],
  },
}

export default Slide
