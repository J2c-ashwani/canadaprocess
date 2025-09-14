import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called')
    
    const body = await request.json()
    console.log('Request body:', body)
    
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      company, 
      service, 
      budget, 
      message, 
      source = 'Contact Form' 
    } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    const fullName = `${firstName} ${lastName}`
    const currentDate = new Date().toLocaleString('en-CA', {
      timeZone: 'America/Toronto',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })

    console.log('Preparing to send emails...')

    // Email to business owner
    const businessOwnerEmailData = {
      from: 'FSI Digital <onboarding@resend.dev>',
      to: ['sukashwanikumar@gmail.com'],
      replyTo: email,
      subject: `🚀 New ${source} Enquiry from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Enquiry</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 New Contact Enquiry</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0;">FSI Digital Canada</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Contact Details</h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #10b981; text-decoration: none;">${phone}</a></td>
                </tr>
                ` : ''}
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                </tr>
                ` : ''}
                ${service ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${service}</td>
                </tr>
                ` : ''}
                ${budget ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Budget:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${budget}</td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Source:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${source}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Date:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${currentDate} EST</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px;">
              <h3 style="color: #1f2937; margin-top: 0; border-bottom: 2px solid #10b981; padding-bottom: 10px;">Message</h3>
              <div style="background: #f3f4f6; padding: 15px; border-radius: 6px; border-left: 4px solid #10b981;">
                <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                Reply directly to this email to respond to ${fullName}
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    // Auto-reply email to client
    const clientEmailData = {
      from: 'FSI Digital <onboarding@resend.dev>',
      to: [email],
      subject: `Thank you for contacting FSI Digital Canada, ${firstName}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You - FSI Digital Canada</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${firstName}!</h1>
            <p style="color: #d1fae5; margin: 10px 0 0 0; font-size: 16px;">We've received your enquiry</p>
          </div>
          
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1f2937; margin-top: 0;">What happens next?</h2>
              
              <div style="margin: 20px 0;">
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; font-size: 12px;">1</div>
                  <div>
                    <strong style="color: #1f2937;">Review & Analysis</strong>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">We'll review your requirements and prepare a customized proposal</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                  <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; font-size: 12px;">2</div>
                  <div>
                    <strong style="color: #1f2937;">Personal Response</strong>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Our team will contact you within 24 hours with detailed information</p>
                  </div>
                </div>
                
                <div style="display: flex; align-items: center;">
                  <div style="background: #10b981; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; margin-right: 15px; font-size: 12px;">3</div>
                  <div>
                    <strong style="color: #1f2937;">Free Consultation</strong>
                    <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">Schedule a free consultation to discuss your project in detail</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
              <h3 style="color: #92400e; margin-top: 0; font-size: 16px;">🚀 Why Choose FSI Digital Canada?</h3>
              <ul style="color: #92400e; margin: 10px 0; padding-left: 20px;">
                <li>85% success rate with government grants</li>
                <li>500+ successful startup websites launched</li>
                <li>Average 300% increase in online conversions</li>
                <li>Dedicated Canadian startup specialists</li>
              </ul>
            </div>
            
            <div style="background: white; padding: 25px; border-radius: 8px; text-align: center;">
              <h3 style="color: #1f2937; margin-top: 0;">Need immediate assistance?</h3>
              <p style="color: #6b7280; margin-bottom: 20px;">Don't wait - reach out to us directly!</p>
              
              <div style="margin: 15px 0;">
                <p style="margin: 5px 0;"><strong>📧 Email:</strong> <a href="mailto:hello@fsidigital.ca" style="color: #10b981; text-decoration: none;">hello@startupboost.ca</a></p>
                <p style="margin: 5px 0;"><strong>📞 Phone:</strong> <a href="tel:+15551234567" style="color: #10b981; text-decoration: none;">+1 (555) 123-4567</a></p>
                <p style="margin: 5px 0;"><strong>🕒 Hours:</strong> Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This email was sent because you contacted us through our website.<br>
                FSI Digital Canada - Empowering Canadian Startups Since 2020
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    }

    try {
      // Send email to business owner
      console.log('Sending business owner email...')
      const businessResult = await resend.emails.send(businessOwnerEmailData)
      console.log('Business owner email result:', businessResult)

      // Send auto-reply to client
      console.log('Sending client auto-reply...')
      const clientResult = await resend.emails.send(clientEmailData)
      console.log('Client email result:', clientResult)

      console.log('Both emails sent successfully')
      
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your enquiry! We\'ll get back to you within 24 hours.',
        businessEmailId: businessResult.data?.id,
        clientEmailId: clientResult.data?.id
      })

    } catch (emailError) {
      console.error('Error sending emails:', emailError)
      
      // Return more specific error information
      return NextResponse.json(
        { 
          error: 'Failed to send emails', 
          details: emailError instanceof Error ? emailError.message : 'Unknown email error',
          hasApiKey: !!process.env.RESEND_API_KEY
        },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('General API error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
