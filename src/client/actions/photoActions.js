import axios from "axios";

export const getPhotos = async () => {
  const result = await axios.get("http://localhost:3000/api/photo");
  return result;
};

export const addPhoto = async () => {
  const result = await axios.post("http://localhost:3000/api/photo", {
    caption: "Test Caption"
  });

  return result;
};
