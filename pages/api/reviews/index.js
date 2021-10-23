import dbConnect from '../../../utils/dbConnect';
import Reviews from '../../../models/Reviews';

dbConnect();

export default async (req,res) =>{
  const { method } = req;

  switch(method){
    case 'GET':
      try{
          const reviews = await Reviews.find({}).sort({_id: -1});
          res.status(200).json({ success: true, data: reviews})
      }catch(error){
        res.status(400).json({ success: false})
      }
      break;

    case 'POST': 
      try{
        const review = await Reviews.create(req.body);
        res.status(200).json({ success: true, data: review});
      }catch(error){
        console.log(error)
        res.status(400).json({ success: false});
      }
      break;
    default:
      res.status(400).json({ success: false});
      break;
  }
}