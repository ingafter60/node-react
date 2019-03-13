const express = require("express");
const app = express();
const morgan = require("morgan");

// import routes
const {getPosts} = require('./routes/post');

// middleware
app.use(morgan("dev"));

app.get("/", getPosts);

const port = 8000;
app.listen(port, () => {
	console.log(`Node api server is listening on port: ${port}`);
});