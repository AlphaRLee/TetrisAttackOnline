import io from "socket.io-client";
const socket = io();

// FIXME choose a better name
function apiTest() {
	socket.emit("join", "Frank");
}

export { apiTest };
