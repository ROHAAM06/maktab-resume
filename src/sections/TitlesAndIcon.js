import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import { Link, Element } from "react-scroll";
import Fullpage from "../components/Fullpage";
import "./TitlesAndIcon.css";
import { Transform } from "stream";
import DownImg from "../components/DownImg.js";

class TitlesAndIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        
        <Fullpage className="first" background={this.props.background}>
        
          <h1 className="title" style={{ color: this.props.color }}>
            {data.title}
          </h1>
          <div>
            <h2 style={{ color: this.props.color }}>{data.subtitle}</h2>
          </div>
          <div className="icon-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} className="icon" />
                </div>
              );
            })}
          </div>
        </Fullpage>
       
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            delay={0}
          >
            <DownImg background={this.props.background}/>
          </Link>
          <Element name="About" className="element" />
        
      </div>
    );
  }
}

export default TitlesAndIcons;
