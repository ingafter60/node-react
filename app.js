const express = require("express");
const app = express();
const morgan = require("morgan");
const router = express.Router();

// import routes
const postRoutes = require('./routes/post');

// middleware
app.use(morgan("dev"));

app.use("/", postRoutes);

const port = 8000;
app.listen(port, () => {
	console.log(`Node api server is listening on port: ${port}`);
});