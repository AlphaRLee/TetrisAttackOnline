import React, { Component } from "react";
import { apiTest, send } from "./api";

class App extends Component {
	constructor(props) {
		super(props);
		apiTest();
	}

	render() {
		send();
		return <h1>Hello world</h1>;
	}
}

export default App;
