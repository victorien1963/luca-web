import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { AccountList } from '../components'

function Accounts() {
  return (
    <Container fluid>
      <Row>
        <AccountList
          setting={{
            title: '帳戶管理',
            content: [
              { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
              { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
              { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
              { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
            ],
          }}
        />
      </Row>
    </Container>
  )
}

export default Accounts
