import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'

type Props = {en: boolean, whithMail: boolean, closeModal: any}

const AuthModalAgbTxt = (props: Props) => {
  const {en, whithMail, closeModal} = props
  const navigate = useNavigate()

  return (
    <p className={`modal-privacy-policy ${whithMail ? 'hidden' : ''}`}>
      {en ? (
        <span className="inner">
          By continuing to use the App, you agree to the <a href="/privacy-policy" target="_blank" style={{padding: 0}}>Privacy Policy</a> and Redrum Pro <a href="/terms-and-conditions" target="_blank" style={{padding: 0}}>Terms and Conditions.</a>
        </span>
      ) : (
        <span className="inner">
          Indem Sie die App weiterhin nutzen, stimmen Sie der <a href="/privacy-policy" target="_blank">Datenschutzrichtlinie</a> und den <a href="/terms-and-conditions" target="_blank" style={{padding: 0}}>Allgemeinen Geschäftsbedingungen</a> von Redrum Pro zu.
        </span>
      )}
    </p>
  )
}

export default AuthModalAgbTxt
