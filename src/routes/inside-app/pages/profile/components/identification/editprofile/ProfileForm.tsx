import React from 'react'
import { Button, DatePicker, Input, InputPicker, Tooltip, Whisper } from 'rsuite'
import { FirebaseUser } from '../../../../../../../database/Objects'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import { mainColors } from '../../../../../themes/colors';
import { fetchContries } from '../../../../../../../misc/custom-hooks';

interface IProps {user: FirebaseUser, en: boolean}

const ProfileForm = (props: IProps) => {
  const {user, en} = props
  const today = new Date()

  const [title, setTitle] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [birthdate, setBirthdate] = React.useState<any>(today)
  const [email, setEmail] = React.useState('')
  const [country, setCountry] = React.useState('')
  const [code, setCode] = React.useState('')
  const [city, setCity] = React.useState('')
  const [street, setStreet] = React.useState('')
  const [phone, setPhone] = React.useState('')

  const titleData = [
    {label: 'Mr.', value: 'Mr.'}, {label: 'Miss.', value: 'Miss.'},
    {label: 'Other.', value: 'Other'}
  ]

  const [cLoading, setCLoading] = React.useState<boolean>(false)
  const [countries, setCountries] = React.useState<string[] | null>(null)

  React.useEffect(() => {
    //fetchContries(setCountries, setCLoading)

  }, [])

  const getCountriesIfNeeded = () => {
    if (countries === null) {
      fetchContries(setCountries, setCLoading)
    }
  }
  return (
    <div className='edit-profile-form'>
      <div className="form-element pronounce-element">
        <label className="label">Title</label>
        <InputPicker className='input picker' placeholder={user.title !== undefined ? user.title :
          en ? 'Select Title' : 'Titel.'}
          value={user.title !== undefined ? user.title : title} data={titleData}
          onChange={setTitle}
          />
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
      <Whisper trigger={'hover'} placement='top' speaker={(<Tooltip>
        Needed to invest
      </Tooltip>)}>
      <div className="form-element birthdate">
        <label className="label">{en ? 'Birtdate' : 'Geburtsdatum'}*</label>
        <DatePicker className='input'
        value={birthdate === today ? user.birth_date !== '' ? user.birth_date : null: birthdate}
        oneTap onChange={setBirthdate}/>
      </div>
      </Whisper>
      <div className="form-element email">
        <label className="label">{en ? 'Email address' : 'Email Adresse'}</label>
        <Input className='input' value={email === '' ? user.email : email} onChange={setEmail}/>
      </div>
      <Button className='change-password-btn' appearance='link'>
        {en ? 'Change password' : 'Passwort beendern'}
      </Button>
      <h4 className="new-section-title">
        {en ? 'Your address' : 'Deine Adresse'}
      </h4>
      <div className="form-element country">
        <label className="label">{en ? 'Country' : 'Land'}</label>
        <InputPicker
        className='input'
         data={countries === null ? [] : countries.sort().map((c: string) => ({label: c, value: c}))}
         onChange={setCountry}
         onOpen={getCountriesIfNeeded}
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
      <div className="form-element double-input">
        <div className="box1">
          <div className="inner postal-code">
            <div>
              <label htmlFor="" className="label">{en ? 'Postal code' : 'Posteinzahl'}</label>
              <Input className='input'
              placeholder={user.address !== '' ? user.address.split(',')[1].split(' ')[0] :
              en ? 'Postal code...' : 'Posteinzahl...'}
              value={code === '' ? user.address !== '' ? user.address.split(',')[1].split(' ')[0]
               : code: code}
               onChange={setCode}
              />
            </div>
          </div>
          <div className="inner city">
            <div>
              <label htmlFor="" className="label">{en ? 'City' : 'Stadt'}</label>
              <Input className='input'
              placeholder={user.address !== '' ? user.address.split(',')[1].split(' ')[1] :
              en ? 'Enter city...' : 'Stadt schreiben...'}
              value={city === '' ? user.address !== '' ? user.address.split(',')[1].split(' ')[1]
               : city: city}
               onChange={setCity}
              />
            </div>
          </div>
        </div>
        <div className="inner street">
          <div>
            <label htmlFor="" className="label">{en ? 'Street & house number' : 'Straße & Hausnummer'}</label>
            <Input className='input'
            placeholder={user.address !== '' ? user.address.split(',')[0] :
            en ? 'Enter street and house number...' : 'Straße und Hausnummer schreiben...'}
            value={street === '' ? user.address !== '' ? user.address.split(',')[0]
             : street: street}
             onChange={setStreet}
            />
          </div>
        </div>
      </div>
      <div className="form-element phone-number">
        <label className="label">{en ? 'Phone number' : 'Telefon Nummber'}</label>
        <Input className='input'
        placeholder={user.phone_number !== '' ? user.phone_number : en ? 'Enter phone number...' :
      'Telefon Nummer schreiben'}
        value={phone === '' ? user.phone_number !== '' ? user.phone_number : phone : phone}
        />
      </div>
      <Button appearance='primary' className='r-btn r-main-btn' block>
        {en ? 'Save changes' : 'Speichern von Änderungen'}
      </Button>
    </div>
  )
}

export default ProfileForm
