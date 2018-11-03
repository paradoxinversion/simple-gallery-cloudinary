import axios from "axios";
import { extractTags } from "../galleryUtilities";
export const getPhotos = async () => {
  const result = await axios.get("http://localhost:3000/api/photo");
  return result;
};

export const addPhoto = async ({
  photo,
  title,
  caption,
  copyrightHolder,
  copyrightYear,
  tags,
  dateTaken,
  nsfw
}) => {
  console.log(photo);
  const result = await axios.post("http://localhost:3000/api/photo", {
    photo,
    title,
    caption,
    copyrightHolder,
    copyrightYear,
    tags: extractTags(tags),
    dateTaken,
    nsfw
  });

  return result;
};
