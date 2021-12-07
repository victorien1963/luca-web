import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { LoginForm, LinkBox, ListBox, ShowcaseCard } from '../components'
import addImg from './images/addaccount-img.png'
import mngImg from './images/mngaccount-img.png'
import anaImg from './images/analyze-img.png'

function Home() {
  const [auth, setauth] = useState(undefined)
  const fakeAuth = () => setauth({ name: 'RD' })
  const fakeGrids = [
    {
      title: '申請開戶',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
      (addImg),
      link: '/OpenAccount',
    },
    {
      title: '廣告帳戶管理',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
      (mngImg),
      link: '/Billing',
    },
    {
      title: '廣告投放與優化',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc:
      (anaImg),
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
                  title: 'Hi User, Welcome to LUCA! how’s ur morning? ',
                }}
              />
            </Col>
          </Row>
          <Row>
            {fakeGrids.map((grid) => (
              <Col className="home-content-cards p-1">
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
