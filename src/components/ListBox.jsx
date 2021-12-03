import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

function ListBox(props) {
  const { setting } = props
  const { title, content } = setting
  return (
    <Card className="App-textLeft">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <ListGroup variant="flush">
          {content.map((c) => (
            <ListGroup.Item as="a" active={false} href={c.link}>
              {c.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

ListBox.propTypes = {
  setting: PropTypes.shape(),
}

ListBox.defaultProps = {
  setting: {
    title: '公告欄',
    content: [
      { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
      { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
      { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
      { text: 'nautilus', link: 'https://nautilus.punwave.com/' },
    ],
  },
}

export default ListBox
