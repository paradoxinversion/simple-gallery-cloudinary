import React from "react";
import { getPhotos } from "../../actions/photoActions";

class GalleryDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }
  async componentDidMount() {
    const photos = await getPhotos();
    this.setState({
      photos
    });
  }
  render() {
    return (
      <div>
        <p>Derp</p>
      </div>
    );
  }
}

export default GalleryDisplay;
