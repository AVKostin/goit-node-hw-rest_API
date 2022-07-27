const express = require("express");

const { basedir } = global;

const { validation, ctrlWrapper } = require(`${basedir}/middlewares`);
const { schemas } = require(`${basedir}/models/contact`);
const { contacts: ctrl } = require(`${basedir}/controllers`);

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validation(schemas.add), ctrlWrapper(ctrl.addContact));

router.put(
    "/:contactId",
    validation(schemas.add),
    ctrlWrapper(ctrl.updateContact),
);

router.patch(
    "/:contactId/favorite",
    validation(schemas.updateFavorite),
    ctrlWrapper(ctrl.updateStatusContact),
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
