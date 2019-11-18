const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// Localhost port
const port = 3001;

const app = express();

// Server instance
const server = http.createServer(app);

//Create socket using the instance of the server
const io = socketIO(server);

// Socket IO handler
io.on("connection", socket => {
	console.log("User connected");
	socket.on("disconnect", () => {
		console.log("User disconnected");
	});

	socket.on("join", name => {
		console.log("join message received from " + name);
		socket.emit("joined", `Hello ${name}, you have successfully joined`);
	});

	socket.on("submitPlayerName", name => {
		console.log(`Player ${name} has joined the lobby.`);
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
