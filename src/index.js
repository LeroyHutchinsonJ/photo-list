import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    urlArr: [],
    gender: ""
  };

  //Async means that the function will do some stuff at the same time, await tells the progam to chill out and focus on one task, can only use await in async functions
  async componentDidMount() {
    //Putting the Url in a variable
    const url = "https://randomuser.me/api/";

    //Need to use await to introduce promises, works as a replacement to .then
    const resource = await fetch(url);

    //Turning the response of the fetch api into json
    const data = await resource.json();

    //Set the state of the url arr array to the json data that I receive from the url
    this.setState({ urlArr: data.results });
  }

  render() {
    //Makes it so that i dont have to use this.state everytime I want to access inside of state for urlArr
    var { urlArr } = this.state;

    return (
      <div>
        {/*Using map to itterate through the array of objects and pic out what I need which is the photos*/}
        {urlArr.map(resource => (
          <img
            key={resource.id.value}
            src={resource.picture.medium}
            alt="Loading"
          />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
