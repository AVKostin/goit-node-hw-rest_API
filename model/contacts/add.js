const { nanoid } = require("nanoid");

const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const add = async (data) => {
    const contacts = await getAll();
    const newContact = { ...data, id: nanoid() };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

module.exports = add;
