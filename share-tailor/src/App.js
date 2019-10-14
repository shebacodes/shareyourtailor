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
    super(props); //mandatory in react, it calls the parent class
    this.state = {
      //I created this to store the array after rendered in the function
      items: []
    };
  }

  //I created this function to execute the fetch method

  getPins() {
    const key =
      "AmPocDu8RioL3HNygV5q-xya_YhfFcxEo1lZ8NdGOCxWioCugQGwwDAAABBuRjg-lyMgwE0AAAAA";
    fetch(
      `https://api.pinterest.com/v1/boards/bestystyles1/aso-ebi-styles/pins?access_token=${key}`,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }
    );
    // store the data I grabbed from the function. The data should be stored in the state
    console.log("gettingpins");
  }

  render() {
    return (
      <div className="App">
        <div class="boxed">
          <form>
            <form class="text-center">
              <div class="form-group w-75">
                <h1>Share your tailor</h1>
                <label for="Style "> Style</label>
                <input type="text" class="form-control"></input>
              </div>
              <div class="row d-flex justify-content-center"></div>
              <div class="form-group w-75">
                <label for="color"> Color</label>
                <input type="text" class="form-control"></input>
              </div>
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-primary content-center btn-lg"
                  color="pink"
                  onClick={() => this.getPins()}
                >
                  {" "}
                  Get My Style
                </button>
              </div>
            </form>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
