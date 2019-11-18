import React, { Component } from "react";

class Lobby extends Component {
	state = {};

	handleSubmit = event => {
		const { playerName } = event.target;
		event.preventDefault();
	};

	render() {
		return (
			<form>
				<div className="form-group">
					<label for="player-name-input">Enter your name</label>
					<input
						type="text"
						name="playerName"
						className="form-control"
						id="player-name-input"
						placeholder="Enter name"
					/>
				</div>
				<button
					type="submit"
					class="btn btn-primary"
					onClick={this.handleSubmit}
				>
					Submit
				</button>
			</form>
		);
	}
}

export default Lobby;
