import React from "react";
import "./app.css";
import ColorBlock from "./ColorBlock";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "lightgray"
    };
  }
  updateColor = (colorValue) => {
    this.setState({
      color: colorValue
    });
  };
  render() {
    return (
      <>
        <div className="color-container">
          <ColorBlock color="red" onClick={this.updateColor} />
          <ColorBlock color="green" onClick={this.updateColor} />
          <ColorBlock color="blue" onClick={this.updateColor} />
          <ColorBlock color="orange" onClick={this.updateColor} />
          <ColorBlock color="pink" onClick={this.updateColor} />
        </div>
        <div
          className="target-div"
          style={{
            backgroundColor: this.state.color
          }}
        ></div>
      </>
    );
  }
}

export default App;
