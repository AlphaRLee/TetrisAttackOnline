import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";

class Game extends Component {
	state = {};
	render() {
		return <P5Wrapper sketch={sketch} />;
	}
}

export default Game;
