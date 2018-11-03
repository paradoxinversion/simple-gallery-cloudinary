const PhotoActions = require("../database/actions/photo");

const addPhoto = async (req, res) => {
  try {
    console.log("Adding Photo", req);
    const addPhotoResult = await PhotoActions.addPhoto(req.body);
    console.log(addPhotoResult);
    res.status(201).json({
      result: "Photo Added"
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports = { addPhoto };
