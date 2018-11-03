import React from "react";
import axios from "axios";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Stuff</p>
        <button
          onClick={async () => {
            const result = await axios.post("http://localhost:3000/api/photo", {
              caption: "Test Caption"
            });

            console.log(result);
          }}>
          Add Photo
        </button>
      </div>
    );
  }
}

export default App;
