import React from 'react'
import { Link } from 'react-router-dom'
import { Toggle } from 'rsuite'
import signInPageStrings from '../../library/string/SignInPage'
import signUpModalStrings from '../../library/string/SignUpModal'
import { useMediaQuery } from '../../misc/custom-hooks'
import { mainColors } from '../inside-app/themes/colors'
import PhoneBackNav from './components/PhoneBackNav'
import SignUpForm from './components/signUpForm'
import SignUpInnerForm from './components/SingUpInnerForm'

const SignUpPage = ({en, setEn}: {en: boolean, setEn: any}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <>
          {isMobile ? (<PhoneBackNav en={en}/>) : null}
            <div
                className={`${isMobile ? 'pt-5' : 'pl-4 pr-4'} dark-bg d-flex flex-column align-center`}
                style={styles.wrap}
            >
                <div className={isMobile ? 'mt-5' : ''}>
                  {
                    isMobile ? null : (
                      <h1 className='txt-white txt-center mt-4 mb-3'>
                      {en ? signInPageStrings.EN.link : signInPageStrings.DE.link }
                      </h1>
                    )
                  }
                </div>
                <SignUpForm en={en}/>
                <p className='txt-white mt-1' >
                    <span style={{ opacity: .75 }}>
                        {en ? signUpModalStrings.EN.login : signUpModalStrings.DE.login} &nbsp;
                    </span>
                    <Link to='/sign-in'>Login</Link>
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

        </>
    )
}

const styles = {
    wrap: {
        minHeight: '100vh',
        justifyContent: 'flex-start',
        paddingBottom: 75,
    },
    link: {
      color: mainColors.active
    },
    toggle: {
      marginLeft: 15,
      marginRight: 15,
    }
}

export default SignUpPage
