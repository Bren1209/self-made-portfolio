const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config()

const auth = {
    auth: {
        api_key: 'api_key_here',
        domain: 'domain_here'
    }
}

const transporter = nodeMailer.createTransport(mailGun(auth));

const sendMail = (name, email, content, callback) => {
    const mailOptions = {
        from: email,
        to: 'info@bren-10.co.za',
        subject: name,
        text: content
    }
    
    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}

module.exports = sendMail;