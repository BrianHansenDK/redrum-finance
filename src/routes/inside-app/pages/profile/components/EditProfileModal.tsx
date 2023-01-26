import { ref, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, DatePicker, Form, Input, Message, Modal, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import FormHelpText from 'rsuite/esm/FormHelpText'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { database, userRef } from '../../../../../firebase'
import { mainColors } from '../../../themes/colors'
interface IProps {
    userId: any,
    close: any,
    visible: boolean,
}

const EditProfileModal: React.FunctionComponent<IProps> = (props) => {
    const { userId, close, visible } = props
    const [userName, setUserName] = useState('')
    const [completion, setCompletion] = useState(0)

    const [userNameStart, setUserNameStart] = useState('')
    const [birthDateStart, setBirthDateStart] = useState('')
    const [cityStart, setCityStart] = useState('')
    const [countryStart, setCountryStart] = useState('')

    const [birthDate, setBirthDate] = useState(new Date('01-01-2000'))
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const toaster = useToaster()

    useEffect(() => {
        userRef(userId, '/username', setUserNameStart)
        userRef(userId, '/completion', setCompletion)
        userRef(userId, '/birthdate', setBirthDateStart)
        userRef(userId, '/city', setCityStart)
        userRef(userId, '/country', setCountryStart)
    })
    const onSave = () => {
        const reference = ref(database)
        const updates: any = {}
        updates['/users/' + userId + '/username'] = userName == '' ? userNameStart : userName
        updates['/users/' + userId + '/birthdate'] = birthDate.toLocaleDateString()
        updates['/users/' + userId + '/city'] = city == '' ? cityStart : city
        updates['/users/' + userId + '/country'] = country == '' ? countryStart : country
        if (birthDate !== null && birthDate !== new Date() && (birthDateStart == null || birthDateStart == '')) {
            setCompletion(completion + 10)
        }
        if (city !== null && city !== '' && (cityStart == '' || cityStart == null)) {
            setCompletion(completion + 10)
        }
        if (country !== null && country !== '' && (countryStart == '' || countryStart == null)) {
            setCompletion(completion + 10)
        }
        updates['/users/' + userId + '/completion'] = completion
        update(reference, updates)
        close()
        toaster.push(
            <Message showIcon type='success'>
                Profile information was changed
            </Message>, { placement: 'topCenter' }
        )
        window.setTimeout(() => {
            toaster.clear()
        }, 3000)
        console.log(birthDate.toLocaleDateString())
    }
    return (
        <Modal open={visible} onClose={close} >
            <ModalHeader>
                <ModalTitle>
                    Edit profile
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form style={styles.form}>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Username</FormControlLabel>
                        <Input defaultValue={userNameStart} onChange={setUserName} />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>BirthDate:</FormControlLabel>
                        <DatePicker format='dd-MM-yyyy' calendarDefaultDate={new Date('01-01-2000')} onChange={() => setBirthDate} />
                        <FormHelpText>Required to invest</FormHelpText>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>City</FormControlLabel>
                        <Input defaultValue={cityStart} onChange={setCity} placeholder='Write City name' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Country</FormControlLabel>
                        <Input defaultValue={countryStart} onChange={setCountry} placeholder='Write name of your Country' />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <ButtonGroup style={{ width: '100%' }}>
                    <Button style={styles.btns} onClick={onSave} color='blue' appearance='primary'>
                        Save
                    </Button>
                    <Button style={styles.btns} onClick={close} color='blue' appearance='ghost' >
                        Cancel
                    </Button>
                </ButtonGroup>
            </ModalFooter>
        </Modal>
    )
}

const styles = {
    form: {
        padding: '50px 25px',
    },
    label: {
        color: mainColors.dark,
    },
    btns: {
        width: '50%',
    },
}

export default EditProfileModal