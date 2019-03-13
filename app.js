const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("hello ...");
});

const port = 8000;
app.listen(port, () => {
	console.log(`Node api server is listening on port: ${port}`);
});