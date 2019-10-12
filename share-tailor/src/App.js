import React from "react";
import logo from "./logo.svg";
import adminView from "./components/adminView.js";
import "./App.css";

// export sends the information, and import grabs it so its ready to use.

//this means that the class is the template for an object. Making the template called app.
// they have properties and behaviors, in this case, state and objects
//extends means inheritance , importing and inheriting from react component

class App extends React.Component {
  constructor(props) {
    // why do we make a constructor
    super(props); //mandatory in react, it calls the parent class
    this.state = {
      userView: true
    };
  }

  render() {
    return (
      <div className="App">
        <form>
          <div class="form-group w-75">
            <h1>Share your tailor</h1>
            <label for="Style "> Style</label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="form-group w-75">
            <label for="color"> Color</label>
            <input type="text" class="form-control"></input>
          </div>
          <div class="form-group">
            <button type="button" class="btn btn-primary btn-lg">
              {" "}
              Get My Tailor
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
