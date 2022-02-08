
const knex = require('../config/database/config')


const InsertContactForm = async (body) => {
    const trx = await knex.transaction();

    try {
        const ContactForm = await trx("contacts").insert
            ({

            })
            .then(result => {
                return result
            })
            .catch(err => {
                console.log(err)
            })

        await trx.commit();

        return true;
    }
    catch (err) {
        await trx.rollback();
        console.log(err)
        return false;
    }
}


module.exports = { InsertContactForm }