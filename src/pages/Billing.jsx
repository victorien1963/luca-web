import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import {
  FormDialog,
  InfoDialog,
  Datatable,
  SearchBar,
  SelectBar,
  Progress,
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

  return (
    <Container fluid>
      <Row className="p-2">
        <h4>廣告帳戶管理</h4>
      </Row>
      <Row className="p-3">
        <Progress />
      </Row>
      <Row className="p-2">
        <Col xs="5">
          <SelectBar />
        </Col>
        <Col xs="5">
          <SearchBar />
        </Col>
        <Col xs="2">
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
        size="md"
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
