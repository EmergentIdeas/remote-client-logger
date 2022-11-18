function createLogger(urlPrefix) {
	let remoteLogger = {
		info: (msg) => {
			return fetch(urlPrefix + 'info', {
				method: 'POST'
				, headers: {
					'Content-Type': 'application/json'
				}
				, body: JSON.stringify(msg)
			})
		}
		, error: (msg) => {
			return fetch(urlPrefix + 'error', {
				method: 'POST'
				, headers: {
					'Content-Type': 'application/json'
				}
				, body: JSON.stringify(msg)
			})
		}
		, debug: (msg) => {
			return fetch(urlPrefix + 'debug', {
				method: 'POST'
				, headers: {
					'Content-Type': 'application/json'
				}
				, body: JSON.stringify(msg)
			})
		}
	}
	return remoteLogger
}



module.exports = createLogger
