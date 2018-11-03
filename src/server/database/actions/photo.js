const Photo = require("../schema/Photo");

const getAllPhotos = async () => {
  try {
    const photos = await Photo.find();
    return photos;
  } catch (e) {
    throw e;
  }
};

const addPhoto = async ({
  title,
  caption,
  copyrightHolder,
  copyrightYear,
  tags,
  dateTaken,
  nsfw
}) => {
  try {
    console.log("got photo::", caption);
    const newPhoto = new Photo({
      title,
      caption,
      copyrightHolder,
      copyrightYear,
      tags,
      dateTaken,
      nsfw
    });

    await newPhoto.save();
    return newPhoto;
  } catch (e) {
    throw e;
  }
};

module.exports = {
  addPhoto,
  getAllPhotos
};
