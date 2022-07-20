const { NotFound } = require("http-errors");

const productsOperations = require("../../model/contacts");

const getById = async (req, res) => {
    const { contactId } = req.params;
    const result = await productsOperations.getById(contactId);
    if (!result) {
        throw new NotFound(`Product with id=${contactId} not found`);
    }
    res.json({
        status: "success",
        code: 200,
        data: {
            result,
        },
    });
};

module.exports = getById;
