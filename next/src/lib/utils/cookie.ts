import { ICookieOptions } from "../types/response.types";
import getEnvVariable from "./envVariable";


const cookieOptions = {
    jwt: (() => {
        const httpsEnforced = getEnvVariable("HTTPS_ENFORCED", true);

        let options: ICookieOptions = {
            maxAge: 2700000,
            httpOnly: true,
            secure: true,
            sameSite: "strict",
        }

        if (httpsEnforced === "false") {
            options.httpOnly = false;
        }

        return options;
    })(),
}

export { cookieOptions };

