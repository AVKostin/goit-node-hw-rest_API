const register = require("./register");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const setAvatar = require("./setAvatar");

module.exports = {
    register,
    verifyEmail,
    resendVerifyEmail,
    login,
    getCurrent,
    logout,
    setAvatar,
};
