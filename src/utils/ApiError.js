class ApiError extends Error {
    constructor(statusCode, message = "Something Went Wrong", errors = [], stack = "") {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export default ApiError


/** 
 * This is a custom error class in JavaScript that extends the built-in Error class. It is used to handle API errors in a structured way.
*/