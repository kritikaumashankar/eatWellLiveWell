import dbConnect from '../../../utils/dbConnect';
import Reviews from '../../../models/Reviews';

dbConnect();

export default async (req,res) =>{
  const{
    query: {id},
    method
  } = req;

  switch(method) {
    case 'GET':
      try{
          const review = await Reviews.findById(id);
          if(!review){
            return res.status(400).json({success: false});
          }

          res.status(200).json({success: true, data: review});
      }catch{
        res.status(400).json({success: false});
      }
      break;
    case 'PUT':
      try{
        const review = await Reviews.findByIdAndUpdate(id,req.body,{
          new: true,
          runvalidators: true
        });

        if(!review){
          return res.status(400).json({success: false});
        }

        res.status(200).json({success: true, data: review});
      }catch{
        res.status(400).json({success: false});
      }
      break;
      case 'DELETE':
        try{
          const deleteReview = await Reviews.deleteOne({_id: id});

          if(!deleteReview){
            return res.status(400).json({success: false});
          }

          res.status(200).json({success: true, data: {}});
        }catch{
          res.status(400).json({success: false});
        }
        break; 
      default: 
        res.status(400).json({success: false});
        break;

  }
}