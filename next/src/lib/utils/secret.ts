import getEnvVariable from "./envVariable";

let cachedJWTSecret: Uint8Array | null = null;

const getJWTSecretKey = (): Uint8Array => {
    if (cachedJWTSecret) {
        return cachedJWTSecret;
    }

    cachedJWTSecret =
        new TextEncoder().encode(getEnvVariable("JWT_SECRET_KEY", true));

    return cachedJWTSecret;
};

export { getJWTSecretKey };
