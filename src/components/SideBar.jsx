import React from 'react'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function SideBar(props) {
  const { setting, show } = props
  const { content } = setting
  return (
    <Container
      className="h-100 p-0 position-fixed"
      style={{ zIndex: '5', top: 0, left: show ? 0 : '100%' }}
      fluid
    >
      <Row className="h-100 w-100 m-0 pt-5">
        <Col xs={10} />
        <Col xs={2} className="h-100 p-0" style={{ backgroundColor: 'white' }}>
          <Card bg="lucaLight" className="App-textLeft p-0">
            <Card.Body>
              <ListGroup variant="flush">
                {content.map((c, i) => (
                  <ListGroup.Item key={i} active={false}>
                    <Link
                      to={c.link}
                      className="App-notextDecoration text-black"
                    >
                      {c.text}
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

SideBar.propTypes = {
  show: PropTypes.bool,
  setting: PropTypes.shape(),
}

SideBar.defaultProps = {
  show: false,
  setting: {
    auth: { status: 'authed', name: 'RD' },
    placement: 'end',
    handleLoginShow: () => {},
    content: [
      { text: '申請開戶', link: '/OpenAccount' },
      { text: '帳戶管理', link: '/Billing' },
      { text: '廣告管理', link: '/Accounts' },
      { text: '會員中心', link: '/Info' },
      { text: '工作人員', link: '/Users' },
    ],
  },
}

export default SideBar
