import { ref, set, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import INVESTIMG from '../../../../../assets/investment_growth_icon.svg'
import { Button, ButtonGroup, Form, InputNumber, Message, Modal, useToaster, Toggle, Tooltip, Whisper, Notification } from 'rsuite'
import { addUserMoney, auth, createInvestmentNotification, createInvoice, createPromoNotification, database, getAllUserIds, getCurrentUserFunction, getInvoiceCount, notifyRedrumOfPromotion, userRef } from '../../../../../../firebase'
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

    // Invest amount - What the user wants to invest
    const [investAmount, setInvestAmount] = useState<any>(100)

    // Currently available in users balance
    const [available, setAvailable] = useState(0)

    // Is 'different amount' input focused
    const [focused, setFocused] = useState<boolean>(false)

    const [checked, setChecked] = useState(false)
    // Is someone pressing the ,buy button
    const [buying, setBuying] = useState<boolean>(false)

    // Is the user on the checkout page
    const [checkout, setCheckout] = useState<boolean>(false)

    // What payment method is chosen
    const [payment_method, setPaymentMethod] = React.useState('')

    // Generate unique invoice number
    const [invoiceCount, setInvoiceCount] = React.useState(0)

    // Promo codes
    const [allCodes, setAllCodes] = React.useState<string[]>([]) // All codes
    const [code, setCode] = React.useState<string>('') // Given promo code

    useEffect(() => {
      getInvoiceCount(setInvoiceCount)
    }, [buying])

    useEffect(() => {
      getAllUserIds(setAllCodes)
    }, [])


    // Current user
    const [user, setUser] = React.useState<FirebaseUser | null>(null)
    const [dLoading, setDLoading] = React.useState(false)

    // Paypal modal for when paypal is chosen
    const [ppmodalOpen, setPpmodalOpen] = React.useState<boolean>(false);

  // Paypal modal functions
  const openPP = () => setPpmodalOpen(true);
  const closePP = () => setPpmodalOpen(false);

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

  function makeItPaypal() {
    setPaymentMethod('PayPal')
  }

  // User balance functions
  function makeItDeposit() {
    setPaymentMethod('Redrum_Pro_deposit')
  }




    const navigate = useNavigate()

    const emptyValue: Number|null = null

    const investmentId = Date.now()
    const investmentCreated = new Date(investmentId)
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
      getInvoiceCount(setInvoiceCount)
    }, [])
  useEffect(() => {
    getInvoiceCount(setInvoiceCount)
  }, [buying])

    const toaster = useToaster()
    const onInvest = () => {
      const bonusNumber =
        investAmount >= 50 && investAmount < 100 ? 4 :
        investAmount >= 100 && investAmount < 250 ? 10 :
        investAmount >= 250 && investAmount < 500 ? 30 :
        investAmount >= 500 && investAmount < 1000 ? 70 :
        investAmount >= 1000 ? 150 : 0

        // Old function
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

        // Divisable by movies length
      const notDivisable = parseInt(investAmount + bonus) % project.movies.length !== 0 && (parseInt(investAmount + bonus) !== null && parseInt(investAmount + bonus) !== 0 && investAmount !== '')
      if (notDivisable) {
        toaster.push(
            <Message showIcon type='error' duration={8000} closable>
                Investment must have 0 remainders when divided by {project.movies.length}.
                Possible solution {
                  [...Array(project.movies.length).keys()].map((x) => (
                    (parseInt(investAmount + bonus) - x) % project.movies.length == 0 && (parseInt(investAmount + bonus) - x) !== 0 ?
                    `${parseInt(investAmount) - x}€ or ${
                      (parseInt(investAmount) - x) + project.movies.length}` :
                      (parseInt(investAmount + bonus) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) == 0 && `${(parseInt(investAmount) - x) + project.movies.length}`
                  ))
                }€
            </Message> , { placement: 'topCenter' }
        )
      }
        if (investAmount > 0 && !notDivisable) {
          setCheckout(true)
          close()
        }
    }

    const isPaypal = payment_method === null || payment_method === undefined ||
      payment_method === '' || payment_method === 'PayPal' ? true : false

    const investInBundle = () => {
      const haveAllInfo =
      (!user?.company_account && ((user?.full_name !== "" && user!.full_name.split(" ").length > 1) && user?.address !== ""
      && user?.birth_date !== "" && user?.title !== undefined
      && user.phone_number && user.country !== "")) || (
        (user?.company_account) && (user?.full_name !== "" && user?.address !== ""
        && user?.birth_date !== "" && user?.title !== undefined
        && user.phone_number && user.country !== ""
        && user.company_name !== undefined && user.role !== "" && user.company_address !== undefined )
      )

      const wrongCode = code !== '' && !allCodes.includes(code)
      const notEnoughForPromotion = code !== '' && investAmount < 50

      if (parseInt(investAmount) == 0 || investAmount == null || investAmount == '') {
        toaster.push(
            <Message showIcon type='error' title={`${en ? 'Invalid amount' : 'Falsche anzahl'}`} duration={8000} closable>
              Please choose a valid amount. Cannot invest 0€
            </Message> , { placement: 'topCenter' }
        )
    }
    // Divisable by movies length
    const divisable = parseInt(investAmount + bonus) % project.movies.length !== 0 && (parseInt(investAmount + bonus) !== null && parseInt(investAmount + bonus) !== 0 && investAmount !== '')
    if (divisable) {
        toaster.push(
            <Message showIcon type='error' duration={8000} closable>
                Investment must have 0 remainders when divided by {project.movies.length}.
                Possible solution {
                  [...Array(project.movies.length).keys()].map((x) => (
                    (parseInt(investAmount + bonus) - x) % project.movies.length == 0 && (parseInt(investAmount + bonus) - x) !== 0 ?
                    `${parseInt(investAmount) - x}€ or ${
                      (parseInt(investAmount) - x) + project.movies.length}` :
                      (parseInt(investAmount + bonus) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) == 0 && `${(parseInt(investAmount) - x) + project.movies.length}`
                  ))
                }€
            </Message> , { placement: 'topCenter' }
        )
    }

    if (!isPaypal) {
      // Must have anough money on account
      if (parseInt(investAmount) > available && !isPaypal) {
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
    if (wrongCode) {
      toaster.push(
        <Message showIcon type='error' closable duration={8000}>
              {en ? 'The promo code given is not recognized in our system. Try to dubble-check for any spelling mistakes.':
              'Der angegebene Promo-Code wird in unserem System nicht erkannt. Bitte überprüfen Sie ihn noch einmal auf mögliche Tippfehler.'}
          </Message> , { placement: 'topCenter' }
      )
    }
    if (notEnoughForPromotion) {
      toaster.push(
        <Message showIcon type='error' closable duration={8000}>
              {en ? 'To make use of a promo code you need to invest a minimum of 50€.':
              'Um einen Promo-Code nutzen zu können, müssen Sie mindestens 50 € investieren.'}
          </Message> , { placement: 'topCenter' }
      )
    }


    if (((!isPaypal && parseInt(investAmount) <= available && haveAllInfo) || (isPaypal && haveAllInfo && !wrongCode) ) && (
      parseInt(investAmount) % project.movies.length == 0 && parseInt(investAmount) !== 0
    ) && haveAllInfo && user !== null && !wrongCode && !notEnoughForPromotion
      ) {
        setBuying(true)
        if (invoiceCount < 0) {
          toaster.push(<Message type='error' showIcon closable duration={10000}>
            {en ? 'There was an error generating your invoice, please try again' :
            'Es ist ein Fehler bei der Erstellung Ihrer Rechnung aufgetreten. Bitte versuchen Sie es erneut.'}
          </Message>, {placement: 'topCenter'})
        } else {
            const investRef = ref(database, 'investments/' + investmentId)
            // Make investment
            set(investRef, {
                id: investmentId,
                user_id: auth.currentUser?.uid,
                paid: parseInt(investAmount),
                bonus: bonus,
                amount: parseInt(investAmount) + bonus,
                gain: (parseInt(investAmount) + bonus) * ((project.guaranteedReturn / 100) + 1),
                created_at: investmentCreated.toJSON(),
                project: project.id,
                movies: project.movies,
                invoice_number: invoiceCount
            })
            // Make invoice
            createInvoice(invoiceCount, project, user, {
              id: investmentId,
              user_id: user.id,
              paid: parseInt(investAmount),
              bonus: bonus,
              amount: parseInt(investAmount) + bonus,
              gain: (parseInt(investAmount) + bonus) * ((project.guaranteedReturn / 100) + 1),
              created_at: investmentCreated.toJSON(),
              project: project.id,
              movies: project.movies,
              invoice_number: invoiceCount
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
            // Create notification
            createInvestmentNotification(user.id, project.name)

            // Give Provision to Promoter
            if (allCodes.includes(code) && investAmount >= 50) {
              /*
              // Properties
              const investmentId2 = investmentCreated.getTime() + 1
              const investmentCreated2 = new Date(investmentId2)

              const investRef2 = ref(database, 'investments/' + investmentId2)
              // Create investment
              set(investRef2, {
                id: investmentId2,
                user_id: code,
                paid: 0,
                bonus: 0,
                amount: parseInt(investAmount) * 0.1,
                gain: (parseInt(investAmount) * 0.1),
                created_at: investmentCreated2.toJSON(),
                project: project.id,
                movies: project.movies,
                invoice_number: invoiceCount + 1
              })

              // Make invoice
                createInvoice(invoiceCount + 1, project, user, {
                  id: investmentId2,
                  user_id: code,
                  paid: 0,
                  bonus: 0,
                  amount: parseInt(investAmount) * 0.1,
                  gain: (parseInt(investAmount) * 0.1) * ((project.guaranteedReturn / 100) + 1),
                  created_at: investmentCreated2.toJSON(),
                  project: project.id,
                  movies: project.movies,
                  invoice_number: invoiceCount + 1
              })

              // Update project
              let projectUpdates: any = {}
              projectUpdates['currentlyInvested'] = parseInt(investAmount) + project.currentlyInvested + bonus + (parseInt(investAmount) * 0.1)
              update(ref(database, 'projects/' + project.id), projectUpdates).then(() => {
                console.log(`${investAmount * 0.1}€ worth of shares was added to the owner of the promo code!`)
              })

              // Create shares
              project.movies.forEach((movie: any) => {
                set(ref(database, 'shares/' + [Date.now(), movie].join('-')), {
                    id: [Date.now(), movie].join('-'),
                    owner: code,
                    amount: (parseInt(investAmount) * 0.1) / project.movies.length,
                    movie: movie,
                    investment: investmentId2,
                    project: project.id
                })
              })

              // Create notification
              createPromoNotification(code, user, project, investAmount);

              // Notify Redrum
              notifyRedrumOfPromotion(user, code, project, investAmount, bonus);
              */
             addUserMoney(code, investAmount * 0.1);

             // Create notification
             createPromoNotification(code, user, project, investAmount);

             // Notify Redrum
             notifyRedrumOfPromotion(user, code, project, investAmount, bonus);
            }


            toaster.push(
                <Message type='success' duration={8000} closable showIcon>
                    You have invested {investAmount + bonus}€ in the project: {project.name}
                </Message> , { placement: 'topCenter' }
            )
            close()
            navigate('/app/congratulations')
            showReciept()
        }
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
              allCodes={allCodes}
              code={code}
              setPromoCode={setCode}
              investInBundle={investInBundle}
              isPaypal={isPaypal}
              makeItPaypal={makeItPaypal}
              makeItDeposit={makeItDeposit} makeOrder={makeOrder} approveOrder={approvePayment}
              ppmodalOpen={ppmodalOpen} openPP={openPP} closePP={closePP}/>
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
