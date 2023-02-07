import React from 'react'
import { Link } from 'react-router-dom'
import { Toggle } from 'rsuite'
import signInPageStrings from '../../library/string/SignInPage'
import { mainColors } from '../inside-app/themes/colors'
import SignInForm from './components/signInForm'

const SignInPage = ({en, setEn}: {en: boolean, setEn: any}) => {
    return (
        <div
        className='pl-4 pr-4 dark-bg d-flex flex-column align-center'
        style={{height: 100 + 'vh', justifyContent: 'flex-start'}}
        >
            <div>
                <h1 className='txt-white txt-center mt-4 mb-3'>{en ? signInPageStrings.EN.btn : signInPageStrings.DE.btn}</h1>

            </div>
            <SignInForm en={en} />
            <p className='txt-white mt-1' >
                <span style={{opacity: .75}}>
                    {en ? signInPageStrings.EN.noAcc : signInPageStrings.DE.noAcc} &nbsp;
                </span>
                <Link to='/sign-up'>{en ? signInPageStrings.EN.link : signInPageStrings.DE.link}</Link>
            </p>
            <div className='mt-2'>
                  <span style={{color: mainColors.white, opacity: en ? 1 : .5}}>
                    EN
                  </span>
                  <Toggle defaultChecked={!en} onChange={setEn} style={styles.toggle} />
                  <span style={{color: mainColors.white, opacity: !en ? 1 : .5}}>
                    DE
                  </span>
                </div>
        </div>
    )
}

const styles = {
  toggle: {
    marginLeft: 15,
    marginRight: 15
  },
}

export default SignInPage
