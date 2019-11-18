import React, { Component } from "react";

class App extends Component {
	state = { game: {} };

	componentDidMount() {
		fetch("/game")
			.then(res => res.json())
			.then(game => this.setState({ game }));
	}

	render() {
		const { game } = this.state;

		return (
			<div className="App">
				<h1>{game.name}</h1>
				<p>{game.description}</p>
			</div>
		);
	}
}

export default App;
