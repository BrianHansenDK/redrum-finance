import React from 'react'
import Pencil from '@rsuite/icons/legacy/Pencil'
import XIcon from '@rsuite/icons/Close'
import { Button, IconButton } from 'rsuite'

interface IProps {
  editing: boolean,
  startEditing: any,
  finishEditing: any,
}
const EditSharesBtn = (props: IProps) => {
  const {editing, startEditing, finishEditing} = props;
  return (
    <>
      {editing ? (
        <IconButton icon={<XIcon/>} circle size='lg'
        onClick={finishEditing} className='edit-shares-icon'/>)
       : (
        <IconButton icon={<Pencil/>} circle size='lg'
        onClick={startEditing} className='edit-shares-icon'/>
      )}
    </>
  )
}

export default EditSharesBtn
