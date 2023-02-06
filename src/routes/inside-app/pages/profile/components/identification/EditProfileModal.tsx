import { ref, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, Input, InputNumber, Message, Modal, useToaster } from 'rsuite'
import FormControlLabel from 'rsuite/esm/FormControlLabel'
import FormGroup from 'rsuite/esm/FormGroup'
import FormHelpText from 'rsuite/esm/FormHelpText'
import ModalBody from 'rsuite/esm/Modal/ModalBody'
import ModalFooter from 'rsuite/esm/Modal/ModalFooter'
import ModalHeader from 'rsuite/esm/Modal/ModalHeader'
import ModalTitle from 'rsuite/esm/Modal/ModalTitle'
import { database, userRef } from '../../../../../../firebase'
import { mainColors } from '../../../../themes/colors'
interface IProps {
    userId: any,
    close: any,
    visible: boolean,
}

const EditProfileModal: React.FunctionComponent<IProps> = (props) => {
    const { userId, close, visible } = props
    const [completion, setCompletion] = useState(0)

    const [userNameStart, setUserNameStart] = useState('')
    const [birthDateStart, setBirthDateStart] = useState('')
    const [birthYearStart, setBirthYearStart] = useState(0)
    const [cityStart, setCityStart] = useState('')
    const [countryStart, setCountryStart] = useState('')

    const toaster = useToaster()

    useEffect(() => {
        userRef(userId, '/username', setUserNameStart)
        userRef(userId, '/completion', setCompletion)
        userRef(userId, '/birthdate', setBirthDateStart)
        userRef(userId, '/birthYear', setBirthYearStart)
        userRef(userId, '/city', setCityStart)
        userRef(userId, '/country', setCountryStart)
    })

    const [userName, setUserName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [birthYear, setBirthYear] = useState<any>(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')

    const onSave = () => {
        const reference = ref(database)
        const updates: any = {}
        let completionData = completion
        updates['/users/' + userId + '/username'] = userName == '' ? userNameStart : userName
        if (birthDate !== null) {
            updates['/users/' + userId + '/birthdate'] = birthDate
        }
        if (birthYear !== 0 && birthYear > 2023 - 100 && birthYear < 2023) {
          updates['/users/' + userId + '/birthYear'] = birthYear
      }
        updates['/users/' + userId + '/city'] = city == '' ? cityStart : city
        updates['/users/' + userId + '/country'] = country == '' ? countryStart : country
        if ((birthDate !== null && birthDate !== '') && (birthDateStart == null || birthDateStart == '')) {
            completionData += 5
        }
        if ((birthYear !== null && birthYear !== 0 && birthYear > 2023 - 100) && (birthYearStart == null || birthYearStart == 0)) {
          completionData += 5
      }
        if ((city !== null && city !== '') && (cityStart == '' || cityStart == null)) {
            completionData += 10
        }
        if ((country !== null && country !== '') && (countryStart == '' || countryStart == null)) {
            completionData += 10
        }
        updates['/users/' + userId + '/completion'] = completionData
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
                        <FormControlLabel style={styles.label}>Birth date:</FormControlLabel>
                        <Input placeholder={`${birthDateStart !== '' || birthDateStart !== null ? birthDateStart : 'dd/MM'}`}
                            onChange={setBirthDate}
                        />
                        <FormHelpText>Required to invest</FormHelpText>
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Birth year:</FormControlLabel>
                        <InputNumber type={'number'} placeholder={`${birthYearStart !== 0 || birthYearStart !== null ? birthYearStart : 'yyyy'}`}
                            onChange={setBirthYear}
                        />
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
