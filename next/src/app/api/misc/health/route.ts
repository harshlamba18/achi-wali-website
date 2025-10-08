import { NextResponse } from 'next/server';
import createHandler from '@/lib/handler';
import connectToDatabase from '@/lib/database/db';
import { verifySMTPConnection } from '@/lib/utils/email';

const GET = createHandler({
    controller: async () => {
        let dbConnected = false;
        let smtpConnected = false;

        try {
            const connection = await connectToDatabase();

            if (connection.connections[0].readyState === 1) {
                dbConnected = true;
            }
        } catch { }

        try {
            await verifySMTPConnection();

            smtpConnected = true;
        } catch { }

        const responseData = {
            serverStatus: "ONLINE",
            databaseConnection: dbConnected ? "CONNECTED" : "DISCONNECTED",
            smtpConnected: smtpConnected ? "CONNECTED" : "DISCONNECTED",
        };

        // Return 503 Service Unavailable if critical services are down
        // Database is critical, SMTP is not critical for basic functionality
        if (!dbConnected) {
            return NextResponse.json(responseData, { status: 503 });
        }

        // Return 200 OK if all critical services are healthy
        return NextResponse.json(responseData, { status: 200 });
    }
});

export { GET };
