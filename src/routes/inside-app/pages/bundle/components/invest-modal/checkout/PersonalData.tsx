import { onValue, ref, update } from 'firebase/database'
import React from 'react'
import { Button, Input, Message, useToaster } from 'rsuite'
import { auth, database, userRef } from '../../../../../../../firebase'
import PushThemes from '../../../../../themes/PushThemes'
import { FirebaseUser } from '../../../../../../../database/Objects'

interface IProps {
  en: boolean,
  zip: string, city: string, street: string,
  hNum: string, aA1: string, aA2: string,
  country: string, state: string,
  fullName: string,
  knownState: string,
  knownCountry: string,
  user: FirebaseUser,
}

const PersonalData = (props: IProps) => {
  const {
    en, zip, city, street, hNum, aA1, aA2, country, state, fullName, knownState, knownCountry, user} = props
  const [name, setName] = React.useState<any>('')
  const [uStreet, setUStreet] = React.useState<any>('')
  const [hNumber, setHNumber] = React.useState<any>('')
  const [uZip, setUZip] = React.useState<any>('')
  const [uCity, setUCity] = React.useState<any>('')
  const [uState, setUState] = React.useState<any>('')
  const [uCountry, setUCountry] = React.useState<any>('')



  const toaster = useToaster()

  const saveChanges = async () => {
    const statements = [
      name.split(' ').length < 2 || name == '',
      street.length < 2 || street == '',
      hNumber == '',
      zip == '',
      city == '',
      state == '',
      country == ''
    ]
    const errorMessage =
      statements[0] ? 'Full name not entered correctly.' :
      statements[1] ? 'Street not entered correctly.' :
      statements[2] ? 'House number not entered correctly.' :
      statements[3] ? 'Zip code not entered correctly.' :
      statements[4] ? 'City not entered correctly.' :
      statements[5] ? 'State not entered correctly.' :
      'Country not entered correctly.'

    if (statements[0] || statements[1] || statements[2] || statements[3] || statements[4] || statements[5] || statements[6]) {
      toaster.push(
        <Message style={PushThemes.pushRed} type='error'>
          <p style={PushThemes.txt}>
            Error: {errorMessage}
          </p>
        </Message>
      )
      window.setTimeout(() => toaster.clear(), 8000)
    } else {
      const reference = ref(database, 'users/' + auth.currentUser?.uid)
      const updates: any = {}
      updates['full_name'] = name
      updates['zip_code'] = zip; updates['city'] = city;
      updates['city'] = city; updates['house_number'] = hNumber;
      updates['state'] = state
      updates['country'] = country
      update(reference, updates).then(() => {
        toaster.push(
          <Message style={PushThemes.pushGreen} type='success'>
            <p style={PushThemes.txt}>
              Information saved successfully
            </p>
          </Message>
        )
        window.setTimeout(() => toaster.clear(), 8000)
      }).catch((err) => {
        toaster.push(
          <Message style={PushThemes.pushRed} type='error'>
            <p style={PushThemes.txt}>
              Error: {err.Message}
            </p>
          </Message>
        )
        window.setTimeout(() => toaster.clear(), 8000)
      })
    }
  }
  return (
    <div className='checkout-card personal-data'>
      <h3 className="inner-title">
        {en ? 'Personal data' : 'Persönliche Daten'}
      </h3>
      {
        (zip !== '' && city !== '' && hNum !== '' && street !== '') ?
        (
          <div className="all-info">
            <p className="saved-info">
              {user.company_account ? user.company_name : fullName}
            </p>
            <p className="saved-info">
              {user.email}
            </p>
            <p className="saved-info">
            {user.company_account ? user.company_address : 
            `${user.street} ${user.house_number}, ${user.zip_code} ${user.city}${user.address_extra_1 !== '' ? `, ${user.address_extra_1}`: ''}${user.address_extra_2 !== '' ? `, ${user.address_extra_2}`: ''}`}
            </p>
          </div>
        )
        : (
          <>
          <div className="inputs">
        <div className="input-element">
          <div className='full-width'>
            <label>
              {en ? 'Full name' : 'Voller Name'}
            </label>
            <Input value={fullName !== '' ? fullName : name} onChange={setName}/>
          </div>
        </div>
        <div className="input-element">
          <div className="bigger">
            <label>
              {en ? 'Street name' : 'Straße'}
            </label>
            <Input value={street !== '' ? street : uStreet} onChange={setUStreet}/>
          </div>
          <div className="smaller">
            <label>
              {en ? 'House nr.' : 'Hausnummer'}
            </label>
            <Input value={hNum !== '' ? hNum : hNumber} onChange={setHNumber}/>
          </div>
        </div>
        <div className="input-element">
          <div className="smaller">
            <label>
              {en ? 'Zip-code' : 'Posteinzahl'}
            </label>
            <Input value={zip !== '' ? zip : uZip} onChange={setUZip}/>
          </div>
          <div className="bigger">
            <label>
              {en ? 'City' : 'Stadt'}
            </label>
            <Input value={city !== '' ? city : uCity} onChange={setUCity}/>
          </div>
        </div>
        <div className="input-element">
          <div className="fair">
            <label>
              {en ? 'State' : 'Bundesland'}
            </label>
            <Input value={state !== '' ? state : state} onChange={setUState}/>
          </div>
          <div className="fair">
            <label>
              {en ? 'Country' : 'Land'}
            </label>
            <Input value={country !== '' ? country : country} onChange={setUCountry}/>
          </div>
        </div>
          </div>
          <Button
          appearance='primary'
          className='r-btn r-main-btn mt-2'
          onClick={saveChanges}
          >
            {en ? 'Save' : 'Speichern'}
          </Button>
          </>
        )
      }

    </div>
  )
}

export default PersonalData
