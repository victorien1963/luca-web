import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import rechargeImg from './images/recharge-img.png'
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
      <Row className="p-2 mt-4">
        <h4>廣 告 帳 戶 管 理</h4>
        <p>Advertising account management</p>
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
          <Button variant="luca" onClick={handleShowForm}>
            儲 值
          </Button>
        </Col>
      </Row>
      <Row className="p-2">
        <Datatable />
      </Row>
      <hr />
      <Row className="p-2">
        <Col className="App-textLeft text-center">
          <h4 className="mb-0">儲 值 紀 錄</h4>
          <p>Recharge record</p>
        </Col>
      </Row>
      <Row className="p-2">
        <Datatable
          className="p-2"
          setting={{
            hasCheckBox: false,
            pageSize: 3,
            headers: ['日 期', '狀 態', '金 額'],
            content: [
              { date: '2021/12/02', status: '未 支 付', amount: '$ 330' },
              { date: '2021/11/21', status: '已 支 付', amount: '$ 440' },
              { date: '2021/11/14', status: '已 支 付', amount: '$ 220' },
              { date: '2021/11/07', status: '已 支 付', amount: '$ 330' },
              { date: '2021/10/22', status: '已 支 付', amount: '$ 440' },
            ],
          }}
        />
      </Row>
      <FormDialog
        size="md"
        show={showForm}
        handleClose={handleCloseForm}
        setting={{
          imgSrc: rechargeImg,
          content: [
            { name: '支 付 方 式', type: 'select', value: '' },
            { name: '儲 值 金 額', type: 'number', value: '' },
          ],
        }}
      />
      <InfoDialog show={showInfo} handleClose={handleCloseInfo} />
    </Container>
  )
}

export default Billing
