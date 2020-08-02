const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'api key here',
        domain: 'domain here'
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