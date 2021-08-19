const Hotel = require( '../models/hotel');
const fs = require('fs');


const getHotels = async (req,res) => {
    try{
        let all = await Hotel.find({})
      .exec();
    res.json(all);

    }catch(err){
        res.json(err)
    }
}

const createHotel = async(req, res, next) => {
    // try {
    //   let fields = req.fields;
    //   console.log(fields)
    //   const {title,location,content,price} = req.body
    //   let files = req.files;
  
    //   let hotel = new Hotel({title,location,content,price});
    //   hotel.postedBy = req.user.id;
  
    //   if(files.image) {
    //     hotel.image.data = fs.readFileSync(files.image.path);
    //     hotel.image.contentType = files.image.type;
    //   }
  
    //   hotel.save((err, result) => {
    //     if(err) {
    //         console.log(err)
    //       return res.status(400).send('Error saving');
          
    //     }
    //     res.json(result);
    //   });
    // } catch(err) {
    //   console.log(err);
    // }
    try {
      let file = req.file; 

      // console.log(file)

      let {title,content,price,location} = req.body
  
      let hotel = new Hotel({title,content,location,price});
      hotel.postedBy = req.user.id;
  
      if(file) {
        hotel.image.data = fs.readFileSync(file.path);
        hotel.image.contentType = file.mimetype;
      }
  
      hotel.save((err, result) => {
        if(err) {
          console.log(err)
          return res.status(400).send('Error saving');
        }
        res.json(result);
      });
    } catch(err) {
      next(err);
    }
  };
  module.exports = {createHotel,getHotels};