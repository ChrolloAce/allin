import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_39Cpz1sS_NHVXe94bPyAU1AMBBJmG5Nsf')

export async function POST(request: Request) {
  try {
    const { testEmail } = await request.json()
    
    if (!testEmail) {
      return NextResponse.json({ 
        success: false, 
        error: 'Test email address required' 
      }, { status: 400 })
    }

    console.log('Testing email delivery to:', testEmail)
    
    const result = await resend.emails.send({
      from: 'All In Plumbing <noreply@maktubworkspace.com>',
      to: testEmail,
      subject: 'Email Delivery Test - All In Plumbing',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #63C7E6; color: white; padding: 20px; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Email Test Successful!</h1>
                <p>All In Plumbing Solutions</p>
              </div>
              <div style="padding: 20px;">
                <p>This is a test email to verify email delivery is working correctly.</p>
                <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                <p>If you received this email, the email system is configured properly.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `Email Test Successful!\n\nThis is a test email from All In Plumbing Solutions.\nTimestamp: ${new Date().toISOString()}\n\nIf you received this email, the email system is working correctly.`
    })

    console.log('Test email result:', result)

    if (result.data?.id) {
      return NextResponse.json({
        success: true,
        message: 'Test email sent successfully!',
        emailId: result.data.id
      })
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to send test email',
        error: result.error
      }, { status: 500 })
    }

  } catch (error) {
    console.error('Test email error:', error)
    return NextResponse.json({
      success: false,
      message: 'Test email failed',
      error: error
    }, { status: 500 })
  }
}
