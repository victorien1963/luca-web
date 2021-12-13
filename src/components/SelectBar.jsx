import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'

function Searchbar(props) {
  const { setting } = props
  const { method, content } = setting
  return (
    <Form className="App-textLeft">
      <Form.Group className="mb-3">
        {/* <Form.Label>{title}</Form.Label> */}
        <Form.Select aria-label="Default select example" onChange={method}>
          {content.map((c, i) => (
            <option ket={i} value={c}>
              {c}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </Form>
  )
}

Searchbar.propTypes = {
  setting: PropTypes.shape(),
}

Searchbar.defaultProps = {
  setting: {
    title: '選擇廣告平台',
    method: () => {},
    content: ['Facebook', 'Google', 'Yahoo', 'Twitter'],
  },
}

export default Searchbar
