import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

function FormDialog(props) {
  const { show, handleClose, setting } = props
  const { imgSrc, title, content } = setting
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header>
        {imgSrc && <Image src={imgSrc} fluid />}
        {title && <Modal.Title>{title}</Modal.Title>}
      </Modal.Header>

      <Modal.Body>
        <Form className="p-3">
          {content.map((c) => (
            <Form.Group key={c.name} className="mb-3">
              {c.type === 'fixed' ? (
                `${c.name}: ${c.value}`
              ) : (
                <>
                  <Form.Label>{c.name}</Form.Label>
                  <Form.Control type={c.type} placeholder={c.name} />
                </>
              )}
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => handleClose(setting.content)}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

FormDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setting: PropTypes.shape(),
}

FormDialog.defaultProps = {
  setting: {
    title: '申請廣告帳戶',
    content: [
      { name: '用戶名稱', type: 'fixed', value: 'Kevin' },
      { name: '帳戶名稱', type: 'text', value: '' },
      { name: '公司統編', type: 'text', value: '' },
      { name: '電子信箱', type: 'email', value: '' },
    ],
  },
}
export default FormDialog
