import { ref, update } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, Form, Input, InputNumber, Message, Modal, Radio, SelectPicker, Toggle, useToaster } from 'rsuite'
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
    en: boolean,
}

const EditProfileModal: React.FunctionComponent<IProps> = (props) => {
    const { userId, close, visible, en } = props
    const [completion, setCompletion] = useState(0)

    const [companyAccountStart, setCompanyAccountStart] = useState<boolean>(false)
    const [fullNameStart, setFullNameStart] = useState('')
    const [salutionStart, setsalutionStart] = useState('')
    const [companyNameStart, setCompanyNameStart] = useState('')
    const [contactPartnerStart, setContactPartnerStart] = useState('')
    const [userNameStart, setUserNameStart] = useState('')
    const [birthDateStart, setBirthDateStart] = useState('')
    const [birthYearStart, setBirthYearStart] = useState(0)
    const [cityStart, setCityStart] = useState('')
    const [countryStart, setCountryStart] = useState('')
    const [phoneStart, setPhoneStart] = useState('')

    const toaster = useToaster()

    useEffect(() => {
        userRef(userId, '/company_account', setCompanyAccountStart)
        userRef(userId, '/company_name', setCompanyNameStart)
        userRef(userId, '/salution', setsalutionStart)
        userRef(userId, '/contact_partner', setContactPartnerStart)
        userRef(userId, '/full_name', setFullNameStart)
        userRef(userId, '/username', setUserNameStart)
        userRef(userId, '/completion', setCompletion)
        userRef(userId, '/birthdate', setBirthDateStart)
        userRef(userId, '/birthYear', setBirthYearStart)
        userRef(userId, '/address', setCityStart)
        userRef(userId, '/country', setCountryStart)
        userRef(userId, '/phone_number', setPhoneStart)
    })

    const [companyAccount, setCompanyAccount] = useState(false)
    const [salution, setSalution] = useState('')
    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [contactPartner, setContactPartner] = useState('')
    const [userName, setUserName] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [birthYear, setBirthYear] = useState<any>(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('')

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
                      <FormControlLabel style={styles.label}>{en ? 'Account type': 'Account Typ'}</FormControlLabel>
                        <span style={{color: !companyAccount ? mainColors.main : mainColors.dark}}>
                          {en ? 'Private account' : 'Einzelperson'}
                        </span>
                        <Toggle className='ml-1 mr-1'
                        defaultChecked={companyAccountStart != undefined ? companyAccountStart : false}
                        onChange={setCompanyAccount}
                        />
                        <span style={{color: companyAccount ? mainColors.main : mainColors.dark}}>
                          {en ? 'Company account' : 'Firma'}
                        </span>
                    </FormGroup>
                    <FormGroup>
                      <FormControlLabel style={styles.label}>Salution</FormControlLabel>
                      <SelectPicker
                      defaultValue={companyNameStart}
                      onChange={(e:any) => setSalution(e?.target.value())}
                      data={[{label: 'Sir.', value: 'Sir'}, {label: 'Miss.', value: 'Miss'}]} />
                      </FormGroup>
                    {companyAccount ? (
                      <>
                      <FormGroup>
                      <FormControlLabel style={styles.label}>Company name</FormControlLabel>
                      <Input defaultValue={companyNameStart} onChange={setCompanyName} />
                      </FormGroup>
                      <FormGroup>
                      <FormControlLabel style={styles.label}>Contact partner</FormControlLabel>
                      <Input defaultValue={contactPartnerStart} onChange={setContactPartner} />
                      </FormGroup>
                      <FormGroup>
                      <Radio>
                        <p style={{color: mainColors.dark}}>
                          {en ?
                          'I hereby certify that I am legally entitled to act and enter into contracts on behalf of the company.' :
                          'Hiermit bestätige ich, dass ich berechtigt bin gesetzlich im Namen der Firma zu handeln und Verträge abzuschließen.'
                          }
                        </p>
                      </Radio>
                      </FormGroup>
                      </>
                    ) : (
                      <FormGroup>
                        <FormControlLabel style={styles.label}>Full name</FormControlLabel>
                        <Input defaultValue={fullNameStart} onChange={setFullName} />
                    </FormGroup>
                    )
                    }
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
                        <FormControlLabel style={styles.label}>Address</FormControlLabel>
                        <Input defaultValue={cityStart} onChange={setCity} placeholder='Write Address' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Country</FormControlLabel>
                        <Input defaultValue={countryStart} onChange={setCountry} placeholder='Write name of your Country' />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel style={styles.label}>Phone</FormControlLabel>
                        <Input defaultValue={phoneStart} onChange={setPhone} placeholder='Country_code+ number (00+ 00000000)' />
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
