import React from 'react'
import Back from '@rsuite/icons/ArrowLeftLine'
import { IconButton } from 'rsuite'

interface IProps {
  closeCheckout: any,
  en: boolean
}
const CloseCheckoutBtn = (props: IProps) => {
  const {closeCheckout, en} = props
  return (
    <IconButton icon={<Back/>} size='lg' className='go-back-from-checkoout-btn'
    circle onClick={closeCheckout} title={en ? 'Go back' : 'Zurück'} appearance='primary'/>
  )
}

export default CloseCheckoutBtn
