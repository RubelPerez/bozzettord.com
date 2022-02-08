const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
//const auth = require("./app/middleware/auth");
const jwt = require("jsonwebtoken");
const knex = require("./app/config/database/config.js");

// const secret = 'eThicLine';

const corsConfig = {
    credentials: true,
    origin: true,
};

app.use(cors(corsConfig));
// bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

// home de la api
app.get("/", async (req, res) => {
  
});
//login
require("./app/routes/login.route.js")(app);
//contact form
require("./app/routes/ContactForm.route.js")(app);


// puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
