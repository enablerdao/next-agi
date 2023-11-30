// pages/api/deleteFile.js
import fs from 'fs';
import path from 'path';

const FILES_DIR = './';

export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    try {
      const { filename } = req.query;
      const filePath = path.join(FILES_DIR, filename);
      fs.unlinkSync(filePath);
      res.status(200).json({ message: 'File deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error deleting file' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
