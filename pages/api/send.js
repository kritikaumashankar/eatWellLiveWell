
const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const { fname, lname,email,phone, message } = req.body
  const content = {
    to: 'sushrams10@gmail.com',
    from: 'sushrams10@gmail.com',
    subject: `New Message From - ${fname} ${lname}`,
    reply_to: email,
    text: message,
    html: `<div style = {{fonr-size: '1rem'}}>
              <p>${message}</p><br>
              <p>Name: <strong>${fname} ${lname}</strong></p>
              <p>Phone: <strong>${phone}</strong></p>
           </div>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
