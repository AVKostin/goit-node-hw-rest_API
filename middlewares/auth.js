// const jwt = require("jsonwebtoken");

// const { basedir } = global;

// const { User } = require(`${basedir}/models/user`);

// const { createError } = require(`${basedir}/helpers`);

// const { SECRET_KEY } = process.env;

// const auth = async (req, res, next) => {
//     const { authorization = "" } = req.headers;
//     const [bearer, token] = authorization.split(" ");
//     try {
//         if (bearer !== "Bearer") {
//             throw createError(401, "Not authorized");
//         }
//         const { id } = jwt.verify(token, SECRET_KEY);
//         const user = await User.findById(id);
//         if (!user || !user.token) {
//             throw createError(401, "Not authorized");
//         }
//         req.user = user;
//         next();
//     } catch (error) {
//         if (error.message === "Invalid signature") {
//             error.status = 401;
//         }
//         next(error);
//     }
// };

// module.exports = auth;

const jwt = require("jsonwebtoken");

const { basedir } = global;

const { User } = require(`${basedir}/models/user`);

console.log(User);

const { createError } = require(`${basedir}/helpers`);

const { SECRET_KEY } = process.env;

const auth = async (req, _, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer") {
        next(createError(401));
    }
    try {
        const { contactId } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(contactId);
        if (!user || !user.token) {
            next(createError(401));
        }
        req.user = user;
        next();
    } catch (error) {
        next(createError(401, error.message));
    }
};

module.exports = auth;
