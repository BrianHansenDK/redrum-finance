import { ref, set, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import INVESTIMG from '../../../../../assets/investment_growth_icon.svg'
import { Button, ButtonGroup, Form, InputNumber, Message, Modal, useToaster, Toggle, Tooltip, Whisper, Notification } from 'rsuite'
import { auth, database, getCurrentUserFunction, userRef } from '../../../../../../firebase'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import '../right/styles/invest-modal.scss'
import PushThemes from '../../../../themes/PushThemes'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'
import CheckoutPage from './checkout/CheckoutPage'
import { useNavigate } from 'react-router-dom'
import PaypalComponent from '../../../../../../paypal/PaypalComponent'
import { FirebaseUser } from '../../../../../../database/Objects'
//import { mainColors } from '../../../../themes/colors'

interface IProps {
    project: any,
    close: any,
    visible: boolean,
    showReciept: any,
    en: boolean,
    navOpen: boolean,
    setEn: any,
    openMenu: any,
    openNav: any,
    closeNav: any,
}

const InvestModal: React.FunctionComponent<IProps> = (props) => {
    const {
      project, close, visible, showReciept,
      en, navOpen, setEn, openMenu, openNav, closeNav,
    } = props
    const [investAmount, setInvestAmount] = useState<any>(100)
    const [available, setAvailable] = useState(0)
    const [focused, setFocused] = useState<boolean>(false)
    const [checked, setChecked] = useState(false)
    const [checkout, setCheckout] = useState<boolean>(false)
    const [payment_method, setPaymentMethod] = React.useState('')

    const [user, setUser] = React.useState<FirebaseUser | null>(null)
    const [dLoading, setDLoading] = React.useState(false)


  function makeItPaypal() {
    setPaymentMethod('PayPal')
  }

  function makeItDeposit() {
    setPaymentMethod('Redrum_Pro_deposit')
  }

  const makeOrder = (data:any, actions:any) => {
    return actions.order
        .create({
            purchase_units: [
                {
                    amount: {
                        value: investAmount,
                    },
                },
            ],
        })
        .then((orderId:any) => {
            // Your code here after create the order
            return orderId;
        }); }
    function approvePayment (data:any, actions:any) {
          return actions.order.capture().then(function () {
            // Update users balance
            investInBundle()
          });
      }


    const navigate = useNavigate()

    const emptyValue: Number|null = null

    const investmentId = Date.now()
    const bonus =
        investAmount >= 50 && investAmount < 100 ? 4 :
        investAmount >= 100 && investAmount < 250 ? 10 :
        investAmount >= 250 && investAmount < 500 ? 30 :
        investAmount >= 500 && investAmount < 1000 ? 70 :
        investAmount >= 1000 ? 150 : 0
    const isMobile = useMediaQuery('(max-width: 1100px)')

    useEffect(() => {
      getCurrentUserFunction(auth.currentUser?.uid, setUser, setDLoading)
      userRef(auth.currentUser?.uid, '/money_available', setAvailable)
      userRef(auth.currentUser?.uid, '/payment_method', setPaymentMethod)
  }, [])

    const toaster = useToaster()
    const onInvest = () => {
      const bonusNumber =
        investAmount >= 50 && investAmount < 100 ? 4 :
        investAmount >= 100 && investAmount < 250 ? 10 :
        investAmount >= 250 && investAmount < 500 ? 30 :
        investAmount >= 500 && investAmount < 1000 ? 70 :
        investAmount >= 1000 ? 150 : 0
        /*
        // Invest if user has enough money and amount is divisible by amount of elements
        if (parseInt(investAmount) % project.movies.length == 0 && parseInt(investAmount) <= available && parseInt(investAmount) !== 0) {
            const investRef = ref(database, 'investments/' + investmentId)
            // Make investment
            set(investRef, {
                id: investmentId,
                creator: auth.currentUser?.uid,
                paid: parseInt(investAmount),
                bonus: bonusNumber,
                amount: parseInt(investAmount) + bonusNumber,
                gain: (parseInt(investAmount) + bonusNumber) * ((project.guaranteedReturn / 100) + 1),
                created_at: Date.now(),
                project: project.id,
                movies: project.movies,
            })
            // Update project
            let projectUpdates: any = {}
            projectUpdates['currentlyInvested'] = parseInt(investAmount) + project.currentlyInvested + bonusNumber
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
                    amount: (parseInt(investAmount) + bonusNumber) / project.movies.length,
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
        }*/
        if (investAmount > 0) {
          setCheckout(true)
          close()
        }
    }

    const isPaypal = payment_method === null || payment_method === undefined ||
      payment_method === '' || payment_method === 'PayPal' ? true : false

    const investInBundle = () => {
      const haveAllInfo =
      (!user?.company_account && (user?.full_name !== "" && user?.address !== ""
      && user?.birth_date !== "" && user?.title !== undefined
      && user.phone_number && user.country !== "")) || (
        (user?.company_account) && (user?.full_name !== "" && user?.address !== ""
        && user?.birth_date !== "" && user?.title !== undefined
        && user.phone_number && user.country !== ""
        && user.company_name !== undefined && user.role !== "" && user.company_address !== undefined )
      )
      if (parseInt(investAmount) == 0 || investAmount == null || investAmount == '') {
        toaster.push(
            <Message showIcon type='error' title={`${en ? 'Invalid amount' : 'Falsche anzahl'}`} duration={8000} closable>
              Please choose a valid amount. Cannot invest 0€
            </Message> , { placement: 'topCenter' }
        )
    }
    // Divisable by movies length
    if (parseInt(investAmount) % project.movies.length !== 0 && (parseInt(investAmount) !== null && parseInt(investAmount) !== 0 && investAmount !== '')) {
        toaster.push(
            <Message showIcon type='error' duration={8000} closable>
                Investment must have 0 remainders when divided by {project.movies.length}.
                Possible solution {
                  [...Array(project.movies.length).keys()].map((x) => (
                    (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) !== 0 ? `${parseInt(investAmount) - x}€ or ${(parseInt(investAmount) - x) + project.movies.length}` : (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) == 0 && `${(parseInt(investAmount) - x) + project.movies.length}`
                  ))
                }€
            </Message> , { placement: 'topCenter' }
        )
    }

    if (!isPaypal) {
      // Must have anough money on account
      if (parseInt(investAmount) > available) {
        toaster.push(
          <Message showIcon type='error' title='Not enough money available' closable duration={8000}>
                <p style={PushThemes.txt}>Not enough money in your account. Available: {available == null ? 0 : available}</p>
            </Message> , { placement: 'topCenter' }
        )
      }
    }
    if (!haveAllInfo) {
      toaster.push(<Notification type='error' header='Error' closable duration={10000}>
        <p>
          Some of your personal data is missing! <br/>
          All of your personal data is needed to invest.
        </p>
        <p>You can add the needed information on your profile page</p>
        <Button appearance='primary' block size='sm' className='r-btn r-main-btn mt-2 p-2' onClick={() => {
          navigate(`/app/profile/${auth!.currentUser!.uid}`)
          toaster.clear()
          }}>
          Go to your profile
        </Button>
      </Notification>, {placement: 'topCenter'})
    }

    if (((!isPaypal && parseInt(investAmount) <= available && haveAllInfo) || isPaypal) && (
      parseInt(investAmount) % project.movies.length == 0 && parseInt(investAmount) !== 0
    ) && haveAllInfo
      ) {
      const investRef = ref(database, 'investments/' + investmentId)
            // Make investment
            set(investRef, {
                id: investmentId,
                creator: auth.currentUser?.uid,
                paid: parseInt(investAmount),
                bonus: bonus,
                amount: parseInt(investAmount) + bonus,
                gain: (parseInt(investAmount) + bonus) * ((project.guaranteedReturn / 100) + 1),
                created_at: Date.now(),
                project: project.id,
                movies: project.movies,
            })
            // Update project
            let projectUpdates: any = {}
            projectUpdates['currentlyInvested'] = parseInt(investAmount) + project.currentlyInvested + bonus
            update(ref(database, 'projects/' + project.id), projectUpdates).then(() => {
                console.log(`${investAmount}€ was invested in ${project.name}!`)
            })
            // Update user
            let userUpdates: any = {}
            userUpdates['money_available'] = isPaypal ? available == undefined || available == null ? 0 : available : available - parseInt(investAmount)
            update(ref(database, 'users/' + auth.currentUser?.uid), userUpdates).then(() => {
                console.log(`${investAmount} invested in ${project.name}`)
            })
            // Create shares
            project.movies.forEach((movie: any) => {
                set(ref(database, 'shares/' + [Date.now(), movie].join('-')), {
                    id: [Date.now(), movie].join('-'),
                    owner: auth.currentUser?.uid,
                    amount: (parseInt(investAmount) + bonus) / project.movies.length,
                    movie: movie,
                    investment: investmentId,
                    project: project.id
                })
            })

            toaster.push(
                <Message style={PushThemes.pushGreen} type='success'>
                    <p style={PushThemes.txt}>You have invested {investAmount + bonus}€ in the project: {project.name}</p>
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 5000)
            close()
            navigate('/app/congratulations')
            showReciept()
      }
    }

    const closeCheckout = () => setCheckout(false)

    return (
      <>
        <Modal open={visible} onClose={close} size='lg' id='invest-modal'>
            <Modal.Header className='modal-head'>
                <Modal.Title className='title'>
                    {/*en ? 'You are investing in' : 'Ihr Investment in die'*/} <strong>{project.name}</strong>
                </Modal.Title>
                <div className="information">
                <p className="info-row bigger">
                  {en ? '1 Share = 1€' : '1 Anteil = 1€'}
                </p>
                <p className="info-row">
                  {en ?
                  'With an order from 50 shares you will receive bonus shares worth up to €150' :
                  'Ab einer Bestellung von 50 Anteilen erhältst du Bonusanteile im Wert von bis zu 150€'
                  }
                </p>
              </div>
            </Modal.Header>
            <Modal.Body className='modal-body'>
              <h4 className="inner-title">
                {en ?
                'Please select your investment amount:' :
                'Bitte wählen Sie Ihren Investmentbetrag:'}
              </h4>
              <div className="bonus-con">
                <h5 className="bonus">
                  {en ? 'Bonus shares' : 'Bonusanteile'}
                </h5>
                <p className="bonus-number">
                  {bonus}
                </p>
              </div>
              <div className="options">
              <Button
                className={`option-btn ${investAmount == 50 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(50)
                }}
                >
                  50 €
                </Button>
                <Button
                className={`option-btn ${investAmount == 100 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(100)
                }}
                >
                  100 €
                </Button>
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
                className={`option-btn ${investAmount == 500 ? 'chosen' : ''}`}
                appearance='primary'
                onClick={()=> {
                  setFocused(false)
                  setInvestAmount(500)
                }}
                >
                  500 €
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
                onChange={(val: any) => setInvestAmount(parseInt(val))}
                min={0} step={1} scrollable
                value={!focused ? emptyValue : investAmount}
                />
              </div>
              {/*<div className="accept">
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
                </div>*/}
            </Modal.Body>
            <Modal.Footer className='modal-footer'>
                <div className='btn-wrap'>
                    <span className='btn-con'>
                    <Button
                    onClick={onInvest}
                    appearance='primary'
                    // style={{ pointerEvents: !checked ? 'none' : 'auto' }}
                    className='r-btn r-main-btn'>
                    {en ? 'Continue' : 'Weiter'}
                    </Button>
                    </span>
                  {
                    /*
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
                  */}
                </div>
            </Modal.Footer>
        </Modal>
        {
          checkout ? (
            <CheckoutPage
              closeSelf={closeCheckout}
              en={en}
              navOpen={navOpen}
              visible={checkout}
              investAmount={investAmount}
              setInvestAmount={setInvestAmount}
              available={available}
              setEn={setEn}
              openMenu={openMenu}
              openNav={openNav}
              closeNav={closeNav}
              project={project}
              bonus={bonus}
              investInBundle={investInBundle}
              isPaypal={isPaypal}
              makeItPaypal={makeItPaypal}
              makeItDeposit={makeItDeposit} makeOrder={makeOrder} approveOrder={approvePayment}            />
          ) : null
        }
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
