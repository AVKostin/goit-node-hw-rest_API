const { Schema, model } = require("mongoose");
const Joi = require("joi");

const emailRegexp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            match: emailRegexp,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            minlength: 6,
            required: true,
        },
        avatarURL: {
            type: String,
            required: true,
        },
        token: {
            type: String,
        },
        verify: {
            type: Boolean,
            default: false,
        },
        verificationToken: {
            type: String,
            required: [true, "Verify token is required"],
        },
    },
    { versionKey: false, timestamps: true },
);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required(),
});

const email = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
});

const schemas = {
    register: registerSchema,
    login: loginSchema,
    email,
};

const User = model("user", userSchema);

module.exports = {
    User,
    schemas,
};
