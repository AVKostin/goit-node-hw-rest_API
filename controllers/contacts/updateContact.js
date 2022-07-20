const { NotFound } = require("http-errors");

const productsOperations = require("../../model/contacts");

const updateById = async (req, res) => {
    const { contactId } = req.params;
    const result = await productsOperations.updateById(contactId, req.body);
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

module.exports = updateById;
