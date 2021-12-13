import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

function FormDialog(props) {
  const { show, handleClose, setting } = props
  const { imgSrc, title, titleEng, content, size } = setting
  return (
    <Modal size={size} show={show} onHide={() => handleClose()}>
      <Modal.Header className="AccFormModal justify-content-center text-center">
        {imgSrc && <Image src={imgSrc} fluid />}
        {title && (
          <Modal.Title>
            <h4>{title}</h4>
            <p>{titleEng}</p>
          </Modal.Title>
        )}
      </Modal.Header>

      <Modal.Body>
        <Form className="px-5 py-3 Form-card">
          {content.map((c) => (
            <Form.Group key={c.name} className="mb-3 px-5 lh-md">
              {c.type === 'fixed' ? (
                `${c.name} ： ${c.value}`
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

      <Modal.Footer className="justify-content-center">
        <Button variant="secondary" onClick={() => handleClose()}>
          取 消
        </Button>
        <Button variant="luca" onClick={() => handleClose(setting.content)}>
          送 出
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
    titleEng: 'Open the advertising account',
    content: [
      { name: '用戶名稱', type: 'fixed', value: 'Kevin' },
      { name: '帳戶名稱', type: 'text', value: '' },
      { name: '公司統編', type: 'text', value: '' },
      { name: '電子信箱', type: 'email', value: '' },
    ],
  },
}
export default FormDialog
