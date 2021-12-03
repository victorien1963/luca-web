import React from 'react'
import { Container, Row } from 'react-bootstrap'
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'

function Info() {
  const fakeUser = {
    name: 'Kevin Chang',
    phone: '02040204',
    cellphone: '0800080080',
    email: 'kevin.chang@wavenet.com.tw',
  }
  return (
    <Container fluid>
      <Row className="p-2 m-2">用戶資料</Row>
      {Object.keys(fakeUser).map((key) => (
        <Row className="p-2 m-2">{`${key}:${fakeUser[key]}`}</Row>
      ))}
    </Container>
  )
}

export default Info
