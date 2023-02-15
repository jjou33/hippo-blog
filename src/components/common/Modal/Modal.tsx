import React from 'react'
import * as S from './styles'
const Modal = ({
  className,
  onClose,
  maskClosable = true,
  closable = true,
  visible = false,
  children,
}: any) => {
  const onMaskClick = e => {
    if (e.target === e.currentTarget) {
      onClose(e)
    }
  }

  const close = e => {
    if (onClose) {
      onClose(e)
    }
  }

  return (
    <>
      <S.ModalOverlay visible={visible} />
      <S.ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <S.ModalInner tabIndex="0" className="modal-inner">
          {closable && (
            <S.CloseButton className="modal-close" onClick={close}>
              Close
            </S.CloseButton>
          )}
          {children}
        </S.ModalInner>
      </S.ModalWrapper>
    </>
  )
}

export default Modal
