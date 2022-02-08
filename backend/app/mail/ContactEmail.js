require('dotenv').config()
const nodemailer = require('nodemailer')
//correo 
let transport = nodemailer.createTransport({
    maxConnections: 2,
    pool: true,
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
const sendContactEmail = () => {
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        // bcc: [correo oculto, correo oculto...etc],
        subject: 'klk wawawa',
        html: `
      <html>
        <body>
         klk wawawa
        </body>
      </html>
      `
    }
    transport.sendMail(mailOptions, (error, info) => {

        if (error) {
            return false;
        }
        else {
            return true;
        }
    })
}


module.exports = { sendContactEmail }