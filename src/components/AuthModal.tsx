import React, { useState } from 'react'
import { Button, DatePicker, Divider, Modal, Toggle, Tooltip, Whisper } from 'rsuite'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import GOOGLE from '@rsuite/icons/legacy/GooglePlusCircle'
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { modalContext } from '../misc/custom-hooks'
import { Link } from 'react-router-dom'

const tooltip = (
    <Tooltip>
        You have to agree to our terms and conditions to be able to sign up.
    </Tooltip>
)

const AuthModal = ({isVisible, close}: {isVisible:boolean, close:any}) => {
    const [isChecked, setChecked] = useState(false)
  return (
    <Modal className='login-modal' open={isVisible} onClose={close} size='md' style={{backgroundColor: 'rgba(75,75,75, .8'}} >
        <ModalHeader>
        </ModalHeader>
        <ModalBody>
            <h3 className='txt-center' style={{color: 'black'}}>Redrum Media Invest</h3>
        <h3 className='txt-center'>

            Please register to start investing
        </h3>
        <div className='d-flex justify-center mt-2'>
        <Whisper placement="bottom" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
            <Button appearance='ghost' className='main-btn thin hidden' style={{width: 250, margin: 'auto'}}>
                <GOOGLE/> Sign up with Google
            </Button>
        </Whisper>
        </div>
        <Divider/>
        <form className="d-flex pl-2 pr-2">
            <div className="col">
            <div className="form-floating mb-1">
                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                    <option selected>He/Him</option>
                    <option value="2">She/Her</option>
                    <option value="3">They/Them</option>
                </select>
                <label>Pronouns</label>
            </div>
            <div className="form-floating mb-1">
                <input type="name" className="form-control" id="floatingInput" placeholder="Ninjacat"/>
                <label >Username</label>
            </div>
            <div className="form-floating mb-1">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label >Email address</label>
            </div>
            <div className="form-floating mb-1">
                <input type="password" className="form-control" id="floatingInput" placeholder="password"/>
                <label >Password</label>
            </div>
            <div className="form-floating mb-1">
                <input type="password" className="form-control" id="floatingInput" placeholder="password"/>
                <label >Confirm Password</label>
            </div>
            <div className='d-flex'>
            <Toggle onChange={() => setChecked(!isChecked)} checkedChildren={<CheckIcon />} unCheckedChildren={<CloseIcon />}/> 
            <p className='ml-1'>
            I agree to the Redrum media invest Terms & Conditions and the Privacy Policy. I further agree to receiving marketing via e-mails from Redrum media invest Gmbh regarding product categories, which I can withdraw any time.
            </p>
            </div>
            <Whisper placement="top" controlId="control-id-hover" trigger={`${isChecked ? 'none' : 'hover'}`} speaker={tooltip}>
            <Button appearance='primary' disabled={!isChecked} size='lg' block className='main-btn mt-1'>
                Get started
            </Button>
            </Whisper>
            </div>
        </form>
        <p className=' mt-3 d-flex justify-center' >
                <span style={{opacity: .75}}>
                    Don't have an account? &nbsp;
                </span> 
                <Link to='/sign-up'>Sign up</Link>
            </p>
        </ModalBody>
    </Modal>
  )
}

export default AuthModal