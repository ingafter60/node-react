const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')
dotenv.config()

// db connection
	// if using mongodb as local db
	// MONGO_URI=mongodb://localhost/dbname
	
mongoose
	.connect(
		process.env.MONGO_URI, 
		{ useNewUrlParser: true}
	)
	.then(() => console.log('DB Connected'))

// if db connection error
mongoose.connection.on('error', err => {
	console.log(`DB connection error: ${err.message}`)
})

// import routes
const postRoutes = require('./routes/post')

// middleware
app.use(morgan('dev'))

app.use('/', postRoutes)

// const port = 8000
const port = process.env.PORT || 8000
app.listen(port, () => {
	console.log(`Node api server is listening on port: ${port}`)
})