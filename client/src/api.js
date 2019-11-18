import io from "socket.io-client";
const socket = io("http://localhost:3001");

// FIXME choose a better name
function apiTest() {
	socket.on("joined", output => console.log(output));
	socket.emit("join", "Billy");
}

function send() {
	socket.emit("join", "Franky");
}

export { apiTest, send };
