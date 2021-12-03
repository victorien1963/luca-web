import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {
  FormDialog,
  // ShowcaseCard,
  InfoDialog,
  Datatable,
  SearchBar,
  SelectBar,
} from '../components'

function Billing() {
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

  // const fakeGrids = [
  //   {
  //     title: 'Facebook',
  //     content: '在社群網站上爭取大量曝光，取得最佳廣告成效',
  //     imgSrc:
  //       'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
  //     // link: '/OpenAccount?target=Facebook',
  //     method: handleShowForm,
  //   },
  //   {
  //     title: 'Yahoo',
  //     content: '在Yahoo服務秀出廣告，發現無限商機',
  //     imgSrc:
  //       'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
  //     // link: '/OpenAccount?target=Yahoo',
  //     method: handleShowForm,
  //   },
  //   {
  //     title: 'Google',
  //     content: '透過主流搜尋引擎和GDN聯播網精準鎖定客群',
  //     imgSrc:
  //       'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
  //     // link: '/OpenAccount?target=Google',
  //     method: handleShowForm,
  //   },
  //   {
  //     title: 'Twitter',
  //     content: '打入Twitter生活圈，發掘潛在客戶',
  //     imgSrc:
  //       'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
  //     // link: '/OpenAccount?target=Twitter',
  //     method: handleShowForm,
  //   },
  // ]
  // const target = new URL(window.location.href).searchParams.get('target')
  return (
    <Container fluid>
      <Row className="p-2">
        <h4>廣告帳戶管理</h4>
      </Row>
      <Row className="p-2">
        <Col xs="6">
          <SelectBar />
        </Col>
        {/* <Col xs="6">
          <ShowcaseCard
            setting={{
              title: 'Welcome to Wavenet',
            }}
          />
        </Col> */}
      </Row>
      <Row className="p-2">
        <Col xs="6">
          <SearchBar />
        </Col>
        <Col xs="6">
          <Button onClick={handleShowForm}>儲值</Button>
        </Col>
      </Row>
      <Row className="p-2">
        <Datatable />
      </Row>
      <hr />
      <Row className="p-2">
        <Col className="App-textLeft">
          <h5>儲值紀錄</h5>
        </Col>
      </Row>
      <Row className="p-2">
        <Datatable
          setting={{
            hasCheckBox: false,
            pageSize: 3,
            headers: ['日期', '狀態', '金額'],
            content: [
              { date: '2021/12/02', status: '未支付', amount: '$330' },
              { date: '2021/11/21', status: '已支付', amount: '$440' },
              { date: '2021/11/14', status: '已支付', amount: '$220' },
              { date: '2021/11/07', status: '已支付', amount: '$330' },
              { date: '2021/10/22', status: '已支付', amount: '$440' },
            ],
          }}
        />
      </Row>
      <FormDialog
        show={showForm}
        handleClose={handleCloseForm}
        setting={{
          imgSrc:
            'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
          content: [
            { name: '支付方式', type: 'select', value: '' },
            { name: '儲值金額', type: 'number', value: '' },
          ],
        }}
      />
      <InfoDialog show={showInfo} handleClose={handleCloseInfo} />
    </Container>
  )
}

export default Billing
