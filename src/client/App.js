import React from "react";
import { getPhotos, addPhoto } from "./actions/photoActions";
import PhotoAdd from "./components/PhotoAdd/PhotoAdd";
class App extends React.Component {
  render() {
    return (
      <div>
        <PhotoAdd />
      </div>
    );
  }
}

export default App;
