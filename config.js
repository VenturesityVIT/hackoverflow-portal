module.exports = {
	db_url: process.env.NODE_ENV === 'development' ? 'mongodb://127.0.0.1:27017/students' : 'mongodb://admin:admin@ds249128.mlab.com:49128/hackoverflow',
	port: '8000' || process.env.PORT,
	enableCors: true
}