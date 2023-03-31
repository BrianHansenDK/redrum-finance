import React from 'react'
import { Button, DatePicker, Input, InputPicker } from 'rsuite'
import { FirebaseUser } from '../../../../../../../database/Objects'
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';
import { mainColors } from '../../../../../themes/colors';

interface IProps {user: FirebaseUser, en: boolean}

const ProfileForm = (props: IProps) => {
  const {user, en} = props
  const today = new Date()

  const [title, setTitle] = React.useState('')
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [birthdate, setBirthdate] = React.useState<any>(today)
  const [email, setEmail] = React.useState('')

  const titleData = [
    {label: 'Mr.', value: 'Mr.'}, {label: 'Miss.', value: 'Miss.'},
    {label: 'Other.', value: 'Other'}
  ]

  const [cLoading, setCLoading] = React.useState<boolean>(false)
  const [countries, setCountries] = React.useState<string[]>([])
  React.useEffect(() => {
    const headers = new Headers({
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      'Content-Type': 'application/json'
    })
    setCLoading(true)
    const url = `https://countrycode.dev/api/countries`
    fetch(url, {
      method: 'GET',
      headers,
      mode: 'cors'
      })
    .then(r => r)
    .then(data => console.log(data))/*
    .catch((err) => console.log('Error loading countries: ', err))
    .finally(() => setCLoading(false))*/
  }, [])

  return (
    <div className='edit-profile-form'>
      <div className="form-element pronounce-element">
        <label className="label">Title* {title}</label>
        <InputPicker className='input picker' placeholder={user.title !== undefined ? user.title :
          en ? 'Select Title' : 'Titel.'}
          value={user.title !== undefined ? user.title : title} data={titleData}
          onChange={setTitle}
          />
      </div>
      <div className="form-element double-input">
        <div className="inner">
        <label className="label">{en ? 'First name' : 'Vorname'}* {firstName}</label>
        <Input className='input' placeholder={en ? 'Enter first name...' : 'Vorname schreiben...'}
          value={firstName === '' ? user.full_name !== '' ? user.full_name.split(' ')[0] : firstName : firstName}
          onChange={setFirstName}
          />
        </div>
        <div className="inner">
        <label className="label">{en ? 'Last name' : 'Nach Name'}* {lastName}</label>
        <Input className='input' placeholder={en ? 'Enter Last name...' : 'Nach Name schreiben...'}
          value={lastName === '' ? user.full_name !== '' ? user.full_name.split(' ').slice(1).join(' ') : lastName : lastName}
          onChange={setLastName}
          />
        </div>
      </div>
      <div className="form-element birthdate">
        <label className="label">{en ? 'Birtdate' : 'Geburtsdatum'}*{birthdate.toLocaleDateString()}</label>
        <DatePicker className='input'
        value={birthdate === today ? user.birth_date !== '' ? user.birth_date : birthdate: birthdate}
        oneTap onChange={setBirthdate}/>
      </div>
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
         data={countries.map((c: string) => ({label: c, value: c}))} labelKey='country'
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
        <p>{countries}</p>
      </div>
    </div>
  )
}

export default ProfileForm
