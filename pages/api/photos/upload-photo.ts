import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';
import formidable from 'formidable-serverless';

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'your_cloud_name',
  api_key: 'your_api_key',
  api_secret: 'your_api_secret',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    const result = await cloudinary.v2.uploader.upload(files.file.filepath, { folder: fields.folderName });
    res.status(200).json(result);
  });
};