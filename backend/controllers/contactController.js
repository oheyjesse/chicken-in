const nodemailer = require('nodemailer')

function sendEmail (req, res) {
  const emailBody = `
  <h2>We've been contacted!</h2>
  <p>Email: ${req.body.email}</p>
  <p>Reason: ${req.body.reason}</p>
  <p>Message: ${req.body.message}</p>
  `
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 25,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_ACCOUNT, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // setup email data with unicode symbols
  let mailOptions = {
    from: `"Chicken-In Support" <${process.env.EMAIL_ACCOUNT}>`, // sender address
    to: process.env.EMAIL_STRING, // list of receivers
    subject: 'Chickenin Message', // Subject line
    text: 'Hello world?', // plain text body
    html: emailBody // html body
  }

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message sent: %s', info.messageId)
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

    res.send('Email sent!')
  })
}

// export all controller functions required by router
module.exports = {
  sendEmail
}
