import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { wallId, gradeCounts } = req.body;

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
    range: 'CurrentClimbCounts!A:C',
  });

  const rows = response.data.values || [];


  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowWallId = row[0];
    const rowGrade = row[1];

    if (rowWallId === wallId && gradeCounts[rowGrade] !== undefined) {
      rows[i][2] = gradeCounts[rowGrade];
    }
  }


  await sheets.spreadsheets.values.update({
    spreadsheetId: process.env.SHEET_ID,
    range: 'CurrentClimbCounts!A:C',
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: rows
    }
  });

  return res.status(200).json({ success: true });
}