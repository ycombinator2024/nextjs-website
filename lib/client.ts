import { Cloudinary } from '@cloudinary/url-gen';
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  }
});
export default cloudinary;import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma
