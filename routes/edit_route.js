const express = require("express");

const router = express.Router();
let arrayOfCont = require("../db/add_contacts");

router.get("/", (req, res) => {
  res.render("contact", { title: "Contacts", array: arrayOfCont });
});

router.route("/:id").get(async (req, res) => {
  try {
    let idOfContact = req.params.id;

    let contactEdit = arrayOfCont.find((item) => item.id === idOfContact);

    res.render("edit_contact", { title: "Edit-Contact", contact: contactEdit });
  } catch (e) {
    console.log(e);
  }
});
router.route("/:id/delete").get(async (req, res) => {
  try {
    let idOfContact = req.params.id;

    let contact = arrayOfCont.find((item) => item.id === idOfContact);

    arrayOfCont.splice(arrayOfCont.indexOf(contact), 1);

    res.render("new_index", { title: "Contacts", array: arrayOfCont });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
