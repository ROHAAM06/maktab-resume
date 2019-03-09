import React, { Component } from "react";
class DownImg extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          background: this.props.background
        }}
      >
        <div
          style={{
            maxWidth: "30px"
          }}
        >
          <img
            src="images/down.png"
            style={{
              Width: "30px",
              transform: "translateY(-45px)"
            }}
          />
        </div>
      </div>
    );
  }
}

export default DownImg;
