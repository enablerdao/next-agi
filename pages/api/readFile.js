// pages/api/readFile.js
import fs from 'fs';
import path from 'path';

const FILES_DIR = './';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { filename } = req.query;
      const filePath = path.join(FILES_DIR, filename);
      const data = fs.readFileSync(filePath, 'utf8');
      res.status(200).json({ content: data });
    } catch (error) {
      res.status(500).json({ error: 'Error reading file', details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
