const PhotoActions = require("../database/actions/photo");

const addPhoto = async (req, res) => {
  try {
    console.log("Adding Photo", req);
    const addPhotoResult = await PhotoActions.addPhoto(req.body);
    res.status(201).json({
      result: addPhotoResult
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports = { addPhoto };
