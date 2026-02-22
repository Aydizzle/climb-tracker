import { google } from 'googleapis';

export default async function handler(req, res) {
  // Check if it's a GET request
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
const { climb, grade, notes, user } = req.body;

// Set up authentication
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

const date = new Date().toLocaleDateString(); // Get today's date

await sheets.spreadsheets.values.append({
  spreadsheetId: process.env.SHEET_ID,
  range: 'Climbs!A:G',
  valueInputOption: 'USER_ENTERED',
  resource: {
    values: [[date, climb, grade, notes, user]],
  },
});

// Send it back to the user
return res.status(200).json({ success: true });
}