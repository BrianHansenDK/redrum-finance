import { ref, update } from 'firebase/database'
import React, { useState } from 'react'
import { Button, Message, Slider, useToaster } from 'rsuite'
import { FirebaseBundle } from '../../../../../../../database/Objects'
import { database } from '../../../../../../../firebase'
import { numberWithCommas } from '../../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../../../../theme/vanumoTheme'

const VanumoNumbersSliderCard = ({project} : {project: FirebaseBundle}) => {
  const toaster = useToaster()
  const [goal, setGoal] = useState<number>(project.goal!)
  const [value, setValue] = useState<number>(project.value!)
  const [resetting, setResetting] = useState<boolean>(false)

  const resetValues = () => {
    setResetting(true)
    setGoal(project.goal!)
    setValue(project.value!)
    setResetting(false)
  }

  const updateProjectNumbers = () => {
    const reference = ref(database, 'projects/' + project.id!)
    const updates: any = {}
    updates['goal'] = goal
    updates['value'] = value
    update(reference, updates).then(() => {
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
    <div className="numbers-card">
      <p>
        Numbers in the project
      </p>
      <div className='info-line'>
        <p>Already invested</p> <p className='info-number'>{numberWithCommas(project.currentlyInvested!)}€</p>
      </div>
      <div className='info-line mt-1'>
        <p>Project goal:</p> <p className='info-number'>{numberWithCommas(goal)}€</p>
      </div>
      <Slider progress value={resetting ? project.goal! : goal}
      defaultValue={project.goal!} max={project.goal! * 2} step={100} onChange={setGoal} />
      <div className='info-line mt-1'>
        <p>Project Value:</p> <p className='info-number'>{numberWithCommas(value)}€</p>
      </div>
      <Slider progress value={resetting ? project.value! : value}
      defaultValue={project.value!} max={project.value! * 2} step={100} onChange={setValue} />
      <div className='numbers-btns-wrap'>
        <Button
        appearance='primary'
        style={styles.saveBtn}
        disabled={goal == project.goal! && value == project.value!}
        onClick={updateProjectNumbers} >
          Save
        </Button>
        <Button
        appearance='primary'
        style={styles.resetBtn}
        onClick={resetValues}
        disabled={goal == project.goal! && value == project.value!}>
          Reset
        </Button>
      </div>

    </div>
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

export default VanumoNumbersSliderCard
