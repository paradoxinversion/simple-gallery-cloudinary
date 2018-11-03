const PhotoActions = require("../database/actions/photo");

const getAll = async (req, res) => {
  try {
    const photos = await PhotoActions.getAllPhotos();
    res.status(200).json({
      photos
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};

const addPhoto = async (req, res) => {
  try {
    const addPhotoResult = await PhotoActions.addPhoto(req.body);
    res.status(201).json({
      result: { photo: addPhotoResult }
    });
  } catch (e) {
    res.json({ error: e.message });
  }
};

module.exports = { addPhoto, getAll };
