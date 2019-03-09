import React, { Component } from "react";
import { Link, Element } from "react-scroll";

class UpScroll extends Component {
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
        <Link
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <img
            src="images/up.png"
            style={{
              width: "30px"
            }}
          />
        </Link>
      </div>
    );
  }
}

export default UpScroll;
