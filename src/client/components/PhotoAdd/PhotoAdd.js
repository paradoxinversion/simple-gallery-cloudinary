import React from "react";
import { addPhoto } from "../../actions/photoActions";
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
      nsfw: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    const now = new Date(Date.now());
    const rawDate = new Date(Date.now()).getDate();
    let strDate = rawDate < 10 ? `0${rawDate}` : `${rawDate}`;

    const currentDateString = `${new Date(Date.now()).getFullYear()}-${new Date(
      Date.now()
    ).getMonth()}-${strDate}`;
    this.setState({
      copyrightYear: currentDateString,
      dateTaken: currentDateString
    });
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
      <div>
        <p>Add a Photo</p>
        <form>
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
          <button
            onClick={async () => {
              addPhoto();
            }}>
            Add Photo
          </button>
        </form>
      </div>
    );
  }
}

export default PhotoAdd;
