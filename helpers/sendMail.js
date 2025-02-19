const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendMail = async (data) => {
    try {
        const email = { ...data, from: "asurv2@gmail.com" };
        await sgMail.send(email);
        return true;
    } catch (error) {
        throw error;
    }
};

module.exports = sendMail;
