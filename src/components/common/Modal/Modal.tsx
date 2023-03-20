import React from 'react'

import { useRecoilValue, useSetRecoilState } from 'recoil'
import { menuOpenState } from 'states/menuOpenState'

import * as S from './styles'

interface DimmedModalPropsType {
  className: string
  onClose: (e: Event) => void
  maskClosable: boolean
  closable: boolean
  visible: boolean
  children: React.ReactNode
}
const Modal = ({
  className,
  onClose,
  maskClosable = true,
  closable = true,
  visible = false,
  children,
}: DimmedModalPropsType) => {
  const state = useRecoilValue<boolean>(menuOpenState)
  const setState = useSetRecoilState(menuOpenState)

  const onMaskClick = (e: Event) => {
    if (e.target === e.currentTarget) {
      setState((oldValue: boolean) => !oldValue)
    }
  }

  const close = (e: Event) => {
    if (onClose) {
      onClose(e)
    }
  }

  return (
    <>
      <S.ModalOverlay visible={state} />
      <S.ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        visible={state}
      >
        <S.ModalInner className="modal-inner">{children}</S.ModalInner>
      </S.ModalWrapper>
    </>
  )
}

export default Modal
