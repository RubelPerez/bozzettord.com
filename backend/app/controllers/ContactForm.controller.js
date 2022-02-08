const { InsertContactForm } = require('../dal/ContactForm.dal.js')


exports.InsertToDB = async (req, res) => {
    const sendEmail = sendContactEmail(req.body.ContactData)
    if (sendEmail) {
        const insertToDB = InsertContactForm(req.body.ContactData);
    }
    else {

    }

}