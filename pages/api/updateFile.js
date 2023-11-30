// pages/api/updateFile.js
import fs from 'fs';
import path from 'path';

const FILES_DIR = './';

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const { filename, content } = req.body;
      const filePath = path.join(FILES_DIR, filename);
      fs.writeFileSync(filePath, content, 'utf8');
      res.status(200).json({ message: 'File updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error updating file' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
