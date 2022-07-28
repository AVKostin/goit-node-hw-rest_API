const express = require("express");

const { basedir } = global;
const { ctrlWrapper } = require(`${basedir}/middlewares`);
const { contacts: ctrl } = require(`${basedir}/controllers`);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.addContact));

router.put("/:contactId", ctrlWrapper(ctrl.updateContact));

router.patch(
    "/:contactId/favorite", ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
