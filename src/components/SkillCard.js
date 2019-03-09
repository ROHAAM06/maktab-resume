import React, { Component } from "react";
import './SkillCard.css'
class SkillCard extends Component {
  state = {};
  render() {
    const { card } = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img src={card.content.image } alt=""/>
        </div>
        <div className="skill-title-wrapper">
          <h4>{card.content.title}</h4>
        </div>
      </div>
    );
  }
}

export default SkillCard;
