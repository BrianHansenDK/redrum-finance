import {NextResponse} from 'next/server'
import { Resend } from 'resend';
import testMail from '../../emails/testmail';

// Configure resend account
const resend = new Resend(import.meta.env.VITE_EMAIL_API_KEY);


export async function POST(request: Request) {
    const {firstName} = await request.json()
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'brianhansen.work@gmail.com',
        subject: 'test email',
        react: testMail()
    })

    return NextResponse.json({
        status: 'OK'
    })
}