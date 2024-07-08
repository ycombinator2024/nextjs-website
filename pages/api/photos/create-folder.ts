import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folderName } = req.body;
  try {
    await cloudinary.api.create_folder(folderName);
    res.status(201).json({ message: 'Folder created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create folder in Cloudinary' });
  }
}