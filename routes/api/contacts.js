const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema, favoriteJoiSchema } = require("../../models/contact");
const { contacts: ctrl } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getById));

router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.put(
    "/:contactId",
    validation(joiSchema),
    ctrlWrapper(ctrl.updateContact),
);

router.patch(
    "/:contactId/favorite",
    validation(favoriteJoiSchema),
    ctrlWrapper(ctrl.updateStatusContact),
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

module.exports = router;
