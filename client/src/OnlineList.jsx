import React, { Component } from "react";

class OnlinePlayerList extends Component {
	state = { onlinePlayers: [] };

	addPlayer = player => {
		this.setState(state => ({
			onlinePlayers: [...state.onlinePlayers, player]
		}));
	};

	removePlayer = player => {
		this.setState(state => ({
			onlinePlayers: state.onlinePlayers.filter(p => p !== player)
		}));
	};

	render() {
		const { onlinePlayers } = this.state;

		return (
			<ul className="list-group">{this.renderPlayers(onlinePlayers)}</ul>
		);
	}

	renderPlayers(onlinePlayers) {
		return onlinePlayers.map(player => (
			<li className="list-group-item">player</li>
		));
	}
}

export default OnlinePlayerList;
