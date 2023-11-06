import React from 'react'
import { Resend } from 'resend';
import { Button } from 'rsuite';
import { NextResponse } from 'next/dist/server/web/spec-extension/response';
import testMail from '../../emails/testmail';
interface IProps {}

const TestPage: React.FunctionComponent<IProps> = (props) => {

  const [sending, setSending] = React.useState<boolean>(false)

  // Configure resend account
  const resend = new Resend(import.meta.env.VITE_EMAIL_API_KEY);


    const sendMail = async () => {
      setSending(true);

        resend.emails.send({
          from: 'onboarding@resend.dev',
          to: 'brianhansen.work@gmail.com',
          subject: 'Hello World',
          html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
        });

      setSending(false);
    }

    return (
      <div>
        <p>
          Test Page
        </p>
        <Button disabled={sending} onClick={sendMail}>
          Press me!
        </Button>
      </div>
    )
}

export default TestPage;
