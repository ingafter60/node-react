const express = require("express");
const app = express();

// import routes
const {getPosts} = require('./routes/post');

app.get("/", getPosts);

const port = 8000;
app.listen(port, () => {
	console.log(`Node api server is listening on port: ${port}`);
});