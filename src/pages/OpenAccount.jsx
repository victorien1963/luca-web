import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { FormDialog, InfoDialog, ShowcaseCard } from '../components'
import FacebookImg from './images/acc-facebook.png'
import YahooImg from './images/acc-yahoo.png'
import TwitterImg from './images/acc-twitter.png'
import GoogleImg from './images/acc-google.png'

function OpenAccount() {
  const [showInfo, setshowInfo] = useState(false)
  const handleShowInfo = () => setshowInfo(true)
  const handleCloseInfo = () => {
    setshowInfo(false)
  }
  const [showForm, setshowForm] = useState(false)
  const handleShowForm = () => setshowForm(true)
  const handleCloseForm = (value) => {
    setshowForm(false)
    if (value) handleShowInfo(true)
  }

  const fakeGrids = [
    {
      title: 'Facebook',
      content: '在社群網站上爭取大量曝光，取得最佳廣告成效',
      imgSrc: FacebookImg,
      // link: '/OpenAccount?target=Facebook',
      method: handleShowForm,
    },
    {
      title: 'Yahoo',
      content: '在Yahoo服務秀出廣告，發現無限商機',
      imgSrc: YahooImg,
      // link: '/OpenAccount?target=Yahoo',
      method: handleShowForm,
    },
    {
      title: 'Google',
      content: '透過主流搜尋引擎和GDN聯播網精準鎖定客群',
      imgSrc: GoogleImg,
      // link: '/OpenAccount?target=Google',
      method: handleShowForm,
    },
    {
      title: 'Twitter',
      content: '打入Twitter生活圈，發掘潛在客戶',
      imgSrc: TwitterImg,
      // link: '/OpenAccount?target=Twitter',
      method: handleShowForm,
    },
  ]
  // const target = new URL(window.location.href).searchParams.get('target')
  return (
    <Container fluid>
      <Row className="p-2">
        <h4>申請開戶</h4>
      </Row>
      <Row>
        {fakeGrids.map((grid) => (
          <Col key={grid.title} xs={3} className="p-2">
            <ShowcaseCard setting={grid} />
          </Col>
        ))}
      </Row>
      <FormDialog
        show={showForm}
        handleClose={handleCloseForm}
        setting={{
          size: 'xl',
          title: '申請廣告帳戶',
          content: [
            { name: '用戶名稱', type: 'fixed', value: 'Kevin' },
            { name: '帳戶名稱', type: 'text', value: '' },
            { name: '公司統編', type: 'text', value: '' },
            { name: '電子信箱', type: 'email', value: '' },
          ],
        }}
      />
      <InfoDialog show={showInfo} handleClose={handleCloseInfo} />
    </Container>
  )
}

export default OpenAccount
