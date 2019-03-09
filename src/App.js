import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import TitlesAndIcons from "./sections/TitlesAndIcon";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import Navigation from "./components/Navigation";
import SnowStorm from "react-snowstorm";
import { Link, Element } from "react-scroll";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      background_first: "#004080",
      background_second: "#1e1f26",
      background_third: "#c0c0c0",
      counter: 0
    };
  }
  changeColor = () => {
    let rang = ["green", "#b3cde0", "#f4b6c2", "#e6e6ea"];
    let zamine = ["#461220", "#011f4b", "#251e3e", "#1e1f26"];
    if (this.state.counter > 3) {
      this.setState({
        counter: 0,
        color: rang[this.state.counter],
        background_first: " #3c2f2f",
        background_second: " #3c2f2f",
        background_third: " #3c2f2f"
      });
    } else
      this.setState({
        color: rang[this.state.counter],
        background_first: zamine[this.state.counter],
        background_second: zamine[this.state.counter],
        background_third: zamine[this.state.counter],
        counter: this.state.counter + 1
      });
  };
  render() {
    return (
      <div className="App">
      <SnowStorm animationInterval = {50} snowCharacter = {"*"} vMaxY={2} vMaxX ={2}/>
        <Element name="Home" className="element" />
        <Navigation background={this.state.background} />
        <div className="changetheme">
          <img onClick={this.changeColor} src="images/color.png" alt="" />
        </div>

        <TitlesAndIcons
          color={this.state.color}
          background={this.state.background_first}
        />
        <AboutSection
          color={this.state.color}
          background={this.state.background_second}
        />
        <SkillsSection
          color={this.state.color}
          background={this.state.background_third}
        />
      </div>
    );
  }
}

export default App;
