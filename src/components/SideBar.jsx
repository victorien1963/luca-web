import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Offcanvas from 'react-bootstrap/Offcanvas'

function SideBar(props) {
  const { setting, show, handleSideBar } = props
  const { content, placement } = setting
  return (
    <Offcanvas
      show={show}
      placement={placement}
      onHide={handleSideBar}
      className="pt-5"
    >
      <Card bg="lucaLight" className="App-textLeft p-0">
        <Card.Body>
          <ListGroup variant="flush">
            {content.map((c, i) => (
              <ListGroup.Item key={i} active={false}>
                <Link
                  to={c.link}
                  onClick={handleSideBar}
                  className="App-notextDecoration text-black"
                >
                  {c.text}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Offcanvas>
  )
}

SideBar.propTypes = {
  show: PropTypes.bool,
  setting: PropTypes.shape(),
  handleSideBar: PropTypes.func.isRequired,
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
