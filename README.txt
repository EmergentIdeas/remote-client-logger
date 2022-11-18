Provides a way to log messages and errors from the browser.


On the server side, use like:

```
const remoteClientLogger = require('@dankolz/remote-client-logger')
let loggingRouter = express.Router()
remoteClientLogger(loggingRouter, {
	infoHandler: (msg) => {
		log.info(msg)
	}
	, errorHandler: (msg) => {
		log.error(msg)
	}
	, debugHandler: (msg) => {
		log.debug(msg)
	}
})

router.use('/remote-logging', loggingRouter)
```


On the client side:
```
let remoteLogger = require('@dankolz/remote-client-logger/client-js/logging')('/remote-logging/')
remoteLogger.info({
	msg: 'page start'
})
window.onerror = function (msg, source, lineNo, columnNo, error) {
	let report = {
		messageType: 'browser-error',
		msg: msg,
		source: source,
		lineNo: lineNo,
		columnNo: columnNo,
		error: error,
	}
	if(error) {
		report.stack = error.stack
	}
	remoteLogger.error(report)
 }
```


