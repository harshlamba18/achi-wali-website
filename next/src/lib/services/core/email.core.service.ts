import sendEmail from "@/lib/utils/email";


const sendOTPEmail = async (to: string, otp: string): Promise<void> => {
    const subject = "Your One-Time Verification Code - CGS, IIT Kharagpur";

    const text = `
Dear User,

You have requested a one-time password (OTP) to verify your identity.

Your OTP is: ${otp}

This code is valid for the next 10 minutes. Please do not share it with anyone for security reasons.

If you did not initiate this request, you may safely ignore this message.

Best regards,  
CGS,
IIT Kharagpur
  `.trim();

    const html = `
        <div style="max-width: 600px; margin: 40px auto; padding: 40px; background-color: #ffffff; border-radius: 10px; font-family: 'Segoe UI', Roboto, Arial, sans-serif; color: #333333; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
            <h1 style="margin-top: 0; font-size: 24px; color: #ec4899;">Verification Code</h1>

            <p style="font-size: 16px; line-height: 1.6;">
            Dear User,
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
            You have requested a one-time password (OTP) to verify your identity.
            </p>

            <div style="font-size: 28px; font-weight: bold; background-color: #fce7f3; color: #be185d; padding: 18px; text-align: center; letter-spacing: 4px; border-radius: 8px; margin: 30px 0;">
            ${otp}
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
            This code is valid for the next <strong>10 minutes</strong>. Please do not share it with anyone to ensure the security of your account.
            </p>

            <p style="font-size: 16px; line-height: 1.6;">
            If you did not initiate this request, you may safely ignore this message.
            </p>

            <p style="font-size: 16px; line-height: 1.6; margin-top: 40px;">
            Best regards,<br>
            <strong>CGS,</strong><br>
            Indian Institute of Technology Kharagpur
            </p>

            <div style="font-size: 12px; color: #999999; margin-top: 50px; text-align: center;">
            &copy; ${new Date().getFullYear()} CGS, IIT Kharagpur. All rights reserved.
            </div>
        </div>
    `;

    await sendEmail({
        to,
        subject,
        text,
        html
    });
}

export {
    sendOTPEmail
};
