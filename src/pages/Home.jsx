import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginForm, LinkBox, ListBox, ShowcaseCard } from '../components'

function Home() {
  const [auth, setauth] = useState(undefined)
  const fakeAuth = () => setauth({ name: 'RD' })
  const fakeGrids = [
    {
      title: '申請開戶',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
        'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
      link: '/OpenAccount',
    },
    {
      title: '廣告帳戶管理',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
        'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
      link: '/Billing',
    },
    {
      title: '廣告投放與優化',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
        'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
      link: '/Accounts',
    },
  ]
  return auth ? (
    <Container fluid>
      <Row>
        <Col xs="10">
          <Row>
            <Col className="p-1">
              <ShowcaseCard
                setting={{
                  imgSrc:
                    'https://www.wavenet.com.tw/wp-content/uploads/2021/11/首頁-Banner-Slider-1920x600.001-min.png',
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col className="p-2">
              <ShowcaseCard
                setting={{
                  title: 'Welcome to Wavenet',
                }}
              />
            </Col>
          </Row>
          <Row>
            {fakeGrids.map((grid) => (
              <Col className="p-1">
                <ShowcaseCard setting={grid} />
              </Col>
            ))}
            {/* <Col className="p-1">
              <ShowcaseCard />
            </Col>
            <Col className="p-1">
              <ShowcaseCard />
            </Col>
            <Col className="p-1">
              <ShowcaseCard />
            </Col> */}
          </Row>
        </Col>
        <Col xs="2">
          <Row className="p-1">
            <ListBox />
          </Row>
          <Row className="p-1">
            <LinkBox title="活動預告" />
          </Row>
          <Row className="p-1">
            <LinkBox />
          </Row>
        </Col>
      </Row>
    </Container>
  ) : (
    <LoginForm fakeAuth={fakeAuth} />
  )
}

export default Home
