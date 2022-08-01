const express = require("express");

const { basedir } = global;

const { auth } = require(`${basedir}/middlewares`);

const { ctrlWrapper } = require(`${basedir}/helpers`);

const { contacts: ctrl } = require(`${basedir}/controllers`);

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.addContact));

router.put("/:contactId", auth, ctrlWrapper(ctrl.updateContact));

router.patch(
    "/:contactId/favorite",
    auth,
    ctrlWrapper(ctrl.updateStatusContact),
);
router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeContact));

module.exports = router;
