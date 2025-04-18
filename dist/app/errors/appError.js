"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(statusCode, message, options) {
        super(message);
        this.statusCode = statusCode;
        this.errorType = options === null || options === void 0 ? void 0 : options.errorType;
        if (options === null || options === void 0 ? void 0 : options.stack) {
            this.stack = options.stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.default = AppError;
