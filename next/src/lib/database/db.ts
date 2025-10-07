import mongoose, { ClientSession } from "mongoose";
import getEnvVariable from "@/lib/utils/envVariable";
import log, { ELogLevel } from "@/lib/utils/logger";
import AppError from "../utils/error";


if (!global.mongooseCache) {
    global.mongooseCache = { conn: null, promise: null };
}

const connectToDatabase = async (): Promise<typeof mongoose> => {
    if (global.mongooseCache.conn) {
        return global.mongooseCache.conn;
    }

    if (!global.mongooseCache.promise) {
        log(ELogLevel.INFO, "MongoDB: Creating new database connection...");
        try {
            global.mongooseCache.promise = mongoose.connect(
                getEnvVariable("MONGODB_CONNECTION_URI", true),
                {
                    bufferCommands: false,
                }
            );
            const mongooseInstance = await global.mongooseCache.promise;
            global.mongooseCache.conn = mongooseInstance;
            return mongooseInstance;
        } catch (error) {
            global.mongooseCache.promise = null;
            log(ELogLevel.FATAL, "MongoDB: Couldn't connected to database.")
            throw new AppError("Couldn't connected to database.");
        }
    }
    else {
        log(ELogLevel.INFO, "MongoDB: Awaiting existing connection promise.");
        return await global.mongooseCache.promise;
    }
};

const withSession = async <T>(
    operation: (dbSession: ClientSession) => Promise<T>
): Promise<T> => {
    await connectToDatabase();

    const dbSession = await mongoose.startSession();

    try {
        let result: T;

        await dbSession.withTransaction(async () => {
            result = await operation(dbSession);
        });

        return result!;
    } catch (error) {
        throw new AppError('Transaction failed.', { error });
    } finally {
        await dbSession.endSession();
    }
}


export default connectToDatabase;
export { withSession };

