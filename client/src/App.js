import React from "react";
import logo from "./logo.svg";
import adminView from "./components/adminView.js";
import "./App.css";
import axios from "axios";
// export sends the information, and import grabs it so its ready to use.

//this means that the class is the template for an object. Making the template called app.
// they have properties and behaviors, in this case, state and objects
//extends means inheritance , importing and inheriting from react component

class App extends React.Component {
  constructor(props) {
    super(props); //mandatory in react, it calls the parent class
    this.state = {
      //I created this to store the array after rendered in the function
      items: []
    };
  }

  //I created this function to execute the fetch method

  getPins() {
    fetch("/api");
  }

  render() {
    return (
      <div className="App">
        <div className="boxed">
          <form className="text-center">
            <div className="form-group w-75">
              <h1>Share your tailor</h1>
              <label htmlFor="Style "> Style</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="row d-flex justify-content-center"></div>
            <div className="form-group w-75">
              <label htmlFor="color"> Color</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary content-center btn-lg"
                color="pink"
                onClick={() => this.getPins()}
              >
                {" "}
                Get My Style
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
