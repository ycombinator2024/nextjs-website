import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

// Configure Cloudinary with your cloud name, API key, and API secret
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { folderName } = req.body;
  const result = await cloudinary.v2.api.create_folder(folderName);
  res.status(200).json(result);
};