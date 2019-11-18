import React, { Component } from "react";
import { apiTest, send } from "./api";
import Game from "./Game";

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
				<Game />
			</div>
		);
	}
}

export default App;
