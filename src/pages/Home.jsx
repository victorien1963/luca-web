import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {
  LinkBox,
  ListBox,
  Showcase,
  ShowcaseCard,
  Slide,
  StatisticBox,
  // AnnounceBar,
} from '../components'
import addImg from './images/addaccount-img.svg'
import mngImg from './images/mngaccount-img.svg'
import anaImg from './images/analyze-img.svg'

function Home(props) {
  const { auth } = props
  const fakeGrids = [
    {
      title: '申請開戶',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: addImg,
      link: '/OpenAccount',
      btnText: '前往開戶',
    },
    {
      title: '廣告帳戶管理',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: mngImg,
      link: '/Billing',
      btnText: '帳戶管理',
    },
    {
      title: '廣告投放與優化',
      content: '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
      imgSrc: anaImg,
      link: '/Accounts',
      btnText: '廣告管理',
    },
  ]
  return (
    <Container fluid>
      <Row>
        <Col xs="10">
          {/* <Row className="p-1">
            <AnnounceBar setting={{ content: 'Have some Announce?' }} />
          </Row> */}
          <Row>
            <Col className="p-1">
              <Slide />
            </Col>
          </Row>
          <Row className="home-content-cards p-2 ">
            <Showcase
              setting={{
                title: `${
                  auth.status === 'authed'
                    ? `H i ! ${auth.name} ，歡迎回到 L U C A，今天想做點什麼呢 ？`
                    : `H i ! 歡迎來到 L U C A，今天想做點什麼呢 ？`
                } `,
                titleEng: `${
                  auth.status === 'authed'
                    ? `H i ! ${auth.name}, how's today ? welcome back to L U C A，have you any plan ？`
                    : `H i ! welcome to L U C A，have you any plan ？`
                } `,
              }}
            >
              <Row>
                {fakeGrids.map((grid) => (
                  <Col className="home-function-cards p-4">
                    <ShowcaseCard setting={grid} />
                  </Col>
                ))}
              </Row>
            </Showcase>
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
                title: '活 動 預 告',
                titleEng: 'Upcoming Events',
                content: [
                  {
                    title: '潮網喬遷茶會',
                    content:
                      '潮網科技喬遷誌慶茶會 迎向 2022 New SaaS 數據驅動服務',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2021/11/%E5%90%88%E7%85%A7-1024x683.jpeg',
                    link: 'https://www.wavenet.com.tw/news/data-driven/',
                  },
                  {
                    title: 'PUNWAVE ORCA',
                    content:
                      '在 PUNWAVE 的技術架構下，Nautilus 報表系統承襲跨媒體的優勢。',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2021/10/%E5%88%8A%E9%A0%AD%E5%9C%96-min-1024x597.jpeg',
                    link: 'https://www.wavenet.com.tw/news/punwave-orca/',
                  },
                  {
                    title: '講座報導',
                    content:
                      '【講座報導】疫代宗師行銷戰疫-潮網數位媒體廣告秘笈大解析',
                    imgSrc:
                      'https://www.wavenet.com.tw/wp-content/uploads/2021/09/1200x700-%E6%96%87%E7%AB%A0%E5%88%8A%E9%A0%AD%E5%9C%96%E7%B5%B1%E4%B8%80%E5%B0%BA%E5%AF%B8.001-min-1-1024x597.jpeg',
                    link: 'https://www.wavenet.com.tw/news/digital-media/',
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

Home.propTypes = {
  auth: PropTypes.shape().isRequired,
}

export default Home
