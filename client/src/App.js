import React, { Component } from "react";
import { apiTest, send } from "./api";
import P5Wrapper from "react-p5-wrapper";
import sketch from "./sketch";

class App extends Component {
	constructor(props) {
		super(props);
		apiTest();
	}

	render() {
		send();
		return (
			<div className="container">
				<h1>Tetris Attack</h1>
				<P5Wrapper sketch={sketch} />
			</div>
		);
	}
}

export default App;
