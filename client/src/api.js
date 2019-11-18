import io from "socket.io-client";
// const ip = "localhost";
const ip = "192.168.43.197";
const port = "3001";
const socket = io(`http://${ip}:${port}`);

// FIXME choose a better name
function apiTest() {
	socket.on("joined", output => console.log(output));
	socket.emit("join", "Billy");
}

function send() {
	socket.emit("join", "Franky");
}

export { apiTest, send };
