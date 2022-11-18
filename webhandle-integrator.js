const integrate = (router, options) => {
	options = Object.assign({
		infoUrl: '/info'	
		, debugUrl: '/debug'	
		, errorUrl: '/error'	
		, infoHandler: (msg) => {
			console.log(msg)
		}
		, errorHandler: (msg) => {
			console.error(msg)
		}
		, debugHandler: (msg) => {
			console.log(msg)
		}
	}, options)
	router.post(options.infoUrl, (req, res, next) => {
		options.infoHandler(req.body)
		res.end('success')
	})
	router.post(options.debugUrl, (req, res, next) => {
		options.debugHandler(req.body)
		res.end('success')
	})
	router.post(options.errorUrl, (req, res, next) => {
		options.errorHandler(req.body)
		res.end('success')
	})
}

module.exports = integrate
