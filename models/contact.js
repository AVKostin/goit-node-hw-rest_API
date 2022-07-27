const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
    {
        name: {
            type: String,
            required: [true, "Set name for contact"],
            minlength: 2,
            maxlength: 50,
        },
        email: {
            type: String,
            required: [true, "Set email for contact"],
        },
        phone: {
            type: String,
            required: [true, "Set phone number for contact"],
        },
        favorite: {
            type: Boolean,
            default: false,
        },
    },
    { versionKey: false, timestamps: true },
);

const joiSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.string().required(),
});

const favoriteJoiSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const schemas = {
    add: joiSchema,
    updateFavorite: favoriteJoiSchema,
};

const Contact = model("contact", contactSchema);

module.exports = {
    Contact,
    schemas,
};
