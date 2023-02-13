import { ref, update } from 'firebase/database'
import React, { useState } from 'react'
import { Button, Input, Message, Stack, useToaster } from 'rsuite'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import StackItem from 'rsuite/esm/Stack/StackItem'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { database } from '../../../../../../../firebase'
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../../../../theme/vanumoTheme'

const VProjectEditFormLeftSide = ({project, span} : {project: FirebaseBundle, span: number}) => {
  const toaster = useToaster()
  const [name, setName] = useState<string>(project.name!)
  const [intro, setIntro] = useState<string>(project.intro!)
  const [description, setDescription] = useState<string>(project.description!)
  const [startDate, setStartDate] = useState<string>(project.startDate!)
  const [endDate, setEndDate] = useState<string>(project.endDate!)
  const [publication, setPublication] = useState<string>(project.publication!)
  const [resetting, setResetting] = useState<boolean>(false)
  const theSame =
  name == project.name && intro == project.intro && description == project.description &&
  startDate == project.startDate && endDate == project.endDate && publication == project.publication

  const resetValues = () => {
    setResetting(true)
    setName(project.name!)
    setIntro(project.intro!)
    setDescription(project.description!)
    setStartDate(project.startDate!)
    setEndDate(project.endDate!)
    setPublication(project.publication!)
    setResetting(false)
  }

  const updateInfo = async () => {
    const reference = ref(database, 'projects/' + project.id!)
    let updates: any = {}
    updates['name'] = name
    updates['intro'] = intro
    updates['description'] = description
    updates['startDate'] = new Date(startDate).toDateString()
    updates['endDate'] = new Date(endDate).toDateString()
    updates['publication'] = publication
    await update(reference, updates).then(() => {
      toaster.push(
        <Message type='success' style={styles.succes}>
          <span style={styles.msgInner}>Project was updated succesfully</span>
        </Message>, {placement: 'bottomCenter'}
      )
    }).catch((err) => {
      toaster.push(
        <Message type='error' style={styles.error}>
          <span style={styles.msgInner}>{err.message}</span>
        </Message>, {placement: 'bottomCenter'}
      )
    }).finally(() => {
      window.setTimeout(() => {
        toaster.clear()
      }, 8000)
    })
  }
  return (
    <FlexboxGridItem colspan={span}>
      <div className='edit-wrap-left'>
      <Stack className='edit-item' spacing={6}>
        <p className='edit-label'>Name:</p>
        <StackItem basis={300}>
          <Input defaultValue={name} value={resetting ? project.name : name} onChange={setName} />
        </StackItem>
      </Stack>
      <Stack className='edit-item' spacing={6}>
        <p className='edit-label'>Intro:</p>
        <StackItem basis={300}>
          <Input defaultValue={intro} value={resetting ? project.intro : intro} onChange={setIntro} />
        </StackItem>
      </Stack>
      <Stack className='edit-item' spacing={8}>
        <p className='edit-label'>Description:</p>
        <StackItem basis={300}>
        <Input as="textarea" rows={3}
        value={resetting ? project.description : description}
        defaultValue={description}
        onChange={setDescription} />
        </StackItem>
      </Stack>
      <Stack className='edit-item' spacing={6}>
        <p className='edit-label'>Start date:</p>
        <StackItem basis={300}>
          <Input
          value={resetting ? project.startDate : startDate}
          defaultValue={startDate}
          onChange={setStartDate} />
        </StackItem>
        <p>Format: yyyy-MM-dd</p>
      </Stack>
      <Stack className='edit-item' spacing={6}>
        <p className='edit-label'>End date:</p>
        <StackItem basis={300}>
          <Input
          value={resetting ? project.endDate : endDate}
          defaultValue={endDate}
          onChange={setEndDate} />
        </StackItem>
        <p>Format: yyyy-MM-dd</p>
      </Stack>
      <Stack className='edit-item' spacing={6}>
        <p className='edit-label'>Publication:</p>
        <StackItem basis={300}>
          <Input
          value={resetting ? project.publication : publication}
          defaultValue={publication}
          onChange={setPublication} />
        </StackItem>
        <p>
          Format: Months
        </p>
      </Stack>
    </div>
    <div className='txt-btns-wrap'>
        <Button
        appearance='primary'
        style={styles.saveBtn}
        disabled={theSame}
        onClick={updateInfo} >
          Save
        </Button>
        <Button
        appearance='primary'
        style={styles.resetBtn}
        onClick={resetValues}
        disabled={theSame}>
          Reset
        </Button>
      </div>
    </FlexboxGridItem>
  )
}
const styles = {
  saveBtn: {
    width: '50%',
    backgroundColor: vanumoColors.main,
    color: vanumoColors.white,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
  resetBtn: {
    width: '50%',
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    fontWeight: '700',
    boxShadow: '0 3px 6px 0 #a274ff3d',
  },
  succes: {
    backgroundColor: vanumoColors.main,
    color: mainColors.white,
  },
  error: {
    backgroundColor: mainColors.red,
    color: mainColors.white,
  },
  msgInner: {
    color: mainColors.white,
  }
}

export default VProjectEditFormLeftSide
