import Player from "./Player";

class PlayerList {
	players = [];

	addPlayer(player) {
		this.players.push(player);
	}

	removePlayer(player) {
		index = this.players.indexOf(player);
		this.players.splice(index, 1);
	}

	removePlayerBySocket(socket) {
		this.removePlayer(this.getPlayer(socket));
	}

	/**
	 * Get the first player that has the input socket
	 */
	getPlayer(socket) {
		return this.players.find(player => player.socket === socket);
	}
}

export default PlayerList;
