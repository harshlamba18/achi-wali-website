import bcrypt from "bcryptjs";
import AppError from "@/lib/utils/error";


const hashString = async (str: string) => {
    const saltRounds = 10;

    try {
        return await bcrypt.hash(str, await bcrypt.genSalt(saltRounds));
    } catch (error) {
        throw new AppError("Could not generate string hash.", {
            str,
            error
        });
    }
};


const verifyStringAndHash = async (
    str: string,
    hashedStr: string
) => {
    try {
        return await bcrypt.compare(str, hashedStr);
    } catch (error) {
        throw new AppError("Could not verify string with its hash.", {
            str,
            hashedStr,
            error
        });
    }
};


export { hashString, verifyStringAndHash };
