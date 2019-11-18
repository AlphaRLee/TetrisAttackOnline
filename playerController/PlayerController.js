import Player from "./Player";
import PlayerList from "./PlayerList";
import Lobby from "./Lobby";

class PlayerController extends PlayerList {
	constructor() {
		this.lobby = new Lobby();
	}

	setPlayerName(player, name) {
		player.name = name;
	}

	addPlayerToLobby(player) {
		this.lobby.addPlayer(player);
	}
}

export default PlayerController;
