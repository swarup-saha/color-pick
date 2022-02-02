import React from "react";

class ColorBlock extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="color-block"
          onClick={() => {
            this.props.onClick(this.props.color);
          }}
          style={{
            backgroundColor: this.props.color
          }}
        ></div>
      </>
    );
  }
}

export default ColorBlock;
