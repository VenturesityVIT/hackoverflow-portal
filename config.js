module.exports = {
	// Heroku has been configured with the MONGO_URL set to production mlab deplpyment
	db_url: process.env.MONGO_URL,
	port: process.env.PORT || '8000',
	enableCors: true
}