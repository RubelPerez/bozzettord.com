module.exports = app => {
    const login = require("../controllers/login.controller.js");
    var router = require("express").Router();
    //const auth = require('../middleware/auth');
    
    router.get("/damelaluz",login.saludo)

    app.use('/api', router);

}