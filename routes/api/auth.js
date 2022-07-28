const express = require("express");

const { basedir } = global;
const ctrl = require(`${basedir}/controllers/auth`);
const { ctrlWrapper } = require(`${basedir}/middlewares`);

const router = express.Router();

// router.post("/signup")
router.post("/register", ctrlWrapper(ctrl.register));

// router.post("/signin")
router.post("/login", ctrlWrapper(ctrl.login));

module.exports = router;
