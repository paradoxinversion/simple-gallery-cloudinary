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
  photoDataURL,
  title,
  caption,
  copyrightHolder,
  copyrightYear,
  tags,
  dateTaken,
  nsfw
}) => {
  try {
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(
      photoDataURL
    );
    console.log("CLOUD::", cloudinaryResponse);
    const newPhoto = new Photo({
      url: cloudinaryResponse.url,
      height: cloudinaryResponse.height,
      width: cloudinaryResponse.width,
      format: cloudinaryResponse.resource_type,
      bytes: cloudinaryResponse.bytes,
      dateUploaded: cloudinaryResponse.created_at,
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
