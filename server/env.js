var path = require('path'),
	rootPath = path.normalize(__dirname + '/../../');

module.exports = {
		rootPath: rootPath,
		db: 'mongodb://localhost/bloggingChamp',
		port: process.env.PORT || 3000
	}
