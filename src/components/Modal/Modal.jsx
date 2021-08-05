import React, { Component } from 'react'
import { Overlay, ModalWrapper, Img } from './Modal.style'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {
  static propTypes = {
    modalImage: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.props.onClose()
    }
  }

  onClickModalClose = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose()
    }
  }

  render() {
    return createPortal(
      <Overlay className="Overlay" onClick={this.onClickModalClose}>
        <ModalWrapper className="Modal">
          <Img src={this.props.modalImage} alt="" />
        </ModalWrapper>
      </Overlay>,
      modalRoot,
    )
  }
}
