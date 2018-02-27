module.exports = {
	// Heroku has been configured with the MONGO_URL set to production mlab deplpyment
	db_url: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/hackoverflow',
	port: process.env.PORT || '8000',
	enableCors: true,
	mailer: {
		email: process.env.MAIL_ID || 'ajmalsiddiqui414@gmail.com',
		pass: process.env.MAIL_PASS || 'alfasierra',
		service: 'Gmail',
		from: 'Team HackOverflow',
		subject: 'Registration Confirmation',
		text: 'Hello there!\n\nYour registration for HackOverflow has been confirmed and we hope to see you there!\n\nCheers\nTeam HackOverflow'
	}
}