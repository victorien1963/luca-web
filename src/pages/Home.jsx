import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {
  LinkBox,
  ListBox,
  ShowcaseCard,
  Slide,
  StatisticBox,
  AnnounceBar,
} from '../components'
import addImg from './images/addaccount-img.png'
import mngImg from './images/mngaccount-img.png'
import anaImg from './images/analyze-img.png'

function Home() {
  const fakeGrids = [
    {
      title: '申請開戶',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: addImg,
      link: '/OpenAccount',
    },
    {
      title: '廣告帳戶管理',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: mngImg,
      link: '/Billing',
    },
    {
      title: '廣告投放與優化',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: anaImg,
      link: '/Accounts',
    },
  ]
  return (
    <Container fluid>
      <Row>
        <Col xs="10">
          <Row className="p-1">
            <AnnounceBar />
          </Row>
          <Row>
            <Col className="p-1">
              <Slide />
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
          </Row>
          <Row>
            <Col className="p-2">
              <StatisticBox />
            </Col>
          </Row>
        </Col>
        <Col xs="2" className="App-textSmall">
          <Row className="p-1">
            <ListBox />
          </Row>
          <Row className="p-1">
            <LinkBox
              setting={{
                title: '活動預告',
                content: [
                  {
                    title: '跨平台整合',
                    content:
                      '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
                    link: 'https://nautilus.punwave.com/',
                  },
                  {
                    title: '跨平台整合',
                    content:
                      '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
                    link: 'https://nautilus.punwave.com/',
                  },
                  {
                    title: '跨平台整合',
                    content:
                      '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
                    link: 'https://nautilus.punwave.com/',
                  },
                ],
              }}
            />
          </Row>
          <Row className="p-1">
            <LinkBox />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Home
