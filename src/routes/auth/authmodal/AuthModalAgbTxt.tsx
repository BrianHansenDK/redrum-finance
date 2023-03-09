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
          By continuing to use the App, you agree to the <Button appearance='link' style={{padding: 0}} onClick={() => {
            closeModal()
            navigate("/privacy-policy")
            }}>Privacy Policy</Button> and Redrum Pro <Button appearance='link' style={{padding: 0}} onClick={() => {
            closeModal()
            navigate("/terms-and-conditions")
            }}>Terms and Conditions.</Button>
        </span>
      ) : (
        <span className="inner">
          Indem Sie die App weiterhin nutzen, stimmen Sie der <Button appearance='link' style={{padding: 0}} onClick={() => {
            closeModal()
            navigate("/privacy-policy")
            }}>Datenschutzrichtlinie</Button> und den <Button appearance='link' style={{padding: 0}} onClick={() => {
            closeModal()
            navigate("/terms-and-conditions")
            }}>Allgemeinen Geschäftsbedingungen</Button> von Redrum Pro zu.
        </span>
      )}
    </p>
  )
}

export default AuthModalAgbTxt
