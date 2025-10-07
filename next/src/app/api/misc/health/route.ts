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
        } catch (error) { }

        try {
            await verifySMTPConnection();

            smtpConnected = true;
        } catch (error) { }

        return NextResponse.json({
            serverStatus: "ONLINE",
            databaseConnection: dbConnected ? "CONNECTED" : "DISCONNECTED",
            smtpConnected: smtpConnected ? "CONNECTED" : "DISCONNECTED",
        });
    }
});

export { GET };
