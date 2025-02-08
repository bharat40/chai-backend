const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))  // errors are automatically passed to express middleware using next()
    }
}

export default asyncHandler;

/**
 * Express does not automatically catch errors in async functions. If an async route throws an error, you must handle it manually or use a middleware.
 * asyncHandler is a higher-order function (a function that returns another function).
 * It takes an async function (requestHandler) and ensures that any errors are passed to Express's next() function, which calls the error-handling middleware.
 * Prevents try-catch boilerplate in every route.
 */