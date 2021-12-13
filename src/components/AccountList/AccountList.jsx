import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import AdsManager from './AdsManager'
import Insights from './Insights'

function AccountList(props) {
  const { setting } = props
  const { title, content } = setting
  const [selectedAccount, setselectedAccount] = useState(null)
  return (
    <Card className="App-textLeft">
      <Card.Body>
        {selectedAccount === null && (
          <>
            <Card.Title>{title}</Card.Title>
            <ListGroup variant="flush">
              {content.map((c) => (
                <ListGroup.Item
                  as="a"
                  active={false}
                  onClick={() => setselectedAccount(c.text)}
                >
                  {c.text}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
        {selectedAccount !== null && (
          <Tabs
            defaultActiveKey="insights"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="adsManager" title="AdsManager">
              <AdsManager />
            </Tab>
            <Tab eventKey="insights" title="Insights">
              <Insights />
            </Tab>
          </Tabs>
        )}
      </Card.Body>
    </Card>
  )
}

AccountList.propTypes = {
  setting: PropTypes.shape(),
}

AccountList.defaultProps = {
  setting: {
    title: '公告欄',
    content: [
      { text: 'New! 系統更新公告', link: 'https://nautilus.punwave.com/' },
      { text: '系統更新公告v3.1', link: 'https://nautilus.punwave.com/' },
      { text: '系統更新公告v3.0', link: 'https://nautilus.punwave.com/' },
      { text: '系統更新公告v2.9', link: 'https://nautilus.punwave.com/' },
    ],
  },
}

export default AccountList
