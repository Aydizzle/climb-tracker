import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error : 'Method not allowed'});
        
    }
    const auth = new google.auth.GoogleAuth({
       
        credentials: {
            type: 'service_account',
            project_id: process.env.GOOGLE_PROJECT_ID,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },

        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

const sheets = google.sheets({ version: 'v4', auth });

const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: 'WallSections!A2:B',

});

    const rows = response.data.values || [];

    const walls = rows.map(row => ({
        id: row[0],
        name: row[1]
    }));

    return res.status(200).json({ walls });

}