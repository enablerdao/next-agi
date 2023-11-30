// pages/api/listFiles.js
import fs from 'fs';
import path from 'path';

const FILES_DIR = './';

export default function handler(req, res) {
  if (req.method === 'GET') {
    fs.readdir(FILES_DIR, (err, files) => {
      if (err) {
        res.status(500).json({ error: 'Error listing files', details: err.message });
      } else {
        res.status(200).json({ files });
      }
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
