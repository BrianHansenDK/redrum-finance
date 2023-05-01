import React from 'react'
import { Button, DatePicker, Input, InputPicker, Message, Radio, RadioGroup, Toggle, Tooltip, Whisper, useToaster } from 'rsuite'
import { FirebaseUser } from '../../../../../../../database/Objects'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import { mainColors } from '../../../../../themes/colors';
import { fetchContries, getCity, getUserHousenumber, getUserStreet, getZipCode, useMediaQuery } from '../../../../../../../misc/custom-hooks';
import { auth, newUpdateAccount } from '../../../../../../../firebase';
import { ValueType } from 'rsuite/esm/Radio/Radio';
import { sendPasswordResetEmail, updateEmail } from 'firebase/auth';
import ChangePasswordModal from './ChangePasswordModal';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import EModal from './EModal';

interface IProps {
  user: FirebaseUser,
  en: boolean,
  close: any,
  setChanged: any,
  eModalOpen: boolean, closeEModal: any,
}

const ProfileForm = (props: IProps) => {
  const {user, en, close, setChanged, eModalOpen, closeEModal} = props;

  // Mark: - PROPERTIES
  let today = new Date();
  const toaster = useToaster();

  // USER DATA
  const [title, setTitle] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [birthdate, setBirthdate] = React.useState<any>(today)
  const [email, setEmail] = React.useState('')
  const [role, setRole] = React.useState('')
  const [companyName, setCompanyName] = React.useState('')
  const [companyCode, setCompanyCode] = React.useState('')
  const [companyCity, setCompanyCity] = React.useState('')
  const [companyStreet, setCompanyStreet] = React.useState('')
  const [companyHN, setCompanyHN] = React.useState('')
  const [companyCountry, setCompanyCountry] = React.useState('')
  const [website, setWebsite] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [code, setCode] = React.useState('')
  const [city, setCity] = React.useState('')
  const [street, setStreet] = React.useState('')
  const [houseNumber, setHouseNumber] = React.useState('')
  const [addAddress, setAddAddress] = React.useState('')
  const [addAddress2, setAddAddress2] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [checked, setChecked] = React.useState<boolean>(false)
  const [companyAccount, setCompanyAccount] =
    React.useState<ValueType | undefined>(user.company_account ? 'true' : '')



    const changed =
    title !== '' || firstName !== '' || lastName !== '' || birthdate !== today || role !== '' || companyName !== '' ||
    companyCode !== '' || companyCity !== '' || companyCountry !== '' || website !== '' || country !== '' || code !== '' ||
    city !== '' || street !== '' || houseNumber !== '' || addAddress !== '' || addAddress2 !== '' || phone !== ''

  React.useEffect(() => {
    today = new Date(); setBirthdate(user.birth_date !== "" ? new Date(user.birth_date) : today);
    setChanged(changed);
  }, [title, firstName, lastName, email, role, companyName, companyCode,
  companyCity, companyCountry, website, country, city, street, houseNumber, addAddress,
addAddress2, phone, checked, companyAccount])

  const titleData = [
    {label: en ? 'Mr.' : 'Mann', value: 'Mr.'}, {label: en ? 'Miss.' : 'Frau', value: 'Miss.'},
    {label: en ? 'Other.' : 'Ander', value: 'Other'}
  ]

  const [cLoading, setCLoading] = React.useState<boolean>(false)
  const [countries, setCountries] = React.useState<string[] | null>(null)

  const isMobile = useMediaQuery('(max-width: 900px)');

  // Mark: . FUNCTIONS

  const getCountriesIfNeeded = () => {
    if (countries === null) {
      fetchContries(setCountries, setCLoading)
    }
  }

  const saveChanges = () => {
    if (firstName !== '' && firstName.split(' ').length > 1) {
      toaster.push(<Message showIcon type='error' duration={5000}>
        First name is invalid.
      </Message>);
    }
    const companyStatement =
      (Boolean(companyAccount)) && ((role === '' && user.role === undefined) ||
      (companyName === '' && user.company_name === undefined)
      || (companyCode === '' && user.company_address === undefined) ||
      (companyCity === '' && user.company_address === undefined) ||
      (companyCountry === '' && user.company_address === undefined) ||
      (companyStreet === '' && user.company_address === undefined) ||
      (companyHN === '' && user.company_address === undefined))
    if (companyStatement) {
      toaster.push(<Message showIcon type='error' duration={5000}>
        Please fill out all the necessary information from your company.
      </Message>)
    }
    const companyWithoutAccept =
    (Boolean(companyAccount)) && !checked
    if (companyWithoutAccept) {
      toaster.push(<Message showIcon type='error' duration={5000}>
        Please certify your legal entitlement to take action for th company
      </Message>)
    }
    if (((firstName !== '' && firstName.split(' ').length === 1) || firstName == '') && (!companyStatement) && !companyWithoutAccept)
    {
    newUpdateAccount(
      user.id,
      title === '' ? user.title !== undefined ? user.title : '' : title,
      firstName === '' && lastName === '' ? user.full_name :
      (firstName !== "" && lastName === "") ? `${firstName} ${user.full_name !== "" ? user.full_name.split(" ").slice(1).join(" ") : ''}` :
      (firstName === '' && lastName !== '') ? `${user.full_name !== "" ? user.full_name.split(" ")[0] : ''} ${lastName}` : '',
      birthdate.toDateString(),
      email === '' ? user.email : email,
      country !== '' ? country : user.country,
      code !== '' && city !== '' && street !== '' ? `${street} ${houseNumber}${addAddress !== '' ? `, ${addAddress}` : ''}${addAddress2 !== '' ? `, ${addAddress2}` : ''}, ${code} ${city}` : user.address,
      phone !== '' ? phone : user.phone_number,
      () => {
        toaster.push(<Message showIcon type='success' duration={5000}>
          Profile updated successfully!
        </Message>);
      },
      (err) => {
        toaster.push(<Message showIcon type='error' duration={5000}>
          {err.message}
        </Message>);
      },() => {close(); closeEModal();},
      Boolean(companyAccount),
      Boolean(companyAccount) ? role : user.role,
      Boolean(companyAccount) ? companyName : user.company_name !== undefined ? user.company_name : undefined,
      Boolean(companyAccount) ? `${companyStreet} ${companyHN}, ${companyCode} ${companyCity}, ${companyCountry}` : user.company_address !== undefined ? user.company_address : undefined,
      Boolean(companyAccount) ? website : undefined
    )
    if (email !== '') {
      updateEmail(auth.currentUser!, email)
    }
    }
    const givenDate = new Date(birthdate.toLocaleDateString())
    if (new Date().getFullYear() - givenDate.getFullYear() < 18) {
      toaster.push(<Message showIcon type='warning' duration={5000}>
        {en ? 'Under 18: You cannot invest.' : 'Unser 18 jahre: Du kanns nicht investieren.'}
      </Message>, {placement: 'topCenter'})
    }
  }

  const sendPWResetMail = () => {
    sendPasswordResetEmail(auth, user.email).then(() => {
      toaster.push(<Message closable type='info' showIcon duration={5000}>
        {en ? `We have send an email to ${user.email}. Please go there to change your password.` :
        `Wir haben eine E-Mail an ${user.email} gesendet. Bitte gehen Sie dorthin, um Ihr Passwort zu ändern.`}
      </Message>, {placement: 'topCenter'});
    })
  }

  // Change password
  const [modalOpen, setModalOpen] = React.useState(false)
  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const regex = new RegExp('\\S+', 'gm')

  // Mark: - PREVIEW
  return (
    <div className='edit-profile-form'>
      <div className="form-element double-input pronounce-element" style={{display: 'flex', alignItems: 'center'}}>
        <div className="inner">
        <label className="label">Title*</label>
        <InputPicker className='input picker' placeholder={user.title !== undefined ? user.title :
          en ? 'Select Title' : 'Titel.'}
          value={title === '' ? user.title !== undefined || user.title !== null ? user.title : title : title}
          data={titleData}
          onChange={setTitle}
          />
      </div>
      <div className="inner">
        <RadioGroup
        value={companyAccount}
        onChange={setCompanyAccount}
        inline style={{display: 'flex', alignItems: 'center'}} className={isMobile ? 'flex-column': ''}>
          <Radio
          value={''}
          style={{display: 'flex', alignItems: 'center'}}>
            <label className="label">{en ? 'Private' : 'Privat'}
          </label></Radio>
          <Radio
          value={'true'}
          style={{display: 'flex', alignItems: 'center'}}>
            <label className="label">{en ? 'Company' : 'Firm'}
          </label></Radio>
        </RadioGroup>
      </div>
      </div>
      <Whisper trigger={'hover'} placement='top' speaker={(<Tooltip>
        Needed to invest
      </Tooltip>)}>
      <div className="form-element double-input">
        <div className="inner">
        <label className="label">{en ? 'First name' : 'Vorname'}*</label>
        <Input className='input' placeholder={en ? 'Enter first name...' : 'Vorname schreiben...'}
          value={firstName === '' ? user.full_name !== '' ? user.full_name.split(' ')[0] : firstName : firstName}
          onChange={setFirstName}
          type='text'
          />
        </div>
        <div className="inner">
        <label className="label">{en ? 'Last name' : 'Nach Name'}*</label>
        <Input className='input' placeholder={en ? 'Enter Last name...' : 'Nach Name schreiben...'}
          value={lastName === '' ? user.full_name !== '' ? user.full_name.split(' ').slice(1).join(' ') : lastName : lastName}
          onChange={setLastName}
          />
        </div>
      </div>
      </Whisper>
      <div className="form-element double-input">
      <Whisper trigger={'hover'} placement='top' speaker={(<Tooltip>
        Needed to invest
      </Tooltip>)}>
      <div className="inner birthdate">
        <label className="label">{en ? 'Birtdate' : 'Geburtsdatum'}*</label>
        <DatePicker className='input'
        value={new Date(birthdate) === today ? user.birth_date !== '' ? new Date(user.birth_date) : null: birthdate}
        oneTap onChange={setBirthdate}/>
      </div>
      </Whisper>
      <div className="inner">
        <label className="label">{en ? 'Email address' : 'Email Adresse'}*</label>
        <Input className='input' value={email === '' ? user.email : email} onChange={setEmail}/>
      </div>
      </div>
      {Boolean(companyAccount) ? (
        <>
        <div className="form-element double-input">
          <div className="inner">
            <label className="label">
              {en ? 'Company position' :
              'Position in Ihrem Unternehmen'}*
            </label>
            <Input className='input'
            placeholder={user.role === '' || user.role === 'Redrum Pro Member' ? en ? 'Enter role...' : 'Position schreiben...' : user.role}
            value={role === '' ? user.role === '' || user.role === 'Redrum Pro Member' ? role : user.role : role}
            onChange={setRole}
            />
          </div>
          <div className="inner">
          <label className="label">
              {en ? 'Company name' :
              'Firma Name'}*
            </label>
            <Input className='input'
            placeholder={user.company_name === undefined ? en ? 'Enter company name...' : 'Firma name schreiben...' : user.company_name}
            value={companyName === '' ? user.company_name === undefined ? companyName : user.role : companyName}
            onChange={setCompanyName}
            />
          </div>
        </div>
        <div className="form-element">
          <p className='label' style={{width: '100%', flexGrow: 1, flexShrink: 0}}>Where is your company located?*</p>
        </div>
        <div className="form-element double-input">
        <div className="box1">
          <div className="inner postal-code">
            <div>
              <label htmlFor="" className="label">{en ? 'Postal code' : 'Posteinzahl'}*</label>
              <Input className='input'
              placeholder={user.company_address !== undefined ? user.company_address.split(', ')[1].split(' ')[0] :
              en ? 'Postal code...' : 'Posteinzahl...'}
               onChange={setCompanyCode}
              />
            </div>
          </div>
          <div className="inner city">
            <div>
              <label htmlFor="" className="label">{en ? 'City' : 'Stadt'}*</label>
              <Input className='input'
              placeholder={user.company_address !== undefined ? user.company_address.split(', ')[1].slice(1) :
              en ? 'Enter city...' : 'Stadt schreiben...'}
              value={companyCity === '' ? user.company_address !== undefined ? user.company_address.split(' ')[1].replace(',','')
               : companyCity: companyCity}
               onChange={setCompanyCity}
              />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="inner street">
            <div>
              <label htmlFor="" className="label">{en ? 'Street' : 'Straße'}*</label>
              <Input className='input'
              placeholder={user.company_address !== undefined ? user.company_address.split(', ')[0].split(" ").slice(0, user.company_address.split(', ')[0].split(" ").length - 1).join(" ") :
              en ? 'Enter street...' : 'Straße schreiben...'}
              value={companyStreet === '' ? user.company_address !== undefined ? user.company_address.split(', ')[0].split(" ").slice(0, user.company_address.split(', ')[0].split(" ").length - 1).join(" ")
              : companyStreet: companyStreet}
              onChange={setCompanyStreet}
              />
            </div>
          </div>
          <div className="inner nr">
            <div>
              <label htmlFor="" className="label">{en ? 'House nr' : 'Hausnummer'}*</label>
              <Input className='input'
              placeholder={user.company_address !== undefined ? user.company_address.split(', ')[0].split(" ")[user.company_address.split(', ')[0].split(" ").length - 1] :
              en ? 'Enter street...' : 'Straße schreiben...'}
              value={companyHN === '' ? user.company_address !== undefined ? user.company_address.split(', ')[0].split(" ")[user.company_address.split(', ')[0].split(" ").length - 1]
              : companyHN: companyHN}
              onChange={setCompanyHN}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-element double-input">
        <div className="inner country">
          <label className="label">{en ? 'Country' : 'Land'}</label>
          <div>
          <InputPicker
        className='input'
        data={countries === null ? [] : countries.sort().map((c: string) => ({label: c, value: c}))}
        onChange={setCompanyCountry}
        onOpen={getCountriesIfNeeded}
        value={companyCountry === '' ? user.company_address !== undefined ? user.company_address.split(', ')[1] : companyCountry: companyCountry}
        placeholder={user.company_address !== undefined ? user.company_address.split(', ')[1] : en ? 'Country' : 'Land'}
        renderMenu={menu => {
          if (cLoading) {
            return (
              <p style={{ padding: 10, color: mainColors.main, textAlign: 'center' }}>
                <SpinnerIcon spin /> Loading...
              </p>
            );
          }
          return menu;
        }}
        />
          </div>
        </div>
        <div className="inner url">
        <label htmlFor="" className="label">{en ? 'Company domain' : 'Firma Website'}*</label>
            <Input className='input' style={{width: '100%'}}
            placeholder={user.website !== undefined ? user.website :
              'Paste URL...'}
              value={website === '' ? user.website !== '' ?user.website
              : website: website}
              onChange={setCode}
              />
        </div>
      </div>
        <div className='form-element d-flex align-items-center flex-row'>
          <Toggle
          defaultChecked={checked}
          onClick={() => setChecked(!checked)}
          checkedChildren={<CheckIcon/>}
          unCheckedChildren={<CloseIcon/>}
          />
          <p className='ml-1' style={{color: mainColors.dark}}>
            {en ?
            'I hereby certify that I am legally entitled to act and enter into contracts on behalf of the company.' :
            'Hiermit bestätige ich, dass ich berechtigt bin gesetzlich im Namen der Firma zu handeln und Verträge abzuschließen.'
            }
          </p>
        </div>
        </>
      ) : null}
      <Button className='change-password-btn' appearance='link' onClick={sendPWResetMail}>
        {en ? 'Change password' : 'Passwort beendern'}
      </Button>
      <h4 className="new-section-title">
        {en ? 'Your address' : 'Deine Adresse'}
      </h4>
      <div className="form-element double-input">
        <div className="box1">
          <div className="inner postal-code">
            <div>
              <label htmlFor="" className="label">{en ? 'Postal code' : 'Posteinzahl'}*</label>
              <Input className='input'
              placeholder={user.address !== '' ? getZipCode(user) :
              en ? 'Postal code...' : 'Posteinzahl...'}
              value={code === '' ? user.address !== '' ? getZipCode(user)
               : code: code}
               onChange={setCode}
              />
            </div>
          </div>
          <div className="inner city">
            <div>
              <label htmlFor="" className="label">{en ? 'City' : 'Stadt'}*</label>
              <Input className='input'
              placeholder={user.address !== '' ? getCity(user) :
              en ? 'Enter city...' : 'Stadt schreiben...'}
              value={city === '' ? user.address !== '' ? getCity(user)
               : city: city}
               onChange={setCity}
              />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="inner street">
            <div>
              <label htmlFor="" className="label">{en ? 'Street' : 'Straße'}*</label>
              <Input className='input'
              placeholder={user.address !== '' ? getUserStreet(user) :
              en ? 'Enter street...' : 'Straße schreiben...'}
              value={street === '' ? user.address !== '' ? getUserStreet(user)
              : street: street}
              onChange={setStreet}
              />
            </div>
          </div>
          <div className="inner nr">
            <div>
              <label htmlFor="" className="label">{en ? 'House nr' : 'Hausnummer'}*</label>
              <Input className='input'
              placeholder={user.address !== '' ?
              getUserHousenumber(user) :
              en ? 'Enter house number...' : 'Hausnummer schreiben...'}
              value={houseNumber === '' ? user.address !== '' ? getUserHousenumber(user)
              : houseNumber: houseNumber}
              onChange={setHouseNumber}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="form-element double-input">
        <div className="inner add-address1">
          <div>
            <label htmlFor="" className="label">{en ? 'Additional address information' : 'Zuzetsliche Adresse Information'} {addAddress}</label>
            <Input className='input'
            placeholder={user.address.split(', ').length > 2 ? user.address.split(', ')[1] :
            en ? 'Write here...' : 'Hier schreiben...'}
            value={addAddress === '' ? user.address.split(', ').length > 2 ? user.address.split(', ')[1]
             : addAddress: addAddress}
             onChange={setAddAddress}
            />
          </div>
        </div>
        <div className="inner add-address2">
          <div>
            <label htmlFor="" className="label">{en ? 'Additional address information 2' : 'Zuzetsliche Adresse Information 2'} {addAddress2}</label>
            <Input className='input'
            placeholder={user.address.split(', ').length > 3 ? user.address.split(', ')[2] :
            en ? 'Write here...' : 'Hier schreiben...'}
            value={addAddress2 === '' ? user.address.split(', ').length > 3 ? user.address.split(', ')[2]
             : addAddress2: addAddress2}
             onChange={setAddAddress2}
            />
          </div>
        </div>
      </div>
      <div className="form-element double-input">
        <div className="inner country">

        <label className="label">{en ? 'Country' : 'Land'}*</label>
        <InputPicker
        className='input'
        data={countries === null ? [] : countries.sort().map((c: string) => ({label: c, value: c}))}
        onChange={setCountry}
        onOpen={getCountriesIfNeeded}
        value={country === '' ? user.country !== '' ? user.country : country: country}
        placeholder={user.country !== '' ? user.country : en ? 'Country' : 'Land'}
        renderMenu={menu => {
          if (cLoading) {
            return (
              <p style={{ padding: 10, color: mainColors.main, textAlign: 'center' }}>
                <SpinnerIcon spin /> Loading...
              </p>
            );
          }
          return menu;
        }}
        />
        </div>
        <div className="inner phone-number">
        <label className="label">{en ? 'Phone number' : 'Mobiltelefonnsummer'}*</label>
        <Input className='input'
        placeholder={user.phone_number !== '' ? user.phone_number : en ? 'Enter phone number...' :
      'Telefon Nummer schreiben'}
        value={phone === '' ? user.phone_number !== '' ? user.phone_number : phone : phone}
        onChange={setPhone}
        />
      </div>
      </div>
      <Button appearance='primary' className='r-btn r-main-btn' block onClick={saveChanges}
      disabled={Boolean(companyAccount) && !checked}>
        {en ? 'Save changes' : 'Speichern von Änderungen'}
      </Button>
      <ChangePasswordModal en={en} open={modalOpen} close={closeModal} user={user}/>
      <EModal en={en} open={eModalOpen} close={() => {
        closeEModal(); close();
        }} save={saveChanges}/>
    </div>
  )
}

export default ProfileForm
