
const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  //console.log(process.env.SENDGRID_API_KEY)
  const { fname, lname,email,phone, message } = req.body
  console.log(process.env.USER_EMAIL)
  const content = {
    to: 'sushrams10@gmail.com',
    from: 'sushrams10@gmail.com',
    subject: `New Message From - ${email}`,
    text: message,
    html: `<p>Hi! My name is ${fname} ${lname}</p>
            <p>${message}</p><br>
            <p>Phone: ${phone}</p>`
  }

  try {
    await sgMail.send(content)
    res.status(200).send('Message sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('Message not sent.')
  }
}
