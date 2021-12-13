import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import sendSuccessImg from './images/success-img2.svg'
// import Form from 'react-bootstrap/Form'

function InfoDialog(props) {
  const { show, handleClose, setting } = props
  const { imgSrc, content, contentEng } = setting
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body className="App-textCenter">
        <Image className="w-50 my-5" src={imgSrc} fluid />
        <h5>{content}</h5>
        <p>{contentEng}</p>
      </Modal.Body>

      <Modal.Footer className="justify-content-center m-2">
        <Button variant="luca" onClick={handleClose}>
          O K
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
    imgSrc: sendSuccessImg,
    content: '感謝您提出申請，完成後我們將主動通知您 ! ',
    contentEng: 'Thanks for your application, we’ll contact you soon ! ',
  },
}
export default InfoDialog
