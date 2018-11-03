const Photo = require("../schema/Photo");

const addPhoto = async ({ caption }) => {
  try {
    console.log("got photo::", caption);
    return "Added photo";
  } catch (e) {
    throw e;
  }
};

module.exports = {
  addPhoto
};
