const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport')
var multer  = require('multer')
var path  = require('path')
const app = express()
var cors = require('cors')
var config = require('./config.json')
const PORT = config.port



// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())


app.use(cors())
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', require('./routes/user'))
app.use('/audio', require('./routes/audio'))

app.use(express.static(__dirname + '/public'))

if(config.environment == "production") {
	console.log("Production")
	app.use(express.static(path.join(__dirname, 'build')));
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '/build', 'index.html'))
	})
}

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
