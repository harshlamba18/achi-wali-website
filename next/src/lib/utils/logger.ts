import { ELogLevel } from "../types/index.types";
import { safeJSONStringify } from "./serialize";

const currentLogLevel = (() => {
    const logLevel = (process.env.BACKEND_LOG_LEVEL || "INFO").toUpperCase();

    if (logLevel in ELogLevel && typeof ELogLevel[logLevel as keyof typeof ELogLevel] === "number") {
        return ELogLevel[logLevel as keyof typeof ELogLevel];
    }

    return ELogLevel.INFO;
})();

const log = (logLevel: ELogLevel, message: string, peek: any = null) => {
    if (logLevel > currentLogLevel) return;

    const timestamp = new Date().toISOString();
    const formattedMessage = `${timestamp} [${ELogLevel[logLevel]}]: ${message}`;

    console.log(formattedMessage);

    if (peek) {
        console.log(safeJSONStringify(peek));
    }
}

export default log;
export { ELogLevel };
