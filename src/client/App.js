import React from "react";
import { getPhotos, addPhoto } from "./actions/photoActions";
import PhotoAdd from "./components/PhotoAdd/PhotoAdd";
import GalleryDisplay from "./components/GalleryDisplay/GalleryDisplay";
class App extends React.Component {
  render() {
    return (
      <div>
        <GalleryDisplay />
        <PhotoAdd />
      </div>
    );
  }
}

export default App;
