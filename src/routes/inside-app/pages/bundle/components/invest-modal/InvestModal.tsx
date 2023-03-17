import { ref, set, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import INVESTIMG from '../../../../../assets/investment_growth_icon.svg'
import { Button, ButtonGroup, Form, InputNumber, Message, Modal, useToaster, Toggle, Tooltip, Whisper } from 'rsuite'
import { auth, database, userRef } from '../../../../../../firebase'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import '../right/styles/invest-modal.scss'
import PushThemes from '../../../../themes/PushThemes'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
//import { mainColors } from '../../../../themes/colors'

interface IProps {
    project: any,
    close: any,
    visible: boolean,
    showReciept: any,
    en: boolean,
}

const InvestModal: React.FunctionComponent<IProps> = (props) => {
    const { project, close, visible, showReciept, en } = props
    const [investAmount, setInvestAmount] = useState<any>(0)
    const [available, setAvailable] = useState(0)
    const [focused, setFocused] = useState<boolean>(false)
    const [checked, setChecked] = useState(false);
    const emptyValue: Number|null = null
    const investmentId = Date.now()

    const isMobile = useMediaQuery('(max-width: 1100px)')

    useEffect(() => { userRef(auth.currentUser?.uid, '/money_available', setAvailable) }, [])

    const toaster = useToaster()
    const onInvest = () => {
        // If no amount is entered
        if (parseInt(investAmount) == 0 || investAmount == null || investAmount == '') {
            toaster.push(
                <Message style={PushThemes.pushRed} type='error'>
                  <p style={PushThemes.txt}> Please choose a valid amount. Cannot invest 0€ </p>
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 10000)
        }
        // Divisable by movies length
        if (parseInt(investAmount) % project.movies.length !== 0 && (parseInt(investAmount) !== null && parseInt(investAmount) !== 0 && investAmount !== '')) {
            toaster.push(
                <Message style={PushThemes.pushRed} type='error'>
                    <p style={PushThemes.txt}>Investment must have 0 remainders when divided by {project.movies.length}.
                    Possible solution {
                      [...Array(project.movies.length).keys()].map((x) => (
                        (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) !== 0 ? `${parseInt(investAmount) - x}€ or ${(parseInt(investAmount) - x) + project.movies.length}` : (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) == 0 && `${(parseInt(investAmount) - x) + project.movies.length}`
                      ))
                    }€</p>
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 10000)
        }

        // Must have anough money on account
        if (parseInt(investAmount) > available) {
            toaster.push(
                <Message style={PushThemes.pushRed} type='error'>
                    <p style={PushThemes.txt}>Not enough money in your account. Available: {available == null ? 0 : available}</p>
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 10000)
        }

        // Invest if user has enough money and amount is divisible by free
        if (parseInt(investAmount) % project.movies.length == 0 && parseInt(investAmount) <= available && parseInt(investAmount) !== 0) {
            const investRef = ref(database, 'investments/' + investmentId)
            // Make investment
            set(investRef, {
                id: investmentId,
                creator: auth.currentUser?.uid,
                amount: parseInt(investAmount),
                gain: parseInt(investAmount) * ((project.guaranteedReturn / 100) + 1),
                created_at: Date.now(),
                project: project.id,
                movies: project.movies,
            })
            // Update project
            let projectUpdates: any = {}
            projectUpdates['currentlyInvested'] = parseInt(investAmount) + project.currentlyInvested
            update(ref(database, 'projects/' + project.id), projectUpdates).then(() => {
                console.log(`${investAmount}€ was invested in ${project.name}!`)
            })
            // Update user
            let userUpdates: any = {}
            userUpdates['money_available'] = available - parseInt(investAmount)
            update(ref(database, 'users/' + auth.currentUser?.uid), userUpdates).then(() => {
                console.log(`${investAmount} invested in ${project.name}`)
            })
            // Create shares
            project.movies.forEach((movie: any) => {
                set(ref(database, 'shares/' + [Date.now(), movie].join('-')), {
                    id: [Date.now(), movie].join('-'),
                    owner: auth.currentUser?.uid,
                    amount: parseInt(investAmount) / project.movies.length,
                    movie: movie,
                    investment: investmentId,
                    project: project.id
                })
            })

            toaster.push(
                <Message style={PushThemes.pushGreen} type='success'>
                    <p style={PushThemes.txt}>You have invested {investAmount}€ in the project: {project.name}</p>
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 5000)
            close()
            showReciept()
        }
    }

    return (
      <>
        <Modal open={visible} onClose={close} size='full' id='invest-modal'>
            <Modal.Header>
                <Modal.Title className='title'>
                    {/*en ? 'You are investing in' : 'Ihr Investment in die'*/} <strong>{project.name}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='modal-body'>
              <h4 className="inner-title">
                {en ?
                'Please select your investment amount:' :
                'Bitte wählen Sie Ihren Investmentbetrag:'}
              </h4>
              <div className="options">
                <Button
                className={`option-btn ${investAmount == 250 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(250)
                }}
                >
                  250 €
                </Button>
                <Button
                className={`option-btn ${investAmount == 1000 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(1000)
                }}
                >
                  1.000 €
                </Button>
                <Button
                className={`option-btn ${investAmount == 2500 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(2500)
                }}
                >
                  2.500 €
                </Button>
                <Button
                className={`option-btn ${investAmount == 5000 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(5000)
                }}
                >
                  5.000 €
                </Button>
                <Button
                className={`option-btn ${investAmount == 10000 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(10000)
                }}
                >
                  10.000 €
                </Button>
                <InputNumber
                onClick={() => setFocused(true)}
                className={`option-btn ${focused ? 'active' : ''}`}
                placeholder={en ? 'Different amount' : 'Anderer Betrag'}
                onChange={setInvestAmount}
                value={!focused ? emptyValue : investAmount}
                />
              </div>
              <div className="accept">
                <Toggle
                checkedChildren={<CheckIcon />}
                unCheckedChildren={<CloseIcon />}
                checked={checked}
                onChange={() => setChecked(!checked)}
                />
                <p className="txt">
                  {en ?
                    'I agree with the investment conditions and confirm the reservation conditions.' :
                    'Ich bin mit den Investment-Konditionen einverstanden und bestätige die Reservierungsbedingungen.'
                  }
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <div className='btn-wrap'>
                  <Whisper
                  speaker={
                    <Tooltip>
                    {en ?
                      'You must agree to our terms and conditions before buying stocks.' :
                      'Sie müssen unseren Allgemeinen Geschäftsbedingungen zustimmen, bevor Sie Aktien kaufen.'
                    }
                    </Tooltip>
                  }
                  trigger={
                    isMobile && !checked ? 'active' :
                    checked ? 'none' :
                    'hover'}
                  placement={'top'}
                  >
                    <span className='btn-con'>
                    <Button
                    onClick={onInvest}
                    appearance='primary'
                    disabled={!checked}
                    style={{ pointerEvents: !checked ? 'none' : 'auto' }}
                    className='r-btn r-main-btn'>
                    {en ?
                    'Order with obligation to pay' :
                    'Jetzt Zahlungspflichtig bestellen'}
                    </Button>
                    </span>
                  </Whisper>
                    <Button
                    onClick={() => {
                      close()
                      setInvestAmount(0)
                      setChecked(false)
                    }}
                    appearance='primary'
                    className='r-btn r-secondary-btn'>
                        Cancel
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
        <div className="hidden-from-server This is the previous modal">
          <p>This element only exists to colabse a huge comment in vs-code</p>
        {/* Previous design
      <Modal open={visible} onClose={close}>
      <Modal.Header>
          <Modal.Title>
              Invest in {project.name}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body style={styles.body} className='flex-column'>
        <img className='mb-1' src={INVESTIMG} alt="Investments get split into multiple shares" width={250} height={250} />
        <p style={styles.info} className='text-center mb-2'>
          When you invest in a project, your investment will create seperate shares equal to the amount of movies/books/audio books in the current project.&nbsp;
          <span className='bold'>{project.movies?.length}</span> in this case.
        </p>
          <Form className='d-flex flex-column align-items-center'>
              <Form.Group className='text-center'>
                  <Form.ControlLabel style={styles.label}>Investment amount</Form.ControlLabel>
                  <InputNumber style={{alignSelf: 'center', marginBottom: 15,}} type='number' onChange={setInvestAmount} placeholder='Select amount to invest*' />
              </Form.Group>
          </Form>
                  <p>*Investment will be split in {project.movies?.length} <br/>*Only whole numbers will be accepted</p>
      </Modal.Body>
      <Modal.Footer>
          <ButtonGroup style={styles.btnWrap}>
              <Button onClick={onInvest} style={styles.btn} appearance='primary' color='blue'>
              Order with obligation to pay
              </Button>
              <Button onClick={close} style={styles.btn} appearance='ghost' color='blue'>
                  Cancel
              </Button>
          </ButtonGroup>
      </Modal.Footer>
  </Modal>
    */}
    </div>
      </>
    )
}
/*
const styles = {
  body: {
    display: 'flex',
    alignItems: 'center',
  },
  info: {
    fontSize: 18.5,
    color: mainColors.dark,
    opacity: .9,
  },
    label: {
        color: mainColors.dark,
    },
    btnWrap: {
        width: '100%',
    },
    btn: {
        width: '50%',
    },

}*/

export default InvestModal
