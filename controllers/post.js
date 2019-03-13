exports.getPosts = (req, res) => {
	
	//res.send("hello ... from controller");

	res.json({
		posts: [
			{ title: "First post"},
			{ title: "Second post"}
		]
	});
};
