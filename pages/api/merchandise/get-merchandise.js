import cloudinary from '../../lib/cloudinary';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    const {page = 1, limit = 10} = req.query;
    try {
      const {resources} = await cloudinary.search
        .expression('folder:merch')
        .sort_by('public_id','desc')
        .max_results(limit)
        .next_cursor(page)
        .execute();
      const formattedResources = resources.map(({public_id, secure_url, context}) => ({
        id: public_id,
        imgUrl: secure_url,
        title: context.custom.title,
        description: context.custom.description,
        price: context.custom.price,
      }));
      res.status(200).json(formattedResources);
    } catch (error) {
      console.error('Error fetching merchandise:', error);
      res.status(500).json({error: 'Error fetching merchandise'});
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}