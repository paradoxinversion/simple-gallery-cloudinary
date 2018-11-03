const Photo = require("../schema/Photo");
const cloudinary = require("cloudinary");
const getAllPhotos = async () => {
  try {
    const photos = await Photo.find();
    return photos;
  } catch (e) {
    throw e;
  }
};

const addPhoto = async ({
  photo,
  title,
  caption,
  copyrightHolder,
  copyrightYear,
  tags,
  dateTaken,
  nsfw
}) => {
  try {
    console.log(photo);
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(photo);
    console.log("CLOUD::", cloudinaryResponse);
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
