import { ref, set, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import INVESTIMG from '../../../../../assets/investment_growth_icon.svg'
import { Button, ButtonGroup, Form, InputNumber, Message, Modal, useToaster } from 'rsuite'
import { auth, database, userRef } from '../../../../../firebase'
import { mainColors } from '../../../themes/colors'

interface IProps {
    project: any,
    close: any,
    visible: boolean,
    showReciept: any,
}

const InvestModal: React.FunctionComponent<IProps> = (props) => {
    const { project, close, visible, showReciept } = props
    const [investAmount, setInvestAmount] = useState<any>(0)
    const [available, setAvailable] = useState(0)
    const investmentId = Date.now()

    useEffect(() => { userRef(auth.currentUser?.uid, '/money_available', setAvailable) }, [])

    const toaster = useToaster()

    const onInvest = () => {
        // If no amount is entered
        if (parseInt(investAmount) == 0 || investAmount == null || investAmount == '') {
            toaster.push(
                <Message showIcon type='error'>
                    Please choose a valid amount. Cannot invest 0€
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 5000)
        }
        // Divisable by movies length
        if (parseInt(investAmount) % project.movies.length !== 0 && (parseInt(investAmount) !== null && parseInt(investAmount) !== 0 && investAmount !== '')) {
            toaster.push(
                <Message showIcon type='error'>
                    Investment must have 0 remainders when divided by {project.movies.length}.
                    Possible solution {
                      [...Array(project.movies.length).keys()].map((x) => (
                        (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) !== 0 ? `${parseInt(investAmount) - x}€ or ${(parseInt(investAmount) - x) + project.movies.length}` : (parseInt(investAmount) - x) % project.movies.length == 0 && (parseInt(investAmount) - x) == 0 && `${(parseInt(investAmount) - x) + project.movies.length}`
                      ))
                    }€
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 10000) }

        // Must have anough money on account
        if (parseInt(investAmount) > available) {
            toaster.push(
                <Message showIcon type='error'>
                    Not enough money in your account. Available: {available == null ? 0 : available}
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
                <Message showIcon type='success'>
                    You have invested {investAmount}€ in the project: {project.name}
                </Message> , { placement: 'topCenter' }
            )
            window.setTimeout(() => { toaster.clear() }, 5000)
            close()
            showReciept()
        }
    }
    return (
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
    )
}

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

}

export default InvestModal
