const express = require("express");

const router = express.Router();
let arrayOfCont = require("../db/add_contacts");

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Contacts", array: arrayOfCont });
});

module.exports = router;
