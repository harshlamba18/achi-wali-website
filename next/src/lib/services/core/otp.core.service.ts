import otpGenerator from 'otp-generator';
import AppError from '@/lib/utils/error';


const generateOTP = (): string => {
    try {
        return otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
            digits: true,
        });
    } catch (error) {
        throw new AppError("Failed to generate OTP.", {
            error
        });
    }
}

export { generateOTP };
