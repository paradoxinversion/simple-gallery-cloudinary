import React from "react";
import { getPhotos } from "../../actions/photoActions";
import "./GalleryDisplay.css";
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
      photos: photos.data.photos
    });
  }
  render() {
    return (
      <div>
        {this.state.photos &&
          this.state.photos.map(photo => {
            return (
              <img
                className="gallery__photo"
                src={photo.url}
                alt={photo.caption}
              />
            );
          })}
      </div>
    );
  }
}

export default GalleryDisplay;
