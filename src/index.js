import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    loading: true,
    urlArr: []
  };

  async componentDidMount() {
    //Putting the Url in a variable
    const url = "https://api.randomuser.me/";

    //Putting the Url variable in the fetch api, then putting that in a variable
    const response = await fetch(url);

    //Turing the response of the fetch api into json
    const data = await response.json();
    console.log(data);
  }

  render() {
    var { urlArr, loading } = this.state;

    return <div>{loading ? "Loading..." : "Loaded"}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
