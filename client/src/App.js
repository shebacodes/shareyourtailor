import React from "react";
import "./App.css";
// export sends the information, and import grabs it so its ready to use.

//this means that the class is the template for an object. Making the template called app.
// they have properties and behaviors, in this case, state and objects
//extends means inheritance , importing and inheriting from react component

class App extends React.Component {
  constructor(props) {
    super(props); //mandatory in react, it calls the parent class
    this.state = {
      loading: false,
      pins: [], // initialized to an empty array, map method to render
      error: false
    };
  }

  //I created this function to execute the fetch method
  getPins() {
    fetch("/api")
      .then(response => response.json()) //this converts the response to a JSON file
      .then(response =>
        this.setState({
          isLoaded: true, // still don't understand what isloaded means
          pins: response.data // .data, because we need the data from the json object
        })
      );

    //function created to handle input
    //use then to create a function that stores the data in set.state
    // refer to the set state in this.state
    // render the data to the single page application
  }

  render() {
    const API = "/api";
    const pins = this.state.pins.map(pinData => (
      <img src={pinData.image.original.url}></img>
    ));
    return (
      <div className="App">
        <div className="container">
          <form className="text-center">
            <div className="form-group w-75">
              <label htmlFor="Style "> Style</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="row d-flex justify-content-center"></div>
            <div className="form-group w-75">
              <label htmlFor="color"> Color</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group w-75">
              <button
                type="button1"
                className="btn btn-primary content-center btn-lg"
                class="12px"
                onClick={() => this.getPins()}
              >
                Get Style
              </button>
              <div>{pins}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
