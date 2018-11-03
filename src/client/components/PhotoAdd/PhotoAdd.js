import React from "react";
import { addPhoto } from "../../actions/photoActions";
import "./PhotoAdd.css";
class PhotoAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      caption: "",
      copyrightHolder: "",
      copyrightYear: "",
      tags: "",
      dateTaken: "",
      nsfw: false,
      photo: null,
      photoDataURL: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePhotoSubmit = this.handlePhotoSubmit.bind(this);
    this.handlePhotoSelect = this.handlePhotoSelect.bind(this);
    this.fileInput = React.createRef();
  }

  componentDidMount() {
    const now = new Date(Date.now());

    // If the date is before the 10th, rawDate will have one digit
    // This needs to be padded with a 0 to display the calendor properly
    const rawDate = new Date(Date.now()).getDate();
    let strDate = rawDate < 10 ? `0${rawDate}` : `${rawDate}`;

    const currentDateString = `${now.getFullYear()}-${now.getMonth()}-${strDate}`;
    this.setState({
      copyrightYear: currentDateString,
      dateTaken: currentDateString
    });
  }

  handleChange() {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handlePhotoSelect(e) {
    this.setState(
      state => {
        return { photo: this.fileInput.current.files[0] };
      },
      async () => {
        const reader = new FileReader();
        reader.onload = e => {
          this.setState({
            photoDataURL: e.target.result
          });
        };
        this.setState({
          photoDataURL: reader.readAsDataURL(this.state.photo)
        });
      }
    );
  }

  handlePhotoSubmit(e) {
    e.preventDefault();
    console.log(this.fileInput.current.files[0]);
    this.setState(
      state => {
        return {
          photo: this.fileInput.current.files[0]
        };
      },
      () => {
        addPhoto(this.state);
      }
    );
  }

  render() {
    const {
      title,
      caption,
      copyrightHolder,
      copyrightYear,
      tags,
      dateTaken,
      nsfw
    } = this.state;
    return (
      <div id="photo-add">
        <p>Add a Photo</p>
        <form id="photo-add-form">
          <label htmlFor="photo-title">Title</label>
          <input
            id="photo-title"
            name="title"
            type="text"
            placeholder="What is the photo's Name?"
            value={title}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-caption">Caption</label>
          <input
            id="photo-caption"
            name="caption"
            type="text"
            placeholder="What caption would you like to use?"
            value={caption}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-copyright-holder">Copyright Holder</label>
          <input
            id="photo-copyright-holder"
            name="copyrightHolder"
            type="text"
            placeholder="Who owns the photo?"
            value={copyrightHolder}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-copyright-year">Copyright Year</label>
          <input
            id="photo-copyright-year"
            name="copyrightYear"
            type="date"
            value={copyrightYear}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-tags">Tags (comma separated)</label>
          <input
            id="photo-tags"
            name="tags"
            type="text"
            placeholder="clear, blue, sky"
            value={tags}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-date-taken">Date Taken</label>
          <input
            id="photo-date-taken"
            name="dateTaken"
            type="date"
            value={dateTaken}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-nsfw">NSFW</label>
          <input
            id="photo-nsfw"
            name="nsfw"
            type="checkbox"
            value={nsfw}
            onChange={this.handleChange}
          />
          <label htmlFor="photo-add">Add Photo</label>
          <input
            id="photo-add"
            type="file"
            name="photo"
            ref={this.fileInput}
            accept="image/png, image/jpeg"
            onChange={this.handlePhotoSelect}
          />
          <img
            src={
              this.state.photoDataURL !== null ? this.state.photoDataURL : ""
            }
            alt="Preview..."
            height="200"
          />
        </form>
        <button onClick={this.handlePhotoSubmit}>Submit</button>
      </div>
    );
  }
}

export default PhotoAdd;
