const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raomuskanydv2002@gmail.com',
        subject: 'Thanks for Joining with us',
        text: `Welcome to our world, ${name}. Let us now how you get along with the app`
    })
}

const sendAccountDeletionMail = (email, user) => {
    sgMail.send({
        to: email,
        from: 'raomuskanydv2002@gmail.com',
        subject: 'Your account has been cancenlled',
        text: `${name}, we have accepted your cancellation request. Please reviews our services so that we can provide you with better experience. Hope to see you again soon`
    })
}

module.exports = {
    sendWelcomeMail,
    sendAccountDeletionMail
}