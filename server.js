const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

// Localhost port
const port = 4001;

const app = express();

// Server instance
const server = http.createServer(app);

//Create socket using the instance of the server
const io = socketIO(server);

// Socket IO stuff
io.on("connection", socket => {
	console.log("User connected");
	socket.on("disconnect", () => {
		console.log("User disconnected");
	});
});

server.listen(port, () => console.log(`Listening on port ${port}`));
