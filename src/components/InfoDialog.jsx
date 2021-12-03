import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
// import Form from 'react-bootstrap/Form'

function InfoDialog(props) {
  const { show, handleClose, setting } = props
  const { imgSrc, content } = setting
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>
        <Image src={imgSrc} fluid />
        {content}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

InfoDialog.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  setting: PropTypes.shape(),
}

InfoDialog.defaultProps = {
  setting: {
    imgSrc:
      'https://www.wavenet.com.tw/wp-content/uploads/2020/01/Nautilus-%E5%84%AA%E5%8B%A2_%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%95%B4%E5%90%88-min.jpeg',
    content: '感謝您提出申請，完成後我們將主動通知',
  },
}
export default InfoDialog
