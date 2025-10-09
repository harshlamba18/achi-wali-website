class AppError extends Error {
    message: string;
    peek: object;

    constructor(message: string, peek: object = {}) {
        super(message);

        this.message = message;
        this.peek = peek;

        Error.captureStackTrace(this, AppError);
    }
}

export default AppError;

