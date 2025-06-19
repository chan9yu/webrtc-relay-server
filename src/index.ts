import express from "express";
import Turn from "node-turn";

const app = express();
const httpPort = 3000;

const turnServer = new Turn({
	listeningPort: 3478,
	authMech: "long-term",
	debugLevel: "WARN"
});

turnServer.start();

app.get("/api/turn-credentials", (req, res) => {
	const hostHeader = req.get("host");
	if (!hostHeader) {
		res.status(400).json({ error: "Host header is required" });
		return;
	}

	const username = `user_${Date.now()}`;
	const password = Math.random().toString(36).slice(2, 10);
	turnServer.addUser(username, password);

	const hostname = hostHeader.split(":")[0];
	const urls = [`turn:${hostname}:3478?transport=udp`, `turn:${hostname}:5349?transport=tcp`];

	res.json({ urls, username, credential: password });
});

app.listen(httpPort, () => {
	console.log(`HTTP API listening on port ${httpPort}`);
});
