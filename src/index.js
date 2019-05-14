import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    urlArr: []
  };
  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(json => this.setState({ urlArr: json }));
  };

  render() {
    var { urlArr } = this.state;

    return (
      <div>
        {urlArr.map(img => (
          <img key={img.id} src={urlArr.thumbnailUrl} alt="Nothing" />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
