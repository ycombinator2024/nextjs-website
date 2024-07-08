import { v2 as cloudinary } from 'cloudinary';
import type { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folderName, file } = req.body;
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: folderName
    });
    res.status(201).json({ imageUrl: uploadResponse.secure_url });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload photo to Cloudinary' });
  }
}