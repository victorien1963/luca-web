import React from 'react'
import PropTypes from 'prop-types'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

function Searchbar(props) {
  const { setting } = props
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder={setting.title}
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button
        variant="outline-secondary"
        id="button-addon2"
        onClick={setting.method}
      >
        {setting.action}
      </Button>
    </InputGroup>
  )
}

Searchbar.propTypes = {
  setting: PropTypes.shape(),
}

Searchbar.defaultProps = {
  setting: {
    title: '在這裡輸入...',
    action: '搜尋',
    method: () => {},
  },
}

export default Searchbar
