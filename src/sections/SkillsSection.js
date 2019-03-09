import React, { Component } from "react";
import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard.js";

import "./SkillsSection.css";
import UpScroll from "../components/UpScroll.js";

class SkillsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Fullpage className="third" background={this.props.background}>
          <h3> {data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(card => {
              return <SkillCard card={card} />;
            })}
          </div>
        </Fullpage>

        <UpScroll background={this.props.background} />
      </div>
    );
  }
}

export default SkillsSection;
