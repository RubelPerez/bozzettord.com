module.exports = app => {

    const router = require("express").Router();
    const ContactFormController = require("../controllers/ContactForm.controller.js");
    router.post("/insertToDB",ContactFormController.InsertToDB)

    app.use("/api",router)
}